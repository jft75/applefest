// when #apple-button is clicked:
$("#apple-button").on("click", function () {
    //remove .hidden from #outside-apple-modal
    $("#outside-apple-modal").removeClass("hidden");
    //remove .hidden from #left-arrow;
    $("#left-arrow").removeClass("hidden");
    //remove .hidden from #right-arrow;
    $("#right-arrow").removeClass("hidden");
    //remove .hidden from #vendor-pic
    $("#vendor-pic").removeClass("hidden");
    //add .hidden to #jewelry-pic
    $("#jewelry-pic").addClass("hidden");
    //add .hidden to #fire-pic
    $("#fire-pic").addClass("hidden");
});

// when #close-button is clicked:
$("#close-button").on("click", function () {
    //add .hidden to #outside-apple-modal
    $("#outside-apple-modal").addClass("hidden");
});

// when #left-arrow is clicked:
$("#left-arrow").on("click", function () {
    // if #fire-pic is hidden (if #vendor-pic is shown):
    if ($("#fire-pic").hasClass("hidden")) {
        //add .hidden to #vendor-pic
        $("#vendor-pic").addClass("hidden");
        //remove .hidden from #jewelry-pic
        $("#jewelry-pic").removeClass("hidden");
        //add .hidden to #fire-pic
        $("#fire-pic").addClass("hidden");
        //add .hidden to #left-arrow
        $("#left-arrow").addClass("hidden");
    } else {
        //remove .hidden from #vendor-pic
        $("#vendor-pic").removeClass("hidden");
        //add .hidden to #jewelry-pic
        $("#jewelry-pic").addClass("hidden");
        //add .hidden to #fire-pic
        $("#fire-pic").addClass("hidden");
        //remove .hidden from #left-arrow;
        $("#left-arrow").removeClass("hidden");
        //remove .hidden from #right-arrow;
        $("#right-arrow").removeClass("hidden");
    }
});

// when #right-arrow is clicked:
$("#right-arrow").on("click", function () {
    // if #left-arrow is hidden (if #jewelry-pic is shown):
    if ($("#left-arrow").hasClass("hidden")) {
        //remove .hidden from #vendor-pic
        $("#vendor-pic").removeClass("hidden");
        //add .hidden to #jewelry-pic
        $("#jewelry-pic").addClass("hidden");
        //add .hidden from #fire-pic
        $("#fire-pic").addClass("hidden");
        //remove .hidden from #left-arrow;
        $("#left-arrow").removeClass("hidden");
        //remove .hidden from #right-arrow;
        $("#right-arrow").removeClass("hidden");
    } else {
        //add .hidden from #vendor-pic
        $("#vendor-pic").addClass("hidden");
        //add .hidden to #jewelry-pic
        $("#jewelry-pic").addClass("hidden");
        //remove .hidden from #fire-pic
        $("#fire-pic").removeClass("hidden");
        //add .hidden to #right-arrow;
        $("#right-arrow").addClass("hidden");
    }
});
