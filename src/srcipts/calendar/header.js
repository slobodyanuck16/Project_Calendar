// 1 - сделать чтобы в разметке генерировались 7 дней, начало с понедельника, и ориентируясь на понедельник выдавало числа этой недели 
// 1 - создаю функцию которая имеет 7 итераций, и на каждой итерации вставляет див с строкой дня недели, и див с числом этого дня недели
// 
// 

import { getItem } from '../common/storage.js';
import { generateWeekRange } from '../common/time.utils.js';
// import { openModal } from '../common/modal.js';

const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT','SUN'];

export const generateNumbersRange = (from, to) => {
    const result = [];
    for (let i = from; i <= to; i++) {
        result.push(i);
    }
    return result;
}

export const renderHeader = () => {
    // функция должна сгенерировать разметку c днями отображаемой недели (только день недели и число в месяце)
    // полученную разметку вставить на страницу с помощью innerHTML
    // в дата атрибуте каждой ячейки должно хранить для какого часа эта ячейка
    const header = document.querySelector('.calendar__header')
    const day = generateNumbersRange(0,6)
    .map(function headersDiv (headerDay) { 
        const monday = getItem('displayedWeekStart')
        return `<div class="calendar__header-day" data-day="${headerDay}">${daysOfWeek[headerDay]}
        <div class="calendar__header-num" data-num="">${generateWeekRange(monday)[headerDay].getDate()}</div>
    </div>`}).join('');

    header.innerHTML = day;
};

renderHeader();

// при клике на кнопку "Create" открыть модальное окно с формой для создания события