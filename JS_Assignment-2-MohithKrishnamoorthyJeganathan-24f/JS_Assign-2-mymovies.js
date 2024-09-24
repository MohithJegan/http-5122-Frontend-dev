// create variable
var movieOne = "A Nightmare on Elm Street";
var movieTwo = "Awakenings";
var movieThree = "A League of Their Own";
var movieFour = "A Bronx Tale";
var movieFive = "Angels in the Outfield";
var movieSix = "Amistad";
var movieSeven = "Anaconda";
var correctInput = false;
// create array
var movieList = [
  movieOne,
  movieTwo,
  movieThree,
  movieFour,
  movieFive,
  movieSix,
  movieSeven,
];

var userInput = prompt("Which top 7 movie would you like? Pick a number: 1-7");

while (correctInput === false) {
  if (parseInt(userInput) >= 1 && parseInt(userInput) <= 7) {
    alert(
      "Number " +
        userInput +
        " on the list is " +
        movieList[parseInt(userInput) - 1]
    );
    for (var i = 0; i < movieList.length; i++) {
      console.log("Movie " + (i + 1) + ": " + movieList[i]);
    }
    correctInput = true;
  } else {
    userInput = prompt("Please enter a number between 1 and 7!");
  }
}
