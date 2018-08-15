$(document).ready(function () {
    var clock = 10;
    var nextRound = 5;
    
    var questions = [];

    $("#start").click(start);
    $("#timer").text(clock);
    $(".timer").hide();
    $(".question").hide();
    



    function start() {
        $(".start").hide();
        $(".question").show();
        $(".timer").show();
        var interval= setInterval(function() {
            clock--;
            
            if (clock == 0) {
                
                clearInterval(interval);
            }
            $("#timer").text(clock);
        }, 1000);
        
       
       

        var question1 = {
            q: "what floats in water?",
            a1: "Bread!",
            a2: "Apples!",
            a3: "Very Small Rocks!",
            a4: "A Duck!"
        }
        questions.push(question1);

        var question2 = {
            q: "What is 'wafer thin?'",
            a1: "A Cracker",
            a2: "An After Dinner Mint",
            a3: "Very Small Rocks!",
            a4: "A Crisp"
        }
        questions.push(question2);

        var question3 = {
            q: "The ministry of ______",
            a1: "Spam!",
            a2: "Very Small Rocks!",
            a3: "Silly Walks",
            a4: "A Crisp"
        }
        questions.push(question3);

        var question4 = {
            q: "Very Small Rocks!",
            a1: "Very Small Rocks!",
            a2: "Very Small Rocks!",
            a3: "Very Small Rocks!",
            a4: "Very Small Rocks!"
        }
        questions.push(question4);
        $("#question").text(questions[0]);
        
    }




});