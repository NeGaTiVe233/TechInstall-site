"use client";
import React, {useEffect, useState} from "react";
import styles from "./style.module.css";
import Image from "next/image";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";
import { listOfQuestionsMainQuiz } from "@/constans/listOfQuestionsMainQuiz";
import FormControlLabel from "@mui/material/FormControlLabel";
import { RadioGroup } from "@mui/material";
import Link from "next/link";

const QuizPage: React.FC = () => {
    // Состояния
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const router = useRouter();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [isFading, setIsFading] = useState(false);
    const [selectedOption, setSelectedOption] = useState(
        listOfQuestionsMainQuiz[currentQuestionIndex]?.options?.[0] || ""
    );
    const [isMobile, setIsMobile] = useState(false);

    const isLastQuestion = currentQuestionIndex === listOfQuestionsMainQuiz.length - 1;

    // ------------------ Функции ------------------

    // Выбор нескольких ответов (последний вопрос)
    const handleMultipleSelect = (option: string) => {
        setSelectedOptions((prevSelected) => {
            if (prevSelected.includes(option)) {
                // Если кликнули повторно, убираем из выбранных
                return prevSelected.filter((item) => item !== option);
            } else {
                // Иначе добавляем
                return [...prevSelected, option];
            }
        });
    };

    // Обработчик клика по варианту для Radio (для вопросов, кроме последнего)
    const handleAnswerSelect = (selectedAnswer: string) => {
        setIsFading(true);
        setTimeout(() => {
            setAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
            if (currentQuestionIndex < listOfQuestionsMainQuiz.length - 1) {
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
                setSelectedOption(listOfQuestionsMainQuiz[currentQuestionIndex + 1].options[0]);
            } else {
                setQuizCompleted(true);
            }
            setIsFading(false);
        }, 500);
    };

    // Обработка кнопки Next
    const handleNext = () => {
        setIsFading(true);
        setTimeout(() => {
            setIsFading(false);

            // Если это последний вопрос (с multiple answers)
            if (isLastQuestion) {
                // Сохраняем выбранные чекбоксами варианты
                setAnswers((prevAnswers) => [...prevAnswers, selectedOptions.join(", ")]);
                setQuizCompleted(true);
            } else {
                // Для остальных вопросов
                setAnswers((prevAnswers) => [...prevAnswers, selectedOption || "Skipped"]);
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            }
        }, 300);
    };

    // Кнопка Назад
    const handleBack = () => {
        setIsFading(true);
        setTimeout(() => {
            setIsFading(false);
            setAnswers((prevAnswers) => {
                const updatedAnswers = [...prevAnswers];
                updatedAnswers.pop(); // Удаляем последний добавленный ответ
                return updatedAnswers;
            });
            if (currentQuestionIndex > 0) {
                setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
                // Возвращаемся к предыдущему вопросу и ставим опцию
                setSelectedOption(
                    listOfQuestionsMainQuiz[currentQuestionIndex - 1].options[0]
                );
            }
        }, 300);
    };

    // Завершение квиза и отправка данных
    const handleFinish = async () => {
        router.push("/");

    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize(); // Вызываем сразу, чтобы определить начальное состояние
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    // ------------------ Рендеринг ------------------

    const currentQuestion = listOfQuestionsMainQuiz[currentQuestionIndex] || { question: "Loading...", options: [] };
    const progress = Math.round(
        ((currentQuestionIndex + 1) / listOfQuestionsMainQuiz.length) * 100
    );

    const CustomProgressBar: React.FC<{ progress: number; isFading: boolean }> = ({
                                                                                      progress,
                                                                                      isFading,
                                                                                  }) => (
        <div
            className={`${styles.progressContainer} ${
                isFading ? styles["fade-out"] : ""
            }`}
        >
            <div className={styles.progressBackground} />
            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
            <div className={styles.progressDots}>
                {listOfQuestionsMainQuiz.map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.dot} ${
                            index <= currentQuestionIndex ? styles.activeDot : ""
                        }`}
                    />
                ))}
            </div>
        </div>
    );


    const handleNavigate = (e: React.MouseEvent) => {
        e.preventDefault(); // Останавливаем стандартную обработку Link
        router.push("/"); // Принудительное перенаправление
    };
    return (
        <div>
            {/* Фоновое видео */}
            <video
                className={styles["background-video"]}
                src="/video/backgroundVideo.mp4"
                autoPlay
                loop
                muted
                playsInline

            />

            {/* Кнопка закрытия */}

<div>
    {!isMobile && (
        <Link
            href="/"
            style={{
                textDecoration: "none",
                color: "white",
                display: "flex",
                flexDirection: "row",
                justifyContent: "end",
                marginRight: "2vh",
                marginTop: "1vh",
            }}
        >
            <CloseIcon fontSize="large" onClick={handleNavigate} />
        </Link>
    )}

    <div className={styles["quiz-modal"]}>
        {/* Render the link inside the quiz modal if on mobile */}
        {isMobile && (
            <Link
                href="/"
                style={{
                    textDecoration: "none",
                    color: "white",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "end",
                    marginRight: "2vh",
                    marginTop: "1vh",
                }}
            >
                <CloseIcon fontSize="large" onClick={handleNavigate} />
            </Link>
        )}

        {/* Лого и прогресс бар */}
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflowX: "hidden",
                overflowY:"hidden"
            }}
        >

            <div style={{ display: "flex",flexDirection:'row',justifyContent:'center', alignItems:"center" }}>
                <Image
                    src={"/Images/icons/logo.webp"}
                    alt="logo"
                    width={100}
                    height={30}
                    style={{ marginBottom: "1vh" }}
                />


            </div>

            <CustomProgressBar progress={progress} isFading={isFading} />
        </div>

        {/* Если ещё не завершили квиз, показываем вопросы, иначе форму для контактов */}
        {!quizCompleted ? (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "10vh",
                    justifyContent: "center",
                }}
            >
                <div
                    className={`${styles["question-container"]} ${
                        isFading ? styles["fade-out"] : ""
                    }`}
                    style={{
                        fontSize: "2.3em",
                        fontWeight: "bold",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <h3>{currentQuestion.question}</h3>
                </div>
                <div
                    className={`${styles["question-container"]} ${
                        isFading ? styles["fade-out"] : ""
                    }`}
                >
                    <div className={styles["answer-container"]}>
                        {isLastQuestion ? (
                            // Для последнего вопроса используем Checkbox (множественный выбор)
                            <FormGroup>
                                {listOfQuestionsMainQuiz[currentQuestionIndex]?.options?.map(
                                    (option, i) => (
                                        <FormControlLabel
                                            key={i}
                                            control={
                                                <Checkbox
                                                    checked={selectedOptions.includes(option)}
                                                    onChange={() => handleMultipleSelect(option)}
                                                    sx={{
                                                        "&.Mui-checked": { color: "#000" }, // Цвет выбранного
                                                        "&.MuiCheckbox-root": { color: "rgba(255,255,255,0.3)" }, // Цвет невыбранного
                                                    }}
                                                />
                                            }
                                            label={option}
                                        />
                                    )
                                )}
                            </FormGroup>
                        ) : (
                            // Для остальных вопросов используем Radio (одиночный выбор)
                            <RadioGroup >
                                {listOfQuestionsMainQuiz[currentQuestionIndex]?.options?.map( // ✅ Теперь здесь тоже добавлена защита
                                    (option, i) => (
                                        <FormControlLabel
                                            key={i}
                                            control={
                                                <Radio
                                                    checked={selectedOption === option}
                                                    onChange={() => setSelectedOption(option)}
                                                    onClick={() => handleAnswerSelect(option)}
                                                    sx={{
                                                        "&.Mui-checked": { color: "#000" },
                                                        "&.MuiRadio-root": { color: "rgba(255,255,255,0.3)" },
                                                    }}
                                                />
                                            }
                                            label={option} style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",textAlignLast:"start",textAlign:"start"}}
                                        />
                                    )
                                )}
                            </RadioGroup>
                        )}
                    </div>

                </div>
            </div>
        ) : (
            // Форма для ввода имени и телефона
            <div
                style={{
                    marginTop: "10vh",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                }}
            >
                <h3
                    style={{
                        whiteSpace: "wrap",
                        fontSize: "35px",
                        fontWeight: 900,
                        marginBottom: "3vh",
                    }}
                >
                    Enter your contact details
                </h3>

                <div
                    style={{ position: "relative", marginBottom: "5vh", width: "100%" }}
                >
                    <h1
                        style={{
                            position: "absolute",
                            top: "-20px",
                            left: "0",
                            fontSize: "18px",
                            color: "#ffffff",
                        }}
                    >
                        Name
                    </h1>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={styles.input}
                        style={{
                            height: "5vh",
                            width: "24rem",
                            marginTop: "1vh",
                            backgroundColor: "rgba(255,255,255,0.3)",
                            paddingLeft: "10px",
                            border: "none",
                            outline: "none",
                            borderRadius: "10px",
                        }}
                    />
                </div>

                <div
                    style={{ position: "relative", marginBottom: "2vh", width: "100%" }}
                >
                    <h1
                        style={{
                            position: "absolute",
                            top: "-20px",
                            left: "0",
                            fontSize: "18px",
                            color: "#ffffff",
                        }}
                    >
                        Phone*
                    </h1>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={{
                            height: "5vh",
                            width: "24rem",
                            marginTop: "1vh",
                            backgroundColor: "rgba(255,255,255,0.3)",
                            paddingLeft: "10px",
                            border: "none",
                            outline: "none",
                            borderRadius: "10px",
                        }}
                    />
                </div>
            </div>
        )}
    </div>
</div>
            {/* Модальное окно квиза */}


            {/* Кнопки «Назад» и «Next/Finish» */}
            <div
                style={{
                    marginTop: isMobile ? "90vh":"85vh",
                    paddingRight: "6vh",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    overflowY:"hidden"
                }}
            >
                <button
                    style={{
                        width: "5vh",
                        height: "5vh",
                        backgroundColor: "rgba(0,0,0,0.6)",
                        borderRadius: "10px",
                        color: "white",
                    }}
                    onClick={handleBack}
                >
                    ←
                </button>

                <button
                    style={{
                        marginLeft: "1vh",
                        width: "10vh",
                        height: "5vh",
                        backgroundColor: "rgba(255,255,255,0.8)",
                        borderRadius: "10px",
                    }}
                    onClick={quizCompleted ? handleFinish : handleNext}
                >
                    {quizCompleted ? "Finish" : "Next"}
                </button>
            </div>
        </div>
    );
};

export default QuizPage;
