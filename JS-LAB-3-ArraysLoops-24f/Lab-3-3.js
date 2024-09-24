//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var cart = [];
var total = 0;

//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.

    while(total<35){
		var itemPrice = prompt("Enter the item cost of the product");
		total += parseInt(itemPrice);
		cart.push(itemPrice);
	}

	//GET ITEM COST FROM USER
	
	
	//CONVERT USER INPUT TO A NUMBER
	
	
	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	
	
	//PUSH ITEM COST TO CART ARRAY
	
	
	


//SEND POPUP MESSAGE TO USER
alert("Your shipping for this order will be free!");
alert("The total value of the product purchased is $"+total);

//SEND OUTPUT TO CONSOLE
console.log(cart.join(" | "));


