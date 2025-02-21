"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {useRouter} from "next/navigation";
import {router} from "next/client";

export default function Header() {
    const [isShrunk, setIsShrunk] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    useEffect(() => {
        const handleScroll = () => {
            setIsShrunk(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleHome = () => {
            router.push("/");
    }
    return (

        <nav
            className={`header  fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 md:px-80 transition-all duration-300 ${isShrunk ? "shrink" : ""}`}
            style={{
                zIndex: 50,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
        >
            {/* Логотип */}
            <div className="flex items-center gap-4 cursor-pointer" onClick={handleHome} >
                <Image
                    src="/Images/icons/logo.webp"
                    alt="logo"
                    width={isShrunk ? 60 : 70}
                    height={isShrunk ? 35 : 40}
                    className="transition-all duration-300"
                />
                <h2 className="text-lg font-medium mt-2">8:00-22:00 <strong>Каждый день</strong></h2>
            </div>

            <div>
                {/* Меню для десктопа */}
                <div className="hidden md:flex gap-4" style={{marginTop:"0.5rem",paddingRight:"4rem"}}>
                <ul className="flex space-x-10">
                    <li> <a href={"#aboutUs"} style={{textDecoration:"none",color:"black"}}>О нас</a></li>
                    <li> <a href={"#reviews"} style={{textDecoration:"none",color:"black"}}>Отзывы</a></li>
                    <li> <a href={"/quiz"} style={{textDecoration:"none",color:"black"}}>Квиз</a></li>
                    <li> <a href={"#FAQ"} style={{textDecoration:"none",color:"black"}}>FAQ</a></li>
                </ul>
                </div>

            </div>
            {/* Меню для десктопа */}
            <div className="hidden md:flex gap-4">
                <button className="header-button px-4 border-2 border-black rounded-lg">+79653824322</button>
                <button className="header-button px-3 py-2 border-2 border-black rounded-lg">Закажи сейчас</button>
            </div>


            {/* Бургер-меню */}
            <div className="md:hidden flex items-center">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Мобильное меню */}
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
                style={{ zIndex: 40 }}
            >
                <button className="absolute top-5 right-5" onClick={() => setIsMenuOpen(false)}>
                    <FaTimes size={30} />
                </button>

                <Image src="/Images/icons/logo.webp" alt="logo" width={140} height={100} className="mb-10" />

                <ul className="flex flex-col items-center justify-center space-y-6 text-lg font-medium text-center w-full" style={{paddingRight:"2rem"}}>
                    <li><a href="/quiz" onClick={() => setIsMenuOpen(false)} style={{textDecoration:"none",color:"black"}}>Квиз</a></li>
                    <li><a href="#aboutUs" onClick={() => setIsMenuOpen(false)} style={{textDecoration:"none",color:"black"}}>О нас</a></li>
                    <li><a href="#reviews" onClick={() => setIsMenuOpen(false) } style={{textDecoration:"none",color:"black"}}>Отзывы</a></li>
                    <li><a href="#FAQ" onClick={() => setIsMenuOpen(false)} style={{textDecoration:"none",color:"black"}}>FAQ</a></li>
                </ul>

                <div className="flex flex-col items-center justify-center space-y-4 w-full text-center">
                    <button className="px-4 py-2 border-2 border-black rounded-lg w-2/3">+79653824322</button>
                    <button className="px-4 py-2 border-2 border-black rounded-lg w-2/3">Закажи сейчас</button>
                </div>
            </div>
        </nav>
    );
}