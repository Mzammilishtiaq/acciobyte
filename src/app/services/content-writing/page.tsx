"use client";
import React from "react";
import PageHeader from "@/components/pagerheader";
import ScrollBanner from "@/components/ScrollBanner";
import ServicesBLog from "@/components/services-blog";
import Contentcreater1 from '../../../../public/contentwriterimage1.jpg'
import ContentFeature from '../../../../public/contentfeature.jpg'
import ContentProcess1 from '../../../../public/processimgage1.jpg'
import ContentProcess2 from '../../../../public/processimgage2.jpg'
import ContentProcess3 from '../../../../public/processimgage3.jpg'
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHeader
        title={"Content Writing"}
        subtitle1={"Home"}
        subtitle2={"services"}
        classsubtitle2={""}
        subtitle3={"content-writing"}
        classsubtitle3={"text-[#bff747]"}
        star={"*"}
      />
      <ScrollBanner />
      <ServicesBLog
        firstImage={Contentcreater1.src}
        firsttitle={"Our Content Writing Services help businesses craft compelling, high-quality content that engages audiences, enhances brand credibility, and drives conversions. From blog posts and website content to SEO-optimized articles and social media copy, we deliver content that aligns with your brand voice and business goals. Let us create impactful content that tells your story effectively and resonates with your audience."}
        featurekeyname={"content writing"}
        featurekeyimage={ContentFeature.src}
        featurekeytitle={"We specialize in crafting engaging, informative, and SEO-optimized content that speaks directly to your audience. Our focus is on delivering high-quality, well-researched articles, blogs, and web copy that drive traffic and build credibility. Whether it’s for your website, social media, or marketing materials, we ensure every piece of content aligns with your brand's voice and goals, effectively engaging readers and fostering conversions. Let us help you create content that connects."}
        featurekeystep1={"SEO-friendly content for visibility."}
        featurekeystep2={"Captivating blog posts & articles."}
        featurekeystep3={"Persuasive website & landing copy."}
        featurekeystep4={"Engaging social media posts."}
        featurekeystep5={"Polished editing & proofreading."}
        featurekeystep6={"Let us help you create content that connects."}
        processkeyname={"content writing"}
        processkeytitle={"Our content writing process begins with a deep understanding of your brand, audience, and objectives. We focus on creating well-researched, compelling content that resonates with your target market. We prioritize SEO best practices to boost your content's visibility on search engines. Through collaboration and feedback, we refine the content to ensure it aligns with your goals and delivers measurable results. Whether it’s blog posts, website copy, or email newsletters, we guarantee content that captivates and converts."}
        planingcardimage1={ContentProcess1.src}
        planingcardimage2={ContentProcess2.src}
        planingcardimage3={ContentProcess3.src}
        planingcardtitle1={"Research & Strategy Development"}
        planingcardtitle2={"Content Creation & Optimization"}
        planingcardtitle3={"Review & Refinement"}
        planingcarddescription1={"We analyze your brand, target audience, and competitors to develop a content strategy that aligns with your goals."}
        planingcarddescription2={"Our expert writers craft engaging, well-structured content optimized for readability and SEO."}
        planingcarddescription3={"We ensure content accuracy, edit for clarity, and finalize it for publication across relevant platforms."}
      />
    </div>
  );
}
