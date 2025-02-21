import React from 'react';
import Link from "next/link";

export default function Footer() {
    return (
        <div
            className=" text-white mt-5 py-4"
            style={{ width: "100%", height: "auto", backgroundColor: "#052533" }}
        >
            <div className="container d-flex flex-column flex-md-row justify-content-around mt-8 h-100 overflow-y-hidden">
                {/* Первый блок с контактами */}
                <div className="d-flex flex-column align-items-start">
                    <button className="btn btn-light mb-2">
                        Звоните +79653824322
                    </button>
                    <button className="btn btn-light mb-2">
                        techinstallservices&#64;gmail.com
                    </button>
                    <p>Ваши устройства — в надежных руках</p>
                </div>

                {/* Второй блок с формой */}
                <div className="d-flex flex-column align-items-start">
                    <strong className="fs-5 fw-bold mb-2">
                        Введите свой номер телефона
                    </strong>
                    <p className="fw-light mb-3">
                        Мы незамедлительно свяжемся с вами, чтобы помочь в установке телевизора.
                    </p>

                    {/* Поле ввода с кнопкой */}
                    <div className="input-group d-flex" style={{ paddingBottom: "2vh" }}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Phone number"
                            aria-label="Phone number"
                        />
                        <button className="btn" type="button" style={{ backgroundColor: "#fca21b" }}>
                            Отправить
                        </button>

                    </div>
                    <Link href={"/privacyPolitic"} style={{color:"white",textDecoration:"none", marginBottom:'0.5rem'}}>Политика конфиденциальности</Link>
                    <Link href={"/userAgreement"} style={{color:"white",textDecoration:"none"}}>Пользовательское соглашение</Link>
                </div>
            </div>
        </div>
    );
}
