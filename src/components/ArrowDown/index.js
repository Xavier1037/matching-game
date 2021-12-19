import "./style.css";

function ArrowDown(currentPlayer = 1){
    return /*html*/`
    <img class="arrow-down" data-currentplayer ="${currentPlayer}"
    src="images/IconArrowDown.png" 
    alt="Icone de uma Seta para baixo">
    `;
}

export default ArrowDown;