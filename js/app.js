$(document).ready( () => {
    $('.show-more').on('click', () => {
        $('aside').show(1000);
        $('.menu-drop').hide(1000);
    })
    
    $('.exit').on('click', () => {
        $('aside').hide(1000);
        $('.menu-drop').show(1000);
    });

    $(':not(aside)').on('click', () => {
        $('aside').hide(1000);
        $('.menu-drop').show(1000);
    })
});

