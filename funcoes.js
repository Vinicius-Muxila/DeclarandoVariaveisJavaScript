let x = "";
console.log(x);
x = "oi";

function imprimiTexto(texto) {
    console.log(texto)
}

imprimiTexto("Oi");
imprimiTexto("Outro Texto")

function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(2, 6))

function nomeIdade (nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade} anos.`;
}

console.log(nomeIdade("Vinicius", 30))

function multiplica(num1 = 1, num2 = 1) {
    return num1 * num2;
}

console.log(multiplica(soma(2, 3), soma(5,6)))

function comParametro(param) {
    return "param"
}
console.log(comParametro)

// arrow function

const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

const somaNumerosAbaixoDeDez = (num1, num2) => {
    if (num2 > 10 || num2 > 10) {
        return "Somente numeros de 1 a 9"
    } else {
        return num1 + num2
    }
}


