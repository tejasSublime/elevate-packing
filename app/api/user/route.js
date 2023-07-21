import { userRegistrationMsg } from "@/data/msg"
import { NextResponse, NextRequest } from "next/server"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import axios from "axios";



export async function POST(req) {
    try {
        const reqBody = await req.json()
        const { username, flatNo, vNumber, pslot, level, phoneNo, email } = reqBody
        var authKey = process.env.WHATSAUTH_KEY;
        var msg = await userRegistrationMsg({ name: username })

        await prisma.User.create({
            data: {
                "name": username,
                "email": email,
                "phoneNo": phoneNo,
                "flatNo": flatNo,
                "vNumber": vNumber,
                "pslot": pslot,
                "level": parseInt(level)
            },
        })

        const allUsers = await prisma.User.findMany()
        await prisma.$disconnect()
        // var res = await axios.post("https://cloud.rapbooster.com/api/sendMsg", {
        //     msg: msg,
        //     apiAuthkey: authKey,
        //     receiverMobile: `91${phoneNo}`
        // })
        return NextResponse.json(allUsers, { status: 200 })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: error.respones.data.error }, { status: 500 })
    }

};