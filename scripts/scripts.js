function setStandartBtnsStyles (){
  if (last !== undefined){
    last.removeClass('active')
    last.addClass('menu-btn')
  }
}
const screenWidth = window.screen.width
function adaptation(){
  if(screenWidth < 892){
    $('.inputs').css({'align-items': 'center'})
  }
}
let last;
$('.menu-btn').click(function(){
  setStandartBtnsStyles()
  last = $(this)
  $(this).addClass('active')
  $(this).removeClass('menu-btn')
  addView($(this))
})
let lastBtn = $('#starter');
function addView (n){
  if (n.text() === $('#quadraticEquation').text() && lastBtn.text() !== n.text()){
    lastBtn = n;
    $('.content').children().addClass('animate__animated animate__backOutDown')
    setTimeout(function(){
      $('.content').empty().append(code[0])
      $('.content').children().addClass('animate__animated animate__backInDown')
      adaptation()
    }, 500)
  } else if (n.text() === $('#square').text() && lastBtn.text() !== n.text()){
    lastBtn = n;
    $('.content').children().addClass('animate__animated animate__backOutDown')
    setTimeout(function(){
      $('.content').empty().append(code[1])
      $('.content').children().addClass('animate__animated animate__backInDown')
      adaptation()
      $('select').click(function(){select($('select').val())})
    }, 500)
  } else if (n.text() === $('#root').text() && lastBtn.text() !== n.text()){
    lastBtn = n;
    $('.content').children().addClass('animate__animated animate__backOutDown')
    setTimeout(function(){
      $('.content').empty().append(code[2])
      $('.content').children().addClass('animate__animated animate__backInDown')
      adaptation()
    }, 500)
  } else if (n.text() === $('#combinations').text() && lastBtn.text() !== n.text()){
    lastBtn = n;
    $('.content').children().addClass('animate__animated animate__backOutDown')
    setTimeout(function(){
      $('.content').empty().append(code[3])
      $('.content').children().addClass('animate__animated animate__backInDown')
      adaptation()
    }, 500)
  } else if (n.text() === $('#perimeter').text() && lastBtn.text() !== n.text()){
    lastBtn = n;
    $('.content').children().addClass('animate__animated animate__backOutDown')
    setTimeout(function(){
      $('.content').empty().append(code[4])
      $('.content').children().addClass('animate__animated animate__backInDown')
      adaptation()
    }, 500)
  } else if (n.text() === $('#bill').text() && lastBtn.text() !== n.text()){
    lastBtn = n;
    $('.content').children().addClass('animate__animated animate__backOutDown')
    setTimeout(function(){
      $('.content').empty().append(code[5])
      $('.content').children().addClass('animate__animated animate__backInDown')
      adaptation()
    }, 500)
  } else if (n.text() === $('#about').text() && lastBtn.text() !== n.text()){
    lastBtn = n;
    $('.content').children().addClass('animate__animated animate__backOutDown')
    setTimeout(function(){
      $('.content').empty().append(code[6])
      $('.content').children().addClass('animate__animated animate__backInDown')
      adaptation()
    }, 500)
  } else if (n.text() === $('#starter').text() && lastBtn.text() !== n.text()){
    lastBtn = n;
    $('.content').children().addClass('animate__animated animate__backOutDown')
    setTimeout(function(){
      $('.content').empty().append(code[7])
      $('.content').children().addClass('animate__animated animate__backInDown')
      adaptation()
    }, 500)
  }
}
let code = []
code[0] = "<div class = 'content-title'>"
            +"<h2>Квадратное уравнение</h2>"
          +"</div>"
          +"<p class = 'main-text'>Введите коэффициенты a, b и c.<br><br>Напоминаем, что квадратным называют уравнение вида ax + bx + c = 0.</p>"
          +"<p class = 'main-text currentEquation'>Здесь будет текущее уравнение</p>"
          +"<p class = 'main-text answer'>Здесь будет ответ</p>"
          +"<div class = 'inputs'>"
            +"<input id = 'a' placeholder = 'a'>"
            +"<input id = 'b' placeholder = 'b'>"
            +"<input id = 'c' placeholder = 'c'>"
          +"</div>"
          +"<div class = 'inputs quFractions'></div>"
          +"<div class = 'inBtns'>"
            +"<button class = 'inBtn' onClick = 'quSolve()'>Решить</button>"
            +"<button class = 'inBtn' onClick = 'quClear()'>Очистить</button>"
            +"<button class = 'inBtn' onClick = 'quFrac()'>Дробь?</button>"
          +"</div>"
code[1] = "<div class = 'content-title'>"
            +"<h2>Площадь геометрических объектов</h2>"
          +"</div>"
          +"<div class = 'container-fluid' id = 'shapeImgCon'>"
            +"<img src = '../images/triangle.png' alt = 'Изображение' id = 'shapeImg'>"
          +"</div>"
          +"<div class = 'inputs'>"
            +"<input id = 'a' placeholder = 'a'>"
            +"<input id = 'h' placeholder = 'h'>"
          +"</div>"+"<p class = 'main-text answer' id = 'areaAnswer'>Здесь будет ответ</p>"
          +"<div class = 'inBtns'>"
          +"<select class = 'selectShape'>"
            +"<option value = 'triangle' id = 'triangle'>Треугольник</option>"
            +"<option value = 'square' id = 'squareQv'>Квадрат</option>"
            +"<option value = 'rectangle' id = 'rectangle'>Прямоугольник</option>"
            +"<option value = 'parallelogram' id = 'parallelogram'>Параллелограмм</option>"
            +"<option value = 'rhombus' id = 'rhombus'>Ромб</option>"
            +"<option value = 'trapeze' id = 'trapeze'>Трапеция</option>"
            +"<option value = 'deltoid' id = 'deltoid'>Дельтоид</option>"
            +"<option value = 'circle' id = 'circle'>Окружность</option>"
          +"</select>"+"<button class = 'inBtn' id = 'areaSolve' onClick = 'areaSolve()'>Вычислить</button>"
          +"<button class = 'inBtn' id = 'areaClear' onClick = 'areaClear()'>Очистить</button></div>"
code[2] = "<div class = 'content-title'>"
            +"<h2>Корень n-ой степени</h2>"
          +"</div>"
          +"<p class = 'main-text'>Напоминаем, что корень 1/2 степени из a равен a².</p>"
          +"<p class = 'main-text answer'>Здесь будет ответ</p>"
          +"<div class = 'inputs'>"
            +"<input id = 'a' placeholder = 'a'>"
            +"<input id = 'n' placeholder = 'n'>"
          +"</div>"
          +"<div class = 'inputs' id = 'fracs'></div>"
          +"<div class = 'inBtns'>"
            +"<button class = 'inBtn' onclick = 'rootSolve()'>Вычислить</button>"
            +"<button class = 'inBtn' onclick = 'rootClear()'>Очистить</button>"
            +"<button class = 'inBtn' onclick = 'rootFrac()'>Дробь?</button>"
          +"</div>"
code[3] = "<div class = 'content-title'>"
            +"<h2>Число сочетаний из n по k</h2>"
          +"</div>"
          +"<p class = 'main-text' style = 'font-size: 140%'>Что такое число сочетаний из n по k? Представим, у вас есть набор каких-то предметов (a, b, c) и вы хотите узнать сколькими разными способами можно взять из них два так, чтобы ни в одном из случаев не были отобраны два предметы, которые были в одном из прошлых. В данном случае таких вариаций три: (a, b), (a, c), (b, c). N в данном случае 3 - всего три предмета, а k - 2 - выборка по два предмета.</p>"+"<p class = 'main-text answer'>Здесь будет ответ</p>"
          +"<div class = 'inputs'>"
            +"<input id = 'n' placeholder = 'n'>"
            +"<input id = 'k' placeholder = 'k'>"
          +"</div>"
          +"<div class = 'inBtns'>"
            +"<button class = 'inBtn' onclick = 'comSolve()'>Вычислить</button>"
            +"<button class = 'inBtn' onclick = 'comClear()'>Очистить</button>"
          +"</div>"
code[4] = "<div class = 'content-title'>"
            +"<h2>Периметр окружности</h2>"
          +"</div>"
          +"<div id = 'shapeImgCon'>"
            +"<img src = '../images/circle.png' alt = 'Картинка'>"
          +"</div>"
          +"<p class = 'main-text answer'>Здесь будет ответ</p>"
          +"<div class= 'inputs'>"
            +"<input id = 'r' placeholder = 'Радиус'>"
          +"</div>"
          +"<div class = 'inBtns'>"
            +"<button class = 'inBtn' onclick = 'perSolve()'>Вычислить</button>"
            +"<button class = 'inBtn' onclick = 'perClear()'>Очистить</button>"
          +"</div>"
code[5] = "<div class = 'content-title'>"
            +"<h2>Счёт в банке через n лет</h2>"
          +"</div>"
          +"<p class = 'main-text'>Для получения количества денег на счёте через n лет введите процентную ставку, количество лет, с момента пополнения и начальную сумму</p>"
          +"<p class = 'main-text answer'>Здесь будет ответ</p>"
          +"<div class = 'inputs'>"
            +"<input id = 'start' placeholder = 'Начальная сумма'>"
            +"<input id = 'percents' placeholder = 'Процент'>"
            +"<input id = 'years' placeholder = 'Года'>"
          +"</div>"
          +"<div class = 'inBtns'>"
            +"<button class = 'inBtn' onclick = 'billSolve()'>Вычислить</button>"
            +"<button class = 'inBtn' onclick = 'billClear()'>Очистить</button>"
          +"</div>"
code[6] = "<div class = 'content-title'>"
            +"<h2>О проекте</h2>"
          +"</div>"
          +"<p class = 'main-text'>При создании проекта были использованы:</p>"
          +"<ul>"
            +"<li class = 'main-text'>Технологии HTML, CSS и JavaScript </li><li class = 'main-text'>Фреймворк <a target = '_blank' href = 'https://getbootstrap.com/'>Bootstrap</a>"
            +"</li><li class = 'main-text'>Библиотека <a target = '_blank' href = 'https://jquery.com/'>JQuery</a>"
            +"</li><li class = 'main-text'>Библиотека <a target = '_blank' href = 'https://animate.style/'>Animate.css</a></li>"
          +"</ul>"
          +"<p class = 'main-text'>Как было упомянуто, это вторая версия ВИМа. До переработки он был неадаптивным и с худшим, нежели эта, оформлением.</p>"
code[7] = "<div class = 'content-title'>"
            +"<h2>Начальная</h2>"
          +"</div>"
          +"<p class = 'main-text'>Приветствую тебя, Пользователь! Это вторая переработанная версия ВИМа.<br><br>Слева есть кнопки, при нажатии на которые появится соответствующий функционал.<br><br>Приятного пользования!</p>"
$(document).ready(function(){
  setStandartBtnsStyles()
  last = $('#starter')
  $('#starter').addClass('active')
  $('#starter').removeClass('menu-btn')
  addView($('#starter'))
})
