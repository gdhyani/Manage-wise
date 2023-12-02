"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { HiOutlinePlus } from "react-icons/hi";

export default function Faq() {
    const content = [
        {
            title: "What is Manage Wise and what does it offer?",
            line: "Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.",
        },
        {
            title: "Is Manage Wise suitable for small businesses and larger enterprises alike?",
            line: "Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes.",
        },
        {
            title: "Can I access Manage Wise from different devices and platforms?",
            line: "Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices.",
        },
        {
            title: "What kind of support options do you offer to users?",
            line: "We provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using Manage Wise.",
        },
        {
            title: "How secure is the data stored within Manage Wise?",
            line: "Your data's security is a top priority. Manage Wise employs robust data encryption and follows industry best practices to ensure your sensitive information is safe and protected.",
        },
    ];

    return (
        <Accordion className="text-left " variant="splitted">
            {content.map((e) => (
                <AccordionItem
                    className={`bg-[#f7f8fd] text-2xl px-5 py-2 rounded-2xl font-semibold text-left`}
                    key={content.indexOf(e)}
                    indicator={({ isOpen }) => (isOpen ? <h1 className="text-3xl font-medium">x</h1> : <HiOutlinePlus/>)}
                    aria-label={e.title}
                    title={e.title}
                >
                    <h1 className="text-base">{e.line}</h1>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
