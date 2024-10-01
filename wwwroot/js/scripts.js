$('document').ready(function() {
    console.log("Dream Spins Casino");

    $(window).on('load resize', function() {
        var primaryHeaderHeight = $('#primary_header').outerHeight() || 0;
        var gradientBorderHeight = $('.gradient_border').outerHeight() || 0;
        var setHeight = $(window).height() - (primaryHeaderHeight + gradientBorderHeight);
        var topHeight = primaryHeaderHeight + gradientBorderHeight;

        if (setHeight > 0) {
            $('.menu_tier_one, .menu_tier_two').css({
                'height': setHeight + 'px',
                'top': topHeight + 'px'
            });
        }
    });

$('#open_menu').on('click', function() {
    $('.menu_tier_one').toggleClass('show');
    $('body').toggleClass('no-scroll', $('.menu_tier_one').hasClass('show'));
});

$(document).on('click', function(event) {
    if (!$(event.target).closest('.menu_tier_one, .menu_tier_two, #open_menu').length) {
        $('.menu_tier_one, .menu_tier_two').removeClass('show');
        $('body').removeClass('no-scroll');
    }
});


    $('.show_submenu').on('click', function() {
        var menuId = $(this).data('menu');
        $('#' + menuId).toggleClass('show');
    });

    $('.close_menu').on('click', function() {
        $(this).closest('.show').removeClass('show');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const selected = document.querySelector(".select-selected span");
    const items = document.querySelector(".select-items");

    document.querySelector(".select-selected").addEventListener("click", function () {
        items.classList.toggle("select-hide");
    });

    const options = document.querySelectorAll(".select-items div");
    options.forEach(option => {
        option.addEventListener("click", function () {
            selected.textContent = this.textContent;
            items.classList.add("select-hide");
        });
    });

    document.addEventListener("click", function (event) {
        if (!event.target.closest('.custom-select')) {
            items.classList.add("select-hide");
        }
    });
});
