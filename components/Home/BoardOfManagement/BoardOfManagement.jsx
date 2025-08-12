import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import React from 'react'

const BoardOfManagement = ({ inleft = false, headingInceter = false, heading = "", managementTeam, isInt = false }) => {
    return (
        <section className={` ${isInt ? " pt-4" : " py-10"} bg-white `}>
            <div className={`container mx-auto ${isInt ? "" : "px-4"}`}>
                {heading != "" && <div div className="mb-10">
                    {inleft ?
                        <div className="bg-gray-300  text-blue-900  p-4 rounded-md">
                            <h2
                                className={`text-3xl md:text-4xl font-bold   ${headingInceter ? "text-center" : "text-left"
                                    }`}
                            >
                                {heading}
                            </h2>
                        </div>
                        :
                        <h2 className={`text-3xl md:text-4xl font-bold text-blue-900 mb-2 ${headingInceter ? "text-center" : "text-left"}`} >
                            {heading}
                        </h2>
                    }

                </div>}

                <div className="space-y-16">
                    {managementTeam.map((member, index) => (
                        <div
                            key={index}
                            className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                                }`}
                        >
                            <div
                                className={`${isInt ? "space-y-0" : "space-y-6"} ${index % 2 === 1 ? "lg:col-start-2" : ""
                                    }`}
                            >
                                <div>
                                    <Badge className="bg-blue-100 text-blue-800 mb-4">
                                        {member.position}
                                    </Badge>
                                    <h3 className="text-2xl font-bold text-blue-900 mb-4">
                                        {member.name}
                                    </h3>
                                </div>
                                <p className="text-gray-700 text-sm text-justify leading-relaxed italic">
                                    "{member.message}"
                                </p>

                            </div>

                            <div
                                className={`relative rounded-lg shadow-md w-full h-[23rem] ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                                    }`}
                            >
                                <Image
                                    src={member.image || "/placeholder.svg"}
                                    alt={member.name}
                                    fill
                                    className="   object-contain"
                                />
                                <div className="absolute -bottom-7 -right-2 bg-gray-50 shadow-md p-4 rounded-lg ">
                                    <div className="text-center">
                                        <p className="font-bold text-blue-900 text-sm">
                                            {member.name}
                                        </p>
                                        <p className="text-gray-600 text-xs">{member.position}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export { BoardOfManagement }