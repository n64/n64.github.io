$(document).ready(function() {
  //fade controld for the menu
    $('home').mouseenter(function() { //fade  the other two buttons
        $('about').fadeTo('fast',0.50);
        $('github').fadeTo('fast',0.50);
    });
    $('home').mouseleave(function() {
        $('about').fadeTo('fast',100);
        $('github').fadeTo('fast',100);
    });

    //for the about me button
    $('about').mouseenter(function() {
        $('home').fadeTo('fast',0.50); //fade  the other two buttons
        $('github').fadeTo('fast',0.50);
    });
    $('about').mouseleave(function() {
        $('home').fadeTo('fast',100);
        $('github').fadeTo('fast',100);
    });

    //for the my github button
    $('github').mouseenter(function() { //fade  the other two buttons
        $('home').fadeTo('fast',0.50);
        $('about').fadeTo('fast',0.50);
    });
    $('github').mouseleave(function() {
        $('home').fadeTo('fast',100);
        $('about').fadeTo('fast',100);
    });

});
