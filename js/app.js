var sideMenuExit = ('.exit');
var hamburger = $('.fa-bars');
var dash = $('.dash');
var fullArticleBtn = $('.read-full-icon-cont');
var fullArticle = $('.read-full');
var collapseBtn = $('.collapse-icon-cont');
var signinExit = $('.exit2');
var signupExit = $('.exit3');
var signinModal = $('.sign-in-modal-cont');
var signupModal = $('.sign-up-modal-cont');
var createAccount = $('.create');
var profileImg = $('.profile-img-cont');
var sideMenu = $('aside');
var leftArrow = $('.left');
var rightArrow = $('.right');
var active = $('.is-active');
var next = $('.next-cont');
var prev = $('.prev-cont');
var darkMode = $('#dark-mode');
var darkToggle = $('.ccheckbox');




$(document).ready(() => {
    $('.d-mode').hide();
    $(darkToggle).on('click', () => {
        $(darkToggle).toggleClass('on');
        if ($(darkToggle).hasClass('on')) {
            $(darkMode).attr('href', 'css/dark-mode.css');
            $('.logo-cont img').attr('src', 'assets/images/hare-white.png');
            $('.l-mode').hide();
            $('.d-mode').show();
        } else {
            $(darkMode).attr('href', '');
            $('.logo-cont img').attr('src', 'assets/images/hare.svg');
            $('.l-mode').show();
            $('.d-mode').hide();
        }
    })


    $('.home').addClass('is-active');
    $('#home').addClass('is-active');
    $('.home').addClass('.dash');
    $('#home').children().show();
    $('.home').children().addClass('is-active');

    $(hamburger).on('click', () => {
        $(sideMenu).show(500);
        $(sideMenu).css('height', '100%');
        $(hamburger).addClass('not-visible');
    })

    $(sideMenuExit).on('click', () => {
        $(sideMenu).hide(500);
        $(hamburger).delay(500).removeClass('visible');
        $(hamburger).addClass('visible').delay(100).queue(function () {
            $(this).removeClass('not-visible').dequeue();
        });
    });




    $('.side-list li').on('click', (event) => {
        $('.side-list li').removeClass('is-active');
        $('.dash').hide();
        $('.side-list li').children().css('color', 'black');
        $(dash).hide();
        $(event.currentTarget).children().children().show();
        $(event.currentTarget).addClass('is-active');
        $(event.currentTarget).children().css('color', 'yellow');
        $(sideMenu).hide(500);
        $(hamburger).delay(500).removeClass('visible');
        $(hamburger).addClass('visible').delay(100).queue(function () {
            $(this).removeClass('not-visible').dequeue();
        });
    });


    $('.side-list li').on('mouseover', (event) => {
        $(event.currentTarget).children().css('color', 'yellow');
    })

    $('.side-list li').on('mouseout', (event) => {
        $(event.currentTarget).children().css('color', 'black');
        if ($(event.currentTarget).hasClass('is-active')) {
            $(event.currentTarget).children().css('color', 'yellow');
        } else {
            $(event.currentTarget).children().css('color', 'black');
        }
    })


    $(fullArticleBtn).children().on('click', () => {
        $(fullArticleBtn).hide();
        $(fullArticle).slideDown(500);
        $(collapseBtn).show();
    })

    $(collapseBtn).children().on('click', () => {
        $(collapseBtn).hide();
        $(fullArticleBtn).show();
        $(fullArticle).slideUp(500);
    })

    $(profileImg).on('click', () => {
        $(signinModal).slideDown(500);
        $(sideMenu).hide(500);
    })

    $(signinExit).on('click', () => {
        $(signinModal).slideUp(500);
        $(sideMenu).show(500);
    })

    $(createAccount).on('click', () => {
        $(signinModal).slideUp(500);
        $(signupModal).slideDown(500);
    })

    $(signupExit).on('click', () => {
        $(signupModal).slideUp(500);
        $(sideMenu).show(500);
    })

    $('.sign-up-cancel-btn').on('click', () => {
        $(signupModal).slideUp(500);
        $(sideMenu).show(500);
    })
});

$(document).ready(() => {


});
$(document).ready(() => {
    $(function () {
        setInterval(function () {
            var d = new Date();
            var h = d.getHours();
            // h = ((h + 11) % 12 + 1);
            var suffix = (h >= 12) ? 'PM' : 'AM';
            var colon = ':';
            h = (h > 12) ? h - 12 : h;
            h = (h == '00') ? 12 : h;
            var m = d.getMinutes();
            if (m <= 9) {
                m = '0' + m;
            }
            var s = d.getSeconds()
            var mo = d.getMonth() + 1;
            var dd = d.getDate();
            var y = d.getFullYear()
            var date = `- ${mo}/${dd}/${y} -`;
            var time = `${h}${colon}${m} ${suffix}`;
            if (s % 2 == 0) {
                time = `${h}${colon}${m} ${suffix}`;
            } else {
                time = `${h} ${m} ${suffix}`;
            }
            $('.date').html(date);
            $('.time').html(time);
        }, 1000);
    })
});