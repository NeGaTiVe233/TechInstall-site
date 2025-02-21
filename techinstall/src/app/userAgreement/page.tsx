import Header from "@/components/Header";
import React from "react";

const TermsOfService = () => {
    return (
        <div className="w-full min-h-screen overflow-y-auto bg-gray-50">
            <Header />
            <div className="flex flex-col items-center mt-28 px-6 md:px-10 lg:px-20">
                <div className="max-w-screen-lg w-full bg-white shadow-lg rounded-xl p-6 md:p-10">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Условия использования</h1>

                    <p className="text-gray-600 leading-relaxed">
                        Добро пожаловать на <strong>TechInstall</strong>
                    </p>
                    <p className="text-gray-600 mt-4">
                        Настоящие условия использования определяют правила и регламент для использования веб-сайта TechInstall.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">Местоположение</h2>
                    <p className="text-gray-600">TechInstall находится по адресу:</p>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                        <li>Калифорния, США</li>
                    </ul>

                    <p className="text-gray-600 mt-4">
                        Получая доступ к данному сайту, вы соглашаетесь с полным принятием данных условий использования.
                        Если вы не принимаете все условия, изложенные на этой странице, не продолжайте использование веб-сайта TechInstall.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">Cookies</h2>
                    <p className="text-gray-600">
                        Мы используем файлы cookies. Используя веб-сайт TechInstall, вы соглашаетесь с использованием cookies в соответствии с
                        <a href="/privacyPolitic" className="text-blue-500 underline"> политикой конфиденциальности TechInstall</a>.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">Лицензия</h2>
                    <p className="text-gray-600">
                        Если не указано иное, TechInstall и/или его лицензиары являются владельцами интеллектуальных прав на весь материал,
                        размещённый на TechInstall. Все права защищены.
                    </p>
                    <p className="text-gray-600 mt-2">
                        Вы можете просматривать и/или распечатывать страницы с <a href="https://techinstall.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        techinstall.com</a> для личного пользования, с соблюдением ограничений, установленных настоящими условиями использования.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">Вам запрещается:</h2>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                        <li>Публиковать материалы с techinstall.com повторно</li>
                        <li>Продавать, сдавать в аренду или передавать материалы с techinstall.com в суб-лицензию</li>
                        <li>Воспроизводить, дублировать или копировать материалы с techinstall.com</li>
                        <li>Распространять контент TechInstall</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6">Комментарии пользователей</h2>
                    <p className="text-gray-600">
                        Настоящее Соглашение вступает в силу с момента его принятия. Некоторые разделы данного сайта предоставляют пользователям возможность оставлять комментарии.
                    </p>
                    <p className="text-gray-600 mt-2">
                        TechInstall не осуществляет предварительный контроль, редактирование, публикацию или модерацию комментариев до их появления на сайте.
                        Комментарии отражают взгляды и мнения лиц, их оставляющих.
                    </p>
                    <p className="text-gray-600 mt-2">
                        TechInstall оставляет за собой право удалять любые комментарии, которые являются неуместными или оскорбительными.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">Гиперссылки на наш контент</h2>
                    <p className="text-gray-600">
                        Следующим организациям разрешается размещать ссылки на наш веб-сайт без предварительного согласования:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                        <li>Правительственные учреждения</li>
                        <li>Поисковые системы</li>
                        <li>Информационные агентства</li>
                        <li>Онлайн-каталоги</li>
                        <li>Аккредитованные предприятия</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6">Фреймы (Iframes)</h2>
                    <p className="text-gray-600">
                        Без предварительного согласия и письменного разрешения вам запрещено создавать фреймы вокруг наших веб-страниц
                        или использовать иные методы, изменяющие визуальное представление нашего сайта.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">Ответственность за контент</h2>
                    <p className="text-gray-600">
                        Мы не несем ответственности за контент, размещённый на вашем сайте. Вы соглашаетесь защищать и возмещать нам любые убытки, возникающие в связи с вашим сайтом.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">Сохранение за собой прав</h2>
                    <p className="text-gray-600">
                        Мы оставляем за собой право в любое время требовать удаления ссылок на наш веб-сайт. Продолжая ссылаться на наш веб-сайт, вы соглашаетесь соблюдать настоящие условия использования.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">Удаление ссылок</h2>
                    <p className="text-gray-600">
                        Если вы обнаружите на нашем сайте ссылку, вызывающую у вас возражения, вы можете связаться с нами.
                        Мы рассмотрим ваш запрос, однако не обязаны удалять ссылки или отвечать на ваш запрос напрямую.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">Отказ от ответственности</h2>
                    <p className="text-gray-600">
                        В максимально допустимой степени, разрешённой действующим законодательством, мы исключаем все гарантии, заявления и условия,
                        касающиеся нашего веб-сайта и его использования.
                    </p>
                    <p className="text-gray-600 mt-2">
                        Ни одно положение данного отказа от ответственности не:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                        <li>Ограничивает или исключает нашу или вашу ответственность за смерть или личные травмы, возникшие в результате небрежности</li>
                        <li>Ограничивает или исключает нашу или вашу ответственность за мошенничество или мошенническое представление</li>
                        <li>Ограничивает любую нашу или вашу ответственность таким образом, который не допускается действующим законодательством</li>
                        <li>Исключает любую нашу или вашу ответственность, которую нельзя исключить согласно применимому законодательству</li>
                    </ul>

                    <p className="mt-6 text-center font-semibold text-gray-700">
                        <strong>Настоящие Условия использования могут быть изменены в любое время.</strong>
                    </p>

                    <h2 className="text-xl font-semibold mt-6">Свяжитесь с нами</h2>
                    <p className="text-gray-600">
                        Если у вас возникнут вопросы относительно наших Условий использования, пожалуйста,{" "}
                        <a href="mailto:techinstallservices@gmail.com" className="text-blue-500 underline">свяжитесь с нами</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
