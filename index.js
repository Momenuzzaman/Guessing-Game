var numberOfWon = 0;
var numberOfLost = 0;

for( var i = 1; i<=5; i++){

    var gussNumber = parseFloat( prompt("Enter a number from 1 to 5"));

     var randomNumber = Math.round(Math.random()*5)+1;

    if(gussNumber== randomNumber){
        console.log("you have won");
        numberOfWon++;
    }
    else{
        console.log("you have lost. Random nunmber was " + randomNumber);
        numberOfLost++;
    }

}

document.write("Number of Won :" , numberOfWon , "<br>");
document.write("Nmuber of lost :" , numberOfLost);






