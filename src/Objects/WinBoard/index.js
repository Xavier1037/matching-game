
import PlayerWin from '../../components/PlayerWin';
import WinText from '../../components/WinText';
import './style.css';



function WinBoard(){
    return/*html*/`
    <section class="win-board">
        ${PlayerWin("player")}
        ${WinText("Winner!!!")}
        <img src="./images/Archievement.png">
        <input class="start-button"type="button" value="Start">
    </section>
    `;
}

export default WinBoard;