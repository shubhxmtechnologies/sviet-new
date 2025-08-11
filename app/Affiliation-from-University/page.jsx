import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
const resultsData = [
    {
        results: [
            { id: 1, description: "SVIET- AFFILIATION LETTER 2023-24", downloadUrl: "/Documents/letters/1.pdf" },
            { id: 2, description: "SVIET- AFFILIATION LETTER 2024-25", downloadUrl: "/Documents/letters/2.pdf" },
            {
                description: "SVIET- AFFILIATION LETTER 2025-26", downloadUrl: "/Documents/letters/3.pdf"
            },
            {
                description: "SVIET- AFFILIATION  LETTER 2021-22",
                downloadUrl: "/Documents/letters/4.pdf"
            },
            {
                description: "SVIET- AFFILIATION LETTER  2022-23",
                downloadUrl: "/Documents/letters/5.pdf"
            }

        ]
    },



]
const page = () => {
    return (
        <div className="flex min-h-screen flex-col">

            <main className="flex-1 bg-gray-50">
                <div className="container mx-auto px-4 py-8 md:px-6">

                    <div className="">
                        <div className="bg-white rounded-lg shadow-sm">
                            {resultsData.map((result, idx) => (
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="bg-gray-50 border-b border-gray-200">
                                                <th className="px-6 py-3 text-left text-sm font-semibold text-[#003366] w-16">Sr. No.</th>
                                                <th className="px-6 py-3 text-left text-sm font-semibold text-[#003366]">Details</th>
                                                <th className="px-6 py-3 text-center text-sm font-semibold text-[#003366] w-32">Download</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {result.results.map((result, index) => (
                                                <tr key={index} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition-colors`}>
                                                    <td className="px-6 py-4 text-sm text-gray-700">{index + 1}</td>
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
                    </div>
                </div>
            </main>
        </div>
    )
}

export default page