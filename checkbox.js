$(function () {
    $("#checksnow").click(function () {
        if ($(this).is(":checked")) {
            $(".snowflake").show();
            console.log("on");
        } else {
            $(".snowflake").hide();
            console.log("off");
        }
    });
});