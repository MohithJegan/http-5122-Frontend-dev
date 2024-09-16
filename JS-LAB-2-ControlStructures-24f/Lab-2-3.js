//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========

var popupBox = confirm("Would you like to join our mailing list"); 
var emailId="";
//==== LOGIC =============
if(popupBox===true){
    emailId = prompt("Please enter you email","me@example.com");
    if(emailId===""||emailId===null||emailId==="me@example.com"){
       alert("Thank you, but your email was not valid.");
    }
    else{
        alert("Thank you, our next newsletter will be sent to "+emailId);
    }
}
else{
    alert("Thank you, we will not bother you again.");
}
