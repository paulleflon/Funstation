var PLANNING = {
    mon: [
        {
            "title": "TOP 20",
            "schedule": "12h - 13h",
            "background": "assets/img/defaultSliderBackground.png"
        },
        {
            "title": "DJ Ludo remix",
            "schedule": "21h - 23h",
            "background": "assets/img/defaultSliderBackground.png"
        }
    ],
    tue: [
        {
            "title": "TOP 30",
            "schedule": "15h - 17h",
            "background": "assets/img/defaultSliderBackground.png"
        }
    ],
    wed: [
        {
            "title": "Frequence Dance",
            "schedule": "12h - 13h",
            "background": "assets/img/defaultSliderBackground.png"
        },
        {
            "title": "Dance sensation",
            "schedule": "21h - 22h",
            "background": "assets/img/defaultSliderBackground.png"
        }
    ],
    thu: [
        {
            "title": "TOP 20",
            "schedule": "12h - 13h",
            "background": "assets/img/defaultSliderBackground.png"
        },
        {
            "title": "Clubbing party",
            "schedule": "21h - 22h",
            "background": "assets/img/defaultSliderBackground.png"
        }
    ],
    fri: [
        {
            "title": "Rap folie funk",
            "schedule": "20h - 21h",
            "background": "assets/img/defaultSliderBackground.png"
        },
        {
            "title": "Quentin in the mix",
            "schedule": "22h - 23h",
            "background": "assets/img/defaultSliderBackground.png"
        }
    ],
    sat: [
        {
            "title": "TOP 20",
            "schedule": "12h - 13h",
            "background": "assets/img/defaultSliderBackground.png"
        },
        {
            "title": "Rap folie funk",
            "schedule": "20h - 21h",
            "background": "assets/img/defaultSliderBackground.png"
        },
        {
            "title": "Dorian anime",
            "schedule": "21h - 22h",
            "background": "assets/img/defaultSliderBackground.png"
        },
        {
            "title": "Kills mix inter",
            "schedule": "22h - 00h",
            "background": "assets/img/defaultSliderBackground.png"
        }
    ],
    sun: [
        {
            "title": "TOP 30",
            "schedule": "15h - 17h",
            "background": "assets/img/defaultSliderBackground.png"
        }
    ]
}



$(function () {
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const today = $(`#fs-planning-navbar #${days[new Date().getDay()]}`);
    var selectedDay = today;
    today.addClass("highlighted");
    $("#fs-planning-navbar #fs-planning-navbar-highlighter").css("left", today[0].offsetLeft);
    $("#fs-planning-navbar .fs-planning-day").click(function () {
        selectedDay = $(this);
        $("#fs-planning-navbar #fs-planning-navbar-highlighter").animate({
            "left": $(this)[0].offsetLeft
        }, 500);
        $(".highlighted").removeClass("highlighted");
        $(this).addClass("highlighted");
        $(`.fs-planning-day-section`).hide();
        $(`.fs-planning-day-section#${$(this).attr("id")}`).css("display","flex");
    });

    for (let key of Object.keys(PLANNING)) {
        let nod = $("<div></div>").attr("id", key).addClass("fs-planning-day-section");
        for (let event of PLANNING[key]) {
            nod.append(`<div class="fs-planning-item" style="background-image: url(${event.background})">
            <div class="fs-planning-item-title">${event.title}</div>
            <div class="fs-planning-item-schedule">${event.schedule}</div>
            <div class="fs-planning-item-gradient"></div>
            `);
        }
        nod.append(`<div class="fs-planning-item" style="background-image: url(assets/img/defaultSliderBackground.png)">
        <div class="fs-planning-item-title">Hits de la journée</div>
        <div class="fs-planning-item-schedule">H24</div>
        <div class="fs-planning-item-gradient"></div>
            `);
        $(".fs-section#planning").append(nod);
    }
    $(`.fs-planning-day-section#${days[new Date().getDay()]}`).css("display","flex")

    $(window).resize(function () {
        $("#fs-planning-navbar #fs-planning-navbar-highlighter").css("left", selectedDay[0].offsetLeft);
    });

});