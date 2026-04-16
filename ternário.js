/*============================================
Colégio Antonio de Moraes Barros
Professor; Edson F Alves
Curso técnico:
10 EXERCÍCIOS COM OPERADOR TERNÁRIO
Instrução: Resolva usando operador ternário (? :)
============================================*/

/*EXERCÍCIO 1 (Fácil)
Verifique se um número é positivo ou não.*/
let numero = 5;
let resultado = numero > 0 ? "Positivo" : "Negativo";
console.log(`O número  ${numero} é: ${resultado}`);


/*EXERCÍCIO 2 (Fácil)
Verifique se uma pessoa pode votar.
- Se sim, retorne "Pode votar"- Se não, "Não pode votar"*/

let idade = 18;
let podevotar = idade >=16 ? "Pode Votar" : "Não pode votar";
console.log(`Com ${idade} anos: ${podeVotar}`);

/*EXERCÍCIO 3 (Fácil)
Descubra se um número é par ou ímpar.
- Se par, retorne "Par"- Se ímpar, retorne "Ímpar"*/
let num = 7;
let parOuimpar = num % 2 === 0 ? "par": "impar";
console.log(`${num} é: ${parOuimpar}`);

/*EXERCÍCIO 4 (Fácil)
Crie uma verificação de nível de acesso.
- Se nível for "admin", retorne "Acesso total"
- Caso contrário, "Acesso restrito"*/
console.log("===Exercício 4===");
let nivel = "admin";
let acesso = nivel === "admin" ? "Acesso total": "Acesso Restrito";
console.log(`Nivel ${nivel} : ${acesso}`); 

/*EXERCÍCIO 5 (Médio-Fácil)
Aplique desconto em um produto.
- Se preço > 100, aplique 10% de desconto (multiplicar por 0.9)
- Caso contrário, mantenha o preço original*/
console.log("===Exercício 5===");
let preco = 90;
let precototal = preco > 100 ? preco * 0.9 : preco;
console.log(`Preço original: R$ ${preco}, com desconto R${precototal}`);

/*EXERCÍCIO 6 (Médio-Fácil)
Classifique a situação do aluno baseado na média.
- Se nota >= 7, retorne "Aprovado"
- Caso contrário, "Reprovado"*/
console.log("===Exercício 6===");
let nota = 7.5;
let statusAluno = nota >=7 ? "Aprovado" : "Reprovado";
console.log(`Nota ${nota}: ${statusAluno}`);
/*EXERCÍCIO 7 (Médio)
Verifique se um número é par E maior que 10.
- Se sim, retorne "Atende critérios"
- Se não, "Não atende"*/
console.log("===Exercício 7===");
let valor = 12;
let resultado1 = valor % 2 === 0 && valor > 10 ? "Atende aos critérios" : "Não atende"
console.log(`Valor ${valor}: ${resultado}`);

/*EXERCÍCIO 8 (Médio)
Classifique o número em positivo, negativo ou zero.
- Se > 0: "Positivo"
- Se < 0: "Negativo"
- Se = 0: "Zero"*/
console.log("===Exercício 8===");
let num2 = -3;
let tipo = num2 >0 ? "Positivo" : num2 <0 ? "Negativo": "Zero";
console.log(`${num2} é: ${tipo}`);
/*EXERCÍCIO 9 (Médio)
Simule um login simples.
- Se usuario for "admin" E senha for "123", retorne "Login OK"
- Caso contrário, "Falha no login"*/
console.log("===Exercício 9===");
let usuario = "admin";
let senha = "123";
let login = usuario === "admin" && senha === "123" ?  "LoginOK": "Falha no login" ; 
console.log(login);

/*EXERCÍCIO 10 (Médio)
Classifique a pessoa por idade:
- Menor que 12: "Criança"
- Entre 12 e 17: "Adolescente"
- Entre 18 e 59: "Adulto"
- 60 ou mais: "Idoso"*/
console.log("===Exercício 10 ===");
let idadePessoa = 51;
let classificacao = idadePessoa < 12 ? "Criança":
idadePessoa <= 17 ? "Adolecente":
idadePessoa <= 59 ? "adulto" : "idoso";
console.log(`Idade ${idadePessoa}:${classificacao}`);