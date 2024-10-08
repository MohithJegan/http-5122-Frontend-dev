//#### LAB 5 - OBJECTS ####
//PART 2:  CREATE A BANK CUSTOMER OBJECT
//1. Create the object structure first.
//2. Add the required properties to your object.
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
//4. Add your second method and test it.
//5. Create the required output to complete steps 6-10 of the lab.
//6. Once everything is working, tackle the Stretch Goal!

var bankCustomer = {
    lastName:"John",
    branchNumber:12345,
    accountBalance: 500.25,
    interestRate: 1.03,
    multipleAccounts: false,
    makeDeposit:function(depositAmount){
        this.accountBalance = this.accountBalance+Number(depositAmount);
        return "Thank you, your current balance is now $"+this.accountBalance.toFixed(2)+".";
    },
    makeWithdrawal:function(withdrawalAmount){
        this.accountBalance = this.accountBalance - Number(withdrawalAmount);
        return "Thank you, your current balance is now $"+this.accountBalance.toFixed(2)+".";
    },
    addInterest:function(){
        var interestRate=this.interestRate;
        if(this.multipleAccounts)interestRate+=0.005;
        this.accountBalance = this.accountBalance*interestRate;
        return "Thank you, your current balance is now $"+this.accountBalance.toFixed(2)+".";
    }
}

console.log("Starting Balance",bankCustomer.accountBalance);
// deposit
var depositAmount = 200;
var depositMessage = bankCustomer.makeDeposit(depositAmount);
console.log(depositMessage)
// withdraw
var withdrawAmount = 75;
var withdrawMessage = bankCustomer.makeWithdrawal(withdrawAmount);
console.log(withdrawMessage);
// interest
var interestMessage = bankCustomer.addInterest();
console.log(interestMessage);