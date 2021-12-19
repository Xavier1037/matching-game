import "./style.css"

function VsPlayer(content = "Vs"){
    return /*html*/`
    <span class="vs-player">
        ${content}
    </span>
    `;
}

export default VsPlayer;