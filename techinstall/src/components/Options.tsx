import Image from "next/image";
import { tvOptions } from "@/constans/tvList";
import React from "react";
import "@/app/globals.css";
import {useRouter} from "next/navigation";
export default function Options() {
    const router = useRouter();
    const handleAsk = () => {
        router.push("/quiz");
    }
    return (
        <div className="w-full">
            <h1 className="options-title display-4">Какого размера Ваш телевизор?</h1>
            <div className="container adaptive ">
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4">
                    {tvOptions.map((tv) => (
                        <div key={tv.id} className="col" onClick={() => handleAsk()}>
                            <div className="options-card shadow-sm">
                                <Image
                                    src={tv.src}
                                    alt={tv.alt}
                                    width={300}
                                    height={300}
                                    className="options-image"
                                />
                                <div className="card-body">
                                    <p className="options-description">
                                        {tv.description}
                                    </p>
                                    <p className="options-additional">
                                        {tv.additional}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
