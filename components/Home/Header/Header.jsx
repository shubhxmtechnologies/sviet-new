"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion"

import { navItems } from "../MainNav/NavItems"
export function Header() {
    return (
        <header className="bg-white py-4 shadow-sm">
            <div className="px-4 flex items-center justify-between w-full  md:px-6">
                {/* Left Section: Logo and College Name */}
                <div className="flex items-center w-full justify-between md:px-10">
                    <div className="flex items-center gap-4 ">
                        <Image
                            src="/SVIET.jpg"
                            alt="College Logo 1"
                            width={100}
                            height={100}
                        />

                        <div className="hidden md:block">
                            <h1 className="text-lg font-bold text-[#003366] md:text-xl">
                                Swami Vivekanand Institute of Engineering & Technology
                            </h1>
                            <p className="text-xs text-gray-600">ESTD. 2004, Approved by AICTE, Affiliated to IKGPTU</p>
                        </div>
                    </div>
                    <Image
                        src="/NAAC.png"
                        alt="College Logo 2"
                        width={100}
                        height={100}
                    />
                </div>

                <Sheet>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon" className="">
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">Toggle main menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-[#007bff] text-white">
                        <SheetHeader className={"text-white border-b border-white/20 pb-3 mb-0"}>
                            <SheetTitle className={"text-white pb-3 mb-0"}>Quick Links</SheetTitle>
                        </SheetHeader>
                        <nav className="grid gap-4 pt-0 p-4 text-lg font-medium">
                            <Accordion type="single" collapsible className="w-full">
                                {navItems.map(item =>
                                    item.dropdown && item.dropdown.length > 0 ? (
                                        <AccordionItem
                                            key={item.name}
                                            value={item.name}
                                            className="border-b border-white/20"
                                        >
                                            <AccordionTrigger className="py-2 text-left text-white hover:no-underline [&[data-state=open]>svg]:rotate-180">
                                                {item.name}
                                            </AccordionTrigger>
                                            <AccordionContent className="pb-2 pt-0">
                                                <ul className="ml-4 space-y-2 text-sm">
                                                    {item.dropdown.map((col, colIndex) => (
                                                        <li key={colIndex}>
                                                            {col.title && (
                                                                <h6 className="mb-1 font-semibold">
                                                                    {col.title}
                                                                </h6>
                                                            )}
                                                            <ul className="ml-2 space-y-1">
                                                                {col.links.map((link, linkIndex) => (
                                                                    <li key={linkIndex}>
                                                                        <Link
                                                                            href={link.href}
                                                                            className="hover:underline"
                                                                        >
                                                                            {link.name}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ) : (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block py-2 hover:underline border-b border-white/20"
                                        >
                                            {item.name}
                                        </Link>
                                    )
                                )}
                            </Accordion>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
            {/* Mobile Navigation */}

        </header>
    )
}
