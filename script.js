const espada = document.getElementById("espada");
const bola = document.getElementById("bola");
const pontosTexto = document.getElementById("pontos");

let espadaY = 200;

let bolaX = 700;
let bolaY = 250;

let velocidadeX = -5;
let velocidadeY = 3;

let pontos = 0;

document.addEventListener("keydown", (e) => {

    if (e.key === "w") {
        espadaY -= 20;
    }

    if (e.key === "s") {
        espadaY += 20;
    }

    if (espadaY < 0) espadaY = 0;
    if (espadaY > 400) espadaY = 400;

    espada.style.top = espadaY + "px";
});

function atualizar() {

    bolaX += velocidadeX;
    bolaY += velocidadeY;

    // teto e chão
    if (bolaY <= 0 || bolaY >= 480) {
        velocidadeY *= -1;
    }

    const espadaRect = espada.getBoundingClientRect();
    const bolaRect = bola.getBoundingClientRect();

    // colisão com a espada
    if (
        bolaRect.left < espadaRect.right &&
        bolaRect.right > espadaRect.left &&
        bolaRect.top < espadaRect.bottom &&
        bolaRect.bottom > espadaRect.top
    ) {

        velocidadeX *= -1;

        pontos++;
        pontosTexto.textContent = pontos;
    }

    // parede direita
    if (bolaX >= 780) {
        velocidadeX *= -1;
    }

    // perdeu
    if (bolaX <= 0) {
        alert("Game Over! Pontos: " + pontos);
        location.reload();
    }

    bola.style.left = bolaX + "px";
    bola.style.top = bolaY + "px";

    requestAnimationFrame(atualizar);
}

atualizar();