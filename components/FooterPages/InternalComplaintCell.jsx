import React from 'react'

const data = [
    {
        srNo: 1,
        position: "Presiding Officer",
        nameAndDesignation: "Dr. Vandana\nAssociate Professor & Head-CA",
        contact: "9877797457"
    },
    {
        srNo: 2,
        position: "Member (Teaching Faculty Representatives)",
        nameAndDesignation:
            "Er. Jarnail Singh\nAssistant Professor & Head-CSE\n\nEr. Shivani Guleria\nAssistant Professor & Head-CE",
        contact: "8437391235\n6239138362"
    },
    {
        srNo: 3,
        position: "Member (Non-Teaching Faculty Representatives)",
        nameAndDesignation:
            "Ms. Rupinder Kaur\nAdmission Counsellor\n\nMs. Jyotsna Duggal\nHR Manager",
        contact: "7087421722\n7888744295"
    },
    {
        srNo: 4,
        position: "Member (Non-Govt. Organization)",
        nameAndDesignation: "Mr. Manpreet Singh Brar\nAbroad Educare, Zirakpur",
        contact: "9417431947"
    },
    {
        srNo: 5,
        position: "Member (Student Representatives)",
        nameAndDesignation:
            "Ms. Swikrty Biswas\nB.TECH-CSD/4th Semester\n\nMr. Gaurav\nB.TECH-ECE/4th Semester",
        contact: "9836214958\n7876680378"
    }
]

const InternalComplaintCell = () => {
    return (
        <>



            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Members of  Committee                        </h2>


                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Sr. No.</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Position in ICC</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Name & Designation of Member</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Contact No.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr key={index}>
                                            <td className="border border-gray-300 px-4 py-3 align-top">{item.srNo}</td>
                                            <td className="border border-gray-300 px-4 py-3 align-top">{item.position}</td>
                                            <td className="border w-72 min-w-72 max-w-72 border-gray-300 px-4 py-3 whitespace-pre-line">{item.nameAndDesignation}</td>
                                            <td className="border border-gray-300 px-4 py-3 whitespace-pre-line">{item.contact}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default InternalComplaintCell