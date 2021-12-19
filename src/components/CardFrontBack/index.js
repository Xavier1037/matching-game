import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack( icon, altIcon){

    window.cardFrontBack = {}
    window.cardFrontBack.handleclick = (event) =>{
        const $origin = event.target;
        const $cardFrontBack = $origin.closest('.card-front-back');

        $cardFrontBack.classList.toggle('-active');
    }

    return /*html*/`
    <article class="card-front-back" onClick="cardFrontBack.handleclick(event)">
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