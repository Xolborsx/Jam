const jogador = document.getElementById("jogador");

let x = 200;
let y = 200;

document.addEventListener("keydown", (e) => {
    if (e.key === "d") x += 10;
    if (e.key === "a") x -= 10;
    if (e.key === "w") y -= 10;
    if (e.key === "s") y += 10;

    jogador.style.left = x + "px";
    jogador.style.top = y + "px";

    const jogador = document.getElementById("jogador");

let x = 200;
let y = 200;

const larguraTela = window.innerWidth;


    // Limites
    if (x < 0) x = 0;
    if (y < 0) y = 0;

    if (x > larguraTela - 50) x = larguraTela - 50;
    if (y > alturaTela - 50) y = alturaTela - 50;

    jogador.style.left = x + "px";
    jogador.style.top = y + "px";
  
});
