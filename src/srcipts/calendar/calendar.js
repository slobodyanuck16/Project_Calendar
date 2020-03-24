import { getItem } from '../common/storage.js';
import { generateWeekRange } from '../common/time.untils.js';
import { renderEvents } from '../events/events.js';

export const generateNumbersRange = (from, to) => {
    const result = [];
    for (let i = from; i <= to; i++) {
        result.push(i);
    }
    return result;
}

const generateDay = () => {
    // функция должна сгенерировать и вернуть разметку недели в виде строки
    // разметка состоит из 24 часовых временных слотов (.calendar__time-slot)
    
    const sells = generateNumbersRange(0,24)
    .map(daySell => `
    <div
        class="calendar__day-sell" data-time="${daySell}"
    ></div>
    `).join('');
    return sells;
};

export const renderWeek = () => {
    // функция должна сгенерировать разметку недели в виде строки и вставить ее на страницу (в .calendar__week)
    // разметка недели состоит из 7 дней (.calendar__day) отображаемой недели
    // каждый день должен содержать в дата атрибуте порядковый номер для в месяце
    // какую неделю отображать - берем из storage
    // после того, как отрисовали всю сетку для отображаемой недели - добавляем события методом renderEvents
    const week = document.querySelector('.calendar__week')
    
    const days = generateNumbersRange(1,7)
    .map(calendarDay => `
    <div
        class="calendar__day" data-day="${calendarDay}"
        ><div class="calendar__day-line"></div>${generateDay()}</div>
    `).join('');

    week.innerHTML = days;
};

renderWeek();