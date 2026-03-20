let matrix = [
    ["Lucas","Ana","Pedro"],
    ["Maria","João","Carlos"],
    ["Beatriz","Rafael","Sofia"]
]
//acima alterei meu arreio para o contexto de nome de pacientes.

let texto = "";
//acima fiz uma caixinha vazia para guardar nomes.

for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++)
    {
        texto += matrix[i][j] + "<br>";
// agora guarda tudo dentro do texto ao invez do console, adiciona sem apagar o anterior: +=.
    }

}
document.getElementById("resultado").innerHTML = texto;
//Pega um lugar da página no caso o resultado e coloca o conteúdo texto.

function mostrar(){
    let texto = "";

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            texto += matrix[i][j] + "<br>";
        }
    }

    document.getElementById("resultado").innerHTML = texto;
}
