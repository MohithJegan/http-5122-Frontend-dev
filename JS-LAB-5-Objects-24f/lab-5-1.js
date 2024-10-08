//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!

var meObject = {
    name:"Mohith",
    id: "N01678993",
    position: "Student",
    program: "Web Development",
    intro: function(){
        alert("My name is "+meObject.name+" and I am a "+meObject.position+".");
        return "My name is "+meObject.name+" and I am a "+meObject.position+".";
    }
}
console.log(meObject.name);
var message = meObject.intro();
console.log(message);

