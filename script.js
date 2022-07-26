// const nome =  prompt("Qual é o seu nome?");
// const nomeMaiusculas =  nome.toUpperCase()
// console.log(nomeMaiusculas)
// const cor = prompt("Qual é sua cor favorita");
// const citacao = prompt("Qual é sua citação favorita");

// const stringConcatenada = "A cor favorita de " +nomeMaiusculas+ " é " +cor+ " e a citação favorita é \"" +citacao+ "\"."
// console.log(stringConcatenada)

// const templateString = `Nome: ${nomeMaiusculas} \nCor favorita: ${cor}`
// console.log(templateString)

// const tamanho  =  nome.lenght
// console.log("o seu nome tem", tamanho, "caracteres")

// const temA = nomeMaiusculas.includes("A")

const nome = prompt("Qual é o seu nome?")
const email = prompt("Qual é o seu email?")
const tamanho = nome.length
const frase = `O email ${email} foi cadastrado com sucesso. \nSeja bem vindo ${nome},
seu nome possui ${tamanho}, letras.`.replaceAll("r", "l")


const templateString = `Nome: ${nome} \nEmail: ${email}`;
const tem = email.includes("@")

console.log(frase, tem, templateString)
