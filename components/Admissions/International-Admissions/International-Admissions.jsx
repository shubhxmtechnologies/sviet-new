import React from 'react'
import { images, keyHighlights, managementTeam } from './data'
import { BoardOfManagement, HeroSection, Highlights } from '@/components/Home'
const InternationalAdmissions = ({ overviews }) => {
    return (
        <>
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Overview

                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            {overviews.length > 0 && overviews.map((overview, index) => (
                                <div className="flex items-start gap-3" key={index}>
                                    <p className='text-justify'>
                                        {overview}
                                    </p>
                                </div>
                            ))}



                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8 bg-white">
                <div className="container mx-auto ">
                    <div className="max-w-full rounded-md overflow-hidden mx-auto">
                        <Highlights keyHighlights={keyHighlights} />
                    </div></div></section>
            <section className="py-8 bg-white">
                <div className="container mx-auto ">
                    <div className="max-w-full rounded-md overflow-hidden mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Director –International Affairs

                        </h2>
                        <BoardOfManagement isInt={true} managementTeam={managementTeam} />

                    </div>
                </div>
            </section>

            <section className="py-8 bg-white">
                <div className="container mx-auto ">
                    <div className="max-w-full rounded-md overflow-hidden mx-auto">
                        <h2 className="text-3xl mb-6 text-center font-bold text-gray-800">
                            Campus Life

                        </h2>
                        <div className='h-[90vh] rounded-md overflow-hidden max-h-[90vh]'>

                            <HeroSection isShown={false} images={images} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export { InternationalAdmissions }