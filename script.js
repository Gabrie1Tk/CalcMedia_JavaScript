
    alert ("Seja bem-vindo ao jogo da Média do 4, Você ira inserir 4 números!!");

    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número:"));
    let n3 = Number(prompt("Digite o terceiro número:"));
    let n4 = Number(prompt("Digite o quarto número:"));

    let media = (n1 + n2 + n3 + n4) / 4;

    console.log(`Números usados: ${n1}, ${n2}, ${n3}, ${n4}`);
    console.log("A média dos números é: " + media);
