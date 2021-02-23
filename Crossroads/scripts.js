$(document).mousemove(function(event){
  let width = window.innerWidth
  let height = window.innerHeight
  if (width < 350) width = 350
  let x = event.pageX
  let y = event.pageY
  $('#documentCo').text(x + '; ' + y + ' - document')
  if (x >= width / 2){
    x = x - width / 2
    if (x < width / 2 * 0.15) x = width / 2 * 0.15
    $('#dark').css({'background': 'radial-gradient(circle at ' + (width / 2 - x) + 'px ' + y + 'px, rgba(0, 0, 0, 0.85) 2%, rgba(0, 0, 0, 0) 11%)'})
    $('#light').css({'background': 'radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255, 255, 255, 0.85) 2%, rgba(255, 255, 255, 0) 11%)'})
  } else {
    if (x > width / 2 * 0.85) x = width / 2 * 0.85
    $('#dark').css({'background': 'radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(0, 0, 0, 0.85) 2%, rgba(0, 0, 0, 0) 11%)'})
    $('#light').css({'background': 'radial-gradient(circle at ' + (width / 2 - x) + 'px ' + y + 'px, rgba(255, 255, 255, 0.85) 2%, rgba(255, 255, 255, 0) 11%)'})
  }
})
$(document).ready(function(){
  let width = window.innerWidth
  if (width < 1000){
    alert('Похоже размер вашего экрана меньше 1000 пикселей. Из-за этого некоторые элементы страницы могут отображаться некорректно')
  }
})
$('.light-button').click(function(){
  let text = $(this).text().slice($(this).text().indexOf(' ') + 1)
  let dollars = $(this).text().slice(0, $(this).text().indexOf(' '))
  let modal = $('#lightModal')
  $('#obj').text('Object: ' + text)
  $('#cost').text('Cost: ' + dollars)
  $('#closeLightModal').click(function(){
    modal.modal('hide')
    $('#galacticId').val('')
  })
  $('#accept').click(function(){
    modal.modal('hide')
    $('#error').modal()
    $('#closeError').click(function(){$('#error').modal('hide')})
  })
  modal.modal()
})
$('.dark-button').click(function(){
  let text = $(this).text()
  let modal = $('#lightModal')
  $('#obj').text('Object: ' + text)
  $('#cost').text('Cost: your soul. Payment after 20 years')
  $('#closeLightModal').click(function(){
    modal.modal('hide')
    $('#galacticId').val('')
  })
  $('#accept').click(function(){
    modal.modal('hide')
    $('#error').modal()
    $('#closeError').click(function(){$('#error').modal('hide')})
  })
  modal.modal()
})
$('.serve').click(function(){
  let text = $(this).text()
  if(text[text.length - 2] === 's'){
    $('#senior').text('Senior: Majestic Darkness')
  }else {
    $('#senior').text('Senior: Majestic Light')
  }
  let modal = $('#serve')
  $('#closeServe').click(function(){modal.modal('hide')})
  modal.modal()
  $('.submit').click(function(){
    modal.modal('hide')
    $('#error').modal()
    $('#closeError').click(function(){$('#error').modal('hide')})
  })
})
$('a').click(function(){
  $('#error').modal()
  $('#closeError').click(function(){$('#error').modal('hide')})
})
