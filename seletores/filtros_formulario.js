$('[type=radio]').change(function(){

    let value = $('input:checked').val();
    let gender = (value == 'M') ? 'Masculino' : 'Femininos';

    alert(`Você selecionou o sexo ${gender}`);

});

$('input').focus(function(){

    $('input:focus').val('Olá, você clicou aqui!');

});

$('#register :submit').click(function(event){

    event.preventDefault();

    console.log('Você clicou no botão submit');

});

// Selecionando um botão
// $('#register :button').text()

// Selecionando um checkbox
// $('#register :checkbox').trigger('click')

// Selecionando os elmentos "checados"
// $('input:checked').val()

// Selecionando os elementos desabilitados
// $('#register :disabled').val('anthony@hcode.com.br').prop('disabled', false)

// Selecionando o botão submit
// $('#register :submit').css('background-color', 'orange')
