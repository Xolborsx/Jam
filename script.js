const jogador = document.getElementById("jogador");
const moeda = document.getElementById("moeda");
const pontosTexto = document.getElementById("pontos");

let x = 0;
let y = 0;
let pontos = 0;

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowRight") x += 10;
    if (e.key === "ArrowLeft") x -= 10;
    if (e.key === "ArrowUp") y -= 10;
    if (e.key === "ArrowDown") y += 10;

    // Bordas da arena
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > 560) x = 560;
    if (y > 360) y = 360;

    jogador.style.left = x + "px";
    jogador.style.top = y + "px";

    verificarColisao();
});

function verificarColisao() {

    const jogadorRect = jogador.getBoundingClientRect();
    const moedaRect = moeda.getBoundingClientRect();

    if (
        jogadorRect.left < moedaRect.right &&
        jogadorRect.right > moedaRect.left &&
        jogadorRect.top < moedaRect.bottom &&
        jogadorRect.bottom > moedaRect.top
    ) {

        pontos++;
        pontosTexto.textContent = pontos;

        const novaX = Math.random() * 550;
        const novaY = Math.random() * 350;

        moeda.style.left = novaX + "px";
        moeda.style.top = novaY + "px";
    }
}
