function doesWorkPrompt(){
    let doesWork;

    doesWork = prompt("Does this work?");
    console.log("Does this work?" + doesWork);
}
function getNumber(){
    let num1;

    num1 = 7;

    let userNum;

    //only favorite numbers between 3 and 18
    const MIN = 3;
    const MAX = 18;

    //boolean to show if input is valid
    let isValid;

    do{
        try{
            userNum = prompt("what is your favorite number");
            if(userNum < MIN || userNum > MAX){
                throw("That is an invalid input");
            }
            if(userNum == isNaN){
                throw("That is not a number");
            }
            isValid=true;
        }
        catch(e){
            isValid = false;
            console.log(e)
        }
    }while(isValid == false)

    if(num1 == userNum){
        console.log("Congrats thats our fav number too");
        console.log("YOU SLAY!");
    }
    else if(num1< userNum){
        console.log("You are reaching for the stars buddy");
    }
    else{
        console.log("you guessed to low")
    }
}
function getUserName(){
    let name;
    name = document.getElementById("UserName").value;
    console.log(name);
    return name;
}
function getPassword(){
    let password;
    password = document.getElementById("Password").value;
    console.log(password);
    return password;
}
function login(){
    let userName = getUserName();
    let password = getPassword();
    if (userName == "Dorian" && "dominos"){
        console.log("Congrats you got in");
        window.open("TestingClass.html")
    }
    else{
        console.log("You are denied");
    }
}

let stringName;
stringName = getUserName();
console.log("The name is " + stringName);


//this is a function call
doesWorkPrompt();