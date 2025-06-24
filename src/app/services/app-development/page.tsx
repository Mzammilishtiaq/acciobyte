"use client";
import PageHeader from "@/components/pagerheader";
import ScrollBanner from "@/components/ScrollBanner";
import ServicesBLog from "@/components/services-blog";
import AppTitle1 from "../../../../public/apptitle1.jpg";
import AppFeature from "../../../../public/appfeature.jpg";
import AppPlaning1 from "../../../../public/appplaning1.jpg";
import AppPlaning2 from "../../../../public/appplaining2.jpg";
import AppPlaning3 from "../../../../public/appplaning3.jpg";
export default function ServicesPage() {

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHeader
        title={"App Development"}
        subtitle1={"Home"}
        subtitle2={"services"}
        classsubtitle2={""}
        subtitle3={"app-development"}
        classsubtitle3={"text-[#bff747]"}
        star={"*"}
      />
      <ScrollBanner />
      <ServicesBLog
        firstImage={AppTitle1.src}
        firsttitle={
          "Our App Development Services are designed to create high-performing, user-friendly, and scalable mobile applications that cater to your business needs. Whether it's iOS, Android, or cross-platform development, we ensure seamless functionality, intuitive UI/UX design, and robust security. Our goal is to deliver apps that enhance user engagement, improve efficiency, and drive business growth."
        }
        featurekeyname={"android & iOS"}
        featurekeyimage={AppFeature.src}
        featurekeytitle={
          "We specialize in creating high-performance mobile apps that provide seamless experiences across iOS and Android devices. Our focus is on user-centric design, intuitive interfaces, and robust functionality. Whether you're looking to build a native or hybrid app, we ensure high security, scalability, and smooth performance to meet your business objectives. Let us help you engage your audience and elevate your mobile presence"
        }
        featurekeystep1={"AppFeature"}
        featurekeystep2={"Intuitive UI/UX for a seamless experience."}
        featurekeystep3={"Fast, scalable, and high-performance apps."}
        featurekeystep4={"Secure backend and API integration."}
        featurekeystep5={"Rigorous testing for a bug-free app."}
        featurekeystep6={"egular updates and ongoing support."}
        processkeyname={"android & iOS"}
        processkeytitle={
          "Our mobile app development process centers around understanding your business needs and delivering tailored solutions. We combine cutting-edge technologies with creative design to build apps that are both functional and user-friendly. From idea validation and wireframing to development and post-launch support, we ensure that every aspect of your mobile app meets your goals. Our commitment to delivering high-quality, scalable, and secure mobile applications ensures that your business stays ahead of the competition."
        }
        planingcardimage1={AppPlaning1.src}
        planingcardimage2={AppPlaning2.src}
        planingcardimage3={AppPlaning3.src}
        planingcardtitle1={"Discovery & Planning"}
        planingcardtitle2={"Design & Prototyping"}
        planingcardtitle3={"Development & Testing"}
        planingcarddescription1={
          "We begin with in-depth research to understand your business goals, target audience, and app requirements."
        }
        planingcarddescription2={
          "Our designers create wireframes and interactive prototypes to visualize the app's interface and user experience."
        }
        planingcarddescription3={
          "Using the latest technologies, we build the app and conduct rigorous testing to ensure security, functionality, and performance."
        }
      />
    </div>
  );
}
