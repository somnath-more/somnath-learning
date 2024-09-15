$(document).ready(function() {
    // Toggle search input visibility on search icon click
    $('.marker').bind('click', function() {
        $('.card').addClass('active');
        $('.marker').addClass('inactive');
    });
    
    $('.card').bind('click', function() {
        $('.card').removeClass('active');
        $('.marker').removeClass('inactive');
    });
});
