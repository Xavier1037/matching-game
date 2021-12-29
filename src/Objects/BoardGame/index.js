import "./style.css";
import CardFrontBack from "../../components/CardFrontBack";
import cards from "./data.js"

function BoardGame(amountCards){
    
    const swapPlayer = () => {
        const $arrowDown = document.querySelector('.arrow-down');
        const currentPlayer = $arrowDown.getAttribute('data-currentplayer');
        $arrowDown.setAttribute('data-currentplayer',currentPlayer == 1 ? 2 : 1);
    }
    
    window.boardGame = {};
    window.boardGame.handleClick = () => {
        const $boardGame = document.querySelector('.board-game');
        
        const $cardsActive = $boardGame.querySelectorAll(".card-front-back.-active");
        if($cardsActive.length >= 2){
            setTimeout(() => {
                swapPlayer()
            }, 1000);
        } 
        /***********************************************************************/
        
    }
 
    const htmlCardsList = cards.map((card) => CardFrontBack(card.dataType,card.icon, card.altIcon));
    const $htmlCards = htmlCardsList.join('');
    

    

    return /*html*/`
        <section class="board-game" onClick="boardGame.handleClick()">
            ${$htmlCards}
        </section>    
    `
}

export default BoardGame;

//amount número de;
//const $htmlContent = $htmlCardFrontBack.repeat(amountCards);repeat usado para repetir uma string;
//map pecorre a lista

/*const flipAndHideCards = ($cardsActive) => {
        $cardsActive.forEach((card) => card.classList.remove("-active"));       
    }*/
 /*flipAndHideCards($cardsActive)*/
 /*const pointerPlayer = () => {
        const $PlayerScorre = document.querySelector('.player-score');
        const currentPlayer = $PlayerScorre.getAttribute('data-points');
        $PlayerScorre.setAttribute('data-points',currentPlayer == 1 ? 2 : 1);
    }*/