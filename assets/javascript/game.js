
$(document).ready(function () {


    //Creating random number on click of start button//

    var counter = 0;
    var wins = 0;
    var losses = 0;
    var randomNumber = 0;
    var diamondValues = {};
    diamondValues[1] = Math.floor(Math.random() * 11 + 1);
    diamondValues[2] = Math.floor(Math.random() * 11 + 1);
    diamondValues[3] = Math.floor(Math.random() * 11 + 1);
    diamondValues[4] = Math.floor(Math.random() * 11 + 1);
    var imageCrystal = ["images/diamond1.png", "images/diamond2.png", "images/diamond3.png", "images/diamond4.png"]

    $("#wins").text(wins);
    $("#losses").text(losses);
    function reset(){
        wins=0;
        losses=0;
    }

    // Here we use jQuery to select the header with "click-me" as its ID.
    // Notice I have the #click-me, click, and then the function
    // So $("id|class|element").on("action", function(){});
    // And so whenever it is clicked...
    $("#generateNumber").on("click", function getRandomNumber() {
        randomNumber = Math.floor((Math.random() * 60) + 1);
        $("#yourRandomNumber").text(randomNumber);

        $("#diamond1").on("click", getCrystalHandler(1));
        $("#diamond2").on("click", getCrystalHandler(2));
        $("#diamond3").on("click", getCrystalHandler(3));
        $("#diamond4").on("click", getCrystalHandler(4));
        userTotal = 0;
        $("#totalScore").text(userTotal);
    })
    function getCrystalHandler(diamondKey) {
        return function () {
            userTotal = userTotal + diamondValues[diamondKey];
            console.log("New userTotal " + userTotal);
            $("#totalScore").text(userTotal);

            if (userTotal === randomNumber) {
                // winner 
                wins++;

                $('#wins').text(wins);
                reset();
            }

            else if (userTotal > randomNumber) {
                // loser
                losses++;
                $('#losses').text(losses);
                reset()
            }

        }
    }


});


