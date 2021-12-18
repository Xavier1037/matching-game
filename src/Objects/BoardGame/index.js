import "./style.css";
import CardFrontBack from "../../components/CardFrontBack";

function BoardGame(amountCards){
    //amount número de;
    const $htmlCardFrontBack = CardFrontBack();
    const $htmlContent = $htmlCardFrontBack.repeat(amountCards);//repeat usado para repetir uma string;

    return /*html*/`
        <section class="board-game">
            ${$htmlContent}
        </section>    
    `
}

export default BoardGame;