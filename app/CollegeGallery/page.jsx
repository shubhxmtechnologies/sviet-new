"use client";

const categories = {
    "Cultural Events": [
        { title: "Lohri 2025: 13 January 2025", img: "/Gallery/Lohri.JPG", href: "https://drive.google.com/drive/folders/15qRl1JZixRc3AZIbMjOLDjvvzFgUOVtP" },
        { title: "Spontania: 11–12 April 2025", img: "/Gallery/Spontania.JPG", href: "https://drive.google.com/drive/folders/10G1Z9zjfhqbVQ_i-t4g7Dnxxegji_U-K " },
        { title: "Elevate 2024: 11 September 2024", img: "/Gallery/Elevate.JPG", href: "https://drive.google.com/drive/folders/1r_w0SW_8vM6YaYCX4N88e72OA0uxbuVs" },
        { title: "Youth Fest 2023: 17–19 October 2023", img: "/Gallery/YouthFest.JPG", href: "https://drive.google.com/drive/folders/1RPu1F0ifxY7LzxspVbd5Zv6omv1_lk1y" },
        { title: "Zim Fest 2024: 23 November 2024", img: "/Gallery/ZimFest.JPG", href: "https://drive.google.com/drive/folders/1mFiA-Lzr45QRk8Sl4OoVPqcKaTtxchcc " },
        { title: "Christmas Celebration 2024: 25 December 2024", img: "/Gallery/Christmas.JPG", href: "https://drive.google.com/drive/folders/1YbgougHP0BNZmjTFx7oudWRKHLwGF0OY " },
    ],
    "Technical Events": [
        { title: "Bharat Tech Hackathon 2025: 8 February 2025", href: "https://drive.google.com/drive/folders/1TBuG3wyijoZG2sL4QJGNfWll_CTTAKpd ", img: "/Gallery/BharatTech.JPG" },
        { title: "Techathon 3.0 2025: 21 March 2025", img: "/Gallery/TechaThon.JPG", href: "https://drive.google.com/drive/folders/1PnSSDMPVRQ1Ujoc-KhL_QhAvOZjHZXdG" },
    ],
    "Sports": [
        {
            title: "Inter-House T20 Cricket Tournament: 15–16 February 2025", href: "https://drive.google.com/drive/folders/1SiczWPH0yjc5ZYHweYUTw4LiOZTcxM9T", img: "/Gallery/Cricket.jpg"
        },

        { title: "Inter-House Volleyball Tournament: 22 February 2025", img: "/Gallery/Volleyball.jpg", href: "https://drive.google.com/drive/folders/1tqCCYsTAJU4o0Hw6e8UpxOL0DJcPD5-c" },

        { title: "Inter-House Kabaddi Tournament: 29–30 March 2025", img: "/Gallery/Kabaddi.jpg", href: "https://drive.google.com/drive/folders/12GqUE0ezAo8FwbK3hwhSLzJZ3Ov0bZXo" },

        { title: "Football Match: 27 January 2025", img: "/Gallery/Football.jpg", href: "https://drive.google.com/drive/folders/1kyg7NUTIymqeKtLVaSLcQsKU5LFkSxzB" },

        { title: "Inter College International Student Basketball Tournament: 15 February 2025", img: "/Gallery/Basketball.jpg", href: "https://drive.google.com/drive/folders/1-GuPmj-bEUFjtVXq5BspDQZRdu2QNr6y" },

        { title: "GameSphere: 24, 25 & 31 August 2025", img: "/Gallery/GameSphere.JPG", href: "https://drive.google.com/drive/folders/1wORy7xP4wrYtSAerKN78UHWyDZvMMpMO " },
    ],
    "Academic Ceremonial": [
        {
            title: "Voter’s Day 2025: 30 January 2025", img: "/Gallery/VotersDay.jpeg", href: "https://drive.google.com/drive/folders/1xE3Kpr8veQseVlsbZFd2reyjQ7PnrqCm"
        },
        {
            title: "International Women’s Day 2025: 7 March 2025",
            img: "/Gallery/WomensDay.JPG"
            , href: "https://drive.google.com/drive/folders/1Gnnuh6hs014E1vqCQN2pdaZc8Rl-XEt-"
        },
        {
            title: "Global Futures Summit 2025: 8 March 2025",
            img: "/Gallery/GlobalFuture.JPG",
            href: "https://drive.google.com/drive/folders/1qo1NoxFTLEauejpuIbGfTpJa1TqN7o4m"
        }, {
            img: "/Gallery/NationalYouthDay.jpeg"
            , title: "National Youth Day 2025: 11 January 2025",
            href: "https://drive.google.com/drive/folders/1C-ge8V6mqvqdrorwDL4VbnNB2Hs1Z0xJ  "
        },
        {
            title: "International Graduation Ceremony 2025: 18 July 2025",
            img: "/Gallery/InternationalGraduation.JPG",
            href: "https://drive.google.com/drive/folders/1ruf3yp3Bn-KZIH0nsWVo6wYrsOXGcMWY"
        }
    ]
};

export default function GalleryPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
            {Object.keys(categories).map((cat, i) => (
                <div key={i}>
                    {/* Heading */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">{cat}</h2>

                    {/* Grid */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {categories[cat].map((item, index) => (
                            <div
                                key={index}
                                className="relative group overflow-hidden rounded-2xl shadow-lg"
                            >
                                {/* Image */}
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                                />

                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-black/40"></div>

                                {/* Text always visible */}
                                <div className="absolute bottom-4 left-4 right-4 text-white transition-all duration-500 group-hover:-translate-y-10 group-hover:opacity-0">
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                </div>

                                {/* Button hidden initially */}
                                <div className="absolute bottom-[-50px] left-0 right-0 flex justify-center transition-all duration-500 group-hover:bottom-6">
                                    <button className="cursor-pointer px-4 py-2 bg-white text-black rounded-lg font-medium shadow hover:bg-gray-200">
                                        <a href={item.href} target="_blank">

                                            View
                                        </a>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
