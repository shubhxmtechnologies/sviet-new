import { BoardOfManagement } from '@/components/Home'
import React from 'react'
const managementTeam = [
    {
        name: "Mr. Ashwani Garg",
        position: "Chairman",
        image: "/Management/ashwiniGarg.jpg",
        message:
            "I welcome every aspiring achiever to the Swami Vivekanand Institute of Engineering & Technology. Today SVIET  has  become  a  dream  place  to  provide  valuable  educational  experience  to  students,  from  different cultures and backgrounds. I am delighted to see the contributions, the students, faculty, and management of SVIET have been making towards the overall success of students across the world. We have an interactive curriculum  made  to  provide  definite  learning  solutions  in  the  field  of  Scientific  studies,  Business  & Engineering.  In this world known as a  global village, all boundaries and the national borders are  gradually becoming  more  transparent.  Our  international  collaborations  have  helped  students  to  form  unlimited opportunities of global exposure for our students, to excel in their careers. So join  your hands with SVIET and be future-ready. "
    },
    {
        name: "Mr. Ashok Garg",
        position: "President",
        image: "/Management/ashoksir.jpg",
        message:
            "SVIET  has  experienced  remarkable  growth  in  recent  years,  earning  widespread  acclaim  for  its rapid advancement.  Our  journey  from  inception  to  our  current  standing  is  a  testament  to  our  unwavering dedication, exceptional faculty, and enriching learning environment. With a focus on quality education, we offer  diverse  programs  affiliated  with  both  national  and  international  universities.  We  celebrate  the achievements of our faculty, staff, and partners, employing modern teaching methods that empower students to realize their full potential. Emphasizing hands-on experience over mere theoretical knowledge, SVIET is dedicated   to   providing   practical   solutions   and   fostering   intellectual   brilliance   through   research   and development. Let's collaborate in building a skilled society together."
    },
   
    {
        name: "Adv. Shubham Garg",
        position: "Secretary",
        image: "/Management/2.jpg",
        message:
            "At  Swami  Vivekanand  Institute  of  Engineering  &  Technology  (SVIET),  we  are  committed  to  building  a learning environment that not only imparts knowledge but also nurtures innovation, leadership,  and ethical values.  Since  our  inception  in  2004,  we  have  continuously  evolved  to  meet  the  changing  needs  of  the industry and society by offering forward-thinking, outcome-based academic programs. We believe that academic success is deeply rooted in a student-centric approach backed by strong academic planning, transparent systems, and digital integration.  To  ensure  holistic  development,  we  regularly  organize  national  and  international  conferences,  technical workshops, guest lectures, industrial visits, and cultural events.  At  SVIET,  we  are  not  just  teaching  subjects—we  are  shaping  futures.  Our  focus  remains  on  developing competent, confident, and socially conscious graduates who are ready to lead in an ever-changing world."
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