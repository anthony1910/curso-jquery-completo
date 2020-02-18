// Escondendo um elemento com o efeito de "sliding"
$('.courses_list .course_item_inner:eq(4)').slideUp('fast');

// Exibindo um elemento com o efeito de "sliding"
$('.courses_list .course_item_inner:eq(4)').slideDown(1000);

// Exibindo ou escondendo um elemento com o efeito de "sliding"
$('.btn_toggle_item').on('click', function(){

    $(this).prev('.course_item_inner').slideToggle(3000, function(){

        console.log('Sumi ou apareci, agora deslizando');

    });

});