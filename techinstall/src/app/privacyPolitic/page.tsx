import Header from "@/components/Header";
import React from "react";

const Privacy = () => {
    return (
        <div className="w-full min-h-screen overflow-y-auto bg-gray-50">
            <Header />
            <div className="flex flex-col items-center mt-28 px-6 md:px-10 lg:px-20">
                <div className="max-w-screen-lg w-full bg-white shadow-lg rounded-xl p-6 md:p-10">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Политика конфиденциальности</h1>

                    <p className="text-gray-600 leading-relaxed">
                        В <strong>TechInstall</strong>, доступном по адресу{" "}
                        <a href="https://techinstall.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                            https://techinstall.com/
                        </a>, одной из наших главных задач является защита конфиденциальности наших посетителей. Настоящий документ содержит информацию о том, какие данные собираются и записываются TV Mount Master, а также о том, как мы их используем.
                    </p>

                    <p className="mt-4 text-gray-600">
                        Если у вас возникнут дополнительные вопросы или вам потребуется дополнительная информация о нашей Политике конфиденциальности, не стесняйтесь{" "}
                        <a href="mailto:techinstallservices@gmail.com" className="text-blue-500 underline">связаться с нами</a>.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">Согласие</h2>
                    <p className="text-gray-600">
                        Используя наш веб-сайт, вы <strong>даете согласие</strong> на обработку ваших данных в соответствии с данной Политикой конфиденциальности и соглашаетесь с ее условиями.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">Информация, которую мы собираем</h2>
                    <p className="text-gray-600">
                        Персональная информация, которую вас просят предоставить, а также причины, по которым она запрашивается, будут четко указаны в момент запроса.
                    </p>
                    <p className="text-gray-600 mt-2">
                        Если вы связываетесь с нами напрямую, мы можем получить дополнительную информацию, такую как:
                    </p>

                    <ul className="list-disc list-inside text-gray-600 mt-2">
                        <li>Ваше имя</li>
                        <li>Адрес электронной почты</li>
                        <li>Номер телефона</li>
                        <li>Содержание вашего сообщения и/или вложений</li>
                        <li>Любые другие сведения, которые вы решите предоставить</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6">Как мы используем вашу информацию</h2>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                        <li>Обеспечиваем работу, обслуживание и поддержку нашего веб-сайта</li>
                        <li>Улучшаем, персонализируем и расширяем функционал нашего веб-сайта</li>
                        <li>Анализируем, как вы используете наш веб-сайт</li>
                        <li>Разрабатываем новые продукты, услуги, функции и возможности</li>
                        <li>Связываемся с вами (напрямую или через наших партнеров)</li>
                        <li>Отправляем вам электронные письма и обновления</li>
                        <li>Предотвращаем мошенничество</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6">Файлы журнала</h2>
                    <p className="text-gray-600">
                        TV Mount Master использует стандартную процедуру работы с <strong>файлами журнала</strong>. Эти файлы фиксируют данные о посещениях веб-сайта.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">Cookies и веб-маяки</h2>
                    <p className="text-gray-600">
                        Как и большинство веб-сайтов, TV Mount Master использует <strong>cookies</strong>. Эти файлы хранят информацию о:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                        <li>Предпочтениях посетителей</li>
                        <li>Посещенных страницах веб-сайта</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6">Ваши права по защите данных</h2>
                    <p className="text-gray-600">Каждый пользователь имеет следующие права:</p>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                        <li><strong>Право на доступ:</strong> Вы можете запросить копии своих персональных данных.</li>
                        <li><strong>Право на исправление:</strong> Вы можете потребовать исправления неточной информации.</li>
                        <li><strong>Право на удаление:</strong> Вы можете запросить удаление ваших персональных данных.</li>
                        <li><strong>Право на ограничение обработки:</strong> Вы можете запросить ограничение обработки ваших данных.</li>
                        <li><strong>Право возражать:</strong> Вы можете возразить против обработки данных при определенных условиях.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6">Информация о детях</h2>
                    <p className="text-gray-600">
                        Мы сознательно не собираем персональную информацию от детей младше 13 лет. Если вы считаете, что ваш ребенок предоставил такую информацию, пожалуйста, <a href="mailto:techinstallservices@gmail.com" className="text-blue-500 underline">свяжитесь с нами</a>, и мы немедленно удалим ее.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">Изменения в данной Политике конфиденциальности</h2>
                    <p className="text-gray-600">
                        Мы можем время от времени обновлять нашу Политику конфиденциальности. Поэтому рекомендуем периодически просматривать эту страницу для ознакомления с изменениями.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">Свяжитесь с нами</h2>
                    <p className="text-gray-600">
                        Если у вас возникнут вопросы или предложения по поводу нашей Политики конфиденциальности, не стесняйтесь{" "}
                        <a href="mailto:techinstallservices@gmail.com" className="text-blue-500 underline">связаться с нами</a>.
                    </p>

                    <p className="mt-6 text-center font-semibold text-gray-700">
                        <strong>Мы не передаем данные третьим лицам и не раскрываем персональную информацию.</strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
