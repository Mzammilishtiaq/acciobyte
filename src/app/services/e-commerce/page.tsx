"use client";
import PageHeader from "@/components/pagerheader";
import ScrollBanner from "@/components/ScrollBanner";
import ServicesBLog from "@/components/services-blog";
import Image from '../../../../public/ecommerceimage1.jpg'
import FeatureImage from '../../../../public/ecommercefeature.jpg'
import PlanImage1 from '../../../../public/ecommerplanimage1.jpg'
import PlanImage2 from '../../../../public/ecommerplanimage2.jpg'
import PlanImage3 from '../../../../public/ecommmplanimage3.jpg'
export default function ServicesPage() {

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHeader
        title={"E-commerce"}
        subtitle1={"Home"}
        subtitle2={"services"}
        classsubtitle2={""}
        subtitle3={"ecommmmerce"}
        classsubtitle3={"text-[#bff747]"}
        star={"*"}
      />
      <ScrollBanner />
      <ServicesBLog
        firstImage={Image.src}
        firsttitle={"Our E-Commerce Solutions are designed to help businesses build, manage, and scale their online stores with ease. Whether you need a custom-built e-commerce website, seamless payment integration, or optimized product listings, we provide end-to-end solutions that drive sales and enhance customer experience. By combining cutting-edge technology with user-friendly design, we help businesses maximize their online potential and increase revenue."}
        featurekeyname={"e-commerce"}
        featurekeyimage={FeatureImage.src}
        featurekeytitle={"Our e-commerce solutions focus on creating a seamless shopping experience for customers while optimizing business operations. We develop high-performance online stores that are mobile-friendly, easy to navigate, and designed for maximum conversions. From secure payment integration to inventory management, our solutions are tailored to meet your business needs. With built-in SEO and marketing tools, we ensure your store gains visibility and attracts the right audience."}
        featurekeystep1={"Custom e-commerce development (Shopify, WooCommerce, Magento)"}
        featurekeystep2={"Secure payment gateway integration for smooth transactions."}
        featurekeystep3={"Mobile-optimized, responsive design"}
        featurekeystep4={"Product catalog management for better visibility."}
        featurekeystep5={"SEO & conversion optimization for higher sale"}
        featurekeystep6={"Streamlined order & inventory management."}
        processkeyname={"e-commerce"}
        processkeytitle={"Our e-commerce development process is centered on creating a customized shopping experience that aligns with your business objectives. We begin by understanding your brand and customer base to design an intuitive and responsive online store. Through seamless integration of payment gateways, product catalogs, and security measures, we ensure a secure, smooth transaction experience."}
        planingcardimage1={PlanImage1.src}
        planingcardimage2={PlanImage2.src}
        planingcardimage3={PlanImage3.src}
        planingcardtitle1={"Discovery & Strategy Development"}
        planingcardtitle2={"Development & Implementation"}
        planingcardtitle3={"Testing, Launch & Optimization"}
        planingcarddescription1={"We analyze your business needs, target audience, and competition to develop a tailored e-commerce strategy."}
        planingcarddescription2={"Our team designs and builds a fully functional e-commerce platform with integrated payment systems, optimized product pages, and a seamless user experience."}
        planingcarddescription3={"Before launch, we conduct rigorous testing to ensure a smooth shopping experience. Post-launch, we continuously monitor and optimize for performance and conversions."}
      />
    </div>
  );
}
