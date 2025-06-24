"use client";
import PageHeader from "@/components/pagerheader";
import ScrollBanner from "@/components/ScrollBanner";
import ServicesBLog from "@/components/services-blog";
import Image from '../../../../public/socialimage.jpg'
import ImageFeature from '../../../../public/socialfeature.jpg'
import ImagePlan1 from '../../../../public/socialplan1.jpg'
import ImagePlan2 from '../../../../public/socialplan2.jpg'
import ImagePlan3 from '../../../../public/socialplan3.jpg'
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHeader
        title={"Software Development"}
        subtitle1={"Home"}
        subtitle2={"services"}
        classsubtitle2={""}
        subtitle3={"software-development"}
        classsubtitle3={"text-[#bff747]"}
        star={"*"}
      />
      <ScrollBanner />
      <ServicesBLog
        firstImage={Image.src}
        firsttitle={"Our Software Development Services provide custom-built solutions tailored to your business needs. We specialize in developing scalable, secure, and high-performance software applications, from web and mobile apps to enterprise solutions. Whether you need a new system or enhancements to an existing one, our expert developers leverage the latest technologies to deliver innovative, user-friendly, and future-ready solutions."}
        featurekeyimage={ImageFeature.src}
        featurekeyname="software development"
        featurekeytitle={"We take a user-centric and agile approach to software development, ensuring that each solution aligns with business objectives and industry standards. Our development process focuses on innovation, security, and efficiency to deliver top-tier digital products."}
        featurekeystep1={"Tailored custom software for business needs."}
        featurekeystep2={"Scalable web & mobile apps for seamless user experience."}
        featurekeystep3={"Secure & efficient API development & integration."}
        featurekeystep4={"Optimized cloud-based solutions for performance & scalability."}
        featurekeystep5={"Robust security & compliance measures for data protection."}
        featurekeystep6={"Daily platform management and reputation monitoring."}
        processkeyname={"software development"}
        processkeytitle={"Our software development process is built around understanding your business needs and delivering tailored solutions that exceed expectations. We begin by gathering detailed requirements, followed by a thorough analysis to ensure the most effective solution. Throughout development, we employ agile methodologies to maintain flexibility and ensure timely delivery. Our team conducts rigorous testing to guarantee the final product is secure, efficient, and ready for deployment, while also providing ongoing support for continued success."}
        planingcardimage1={ImagePlan1.src}
        planingcardimage2={ImagePlan2.src}
        planingcardimage3={ImagePlan3.src}
        planingcardtitle1={"Design & Development"}
        planingcardtitle2={"Testing & Deployment"}
        planingcardtitle3={"Performance Monitoring & Optimization"}
        planingcarddescription1={"Our team designs intuitive UI/UX and develops robust software solutions tailored to your needs."}
        planingcarddescription2={"Our team designs intuitive UI/UX and develops robust software solutions tailored to your needs."}
        planingcarddescription3={"We conduct rigorous testing, deploy the software, and ensure seamless integration into your environment."}
      />
    </div>
  );
}
