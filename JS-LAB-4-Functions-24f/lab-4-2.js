//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION
var number1 = 5;
var number2 = 10;
var number3 = 15;
var number4 = 20;
var number5 = 25;

var frontend = 67;
var backend = 30;
var webDesign = 55;
var workshops = 74;
var databaseDesign = 92;

function performAverage(number1, number2, number3, number4, number5) {
  console.log(
    "Avg is " + (number1 + number2 + number3 + number4 + number5) / 5
  );
  return ((number1 + number2 + number3 + number4 + number5) / 5).toFixed(2);
}

performAverage(number1, number2, number3, number4, number5);
//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
if (
  performAverage(frontend, backend, webDesign, workshops, databaseDesign) >= 70
) {
  alert("Congratulations! Keep up your good work");
} else {
  alert("Review required");
}

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
