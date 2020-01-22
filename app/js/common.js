$(document).ready(function() {
    $('input').focus(function(){
        $(this).data('placeholder', $(this).attr('placeholder'));
        $(this).attr('placeholder','');
        $('[name="password"]').attr('type', 'password');
    });
    $('input').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
        $('[name="password"]').attr('type', 'text');
    });

    $('.btn-search').click(function () {
       $('.search-wrapper').fadeToggle();
    });

    $('.btn-stars').click(function () {
       $(this).toggleClass('active');
    });

    $('.btn-burger').click(function () {
       $('.mobile-menu').css('left', '0');
       $('body').addClass('open');
    });

    // $('.open').click(function () {
    //     $('.mobile-menu').css('left', '-100%');
    //     $('body').removeClass('open');
    // });
});

$('body').on('click', '.password-control', function(){
    if ($('[name="password"]').attr('type') === 'password'){
        $(this).addClass('view');
        $('[name="password"]').attr('type', 'text');
    } else {
        $(this).removeClass('view');
        $('[name="password"]').attr('type', 'password');
    }
    return false;
});

$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".mobile-menu"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('body').removeClass('open');
        div.css('left', '-100%'); // скрываем его
    }
});