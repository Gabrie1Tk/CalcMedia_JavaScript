function calcMedia() {
    let n1 = prompt("Digite o primeiro número:");
    let n2 = prompt("Digite o segundo número:");
    let n3 = prompt("Digite o terceiro número:");
    let n4 = prompt("Digite o quarto número:");

    n1 = Number(n1);
    n2 = Number(n2);
    n3 = Number(n3);
    n4 = Number(n4);

    let media = (n1 + n2 + n3 + n4) / 4;

    console.log(`Números usados: ${n1}, ${n2}, ${n3}, ${n4}`);
    console.log("A média dos números é: " + media);
}
