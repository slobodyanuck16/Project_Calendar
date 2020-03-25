import { getItem, setItem } from '../common/storage.js';
import { renderWeek } from '../calendar/calendar.js';
import { renderRedLine } from '../calendar/redLine.js';
import { renderHeader } from '../calendar/header.js';
import { getStartOfWeek, getDisplayedMonth } from '../common/time.utils.js';

const navElem = document.querySelector('.navigation');
const displayedMonthElem = document.querySelector('.navigation__displayed-month');

function renderCurrentMonth() {
    // отрисовать месяц, к которому относиться текущая неделя
    displayedMonthElem.innerHTML = `${getDisplayedMonth(getStartOfWeek(new Date()))}`
}

renderCurrentMonth();

const onChangeWeek = e => {
    // при переключении недели обновите displayedWeekStart в storage
    // и перерисуйте все необходимые элементы страницы (renderHeader, renderWeek, renderCurrentMonth, renderRedLine)
    setItem('displayedWeekStart', getStartOfWeek(new Date() + 7));
    const renderHeader = () => {
        const header = document.querySelector('.calendar__header')
        const day = generateNumbersRange(0,6)
        .map(function headersDiv (headerDay) { 
            let monday = getItem('displayedWeekStart')
            return `<div class="calendar__header-day" data-day="${headerDay}">${daysOfWeek[headerDay]}
            <div class="calendar__header-num" data-num="">${generateWeekRange(monday)[headerDay].getDate()}</div>
        </div>`}).join('');
        header.innerHTML = day;
    };
    const renderWeek = () => {
        const week = document.querySelector('.calendar__week')
        const days = generateNumbersRange(1,7)
        .map(calendarDay => `
        <div
            class="calendar__day" data-day="${calendarDay}"
            ><div class="calendar__day-line"></div>${generateDay()}</div>
        `).join('');
        week.innerHTML = days;
    };
    function renderCurrentMonth() {
        displayedMonthElem.innerHTML = `${getDisplayedMonth(getStartOfWeek(new Date()))}`
    }
    renderHeader();
    renderWeek();
    renderCurrentMonth();
};

export const initNavigation = () => {
    renderCurrentMonth();
    navElem.addEventListener('click', onChangeWeek);
    // renderHeader(); ???
};