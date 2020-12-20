function createLoader () {
    //Получаем корневой элемент
    const rootEl = document.getElementById('root');

    //создаем контейнер лоадера и назначаем ему id и класс
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.classList.add('loader');

    //создаем лоадер и назначем класс
    const loading = document.createElement('div');
    loading.classList.add('loading');

    //Помещаем лоадер в контейнер
    loader.appendChild(loading);

    //Помещаем контейнер лоадера в корневой элемент
    rootEl.appendChild(loader);
}

function deleteLoader () {
    //получаем корневой элемент
    const rootEl = document.getElementById('root');

    //Получаем элемент лоадера
    const loaderElement = document.getElementById('loader');

    //удаеляем лоадер из корневого элемента
    rootEl.removeChild(loaderElement)
}

module.exports = { createLoader, deleteLoader }