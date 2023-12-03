"use client";
import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { HiOutlinePlus } from "react-icons/hi";

// export default function Faq() {
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

// }
export default function Faq() {
    const [faq, setOpenFaq] = useState(false);
    function openFaq(evt) {
        setOpenFaq(evt);
    }
    return (
        // <Accordion className="text-left flex flex-col justify-between w-full" variant="splitted">
        //     {content.map((e) => (
        //         <AccordionItem
        //             className={`bg-[#f7f8fd] text-2xl flex flex-col justify-between px-5 py-2 rounded-2xl font-semibold text-left`}
        //             key={content.indexOf(e)}
        //             indicator={({ isOpen }) => (isOpen ? <h1 className="text-3xl font-medium">x</h1> : <HiOutlinePlus className="ml-auto"/>)}
        //             aria-label={e.title}
        //             title={e.title}
        //         >
        //             <h1 className="text-base">{e.line}</h1>
        //         </AccordionItem>
        //     ))}
        // </Accordion>
        <div className="flex flex-col w-full gap-3  ">
            {content.map((e) => (
                <div className="flex flex-col items-center justify-between px-5 py-4  bg-[#f7f8fd]  rounded-2xl">
                    <div onClick={(evt)=>(setOpenFaq(!faq))} className="flex flex-row w-full justify-between">
                        <h1  className="font-bold  text-2xl">
                            {e.title}
                        </h1>
                        <HiOutlinePlus className="" color="#8247ff" size={30} />
                    </div>

                    <h1 className={`${faq ? "block" : "hidden"} py-2 text-lg`}>{e.line}</h1>
                </div>
            ))}
        </div>
    );
    // return (
    //     <section className="flex flex-col mx-5 py-20">
    //         <div class="container flex flex-col justify-center p-4 mx-auto md:p-8 ">
    //             <div className="flex w-full justify-start sm:justify-center">
    //                 <p class="px-3 w-fit bg-redishpink justify-center font-medium">
    //                     How it works
    //                 </p>
    //             </div>

    //             <h2 class="mb-12 text-5xl font-bold text-left sm:text-center sm:text-7xl outlineShadow">
    //                 Frequently Asked Questions
    //             </h2>
    //             <div class="grid mt-5 sm:mt-24 gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
    //                 {content.map((map) => (
    //                     <div key={map.value}>
    //                         <h3 class="font-semibold text-black font-mono text-xl">
    //                             {map.title}
    //                         </h3>
    //                         <p class={`mt-1 dark:text-gray-400 font-mono text-lg`}>
    //                             {map.line}
    //                         </p>
    //                     </div>
    //                 ))}
    //             </div>
    //         </div>
    //     </section>
    // );
}
