//function that gets card info 
function getInfo(){
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
            window.alert("The number you entered does not meet the length requirement");
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
        //checks to see if the input matches the correct format with a / between month and year
        if(cardExp.charAt(2) != '/')
        {
            alert("Please make sure that the input matches the format");
        }
    }while(lengthGood == false);
}


//gets card info from user for specifically the mom subpages
function getCardInfoMoms(){
    
    getInfo();
    //pops up a confirmation box to check if user wants to continue
    checkCont = window.confirm("Press Ok if you would like to continue")
    //if they click Ok puts them to next page, if they click cancel closes box and nothing happens
    if(checkCont == true){
        window.open("../Error404.html", "_self")
    }

}

//gets card info from user for princes page
function getCardInfoPrinces(){
    
    //if statement to make sure at least one radio button is selected, if it isnt run this
    if(document.getElementById('Adele').checked == false && document.getElementById('Achebe').checked == false && document.getElementById('Gdabedo').checked == false){
        window.alert("Please Make A Selection first");
    }
    //if one radio button is selected
    else{
        //calls card information
        getInfo();
        //pops up a confirmation box to check if user wants to continue
        checkCont = window.confirm("Press Ok if you would like to continue")
        //if they click Ok puts them to next page, if they click cancel closes box and nothing happens
        if(checkCont == true){
            if(document.getElementById('Adele').checked) {
                window.open("Error404.html", "_self")
            }
            else if(document.getElementById('Achebe').checked) {
                window.open("Error404.html", "_self") 
            }
            else if(document.getElementById('Gdabedo').checked) {
                window.open("Error404.html", "_self")
            }
        }
    }
}

//gets card info from user for specifically the mom subpages
function getCardInfoCruises(){
    getInfo();
    //pops up a confirmation box to check if user wants to continue
    checkCont = window.confirm("Press Ok if you would like to continue")
    //if they click Ok puts them to next page, if they click cancel closes box and nothing happens
    if(checkCont == true){
        window.open("Error404.html", "_self")
    }

}

//gets card info from user for specifically the IRS page
function checkIRSInfo(){
    let reguExp = /^[A-Za-z]+$/;
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let DOB = document.getElementById('DOB');
    let owedAmount = document.getElementById('owedAmount');
    let SSN = document.getElementById("SSN");
    if(firstName.value.match(reguExp) && lastName.value.match(reguExp) && SSN.value > 0 && SSN.value <= 9999){
        getInfo();
        //pops up a confirmation box to check if user wants to continue
        checkCont = window.confirm("Press Ok if you would like to continue")
        //if they click Ok puts them to next page, if they click cancel closes box and nothing happens
        if(checkCont == true){
            window.open("Error404.html", "_self")
        }
    }
    else{
        alert("You entered an invalid input");
    }
}


//functoin to display the the product is out of stock
function displayOutOfStock(){
    alert("Sorry That Product Is Out Of Stock :(");
}

//function that "checks stock" and after .5 seconds runs function displayOutOfSTock
function checkStock(){
    alert("Checking Stock......Press Ok To See Results");
    let timerID = setTimeout(displayOutOfStock, 500);
}