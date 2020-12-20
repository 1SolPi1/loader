import {createListElement} from "./createElements";

import {deleteLoader} from "./loader";

export default async function getInfo() {
    //Отправляем запрос на получение данных
    await fetch('https://gitcdn.link/cdn/netology-code/ajs-task/f4497dc9ba9df8f9c2e10b70dd5cdd5adf1ad6c6/netology.json')
        .then((response) => {
            //Преображаем ответ в json
            return response.json();
        })
        .then((x) => {
            //Получаем массив data в котором находятся данные
            const { data } = x;

            //проходимся по массиву и создаем элемент списка
            data.forEach(item => createListElement(item.direction.title, item.groups.length))
        })
        .finally(() => {
            //скрываем лоадер
            setTimeout(() => {
                deleteLoader();
            }, 1500);
        });
}