$(document).ready(function () {
    var clock = 5;

    var i = 0;
    var questions = [{
        question: "What floats in water?",
        answers: ["Bread!", "Apples!", "Very Small Rocks!", "A Duck!"],
        correct: 3,
        //img
    }, {
        question: "What is 'wafer thin?'",
        answers: ["A wafer", "An After Dinner Mint", "Very Small Rocks!", "Spam!"],
        correct: 2,
        //img
    }, {
        question: "The ministry of ______",
        answers: ["Spam!", "Very Small Rocks!", "Silly Walks", "Dead Parrots"],
        correct: 3,
        //img
    }, {
        question: "Very Small Rocks!",
        answers: ["Very Small Rocks!", "Very Small Rocks!", "Very Small Rocks!", "Very Small Rocks!"],
        correct: 1,
        //img
    }, {
        question: "Nobody Expects the _______",
        answers: ["Spanish Inquisition!", "Bicycle Repairman!", "The... Larch...", "Large Wooden Badger..."],
        correct: 1,
        //img
    }, {
        question: "1... 2...",
        answers: ["5!", "3, Sir!", "3!", "I don't know that!"],
        correct: 3,
        //img
    }, {
        question: "I'd rather just...SING!",
        answers: ["It's my only line!", "We interrupt this program to annoy you and make things generally irritating.", "No Singing!", "Good-a-night, ding ding ding ding ding."],
        correct: 3,
        //img
    }, {
        question: "Spam! Spam! Spam! Spam!",
        answers: ["Spam! Spam! Spam! Spam!", "Spam! Spam! Spam! Spam!", "Spam! Spam! Spam! Spam!", "Spam! Spam! Spam! Spam!"],
        correct: 1,
        //img
    }, {
        question: "I put on women's clothing an hang around in bars!",
        answers: ["It's Pining for the fjords!", "Your Mother was a Hamster, and your Father smelt of Elderberries!", "There are some who call me...Tim.", "I'm a lumberjack and I'm ok!"],
        correct: 4,
        //img
    }, {
        question: "It's not pining, it's passed on. This parrot is no more. It has ceased to be. It's expired and gone to meet its maker. This is a late parrot. It's a stiff. Bereft of life, it rests in peace. If you hadn't nailed it to the perch, it would be pushing up daisies. It's rung down the curtain and joined the choir invisible. This is an ex-parrot.",
        answers: ["And now for something completely different", "The Dead Parrot Sketch!", "Strange women lying in ponds distributing swords is no basis for a system of government", "A Shrubbery!"],
        correct: 4,
        //img
    }]

    console.log(questions);

    //default game load
    $("#start").click(start);
    $("#timer").text(clock);
    $(".timer").hide();
    $(".question").hide();




    //on start button click
    function start() {
        $(".start").hide();
        $(".question").show();
        $(".timer").show();
        
        nextQ();

        //clock countdown and trigger lose function
        var interval = setInterval(function () {
            clock--;
            if (clock == 0) {
                //funtion(lose);
                timeout()
                clearInterval(interval);
            }
            $("#timer").text(clock);
        }, 1000);
    }


    function nextQ() {
        console.log(i);
        var q = $("<h3> Question: " + questions[i].question + "</h3>");
        $("#qa").append(q);
        console.log(q);
        for (var j = 0; j < questions[i].answers.length; j++) {
            var a = $("<h4>" + questions[i].answers[j] + "</h4>");
            $("#qa").append(a);
            console.log(a);
        }
        i++;
        console.log(i);
    }

    function timeout() {

        $("#qa").empty();
        $("#result").show();
        $("#qa").show();
        
        clock += 6;
    }





});