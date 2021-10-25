//tab,sp時のサイドバー設定

$('.p-bar__button, .c-button__close').on('click',function(){
    $('.c-button__close, .l-contents__right, .l-contents__left, .l-contents').toggleClass('is-open');
    $('body').toggleClass('is-fixed')
});

let timer = 0;
let currentWidth = window.innerWidth;
    $(window).on('resize',function(){
        if (currentWidth == window.innerWidth) {
            return;
        }
        if (timer > 0) {
            clearTimeout(timer);
        }

        timer = setTimeout(function () {
            location.reload();
        }, 10);
    });

