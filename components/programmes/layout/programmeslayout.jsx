import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion"
import { Sidebar } from "./Sidebar"

function Programmeslayout() {
    const programmes = [
        {
            id: "computer-science",
            title: "B.Tech in Computer Science Engineering",
            data: {
                courseName: "B.Tech in Computer Science Technology",
                level: "UG (Under UG)",
                duration: "4 Years",
                accreditationStatus: "Accredited upto June 2025",
                nationalCourses:
                    "The department offers courses recognized by the VTU, Belgaum",
                professionalSociety:
                    "Faculty in charge are actively involved in the activities of Indian Computer Emergency Response Team (CERT-In), Association of Computing Machinery (ACM), IEEE etc.",
                professionalActivities:
                    "Involved in organization of workshops/seminars/conferences with professional societies and other like IEI etc.",
                consultancyActivities: "ECIL and DRDO quality certification agency"
            },
            peos: [
                "Able to practice in profession career in the dynamic sectors of the information industry",
                "Able to pursue higher studies and research work in various technical fields",
                "Able to practice and promote good communication capabilities for the benefit of the society"
            ],
            pos: [
                "An ability to independently carry out research / investigation and development work to solve practical problems",
                "An ability to write and present a substantial technical report/document",
                "Students should be able to demonstrate a degree of mastery over the area as per the specialization of the program. The mastery should be at a level higher than the requirements in the appropriate bachelor program"
            ]
        },
        {
            id: "mechanical",
            title: "B.Tech in Mechanical Engineering",
            data: {
                courseName: "B.Tech in Mechanical Engineering",
                level: "UG (Under UG)",
                duration: "4 Years",
                accreditationStatus:
                    "Accredited for 6 years under Tier-2 from 2021-2026",
                nationalCourses:
                    "The department offering all the national level for their Ph.D. degree under NBA norms",
                professionalSociety: "Approved by VTU",
                professionalActivities: "IEI, ISTE, ISHRAE, Member, alumnus",
                consultancyActivities: "Members and workshops consultancy regularly"
            },
            peos: [
                "Possess the knowledge, attitude and skills needed for a professional career in Environmental Engineering and Management",
                "Demonstrate the analytical, quantitative and management abilities required for engineering leadership in their chosen field",
                "Advocate environmental engineering for societal issues and sustainable development of society"
            ],
            pos: [
                "An ability to independently carry out research / investigation and development work to solve practical problems",
                "An ability to write and present a substantial technical report/document",
                "Students should be able to demonstrate a degree of mastery over the area as per the specialization of the program. The mastery should be at a level higher than the requirements in the appropriate bachelor program"
            ]
        },
        {
            id: "management",
            title: "B.Tech in Management & Entrepreneurship",
            data: {
                courseName: "B.Tech in Management & Entrepreneurship",
                level: "UG (Under UG)",
                duration: "4 Years",
                accreditationStatus:
                    "Accredited for 3 years under Tier-2 up to June 2025",
                nationalCourses:
                    "The respective course has been recognized by the VTU Belgaum",
                professionalSociety: "IEI, ISTE",
                professionalActivities:
                    "Research and Ph.D. candidates actively working",
                consultancyActivities:
                    "Active involved in transportation and highway related consultancy activity since from 40 years"
            },
            peos: [
                "Possess the knowledge, attitude and skills needed for a professional career in transportation Engineering & Management",
                "Demonstrate the analytical, quantitative and management abilities required for engineering leadership in their chosen field",
                "Utilize the opportunity through professional and ethical conduct in their personal and continued career development and lifelong learning to contribute for societal needs"
            ],
            pos: [
                "An ability to independently carry out research / investigation and development work to solve practical problems",
                "An ability to write and present a substantial technical report/document",
                "Students should be able to demonstrate a degree of mastery over the area as per the specialization of the program. The mastery should be at a level higher than the requirements in the appropriate bachelor program"
            ]
        }
    ]

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1 bg-gray-50">
                <div className="container mx-auto px-4 py-8 md:px-6">
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-[#003366]">Programmes</h1>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-lg shadow-sm">
                                <Accordion
                                    type="multiple"
                                    collapsible
                                    className="w-full"
                                    defaultValue={[
                                        "computer-science",
                                        "mechanical",
                                        "management"
                                    ]}
                                >
                                    {programmes.map((programme, index) => (
                                        <AccordionItem
                                            key={programme.id}
                                            value={programme.id}
                                            className="border-b border-gray-200"
                                        >
                                            <AccordionTrigger className="px-6 py-4 hover:no-underline text-left bg-blue-50 hover:bg-blue-100 transition-colors">
                                                <span className="text-lg font-semibold text-[#003366]">
                                                    {programme.title}
                                                </span>
                                            </AccordionTrigger>
                                            <AccordionContent className="px-6 py-4">
                                                <div className="space-y-6">
                                                    {/* Basic Information Table */}
                                                    <div className="overflow-x-auto">
                                                        <table className="w-full border-collapse border border-gray-200">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="border border-gray-200 px-4 py-3 font-semibold text-[#003366] bg-gray-50 w-1/3">
                                                                        Course Name
                                                                    </td>
                                                                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                                                                        {programme.data.courseName}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border border-gray-200 px-4 py-3 font-semibold text-[#003366] bg-gray-50">
                                                                        Level
                                                                    </td>
                                                                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                                                                        {programme.data.level}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border border-gray-200 px-4 py-3 font-semibold text-[#003366] bg-gray-50">
                                                                        Duration
                                                                    </td>
                                                                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                                                                        {programme.data.duration}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border border-gray-200 px-4 py-3 font-semibold text-[#003366] bg-gray-50">
                                                                        Accreditation Status
                                                                    </td>
                                                                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                                                                        {programme.data.accreditationStatus}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border border-gray-200 px-4 py-3 font-semibold text-[#003366] bg-gray-50">
                                                                        National Courses
                                                                    </td>
                                                                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                                                                        {programme.data.nationalCourses}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border border-gray-200 px-4 py-3 font-semibold text-[#003366] bg-gray-50">
                                                                        Professional Society Memberships
                                                                    </td>
                                                                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                                                                        {programme.data.professionalSociety}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border border-gray-200 px-4 py-3 font-semibold text-[#003366] bg-gray-50">
                                                                        Professional Activities
                                                                    </td>
                                                                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                                                                        {programme.data.professionalActivities}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border border-gray-200 px-4 py-3 font-semibold text-[#003366] bg-gray-50">
                                                                        Consultancy Activities
                                                                    </td>
                                                                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                                                                        {programme.data.consultancyActivities}
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    {/* Programme Educational Objectives */}
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-[#003366] mb-4 border-b border-gray-200 pb-2">
                                                            Programme Educational Objectives (PEOs)
                                                        </h3>
                                                        <div className="space-y-3">
                                                            {programme.peos.map((peo, peoIndex) => (
                                                                <div
                                                                    key={peoIndex}
                                                                    className="flex items-start gap-3"
                                                                >
                                                                    <span className="font-semibold text-[#003366] min-w-[50px] text-sm">
                                                                        PEO{peoIndex + 1}:
                                                                    </span>
                                                                    <span className="text-gray-700 text-sm leading-relaxed">
                                                                        {peo}
                                                                    </span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Programme Outcomes */}
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-[#003366] mb-4 border-b border-gray-200 pb-2">
                                                            Programme Outcomes (POs)
                                                        </h3>
                                                        <div className="space-y-3">
                                                            {programme.pos.map((po, poIndex) => (
                                                                <div
                                                                    key={poIndex}
                                                                    className="flex items-start gap-3"
                                                                >
                                                                    <span className="font-semibold text-[#003366] min-w-[40px] text-sm">
                                                                        PO{poIndex + 1}:
                                                                    </span>
                                                                    <span className="text-gray-700 text-sm leading-relaxed">
                                                                        {po}
                                                                    </span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <Sidebar />
                    </div>
                </div>
            </main>
        </div>
    )
}

export {
    Programmeslayout
}