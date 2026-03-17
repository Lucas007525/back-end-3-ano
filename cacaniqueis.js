// 🎮 Personagens como objetos (modelagem correta)

let personagens = [
    { nome: "guts", imagem: "guts.png", forca: 90 },
    { nome: "casca", imagem: "casca.png", forca: 70 },
    { nome: "griffith", imagem: "griffith.png", forca: 200 }
];

function jogar() {

    let sorteio1 = Math.floor(Math.random() * personagens.length);
    let sorteio2 = Math.floor(Math.random() * personagens.length);
    let sorteio3 = Math.floor(Math.random() * personagens.length);

    let atacante = personagens[sorteio1];
    let defensor1 = personagens[sorteio2];
    let defensor2 = personagens[sorteio3];

    document.getElementById("img1").src = atacante.imagem;
    document.getElementById("img2").src = defensor1.imagem;
    document.getElementById("img3").src = defensor2.imagem;

    let forcaAtaque = atacante.forca;
    let forcaDefesa = defensor1.forca + defensor2.forca;

    // 🔥 Regras Especiais

    if (atacante.nome === "griffith") {
        forcaAtaque += 20; // bônus de ataque
    }

    if (defensor1.nome === "guts" || defensor2.nome === "guts") {
        forcaDefesa += 15; // bônus defensivo
    }

    // 🧮 Comparação Final

    if (forcaDefesa >= forcaAtaque) {
        document.getElementById("resultado").innerHTML =
            `DEFESA VENCEU! ⚔️<br>
             Ataque: ${forcaAtaque} | Defesa: ${forcaDefesa}`;
    } else {
        document.getElementById("resultado").innerHTML =
            `ATAQUE VENCEU... 💀<br>
             Ataque: ${forcaAtaque} | Defesa: ${forcaDefesa}`;
    }
}

function resetar() {
    document.getElementById("img1").src = "slot.png";
    document.getElementById("img2").src = "slot.png";
    document.getElementById("img3").src = "slot.png";
    document.getElementById("resultado").innerHTML = "Resultado";
}