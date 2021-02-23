function quClear(){
  $('#a').val('')
  $('#b').val('')
  $('#c').val('')
  $('.answer').empty().append('Здесь будет ответ')
  $('.currentEquation').empty().append('Здесь будет текущее уравнение')
}
let quIsFrac = false
function quFrac(){
  if (quIsFrac){
    $('.quFractions').empty()
    quIsFrac = false
  }else {
    $('.quFractions').append("<div class = 'col-lg'><input id = 'fra' placeholder = 'Делитель a'></div><div class = 'col-lg'><input id = 'frb' placeholder = 'Делитель b'></div><div class = 'col-lg'><input id = 'frc' placeholder = 'Делитель c'></div>")
    quIsFrac = true
  }
}
function quSolve(){
  let a = +$('#a').val() / +(($('#fra').val() === undefined || $('#fra').val() == '') ? 1 : $('#fra').val())
  let b = +$('#b').val() / +(($('#frb').val() === undefined || $('#frb').val() == '') ? 1 : $('#frb').val())
  let c = +$('#c').val() / +(($('#frc').val() === undefined || $('#frc').val() == '') ? 1 : $('#frc').val())
  if (isNaN(a * b * c) || a * b * c === Infinity || a * b * c === -Infinity){
    $('.answer').empty().append('Некорректные вводные')
  } else {
    let discriminant = b * b - 4 * a * c
    if (a === 0 && b !== 0){
      $('.answer').empty().append(-c / b)
    } else if (discriminant < 0 || (a == 0 && b == 0 && c != 0)){
      $('.answer').empty().append('∅')
    } else if (discriminant === 0){
      $('.answer').empty().append(-b / 2 / a)
    } else if (discriminant > 0){
      $('.answer').empty().append((-b + Math.sqrt(discriminant)) / a / 2 + ' ∪ ' + (-b - Math.sqrt(discriminant)) / a / 2)
    }
    quPutText(a, b, c)
  }
}
function quPutText(a, b, c){
  if (isNaN(a)) a = 0;
  if (isNaN(b)) b = 0;
  if (isNaN(c)) c = 0;
  let minusOrPlus = function (n) {
    if (a != 0 && b != 0){
      if (n > 0) return '+ ' + n;
      else if (n < 0) return '- ' + -n;
      else return '';
    }else {
      if (n > 0) return '' + n;
      else if (n < 0) return '-' + -n;
      else return '';
    }
  }
  let elementA = function (n) {
    if (n == 0){
      return ''
    }else if (n == 1){
      return 'x² '
    }else if (n == -1){
      return '- x² '
    }else {
      return n + 'x² '
    }
  }
  let elementB = function (n) {
    if (n == 0){
      return ''
    }else if (n == 1 && a != 0){
      return '+ x '
    }else if (n == 1){
      return 'x '
    }else if (n == -1){
      return '- x '
    }else if (n != 1 && a == 0){
      return n + 'x '
    }else {
      return minusOrPlus(n) + 'x '
    }
  }
  let elementC = function (n) {
    if (n == 0 && (a != 0 || b != 0)){
      return '= 0'
    }else if (a == 0 && b == 0 && n == 0){
      return '0'
    }else if (a == 0 && b == 0 && n != 0){
      return minusOrPlus(n) + ' = 0'
    }else if(n != 0 && (b != 0 || a != 0)){
      if (n < 0){
        return '- ' + -n + ' = 0'
      }else {
        return '+ ' + n + ' = 0'
      }
    }
  }
  $('.currentEquation').empty().append(elementA(a) + elementB(b) + elementC(c))
}
