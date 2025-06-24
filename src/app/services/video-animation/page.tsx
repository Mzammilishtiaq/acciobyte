"use client";
import PageHeader from "../../../components/pagerheader";
import ScrollBanner from "@/components/ScrollBanner";
import ServicesBLog from "@/components/services-blog";
import Image from '../../../../public/videoimage.jpg'
import ImageFeature from '../../../../public/videofeature.jpg'
import ImagePlan1 from '../../../../public/videoplan1.jpg'
import ImagePlan2 from '../../../../public/videoplan2.jpg'
import ImagePlan3 from '../../../../public/videoplan3.jpg'
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHeader
        title={"Video Animation"}
        subtitle1={"Home"}
        subtitle2={"services"}
        classsubtitle2={""}
        subtitle3={"video-animation"}
        classsubtitle3={"text-[#bff747]"}
        star={""}
      />
      <ScrollBanner />
      <ServicesBLog
        firstImage={Image.src}
        firsttitle={"Our video animation services bring your brand to life with engaging and visually compelling animations. Whether it’s explainer videos, promotional content, motion graphics, or 3D animations, we craft high-quality visuals that captivate your audience. By combining creativity with strategic messaging, we help businesses tell their stories effectively, boost engagement, and drive conversions. Let us transform your ideas into stunning animations that leave a lasting impact."}
        featurekeyname={"video animation"}
        featurekeyimage={ImageFeature.src}
        featurekeytitle={"Our video animation services offer dynamic, engaging visuals that capture attention and communicate your message effectively. From explainer videos to promotional animations, we craft animations that simplify complex ideas and enhance brand storytelling. Using cutting-edge animation techniques, we deliver high-quality animations that captivate audiences, increase engagement, and boost conversions"}
        featurekeystep1={"Strong storyboarding & concept development for a solid narrative."}
        featurekeystep2={"High-quality 2D/3D animations for branding and marketing."}
        featurekeystep3={"Clear explainer videos to simplify complex ideas"}
        featurekeystep4={"Effective product demos & promotional videos."}
        featurekeystep5={"Professional voiceovers & sound design."}
        featurekeystep6={"Analytics & optimization for high engagement."}
        processkeyname={"video animation"}
        processkeytitle={"Our animation process begins with understanding your goals and message. We collaborate with you to develop a strong narrative and visual style that aligns with your brand. After storyboarding and scripting, we create stunning animations, incorporating professional voiceovers and sound design to enhance the experience. Throughout the process, we ensure each frame is carefully designed for maximum impact, delivering a polished animation that resonates with your audience and drives results."}
        planingcardimage1={ImagePlan1.src}
        planingcardimage2={ImagePlan2.src}
        planingcardimage3={ImagePlan3.src}
        planingcardtitle1={"Discovery Phase"}
        planingcardtitle2={"Storyboarding & Scriptwriting"}
        planingcardtitle3={"Animation & Design"}
        planingcarddescription1={"We begin by understanding your brand, goals, and target audience. Our team conducts research to define the best animation style and messaging for your project."}
        planingcarddescription2={"We create a visual blueprint and script to structure your animation effectively. This step ensures a cohesive narrative flow."}
        planingcarddescription3={"Using cutting-edge tools, our designers bring the storyboard to life with stunning animations, smooth transitions, and vibrant visuals."}
      />
    </div>
  );
}
