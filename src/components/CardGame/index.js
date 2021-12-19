import "./style.css";

function CardGame(icon = "alura-pixel",alt = "logo da alura"){
    return /*html*/`
    <article class="card-game">
        <img src="images/${icon}.png" alt=${alt}>
    </article>
`;
}

export default CardGame;

/*fallback garante que sempre vai ter um valor*/