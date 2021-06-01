// Следом за кликами
$("h1").click(function (event) {
    $("#heading").offset({
        left: event.pageX,
        top: event.pageY
    });
});




