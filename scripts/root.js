let frac = "<div class = 'col-md'><input id = 'aF' placeholder = 'Делитель а'></div><div class = 'col-md'><input id = 'nF' placeholder = 'Делитель n'></div>"
let hasFrac = false
function rootFrac(){
  if(hasFrac){
    $('#fracs').empty()
    hasFrac = false
  }else{
    $('#fracs').append(frac)
    hasFrac = true
  }
}
function rootClear(){
  $('#a').val('')
  $('#n').val('')
  $('#aF').val('')
  $('#nF').val('')
  answer('Здесь будет ответ')
}
function answer (n){
  $('.answer').empty().append(n)
}
function rootSolve(){
  let aF = ($('#aF').val() === undefined || $('#aF').val() === '') ? '1' : $('#aF').val();
  let nF = ($('#nF').val() === undefined || $('#nF').val() === '') ? '1' : $('#nF').val();
  let a = ($('#a').val() === undefined || $('#a').val() === '') ? '1' : $('#a').val()
  let n = ($('#n').val() === undefined || $('#n').val() === '') ? '1' : $('#n').val()
  if (isNaN(+aF) || isNaN(+nF) || isNaN(+a) || isNaN(+n) || +nF === 0 || +aF === 0 || +n === 0){
    answer('Некорректные вводные')
  } else {
    answer(Math.pow(a / aF, 1 / (n / nF)))
  }
}
