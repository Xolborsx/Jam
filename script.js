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
});
