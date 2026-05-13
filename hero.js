function lutar() {
    // Pegando os valores da tela
    let classe = document.getElementById("classe").value;
    let arma = document.getElementById("arma").value;
    let dado = Math.floor(Math.random() * 20) + 1;
    
    let elementoResultado = document.getElementById("resultado");
    let mensagem = "";

    // Lógica do Switch (Igual à anterior, mas guardando na variável 'mensagem')
    switch (classe) {
        case "Guerreiro":
            if (arma === "Espada" && dado > 5) {
                mensagem = `[Dado: ${dado}] SUCESSO: Você decapitou o inimigo!`;
            } else if (arma !== "Espada" && dado > 12) {
                mensagem = `[Dado: ${dado}] SUCESSO: Venceu na força bruta!`;
            } else {
                mensagem = `[Dado: ${dado}] DERROTA: O Goblin te acertou uma paulada!`;
            }
            break;

        case "Mago":
            if (dado === 20) {
                mensagem = `[Dado: 20] CRÍTICO: Explosão Arcana instantânea!`;
            } else if (arma === "Cajado" && dado > 8) {
                mensagem = `[Dado: ${dado}] SUCESSO: Magia purificadora!`;
            } else {
                mensagem = `[Dado: ${dado}] DERROTA: Você esqueceu o feitiço!`;
            }
            break;

        case "Arqueiro":
            if (arma === "Arco" && dado > 10) {
                mensagem = `[Dado: ${dado}] SUCESSO: Flecha certeira!`;
            } else {
                mensagem = `[Dado: ${dado}] DERROTA: Você errou o tiro!`;
            }
            break;

        default:
            mensagem = "Classe inválida!";
    }

    // Exibindo na tela
    elementoResultado.innerText = mensagem;
}