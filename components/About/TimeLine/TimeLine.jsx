import Image from 'next/image'
import React from 'react'
import { timelineData } from './TimelineData'



const Timeline = () => {
    return (
        <section
            id="director-message"
            className="py-16 bg-gray-50"
        >
            <div className='flex justify-center mb-3'>

                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 ">
                    Our Expanding Educational Legacy
                </h2>

            </div>
            <div className="container  mx-auto px-4">
                <div className="flex items-center flex-col md:flex-row ">
                    <div className="relative  flex-1 w-full h-[500px] max-h-[500px]">
                        <Image
                            src="/Home/about-auditorium.webp"
                            alt="Sviet auditorium"
                            fill
                            className=" rounded-lg object-contain"
                        />
                    </div>


                    <div className="flex-1 p-4 md:p-10 max-w-4xl mx-auto">
                        {timelineData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md flex gap-2 rounded-md p-2 mb-4 border-l-4 border-orange-400"
                            >
                                <p className="text-orange-600 font-semibold">{item.year}:</p>
                                <p className="text-gray-700">{item.text}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>


    )
}

export { Timeline }