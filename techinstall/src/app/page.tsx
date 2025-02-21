"use client";

import React from "react";
import dynamic from "next/dynamic";
import {useRouter, useSearchParams} from "next/navigation";

// Импортируем наш кастомный диалог
// import Dialog from "@/components/ui/dialog";
import Image from "next/image";

// Прочие компоненты, рендеримые с { ssr: true }
const Header = dynamic(() => import("../components/Header"), { ssr: true });
const Quiz = dynamic(() => import("../components/StaticQuiz"), { ssr: true });
const Options = dynamic(() => import("../components/Options"), { ssr: true });
const Characteristics = dynamic(() => import("../components/Сharacteristics"), { ssr: true });
const ServiceCards = dynamic(() => import("../components/ServiceCards"), { ssr: true });
const Reviews = dynamic(() => import("../components/Reviews"), { ssr: true });
const OurWorks = dynamic(() => import("../components/OurWorks"), { ssr: true });
const GetStarted = dynamic(() => import("../components/GetStarted"), { ssr: true });
const PhotoCarousel = dynamic(() => import("../components/CarouselOfDone"), { ssr: true });
const TechInstallDescription = dynamic(() => import("../components/TechInstallDescription"), { ssr: true });
const WhatCare = dynamic(() => import("../components/WhatCare"), { ssr: true });
const FAQAccordion = dynamic(() => import("../components/FAQDropdown"), { ssr: true });
const Footer = dynamic(() => import("../components/Footer"), { ssr: true });

export default function Home() {
    const router = useRouter();

    function handleRouteHome() {
        router.push("/");
    }

    return (
        <div>
            {/* Лендинг */}
            <Header />
            <div className="fade-in">
                <Quiz />
            </div>
            <div className="fade-in">
                <Options />
            </div>
            <div className="fade-in">
                <Characteristics />
            </div>
            <div className="fade-in">
                <ServiceCards />
            </div>
            <div id="reviews" className="fade-in">
                <Reviews />
            </div>
             <div className="fade-in">
                <OurWorks />
            </div>
            <div className="fade-in">
                <GetStarted />
            </div>
            <div className="fade-in">
                <PhotoCarousel />
            </div>
            <div id="aboutUs" className="fade-in">
                <TechInstallDescription />
            </div>
            <div className="fade-in">
                <GetStarted />
            </div>
            <div className="fade-in">
                <WhatCare />
            </div>
            <div id="FAQ" className="fade-in">
                <FAQAccordion />
            </div>
            <Footer />

{/*
            <Dialog
                open={isSubmitted}
                onClose={() => {}}

            >
                <div style={{display:"flex",flexDirection:"row",justifyContent:"center",marginBottom:"2vh"}}>
                    <Image
                        src="/Images/icons/yellowpng.png"
                        alt="logo"
                        width={90}
                        height={55}
                        className="transition-all duration-300"
                    />
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
                        <strong style={{ fontWeight: "900", fontSize: "2rem" }}>Thank you</strong>
                        <p className="text-lg font-semibold">We’ll be in touch shortly</p>
                         Кнопка "ОК" 
                        <button
                            style={{
                                marginTop: "1rem",
                                padding: "0.75rem 1.5rem",
                                fontSize: "1rem",
                                fontWeight: "bold",
                                color: "#fff",
                                backgroundColor: "#FFA500",
                                border: "none",
                                borderRadius: "8px",
                                cursor: "pointer",
                                transition: "background-color 0.3s ease",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FF8C00")}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFA500")}
                            onClick={() => handleRouteHome()}
                        >
                            OK
                        </button>
                    </div>                </div>

            </Dialog> */}
        </div>
    );
}
