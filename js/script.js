$(document).ready(function(){
    $(".navButton").hover(function(){
        $(this).addClass("hoverbutton");
    }, function(){
        $(this).removeClass("hoverbutton");
    });
});

function update () {
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssarea").val() + "</style></head></body>" + $("#htmlarea").val() + "</body></html>"); /* spisane z tutoriala*/

    document.getElementById("outputarea").contentWindow.eval($("#jsarea").val());
}

$(".navButton").click(function(){
    $(this).toggleClass("active");
    $(this).removeClass("hoverbutton");
    var areaId = $(this).attr("id") + "area";
    $("#" + areaId).toggleClass("hidden"); /*mogłam uzyć .toggle() */
    var activepanels = 4 - $(".hidden").length;
    $(".panel").width(($(window).width() / activepanels) - 10);
});

$(".panel").height($(window).height() - $("header").height() - 10);
$(".panel").width(($(window).width() / 2) - 10);
$("iframe").contents().find("html").html($("#htmlarea").val()); /* spisane z internetu*/

    update();

$("#htmlarea").on("change keyup paste", function(){

    update ();

});