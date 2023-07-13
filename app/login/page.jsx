"use client"
import Image from 'next/image'
import React from 'react'
import logo from '@/assets/Logo.svg'
import style from "./loginpage.module.scss";
import axios from "axios"
export default function LoginPage() {
    const [user, setUser] = React.useState({
        "username": "",
        "flatNo": "",
        "vNumber": "",
        "pslot": "",
        "level": "",
        "phoneNo": "",
        "email": "",
    });

    async function onSubmittest(event) {
        try {
            event.preventDefault()
            const response = await axios.post("/api/user", user);

        } catch (error) {

            console.log("Login failed", error.message);
            // toast.error(error.message);
        }
    }

    return (
        <div className='flex flex-col items-center px-10'>
            <Image src={logo} alt='logo' width={1} height={1} className='py-10 w-auto h-1/4' />
            <div className="text-black text-xl font-medium py-5">You need to register with us </div>

            <form onSubmit={onSubmittest} className={`${style.LoginBg} p-5 mb-10  w-full bg-primary rounded-xl gap-2 flex flex-col `}>
                <div className="w-full h-20 flex-col justify-center items-start gap-1 inline-flex">
                    <div className="text-white text-xl font-medium">Full Name</div>
                    <input required={true} name='username' className="w-full h-10 p-2 bg-white rounded-lg" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                </div>
                <div className="w-full h-20 flex-col justify-center items-start gap-1 inline-flex">
                    <div className="text-white text-xl font-medium">Flat No  / Office shop No.</div>
                    <input required={true} name='flatNo' className="w-full h-10 p-2 bg-white rounded-lg" value={user.flatNo} onChange={(e) => setUser({ ...user, flatNo: e.target.value })} />
                </div>
                <div className="w-full h-20 flex-col justify-center items-start gap-1 inline-flex">
                    <div className="text-white text-xl font-medium">Vehicle Number</div>
                    <input required={true} name='vNumber' className="w-full h-10 p-2 bg-white rounded-lg" value={user.vNumber} onChange={(e) => setUser({ ...user, vNumber: e.target.value })} />
                </div>
                <div className="w-full h-20 flex-col justify-center items-start gap-1 inline-flex">
                    <div className="text-white text-xl font-medium">Packing Slot</div>
                    <input required={true} name='pslot' className="w-full h-10 p-2 bg-white rounded-lg" value={user.pslot} onChange={(e) => setUser({ ...user, pslot: e.target.value })} />
                </div>
                <div className="w-full h-20 flex-col justify-center items-start gap-1 inline-flex">
                    <div className="text-white text-xl font-medium">Floor / Level</div>
                    <input required={true} name='level' className="w-full h-10 p-2 bg-white rounded-lg" value={user.level} onChange={(e) => setUser({ ...user, level: e.target.value })} />
                </div>
                <div className="w-full h-20 flex-col justify-center items-start gap-1 inline-flex">
                    <div className="text-white text-xl font-medium">Whatsapp Contact No.</div>
                    <input required={true} name='phoneNo' className="w-full h-10 p-2 bg-white rounded-lg" value={user.phoneNo} onChange={(e) => setUser({ ...user, phoneNo: e.target.value })} />
                </div>
                <div className="w-full h-20 flex-col justify-center items-start gap-1 inline-flex">
                    <div className="text-white text-xl font-medium">Email -Id</div>
                    <input name='email' className="w-full h-10 p-2 bg-white rounded-lg" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                </div>
                <button type='submit' className="w-full p-5 mt-5 bg-amber-500 rounded-lg justify-center text-white text-xl font-bold items-center  inline-flex">
                    Submit
                </button>

            </form>
        </div >
    )
}
