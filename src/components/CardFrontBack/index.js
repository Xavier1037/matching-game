import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack( dataType, icon, altIcon){


        
    window.cardFrontBack = {}
    window.cardFrontBack.handleclick = (event) =>{
        const $origin = event.target;
        const $cardFrontBack = $origin.closest('.card-front-back');
        const $FrontBack = document.querySelector('.card-front-back');
        const $cards = document.querySelectorAll('.card-front-back');
        const $cardsActive = document.querySelectorAll(".card-front-back.-active");
        
        let hasFlippedCard = false;  
        let firstCard, secondCard;

        $cards.forEach(card => card.addEventListener('click',function(){

            this.classList.add("-active");
           if(!hasFlippedCard){
            hasFlippedCard = true;
            firstCard = this;
            return;
           }
           secondCard = this;
           hasFlippedCard = false;

           if (firstCard.dataset.framework === secondCard.dataset.framework){
            
           }else{
            setTimeout(() => {
              firstCard.classList.remove("-active");
              secondCard.classList.remove("-active");
            }, 1000);
           }
           
          }

          ));
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

