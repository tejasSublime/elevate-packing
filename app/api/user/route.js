import { userRegistrationMsg } from "@/data/msg"
import { NextResponse, NextRequest } from "next/server"

import axios from "axios";
export async function POST(req) {
    try {
        const reqBody = await req.json()
        const { username, flatNo, vNumber, pSlot, level, phoneNo, email } = reqBody
        var authKey = process.env.WHATSAUTH_KEY;
        var msg = await userRegistrationMsg({ name: username })

        var res = await axios.post("https://cloud.rapbooster.com/api/sendMsg", {
            msg: msg,
            apiAuthkey: authKey,
            receiverMobile: `91${phoneNo}`
        })

        return NextResponse.json(res.data, { status: res.status })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: error.respones.data.error }, { status: 500 })
    }

};