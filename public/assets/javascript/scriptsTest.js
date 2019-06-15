var currCont = "about";

$("#artBtn").on("click", function () {
    switch (currCont) {
        case "about":
            $("#contentPanel div").empty()
            break;
        case "contact":
            $("#instaContact").css({ "display": "none" });
            $("#contentPanel").css({ "display": "" });
            break;
    }
    currCont = "art";

    $("#contentPanel div").css({
        "overflowY": "auto",
        "whiteSpace": "nowrap"
    });
});

$("#portfolioBtn").on("click", function () {
    
});

$("#aboutBtn").on("click", function() {
    switch (currCont) {
        case "art":
            $("#contentPanel div").css({
                "overflowY": "",
                "whiteSpace": "normal"
            });
            break;
        case "contact":
            $("#instaContact").css({"display": "none"});
            $("#contentPanel").css({"display": ""});
            break;
    }
    currCont = "about";

    $("#contentPanel div").html(`<p>My name is Thomas, I'm an artist and future web dev from RVA.</p>
    <p>This is just a simple page I built to kill some time and act as a host/portfolio of sorts for
     current and future projects.</p>`);
});

$("#contactBtn").on("click", function () {
    currCont = "contact";
    $("#contentPanel").css({"display": "none"});
    $("#instaContact").css({"display": "block"});
});