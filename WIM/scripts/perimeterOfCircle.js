function answer(n){
  $('.answer').empty().append(n)
}
function perClear(){
  answer('Здесь будет ответ')
  $('#r').val('')
}
function perSolve(){
  let r = +$('#r').val()
  if (r < 0 || isNaN(r)){
    answer('Некорректные вводные')
  } else{
    answer(r * 2 * 3.14159265359)
  }
}
