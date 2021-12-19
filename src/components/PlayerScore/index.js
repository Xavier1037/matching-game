import "./style.css";

function PlayerScore(points = 0){
    return /*html*/`
        <ol class="player-score" data-points="${points}">
            <li class="pointer">Um</li>
            <li class="pointer">Dois</li>
            <li class="pointer">Três</li>
        </ol>
    `;//ol li lista ordenada.//data- usado para criar propriedades html.
}

export default PlayerScore;