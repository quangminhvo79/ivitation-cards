$(document).ready(function(){

  const onSubmitFormSuccess = function(data) {
    $('form').addClass('hidden');

    $('.ivitation-card-modal').removeClass('hidden')
    $('.ivitation-card-modal').html(data);
  }

  const onSubmitFormError = function(data) {
    console.log('error', data)
  }

  $('form').on('submit', function(e){
    e.preventDefault();

    const url = $('form').attr('action')

    $.get(url + '?' + $('form').serialize(), onSubmitFormSuccess)
  })

  $(document).on('click', '.back-to-search', function(){
    $('form').removeClass('hidden');
    $('.ivitation-card-modal').html(null)
    $('.ivitation-card-modal').addClass('hidden')
  })
})
