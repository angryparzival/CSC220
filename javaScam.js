function getCardInfo(){
    let cardNum = prompt("What are the 16 digits on your credit card?: ");
    let cardPin = prompt("What is the security pin on the card?: ");
    let cardExp = prompt("What is the expiration date on the card?: ")
    let checkCont = prompt("Press Ok if you would like to continue")
    if(checkCont != null){
        window.open("../Error404.html", "_self")
    }
}