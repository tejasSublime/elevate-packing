'use client'
import Image from 'next/image'
import React from 'react'
import style from './signupage.module.scss'
import logo from '@/assets/Logo.svg'

export default function OperatorSignUp() {
    const [user, setUser] = React.useState({
        username: "",
        flatNo: "",
        vNumber: "",
        pslot: "",
        level: "",
        phoneNo: "",
        email: "",
    });
    return (
        <div className='flex flex-col items-center px-10'>
            <div className="flex flex-row my-10 items-center justify-center">
                <Image src={logo} alt='logo' width={1} height={1} className='w-2/5 ' />

                <div className={`${style.BtnGrp} gap-3 flex flex-row ml-auto`}>
                    <button className=" text-white text-2xl   px-4 py-2 rounded-lg bg-blue-900  font-bold">back</button>
                    <button className=" text-white text-2xl   px-4 py-2 rounded-lg  bg-amber-500  font-bold">Logout</button>
                </div>
            </div>

            <div className="text-black text-3xl font-medium py-5 ">Operator Login</div>

            <form className={`${style.LoginBg} p-5 mb-10  w-full bg-primary rounded-xl gap-2 flex flex-col `}>
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
                    <input type='number' required={true} name='level' className="w-full h-10 p-2 bg-white rounded-lg" value={user.level} onChange={(e) => setUser({ ...user, level: e.target.value })} />
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
            <div className={`${style.MobileBtnGrp} gap-3 flex flex-row mx-auto my-5`}>
                <button className=" text-white text-2xl   px-4 py-2 rounded-lg bg-blue-900  font-bold">back</button>
                <button className=" text-white text-2xl   px-4 py-2 rounded-lg  bg-amber-500  font-bold">Logout</button>
            </div>
        </div >
    )
}
