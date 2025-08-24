import React from 'react'
import { Header, MainNav, TopBanner } from './Home'

const NavBar = () => {
    return (
        <>
            <TopBanner />
            <Header />
            {/* <Navigation /> */}
            <MainNav />
        </>
    )
}

export { NavBar }


const Navigation = () => {
    const navItems = [
        { label: 'Gallery', href: '#' },
        { label: 'Contact us', href: '#' }
    ];

    return (
        <div className="w-full bg-white shadow-sm border-b ">
            <div className="w-full px-4 md:px-6 pb-4">
                <div className="flex justify-end items-center">
                    <nav>
                        <ul className="flex items-center space-x-8">
                            {navItems.map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="text-gray-500 text-sm mr-2">›</span>
                                    <a
                                        href={item.href}
                                        className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200 whitespace-nowrap"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};
