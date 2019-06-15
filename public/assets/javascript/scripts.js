let images;

$("#document").ready(() => {
    $("#contentPanel div").html(aboutHTML);

    $.get("/images", data => images = data);
});

$("#artBtn").on("click", () => {
    $("#contentPanel div").empty();
    $("#contentPanel div").addClass("flexContent");
    $("#contactButtons").addClass("hidden");
    $("#contentPanel").css({ "display": "" });
    $("#contentPanel div").css({
        "overflowY": "auto",
        "whiteSpace": "nowrap"
    });


});

$("#portfolioBtn").on("click", () => {
    $("#contentPanel div").empty();
    $("#contentPanel div").addClass("flexContent");
    $("#contactButtons").addClass("hidden");
    $("#contentPanel").css({ "display": "" });
    $("#contentPanel div").css({
        "overflowY": "auto",
        "whiteSpace": "nowrap"
    });

    $("#contentPanel div").html(portfolioHTML);
});

$("#aboutBtn").on("click", () => {
    $("#contentPanel div").removeClass("flexContent");
    $("#contactButtons").addClass("hidden");
    $("#contentPanel").css({ "display": "" });
    $("#contentPanel div").css({
        "overflowY": "",
        "whiteSpace": "normal"
    });

    $("#contentPanel div").html(aboutHTML);
});

$("#contactBtn").on("click", () => {
    $("#contentPanel").css({ "display": "none" });
    $("#contactButtons").removeClass("hidden");
});

$("#contentPanel").on("click", ".portfolioItem", function () {
    if ($(this).find(".desc").hasClass("hidden")) {
        $(".desc").addClass("hidden");
    }
    
    $(this).find(".desc").toggleClass("hidden");
});

$("#contentPanel").on("click", ".desc", (e) => e.stopPropagation());