"use client";

import dynamic from "next/dynamic";
import React from "react";

// Импортируем список профилей
import { listProfiles } from "@/constans/listProfilesWork";

// Динамическая загрузка слайдера
const Slider = dynamic(() => import("react-slick"), { ssr: false });

// Подключаем стили для слайдера
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ServiceCards() {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 4, // Показывать 5 слайдов на экране
        focusOnSelect: true,
        dots: true, // Включаем точки
        responsive: [
            {
                breakpoint: 768, // Для мобильных устройств
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    swipeToSlide: true,
                },
            },
        ],
    };

    return (
        <div
            className="bg-gray-100 mt-5 relative "
            style={{ overflowY:"hidden",overflowX:"hidden" }}
        >
            <Slider {...settings} className="w-full">
                {listProfiles.map((profile) => (
                    <div key={profile.id} className="pl-20 flex h-100 mt-6">
                        <div className="profile-card w-60 h-80 mb-6 shadow-lg rounded-lg bg-white flex flex-col items-center justify-center md:hover:bg-yellow-400 md:hover:scale-105 transition-transform duration-300">
                            <img
                                src={profile.src}
                                alt={profile.main}
                                className="w-40 h-40 object-cover rounded-full mt-3"
                            />
                            <div className="text-center mt-3">
                                <h5 className="text-lg font-semibold">{profile.main}</h5>
                                <p className="text-gray-500">{profile.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
