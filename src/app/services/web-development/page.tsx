"use client";
import PageHeader from "@/components/pagerheader";
import ScrollBanner from "@/components/ScrollBanner";
import ServicesBLog from "@/components/services-blog";
import Image from '../../../../public/webimage.jpg'
import ImageFeature from '../../../../public/webfeature.jpg'
import ImagePlan1 from '../../../../public/webplan1.jpg'
import ImagePlan2 from '../../../../public/webplan2.jpg'
import ImagePlan3 from '../../../../public/webplan3.jpg'
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHeader
        title={"Web Development"}
        subtitle1={"Home"}
        subtitle2={"services"}
        classsubtitle2={""}
        subtitle3={"web-development"}
        classsubtitle3={"text-[#bff747]"}
        star={"*"}
      />
      <ScrollBanner />
      <ServicesBLog
        firstImage={Image.src}
        firsttitle={"Our Website Development Services are designed to create high-performing, user-friendly, and visually appealing websites tailored to your business needs. Whether you need a corporate website, an e-commerce store, or a custom web application, our expert developers craft responsive, secure, and SEO-friendly websites that enhance user experience and drive conversions. Let us help you build a powerful online presence."}
        featurekeyname={" website development"}
        featurekeyimage={ImageFeature.src}
        featurekeytitle={"We specialize in building fast, secure, and scalable websites. Our focus is on high performance and seamless user experience. With cutting-edge technologies, we ensure reliability and speed. Our solutions help businesses grow and reach a wider audience. Let us take your online presence to the next level."}
        featurekeystep1={"Custom solutions for your business"}
        featurekeystep2={"Fully responsive across all devices"}
        featurekeystep3={"Smooth and secure payment experience"}
        featurekeystep4={"SEO-optimized for better ranking."}
        featurekeystep5={"Fast, secure, and seamless performance."}
        featurekeystep6={"Easy content management with CMS."}
        processkeyname={"website development"}
        processkeytitle={"Our website development approach is a user-centered strategy that blends innovative design with robust functionality. We prioritize creating seamless, responsive websites that offer optimal user experiences across all devices. By utilizing the latest technologies and development best practices, we ensure fast load times, intuitive navigation, and secure integrations, all while maintaining a focus on achieving our clients business goals."}
        planingcardimage1={ImagePlan1.src}
        planingcardimage2={ImagePlan2.src}
        planingcardimage3={ImagePlan3.src}
        planingcardtitle1={"Planning & Strategy"}
        planingcardtitle2={"Design & Development"}
        planingcardtitle3={"Testing & Deployment"}
        planingcarddescription1={"We understand your business needs, target audience, and goals to create a development roadmap."}
        planingcarddescription2={"Our designers create a visually appealing UI, while developers build a functional, high-performance website."}
        planingcarddescription3={"We conduct thorough testing to ensure security, responsiveness, and speed before launching the website."}
      />
    </div>
  );
}
