import site_store_1 from '../image/site_store_main.png';
import site_store_2 from '../image/site_store_catalog.png';
import site_store_3 from '../image/site_store_cart.png';
import site_store_4 from '../image/site_store_registration.png';
import tuter_app_1 from '../image/tuter_app.png';
import tuter_app_2 from '../image/tuter_app_add.png';
import tuter_app_3 from '../image/tuter_app_srudent.png';
import site_1 from '../image/site.png';
import site_2 from '../image/site_2.png';
import site_3 from '../image/site_3.png';
import site_4 from '../image/site_4.png';

export const projectData = [
    {
        id: 1,
        title: "Пет проект приложения для репититора",
        images: [tuter_app_1, tuter_app_2, tuter_app_3],
        description: ["Добавление учеников.", "Просмотр информации об ученике.", "Добавление уроков.", "Просмотр оплаты уроков.", "Просмотр дохода за месяц."],
        stack: ["HTML", "CSS", "JavaScript", "SASS", "React"],
        link: "https://natalyagorbonosova.github.io/teacher_note/",
        linkGithub: "https://github.com/NatalyaGorbonosova/teacher_note"
    },
    {
        id: 2,
        title: "Сайт интернет-магазина одежды",
        images: [site_store_1, site_store_2, site_store_3, site_store_4],
        description: ["Главная. На странице есть меню, переходы на страницы каталога, корзины и страницу регестрации. Также есть возможность добавлять товары с главной страницы в корзину.", "Сраница каталога, с возможностью добавлять товары в корзину.", "Страница корзины, с возможностью убирать товары из корзины, автоматический подсчет суммы за товары.", "Страница регистрации."],
        stack: ["HTML", "CSS", "JavaScript", "SASS", "React"],
        link: "https://natalyagorbonosova.github.io/site_homework_JS/",
        linkGithub: "https://github.com/NatalyaGorbonosova/website_store"
    },
    {
        id: 3,
        title: "Сайт портфолио фрилансера",
        images: [site_1, site_2, site_3, site_4],
        description: ["Верстка сайта по макету Figma."],
        stack: ["HTML", "CSS", "JavaScript", "SASS"],
        link: "https://natalyagorbonosova.github.io/website_example/",
        linkGithub: "https://github.com/NatalyaGorbonosova/website_example"
    },
]
