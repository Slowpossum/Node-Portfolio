$("#document").ready(function () {
    $("#contentPanel div").html(aboutHTML);
});

$("#artBtn").on("click", function () {
    $("#contentPanel div").empty()
    $("#instaContact").css({ "display": "none" });
    $("#contentPanel").css({ "display": "" });
    $("#contentPanel div").css({
        "overflowY": "auto",
        "whiteSpace": "nowrap"
    });
});

$("#portfolioBtn").on("click", function () {

});

$("#aboutBtn").on("click", function () {
    $("#instaContact").css({ "display": "none" });
    $("#contentPanel").css({ "display": "" });
    $("#contentPanel div").css({
        "overflowY": "",
        "whiteSpace": "normal"
    });

    $("#contentPanel div").html(aboutHTML);
});

$("#contactBtn").on("click", function () {
    $("#contentPanel").css({ "display": "none" });
    $("#instaContact").css({ "display": "block" });
});