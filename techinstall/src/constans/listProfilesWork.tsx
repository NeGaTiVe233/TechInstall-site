export interface Profile {
    id: string;
    src: string;
    main: string;
    description: string;
}

export const listProfiles: Profile[] = [
    {
        src:"/Images/fairplace/1.jpg",
        id:"1",
        main:"СКРЫТИЕ ПРОВОДОВ",
        description:"Хотите скрыть провода?"
    },
    {        
        id:"2",
        src:"/Images/fairplace/2.webp",
        main: "УСТАНОВКА ТВ НА КАМИН",
        description:"Мы монтируем телевизоры где угодно, даже над каминами"
    },
    {        
        id:"3",
        src:"/Images/fairplace/3.jpeg",
        main: "ЗВУКОВАЯ ПАНЕЛЬ",
        description:"Установка на стене под телевизором"
    },
    {        
        id:"4",
        src:"/Images/fairplace/15.webp",
        main: "ДЕМОНТАЖ ТВ",
        description:"Переезжаете? Мы демонтируем и снова монтируем телевизоры"
    },
    {        
        id:"5",
        src:"/Images/fairplace/4.jpeg",
        main: "ДОМАШНИЙ КИНОТЕАТР",
        description:"Установка и подключение"
    }
];
