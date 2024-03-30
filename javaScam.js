//gets card info from user
function getCardInfo(){
    //declare variables
    let cardNum;
    let charsGood;
    let lengthGood;
    let cardPin;
    let cardExp;
    let checkCont;

    //loop to check if 16 card numbers input is long enough and all numbers
    do{
        charsGood, lengthGood = true;
        //asks user for 16 digits
        cardNum = prompt("What are the 16 digits on your credit card?(only numbers): ");
        //checks if input is completely a number
        if(isNaN(cardNum) == true){
            window.alert("You entered something that is not a number!");
            charsGood = false;
        }
        //checks if input is 16 chars long exactly
        if(cardNum.length < 16 || cardNum.length > 16){
            window.alert("The number you entered does not mean the length requirement");
            lengthGood = false;
        }
    }while(charsGood == false || lengthGood == false);

    //loop to check if 3 digit card pin is long enough and all numbers
    do{
        charsGood, lengthGood = true;
        //asks user for security pin
        cardPin = prompt("What is the security pin on the card?: ");
        //checks if input is completely a number
        if(isNaN(cardPin) == true){
            window.alert("You entered something that is not a number!");
            charsGood = false;
        }
        //checks if input is 3 chars long exactly
        if(cardPin.length < 3 || cardPin.length > 3){
            window.alert("The number you entered does not mean the length requirement");
            lengthGood = false;
        }
    }while(charsGood == false || lengthGood == false);
    
    //loop to check if expiration date is correct length
    do{
        lengthGood = true;
        cardExp = prompt("What is the expiration date on the card?(mm/yyyy): ");
        //checks to see if input is 7 chars long exactly
        if(cardExp.length < 7 || cardExp.length > 7){
            lengthGood = false;
        }
    }while(lengthGood == false);
    
    //pops up a confirmation box to check if user wants to continue
    checkCont = window.confirm("Press Ok if you would like to continue")
    //if they click Ok puts them to next page, if they click cancel closes box and nothing happens
    if(checkCont == true){
        window.open("../Error404.html", "_self")
    }

}

//functoin to display the the product is out of stock
function displayOutOfStock(){
    alert("Sorry That Product Is Out Of Stock :(");
}

function checkStock(){
    alert("Checking Stock......Press Ok To See Results");
    let timerID = setTimeout(displayOutOfStock, 500);
}