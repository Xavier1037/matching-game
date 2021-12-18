import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack(){

    window.cardFrontBack = {}
    window.cardFrontBack.handleclick = (event) =>{
        const $origin = event.target;//ver o atributo que esta sendo chamado.
        const $cardFrontBack = $origin.closest('.card-front-back');

        $cardFrontBack.classList.toggle('-active');//ver ser tem uma serta class => se tiver ela retira e se não tiver ela adiciona.
    }

    return /*html*/`
    <article class="card-front-back" onClick="cardFrontBack.handleclick(event)">
        <div class="card -front">
            ${CardGame()}
        </div>
        <div class="card -back">
            ${CardGame("javascript", "logo do javascript")}
        </div>
    </article>
    `;
}

export default CardFrontBack;
