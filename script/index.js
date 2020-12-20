import { createLoader } from './loader';

import { createStructure } from './createElements'

import getInfo from './api'

//Вызываем отображение лоадера
createLoader();

window.onload = async function () {
    //Выполянем функции при загрузке страницы
    createStructure();
    await getInfo();
}

import '../style/reset.css'
import '../style/base.css'