export let storage = {
    // объект в котором должен храниться массив событий и дату понедельника отображаемой недели
    // еще понадобится хранить selectedEventId для того, чтобы показать попап с кнопкой удаления
    // другие данные хранить не нужно. Все, что необходимо для работы приложения можно посчитать
    thisWeekEvents() {
        const time = this.start;
        const newTime = time.getDate();
        console.log(newTime);
    }
};

export const setItem = (key, value) => {
    // ф-ция должна устанавливать значения в объект storage
    storage[key] = value;
};

export const getItem = key => {
    // ф-ция должна возвращать по ключу значения из объекта storage
    return storage[key];
};

// пример объекта события
const eventExample = {
    id: 0.7520027086457333, // id понадобится для работы с событиями
    title: 'Title',
    description: 'dddd',
    start: new Date('2020-03-17T01:10:00.000Z'),
    end: new Date('2020-03-17T04:30:00.000Z'),
}