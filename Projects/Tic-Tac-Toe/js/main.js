$(document).ready(function() {
    // Info
    var x_win = 0;
    var o_win = 0;
    var count = 0;
    
    // For restart
    var win_status = false;
    var id = "";

    // Sign
    var one = "";
    var two = "";
    var three = "";
    var four = "";
    var five = "";
    var six = "";
    var seven = "";
    var eight = "";
    var nine = "";

    // Win combinations
    function win() {
        if (one == two && two == three) {
            if (one == "X") {
                alert("The X sign won");
                x_win++;
                $(".number-of-x-wins").text(x_win);
                win_status = true;
            } else if (one == "O") {
                alert("The O sign won");
                o_win++;
                $(".number-of-o-wins").text(o_win);
                win_status = true;
            }
        } else if (four == five && five == six) {
            if (four == "X") {
                alert("The X sign won");
                x_win++;
                $(".number-of-x-wins").text(x_win);
            } else if (four == "O") {
                alert("The O sign won");
                o_win++;
                $(".number-of-o-wins").text(o_win);
                win_status = true;
            }
        } else if (seven == eight && eight == nine) {
            if (seven == "X") {
                alert("The X sign won");
                x_win++;
                $(".number-of-x-wins").text(x_win);
                win_status = true;
            } else if (seven == "O") {
                alert("The O sign won");
                o_win++;
                $(".number-of-o-wins").text(o_win);
                win_status = true;
            }
        } else if (one == four && four == seven) {
            if (one == "X") {
                alert("The X sign won");
                x_win++;
                $(".number-of-x-wins").text(x_win);
                win_status = true;
            } else if (one == "O") {
                alert("The O sign won");
                o_win++;
                $(".number-of-o-wins").text(o_win);
                win_status = true;
            }
        } else if (two == five && five == eight) {
            if (two == "X") {
                alert("The X sign won");
                x_win++;
                $(".number-of-x-wins").text(x_win);
                win_status = true;
            } else if (two == "O") {
                alert("The O sign won");
                o_win++;
                $(".number-of-o-wins").text(o_win);
                win_status = true;
            }
        } else if (three == six && six == nine) {
            if (three == "X") {
                alert("The X sign won");
                x_win++;
                $(".number-of-x-wins").text(x_win);
                win_status = true;
            } else if (three == "O") {
                alert("The O sign won");
                o_win++;
                $(".number-of-o-wins").text(o_win);
                win_status = true;
            }
        } else if (one == five && five == nine) {
            if (one == "X") {
                alert("The X sign won");
                x_win++;
                $(".number-of-x-wins").text(x_win);
                win_status = true;
            } else if (one == "O") {
                alert("The O sign won");
                o_win++;
                $(".number-of-o-wins").text(o_win);
                win_status = true;
            }
        } else if (three == five && five == seven) {
            if (three == "X") {
                alert("The X sign won");
                x_win++;
                $(".number-of-x-wins").text(x_win);
                win_status = true;
            } else if (three == "O") {
                alert("The O sign won");
                o_win++;
                $(".number-of-o-wins").text(o_win);
                win_status = true;
            }
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
            one = "";
            two = "";
            three = "";
            four = "";
            five = "";
            six = "";
            seven = "";
            eight = "";
            nine = "";

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
            alert("Restart game");

            one = "";
            two = "";
            three = "";
            four = "";
            five = "";
            six = "";
            seven = "";
            eight = "";
            nine = "";

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
    
    // Put sign in cell
    if (one == "" && two == "" && three == "" && four == "" && five == "" && six == "" && seven == "" && eight == "" && nine == "") {
        $(".one").click(function(){
            var sign = $(".cell-sign1").text();
            
            if (count % 2 == 0) {
                if (sign == "+") {
                    $(".cell-sign1").addClass("x-sign-cell");
                    $(".cell-sign1").text("X");
                    $(".cell-sign1").removeClass("cell-sign1");
                    one = "X";
                    count++;
                } else {
                    alert('This cell already contains a sign');
                }
            } else {
                if (sign == "+") {
                    $(".cell-sign1").addClass("o-sign-cell");
                    $(".cell-sign1").text("O");
                    $(".cell-sign1").removeClass("cell-sign1");
                    one = "O";
                    count++;
                } else {
                    alert('This cell already contains a sign');
                }
            }
            
            win();
        });

        $(".two").click(function(){
            var sign = $(".cell-sign2").text();
            
            if (count % 2 == 0) {
                if (sign == "+") {
                    $(".cell-sign2").addClass("x-sign-cell");
                    $(".cell-sign2").text("X");
                    $(".cell-sign2").removeClass("cell-sign2");
                    two = "X";
                    count++;
                } else {
                    alert('This cell already contains a sign');
                }
            } else if (count % 2 != 0) {
                if (sign == "+") {
                    $(".cell-sign2").addClass("o-sign-cell");
                    $(".cell-sign2").text("O");
                    $(".cell-sign2").removeClass("cell-sign2");
                    two = "O";
                    count++;
                } else {
                    alert('This cell already contains a sign');
                }
            }

            win();
        });

        $(".three").click(function(){
            var sign = $(".cell-sign3").text();
            
            if (count % 2 == 0) {
                if (sign == "+") {
                    $(".cell-sign3").addClass("x-sign-cell");
                    $(".cell-sign3").text("X");
                    $(".cell-sign3").removeClass("cell-sign3");
                    three = "X";
                    count++;
                } else {
                    alert('This cell already contains a sign');
                }
            } else if (count % 2 != 0) {
                if (sign == "+") {
                    $(".cell-sign3").addClass("o-sign-cell");
                    $(".cell-sign3").text("O");
                    $(".cell-sign3").removeClass("cell-sign3");
                    three = "O";
                    count++;
                } else {
                    alert('This cell already contains a sign');
                }
            }
            
            win();
        });

        $(".four").click(function(){
            var sign = $(".cell-sign4").text();
            
            if (count % 2 == 0) {
                if (sign == "+") {
                    $(".cell-sign4").addClass("x-sign-cell");
                    $(".cell-sign4").text("X");
                    $(".cell-sign4").removeClass("cell-sign4");
                    four = "X";
                    count++;
                } else {
                    alert('This cell already contains a sign');
                }
            } else if (count % 2 != 0) {
                if (sign == "+") {
                    $(".cell-sign4").addClass("o-sign-cell");
                    $(".cell-sign4").text("O");
                    $(".cell-sign4").removeClass("cell-sign4");
                    four = "O";
                    count++;
                } else {
                    alert('This cell already contains a sign');
                }
            }

            win();
        });

        $(".five").click(function(){
            var sign = $(".cell-sign5").text();
            
            if (count % 2 == 0) {
                if (sign == "+") {
                    $(".cell-sign5").addClass("x-sign-cell");
                    $(".cell-sign5").text("X");
                    $(".cell-sign5").removeClass("cell-sign5");
                    five = "X";
                    count++;
                } else {
                    alert('This cell already contains a sign');
                }
            } else if (count % 2 != 0) {
                if (sign == "+") {
                    $(".cell-sign5").addClass("o-sign-cell");
                    $(".cell-sign5").text("O");
                    $(".cell-sign5").removeClass("cell-sign5");
                    five = "O";
                    count++;
                } else {
                    alert('This cell already contains a sign');
                }
            }

            win();
        });

        $(".six").click(function(){
            var sign = $(".cell-sign6").text();
            
            if (count % 2 == 0) {
                if (sign == "+") {
                    $(".cell-sign6").addClass("x-sign-cell");
                    $(".cell-sign6").text("X");
                    $(".cell-sign6").removeClass("cell-sign6");
                    six = "X";
                    count++;
                } else {
                    alert('This cell already contains a sign');
                }
            } else if (count % 2 != 0) {
                if (sign == "+") {
                    $(".cell-sign6").addClass("o-sign-cell");
                    $(".cell-sign6").text("O");
                    $(".cell-sign6").removeClass("cell-sign6");
                    six = "O";
                    count++;
                } else {
                    alert('This cell already contains a sign');
                }
            }

            win();
        });

        $(".seven").click(function(){
            var sign = $(".cell-sign7").text();
            
            if (count % 2 == 0) {
                if (sign == "+") {
                    $(".cell-sign7").addClass("x-sign-cell");
                    $(".cell-sign7").text("X");
                    $(".cell-sign7").removeClass("cell-sign7");
                    seven = "X";
                    count++;
                } else {
                    alert('This cell already contains a sign');
                }
            } else if (count % 2 != 0) {
                if (sign == "+") {
                    $(".cell-sign7").addClass("o-sign-cell");
                    $(".cell-sign7").text("O");
                    $(".cell-sign7").removeClass("cell-sign7");
                    seven = "O";
                    count++;
                } else {
                    alert('This cell already contains a sign');
                }
            }

            win();
        });

        $(".eight").click(function(){
            var sign = $(".cell-sign8").text();
            
            if (count % 2 == 0) {
                if (sign == "+") {
                    $(".cell-sign8").addClass("x-sign-cell");
                    $(".cell-sign8").text("X");
                    $(".cell-sign8").removeClass("cell-sign8");
                    eight = "X";
                    count++;
                } else {
                    alert('This cell already contains a sign');
                }
            } else if (count % 2 != 0) {
                if (sign == "+") {
                    $(".cell-sign8").addClass("o-sign-cell");
                    $(".cell-sign8").text("O");
                    $(".cell-sign8").removeClass("cell-sign8");
                    eight = "O";
                    count++;
                } else {
                    alert('This cell already contains a sign');
                }
            }

            win();
        });

        $(".nine").click(function(){
            var sign = $(".cell-sign9").text();
            
            if (count % 2 == 0) {
                if (sign == "+") {
                    $(".cell-sign9").addClass("x-sign-cell");
                    $(".cell-sign9").text("X");
                    $(".cell-sign9").removeClass("cell-sign9");
                    nine = "X";
                    count++;
                } else {
                    alert('This cell already contains a sign');
                }
            } else if (count % 2 != 0) {
                if (sign == "+") {
                    $(".cell-sign9").addClass("o-sign-cell");
                    $(".cell-sign9").text("O");
                    $(".cell-sign9").removeClass("cell-sign9");
                    nine = "O";
                    count++;
                } else {
                    alert('This cell already contains a sign');
                }
            }

            win();
        });
    }
});
