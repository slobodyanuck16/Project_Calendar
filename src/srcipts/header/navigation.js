import { getItem, setItem } from '../common/storage.js';
import { renderWeek } from '../calendar/calendar.js';
import { renderRedLine } from '../calendar/redLine.js';
import { renderHeader } from '../calendar/header.js';
import { getStartOfWeek, getDisplayedMonth } from '../common/time.utils.js';
// import { shmoment } from '../common/shmoment.js';

const navElem = document.querySelector('.navigation');
const displayedMonthElem = document.querySelector('.navigation__displayed-month');




function renderCurrentMonth() {
    // отрисовать месяц, к которому относиться текущая неделя
    displayedMonthElem.innerHTML = `${getDisplayedMonth(getItem('displayedWeekStart'))}`
}

const onChangeWeek = event => {
    // при переключении недели обновите displayedWeekStart в storage
    // и перерисуйте все необходимые элементы страницы (renderHeader, renderWeek, renderCurrentMonth, renderRedLine)
    const monday = getItem('displayedWeekStart');
    const inWeek = new Date(monday);

    const next = event.target.classList.contains('fa-chevron-right');
    const prew = event.target.classList.contains('fa-chevron-left');
    const today = event.target.classList.contains('navigation__today-btn');

    if (next) {
        inWeek.setDate(monday.getDate()+7);
        setItem('displayedWeekStart', inWeek)
    }
    if (prew) {
        inWeek.setDate(monday.getDate()-7);
        setItem('displayedWeekStart', inWeek)
    }
    if (today) {
        setItem('displayedWeekStart', getStartOfWeek(new Date()))
    }
    console.log(getItem('displayedWeekStart', inWeek))
    renderHeader();
    renderWeek();
    renderCurrentMonth();
};

export const initNavigation = () => {
    renderCurrentMonth();
    navElem.addEventListener('click', onChangeWeek);
};