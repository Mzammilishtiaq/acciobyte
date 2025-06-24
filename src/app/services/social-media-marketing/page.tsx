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
        title={"Social Media Marketing"}
        subtitle1={"Home"}
        subtitle2={"services"}
        classsubtitle2={""}
        subtitle3={"social-media-marketing"}
        classsubtitle3={"text-[#bff747]"}
        star={"*"}
      />
      <ScrollBanner />
      <ServicesBLog
        firstImage={Image.src}
        firsttitle={"Our social media marketing services help you build a strong online presence, engage with your audience, and drive business growth. We craft tailored strategies for platforms like Facebook, Instagram, LinkedIn, Twitter, and TikTok to increase brand awareness, generate leads, and boost conversions. By leveraging data-driven insights and creative content, we ensure your brand stands out in the digital landscape."}
        featurekeyname={"social media marketing"}
        featurekeyimage={ImageFeature.src}
        featurekeytitle={"Our social media marketing services are designed to increase your brand’s visibility and engagement across popular platforms like Facebook, Instagram, LinkedIn, and Twitter. We focus on creating personalized strategies, managing campaigns, and optimizing content to resonate with your target audience. From content creation and scheduling to influencer partnerships and performance tracking, we ensure that your social media presence drives real business results."}
        featurekeystep1={"Tailored social media strategies for your goals."}
        featurekeystep2={"Engaging content creation and scheduling."}
        featurekeystep3={"Targeted PPC & social ad campaigns"}
        featurekeystep4={"Influencer partnerships and audience engagement."}
        featurekeystep5={"Performance tracking and optimization."}
        featurekeystep6={"Daily platform management and reputation monitoring."}
        processkeyname={"social media marketing"}
        processkeytitle={"and audience. We start by crafting a custom strategy that includes content creation, post scheduling, and targeted ad campaigns. Our team uses analytics to track engagement and optimize content for better results. By engaging with your audience and influencers, we build strong community relationships, driving both brand awareness and customer loyalty. Regular reporting ensures transparency, while ongoing optimization ensures your social media channels are always aligned with your business goals."}
        planingcardimage1={ImagePlan1.src}
        planingcardimage2={ImagePlan2.src}
        planingcardimage3={ImagePlan3.src}
        planingcardtitle1={"Discovery & Strategy Development"}
        planingcardtitle2={"Content Creation & Campaign Execution"}
        planingcardtitle3={"Performance Monitoring & Optimization"}
        planingcarddescription1={"We analyze your brand, target audience, and competitors to develop a customized social media strategy aligned with your business goals."}
        planingcarddescription2={"Our team designs engaging posts, videos, and stories while executing campaigns across multiple platforms to maximize reach and engagement."}
        planingcarddescription3={"We continuously track campaign performance, analyze data, and optimize strategies to improve results and ensure maximum ROI."}
      />
    </div>
  );
}
