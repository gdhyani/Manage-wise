import Navbar from "@/components/navbar";
import Testimonials from "@/components/testimonials";
import Image from "next/image";
import Link from "next/link";
import "../app/globals.css";
import { HiFire, HiBell, HiDeviceMobile } from "react-icons/hi";
import Faq from "@/components/faq";
import Price from "@/components/price";
import { FaLinkedinIn } from "react-icons/fa";

export default function Home() {
    return (
        <main className="">
            <Navbar />

            {/* section 1 */}

            <section className="flex flex-col items-center text-center justify-center pt-20 md:pt-28 md:px-20 px-5 bg-gradient-to-b from-[#fdf2ec] to-white ">
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
                    business<br className="hidden md:block"></br>
                    operations, boost productivity, and drive success
                </h1>
                <div className="flex w-full md:w-auto flex-col md:flex-row gap-5 mt-7 ">
                    <button className="bg-[#8247ff] text-white text-xl rounded-xl font-semibold px-12 py-3">
                        Get Started
                    </button>
                    <button className="bg-white text-xl rounded-xl items-center justify-center gap-2 border font-semibold px-5 py-3 flex flex-row">
                        Watch Demo{" "}
                        <Image src="/demo.svg" width={25} height={25} />
                    </button>
                </div>
                <Image
                    className="rounded-3xl mt-16 shadow-xl md:shadow-2xl"
                    src="/section1.jpg"
                    width={1200}
                    height={1000}
                    alt=""
                />
            </section>

            {/* section 2 */}

            <section className="flex flex-col items-center text-center justify-center pt-28 pb-16 md:py-40">
                <h1 className="bg-white items-center flex rounded-lg text-[#8247ff] px-2 scale-120 py-1 border font-[500] text-sm">
                    <span className="inline text-black text-lg">🔥</span>{" "}
                    PREMIER FEATURES
                </h1>
                <h1 className="md:text-[50px] text-3xl font-[600] leading-tight mt-3">
                    Discover our product's
                    <span className="text-[#fe8162]"> Capabilities</span>
                </h1>
                <h1 className="text-[20px] mx-5 md:mx-0 mt-3 opacity-60">
                    Don't settle for mediocrity - embrace the future of
                    management <br className="hidden md:block" />
                    with Manage Wise.
                </h1>
                {/* blocks */}
                <div className="md:mx-40 mx-5 mt-16">
                    <div className="flex lg:flex-row gap-8 flex-col">
                        <div className="bg-[#ededfa] w-full lg:w-1/2 text-left pt-20 px-10 pb-10 rounded-2xl">
                            <h1 className="bg-white p-1 inline-block text-4xl rounded-xl w-auto">
                                ⭐️
                            </h1>
                            <br />
                            <h1 className="md:text-4xl text-2xl leading-normal md:leading-relaxed mt-5 font-semibold">
                                Boost productivity and streamline workflow with
                                us. Enjoy our intuitive interface and robust
                                features.
                            </h1>
                        </div>
                        <div
                            className="text-left border pb-8 md:pb-0 flex 
                        gap-3 flex-col rounded-2xl"
                        >
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
                    <div className="lg:flex-row flex flex-col gap-10 text-left mt-8 md:mt-20">
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

            <section className="bg-[#1c1c1c] text-white pt-16 px-5 md:pt-40 md:px-40">
                <div className="">
                    <h1 className="bg-white items-center inline-flex gap-1 rounded-lg text-[#8247ff] px-2  border font-[600] text-sm">
                        <span className="inline text-black text-lg">🤩</span>AND
                        MORE...
                    </h1>
                    <h1 className=" text-4xl md:text-5xl font-semibold mt-6">
                        Explore an array of features that elevate your{" "}
                        <span className="text-[#fe8162]">Productivity</span> to
                        new heights
                    </h1>
                    <h1 className="lg:w-5/12 text-lg md:text-xl opacity-40 mt-6">
                        Discover the tools that will revolutionize the way you
                        manage and optimize your operations
                    </h1>
                </div>
                <div className="flex lg:flex-row gap-4 lg:gap-10 flex-col pb-40 mt-16">
                    <div className="rounded-3xl bg-[#212121] w-full lg:w-1/3 px-6 lg:h-96 pt-12 text-center">
                        <HiDeviceMobile
                            className="bg-[#8247ff] inline-flex rounded-2xl px-3 py-2"
                            size={60}
                        />
                        <h1 className="text-2xl font-semibold mt-5">
                            Cross-Platform Compatibility
                        </h1>
                        <h1 className="text-base opacity-40 mt-3 pb-16">
                            Enjoy the flexibility of cross-platform
                            compatibility. Our product works seamlessly across
                            desktop, web, and mobile devices, allowing you to
                            work from your preferred device.
                        </h1>
                    </div>
                    <div className="rounded-3xl bg-[#212121] w-full lg:w-1/3 px-6 lg:h-96 pt-12 text-center">
                        <HiBell
                            className="bg-[#8247ff] inline-flex rounded-2xl px-3 py-2"
                            size={60}
                        />
                        <h1 className="text-2xl font-semibold mt-5">
                            Stay Informed with Essential Notifications
                        </h1>
                        <h1 className="text-base opacity-40 mt-3 pb-16">
                            Automate support from first customer contact to
                            closing the ticket. Drastically improve time to
                            resolution.Automate support from first customer
                            contact to closing the ticket.
                        </h1>
                    </div>
                    <div className="rounded-3xl bg-[#212121] w-full lg:w-1/3 px-6  lg:h-96 pt-12 text-center">
                        <HiFire
                            className="bg-[#8247ff] inline-flex rounded-2xl px-3 py-2"
                            size={60}
                        />
                        <h1 className="text-2xl font-semibold mt-5">
                            Secure Data Encryption at all times
                        </h1>
                        <h1 className="text-base opacity-40 mt-3 pb-16">
                            Trust in our robust data encryption to keep your
                            sensitive information safe and secure. Rest easy
                            knowing your data is protected at all times.
                        </h1>
                    </div>
                </div>
                <div className="text-center flex flex-col">
                    <div className="lg:hidden flex flex-col mx-auto mb-10 gap-3 border-white">
                        <div className="flex gap-3">
                            <Image
                                className="bg-[#282828] p-3 rounded-2xl"
                                src="/gmail.svg"
                                width={60}
                                height={60}
                                alt="img"
                            />
                            <Image
                                className="bg-[#282828] p-3 rounded-2xl"
                                src="/slack.svg"
                                width={60}
                                height={60}
                                alt="img"
                            />
                            <Image
                                className="bg-[#282828] p-3 rounded-2xl"
                                src="/drop.svg"
                                width={60}
                                height={60}
                                alt="img"
                            />
                            <Image
                                className="bg-[#282828] p-3 rounded-2xl"
                                src="/figma.svg"
                                width={60}
                                height={60}
                                alt="img"
                            />
                            <Image
                                className="bg-[#282828] p-3 rounded-2xl"
                                src="/notion.svg"
                                width={60}
                                height={60}
                                alt="img"
                            />
                        </div>
                        <div className="flex gap-3">
                            <Image
                                className="bg-[#282828] p-3 rounded-2xl"
                                src="/gitlab.svg"
                                width={60}
                                height={60}
                                alt="img"
                            />
                            <Image
                                className="bg-[#282828] p-3 rounded-2xl"
                                src="/vimo.svg"
                                width={60}
                                height={60}
                                alt="img"
                            />
                            <Image
                                className="bg-[#282828] p-3 rounded-2xl"
                                src="/duo.svg"
                                width={60}
                                height={60}
                                alt="img"
                            />
                            <Image
                                className="bg-[#282828] p-3 rounded-2xl"
                                src="/framer.svg"
                                width={60}
                                height={60}
                                alt="img"
                            />
                            <Image
                                className="bg-[#282828] p-3 rounded-2xl"
                                src="/git.svg"
                                width={60}
                                height={60}
                                alt="img"
                            />
                        </div>
                    </div>
                    <h1 className="bg-white items-center w-fit place-self-center gap-1 rounded-lg text-[#8247ff] px-2  border font-[600] text-sm">
                        <span className="inline text-lg">🛠</span>INTEGRATIONS
                    </h1>
                    <h1 className="text-3xl md:text-5xl max-w-xl place-self-center font-semibold mt-6">
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
            <section className="pt-40 flex flex-col lg:flex-row px-40 gap-10">
                <div className="w-1/3">
                    <h1 className="bg-white items-center inline-flex gap-1 rounded-lg text-[#8247ff] px-2  border font-[600] text-sm">
                        <span className="inline text-black text-lg">🙋‍♀️</span>
                        FAQ
                    </h1>
                    <h1 className="text-5xl mt-5">Need</h1>
                    <h1 className="text-[#fe8162] text-5xl">Answers?</h1>
                    <h1 className="mt-3 text-xl w-10/12 opacity-70">
                        Check out our most commonly asked questions below to
                        find the information you need.
                    </h1>
                </div>
                <div className="w-2/3">
                    <Faq />
                </div>
            </section>

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
                        At Manage Wise, we believe in providing you with pricing
                        plans that adapt to your unique needs.
                    </h1>
                </div>
                <Price />
            </section>

            {/* section6 */}

            <section className="pb-10">
                <div className="pt-40 px-40">
                    <h1 className="bg-white items-center inline-flex gap-1 rounded-lg text-[#8247ff] px-2  border font-[600] text-sm">
                        <span className="inline text-black text-lg">🧡</span>
                        TESTIMONIALS
                    </h1>
                    <h1 className="text-5xl font-semibold mt-6">
                        Hear from our
                        <span className="text-[#fe8162]"> Satisfied </span> to
                        clients
                    </h1>
                    <h1 className="lg:w-6/12 text-xl opacity-70 mt-6">
                        Discover why our clients love working with us. Read
                        their testimonials and learn how we has helped
                        businesses.
                    </h1>
                </div>
                <div className="mt-20 h-96">
                    <Testimonials />
                </div>
            </section>

            {/* section 7 */}

            <section className="pt-32 px-40 bg-gradient-to-t from-[#fdf2ec] to-white">
                <div className="border bg-white rounded-3xl gap-10 flex items-end flex-row px-32 py-24">
                    <div className="pr-10">
                        <h1 className="bg-white items-center inline-flex gap-1 rounded-lg text-[#8247ff] px-2  border font-[600] text-sm">
                            <span className="inline text-black text-lg">
                                👋
                            </span>
                            DON'T MISS OUT
                        </h1>
                        <h1 className="text-5xl font-semibold mt-6">
                            Unleash your{" "}
                            <span className="text-[#fe8162]"> Potential </span>
                            with us
                        </h1>
                        <h1 className="text-xl opacity-70 mt-6 mr-5">
                            Join our community of ambitious individuals and
                            organizations eager to make a difference.
                        </h1>
                        <button className="bg-[#8247ff] mt-6 text-white text-lg font-semibold py-4 px-12 rounded-2xl">
                            Try out now
                        </button>
                    </div>
                    <div className="text-center ">
                        <h1 className="border rounded-2xl inline-block place-self-center shadow-2xl mb-10 px-5 py-3 text-2xl font-semibold">
                            <span className="text-[#8247ff]">200+</span> Happy
                            users
                        </h1>
                        <div className="relative">
                            <Image
                                className=""
                                src="/section7.jpg"
                                width={1000}
                                height={1000}
                                alt=""
                            />
                            <Image
                                className="absolute left-0 top-0"
                                src="/fadefront.jpg"
                                width={1000}
                                height={1000}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* section8 */}
            <section className="bg-[#fdf2ec] text-black pt-28 px-40 pb-12">
                <div className="flex flex-row pb-32 justify-between items-start align-top">
                    <Image
                        className="h-12 w-52"
                        src="/navlogo.jpg"
                        width={1000}
                        height={1000}
                        alt=""
                    />
                    <div className="flex flex-col gap-3">
                        <Link href="/" className="hover:text-[#8247ff]">
                            Features
                        </Link>
                        <Link href="/" className="hover:text-[#8247ff]">
                            FAQ
                        </Link>
                        <Link href="/" className="hover:text-[#8247ff]">
                            Pricing
                        </Link>
                        <Link href="/" className="hover:text-[#8247ff]">
                            Testimonials
                        </Link>
                    </div>
                </div>
                <hr />
                <div className="flex flex-row justify-between pt-10">
                    <h1 className="">© 2022 ManageWise, Inc.</h1>
                    <div className="flex gap-4">
                        <Link href="">
                            <Image
                                className="w-[25px]"
                                src="/insta.svg"
                                width={1000}
                                height={1000}
                                alt=""
                            />
                        </Link>
                        <Link href="">
                            <Image
                                className="w-[25px]"
                                src="/twitter.svg"
                                width={1000}
                                height={1000}
                                alt=""
                            />
                        </Link>
                        <Link href="">
                            <FaLinkedinIn size={25} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
