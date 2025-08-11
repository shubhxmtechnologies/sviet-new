import Image from "next/image"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download } from 'lucide-react'

const resultsData = [
    {
        title: "Under Graduation",
        courseName: "B.Tech Civil Engineering",
        results: [
            { id: 1, description: "UG Syllabus 2023", downloadUrl: "/syllabus/civil/UG/BTech-CE-2023.pdf" },
            { id: 2, description: "UG Syllabus 2021", downloadUrl: "/syllabus/civil/UG/B.Tech-CE-2021.pdf" },
            { id: 3, description: "UG Syllabus 2018", downloadUrl: "/syllabus/civil/UG/B.Tech-CE-2018.pdf" },
            { id: 4, description: "UG Syllabus 2011", downloadUrl: "/syllabus/civil/UG/B.Tech-CE-2011.pdf" },

        ]
    },



]
function NAACHome({
    teacherName = "John doe",

}) {


    return (
        <div className="flex min-h-screen flex-col">

            <main className="flex-1 bg-gray-50">
                <div className="container mx-auto px-4 py-8 md:px-6">
                    <div className="">
                        {/* Main Content */}
                        <div className="">
                            <div className="bg-white rounded-lg shadow-sm">
                                {/* HOD Section */}
                                <div className="p-6 border-b min-h-fit border-gray-200">
                                    <div className="flex flex-col  items-center justify-center w-full gap-6">
                                        <div className=" flex-col md:flex-row flex gap-20">
                                            <Image
                                                src={"/Documents/NAAC/certificate1.jpg"}
                                                alt={teacherName + "-picture"}
                                                width={300}
                                                height={500}
                                                className="rounded-lg "
                                            />
                                            <Image
                                                src={"/Documents/NAAC/certificate2.jpg"}
                                                alt={teacherName + "-picture"}
                                                width={300}
                                                height={500}
                                                className="rounded-lg "
                                            />
                                        </div>
                                        {/* <div className="flex-1 flex flex-col w-full items-center justify-center">
                                            <h1 className="text-2xl font-bold text-[#003366] mb-2">
                                                {teacherName}
                                            </h1>
                                            <p className="text-lg text-gray-700 mb-4">
                                                {Designation} - {Department}
                                            </p>
                                        </div> */}
                                    </div>
                                </div>


                            </div>
                        </div>

                        {/* <div className="">
                            <div className="bg-white rounded-lg shadow-sm">
                                {resultsData.map((result, idx) => (
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="bg-gray-50 border-b border-gray-200">
                                                    <th className="px-6 py-3 text-left text-sm font-semibold text-[#003366] w-16">#</th>
                                                    <th className="px-6 py-3 text-left text-sm font-semibold text-[#003366]">Details</th>
                                                    <th className="px-6 py-3 text-center text-sm font-semibold text-[#003366] w-32">Download</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {result.results.map((result, index) => (
                                                    <tr key={result.id} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition-colors`}>
                                                        <td className="px-6 py-4 text-sm text-gray-700">{result.id}</td>
                                                        <td className="px-6 py-4 text-sm text-gray-700">{result.description}</td>
                                                        <td className="px-6 py-4 text-center">
                                                            <Button
                                                                size="sm"
                                                                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-xs"
                                                                asChild
                                                            >
                                                                <Link href={result.downloadUrl}>
                                                                    <Download className="h-3 w-3 mr-1" />
                                                                    Download
                                                                </Link>
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ))}
                            </div>
                        </div> */}

                    </div>
                </div>
            </main>

        </div>
    )
}

export { NAACHome }