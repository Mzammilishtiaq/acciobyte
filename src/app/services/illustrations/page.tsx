"use client";
import PageHeader from "@/components/pagerheader";
import ScrollBanner from "@/components/ScrollBanner";
import ServicesBLog from "@/components/services-blog";
import Image from '../../../../public/liusstorimage.png'
import ImageFeature from '../../../../public/liusstorfeature.jpg'
import ImagePlan1 from '../../../../public/liusstorplan1.jpg'
import ImagePlan2 from '../../../../public/liusstorplan2.jpg'
import ImagePlan3 from '../../../../public/liusstorplan3.jpg'
export default function ServicesPage() {

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHeader
        title={"Illustrations"}
        subtitle1={"Home"}
        subtitle2={"services"}
        classsubtitle2={""}
        subtitle3={"illustrations"}
        classsubtitle3={"text-[#bff747]"}
        star={"*"}
      />
      <ScrollBanner />
      <ServicesBLog
        firstImage={Image.src}
        firsttitle={"Our illustration services bring your ideas to life with stunning, custom-made visuals. Whether it’s book illustrations, digital artwork, brand mascots, infographics, or marketing materials, we create captivating designs that enhance your brand identity. Our skilled illustrators blend creativity with strategy to ensure your illustrations leave a lasting impact. Let us help you tell your story through art."}
        featurekeyname={"illustrations"}
        featurekeyimage={ImageFeature.src}
        featurekeytitle={"Our illustration services provide unique and captivating artwork that brings your ideas to life. From custom digital illustrations to hand-drawn designs, we create visuals that enhance your brand’s identity and storytelling. Whether it’s for marketing campaigns, books, websites, or social media, our tailored illustrations capture attention and engage audiences, making complex ideas more accessible and memorable."}
        featurekeystep1={"Unique digital & hand-drawn illustrations for your brand."}
        featurekeystep2={"Custom mascots and character designs"}
        featurekeystep3={"Engaging visuals for books and publications."}
        featurekeystep4={"Creative artwork for marketing and campaigns."}
        featurekeystep5={"nfographics and data visualizations for clarity."}
        featurekeystep6={"Scalable vector and hand-drawn artwork."}
        processkeyname={"illustrations"}
        processkeytitle={"Our illustration process begins with understanding your vision and brand. We work closely with you to create custom concepts that align with your messaging and style. Using both traditional and digital techniques, we craft detailed artwork that resonates with your audience. Our team ensures each illustration is created with attention to detail and purpose, whether it’s for marketing materials, infographics, or character designs. We provide revisions to ensure the final product perfectly fits your needs and enhances your brand’s visual communication."}
        planingcardimage1={ImagePlan1.src}
        planingcardimage2={ImagePlan2.src}
        planingcardimage3={ImagePlan3.src}
        planingcardtitle1={"Discovery & Concept Development"}
        planingcardtitle2={"Sketching & Storyboarding"}
        planingcardtitle3={"Final Illustration & Detailing"}
        planingcarddescription1={"We begin by understanding your vision, objectives, and audience. Our team conducts research to define the best illustration style and approach."}
        planingcarddescription2={"We create initial sketches or storyboards to outline the structure and composition of the illustration, ensuring alignment with your expectations."}
        planingcarddescription3={"Using industry-leading tools, we refine the sketches into high-quality, polished illustrations with detailed elements, colors, and textures."}
      />
    </div>
  );
}
