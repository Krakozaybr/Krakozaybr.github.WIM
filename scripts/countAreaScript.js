let currentMode = 'triangle'
function answer(a){
  $('#areaAnswer').empty().append(a)
}
function areaClear(){
  $('#areaAnswer').empty().append('Здесь будет ответ')
  $('#a').val('')
  $('#b').val('')
  $('#h').val('')
  $('#r').val('')
}
function areaSolve (){
  function check(a = 1, b = 1, c = 1, d = 1){
    let aCheck = (a === undefined || a === null || isNaN(+a)) || a < 0;
    let bCheck = (b === undefined || b === null || isNaN(+b)) || b < 0;
    let cCheck = (c === undefined || c === null || isNaN(+c)) || c < 0;
    let dCheck = (d === undefined || d === null || isNaN(+d)) || d < 0;
    if (aCheck || bCheck || cCheck || dCheck){
      return false
    } else {
      return true
    }
  }
  if (currentMode === 'triangle'){
    let a = ($('#a').val() === '' || $('#a').val() === '0') ? 1 : +$('#a').val();
    let h = ($('#h').val() === '' || $('#h').val() === '0') ? 1 : +$('#h').val();
    if (check(a, h)){
      answer(a * h / 2 + '')
    } else {
      answer('Некорректные вводные')
    }
  }else if (currentMode === 'square'){
    let a = ($('#a').val() === '' || $('#a').val() === '0') ? 1 : +$('#a').val();
    if (check(a)){
      answer(a * a + '')
    } else {
      answer('Некорректные вводные')
    }
  }else if (currentMode === 'rectangle'){
    let a = ($('#a').val() === '' || $('#a').val() === '0') ? 1 : +$('#a').val();
    let b = ($('#b').val() === '' || $('#b').val() === '0') ? 1 : +$('#b').val();
    if (check(a, b)){
      answer(a * b + '')
    } else {
      answer('Некорректные вводные')
    }
    }
  else if (currentMode === 'parallelogram' || currentMode === 'rhombus'){
    let a = ($('#a').val() === '' || $('#a').val() === '0') ? 1 : +$('#a').val();
    let h = ($('#h').val() === '' || $('#h').val() === '0') ? 1 : +$('#h').val();
    if (check(a, h)){
      answer(a * h + '')
    } else {
      answer('Некорректные вводные')
    }
  }else if (currentMode === 'trapeze'){
    let a = ($('#a').val() === '' || $('#a').val() === '0') ? 1 : +$('#a').val();
    let b = ($('#b').val() === '' || $('#b').val() === '0') ? 1 : +$('#b').val();
    let h = ($('#h').val() === '' || $('#h').val() === '0') ? 1 : +$('#h').val();
    if (check(a, b)){
      answer((a + b) / 2 * h + '')
    } else {
      answer('Некорректные вводные')
    }
  } else if (currentMode === 'deltoid'){
    let r = ($('#r').val() === '' || $('#r').val() === '0') ? 1 : +$('#r').val();
    let a = ($('#a').val() === '' || $('#a').val() === '0') ? 1 : +$('#a').val();
    let b = ($('#b').val() === '' || $('#b').val() === '0') ? 1 : +$('#b').val();
    if (check(a, b, r)){
      answer((+a + +b) * r + '')
    } else {
      answer('Некорректные вводные')
    }
  } else if (currentMode === 'circle'){
    let r = ($('#r').val() === '' || $('#r').val() === '0') ? 1 : +$('#r').val();
    if (check(r)){
      answer(3.14159265359 * r * r + '')
    } else {
      answer('Некорректные вводные')
    }
  } else {
    console.log(42)
  }
}
function select(n){
  function put (a = false, b = false, h = false, r = false){
    $('.inputs').empty()
    if (a){
      $('.inputs').append(aInput)
    }
    if (b){
      $('.inputs').append(bInput)
    }
    if (h){
      $('.inputs').append(hInput)
    }
    if (r){
      $('.inputs').append(rInput)
    }
  }
  console.log(n)
  let val = n
  switch(val){
    case 'triangle':
    put(1, 0, 1)
    currentMode = 'triangle'
    document.getElementById('shapeImg').src = 'images/triangle.png'
    break; case 'square':
    put(1)
    currentMode = 'square'
    document.getElementById('shapeImg').src = 'images/square.png'
    break; case 'rectangle':
    put(1, 1)
    currentMode = 'rectangle'
    document.getElementById('shapeImg').src = 'images/rectangle.png'
    break; case 'parallelogram':
    put(1, 0, 1)
    currentMode = 'parallelogram'
    document.getElementById('shapeImg').src = 'images/parallelogram.png'
    break; case 'rhombus':
    put(1, 0, 1)
    currentMode = 'rhombus'
    document.getElementById('shapeImg').src = 'images/rhombus.png'
    break; case 'trapeze':
    put(1, 1, 1)
    currentMode = 'trapeze'
    document.getElementById('shapeImg').src = 'images/trapeze.png'
    break; case 'deltoid':
    put(1, 1, 0, 1)
    currentMode = 'deltoid'
    document.getElementById('shapeImg').src = 'images/deltoid.png'
    break; case 'circle':
    put(0, 0, 0, 1)
    currentMode = 'circle'
    document.getElementById('shapeImg').src = 'images/circle.png'
  }
}
let aInput = "<input id = 'a' placeholder = 'a'>";
let bInput = "<input id = 'b' placeholder = 'b'>";
let hInput = "<input id = 'h' placeholder = 'h'>";
let rInput = "<input id = 'r' placeholder = 'r'>";
