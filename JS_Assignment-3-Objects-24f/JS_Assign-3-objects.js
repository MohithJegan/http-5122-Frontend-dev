
var movies={
    title : "The Wild Robot",
    review: 8.5,
    genre: "Animation",
    director: "Peter Brown",
    changeGenre:function(){
        this.genre = "action";
        //alert("The genre of the movie is updated with "+this.genre);
    }
}

//Output the object
console.log("Object", movies);

// get the movie title from the user
var titleInput = prompt("Enter the movie title ?",movies.title)
//update the title by user entered new title
movies.title = titleInput;
//get the review by user entered new review
var reviewInput = prompt("Enter the review for the "+titleInput+" movie ?",movies.review);
//update the review by user entered new review
movies.review = Number(reviewInput);
// Call the function to change genre (3rd property of the movies object)
movies.changeGenre();
// updated object
console.log("Updated Object",movies);