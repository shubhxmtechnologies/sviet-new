import { BoardOfManagement } from '@/components/Home'
import React from 'react'
const managementTeam = [
    {
        name: "Mr. Ashwani Garg",
        position: "Chairman",
        image: "/Management/ashwiniGarg.jpg",
        message:
            "I welcome every aspiring achiever to the Swami Vivekanand Group of Institutions. Today SVGOI has become a dream place to provide valuable educational experience to students, from different cultures and backgrounds. I am delighted to see the contributions, the students, faculty, and management of SVGOI have been making towards the overall success of students across the world. We have an interactive curriculum made to provide definite learning solutions in the field of Scientific studies, Medical studies, Arts, Business & Engineering. In this world known as a global village, all boundaries and the national borders are gradually becoming more transparent. Our international collaborations have helped students to form unlimited opportunities of global exposure for our students, to excel in their careers. So join your hands with SVGOI and be future-ready."
    },
    {
        name: "Mr. Ashok Garg",
        position: "President",
        image: "/Management/ashoksir.jpg",
        message:
            "SVGOI has experienced remarkable growth in recent years, earning widespread acclaim for its rapid advancement. Our journey from inception to our current standing is a testament to our unwavering dedication, exceptional faculty, and enriching learning environment. With a focus on quality education, we offer diverse programs affiliated with both national and international universities. We celebrate the achievements of our faculty, staff, and partners, employing modern teaching methods that empower students to realize their full potential. Emphasizing hands-on experience over mere theoretical knowledge, SVGOI is dedicated to providing practical solutions and fostering intellectual brilliance through research and development. Let's collaborate in building a skilled society together."
    },
    {
        name: "Mr. Vishal Garg",
        position: "Director Secretarial and Administration",
        image: "/Management/vishalsir.jpg",
        message:
            "At SVGOI, we prioritize global standards in academia, fostering active engagement among teachers, students, and industry. Our focus is on holistic education, preparing students for the challenges of a globalized world. With dedicated faculty and staff, we aim to excel in shaping individuals' futures and elevate SVGOI's standing in the academic realm. Our commitment to excellence is reflected in the diverse student body, including foreign exchange students, enriching our campus culture. Join us in experiencing exceptional intellectual and academic opportunities, shaping the future of learning together."
    },
    {
        name: "Mr. Ankur Gupta",
        position: "Director Corporate Affairs",
        image: "/Management/ankurgupta.jpg",
        message:
            "Students from around the country are getting attracted to SVGOI because of our commitment to teaching excellence, focus on research, tailored courses that make our education relevant to changing career dynamics and formidable industry partnerships. The Curriculum is delivered in spacious, amphitheatre-style classrooms—fitted with modern Information and Communication Technology (ICT) equipment to participate in co-curricular and extra-curricular activities through various clubs and societies in the campus. SVGOI provides several opportunities for local students, to visit foreign universities and institutions on such exchange programs, thereby helping them receive invaluable international exposure."
    },

    {
        name: "Dr. Pertik Garg",
        position: "Principal, SVIET",
        image: "/Management/pertik.webp",
        message:
            "At SVIET, we stand at the threshold of excellence, driven by the spirit of innovation, integrity, and inclusivity. As the Principal, I am honored to lead this esteemed institution, where we nurture the minds that shape the future.Our commitment to academic excellence, coupled with a holistic approach to education, empowers our students to become not just engineers and technologists but leaders of tomorrow. We believe in providing a conducive environment where creativity thrives, ideas flourish, and aspirations take flight. As we embark on this journey together, let us remember the words of Swami Vivekananda, “Arise, awake, and stop not till the goal is reached.” Let us strive for excellence in all our endeavors, embracing challenges as opportunities for growth and learning."
    },
    {
        name: "Mr. Sahil Garg",
        position: "Project Director",
        image: "/Management/sahilsir.jpg",
        message:
            "SVGOI epitomizes quality, dedication, values, and commitment, evident through our accomplished alumni. To cement our position as a premier institute in Technical Higher Education in India, we offer diverse, industry-relevant programs. With a student-centric approach, SVGOI is esteemed as one of the top private colleges in North India. From computer science to mechanical engineering, business management to nursing, SVGOI provides a wide array of educational services. Our strength lies in nurturing globally competitive graduates prepared for success in various professional domains. Join us in shaping a brighter future together."
    },
    {
        name: "Mr. Shubham Garg",
        position: "Director Placements",
        image: "/Management/shubham.jpg",
        message:
            "Our aim is to provide Placements & Corporate Interface for the students and to make the students aware about the job opportunities and help them get placed. In the last fifteen years, Training & Placement Office (General) has been successfully able to place students of different courses & has invited reputed MNCs from, Social Sector, Information Technology, Manufacturing, ITES, Media, Services, Banking & Finance, etc. The Training & Placement Office (General) looks after the Campus Placements of the Engineering & Non-Engineering Courses of the College & Coordinates with the respective departmental TPO's regarding the Placement & related activities."
    },
    {
        name: "Mr. Ankur Gill",
        position: "Director Operations",
        image: "/Management/ankur.jpg",
        message:
            "As the Director of Operations at Swami Vivekanand Institute of Engineering and Technology, I am deeply committed to fostering an environment of excellence, innovation, and growth within our institution. With a focus on providing top-notch education and opportunities for our students, I am honored to collaborate with such dedicated professionals like yourselves who share a passion for academic advancement and student success.Our mission at Swami Vivekanand Institute of Engineering and Technology is to empower our students with knowledge, skills, and values that will enable them to thrive in an ever-evolving world. Through our collective efforts, we strive to create an ecosystem where creativity flourishes, ideas are nurtured, and aspirations are realized. I am confident that with your unwavering support and dedication, Swami Vivekanand Institute of Engineering and Technology will continue to reach new heights of success and distinction."
    },

]
const page = () => {
    return (
        <>
            <BoardOfManagement managementTeam={managementTeam}/>
        </>
    )
}

export default page