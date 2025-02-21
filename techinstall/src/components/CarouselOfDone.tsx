"use client";
import React from 'react';

import { listImages } from "@/constans/listImages";
import { useState, useEffect } from "react";

export default function PhotoCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(1);

    // Обновление количества видимых изображений при изменении ширины окна
    useEffect(() => {
        const handleResize = () => {
            setVisibleCount(window.innerWidth >= 768 ? 4 : 1);
        };

        handleResize(); // Устанавливаем начальное значение
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % listImages.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + listImages.length) % listImages.length);
    };

    // Получение видимых изображений
    const visibleImages = listImages
        .slice(currentIndex, currentIndex + visibleCount)
        .concat(listImages.slice(0, Math.max(0, currentIndex + visibleCount - listImages.length)));

    return (
        <div className="relative w-screen mx-auto mt-12 bg-gray-800" style={{ paddingTop: "3vh",paddingBottom:"2vh",backgroundColor: "#f0f0f0"}}>
            {/* Карусель */}
            <div className="flex overflow-hidden">
                {visibleImages.map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-full md:w-1/4 px-1">
                        <img
                            src={image.src}
                            alt={`Image ${index}`}
                            className="w-full h-64 object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>

            {/* Кнопка назад */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow-md hover:bg-gray-600"
            >
                ❮
            </button>

            {/* Кнопка вперед */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow-md hover:bg-gray-600"
            >
                ❯
            </button>

            {/* Индикаторы */}
            <div className="flex justify-center mt-4 space-x-2">
                {listImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                            currentIndex === index ? "bg-blue-500" : "bg-gray-400"
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
}
