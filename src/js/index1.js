$("#facilities").click(function() {
    $("#facilities").css({
        "border-bottom": "2px solid red",
        "color": "black"
        })
    $("#reviews").css({
        "border-bottom": "0px solid red",
        "color": "#888888"
    })
})
$("#reviews").click(function() {
    $("#reviews").css({
        "border-bottom": "2px solid red",
        "color": "black"
    })
    $("#facilities").css({
        "border-bottom": "0px solid red",
        "color": "#888888"
    })
})