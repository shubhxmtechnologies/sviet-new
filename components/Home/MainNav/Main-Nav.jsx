"use client"

import Link from "next/link"
import { useState } from "react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { navItems } from "./NavItems"

export function MainNav() {
    const [activeDropdown, setActiveDropdown] = useState(null)

  

    return (
        <nav className="bg-[#007bff] md:py-3 text-white">
            <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
                {/* Desktop Navigation */}
                <ul className="hidden flex-wrap justify-center gap-x-0 gap-y-2 text-sm font-medium md:flex lg:gap-x-0 w-full">
                    {navItems.map(item => (
                        <li
                            onMouseEnter={() => setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                            key={item.name}
                            className="relative group flex-1 text-center"

                        >
                            {item.dropdown && item.dropdown.length > 0 ? (
                                <DropdownMenu

                                    open={activeDropdown === item.name}
                                    onOpenChange={open => !open && setActiveDropdown(null)}
                                >
                                    <DropdownMenuTrigger asChild>
                                        <Link
                                            href={item.href}
                                            className={`whitespace-nowrap px-4 py-3 block transition-colors duration-200
                        ${activeDropdown === item.name
                                                    ? "bg-white text-[#007bff]"
                                                : "hover:bg-white hover:text-[#007bff]"
                                                }
                      `}
                                            // Prevent navigation on click for dropdown triggers
                                            onClick={e => e.preventDefault()}
                                        >
                                            {item.name}
                                        </Link>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        // Added min-width for "big div"
                                        className="bg-white shadow-lg pt-4 pb-8 rounded-none border-t-0 min-w-[600px]"
                                        // Align content to the start of the trigger
                                        align="start"
                                        // Align content directly below trigger
                                        sideOffset={0}
                                    >
                                        <div className="container mx-auto grid grid-cols-1 gap-x-8 gap-y-4 px-4 md:grid-cols-3 lg:px-6">
                                            {item.dropdown.map((col, colIndex) => (
                                                <div key={colIndex}>
                                                    {col.title && (
                                                        <h5 className="mb-2 font-semibold text-gray-900">
                                                            {col.title}
                                                        </h5>
                                                    )}
                                                    <ul className="space-y-1">
                                                        {col.links.map((link, linkIndex) => (
                                                            <li key={linkIndex}>
                                                                <Link
                                                                    href={link.href}
                                                                    className="text-gray-700 hover:text-[#007bff]"
                                                                >
                                                                    {link.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <Link
                                    href={item.href}
                                        className={`whitespace-nowrap px-4 py-3 block transition-colors duration-200 hover:bg-white hover:text-[#007bff]`}
                                >
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                
            </div>
        </nav>
    )
}
