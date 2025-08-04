import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import React from 'react'

const BoardOfManagement = ({ managementTeam }) => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
                        From the{" "}
                        <span className="text-yellow-500">Desk of Management</span>
                    </h2>
                </div>

                <div className="space-y-16">
                    {managementTeam.map((member, index) => (
                        <div
                            key={index}
                            className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                                }`}
                        >
                            <div
                                className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""
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
                                <p className="text-gray-700 text-lg leading-relaxed italic">
                                    "{member.message}"
                                </p>

                            </div>

                            <div
                                className={`relative w-full  h-[30rem] ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                                    }`}
                            >
                                <Image
                                    src={member.image || "/placeholder.svg"}
                                    alt={member.name}
                                    fill
                                    className="rounded-lg shadow-md  object-top object-cover"
                                />
                                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
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
        </section>
    )
}

export { BoardOfManagement }