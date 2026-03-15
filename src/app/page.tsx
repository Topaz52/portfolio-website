import HomeSection from "./components/ProfileSection";
import NavBar from "./components/NavBar";
import AboutMeSection from "./components/AboutMeSection";
import TimelineSection from "./components/TimelineSection";
import CertificatesSection from "./components/CertficatesSection"
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-primary-950">
      <NavBar />
      <div className="container mt-16 mx-auto px-5 py-4">
        <div id="top"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-8">
          <HomeSection />
          <AboutMeSection />
        </div>
        <TimelineSection />
        <CertificatesSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
