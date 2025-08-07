export const navItems = [
    {
        name: "ABOUT US",
        dropdown: [
            {
                title: "", // No title for the first column as per image
                links: [
                    { name: "About SVIET", href: "/About-Sviet" },
                    { name: "Governing Body", href: "/governing-body" },
                    { name: "Administration", href: "/administration" },
                    { name: "Statutory Committee", href: "/committee" },
                ]
            },

        ]
    },

    { name: "Academics", href: "/iqac" },
    {
        name: "Admissions",
        href: "",
        dropdown: [
            {
                links: [
                    { name: "Under Graduation", href: "/Under-Graduation" },
                    { name: "Post Graduation", href: "/Post-Graduation" },
                    { name: "International Admissions", href: "/International-Admissions" }
                ]
            },
            
        ]
    },
    { name: "IQAC", href: "/iqac" },
    { name: "NAAC", href: "#", dropdown: [] },
    { name: "PLACEMENTS", href: "#", dropdown: [] },
    { name: "RESEARCH", href: "#", dropdown: [] },
    { name: "OUTREACH", href: "#", dropdown: [] },
    { name: "FEEDBACK", href: "#", dropdown: [] },
    { name: "CONTACT US", href: "#", dropdown: [] },
    { name: "GREEN & CLEAN CAMPUS", href: "#", dropdown: [] },
    { name: "HR MANUAL", href: "#", dropdown: [] },

]