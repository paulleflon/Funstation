var sliderImages = [
    "assets/img/bfsrap.png",
    "assets/img/bfsrap.png"
]

var sliderElements = [];

var focusedElementIDN;

var idN = 0;


$(function () {
    for (var img of sliderImages) {
        var elm = $("<div></div>");
        elm.attr("id",idN)
            .addClass("fs-slider-element")
            .css("background", `url("${img}") center center / contain no-repeat rgba(0,0,0,0.5)`);
        $("#fs-app-root #fs-home #fs-home-slider").append(elm);
        $("#fs-app-root #fs-home #fs-home-slider #fs-home-slider-points").append(`<div id="${idN++}" class="fs-home-slider-point"></div>`)
        sliderElements.push(elm);
    }
    focusSliderElement(sliderElements[0]);

    $("#fs-home #fs-home-slider .fs-home-slider-point").click(function () {
        focusSliderElement(sliderElements[$(this).attr("id")]);
    });

    $("#fs-home #fs-home-slider #fs-home-slider-left").click(function () {
        focusSliderElement(sliderElements[(parseInt(focusedElementIDN) - 1 < 0) ? sliderElements.length - 1 : parseInt(focusedElementIDN) - 1]);
    });

    $("#fs-home #fs-home-slider #fs-home-slider-right").click(function () {
        focusSliderElement(sliderElements[(parseInt(focusedElementIDN) + 1 > sliderElements.length - 1) ? 0 : parseInt(focusedElementIDN) + 1]);
        console.log(focusedElementIDN + 1 + " > " + sliderElements.length);
    });

    $(window).resize(() => { focusSliderElement(sliderElements[focusedElementIDN]); });

    setInterval(function() {
        focusSliderElement(sliderElements[(parseInt(focusedElementIDN) + 1 > sliderElements.length - 1) ? 0 : parseInt(focusedElementIDN) + 1]);
    },10000);

});




function focusSliderElement(elm) {
    console.log(elm.width());
    $(".fs-home-slider-element").removeClass("slider-focused");
    $(".fs-home-slider-point").removeClass("active");
    $(`.fs-home-slider-point#${elm.attr("id")}`).addClass("active");
    elm.addClass("slider-focused");
    sliderElements[0].css("margin-left", `${-elm.width() * sliderElements.indexOf(elm)}px`);
    focusedElementIDN = elm.attr("id").split("").pop();
}