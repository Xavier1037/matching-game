import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack( dataType, icon, altIcon){

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
       
         const flipCard = ($cardFrontBack) => {
            if (lockBoard) return;
            if ($cardFrontBack === secondCard) return;
            
            $cardFrontBack.classList.add('-active');
       
          if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = $cardFrontBack;
            return;
          }
            secondCard = $cardFrontBack;

          checkForMatch();
         }
         const checkForMatch = () => {
            let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
            isMatch ? disableCards() : unflipCards();
        }
              
        const disableCards = () => {
            $cardFrontBack.removeEventListener('click',handleclick);
            firstCard.removeEventListener('click',handleclick);
            /*secondCard.classList.add('-active');*/
            resetBoard();
        }
            
         const unflipCards = () => {
             lockBoard = true;
            setTimeout(() => {
                firstCard.classList.remove('-active');
                secondCard.classList.remove('-active');

                resetBoard();
            }, 800);
        }
        const resetBoard = () => {
            [hasFlippedCard, lockBoard] = [false, false];
            [firstCard, secondCard] = [null, null];
        }

    window.cardFrontBack = {}
    window.cardFrontBack.handleclick = (event) =>{
        const $origin = event.target;
        const $cardFrontBack = $origin.closest('.card-front-back');
        const $FrontBack = document.querySelector('.card-front-back');
        
        const $cardsActive = $FrontBack.querySelectorAll(".card-front-back.-active");
        if($cardsActive.length >= 2){
            setTimeout(() => {
             
                
            }, 1000);
        } 
        flipCard($cardFrontBack)
    }

    return /*html*/`
    <article class="card-front-back" data-framework="${dataType}" onClick="cardFrontBack.handleclick(event)">
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