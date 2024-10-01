// create variables
var teamNumber = 4;
var member1 = "Matt Zayn";
var member2 = "Sam Joel";
var member3 = "John Doe";
var member4 = "Ben Bruce";
var greetingMessage = "Welcome back ";
var deniedMessage = "Access denied!";
var userInput = prompt("Which team number do you belong to ?");

// use the control structures to respond as per the user prompt
// convert the userInput to Number type
if (Number(userInput) === teamNumber) {
  var firstName = prompt("Enter your first name");
  // create switch case to find the match
  if(firstName.length>0){
    switch (firstName.toLowerCase()) {
      case "matt":
        alert(greetingMessage + member1 + " !");
        break;
      case "sam":
        alert(greetingMessage + member2 + " !");
        break;
      case "john":
        alert(greetingMessage + member3 + " !");
        break;
      case "ben":
        alert(greetingMessage + member4 + " !");
        break;
      default:
        alert(deniedMessage);
    }
  }
  else{
    alert("Invalid member name. Please enter the valid username");
  }
  
} else {
  alert(deniedMessage);
}
