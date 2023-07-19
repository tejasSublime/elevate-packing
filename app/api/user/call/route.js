import { userRegistrationMsg } from "@/data/msg"
import { NextResponse, NextRequest } from "next/server"

import axios from "axios";
export async function POST(req) {
    try {
        const reqBody = req
        const { username, flatNo, vNumber, pSlot, level, phoneNo, email } = reqBody
        const msg = await userRegistrationMsg({ name: username })
        
        // var res = await axios.post("https://cloud.rapbooster.com/api/sendMsg", {
        //     msg: msg,
        //     apiAuthkey: authKey,
        //     receiverMobile: phoneNo
        // })

        return NextResponse.json(`Msg send:`, { status: res.status })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: error.respones.data.error }, { status: 500 })
    }

};