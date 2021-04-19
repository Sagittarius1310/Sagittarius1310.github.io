$(document).ready(function() {
    // Info
    let x_win = 0;
    let o_win = 0;
    let count = 0;
    
    // For restart
    let win_status = false;
    let id = "";

    // Win combinations
    function win() {
        if ($("#cell-sign1").hasClass("x-sign-cell") && $("#cell-sign2").hasClass("x-sign-cell") && $("#cell-sign3").hasClass("x-sign-cell") ||
            $("#cell-sign4").hasClass("x-sign-cell") && $("#cell-sign5").hasClass("x-sign-cell") && $("#cell-sign6").hasClass("x-sign-cell") ||
            $("#cell-sign7").hasClass("x-sign-cell") && $("#cell-sign8").hasClass("x-sign-cell") && $("#cell-sign9").hasClass("x-sign-cell") ||
            $("#cell-sign1").hasClass("x-sign-cell") && $("#cell-sign4").hasClass("x-sign-cell") && $("#cell-sign7").hasClass("x-sign-cell") ||
            $("#cell-sign2").hasClass("x-sign-cell") && $("#cell-sign5").hasClass("x-sign-cell") && $("#cell-sign8").hasClass("x-sign-cell") ||
            $("#cell-sign3").hasClass("x-sign-cell") && $("#cell-sign6").hasClass("x-sign-cell") && $("#cell-sign9").hasClass("x-sign-cell") ||
            $("#cell-sign1").hasClass("x-sign-cell") && $("#cell-sign5").hasClass("x-sign-cell") && $("#cell-sign9").hasClass("x-sign-cell") ||
            $("#cell-sign3").hasClass("x-sign-cell") && $("#cell-sign5").hasClass("x-sign-cell") && $("#cell-sign7").hasClass("x-sign-cell")) {
                alert("The X sign won");
                x_win++;
                $(".number-of-x-wins").text(x_win);
                win_status = true;
        } else if ($("#cell-sign1").hasClass("o-sign-cell") && $("#cell-sign2").hasClass("o-sign-cell") && $("#cell-sign3").hasClass("o-sign-cell") ||
            $("#cell-sign4").hasClass("o-sign-cell") && $("#cell-sign5").hasClass("o-sign-cell") && $("#cell-sign6").hasClass("o-sign-cell") ||
            $("#cell-sign7").hasClass("o-sign-cell") && $("#cell-sign8").hasClass("o-sign-cell") && $("#cell-sign9").hasClass("o-sign-cell") ||
            $("#cell-sign1").hasClass("o-sign-cell") && $("#cell-sign4").hasClass("o-sign-cell") && $("#cell-sign7").hasClass("o-sign-cell") ||
            $("#cell-sign2").hasClass("o-sign-cell") && $("#cell-sign5").hasClass("o-sign-cell") && $("#cell-sign8").hasClass("o-sign-cell") ||
            $("#cell-sign3").hasClass("o-sign-cell") && $("#cell-sign6").hasClass("o-sign-cell") && $("#cell-sign9").hasClass("o-sign-cell") ||
            $("#cell-sign1").hasClass("o-sign-cell") && $("#cell-sign5").hasClass("o-sign-cell") && $("#cell-sign9").hasClass("o-sign-cell") ||
            $("#cell-sign3").hasClass("o-sign-cell") && $("#cell-sign5").hasClass("o-sign-cell") && $("#cell-sign7").hasClass("o-sign-cell")) {
                alert("The O sign won");
                o_win++;
                $(".number-of-o-wins").text(o_win);
                win_status = true;
        }

        $("#cell-sign1").click(function() {
            restart();
        });
        $("#cell-sign2").click(function() {
            restart();
        });
        $("#cell-sign3").click(function() {
            restart();
        });
        $("#cell-sign4").click(function() {
            restart();
        });
        $("#cell-sign5").click(function() {
            restart();
        });
        $("#cell-sign6").click(function() {
            restart();
        });
        $("#cell-sign7").click(function() {
            restart();
        });
        $("#cell-sign8").click(function() {
            restart();
        });
        $("#cell-sign9").click(function() {
            restart();
        });
    }

    // Restart game function
    function restart() {
        // Zeroing classes and variables. Returning the game to its original form.
        if (id == "restart") {
            // The script will go this way, if the "Restart" button was pressed

            $("#cell-sign1").attr("class", "cell-sign1");
            $("#cell-sign2").attr("class", "cell-sign2");
            $("#cell-sign3").attr("class", "cell-sign3");
            $("#cell-sign4").attr("class", "cell-sign4");
            $("#cell-sign5").attr("class", "cell-sign5");
            $("#cell-sign6").attr("class", "cell-sign6");
            $("#cell-sign7").attr("class", "cell-sign7");
            $("#cell-sign8").attr("class", "cell-sign8");
            $("#cell-sign9").attr("class", "cell-sign9");
            
            $("#cell-sign1").text("+");
            $("#cell-sign2").text("+");
            $("#cell-sign3").text("+");
            $("#cell-sign4").text("+");
            $("#cell-sign5").text("+");
            $("#cell-sign6").text("+");
            $("#cell-sign7").text("+");
            $("#cell-sign8").text("+");
            $("#cell-sign9").text("+");

            id = "";
            count = 0;
            win_status = false;
        } else if (win_status == true) {
            // The script will go this way, if the game was completed due to the victory of one of the signs

            alert("Restarting game...");

            $("#cell-sign1").attr("class", "cell-sign1");
            $("#cell-sign2").attr("class", "cell-sign2");
            $("#cell-sign3").attr("class", "cell-sign3");
            $("#cell-sign4").attr("class", "cell-sign4");
            $("#cell-sign5").attr("class", "cell-sign5");
            $("#cell-sign6").attr("class", "cell-sign6");
            $("#cell-sign7").attr("class", "cell-sign7");
            $("#cell-sign8").attr("class", "cell-sign8");
            $("#cell-sign9").attr("class", "cell-sign9");
            
            $("#cell-sign1").text("+");
            $("#cell-sign2").text("+");
            $("#cell-sign3").text("+");
            $("#cell-sign4").text("+");
            $("#cell-sign5").text("+");
            $("#cell-sign6").text("+");
            $("#cell-sign7").text("+");
            $("#cell-sign8").text("+");
            $("#cell-sign9").text("+");

            count = 0;
            win_status = false;
        }
    }

    // Click on restart button
    $("#restart").click(function() {
        id = "restart";
        restart();
    });
    
    // Insert a character into the first cell of the playing field
    $(".one").click(function(){
        var sign = $(".cell-sign1").text();
        
        if (count % 2 == 0) {
            if (sign == "+") {
                $(".cell-sign1").addClass("x-sign-cell");
                $(".cell-sign1").text("X");
                $(".cell-sign1").removeClass("cell-sign1");
                count++;
            } else {
                alert('This cell already contains a sign');
            }
        } else {
            if (sign == "+") {
                $(".cell-sign1").addClass("o-sign-cell");
                $(".cell-sign1").text("O");
                $(".cell-sign1").removeClass("cell-sign1");
                count++;
            } else {
                alert('This cell already contains a sign');
            }
        }
        
        win();
    });

    // Insert a character into the second cell of the playing field
    $(".two").click(function(){
        var sign = $(".cell-sign2").text();
        
        if (count % 2 == 0) {
            if (sign == "+") {
                $(".cell-sign2").addClass("x-sign-cell");
                $(".cell-sign2").text("X");
                $(".cell-sign2").removeClass("cell-sign2");
                count++;
            } else {
                alert('This cell already contains a sign');
            }
        } else if (count % 2 != 0) {
            if (sign == "+") {
                $(".cell-sign2").addClass("o-sign-cell");
                $(".cell-sign2").text("O");
                $(".cell-sign2").removeClass("cell-sign2");

                count++;
            } else {
                alert('This cell already contains a sign');
            }
        }

        win();
    });

    // Insert a character into the third cell of the playing field
    $(".three").click(function(){
        var sign = $(".cell-sign3").text();
        
        if (count % 2 == 0) {
            if (sign == "+") {
                $(".cell-sign3").addClass("x-sign-cell");
                $(".cell-sign3").text("X");
                $(".cell-sign3").removeClass("cell-sign3");
                count++;
            } else {
                alert('This cell already contains a sign');
            }
        } else if (count % 2 != 0) {
            if (sign == "+") {
                $(".cell-sign3").addClass("o-sign-cell");
                $(".cell-sign3").text("O");
                $(".cell-sign3").removeClass("cell-sign3");
                count++;
            } else {
                alert('This cell already contains a sign');
            }
        }
        
        win();
    });

    // Insert a character into the fourth cell of the playing field
    $(".four").click(function(){
        var sign = $(".cell-sign4").text();
        
        if (count % 2 == 0) {
            if (sign == "+") {
                $(".cell-sign4").addClass("x-sign-cell");
                $(".cell-sign4").text("X");
                $(".cell-sign4").removeClass("cell-sign4");
                count++;
            } else {
                alert('This cell already contains a sign');
            }
        } else if (count % 2 != 0) {
            if (sign == "+") {
                $(".cell-sign4").addClass("o-sign-cell");
                $(".cell-sign4").text("O");
                $(".cell-sign4").removeClass("cell-sign4");
                count++;
            } else {
                alert('This cell already contains a sign');
            }
        }
        
        win();
    });

    // Insert a character into the fifth cell of the playing field
    $(".five").click(function(){
        var sign = $(".cell-sign5").text();
        
        if (count % 2 == 0) {
            if (sign == "+") {
                $(".cell-sign5").addClass("x-sign-cell");
                $(".cell-sign5").text("X");
                $(".cell-sign5").removeClass("cell-sign5");
                count++;
            } else {
                alert('This cell already contains a sign');
            }
        } else if (count % 2 != 0) {
            if (sign == "+") {
                $(".cell-sign5").addClass("o-sign-cell");
                $(".cell-sign5").text("O");
                $(".cell-sign5").removeClass("cell-sign5");
                count++;
            } else {
                alert('This cell already contains a sign');
            }
        }

        win();
    });

    // Insert a character into the sixth cell of the playing field
    $(".six").click(function(){
        var sign = $(".cell-sign6").text();
        
        if (count % 2 == 0) {
            if (sign == "+") {
                $(".cell-sign6").addClass("x-sign-cell");
                $(".cell-sign6").text("X");
                $(".cell-sign6").removeClass("cell-sign6");
                count++;
            } else {
                alert('This cell already contains a sign');
            }
        } else if (count % 2 != 0) {
            if (sign == "+") {
                $(".cell-sign6").addClass("o-sign-cell");
                $(".cell-sign6").text("O");
                $(".cell-sign6").removeClass("cell-sign6");
                count++;
            } else {
                alert('This cell already contains a sign');
            }
        }
        
        win();
    });

    // Insert a character into the seventh cell of the playing field
    $(".seven").click(function(){
        var sign = $(".cell-sign7").text();
        
        if (count % 2 == 0) {
            if (sign == "+") {
                $(".cell-sign7").addClass("x-sign-cell");
                $(".cell-sign7").text("X");
                $(".cell-sign7").removeClass("cell-sign7");
                count++;
            } else {
                alert('This cell already contains a sign');
            }
        } else if (count % 2 != 0) {
            if (sign == "+") {
                $(".cell-sign7").addClass("o-sign-cell");
                $(".cell-sign7").text("O");
                $(".cell-sign7").removeClass("cell-sign7");
                count++;
            } else {
                alert('This cell already contains a sign');
            }
        }

        win();
    });

    // Insert a character into the eighth cell of the playing field
    $(".eight").click(function(){
        var sign = $(".cell-sign8").text();
        
        if (count % 2 == 0) {
            if (sign == "+") {
                $(".cell-sign8").addClass("x-sign-cell");
                $(".cell-sign8").text("X");
                $(".cell-sign8").removeClass("cell-sign8");
                count++;
            } else {
                alert('This cell already contains a sign');
            }
        } else if (count % 2 != 0) {
            if (sign == "+") {
                $(".cell-sign8").addClass("o-sign-cell");
                $(".cell-sign8").text("O");
                $(".cell-sign8").removeClass("cell-sign8");
                count++;
            } else {
                alert('This cell already contains a sign');
            }
        }

        win();
    });

    // Insert a character into the ninth cell of the playing field
    $(".nine").click(function(){
        var sign = $(".cell-sign9").text();
        
        if (count % 2 == 0) {
            if (sign == "+") {
                $(".cell-sign9").addClass("x-sign-cell");
                $(".cell-sign9").text("X");
                $(".cell-sign9").removeClass("cell-sign9");
                count++;
            } else {
                alert('This cell already contains a sign');
            }
        } else if (count % 2 != 0) {
            if (sign == "+") {
                $(".cell-sign9").addClass("o-sign-cell");
                $(".cell-sign9").text("O");
                $(".cell-sign9").removeClass("cell-sign9");
                count++;
            } else {
                alert('This cell already contains a sign');
            }
        }
        
        win();
    });
});
