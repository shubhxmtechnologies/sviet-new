import React from 'react'

const data = [
    {
        srNo: 1,
        composition: "Chairperson",
        members: ["Mr. Sarabjeet Singh, Dean (Student Welfare)"],
    },
    {
        srNo: 2,
        composition: "Senior Faculty Members",
        members: [
            "Dr. Neeraj Kumar, Associate Professor & Head (MBA)",
            "Dr. Indu Batra, Associate Professor (Applied Sciences)",
            "Ms. Gurwinder Kaur, Assistant Professor & Head (Applied Sciences)"
        ],
    },
    {
        srNo: 3,
        composition: "Students as Members",
        members: [
            "Ms. Shital Kumari, B.TECH-CSE/6th Semester",
            "Mr. Bibek Kumar Yadav, B.TECH-CE/6th Semester"
        ],
    }
]

const Grivence = () => {
    return (
        <>


            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            GRIEVANCE REDRESSAL COMMITTEE

                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <div className="flex items-start gap-3">
                                <p className='text-justify'>
                                    Students Grievance Redressal Committee (SGRC) is established to listen to the grievances of student as well as to resolve it immediately based on the sensitivity of the problem. Students can express their grievance by Contact Us. They can meet the Chairman of the Redressal committee in person if they want to. The committee will take action immediately and assures the grievance within a week.                             </p>
                            </div>



                        </div>
                    </div>
                </div>
            </section>




            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Grievance Redressal Committee Members:
                        </h2>


                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">

                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Sr. No.
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Composition of SGRC
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Name & Designation
                                        </th>



                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr key={index}>
                                            <td className="border border-gray-300 px-4 py-3 align-top">
                                                {item.srNo}
                                            </td>
                                            <td className="border border-gray-300 px-4 py-3 align-top">
                                                {item.composition}
                                            </td>
                                            <td className="border border-gray-300 px-4 py-3">
                                                <ul className=" ">
                                                    {item.members.map((member, idx) => (
                                                        <l key={idx}>{member}</l>
                                                    ))}
                                                </ul>
                                            </td>
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

export default Grivence

