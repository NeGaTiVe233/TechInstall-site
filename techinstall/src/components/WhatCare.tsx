"use client";

import React, { useState } from "react";

export default function WhatCare() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                {/* Текстовая часть */}
                <div className="col-md-6 d-flex flex-col items-center justify-center">
                    <strong style={{ fontSize: "1.7em", marginBottom: "1rem" }}>
                        Что для нас важно?
                    </strong>
                    <p
                        style={{
                            lineHeight: "1.5",
                            paddingRight:"7vh",
                            fontSize: "1rem",
                            textAlign: "center",
                            maxHeight: isExpanded ? "none" : "10rem", // Ограничение высоты
                            overflow: "hidden",
                        }}
                    >
                        В TechInstall мы являемся надежными экспертами по установке телевизоров на стенах, обеспечивая ваше спокойствие благодаря надежной установке и первоклассному качеству обслуживания.
                        <br />
                        <br />
                        • Доверив нам монтаж вашего телевизора на стене, вы выбираете профессионалов, которые понимают важность точной установки. Мы также предлагаем удобство обслуживания в тот же день, что делает процесс профессионального монтажа телевизора беззаботным. Мы уделяем первостепенное внимание безопасности вашего дома и принимаем меры для защиты вашей аудио- и видеотехники от возможных повреждений. Кроме того, мы гарантируем, что ваше пространство будет выглядеть ещё лучше, оставляя его аккуратным и опрятным.
                        <br />
                        <br />
                        • Безопасность является ключевым моментом при креплении вашего телевизора, особенно если у вас есть дети или гости. Мы надежно закрепляем ваш плоский экран, чтобы предотвратить несчастные случаи. Ваши инвестиции заслуживают защиты, а монтаж на стене гарантирует, что он станет неотъемлемой частью вашего дома. Безопасность ваших домашних животных также для нас важна!
                        <br />
                        <br />
                        • Монтаж телевизора может вызывать стресс, но мы берем на себя все заботы. Наши эксперты выполняют весь процесс, от крепления кронштейнов до установки на стене. Мы подберем оптимальное решение, будь то поворотный, наклонный или индивидуальный монтаж.
                    </p>
                    <button
                        onClick={handleToggle}
                        className="btn btn-dark mt-2"
                    >
                        {isExpanded ? "Скрыть" : "Читать далее"}
                    </button>
                </div>

                {/* Форма */}
                <div className="col-md-6">
                    <div
                        className="bg-light p-4 rounded shadow-sm"
                        style={{ width: "100%" }}
                    >
                        <strong style={{ fontSize: "1.5em", marginBottom: "1rem", textAlign: "center" }}>
                            Свяжитесь с нами
                        </strong>
                        <form>
                            <div className="mb-3">
                                <label
                                    htmlFor="name"
                                    className="form-label font-weight-bold"
                                >
                                    Имя:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-control"
                                    placeholder="Введите ваше имя"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="phone"
                                    className="form-label font-weight-bold"
                                >
                                    Телефон:
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="form-control"
                                    placeholder="Введите ваш номер телефона"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-dark w-100"
                            >
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
