var dedis = [
    {
        author: "Hickacou",
        message: "Heureux de refaire ce site"
    },
    {
        author: "Lil French",
        message: "De ouf, il était claqué"
    },
    {
        author: "Funstation",
        message: "Merci les gars c'est cool"
    },
    {
        author: "Kevin82",
        message: "J'adore le tacos au riz blanc"
    }, {
        author: "Hickacou",
        message: "Heureux de refaire ce site"
    },
    {
        author: "Lil French",
        message: "De ouf, il était claqué"
    },
    {
        author: "Funstation",
        message: "Merci les gars c'est cool"
    },
    {
        author: "Kevin82",
        message: "J'adore le tacos au riz blanc"
    },
    {
        author: "Hickacou",
        message: "Heureux de refaire ce site"
    },
    {
        author: "Lil French",
        message: "De ouf, il était claqué"
    },
    {
        author: "Funstation",
        message: "Merci les gars c'est cool"
    },
    {
        author: "Kevin82",
        message: "J'adore le tacos au riz blanc"
    }
];


$(function () {

    var elm = $("<div></div>").addClass("fs-home-dedi-list").attr("id", "d0");
    for (var dedi of dedis) {
        elm.append(`<div class='fs-home-dedi'><div class='fs-home-dedi-author'>${dedi.author}</div><div class='fs-home-dedi-message'>${dedi.message}</div></div>`);
    }
    var _elm = elm.clone().attr("id", "d1");

    $("#fs-home-dedis").append(elm);
    animateDedis(elm)
    setInterval(() => animateDedis(elm), 45500);

});

function animateDedis(elm) {
    console.log($("#fs-home-dedis").width()+ "px");
    elm.css("margin-left", $("#fs-home-dedis").width() + "px");
    elm.animate({
        marginLeft: -elm.width() + "px"
    }, 45000, "linear");
}