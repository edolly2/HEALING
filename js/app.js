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


$(document).ready( () => {

    $('.home').addClass('is-active');
    $('#home').children().show();

    $(hamburger).on('click', () => {
        $(sideMenu).show(500);
        $(hamburger).hide();
        $('.head-title').preventDefault();
    })
    
    $(sideMenuExit).on('click', () => {
        $(sideMenu).hide(500);
        $(hamburger).delay(500).fadeIn(500);
    });

    $('.side-list li').on('click', (event) => {
        $('.side-list li').removeClass('is-active');
        $(dash).hide();
        $(event.currentTarget).children().show();
        $(event.currentTarget).addClass('is-active');
        $(sideMenu).hide(500);
        $(hamburger).delay(500).fadeIn(500);
    });

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

