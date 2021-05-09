$(document).ready( () => {

    $('.home').addClass('is-active');
    $('#home').children().show();

    $('.fa-bars').on('click', () => {
        $('aside').show(1000);
        $('.fa-bars').hide();
        $('.head-title').preventDefault();
    })
    
    $('.exit').on('click', () => {
        $('aside').hide(1000);
        $('.fa-bars').delay(1000).fadeIn(1000);
    });

    $('.side-list li').on('click', (event) => {
        $('.side-list li').removeClass('is-active');
        $('.dash').hide();
        $(event.currentTarget).children().show();
        $(event.currentTarget).addClass('is-active');
        $('aside').hide(1000);
        $('.fa-bars').delay(1000).fadeIn(1000);
    });

    $('.read-full-icon-cont').children().on('click', () => {
        $('.read-full-icon-cont').hide();
        $('.read-full').show();
        $('.collapse-icon-cont').show();
    })

    $('.collapse-icon-cont').children().on('click', () => {
        $('.collapse-icon-cont').hide();
        $('.read-full-icon-cont').show();
        $('.read-full').hide();
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

