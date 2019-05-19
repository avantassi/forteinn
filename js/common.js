$('.parallax-window').parallax({imageSrc: 'img/founder.jpg'});

//scroll
$(document).ready(function(){
    $(".nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

//datepicker
$('#minMax').datepicker({
    // Можно выбрать только даты, идущие за сегодняшним днем, включая сегодня
    minDate: new Date()
})

$('#minMax2').datepicker({
    // Можно выбрать только даты, идущие за сегодняшним днем, включая сегодня
    minDate: new Date()
})

document.addEventListener('DOMContentLoaded', function(){
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var name_input = document.getElementById('minMax')
    name_input.value = day + "-" + month + "-" + year;
});

document.addEventListener('DOMContentLoaded', function(){
    var d = new Date();
    var day = d.getDate() + 1;
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var name_input = document.getElementById('minMax2')
    name_input.value = day + "-" + month + "-" + year;
});

//slick
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    arrows: false,
    // dots: true,
    // centerMode: true,
    focusOnSelect: true
  });