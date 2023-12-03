"use client";
import React from "react";
import Ticker from "framer-motion-ticker";
// import {Ticker}
import Image from "next/image";
const data = [
    {
        name: "David",
        position: "Freelancer",
        src: "/photo1.jpg",
        message:
            "Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity",
    },
    {
        name: "Sarah",
        position: "Project Manager",
        src: "/photo4.jpg",
        message:
            "The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly.",
    },
    {
        name: "Emily",
        position: "Art Director",
        src: "/photo3.jpg",
        message:
            "Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations",
    },
    {
        name: "Alex",
        position: "IT Manager",
        src: "/photo2.jpg",
        message:
            "I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks.",
    },
];
// -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%);
export default function Testimonials() {
    return (
        <div className="relative ">
            <Ticker direction={1} className="" duration={70}>
                {data.map((item, index) => (
                    <div className="self-start border rounded-2xl mr-8 w-80 px-8 py-10">
                        <h1 className=" text-[20px] ">{item.message}</h1>
                        <div className="flex gap-2 flex-row mt-6">
                            <Image
                                src={item.src}
                                height={52}
                                width={52}
                                alt=""
                            />
                            <div>
                                <h1 className="text-lg font-semibold">
                                    {item.name}
                                </h1>
                                <h1>{item.position}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </Ticker>
            <div className="flex flex-row absolute top-0 left-0  w-full justify-between">
                <div className="md:bg-gradient-to-r from-white from-50% to-transparent  to-100% w-40 h-80 "></div>
                <div className="md:bg-gradient-to-r from-transparent to-white to-50%  w-40 h-80 "></div>
            </div>
        </div>
    );
}
