function doesWorkPrompt(){
    let doesWork;

    doesWork = prompt("Does this work?");
    console.log("Does this work?" + doesWork);
}
function getNumber(){
    let num1;

    num1 = 7;

    let userNum = prompt("what is your favorite number");

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
//this is a function call
doesWorkPrompt();