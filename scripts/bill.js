function answer(n){
  $('.answer').empty().append(n)
}
function billSolve(){
  let percents = +$('#percents').val()
  let start = +$('#start').val()
  let years = +$('#years').val()
  if (isNaN(percents) || isNaN(start) || isNaN(years) || start < 0 || years < 0 || percents < 0 || percents > 10000000 || start  > 10000000 || years  > 10000000){
    answer('Некорректные вводные')
  } else {
    let i;
    for (i = 0; i < years; i += 1){
      start = start * (1 + (1 / 100 * percents))
    }
    if (!isFinite(start)){
      answer('Похоже вы ввели слишком большие значения')
    }else {
      answer(start)
    }
  }
}
function billClear(){
  answer('Здесь будет ответ')
  $('#percents').val('')
  $('#start').val('')
  $('#years').val('')
}
