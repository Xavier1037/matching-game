import "./style.css"
import PlayerName from "../../components/PlayerName";
import VsPlayer from "../../components/VsPlayer";
import PlayerScore from "../../components/PlayerScore";
import ArrowDown from "../../components/ArrowDown";

function ScoreBoard(){
    return /*html*/ `
    <header class="score-board">
        ${ArrowDown()}
        ${PlayerName("Player1")}
        ${PlayerScore()}
        ${VsPlayer("Vs")}
        ${PlayerScore()}
        ${PlayerName("Player2")}
    </header>
    `;
}

export default ScoreBoard;