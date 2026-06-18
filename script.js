const jogador = document.getElementById("jogador");

let x = 200;
let y = 200;

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") x += 10;
    if (e.key === "ArrowLeft") x -= 10;
    if (e.key === "ArrowUp") y -= 10;
    if (e.key === "ArrowDown") y += 10;

    jogador.style.left = x + "px";
    jogador.style.top = y + "px";
});