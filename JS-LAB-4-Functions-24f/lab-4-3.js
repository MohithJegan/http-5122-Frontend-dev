//#### LAB 4 - FUNCTIONS ####
//PART 3:  SAFE DOG WALKING CHECK

//================== CREATE YOUR checkTemp FUNCTION
//This function's job is to...
//It needs to receive...
//It will return...

var userInput = prompt("Please enter a current temperature");

// checks the user input temperature and displays boolean value with comparing 30
// this function accepts a number data type and requires one parameter
// this function returns boolean data type -> true when "currentTemp" value is less than 30, otherwise false
function checkTemp(currentTemp) {
  if (currentTemp > 30 || currentTemp < -10) {
    return false;
  }
  return true;
}

// below conditional statements checks the input and display the alert message whether it is safe to walk yor dog

// if (checkTemp(Number(userInput))) {
//   alert("You're good, have a nice walk!");
// } else if (Number(userInput) < -10) {
//   alert("Yikes! Too cold for dog walking!");
// } else {
//   alert("Yikes! Too hot for dog walking!");
// }

if (checkTemp(Number(userInput))) {
  alert("You're good, have a nice walk!");
} else {
  alert(
   "Yikes! This is no weather for dog walking!"
  );
}

//================== LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
