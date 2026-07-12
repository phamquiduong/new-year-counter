var timeout = null;
const second_of_day = 24 * 60 * 60;
const second_of_hour = 60 * 60;
const second_of_minute = 60;
const NEW_YEAR_DATE = [
    new Date(2023, 0, 22, 0, 0, 0, 0),
    new Date(2024, 1, 10, 0, 0, 0, 0),
    new Date(2025, 0, 29, 0, 0, 0, 0),
    new Date(2026, 1, 17, 0, 0, 0, 0),
    new Date(2027, 1, 6, 0, 0, 0, 0),
    new Date(2028, 0, 26, 0, 0, 0, 0),
    new Date(2029, 1, 13, 0, 0, 0, 0),
    new Date(2030, 1, 3, 0, 0, 0, 0),
    new Date(2031, 0, 23, 0, 0, 0, 0),
    new Date(2032, 1, 11, 0, 0, 0, 0),
    new Date(2033, 0, 31, 0, 0, 0, 0),
    new Date(2034, 1, 19, 0, 0, 0, 0),
    new Date(2035, 1, 8, 0, 0, 0, 0),
    new Date(2036, 0, 28, 0, 0, 0, 0)
];

function init() {
    const NOW = Date.now();

    for (new_year of NEW_YEAR_DATE)
        if (new_year > NOW)
            break;

    document.getElementById('year').innerHTML = new_year.getYear() + 1900;

    loop(Math.floor(Math.abs(new_year - NOW) / 1000));
}


function loop(count) {
    temp = count;

    day = Math.floor(temp / second_of_day);
    temp = temp % second_of_day;

    hour = Math.floor(temp / second_of_hour);
    temp = temp % second_of_hour;

    minute = Math.floor(temp / second_of_minute);
    temp = temp % second_of_minute;

    second = Math.floor(temp);

    document.getElementById('day').innerHTML = day;
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('second').innerHTML = second;

    timeout = setTimeout(function () {
        count -= 1;
        loop(count);
    }, 1000);
}
