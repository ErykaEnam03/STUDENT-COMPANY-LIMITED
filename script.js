$(document).ready(function() {
    // Initially hide all submenus
    $('.submenu').hide();

    // Toggle submenu when the corresponding button is clicked
    $('.sub-btn').click(function(e) {
        e.preventDefault(); // Prevent default behavior for the <a> tag
        $(this).next('.submenu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });
});
