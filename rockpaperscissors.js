
// create an array with strings
// generate a random number inside the array length
// print out array and use random number var

const rps = ["rock", "paper", "scissors"];

function userChoice(){

    var input = window.prompt("enter a number in between 0 and 2.");
    
    var selection = rps[parseInt(input)];
    
    return selection;

}

function generateCompChoice() {

    

    let result = Math.floor(Math.random()*rps.length);

    console.log(rps[result]);

    return rps[result];
}

function compareChoices(computer, user){


    console.log("you chose " + user + "computer chose" + computer);
    

   if (computer == user){
     return "you tied!";
     
    
   } else if (computer == "rock" && user == "paper"){
       //user wins
       return "you win!";

   } else if (computer == "rock" && user == "scissors"){
       //computer wins
       return "you lose :(";
   } else if (computer == "paper" && user == "rock"){
       //computer wins
       return "you lose :(";

  }else if (computer == "paper" && user == "scissors"){
       //user wins
       return "you win!";

   }else if (computer == "scissors" && user == "paper"){
       //computer wins
       return "you lose :(";

   }else if (computer == "scissors" && user == "rock"){
       //user wins
       return "you win!";

   }

 };

 function playGame(){
     let user = userChoice();
     let computer = generateCompChoice();
     let process = compareChoices(computer, user);

     return process;
 }

 console.log("call playGame to play");

 
