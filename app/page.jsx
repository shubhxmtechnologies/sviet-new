import { BoardOfManagement, CollegeOverview, CurrentInitiative, HeroSection, Highlights, NewsEvents, Recruter, } from "@/components/Home";


export default function HomePage() {
  const managementTeam = [
    {
      name: "Mr. Ashwani Garg",
      position: "Chairman",
      image: "/Management/ashwiniGarg.jpg",
      message:
        "I welcome every aspiring achiever to the Swami Vivekanand Institute of Engineering & Technology. Today SVIET  has  become  a  dream  place  to  provide  valuable  educational  experience  to  students,  from  different cultures and backgrounds. I am delighted to see the contributions, the students, faculty, and management of SVIET have been making towards the overall success of students across the world. We have an interactivecurriculum  made  to  provide  definite  learning  solutions  in  the  field  of  Scientific  studies,  Business  & Engineering.  In this world known as a  global village, all boundaries and the national borders are  gradually becoming  more  transparent.  Our  international  collaborations  have  helped  students  to  form  unlimited opportunities of global exposure for our students, to excel in their careers. So join  your hands with  SVIET and be future-ready."
    },
    {
      name: "Mr. Ashok Garg",
      position: "President",
      image: "/Management/ashoksir.jpg",
      message:
        "SVIET  has  experienced  remarkable  growth  in  recent  years,  earning  widespread  acclaim  for  its rapid advancement.  Our  journey  from  inception  to  our  current  standing  is  a  testament  to  our  unwavering dedication, exceptional faculty, and enriching learning environment. With a focus on quality education, we offer  diverse  programs  affiliated  with  both  national  and  international  universities.  We  celebrate  the achievements of our faculty, staff, and partners, employing modern teaching methods that empower students to realize their full potential. Emphasizing hands-on experience over mere theoretical knowledge, SVIET is dedicated   to   providing   practical   solutions   and   fostering   intellectual   brilliance   through   research   and development. Let's collaborate in building a skilled society together. "
    },


  ]
  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex-1">
        <HeroSection />
        <NewsEvents />
        
       
        <section className="py-12 md:py-16 bg-gray-100 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-4 text-center text-2xl font-bold text-[#003366] md:text-3xl">
              Overview              </h2>
            <p className="mx-auto mb-10 max-w-3xl text-center text-gray-700">
              Founded  in  2004,  <span className="font-medium italic">"Swami  Vivekanand  Institute  of  Engineering  &  Technology  (SVIET)"</span>  is  a  NAAC-accredited  institute  known  for  providing  quality  technical  education.  It  is  the  premier  institute  under  the Swami  Vivekanand  Group  of  Institutes  (SVGOI),  managed  by  the  Shri  Raghu  Nath  Rai  Memorial Educational  &  Charitable  Trust.  With  modern  facilities,  experienced  teachers,  and  a  career-focused approach, SVIET helps students grow into skilled and responsible professionals.
            </p>

          </div>
        </section>
        <CollegeOverview />
        <CurrentInitiative />
        <Highlights />
        <BoardOfManagement managementTeam={managementTeam} />
        <Recruter />
      </main>
    </div>
  )
}
