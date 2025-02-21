import Image from "next/image";
import { listCharacteristics } from "@/constans/listCharacteristics";
import React from 'react';

export default function Characteristics() {
    return (
        <div
            className={"characteristics "}
            style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                width:"100%",
                justifyContent: "space-around",
                gap: "1vh",
                alignItems: "start",
                marginTop: "10vh",
            }}
        >
            {listCharacteristics.map((c) => (
                <div
                    className={"space-x-2"}
                    key={c.src}
                    style={{

                        display: "flex",

                        justifyContent:"flex-start",
                        alignItems: "center",
                        gap: "1vh",
                        width: "40vh",
                    }}
                >
                    {/* Изображение */}
                    <Image src={c.src} alt={c.alt} width={70} height={50} />

                    {/* Текст */}
                    <div
                        style={{
                            textAlign: "left", // Выравнивание текста по левому краю
                            display: "flex",
                            flexDirection: "column", // Расположение заголовка и описания в столбик
                            alignItems: "flex-start", // Выровнять текст по левому краю
                            justifyContent: "space-around", // Центрирование текста по вертикали
                            gap: "0.5vh", // Добавляем небольшой отступ между заголовком и описанием

                        }}
                    >
                        <h2
                            style={{
                                fontSize: "1.0em",
                                fontWeight: "900",
                                margin: "0",
                                whiteSpace: "wrap", // Отключаем перенос текста
                            }}
                        >
                            {c.main}
                        </h2>
                        <p
                            style={{
                                fontSize: "0.9em",
                                color: "#555",
                                margin: "0",
                            }}
                        >
                            {c.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}