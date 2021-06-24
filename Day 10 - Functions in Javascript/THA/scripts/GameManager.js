//TODO : Add performance section displaying - moves, accuracy, scores, and a timer . Some cumulative scoring mechanism will be add on.
//TODO : Beautify with CSS and animations
//TODO : Add sounds and finishing
//TODO : Stats have colours

// alert("Website is still in BETA and there is a load of space for optimizations and improvements . Hence, depending on your device you may not have a pleasant experience.")

console.log("--------------------------------");
console.log("|    HELLO CHEATER !! 👋👋     |");
console.log("--------------------------------");

const STOCK_IMAGES_LIST_ADDRESSES = [];

let score = 0;
let cards = document.getElementsByClassName("card");
let cardTypes= [];


const allocateCardTypes = () => {

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

    numberOfCards = cards.length;
    tempAllocList = []
        
    for(let i = 0; i < numberOfCards/2; i++) 
        tempAllocList.push(2);

    for(i = 0; i < numberOfCards; i++) {
    
        var genNumber = getRandomNumber(0, numberOfCards/2 - 1);
            
        if(tempAllocList[genNumber] > 0) {
            tempAllocList[genNumber]--;
            cardTypes.push(genNumber);
        }
        
        else
            for(let i = 0; i < tempAllocList.length; i++)
                if(tempAllocList[i] !== 0) {
                    tempAllocList[i]--;
                    cardTypes.push(i);
                }
        }

        for(let i = 0; i < cardTypes.length; i++) {
            cards[i].classList.add("cardType"+cardTypes[i]);
        }

    return undefined;
};

allocateCardTypes();


let numberOfMoves = 0;
let cardsCanBeFlipped = true;
let updateScore = true;

for(let i = 0; i < cards.length; i++)
    cards[i].addEventListener("click", () => {
        
        numberOfMoves++;
        document.getElementsByClassName("moves-container")[0].innerHTML = numberOfMoves;

        updateCardsCanBeFlipped(); 
        
        if(cardsCanBeFlipped) {
            cards[i].classList.add("front-facing");
            // cards[i].classList.add("cardType"+cardTypes[i]);
        }
        
        
        checkAndUpdateScore();

    });

const updateCardsCanBeFlipped = () => {
    
    if(document.getElementsByClassName("front-facing").length >= 2)
        cardsCanBeFlipped = false;

    else 
        cardsCanBeFlipped = true;
        
}

const checkAndUpdateScore = () => {

    let frontFacingCards = document.getElementsByClassName("front-facing");

    if(frontFacingCards.length === 2) {

        if(frontFacingCards[0].classList.value === frontFacingCards[1].classList.value) {
            
            score+= 10;
            console.log("SUCCESS ITS A MATCH ");
            document.getElementsByClassName("score-container")[0].innerHTML = score;
            
            frontFacingCards[0].classList.toggle("hidden-Card");
            frontFacingCards[1].classList.toggle("hidden-Card");
        }

        else {
            console.log("TRY AGAIN           || SCORE = " + score);
            
            
        }
        frontFacingCards[0].classList.toggle("front-facing");
        frontFacingCards[0].classList.toggle("front-facing"); // 0 chala gya to 1 hi 0 ban gaya
    }

}


