export const generateNumbersRange = (from, to) => {
    const result = [];
    for (let i = from; i <= to; i++) {
        result.push(i);
    }
    return result;
}

export const getTime = () => {
    const newTime = generateNumbersRange(0, 23)
        .map(num => {
                if ((num - 10) < 0) {
                    return `0${num}:00`}
                else {return `${num}:00`}
            });
    return newTime;
}
export const renderTimescale = () => {
    // ф-ция должна генерировать разметку для боковой шкалы времени (24 часа)
    // полученную разметку вставьте на страницу с помощью innerHTML
    const timeScale = document.querySelector('.calendar__time-scale')
    const timePolar = document.createElement('div');
    timePolar.classList.add('calendar__time-scale-polar');
    timePolar.innerHTML = 'GMT+02'
    

    const timeString = getTime()
        .map(time => `<div class="calendar__time-scale-time" data-scale-time="${time}">${time}</div>`).join('');

        timeScale.innerHTML = timeString;
        timeScale.prepend(timePolar);
};

renderTimescale();