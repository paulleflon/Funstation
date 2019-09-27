var planningToday = [
    {
        title: "machin",
        hour: "16h-18h",
        img: "assets/img/bfsrap.png"
    }, {
        title: "truc",
        hour: "18h-20h",
        img: "assets/img/bfsrap.png"
    }, {
        title: "BIDULE",
        hour: "20h-23h",
        img: "assets/img/bfsrap.png"
    }
] //MAX 3 stp

var news = [
    {
        title: "Bonjour je suis beau",
        link: "https://example.com",
        img: "assets/img/bfsrap.png"
    },
    {
        title: "Mais ce texte est beaucoup trop long dis donc !",
        link: "https://example.com",
        img: "assets/img/bfsrap.png"
    },
    {
        title: "Carglass répare !",
        img: "assets/img/bfsrap.png"
    },
    {
        title: "Carglass répare !",
        img: "assets/img/bfsrap.png"
    }

] //MAX 4 STP

function getCard(type, title, subtitle, link = null) {
    return $(link ? `<a href="${link}"></a>` : "<div></div>").addClass(`fs-card ${type}`)
        .attr("id", title)
        .html(`<div class="fs-card-texts"><div class="fs-card-title">${title}</div><div class="fs-card-subtitle">${subtitle}</div></div><div class="fs-card-gradient"></div>`);
}

$(function () {
    for (var data of planningToday) {
        var elm = getCard("fs-planning-card", data.title, data.hour);
        elm.css("background", `url("${data.img}") center center / cover no-repeat`);
        $(".fs-card-list#planning").append(elm);
    }

    for (var data of news) {
        var elm = getCard("fs-news-card", data.title, "", data.link);
        elm.css("background", `url("${data.img}") center center / cover no-repeat`)
            .attr("title", data.title);
        $(".fs-card-list#news").append(elm);
    }
});