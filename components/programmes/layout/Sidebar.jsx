"use client"
import Link from 'next/link'
import React from 'react'
const sidebarLinks = [
    { name: "About Department", href: "#about-department", },
    { name: "Department Profile", href: "#department-profile" },
    { name: "Vision", href: "#vision" },
    { name: "Mission", href: "#mission" },
    { name: "Programmes", href: "/Programmes/Civil-Engineering" },
    { name: "Syllabus", href: "#syllabus" },
]
const Sidebar = () => {
    const [activeIndex, setActiveIndex] = React.useState(4)
    
    return (
        <nav className="space-y-1">
            {sidebarLinks.map((link, index) => (
                <Link
                    key={index}
                    href={link.href}
                    onClick={() => setActiveIndex(index)}
                    className={`block px-3 py-2 text-sm rounded-md transition-colors ${index == activeIndex
                        ? "bg-[#007bff] text-white"
                        : "text-gray-700 hover:bg-gray-100 hover:text-[#007bff]"
                        }`}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    )
}

export { Sidebar }