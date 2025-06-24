"use client";
import PageHeader from "@/components/pagerheader";
import ScrollBanner from "@/components/ScrollBanner";
import ServicesBLog from "@/components/services-blog";
import Image from '../../../../public/graphicimage.jpg'
import ImageFeature from '../../../../public/graphicfeaturemain.8c9f6fbb.jpg'
import ImagePlan1 from '../../../../public/graphicplan1.jpg'
import ImagePlan2 from '../../../../public/graphicplan2.jpg'
import ImagePlan3 from '../../../../public/graphicplan3.jpg'
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHeader
        title={"Graphic Designer"}
        subtitle1={"Home"}
        subtitle2={"services"}
        classsubtitle2={""}
        subtitle3={"graphic-designer"}
        classsubtitle3={"text-[#bff747]"}
        star={"*"}
      />
      <ScrollBanner />
      <ServicesBLog
        firstImage={Image.src}
        firsttitle={"Our Graphic Designing Services help businesses create visually compelling designs that enhance brand identity, engage audiences, and communicate messages effectively. Whether you need branding materials, social media graphics, UI/UX design, or marketing collateral, our team delivers high-quality visuals tailored to your needs. Let us bring your creative vision to life with stunning designs that leave a lasting impression."}
        featurekeyname={"graphic designing"}
        featurekeyimage={ImageFeature.src}
        featurekeytitle={"We specialize in creating visually striking and impactful designs that communicate your brand's message effectively. Our focus is on delivering unique, creative solutions that enhance your brand’s identity. Whether it’s logos, marketing materials, or web design, we ensure each design is tailored to your target audience, driving engagement and reinforcing brand recognition. Let us bring your vision to life with design that speaks volumes."}
        featurekeystep1={"Unique branding & logo design."}
        featurekeystep2={"Engaging social media visuals"}
        featurekeystep3={"Impactful marketing materials"}
        featurekeystep4={"User-friendly web & app design"}
        featurekeystep5={"Custom illustrations & artwork."}
        featurekeystep6={"User-friendly web & app design"}
        processkeyname={"graphic designing"}
        processkeytitle={"Our graphic design process begins with understanding your brand and goals, ensuring that every design aligns with your vision. We use the latest design trends and tools to craft visually appealing and cohesive designs. From initial concept sketches to final revisions, we work closely with you to create designs that resonate with your audience. Whether it's for digital or print, our designs are crafted for maximum impact, helping your business stand out and make a lasting impression"}
        planingcardimage1={ImagePlan1.src}
        planingcardimage2={ImagePlan2.src}
        planingcardimage3={ImagePlan3.src}
        planingcardtitle1={"Discovery & Concept Development"}
        planingcardtitle2={"Design Creation & Revisions"}
        planingcardtitle3={"Finalization & Delivery"}
        planingcarddescription1={"We understand your brand, goals, and design preferences to create a concept that aligns with your vision."}
        planingcarddescription2={"Our designers craft high-quality visuals, incorporating feedback to refine and perfect the final design."}
        planingcarddescription3={"We provide the final design in multiple formats, ready for digital or print use."}
      />
    </div>
  );
}
