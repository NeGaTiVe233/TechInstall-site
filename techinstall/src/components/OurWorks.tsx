"use client";
import { useState } from "react";
import { listImages } from "@/constans/listImages";
import { listImagesFirePlace } from "@/constans/listImagesFirePlace";
import React from 'react';

export default function OurWorks() {
    const [activeButton, setActiveButton] = useState(0);
    const [activeList, setActiveList] = useState(listImages);
    const [fade, setFade] = useState(false); // Стейт для анимации

    const handleButtonClick = (index: number) => {
        if (index !== activeButton) {
            setFade(true);
            setTimeout(() => {
                setActiveButton(index);
                if (index === 1) {
                    setActiveList(listImagesFirePlace);
                } else {
                    setActiveList(listImages); // Возвращаем основной список
                }
                setFade(false);
            }, 200);
        }
    };

    return (
        <div className="container my-5">
            <div className="text-center">
                <h1 className="display-4">Наши работы</h1>
                <p className="mt-3 h5">Примеры работ, сделанных нашими мастерами!</p>

                {/* Кнопки */}
                <div className="btn-group mt-4" role="group" aria-label="Button group">
                    <button
                        className={`btn ${activeButton === 0 ? "btn-warning" : "btn-outline-warning"}`}
                        onClick={() => handleButtonClick(0)}
                    >
                        Спрятанные провода
                    </button>
                    <button
                        className={`btn ${activeButton === 1 ? "btn-warning" : "btn-outline-warning"}`}
                        onClick={() => handleButtonClick(1)}
                    >
                        Камины
                    </button>
                    <button
                        className={`btn ${activeButton === 2 ? "btn-warning" : "btn-outline-warning"}`}
                        onClick={() => handleButtonClick(2)}
                    >
                        Звуковые системы
                    </button>
                </div>

                {/* Галерея с изображениями */}
                <div
                    className={`row mt-4 transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}
                >
                    {activeList.map((image, index) => {
                        // Если это последний элемент и нечётное количество элементов, то он будет на всю ширину
                        const isLastItem = index === activeList.length - 1;
                        const colClass = isLastItem && activeList.length % 2 !== 0 ? "col-12 col-md-4" : "col-6 col-md-4";

                        return (
                            <div key={image.id} className={`${colClass} mt-3`}>
                                <div className="adaptive-card shadow-sm" style={{ height: "40vh" }}>
                                    <img
                                        src={image.src}
                                        alt={`Image ${image.id}`}
                                        className="card-img-top rounded-lg image-responsive"
                                        style={{ width: "100%", height: "100%", objectFit: "cover" ,borderRadius:"10px"}}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
