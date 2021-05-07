const enterBtn = $('.enter-btn').val();
$(document).ready(function() {
    $('.enter-btn').click(() => {
        $('.main-content-frosted').hide(1000);
        $('.main-title').hide();
        $('.author').hide();
        $('.enter-btn').hide();
        $('.social-cont').hide();
        $('.main-content-frosted').delay(1000).show(1000);
        $('.pick-freq').delay(1500).show(1000);
        $('#freqs').delay(1500).show(1000);
    });
});