import React from 'react'
import { antiraggingdata, internationalComplaintData, obcData, scstdata, sgrcData, womenData } from './Members';
export const metadata = {
    title: "Statutory Committee"
}

const Page = () => {
    return (
        <>
            <section className="py-8 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Students Grievance Redressal Committee (SGRC) Members
                        </h2>


                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">

                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Sr. No.
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 w-32 max-w-32 text-left font-semibold">
                                            Composition of SGRC
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Name
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Designation
                                        </th>



                                    </tr>
                                </thead>
                                <tbody>
                                    {sgrcData.map((item, index) => (
                                        <tr key={index}>
                                            <td className="border border-gray-300 px-4 py-3 align-top">
                                                {item.srNo}
                                            </td>
                                            <td className="border border-gray-300 w-32 max-w-32 px-4 py-3 align-top">
                                                {item.composition}
                                            </td>
                                            <td className="border border-gray-300 px-4 py-3">
                                                <ul className="">
                                                    {item.members.map((member, idx) => (
                                                        <li className='mb-7 md:mb-10.5' key={idx}>{member}</li>
                                                    ))}
                                                </ul>
                                            </td>
                                            <td className="border border-gray-300 px-4 py-3">
                                                <ul className="">
                                                    {item.designation.map((des, idx) => (
                                                        <li className='mb-3 md:mb-8 sm:mb-6' key={idx}>{des}</li>
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
            <section className="py-8 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Members of SC/ST Committee                       </h2>


                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">

                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Sr. No.
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Name
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Designation
                                        </th>


                                        {/* <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Email
                                        </th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {scstdata.map(item => (<tr key={item.srNo}>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {item.srNo}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {item.name}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {item.Designation}
                                        </td>
                                        {/* <td className="border border-gray-300 px-4 py-3">
                                            {item.Emails}
                                        </td> */}

                                    </tr>))}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Members of Women Grievances Cell  </h2>


                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">

                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Sr. No.
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Name
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Designation
                                        </th>



                                    </tr>
                                </thead>
                                <tbody>
                                    {womenData.map(item => (<tr key={item.srNo}>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {item.srNo}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {item.name}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {item.Designation}
                                        </td>


                                    </tr>))}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Members of Anti Ragging Committee                   </h2>


                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">

                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Sr. No.
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Name
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Designation
                                        </th>



                                    </tr>
                                </thead>
                                <tbody>
                                    {antiraggingdata.map(item => (<tr key={item.srNo}>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {item.srNo}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {item.name}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {item.designation}
                                        </td>


                                    </tr>))}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Members of Internal Complaint Committee                        </h2>


                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Sr. No.</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Position in ICC</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Name</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Designation of Member</th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Contact No.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {internationalComplaintData.map((item, index) => (
                                        <tr key={index}>
                                            <td className="border border-gray-300 px-4 w-20 min-w-20 max-w-20 py-3 align-top">{item.srNo}</td>
                                            <td className="border border-gray-300 px-4 py-3 w-56 max-w-56 min-w-56 align-top">{item.position}</td>
                                            <td className="border border-gray-300 px-4 py-3 whitespace-pre-line w-72 min-w-72 max-w-72">{item.name}</td>
                                            <td className="border border-gray-300 px-4 py-3 whitespace-pre-line w-96 min-w-96 max-w-96">{item.Designation}</td>
                                            <td className="border border-gray-300 px-4 py-3 whitespace-pre-line">{item.contact}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Members of OBC Welfare and Grievance Committee                       </h2>


                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">

                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Sr. No.
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Name
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Designation
                                        </th>


                                        {/* <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Email
                                        </th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {obcData.map(item => (<tr key={item.srNo}>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {item.srNo}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {item.name}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {item.Designation}
                                        </td>
                                        {/* <td className="border border-gray-300 px-4 py-3">
                                            {item.Emails}
                                        </td> */}

                                    </tr>))}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page