import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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
let current_weekday = -1;
let timetable = document.getElementById('timetable');

function append_child(tag_name, class_name, text, parent = timetable) {
  let el = document.createElement(tag_name);
  el.className = class_name;
  el.textContent = text;
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

for (let i = 0; i < 5; i++) {
  document.getElementById(String(i + 1)).onclick = () => change_weekday(i); 
}
document.getElementById("6").onclick = display_all_timetable;

change_weekday(0);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
