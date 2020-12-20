function createStructure() {
    //Получем корневой элемент куда будем производить ренедеринг
    const rootEl = document.getElementById('root');

    //Создаем необходимые тэги
    const container = document.createElement('div');
    const span = document.createElement('span');
    const p = document.createElement('p');

    const containerList = document.createElement('div')

    //Создаем текста для заголовка
    const headerText = document.createTextNode('Изучайте')
    const headerTextBlue = document.createTextNode('актуальные темы');


    //Добавляем класс и помещаем созданный текст в span
    span.classList.add('text_blue');
    span.appendChild(headerTextBlue);

    //Помещаем созданный тест и ранее созадный span в p
    p.appendChild(headerText);
    p.classList.add('title');
    p.appendChild(span)

    //Назначем класс главному контейнеру и помещаем ранее созданый тэг p в него
    container.classList.add('container');
    container.appendChild(p)

    //назначем класс и id контейнеру списка элементов и помещаем его в главный контейнер
    containerList.classList.add('list_items');
    containerList.id = "list"
    container.appendChild(containerList)

    //Помещаем главный контейнер в корневой элемент
    rootEl.appendChild(container);
}

function createListElement (name, count) {
    //Создание элемента списка
    const listContainer = document.getElementById('list');

    const container = document.createElement('div');
    container.classList.add('item_container');

    const textItem = document.createElement('div');
    textItem.classList.add('item')

    const courseName = document.createElement('span');
    courseName.classList.add('course_name');
    const nameValue = document.createTextNode(name);
    courseName.appendChild(nameValue);

    const courseCount = document.createElement('span');
    courseCount.classList.add('course_count');
    const countValue = document.createTextNode(`${count} курса`);
    courseCount.appendChild(countValue)

    const checkButton = document.createElement('div');
    checkButton.classList.add('check_button');

    textItem.appendChild(courseName);
    textItem.appendChild(courseCount);

    container.appendChild(textItem);
    container.appendChild(checkButton);

    listContainer.appendChild(container);

}

module.exports = { createStructure, createListElement }