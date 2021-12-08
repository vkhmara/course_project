import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

let times = ['14:30 - 15:50', '16:00 - 17:20', '17:30 - 18:50', '19:00 - 20:20'];
let days = {
  'Понедельник': ['MaтМод(п)', 'МатМод(л)', 'ДС_Р(п)', 'ДС_Т(п)'],
  'Вторник': ['КСВЭ(п)', 'КСВЭ(л)', 'ДОиК(л)', 'Курсовой проект'],
  'Среда': ['ИиСМ(п)', 'ДОиК(п)', 'ИиСМ(л)', 'ДС_Р(л)'],
  'Четверг': ['ДС_Т(л)', 'ОП(л)', 'ДГИ(л)', 'ОП(п)'],
  'Пятница': ['ДГИ(п)', 'МДиСУБД(л)', '', 'МДиСУБД(п)']
};
let weekdays = Object.keys(days);
let timetable = document.getElementById('timetable');

function change_weekday(current_weekday_num) {
  let current_weekday = weekdays[current_weekday_num];
  let pairs = days[current_weekday];
  ReactDOM.render(
    <div class="one_day_timetable">
      <div></div>
      <div class="bordered">{current_weekday}</div>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) =>
        <div class="bordered">
          {(i % 2 == 0 ? times : pairs)[Math.floor(i / 2)]}
        </div>
      )}
    </div>,
    timetable
  );
}

function display_all_timetable() {
  
  let elems = [];
  times.map((time, i) => {
    elems.push(time);
    weekdays.map((day) => {
      elems.push(days[day][i])
    });
  });

  ReactDOM.render(
    <div class="all_timetable">
      <div></div>
      {
        weekdays.map((day) =>
          <div class="bordered">{day}</div>
        )
      }
      {
        elems.map(elem =>
          <div class="bordered">{elem}</div>
        )
      }
    </div>,
    timetable
  );
}

// add listener to buttons
for (let i = 0; i < 5; i++) {
  document.getElementById(String(i + 1)).onclick = () => change_weekday(i);
}
document.getElementById("6").onclick = display_all_timetable;

// set the start day as monday
change_weekday(0);
