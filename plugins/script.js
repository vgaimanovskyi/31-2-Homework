$(document).ready(function () {
    console.log("ready");
});
$(".clear").click(function () {
    $(".main-screen").empty();
    $(".main-screen:empty").text("0");
});
$(".clear-all").click(function () {
    $(".upper-screen").empty();
    $(".main-screen").empty();
    $(".main-screen:empty").text("0");
});
$(".backspace").click(function () {
    $(".main-screen").text($(".main-screen").text().slice(0, -1));
    $(".main-screen:empty").text("0");
});
$(".number").click(function () {
    console.log($(this).attr("value"));
    const number = $(this).attr("value");
    if (($(".main-screen").text() == 0) && ($(".main-screen").text().length === 1)) {
        $(".main-screen").empty();
    };
    $(".main-screen").append(number);
});
$(".symbol").click(function () {
    const symbol = $(this).attr("value");
    if ($(".main-screen").text() === 0) {
        $(".main-screen").append(symbol);
    } else if (($(".main-screen").text().indexOf(".")) === -1) {
        $(".main-screen").append(symbol);
    }
});
$(".action").click(function () {
    const action = $(this).text();
    $(".main-screen").append(action);
    $(".upper-screen").text($(".main-screen").text());
    $(".main-screen").text(0);
});
$(".is").click(function () {
    const a = $(".upper-screen").text();
    let b = $(".main-screen").text();
    const result = eval(a + b)
    $(".main-screen").text(result);
    $(".upper-screen").empty();
    console.log(a + b);
});
