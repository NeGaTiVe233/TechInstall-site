import { listTechInstallDesc } from "@/constans/listTechInstallDesc";
import React from 'react';

export default function TechInstallDescription() {
    return (
        <div className="flex flex-col items-center justify-start bg-[#02202e] pb-5 px-3 mt-12">
            <div className="flex flex-col items-center w-full mt-12">
                <strong className="text-2xl md:text-3xl lg:text-4xl text-white mb-5 text-center">
                    Why Do People Choose TV MOUNT MASTER?
                </strong>
                <div className="flex flex-wrap justify-center gap-5 max-w-[1200px] w-full">
                    {listTechInstallDesc.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-[#013544] text-white p-4 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 min-w-[200px] max-w-[300px]"
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                className="h-[80px] md:h-[100px] object-contain mb-2"
                            />
                            <h1 className="text-lg md:text-xl text-center font-semibold mb-3">{item.title}</h1>
                            <p className="text-sm md:text-base text-center">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
