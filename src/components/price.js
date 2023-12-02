import { HiCheck } from "react-icons/hi";
export default function Price() {
    const priceList = [
        {
            type: "FREE",
            price: 0,
            items: [
                "Access to all basic features",
                "Reporting and analytics",
                "Up to 5 individual users",
                "Chat and email support",
            ],
        },
        {
            type: "STANDARD",
            price: 25,
            items: [
                "Access to all basic features",
                "Reporting and analytics",
                "Up to 5 individual users",
                "Chat and email support",
                "3+ integrations",
                "Account performance reporting",
            ],
        },
        {
            type: "BUSSINESS",
            price: 42,
            items: [
                "Access to all basic features",
                "Reporting and analytics",
                "Up to 5 individual users",
                "Chat and email support",
                "3+ integrations",
            ],
        },
    ];
    return (
        <div className="flex lg:flex-row gap-6 items-end flex-col mt-16">
            {priceList.map((e) => (
                <div
                key={priceList.indexOf(e)}
                    className={`flex lg:w-1/3 max-w-5xl  mx-auto  px-7 rounded-3xl flex-col justify-between ${
                        e.type === "STANDARD"
                            ? "bg-[#1c1c1c] text-white pt-10 pb-8 "
                            : "bg-[#ededfa] py-8 h-[460px]"
                    }`}
                >
                    <div>
                        <h1 className="text-[#fe8162] bg-white inline-block px-3 py-1 rounded-xl  font-semibold text-xs">
                            {e.type}
                        </h1>
                        <h1 className="text-6xl mt-4 mb-7 font-bold">
                            ${e.price}
                            <span className="text-lg font-normal">/month</span>
                        </h1>
                        {e.items.map((f) => (
                            <h1 className="mt-2 text-[16px] opacity-70" key={e.items.indexOf(e)}>
                                <HiCheck
                                    className="inline-block mr-3"
                                    color="#43d67e"
                                    size={25}
                                />
                                {f}
                            </h1>
                        ))}
                    </div>
                    <div>
                        <button
                            className={`mt-8 border border-transparent hover:border-black transition-all px-5 rounded-2xl py-3 font-semibold text-lg ${
                                e.type === "STANDARD"
                                    ? "bg-[#8247ff] text-white"
                                    : "bg-white text-black"
                            }`}
                        >
                            Get started
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
