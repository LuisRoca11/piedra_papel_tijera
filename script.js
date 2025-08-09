let humanScore=0;
let computerScore=0;



function getComputerChoice(){

  let num=Math.floor(Math.random()*3);
  if (num===0){
    return "piedra";
  } else if(num===1){
    return "papel";
  } else if (num===2){
    return "tijera";
  }
}


console.log("Ingrese el numnero de la opción:");
console.log("1. Piedra");
console.log("2. Papel");
console.log("3. Tijera");
function getHumanChoice(){

let humano=parseInt(prompt("ingrese su opción"));
if (humano===1){
    return "piedra";
  } else if(humano===2){
    return "papel";
  } else if (humano===3){
    return "tijera";
  } else{
    console.log("Opción lo valida")
  }
}

function playRound(humanChoice, computerChoice){
  if ((humanChoice=="tijera" && computerChoice=="papel") || (humanChoice=="papel" && computerChoice=="piedra") || (humanChoice=="piedra" && computerChoice=="tijera")){
    console.log("Has ganado la ronda");
    return ++humanScore;
    
  } else if ((computerChoice=="tijera" && humanChoice=="papel") || (computerChoice=="papel" && humanChoice=="piedra") || (computerChoice=="piedra" && humanChoice=="tijera")){
    console.log("Has perdido la ronda");
    return ++computerScore;
    
  } else {
    console.log("Has empatado la ronda");
  }
};

const humanSelection=getHumanChoice();
const computerSelection=getComputerChoice();


playRound(humanSelection, computerSelection);

    console.log("SCORE:")
    console.log(`Tu score es: ${humanScore}`);
    console.log(`El score de la compu es: ${computerScore}`);