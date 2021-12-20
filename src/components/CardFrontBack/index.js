import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack( dataType, icon, altIcon){

        let hasFlippedCard = false;
        let firstCard, secondCard;
        let lockBoard = false;

        const flipCard = ($FrontBack) => {
            const that = $FrontBack.closest('.card-front-back');
            if(lockBoard)return;
            if (that === firstCard) return;
           that.classList.add("-active");
            
           if(!hasFlippedCard){
               hasFlippedCard = true;
               firstCard = that;
               return;
           }

           secondCard = that;
          

           checkForMatch();
        }
        function checkForMatch() {
            if (firstCard.dataset.framework === secondCard.dataset.framework) {
              disableCards();
              return;
            }
         
            unflipCards();
          }
         
          function disableCards() {
            firstCard.removeEventListener('click', cardFrontBack.handleclick());
            secondCard.removeEventListener('click',cardFrontBack.handleclick());
            resetBoard();
          }
         
          function unflipCards() {
              lockBoard = true;
            setTimeout(() => {
              firstCard.classList.remove('-active');
              secondCard.classList.remove('-active');
              resetBoard();
            }, 1500);
          }
          function resetBoard() {
            [hasFlippedCard, lockBoard] = [false, false];
            [firstCard, secondCard] = [null, null];
          }
    
    

    window.cardFrontBack = {}
    window.cardFrontBack.handleclick = () =>{
        /*const $origin = event.target;*/
        /*const $cardFrontBack = $origin.closest('.card-front-back');*/
        const $FrontBack = document.querySelector('.card-front-back');
        
        const $cardsActive = document.querySelectorAll(".card-front-back.-active");

        if($cardsActive.length >= 2){
            setTimeout(() => {
             
                
            }, 1000);
        } 
        flipCard($FrontBack)
    }

    return /*html*/`
    <article class="card-front-back" data-framework="${dataType}" onClick="cardFrontBack.handleclick()">
        <div class="card -front">
            ${CardGame()}
        </div>
        <div class="card -back">
            ${CardGame(icon, altIcon)}
        </div>
    </article>
    `;
}

export default CardFrontBack;

//ver o atributo que esta sendo chamado.
//ver ser tem uma serta class => se tiver ela retira e se não tiver ela adiciona.

/*const shuffle = () => {
                cards.forEach(card => {
                  let ramdomPos = Math.floor(Math.random() * 12);
                  card.style.order = ramdomPos;
                });
              }; tentativa de randomizar as cartas*/
/*import PlayerScore from "../PlayerScore";*/
/*PlayerScore(2)*/