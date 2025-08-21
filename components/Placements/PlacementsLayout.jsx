import React from 'react'
import { PlacementsSidebar } from './PlacementsSidebar'
import { aboutDepartment } from './items'
import PlacementRecord from './PlacementRecord'
import Image from 'next/image'
const PlacementsLayout = () => {
    return (
        <div className="flex min-h-screen flex-col">
            {/* <div className='w-full bg-black/50 text-white p-4 sm:py-5 md:px-8 lg:py-6 lg:px-16 '>
                <h3 className='text-lg font-semibold md:text-2xl'>
                    Placements & Career Development
                </h3>
            </div> */}


            <main className="flex-1 bg-gray-50">
                <div className="container mx-auto px-4 py-8 md:px-6">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-lg shadow-sm">
                                {/* About Department Section */}
                                <div
                                    id="overview"
                                    className="p-6 border-b border-gray-200"
                                >
                                    <h2 className="text-xl font-bold text-[#003366] mb-4">
                                        Overview
                                    </h2>
                                    <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                                        {aboutDepartment.length > 0 && aboutDepartment.map((about, index) => (
                                            <p key={index} className="text-justify">
                                                {about}
                                            </p>
                                        ))}

                                    </div>
                                </div>

                                {/* placement record */}

                                <PlacementRecord />


                                {/* From desk of director placements */}

                                <div
                                    id="Research"
                                    className="p-6 border-b border-gray-200"
                                >
                                    <h2 className="text-xl font-bold text-[#003366] mb-4">
                                        From the Desk of Director Placements
                                    </h2>
                                    <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                                        <div className='w-full flex justify-center items-center'>
                                            <Image
                                                alt='Adv. Shubham Garg Image'
                                                src={"/Management/2.jpg"}
                                                height={200}
                                                width={200}
                                                className='max-h-[200px] max-w-[200px] object-top'
                                            />
                                        </div>

                                        <p className="text-justify">
                                            "Our aim is to provide Placements & Corporate Interface for the students and to make the students aware about the job opportunities and help them get placed. In the last fifteen years, Training & Placement Office (General) has been successfully able to place students of different courses & has invited reputed MNCs from, Social Sector, Information Technology, Manufacturing, ITES, Media, Services, Banking & Finance, etc. The Training & Placement Office (General) looks after the Campus Placements of the Engineering & Non-Engineering Courses of the College & Coordinates with the respective departmental TPO's regarding the Placement & related activities."
                                        </p>
                                        <p className='text-right italic font-bold'>
                                            - Adv. Shubham Garg
                                        </p>


                                    </div>
                                </div>

                                {/* vision */}
                                <div
                                    id="Research"
                                    className="p-6 border-b border-gray-200"
                                >
                                    <h2 className="text-xl font-bold text-[#003366] mb-4">
                                        Vision
                                    </h2>
                                    <div className="space-y-4 text-gray-700 text-sm leading-relaxed">

                                        <p className="text-justify">

                                            To be a globally recognized institution that produces industry-ready professionals and fosters a culture of innovation and entrepreneurship.
                                        </p>


                                    </div>
                                </div>


                                {/* Mission */}
                                <div
                                    id="Research"
                                    className="p-6 border-b border-gray-200"
                                >
                                    <h2 className="text-xl font-bold text-[#003366] mb-4">
                                        Mission
                                    </h2>
                                    <div className="space-y-4 text-gray-700 text-sm leading-relaxed">

                                        <ul className="text-justify list-disc px-4">

                                            <li className="text-justify">
                                                To enhance students’ employability through continuous training in technical, professional, and soft skills.
                                            </li>
                                            <li className="text-justify">
                                                To build strong partnerships with leading industries, organizations, and recruiters.
                                            </li>
                                            <li className="text-justify">
                                                To facilitate internships, live projects, and placement opportunities that bridge the gap between academics and industry.
                                            </li>
                                            <li className="text-justify">
                                                To support every student in exploring diverse career pathways including corporate jobs, entrepreneurship, and higher education.
                                            </li>
                                            <li className="text-justify">
                                                To foster a culture of lifelong learning, adaptability, and professionalism among students.
                                            </li>
                                        </ul>


                                    </div>
                                </div>

                                {/* Highlights of Our Placement Cell  */}
                                <div
                                    id="Research"
                                    className="p-6 border-b border-gray-200"
                                >
                                    <h2 className="text-xl font-bold text-[#003366] mb-4">
                                        Highlights of Our Placement Cell
                                    </h2>
                                    <div className="space-y-4 text-gray-700 text-sm leading-relaxed">

                                        <ul className="text-justify list-disc px-4">

                                            <li className="text-justify">
                                                Strong network of reputed recruiters across IT, Core Engineering, Management, and Emerging Technology sectors.                                             </li>
                                            <li className="text-justify">
                                                Dedicated pre-placement training programs focusing on interview skills, group discussions, and personality development.
                                            </li>
                                            <li className="text-justify">
                                                Year-round engagement with HR summits, alumni talks, and skill-development workshops.
                                            </li>
                                            <li className="text-justify">
                                                A transparent and student-centric placement process that ensures fairness and equal opportunities.                                            </li>

                                        </ul>


                                    </div>
                                </div>


                                {/* image */}

                                <div
                                    id="Research"
                                    className="p-6 border-b border-gray-200"
                                >
                                    <h2 className="text-xl font-bold text-[#003366] mb-4">
                                        Highlights of Our Placement Cell
                                    </h2>
                                    <div className="space-y-4  text-gray-700 text-sm leading-relaxed">
                                        <div className='h-[500px] w-full'>
                                            <img className='h-full w-full rounded-md'
                                                src={"/placements/image.jpeg"}
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Left Sidebar - Navigation */}
                        <PlacementsSidebar />
                    </div>
                </div>
            </main>

        </div>
    )
}

export default PlacementsLayout

