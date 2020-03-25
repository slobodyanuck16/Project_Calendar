import { getItem, setItem } from '../common/storage.js';
import { renderWeek } from '../calendar/calendar.js';
import { renderRedLine } from '../calendar/redLine.js';
import { renderHeader } from '../calendar/header.js';
import { getStartOfWeek, getDisplayedMonth } from '../common/time.utils.js';

const navElem = document.querySelector('.navigation');
const displayedMonthElem = document.querySelector('.navigation__displayed-month');

function renderCurrentMonth() {
    // отрисовать месяц, к которому относиться текущая неделя
    displayedMonthElem.innerHTML = `${getDisplayedMonth(getItem('displayedWeekStart'))}`
}

const onChangeWeek = e => {
    // при переключении недели обновите displayedWeekStart в storage
    // и перерисуйте все необходимые элементы страницы (renderHeader, renderWeek, renderCurrentMonth, renderRedLine)
    const monday = getItem('displayedWeekStart');
    const inWeek = new Date();
    inWeek.setDate(monday.getDate()+7);
    setItem('displayedWeekStart', inWeek)
    renderHeader();
    renderWeek();
    renderCurrentMonth();
};

export const initNavigation = () => {
    renderCurrentMonth();
    navElem.addEventListener('click', onChangeWeek);
};