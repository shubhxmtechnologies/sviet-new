import { AicteLayout } from '@/components/Documents/AicteLayout'
export const metadata = {
    title:"Affiliation from University"
}
const resultsData = [
    {
        results: [
            {
                description: "SVIET- AFFILIATION  LETTER 2021-22",
                downloadUrl: "/Documents/letters/4.pdf"
            },
            {
                description: "SVIET- AFFILIATION LETTER  2022-23",
                downloadUrl: "/Documents/letters/5.pdf"
            },
            { id: 1, description: "SVIET- AFFILIATION LETTER 2023-24", downloadUrl: "/Documents/letters/1.pdf" },
            { id: 2, description: "SVIET- AFFILIATION LETTER 2024-25", downloadUrl: "/Documents/letters/2.pdf" },
            {
                description: "SVIET- AFFILIATION LETTER 2025-26", downloadUrl: "/Documents/letters/3.pdf"
            },


        ]
    },



]

const page = () => {
    return (
        <AicteLayout
            resultsData={resultsData}
            heading={"Affiliation from University"}
        />
    )
}

export default page