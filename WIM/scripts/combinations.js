function comSolve(){
  let n = ($('#n').val() === '') ? 1 : $('#n').val()
  let k = ($('#k').val() === '') ? 1 : $('#k').val()
  if (isNaN(n) || isNaN(k) || k < 0 || n < 0){
    answer('Некорректные вводные')
  } else {
    n = BigInt(n)
    k = BigInt(k)
    let result = factorial(n) / factorial(n - k) / factorial(k) + ''
    answer(result)
  }
}
function factorial(n){
  let answer = 1n;
  let i;
  for(i = 1n; i <= n; i += 1n){
    answer = answer * i
  }
  return answer;
}
function answer(n){
  $('.answer').empty().append(n)
}
function comClear(){
  answer('Здесь будет ответ')
  $('#n').val('')
  $('#k').val('')
}
