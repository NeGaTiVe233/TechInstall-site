"use client";
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import {listQuestions} from "@/constans/listQuestions";
import {Accordion} from "react-bootstrap";
import {listQuestions1} from "@/constans/listQuestions1";

export default function FAQAccordion() {
    return (
        <div className="container mt-5">
            <h2 style={{display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: "3vh"}}>
                Ответы на вопросы о нашей услуге
            </h2>
            <Accordion defaultActiveKey="0" alwaysOpen>
                {listQuestions.map((object, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>{object.title}</Accordion.Header>
                        <Accordion.Body>
                            {object.description}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
            <h2 style={{display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: "3vh",marginTop:"4vh"}}>
                Часто задаваемые вопросы о монтаже телевизора
            </h2>
            <Accordion defaultActiveKey="0" alwaysOpen>
                {listQuestions1.map((object, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>{object.title}</Accordion.Header>
                        <Accordion.Body>
                            {object.description}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
}