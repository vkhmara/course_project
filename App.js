let times = ['14:30 - 15:50', '16:00 - 17:20', '17:30-18:50', '19:00 - 20:20'];
let days = {
    'Понедельник': ['MaтМод(п)', 'МатМод(л)', 'ДС_Р(п)', 'ДС_Т(п)'],
    'Вторник': ['КСВЭ(п)', 'КСВЭ(л)', 'ДОиК(л)', 'Курсовой проект'],
    'Среда': ['ИиСМ(п)', 'ДОиК(п)', 'ИиСМ(л)', 'ДС_Р(л)'],
    'Четверг': ['ДС_Т(л)', 'ОП(л)', 'ДГИ(л)', 'ОП(п)'],
    'Пятница': ['ДГИ(п)', 'МДиСУБД(л)', '', 'МДиСУБД(п)']
};
let weekdays = Object.keys(days);
let current_weekday_num = -1;

let timetable = document.getElementById('timetable');

let buttons_panel = document.getElementById('weekday_buttons')
for (let weekday = 0; weekday < weekdays.length; weekday++) {
    append_child('button',
        'buttons',
        weekdays[weekday],
        buttons_panel,
        {
            'onclick': () => change_weekday(weekday)
        });
}
append_child('button',
    'buttons',
    'Все дни',
    buttons_panel,
    {
        'onclick': display_all_timetable
    });

function append_child(tag_name, class_name, text, parent = timetable, styles = {}) {
    let el = document.createElement(tag_name);
    el.className = class_name;
    el.textContent = text;
    for (key in styles) {
        el[key] = styles[key];
    }
    parent.appendChild(el);
}

function change_weekday(current_weekday_num) {
    current_weekday = weekdays[current_weekday_num];
    timetable.textContent = '';
    timetable.className = 'one_day_timetable';
    timetable.appendChild(document.createElement('div'));

    append_child('div', 'bordered', current_weekday)

    for (let index = 0; index < times.length; index++) {
        append_child('div', 'bordered', times[index]);
        append_child('div', 'bordered', days[current_weekday][index]);
    }
}

function display_all_timetable() {
    timetable.textContent = '';
    timetable.className = 'all_timetable';

    timetable.appendChild(document.createElement('div'));

    weekdays.forEach(weekday => {
        append_child(
            'div',
            'bordered',
            weekday
        )
    });

    times.forEach((time, i) => {
        append_child(
            'div',
            'bordered',
            time
        );
        weekdays.forEach(weekday => {
            append_child(
                'div',
                'bordered',
                days[weekday][i]
            );  
        });
    });
}

change_weekday(0);