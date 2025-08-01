import { Header, HeroSection, MainNav, NewsEvents, TopBanner } from "@/components/Home";


export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBanner />

      <Header />
      <MainNav />
      <main className="flex-1">
        <HeroSection />
        <NewsEvents />
        {/* <PrincipalMessage /> */}
        {/* <CollegeOverview /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}
