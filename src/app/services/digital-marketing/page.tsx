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
        title={"Digital Marketing"}
        subtitle1={"Home"}
        subtitle2={"service"}
        classsubtitle2={""}
        subtitle3={"digital-marketing"}
        classsubtitle3={"text-[#bff747]"}
        star={"*"}
      />
      <ScrollBanner />
      <ServicesBLog
        firstImage={SEOimage.src}
        firsttitle={"Our Digital Marketing Services are designed to enhance your brand`s online presence and drive measurable results. We develop customized strategies, including SEO, PPC advertising, social media marketing, content marketing, and email campaigns, to help you reach your target audience effectively. By leveraging data-driven insights and the latest trends, we maximize engagement, increase traffic, and boost conversions, ensuring a strong return on investment."}
        featurekeyname={"digital marketing"}
        featurekeyimage={SEOFeature.src}
        featurekeytitle={"We create result-driven marketing strategies that connect with your audience and enhance your brand’s reach."}
        featurekeystep1={"Boost search rankings with SEO."}
        featurekeystep2={"Drive instant traffic with PPC ads."}
        featurekeystep3={"Grow engagement via social media."}
        featurekeystep4={"Attract customers with quality content."}
        featurekeystep5={"SEO-driven content creation & optimization"}
        featurekeystep6={"SEO-driven content creation & optimization"}
        processkeyname={"digital marketing."}
        processkeytitle={"Our website development approach is a user-centered strategy that blends innovative design with robust functionality. We prioritize creating seamless, responsive websites that offer optimal user experiences across all devices. By utilizing the latest technologies and development best practices, we ensure fast load times, intuitive navigation, and secure integrations, all while maintaining a focus on achieving our clients business goals."}
        planingcardimage1={SEOplan1.src}
        planingcardimage2={SEOplan2.src}
        planingcardimage3={SEOplan3.src}
        planingcardtitle1={"Strategy & Research"}
        planingcardtitle2={"Campaign Execution"}
        planingcardtitle3={"Monitoring & Optimization"}
        planingcarddescription1={"We analyze your brand, industry trends, and target audience to craft a tailored marketing strategy."}
        planingcarddescription2={"Our team implements and manages multi-channel campaigns, including SEO, paid ads, social media, and content marketing"}
        planingcarddescription3={"We continuously track performance, optimize strategies, and provide detailed reports to ensure long-term success."}
      />
    </div>
  );
}
