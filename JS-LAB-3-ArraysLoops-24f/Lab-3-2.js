//LAB 3 - ARRAYS & LOOPS - PART 2


//TEAM MEMBER ARRAY
var ourTeam = ["John", "Danny", "Rob", "Tony", "Sam"];

//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log(ourTeam);

//REMOVE LAST MEMBER
console.log(ourTeam.pop());

//ADD SEAN TO FRONT OF ARRAY
ourTeam.unshift("Sean");
console.log(ourTeam)

//REARRANGE THE ARRAY ALPHABETICALLY
ourTeam.sort();
console.log(ourTeam);

//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
console.log("We have "+ ourTeam.length + " people in our group.")

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE

for(var i=0; i<ourTeam.length;i++){
    console.log(ourTeam[i]+ " # "+(i+1));
}