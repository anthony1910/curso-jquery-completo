// Removendo elementos
// $('.cars_list li:eq(1)').remove()

// Removendo o conteúdo do elemento
// $('.cars_list li:eq(1)').empty()

// Removendo um elemento, mas mantendo seus eventos associados
// let txt = $('.paragrafo').detach();

// Removendo os elementos em volta de outro
// $('.cars_list li').unwrap();

$('.paragrafo').click(function(){

    $(this).html('Você clicou em mim!');

});

let txt = $('.paragrafo').detach();

$('section main p').before(txt);