"use client"
import Link from 'next/link'
import React from 'react'
const Sidebar = ({ activeRoute = 0 }) => {
    const sidebarLinks = [
        { name: "Overview", href: "/Research" + "#overview", },
        { name: "Research & Development Committee", href: "/Research" + "#Research" },
        { name: "Our Innovative Projects", href: "/Projects" },
        { name: "Journal Publications", href: "/Publications" },
        // { name: "Patents", href: "/academics/" +  "#mission" },
        { name: "Books & Edited Chapters", href: "/Books-&-Edited-Chapters" },
        // { name: "MOUs with Industries", href: "/syllabus/" + },
    ]
    const [activeIndex, setActiveIndex] = React.useState(activeRoute)

    return (
        <div className="lg:col-span-1">
            <div className="bg-gray-100 rounded-lg shadow-sm p-4">

                <nav className="space-y-1">
                    {sidebarLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            onClick={() => setActiveIndex(index)}
                            className={`block px-3 py-2 text-sm rounded-md transition-colors ${index == activeIndex
                                ? "bg-[#007bff] text-white"
                                : "text-gray-700 hover:bg-white hover:text-[#007bff]"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    )
}

export { Sidebar }