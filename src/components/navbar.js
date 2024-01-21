"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdCircle, MdClose } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
export default function Navbar() {
    const [toggleMobile, setMobile] = useState(false);
    return (
        <main className="border-b bg-[#fdf2ec] px-4 py-4 md:px-6 md:py-3">
            {/* //windows */}
            <div className="hidden md:flex flex-row justify-between">
                <div className="flex">
                    <Image
                        className="w-[180px] pt-1 2xl:block hidden"
                        src="/logo.jpg"
                        width={400}
                        height={400}
                        alt="logo"
                    />
                    <Image
                        className="w-[45px]  sm:block 2xl:hidden hidden"
                        src="/logo2.jpg"
                        width={1000}
                        height={1000}
                        alt="logo"
                    />
                </div>
                <div className="flex align-middle gap-14 items-center">
                    <div className="flex items-center font-medium gap-7 text-base ">
                        <Link
                            className="hover:text-[#8247ff] transition-all"
                            href="#"
                        >
                            Features
                        </Link>
                        <MdCircle size={5} className="opacity-20" />
                        <Link
                            className="hover:text-[#8247ff] transition-all"
                            href="#"
                        >
                            FAQ
                        </Link>
                        <MdCircle size={5} className="opacity-20" />
                        <Link
                            className="hover:text-[#8247ff] transition-all"
                            href="#"
                        >
                            Pricing
                        </Link>
                        <MdCircle size={5} className="opacity-20" />
                        <Link
                            className="hover:text-[#8247ff] transition-all"
                            href="#"
                        >
                            Testimonials
                        </Link>
                    </div>
                    <button className="bg-white text-base hover:border hover:border-black border transition-all border-transparent text-black px-5 py-3 font-semibold rounded-lg">
                        Buy Template
                    </button>
                </div>
            </div>
            {/* mobile */}
            <div className="block border-black md:hidden">
                <div className="flex z-10 justify-between items-center">
                    <Image
                        className="w-[180px] z-20"
                        src="/logo.jpg"
                        width={400}
                        height={400}
                        alt="logo"
                    />
                    <button
                        onClick={() => {
                            setMobile(!toggleMobile);
                        }}
                        className={`z-20 outline-none bg-transparent ${
                            toggleMobile ? "hidden" : "block"
                        }`}
                    >
                        <HiOutlineMenu size={35} />
                    </button>
                    <button
                        onClick={() => {
                            setMobile(!toggleMobile);
                        }}
                        className={`z-20 outline-none bg-transparent ${
                            toggleMobile ? "block" : "hidden"
                        }`}
                    >
                        <MdClose size={35} />
                    </button>
                </div>
                <div
                    className={
                        toggleMobile
                            ? "flex h-full z-10 absolute font-medium top-0 left-0 right-0 bg-white text-center gap-8 pt-28 items-center text-black flex-col"
                            : "hidden"
                    }
                >
                    <Link
                        className="hover:text-[#8247ff] transition-all"
                        href="#"
                    >
                        Features
                    </Link>
                    <Link
                        className="hover:text-[#8247ff] transition-all"
                        href="#"
                    >
                        FAQ
                    </Link>
                    <Link
                        className="hover:text-[#8247ff] transition-all"
                        href="#"
                    >
                        Pricing
                    </Link>
                    <Link
                        className="hover:text-[#8247ff] transition-all"
                        href="#"
                    >
                        Testimonials
                    </Link>
                    <button className="bg-[#8247ff] text-white font-semibold transition-all hover:border-[#d2bffc] rounded-2xl py-3 border-8 mt-6 border-white w-11/12">
                        Buy Template
                    </button>
                </div>
            </div>
        </main>
    );
}
