$(document).ready(function() {
    
    
    var wrapper = $("<div></div>").attr("id", "wrapper");
    var titleScreen = $("<div></div>").attr("id", "title-screen");
    var title = $("<h1></h1>").attr("id", "title");
    var subtitle = $("<h2></h2>").attr("id", "subtitle");
    var topBar = $("<div></div>").attr("id", "top-bar");
    var infoScreen = $("<div></div>").attr("id", "info-screen");
    var infoWrapper = $("<div></div>").attr("id", "info-wrapper");
    var infoToggle = $("<div></div>").attr("id", "info-toggle");
    var tabWrapper = $("<div></div>").attr("id", "tab-wrapper");
    var reviewsTab = $("<div></div>").attr("id", "reviews-tab");
    var reviews = $("<h3>Reviews</h3>").attr("id", "reviews");
    var facilitiesTab = $("<div></div>").attr("id", "facilities-tab");
    var facilities = $("<h3>Facilities</h3>").attr("id", "facilities");
    var infoItems = $("<div></div>").attr("id", "info-items");
    var menuLeft = $("<img></img>").attr("id", "menu-left");
    var menuRight = $("<img></img>").attr("id", "menu-right");
    var pageName = $("<h3>Top Gyms</h3>").attr("id", "page-name");

    title.html("Karlo's Gym Club");
    subtitle.html("New York, NY");
    
    menuLeft.attr("src", "../resources/menu-icon.png");
    menuRight.attr("src", "../resources/menu-right.png");
    topBar.append(menuLeft, menuRight, pageName);
    
    titleScreen.append(topBar, title, subtitle);
    
    infoScreen.append(infoWrapper);
    facilitiesTab.append(facilities);
    reviewsTab.append(reviews);
    tabWrapper.append(facilitiesTab, reviewsTab)
    infoToggle.append(tabWrapper);
    infoWrapper.append(infoToggle, infoItems);
    for (i = 0; i < 8; i++) {
        var infoItem = $("<div></div>").attr("class", "info-item");
        var stars = $("<div></div>").attr("class", "stars");
        var textbox = $("<div></div>").attr("class", "textbox");
        var text = $("<p></p>").attr("class", "text");
        var name = $("<div></div>").attr("class", "name");
        var profilePic = $("<img></img>").attr("class", "profile-pic");
        var actualName = $("<p></p>").attr("class", "actual-name");
        var time = $("<p></p>").attr("class", "time");
        
        if (i==0) {
            time.html("Yesterday")
        } else {
            time.html((i+1) + " days ago");
        }
        stars.css({
            "width": "100%",
            "height": "auto",
            "margin-top": "8px",
            "margin-bottom": "4px"
        })
        textbox.css({
            "width": "100%",
            "height": "auto",
            "font-family": "Roboto",
        })
        text.css({
            "margin": "0",
            "padding": "0",
            "margin-bottom": "18px",
            "font-weight": "100"
        })
        name.css({
            "width": "100%",
            "height": "auto",
            
        })
        profilePic.css({
            "height": "42px",
            "width": "42px",
            "border-radius": "50%",
            "border": "2px solid #888888",
            "float": "left",
            "margin-bottom": "8px",
            "background-color": "#EEF2FF"
         })
        actualName.css({
            "line-height": "46px",
            "margin": "0",
            "padding": "0 0 8px 8px",
            "float": "left",
            "font-family": "Roboto",
            "font-weight": "bold"
        })
        time.css({
            "line-height": "46px",
            "margin": "0",
            "padding": "0 0 8px 8px",
            "float": "right",
            "font-family": "Roboto",
            "color": "#888888"
        })
        for (j = 0; j < 5; j++) {
            var staricon = $("<img></img>").attr("class", "star-icon");
            staricon.attr("src", "../resources/star.png");
            staricon.css({
                "height": "22px",
            })
            stars.append(staricon);
        }
        stars.append(staricon, staricon, staricon, staricon, staricon )
        name.append(profilePic, actualName, time);
        
        if (i % 2 == 0) {
            text.html("Questions about whether lifting is necessary or affordable are quite beside the point, lifting is inevitable. Lifting is the application of intent - the opposite of happenstance, and an antidote to accident.");
            profilePic.attr("src", "../resources/pepe.jpg");
            actualName.html("Pepe McPeperson");
        } else {
            text.html("Questions about whether lifting is necessary or affordable are quite beside the point, lifting is inevitable. Lifting is love, lifting is life.");
            profilePic.attr("src", "../resources/shrek.png");
            actualName.html("Shrek");
        }
        
        textbox.append(text);
        infoItem.append(stars, textbox, name);
        infoItems.append(infoItem);
    }
    
    for (var i = 0; i < 3; i++) {
        var mquery = "media-query" + (i+1);
        $("body").append($("<div></div>").attr("id", mquery));
    }
    wrapper.append(titleScreen, infoScreen);
    
    
    
    
    $("body").append(wrapper);
    $("body").css({
        "width": "100vw",
        "margin": "0",
        "scrollbar-width": "none",
    });
    $("#wrapper").css({
        "width": "100%",

        "background-color": "red",
    });
    $("#title-screen").css({
        "background-color": "black",
        "background-image": "url('../resources/gym.jpg')",
        "background-repeat": "no-repeat",
        "background-position": "center",
        "width": "100vw",
        "height": "30vh",
        "text-align": "center",
        "display": "table-cell",
        "vertical-align": "middle"
    });
    $("#title").css({
        "color": "white",
        "text-transform": "uppercase",
        "font-family": "Oswald",
        "margin-top": "0",
        "margin-bottom": "10px",
        "text-shadow": "-1px -1px 20px #000, 1px -1px 20px #000, -1px 1px 20px #000, 1px 1px 20px #000"
    });
    $("#subtitle").css({
        "color": "white",
        "text-transform": "uppercase",
        "line-height": "0px",
        "margin-top": "10px",
        "margin-bottom": "25px",
        "font-family": "Oswald",
        "text-shadow": "-1px -1px 10px #000, 1px -1px 10px #000, -1px 1px 10px #000, 1px 1px 10px #000"
    });
    $("#top-bar").css({
        "background-color": "rgba(0,0,0,0.0)",
        "width": "100%",
        "height": "37px",
        "position": "absolute",
        "top": "0",
        "left": "100"
    });
    $("#info-screen").css({
        "background-color": "rgba(0,0,0,1.0)",
        "width": "100vw",
        "height": "70vh"
    });
    $("#info-wrapper").css({
        "background-color": "rgb(253, 253, 253)",
        "width": "100vw",
        "height": "100%",
    });
    $("#info-toggle").css({
        "background-color": "rgb(253, 253, 253)",
        "width": "100vw",
        "height": "75px",
        "padding-bottom": "25px"
    });
    $("#tab-wrapper").css({
        "width": "80%",
        "height": "100%",
        "display": "block",
        "margin": "0 auto",
        "font-family": "Oswald",
        "letter-spacing": "1px",
        "text-transform": "uppercase"
    })
    $("#reviews-tab").css({
        "width": "50%",
        "height": "100%",
        "float": "right",
        "text-align": "center",
        "line-height": "75px",
    })
    $("#reviews").css({
        "margin": "0",
        "border-bottom": "2px solid red"
    })
    $("#facilities-tab").css({
        "width": "50%",
        "height": "100%",
        "float": "left",
        "text-align": "center",
        "line-height": "75px",
        "color": "#888888"
    })
    $("#facilities").css({
        "margin": "0"
    })
    $("#info-items").css({
        "background-color": "rgb(253, 253, 253)",
        "width": "100vw",
        "height": "calc(70vh - 100px)",
        "overflow": "auto",
        "scrollbar-width": "none",
        "display": "flex",
        "flex-wrap": "wrap",
        "justify-content": "center",
        "align-items": "flex-start"
    });
    $(".info-item").css({
        "background-color": "rgb(255, 255, 255)",
        "width": "330px",
//        "max-height": "200px",
        "border-radius": "5px",
        "box-shadow": "0 0 5px 1px #CCCCCC",
        "flex-shrink": "0",
        "margin": "5px",
        "padding-left": "15px",
        "padding-right": "15px"
    });
    $("#menu-left").css({
        "height": "100%",
        "float": "left",
        "filter": "invert(100%)"
    });
    $("#menu-right").css({
        "height": "100%",
        "float": "right",
        "filter": "invert(100%)",
        "margin-right": "5px"
    });
    $("#page-name").css({
        "margin-top": "6px",
        "font-family": "Oswald",
        "color": "white",
        "letter-spacing": "1px",
        "text-shadow": "-1px -1px 10px #000, 1px -1px 10px #000, -1px 1px 10px #000, 1px 1px 10px #000"
    });

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
    
//    media queries
    function checkSize() {
        if ($("#media-query1").is(":visible")) {
            $("#info-items").css({
                "width": "100vw"
            });
            $("#info-toggle").css({
                "width": "100vw"
            });
            $("#tab-wrapper").css({
                "width": "100%"
            });
            $(".info-item").css({
                "width": "330px",
            });
            $("#title").css({
                "font-family": "Oswald",
                "letter-spacing": "5px",
                "font-size": "2em"
            });
            $("#subtitle").css({
                "font-family": "Oswald",
                "font-size": "1.5em"
            });
        } else {
            $("#info-items").css({
                "width": "77%",
                "margin": "0 auto"
            });
            $("#info-toggle").css({
                "width": "77%",
                "margin": "0 auto"
            });
            $(".info-item").css({
                "width": "20vw",
            });
            $("#title").css({
                "font-family": "Oswald",
                "letter-spacing": "5px",
                "font-size": "48pt"
            });
            $("#subtitle").css({
                "font-family": "Oswald",
                "font-size": "36pt"
            });
        }
        if ($("#media-query2").is(":visible")) {
            $(".info-item").css({
                "width": "330px",
            });
            $("#info-items").css({
                "width": "100vw"
            });
            $("#info-toggle").css({
                "width": "100vw"
            });
        } 
        if ($("#media-query3").is(":visible")) {
            $(".info-item").css({
                "width": "330px",
            });
            $("#menu-left").css({
                "margin-left": "225px"
            });
            $("#menu-right").css({
                "margin-right": "230px"
            });
            $("#info-items").css({
                "width": "77%",
                "margin": "0 auto"
            });
            $("#info-toggle").css({
                "width": "77%",
                "margin": "0 auto"
            });
        } else {
            $("#menu-left").css({
                "margin-left": "0"
            });
            $("#menu-right").css({
                "margin-right": "5px"
            });
        }
    };
    $(window).resize(checkSize);
    checkSize();
});