"use client"

import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import React from "react" // Import React for useState and useEffect
export function HeroSection({ isShown = true ,images}) {

    const [api, setApi] = React.useState()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    // Manual autoplay logic
    React.useEffect(() => {
        if (!api) return

        const interval = setInterval(() => {
            if (api.selectedScrollSnap() === api.scrollSnapList().length - 1) {
                api.scrollTo(0) // Loop back to the start
            } else {
                api.scrollNext()
            }
        }, 5000) // 5 seconds delay

        return () => clearInterval(interval) // Cleanup on unmount
    }, [api]) // Re-run effect if api changes

    return (
        <section className="relative w-full overflow-hidden">
            {isShown && <div className="absolute inset-0 z-20 flex flex-col items-start justify-center p-8 text-white bg-black/50">
                {/* Inner div for text content: removed its background and padding */}
                <div className="max-w-3xl h-full flex items-end text-left">
                    <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                        Shaping Visionaries Through Education and Innovation Since 2004
                    </h2>
                </div>

            </div>}
            <Carousel
                className="w-full"
                // Set the API for programmatic control
                setApi={setApi}
                opts={{
                    loop: true // Enable infinite looping
                }}
            >
                <CarouselContent>
                    {images.map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="relative flex h-[370px] items-center justify-center bg-gray-100 md:h-[470px] lg:h-[570px]">
                                <Image
                                    src={images[index]}
                                    alt={`College Banner ${index + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute inset-0 z-0"
                                />
                                <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center text-white">


                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
}
