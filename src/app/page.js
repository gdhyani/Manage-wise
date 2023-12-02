import Navbar from "@/components/navbar";
import Image from "next/image";
import "../app/globals.css";
import { HiFire, HiBell, HiDeviceMobile } from "react-icons/hi";
import Faq from "@/components/faq";

export default function Home() {
    return (
        <main className="">
            <Navbar />

            {/* section 1 */}

            <section className="flex flex-col items-center text-center justify-center pt-28 md:px-20 px-5 bg-gradient-to-b from-[#fdf2ec] to-white ">
                <h1 className="bg-white items-center flex rounded-lg text-[#8247ff] px-2 scale-120 py-1 border font-[500] text-sm">
                    <span className="inline text-black text-lg">👋</span>{" "}
                    WELCOME TO MANAGE WISE!
                </h1>
                <h1 className="lg:text-[75px] text-[45px] font-[600] leading-tight">
                    Empower your business with <br />
                    <span className="text-[#fe8162]">Strategic</span> insights
                </h1>
                <h1 className=" text-[19px] mt-3 opacity-60">
                    Powerful management platform designed to streamline your
                    business <br />
                    operations, boost productivity, and drive success
                </h1>
                <div className="flex gap-5 mt-7 ">
                    <button className="bg-[#8247ff] text-white text-xl rounded-xl font-semibold px-12 py-3">
                        Get Started
                    </button>
                    <button className="bg-white text-xl rounded-xl items-center gap-2 border font-semibold px-5 py-3 flex flex-row">
                        Watch Demo{" "}
                        <Image src="/demo.svg" width={25} height={25} />
                    </button>
                </div>
                <Image
                    className="rounded-3xl mt-16 shadow-2xl"
                    src="/section1.jpg"
                    width={1200}
                    height={1000}
                    alt=""
                />
            </section>

            {/* section 2 */}

            <section className="flex flex-col items-center text-center justify-center py-40">
                <h1 className="bg-white items-center flex rounded-lg text-[#8247ff] px-2 scale-120 py-1 border font-[500] text-sm">
                    <span className="inline text-black text-lg">🔥</span>{" "}
                    PREMIER FEATURES
                </h1>
                <h1 className="text-[50px] font-[600] leading-tight mt-3">
                    Discover our product's{" "}
                    <span className="text-[#fe8162]">Capabilities</span>
                </h1>
                <h1 className="text-[20px] mt-3 opacity-60">
                    Don't settle for mediocrity - embrace the future of
                    management <br />
                    with Manage Wise.
                </h1>
                {/* blocks */}
                <div className="mx-40 mt-16">
                    <div className="flex lg:flex-row  lg:gap-8 flex-col">
                        <div className="bg-[#ededfa] w-1/2 text-left pt-20 px-10 pb-10 rounded-2xl">
                            <h1 className="bg-white p-1 inline-block text-4xl rounded-xl w-auto">
                                ⭐️
                            </h1>
                            <br />
                            <h1 className="text-4xl leading-relaxed mt-5 font-semibold">
                                Boost productivity and streamline workflow with
                                us. Enjoy our intuitive interface and robust
                                features.
                            </h1>
                        </div>
                        <div className="text-left border flex gap-3 flex-col rounded-2xl">
                            <Image
                                className=""
                                src="/box1.jpg"
                                width={600}
                                height={400}
                                alt=""
                            />
                            <h1 className="text-2xl font-bold px-7">
                                Smart Task Management
                            </h1>
                            <h1 className="text-md px-7 opacity-60">
                                Say goodbye to chaos with our smart task
                                management system
                            </h1>
                        </div>
                    </div>
                    <div className="lg:flex-row flex flex-col gap-10 text-left mt-20">
                        <div className="rounded-3xl border-opacity-10 border pb-8">
                            <Image
                                className="w-98"
                                src="/box4.jpg"
                                width={1000}
                                height={1000}
                                alt=""
                            />
                            <h1 className="text-2xl mt-8 font-bold px-7">
                                Flexible Scheduling
                            </h1>
                            <h1 className="text-[17px] px-7 opacity-70 mt-3">
                                Stay productive with our flexible scheduling
                                system
                            </h1>
                        </div>
                        <div className="rounded-3xl border-opacity-10 border pb-8">
                            <Image
                                className="w-98"
                                src="/box3.jpg"
                                width={1000}
                                height={1000}
                                alt=""
                            />
                            <h1 className="text-2xl mt-8 font-bold px-7">
                                Easy Communication
                            </h1>
                            <h1 className="text-[17px] px-7 opacity-70 mt-3">
                                Collaborate seamlessly with your team in
                                real-time
                            </h1>
                        </div>
                        <div className="rounded-3xl border-opacity-10 border pb-8">
                            <Image
                                className="w-98"
                                src="/box2.jpg"
                                width={1000}
                                height={1000}
                                alt=""
                            />
                            <h1 className="text-2xl mt-8 font-bold px-7">
                                Analytics
                            </h1>
                            <h1 className="text-[17px] px-7 opacity-70 mt-3">
                                Gain valuable insights with our advanced
                                analytics feature
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* section 3 */}

            <section className="bg-[#1c1c1c] text-white pt-40 px-40">
                <div className="">
                    <h1 className="bg-white items-center inline-flex gap-1 rounded-lg text-[#8247ff] px-2  border font-[600] text-sm">
                        <span className="inline text-black text-lg">🤩</span>AND
                        MORE...
                    </h1>
                    <h1 className="text-5xl font-semibold mt-6">
                        Explore an array of features that elevate your{" "}
                        <span className="text-[#fe8162]">Productivity</span> to
                        new heights
                    </h1>
                    <h1 className="lg:w-5/12 text-xl opacity-40 mt-6">
                        Discover the tools that will revolutionize the way you
                        manage and optimize your operations
                    </h1>
                </div>
                <div className="flex lg:flex-row gap-10 flex-col pb-40 mt-16">
                    <div className="rounded-3xl bg-[#212121] w-1/3 px-6 h-96 pt-12 text-center">
                        <HiDeviceMobile
                            className="bg-[#8247ff] inline-flex rounded-2xl px-3 py-2"
                            size={60}
                        />
                        <h1 className="text-2xl font-semibold mt-5">
                            Cross-Platform Compatibility
                        </h1>
                        <h1 className="text-base opacity-40 mt-3">
                            Enjoy the flexibility of cross-platform
                            compatibility. Our product works seamlessly across
                            desktop, web, and mobile devices, allowing you to
                            work from your preferred device.
                        </h1>
                    </div>
                    <div className="rounded-3xl bg-[#212121] w-1/3 px-6 h-96 pt-12 text-center">
                        <HiBell
                            className="bg-[#8247ff] inline-flex rounded-2xl px-3 py-2"
                            size={60}
                        />
                        <h1 className="text-2xl font-semibold mt-5">
                            Stay Informed with Essential Notifications
                        </h1>
                        <h1 className="text-base opacity-40 mt-3">
                            Automate support from first customer contact to
                            closing the ticket. Drastically improve time to
                            resolution.Automate support from first customer
                            contact to closing the ticket.
                        </h1>
                    </div>
                    <div className="rounded-3xl bg-[#212121] w-1/3 px-6  h-96 pt-12 text-center">
                        <HiFire
                            className="bg-[#8247ff] inline-flex rounded-2xl px-3 py-2"
                            size={60}
                        />
                        <h1 className="text-2xl font-semibold mt-5">
                            Secure Data Encryption at all times
                        </h1>
                        <h1 className="text-base opacity-40 mt-3">
                            Trust in our robust data encryption to keep your
                            sensitive information safe and secure. Rest easy
                            knowing your data is protected at all times.
                        </h1>
                    </div>
                </div>
                <div className="text-center flex flex-col">
                    <h1 className="bg-white items-center w-fit place-self-center gap-1 rounded-lg text-[#8247ff] px-2  border font-[600] text-sm">
                        <span className="inline text-lg">🛠</span>INTEGRATIONS
                    </h1>
                    <h1 className="text-5xl max-w-xl place-self-center font-semibold mt-6">
                        Enable{" "}
                        <span className="text-[#fe8162]">Integration</span> with
                        other popular tools and platforms
                    </h1>
                    <h1 className="max-w-lg text-xl place-self-center opacity-40 mt-6">
                        Seamlessly connect and amplify your workflow by enabling
                        integration with a diverse array of widely-used tools
                        and platforms.
                    </h1>
                    <Image
                        className="max-w-xl place-self-center mt-16 rounded-t-3xl border-b border-black"
                        src="/section3.jpg"
                        width={1000}
                        height={1000}
                        alt=""
                    ></Image>
                </div>
            </section>

            {/* section4 */}
            {/* <section className="flex flex-col lg:flex-row px-40 gap-10">
                <div className="w-1/3">
                    <h1 className="text-5xl">Need</h1>
                    <h1 className="text-[#fe8162] text-5xl">Answers?</h1>
                    <h1>
                        Check out our most commonly asked questions below to
                        find the information you need.
                    </h1>
                </div>
                <div className="w-2/3">
                    <Faq />
                </div>
            </section> */}
            {/* section5 */}
            <section className="pt-40 px-40">
                <div className="text-center flex flex-col">
                    <h1 className="bg-white items-center w-fit place-self-center gap-1 rounded-lg text-[#8247ff] px-2  border font-[600] text-sm">
                        <span className="inline text-lg">💲</span>PRICING
                    </h1>
                    <h1 className="text-5xl  place-self-center font-semibold mt-6">
                        Select your ideal
                        <span className="text-[#fe8162]"> Pricing </span>plan
                    </h1>
                    <h1 className="max-w-md text-xl place-self-center opacity-70 mt-6">
                        At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.
                    </h1>
                </div>
            </section>

            <section className="h-screen"></section>
        </main>
    );
}
