import React from 'react';
import Link from "next/link";
export default function GetStarted() {

    return (
        <Link href={"/quiz"} style={{textDecoration:"none",color:"black"}}>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <button className="btn btn-warning btn-lg rounded-3 py-3 px-5 shadow-sm hover-zoom">
                    Пройти квиз
                </button>
            </div>
        </Link>

    );
}