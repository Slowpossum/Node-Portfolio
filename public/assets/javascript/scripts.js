let images;

$("#document").ready(() => {
    $("#contentPanel div").html(aboutHTML);

    $.get("/images", data => images = data);
});

$("#artBtn").on("click", () => {
    $("#contentPanel div").empty();
    $("#contentPanel div").addClass("flexContent");
    $("#contacts").addClass("hidden");
    $("#contentPanel").css({ "display": "" });
    $("#contentPanel div").css({
        "overflowY": "auto",
        "whiteSpace": "nowrap"
    });

    for (image of images) {
        let $img = $('<img class="thumbnail zoom">').attr("src", `./assets/images/art/${image}`);
        $("#contentPanel div").append($img);
    }
});

$("#portfolioBtn").on("click", () => {
    $("#contentPanel div").empty();
    $("#contentPanel div").addClass("flexContent");
    $("#contacts").addClass("hidden");
    $("#contentPanel").css({ "display": "" });
    $("#contentPanel div").css({
        "overflowY": "auto",
        "whiteSpace": "nowrap"
    });

    $("#contentPanel div").html(portfolioHTML);
});

$("#aboutBtn").on("click", () => {
    $("#contentPanel div").removeClass("flexContent");
    $("#contacts").addClass("hidden");
    $("#contentPanel").css({ "display": "" });
    $("#contentPanel div").css({
        "overflowY": "",
        "whiteSpace": "normal"
    });

    $("#contentPanel div").html(aboutHTML);
});

$("#contactBtn").on("click", () => {
    $("#contentPanel").css({ "display": "none" });
    $("#contacts").removeClass("hidden");
});

$("#contentPanel").on("click", ".portfolioItem", function () {
    if (!$(this).find(".desc").hasClass("active")) {
        $(".active").animate({
            width: "toggle"
        }, 200);
        $(".active").removeClass("active");
        $(this).find(".desc").addClass("active");
    } else {
        $(this).find(".desc").removeClass("active");
    }
    
    
    $(this).find(".desc").animate({
        width: "toggle"
    }, 200);
});

$("#contentPanel").on("click", ".desc", (e) => e.stopPropagation());