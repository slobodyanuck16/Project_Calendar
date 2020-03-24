// import { getItem } from '../common/storage.js';
// import { generateWeekRange } from '../common/time.untils.js';
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
    .map(headerDay => `
    <div class="calendar__header-day" data-day="${headerDay}">${daysOfWeek[headerDay]}<div class="calendar__header-num" data-num="">${headerDay}</div></div>`).join('');

    header.innerHTML = day;
};

renderHeader();

// при клике на кнопку "Create" открыть модальное окно с формой для создания события