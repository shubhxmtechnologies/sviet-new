import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card" // Import Card components
import { Separator } from "@/components/ui/separator" // Import Separator
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function IqacPage() {
    const coreFunctions = [
        "Develop and apply quality benchmarks for academic and administrative activities.",
        "Promote a learner-centric environment that encourages innovation, skill development, and effective teaching practices.",
        "Collect and analyze feedback from students, parents, alumni, and stakeholders to improve institutional performance.",
        "Share information on various quality standards and best practices in higher education.",
        "Organize workshops, seminars, and awareness programs on quality-related themes.",
        "Document key institutional activities to support academic growth and strategic planning.",
        "Act as a central coordinator for quality initiatives and foster a culture of continuous improvement.",
        "Maintain a comprehensive Management Information System (MIS) for data-driven decisions.",
        "Prepare and submit the Annual Quality Assurance Report (AQAR) to national agencies like NAAC, NBA, etc."
    ]

    return (
        <div className="container mx-auto px-4 py-8 md:px-6 lg:py-12">
            <h1 className="mb-4 text-4xl font-extrabold text-[#003366] md:text-5xl">
                Internal Quality Assurance Cell (IQAC)
            </h1>
            <div className="mb-8 text-lg text-gray-700">
                <Link href="https://sviet.org.in/wp-content/uploads/Composition-of-IQAC.pdf" className="text-[#007bff] hover:underline font-medium">
                    Click here to view the Document
                </Link>{" "}
                <span className="text-sm text-gray-500">
                    (here attach pdf of IQAC members)
                </span>
            </div>

            <Separator className="my-8" />

            <Card className="mb-8 shadow-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-[#003366]">
                        Overview
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                    <p>
                        At Swami Vivekanand Institute of Engineering & Technology (SVIET),
                        the Internal Quality Assurance Cell (IQAC) plays a key role in
                        maintaining and enhancing the quality of education and institutional
                        processes. In line with UGC guidelines under the XII Plan, the IQAC
                        is reconstituted to ensure that quality becomes a continuous and
                        integral part of the institution&apos;s functioning.
                    </p>
                    <p>
                        IQAC works as a central unit to promote a culture of quality
                        awareness and accountability across academics, administration, and
                        student services. It supports and monitors various initiatives
                        related to teaching, research, faculty development, student
                        feedback, and documentation to ensure that all standards of quality
                        education are consistently met.
                    </p>
                    <p>
                        The presence of a strong IQAC is essential for a successful NAAC
                        accreditation, as internal systems of quality are directly linked to
                        the outcomes of external assessment and recognition.
                    </p>
                </CardContent>
            </Card>

            <Card className="mb-8 shadow-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-[#003366]">
                        Core Functions of IQAC
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {coreFunctions.map((func, index) => (
                            <li key={index} className="flex items-start text-gray-700">
                                <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-[#007bff]" />
                                <span>{func}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <Card className="mb-8 shadow-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-[#003366]">
                        IQAC Vision
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-700">
                        To develop a high-quality academic ecosystem that ensures excellence
                        and integrity across all levels of institutional functioning at
                        SVIET.
                    </p>
                </CardContent>
            </Card>

            <Card className="mb-8 shadow-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-[#003366]">
                        IQAC Mission
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-700">
                        To provide a flexible, modern, and multidisciplinary learning
                        environment that nurtures future leaders and global citizens through
                        quality-driven systems and continuous enhancement practices.
                    </p>
                </CardContent>
            </Card>

            <Card className="mb-8 shadow-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-[#003366]">
                        Members of IQAC
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4 text-gray-700">
                        The Internal Quality Assurance Cell comprises members from academic,
                        administrative, and student domains who collectively work to
                        strengthen and sustain quality practices. The team is committed to
                        building a culture of continuous improvement, ensuring that SVIET
                        evolves with time while delivering value to every learner.
                    </p>
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-6xl mx-auto">
                               
                                <div className="block">
                                    <Card className="shadow-lg pt-0 overflow-hidden ">
                                        <CardContent className="p-0">
                                            <Table >
                                                <TableHeader>
                                                    <TableRow className="bg-blue-50">

                                                        <TableHead className="font-bold w-1  text-blue-900">
                                                            Sr. No
                                                        </TableHead>

                                                        <TableHead className="font-bold py-4 max-w-[200px] whitespace-normal break-words px-10 text-blue-900">
                                                            Position
                                                        </TableHead>
                                                        <TableHead className="font-bold py-4 px-10 text-blue-900">
                                                            Name
                                                        </TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody >
                                                    <TableRow className=" hover:bg-gray-50">
                                                        <TableCell className=" font-semibold px-4">
                                                            {1}
                                                        </TableCell>
                                                        <TableCell className="py-4 max-w-[300px] whitespace-normal break-words font-medium px-10 text-blue-900">
                                                            Chairperson
                                                        </TableCell>
                                                        <TableCell className="font-semibold py-4 px-10">
                                                            Dr. Pertik Garg (Principal-SVIET)
                                                        </TableCell>

                                                    </TableRow>
                                                    <TableRow className=" hover:bg-gray-50">
                                                        <TableCell className="font-semibold px-4">
                                                            {2}
                                                        </TableCell>
                                                        <TableCell className="py-4 max-w-[300px] whitespace-normal break-words font-medium px-10 text-blue-900">
                                                            Administrative Officers
                                                        </TableCell>
                                                        <TableCell className="font-semibold py-4 px-10">
                                                            Mr. Ankur Gupta (Director Finance)                    </TableCell>

                                                    </TableRow>
                                                    <TableRow className=" hover:bg-gray-50">
                                                        <TableCell className="font-semibold px-4">
                                                            {3}
                                                        </TableCell>
                                                        <TableCell className="py-4 max-w-[300px] whitespace-normal break-words font-medium px-10 text-blue-900">
                                                            Faculty Representative                    </TableCell>
                                                        <TableCell className="font-semibold py-4 px-10">
                                                            <div>Ms. Vandana</div>
                                                            <div>Ms. Navdeesh Kaur</div>
                                                            <div>Ms. Shivani Guleria</div>
                                                        </TableCell>

                                                    </TableRow>
                                                    <TableRow className=" hover:bg-gray-50">
                                                        <TableCell className="font-semibold px-4">
                                                            {4}
                                                        </TableCell>
                                                        <TableCell className="py-4 max-w-[300px] whitespace-normal break-words font-medium px-10 text-blue-900">
                                                            Management Representative
                                                        </TableCell>
                                                        <TableCell className="font-semibold py-4 px-10">
                                                            Er. Vishal Garg (Director Admin & Secretarial)
                                                        </TableCell>

                                                    </TableRow>
                                                    <TableRow className=" hover:bg-gray-50">
                                                        <TableCell className="font-semibold px-4 ">
                                                            {5}
                                                        </TableCell>
                                                        <TableCell className="py-4 max-w-[300px] whitespace-normal break-words font-medium px-10 text-blue-900">
                                                            Nominees from local society, students and alumini                     </TableCell>
                                                        <TableCell className="font-semibold py-4 px-10">
                                                            <div>Ms. Pooja (Society Representative)</div>
                                                            <div>Ronit Jai Prakash (Student Representative)</div>
                                                            <div>Anam Rashid (Student Representative)</div>
                                                            <div>Mr. Monarchdeep Singh Chahal (Alumni)</div>                    </TableCell>

                                                    </TableRow>
                                                    <TableRow className=" hover:bg-gray-50">
                                                        <TableCell className="font-semibold px-4">
                                                            {6}
                                                        </TableCell>
                                                        <TableCell className="py-4 max-w-[300px] whitespace-normal break-words font-medium px-10 text-blue-900">
                                                            Employer/Industrialist Nominees                     </TableCell>
                                                        <TableCell className="font-semibold py-4 px-10">
                                                            <div>Mr. Varun Garg (CEO, S-Digital Solutions),</div>
                                                            <div>Mr. Tarun Singla (MD, ENERGOS TECH)</div>                    </TableCell>

                                                    </TableRow>
                                                    <TableRow className=" hover:bg-gray-50">
                                                        <TableCell className="font-semibold px-4">
                                                            {7}
                                                        </TableCell>
                                                        <TableCell className="py-4 max-w-[300px] whitespace-normal break-words font-medium px-10 text-blue-900">
                                                            IQAC Director                     </TableCell>
                                                        <TableCell className="font-semibold py-4 px-10">
                                                            Dr. Ashok Goyal                    </TableCell>

                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div></div></section>
                </CardContent>
            </Card>
        </div>
    )
}
