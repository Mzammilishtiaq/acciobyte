"use client";
import PageHeader from "@/components/pagerheader";
import ScrollBanner from "@/components/ScrollBanner";
import ServicesBLog from "@/components/services-blog";
import SEOimage from '../../../../public/seoimage.jpg'
import SEOFeature from '../../../../public/seofeature.jpg'
import SEOplan1 from '../../../../public/seoplan1.jpg'
import SEOplan2 from '../../../../public/seoplan2.jpg'
import SEOplan3 from '../../../../public/seoplan3.jpg'
export default function ServicesPage() {

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHeader
        title={"Search Engine Optimization"}
        subtitle1={"Home"}
        subtitle2={"service"}
        classsubtitle2={""}
        subtitle3={"search-engine-optimization"}
        classsubtitle3={"text-[#bff747]"}
        star={"*"}
      />
      <ScrollBanner />
      <ServicesBLog
        firstImage={SEOimage.src}
        firsttitle={"Our SEO Services are designed to enhance your online visibility and drive organic traffic to your website. We use a data-driven approach to optimize your site for search engines, ensuring higher rankings, better engagement, and increased conversions. Whether you're looking to improve local SEO, technical SEO, or content optimization, our team of experts will craft a customized strategy to help your business grow."}
        featurekeyname={"search engine optimization (seo)"}
        featurekeyimage={SEOFeature.src}
        featurekeytitle={"We specialize in boosting your website’s visibility and search engine rankings through tailored SEO strategies. Our focus is on optimizing both on-page and off-page factors to increase organic traffic and improve online presence. With in-depth keyword research, technical optimization, and high-quality content creation, we ensure sustainable growth in search rankings. Let us help you reach your target audience and achieve long-term digital success."}
        featurekeystep1={"Targeted keyword research & strategy"}
        featurekeystep2={"Optimized meta tags, content, & internal links."}
        featurekeystep3={"Technical SEO fixes for speed & mobile performance."}
        featurekeystep4={"High-quality backlinks for domain authority."}
        featurekeystep5={"SEO-driven content creation & optimization"}
        featurekeystep6={"SEO-driven content creation & optimization"}
        processkeyname={"search engine optimization (seo)"}
        processkeytitle={"Our SEO approach is a comprehensive strategy designed to improve your website's visibility and performance. We begin by conducting thorough keyword research to identify high-impact terms that resonate with your audience. From there, we optimize your website’s structure, content, and meta elements to ensure it aligns with search engine algorithms. We also focus on building strong backlinks and monitoring performance, refining strategies as needed to ensure sustained growth and better rankings over time."}
        planingcardimage1={SEOplan1.src}
        planingcardimage2={SEOplan2.src}
        planingcardimage3={SEOplan3.src}
        planingcardtitle1={"SEO Audit & Strategy Development"}
        planingcardtitle2={"Implementation"}
        planingcardtitle3={"Performance Tracking"}
        planingcarddescription1={"We analyze your website`s current performance, research competitors, and create a tailored SEO plan."}
        planingcarddescription2={"We optimize on-page and technical aspects while implementing link-building and content strategies."}
        planingcarddescription3={"We monitor rankings, analyze performance, and adjust strategies for sustained growth."}
      />
    </div>
  );
}
