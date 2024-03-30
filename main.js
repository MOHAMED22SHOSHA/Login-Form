$(document).ready(function() {
    $("#login").click(function() {
        $(".toggle-right").show(2000);
        $(".toggle-left").hide(2000);
        $(".sign-in").show(2000);
        $(".sign-up").hide(2000);
    });

    $("#register").click(function() {
        $(".toggle-right").hide(2000);
        $(".toggle-left").show(2000);
        $(".sign-in").hide(2000);
        $(".sign-up").show(2000);
    });
});
