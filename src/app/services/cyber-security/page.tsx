"use client";
import PageHeader from "@/components/pagerheader";
import ScrollBanner from "@/components/ScrollBanner";
import ServicesBLog from "@/components/services-blog";
import Image1 from "../../../../public/cyberimage1.jpg";
import FeatureImage from "../../../../public/cyberfeature.jpg";
import PlanImage1 from "../../../../public/cyberplan1.jpg";
import PlanImage2 from "../../../../public/cyberplan2.jpg";
import PlanImage3 from "../../../../public/cyberplan3.jpg";
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PageHeader
        title={"Cyber Security"}
        subtitle1={"Home"}
        subtitle2={"services"}
        classsubtitle2={""}
        subtitle3={"cyber-security"}
        classsubtitle3={"text-[#bff747]"}
        star={"*"}
      />
      <ScrollBanner />
      <ServicesBLog
        firstImage={Image1.src}
        firsttitle={
          "Our Cybersecurity Services provide businesses with advanced penetration testing to identify and remediate security vulnerabilities before attackers exploit them. We assess your web applications, networks, and systems to uncover weaknesses and ensure compliance with industry standards. Our approach combines automated and manual testing to deliver comprehensive security insights, helping businesses fortify their defenses against cyber threats."
        }
        featurekeyname={"cyber security"}
        featurekeyimage={FeatureImage.src}
        featurekeytitle={
          "Our penetration testing services help organizations proactively identify security risks and mitigate threats before they cause harm. We simulate real-world attacks using ethical hacking techniques to evaluate your system’s resilience. By providing a detailed security assessment, we help businesses strengthen their security posture and maintain compliance with industry regulations."
        }
        featurekeystep1={"Web & mobile app security testing"}
        featurekeystep2={"Network vulnerability assessment"}
        featurekeystep3={"Cloud security configuration review"}
        featurekeystep4={"API security evaluation"}
        featurekeystep5={"Real-world red team simulations"}
        featurekeystep6={"Compliance & risk alignment (GDPR, ISO, PCI-DSS)"}
        processkeyname={"cyber security"}
        processkeytitle={
          "Our cyber security approach is rooted in a deep understanding of your business and its unique security needs. We start by conducting thorough assessments to identify vulnerabilities and potential risks. Based on the findings, we design a customized security strategy that addresses both immediate and long-term threats. We implement cutting-edge security measures and continuously monitor your systems to detect and mitigate potential issues. With regular updates and incident response protocols in place, we ensure your business remains secure and resilient against any cyber threat."
        }
        planingcardimage1={PlanImage1.src}
        planingcardimage2={PlanImage2.src}
        planingcardimage3={PlanImage3.src}
        planingcardtitle1={"Reconnaissance & Planning"}
        planingcardtitle2={"Vulnerability Assessment & Exploitation"}
        planingcardtitle3={"Reporting & Remediation Support"}
        planingcarddescription1={
          "We gather intelligence about your digital assets, define the testing scope, and identify potential security threats."
        }
        planingcarddescription2={
          "Using automated scanning and manual testing, we identify security gaps and attempt to exploit them to assess risk levels."
        }
        planingcarddescription3={
          "We provide a detailed report with findings, risk assessments, and actionable recommendations to fix vulnerabilities and strengthen security."
        }
      />
    </div>
  );
}
