import AboutAgency from "@/components/about-agency";
import Features from "@/components/features";
import Hero from "@/components/hero";
import JoinAgency from "@/components/join-agency";
import Portfolio from "@/components/portfolio";
import Process from "@/components/process";
import Services from "@/components/services";
import Stats from "@/components/stats";
import LatestNewBLog from "@/components/latestnewsblog";
import Testimonial from "@/components/testmonial";

export default function Home() {
  return (
    <>
     <Hero/>
     <AboutAgency/>
     <Services/>
     <JoinAgency/>
     <Features/>
     <Portfolio/>
     <Testimonial/>
     {/* <Team/> */}
     <LatestNewBLog/>
     <Process/>
     <Stats/>
    </>
  );
}
