import React from 'react'
import { CheckCircle, Settings } from 'lucide-react';
import { antiraggingdata, internationalComplaintData, obcData, scstdata, sgrcData, womenData } from './Members';

const Page = () => {
    return (
        <>
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Students Grievance Redressal Committee (SGRC) Members:
                        </h2>


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
                                    {sgrcData.map(item => (<tr key={item.srNo}>
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
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Members of SC/ST Committee :                       </h2>


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


                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Email
                                        </th>
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
                                        <td className="border border-gray-300 px-4 py-3">
                                            {item.Emails}
                                        </td>

                                    </tr>))}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Members of Women Grievances Cell  :                     </h2>


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

            <section className="py-16 bg-white">
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
                                            {item.Designation}
                                        </td>


                                    </tr>))}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            Members of Internal Complaint Committee                        </h2>


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


                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Contact No
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {internationalComplaintData.map(item => (<tr key={item.srNo}>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {item.srNo}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {item.name}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {item.Designation}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {item.Contact}
                                        </td>

                                    </tr>))}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
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


                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                                            Email
                                        </th>
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
                                        <td className="border border-gray-300 px-4 py-3">
                                            {item.Emails}
                                        </td>

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