import ContactUsSection from "@/components/sections/ContactUsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import Header from "@/components/sections/header";
import IntroSection from "@/components/sections/IntroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";

export const metadata = {
  title: "Omar Hassan - Portfolio",
  description:
    "Welcome to my portfolio website showcasing my projects and skills.",
};

export default function PortfolioPage() {
  return (
    <div className=" w-full xl:px-20 min-h-screen bg-[#f8f6ef] flex flex-col ">
      {/* LEFT SIDE */}
      <div className="w-full px-2 md:px-16 py-6 md:py-12 space-y-12">
        <Header />

        <IntroSection />
        <ServicesSection />
      </div>

      {/* RIGHT SIDE bg-[#f3e0a2] */}
      <div className="p-2 md:p-12 space-y-16 transition-all duration-400">
        <ExperienceSection />

        <ProjectsSection />

        <footer className="pt-12">
          <ContactUsSection />
        </footer>
      </div>
    </div>
  );
}
