var sideMenuExit = ('.exit');
var hamburger = $('.fa-bars');
var dash = $('.dash');
var fullArticleBtn = $('.read-full-icon-cont');
var fullArticle = $('.read-full');
var collapseBtn = $('.collapse-icon-cont');
var signinExit = $('.exit2');
var signinModal = $('.sign-in-modal-cont');
var profileImg = $('.profile-img-cont');
var sideMenu = $('aside');
var leftArrow = $('.left');
var rightArrow = $('.right');
var active = $('.is-active');

$(document).ready( () => {

    $('.home').addClass('is-active');
    $('#home').addClass('is-active');
    $('.home').addClass('.dash');
    $('#home').children().show();
    $('.home').children().addClass('is-active');

    // if($('.side-list li').hasClass('is-active')) {
    //     $(this).children().css('color', 'yellow');
    // } else {
    //     $('.side-list li').children().css('color', 'black');
    // }
    $(hamburger).on('click', () => {
        $(sideMenu).show(500);
        $(sideMenu).css('height', '100%');
        $(hamburger).addClass('not-visible');
    })
    
    $(sideMenuExit).on('click', () => {
        $(sideMenu).hide(500);
        $(hamburger).delay(500).removeClass('visible');
        $(hamburger).addClass('visible').delay(100).queue(function(){
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
        $(hamburger).addClass('visible').delay(100).queue(function(){
            $(this).removeClass('not-visible').dequeue();
        });
    });


    $('.side-list li').on('mouseover', (event) => {
        $(event.currentTarget).children().css('color', 'yellow');
    })

    $('.side-list li').on('mouseout', (event) => {
        $(event.currentTarget).children().css('color', 'black');
        if($(event.currentTarget).hasClass('is-active')) {
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

    $(leftArrow).on('click', () => {
        $(slides).shift();
    })

    $(rightArrow).on('click', () => {
        $(slides).pop();
    })

    // $('.home').on('click', () => {
    //     $('.main-contact').hide();
    //     // $('header').hide();
    //     // $('footer').hide();
    //     $('.main-home').fadeIn(2000);
    // })

    // $('.contact').on('click', () => {
    //     $('.main-home').hide();
    //     $('header').hide();
    //     $('footer').hide();
    //     $('.main-contact').fadeIn(2000);
    // })


    // $(':not(aside)').on('click', () => {
    //     $('aside').hide(1000);
    //     $('.menu-drop').show(1000);
    // })
});

