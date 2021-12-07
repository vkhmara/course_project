import './App.css';


function App() {
  return (
  <div>
    <div id="weekday_buttons">
      <button class="buttons" id="1">
        Понедельник
      </button>
      <button class="buttons" id="2">
        Вторник
      </button>
      <button class="buttons" id="3">
        Среда
      </button>
      <button class="buttons" id="4">
        Четверг
      </button>
      <button class="buttons" id="5">
        Пятница
      </button>
      <button class="buttons" id="6">
        Все дни
      </button>
    </div>
    <div class="one_day_timetable" id="timetable">
      <div class></div>
      <div class="bordered">Понедельник</div>
      <div class="bordered">14:30 - 15:50</div>
      <div class="bordered">MaтМод(п)</div>
      <div class="bordered">16:00 - 17:20</div>
      <div class="bordered">МатМод(л)</div>
      <div class="bordered">17:30 - 18:50</div>
      <div class="bordered">ДС_Р(п)</div>
      <div class="bordered">19:00 - 20:20</div>
      <div class="bordered">ДС_Т(п)</div>
    </div>
  </div>);
}

export default App;

