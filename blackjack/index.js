let firstnum = getrandom();
let secondnum = getrandom();
let displayEL = document.getElementById("display-el");
let cardsEL = document.getElementById("cards-el");
let sumEL = document.getElementById("sum-el");
let arr = [];
let outgameEL = document.getElementById("out_game");
let cash_checkEL = document.getElementById("cash_check");
let sum = 0;
let message = "";
let cash = false;
let isalive = false;
let gotblackjack = false;
console.log(displayEL);

const player = {
    name: "dwij",
    price: 150
    
}

function myfunction(){
    let firstcard = firstnum;
    let secondcard = secondnum;
    isalive = true;
    arr.push(firstcard);
    arr.push(secondcard);
    sum = arr[0] + arr[1];
    rendergame();
    
}

function getrandom(){
    let randomnumber = Math.floor(Math.random()*13)+1;
    if(randomnumber > 10){
        return 10;
    }else if(randomnumber === 1){
        return 11;
    }else{
        return randomnumber;
    }
}

function rendergame(){
     
     cardsEL.textContent = "Cards:";
     for(let i=0 ; i<arr.length ; i++){
         cardsEL.textContent += arr[i] + " ";
         
     }
     sumEL.textContent = "Sum:" + sum;
    if(sum < 21){
        message = "do you want to pick another card";
       
        
    }else if(sum === 21){
        message = "you got blackjack!";
        cash = true;
        gotblackjack = true;
    
    }else{
        message = "you are out of game";
        isalive = false;
    }
    
    displayEL.textContent = message;
    //CASH OUT
   
}

function game_over(){
    if(isalive === true && gotblackjack === false){
        rendergame();
    }
}

cash_checkEL.textContent = player.name + ": " + "$" + player.price;

function getcash(){
    if(cash === true){
        outgameEL.textContent = "You got the money";
    }else if(sum > 21){
        cash_checkEL.textContent = player.name + ":" + "$" + 0;
    }
}

function  pick_card(){
    let v = getrandom();
    arr.push(v);
    sum = sum + v;
   
    game_over();
    getcash();
    
}



