"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel"
import React from "react" // Import React for useState and useEffect
import { images } from "./HeroData"
export function HeroSection() {

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
            <Carousel
                className="w-full"
                // Set the API for programmatic control
                setApi={setApi}
                opts={{
                    loop: true // Enable infinite looping
                }}
            >
                <CarouselContent>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="relative flex h-[400px] items-center justify-center bg-gray-100 md:h-[500px] lg:h-[600px]">
                                <Image
                                    src={images[index]}
                                    alt={`College Banner ${index + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute inset-0 z-0"
                                />
                                <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center text-white">
                                    
                                    {/* <h2 className="text-2xl font-bold md:text-4xl lg:text-5xl">
                                        B.M.S. COLLEGE OF ENGINEERING
                                    </h2>
                                    <p className="mt-2 text-sm md:text-lg">
                                        AUTONOMOUS INSTITUTE AFFILIATED TO VTU BELAGAVI
                                    </p>
                                    <h3 className="mt-4 text-xl font-semibold text-red-500 md:text-2xl lg:text-3xl">
                                        NATIONAL SERVICE SCHEME
                                    </h3>
                                    <div className="mt-6 rounded-lg bg-white/80 p-4 text-left text-gray-800 shadow-lg md:p-6">
                                        <h4 className="mb-2 text-lg font-bold md:text-xl">
                                            ELIGIBILITY CRITERIA OF YUVA NIDHI YOJANA
                                        </h4>
                                        <ul className="list-disc pl-5 text-sm md:text-base">
                                            <li>Resident of Karnataka.</li>
                                            <li>You must not be self-employed.</li>
                                            <li>
                                                Not taken loans under the state and central schemes or
                                                banks.
                                            </li>
                                            <li>
                                                The bank account you provide must be linked to your
                                                Aadhaar.
                                            </li>
                                            <li>
                                                You must not be already getting benefits from similar
                                                schemes.
                                            </li>
                                            <li>
                                                Not have a job 6 months after completing your PG, UG or
                                                diploma.
                                            </li>
                                            <li>
                                                Have passed your PG, UG or diploma in the academic year
                                                2022-23.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-6 flex flex-col gap-3 md:flex-row">
                                        <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md">
                                            Documents Required
                                        </Button>
                                        <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md">
                                            Seva Sindhu Link
                                        </Button>
                                    </div> */}
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 " />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 " />
            </Carousel>
        </section>
    )
}
