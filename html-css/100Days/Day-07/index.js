$(document).ready(function() {
    // Toggle search input visibility on search icon click
    $('.search-icon').on('click', function() {
        $('.search-input').toggleClass('active');
    });

    // Toggle menu visibility on menu icon click
    $('.menu-icon').on('click', function() {
        $('.panel').toggleClass('show-menu');
        $('.menu').toggleClass('active');
    });
});
