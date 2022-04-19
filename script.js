var input1 = document.getElementById("numero1")
var nnumero1 = parseInt(input1.value) 
var input2 = document.getElementById("numero2")
var nnumero2 = parseInt(input2.value)
console.log(numero1)

const botaoSortear = document.querySelector("div.box button")
var numeroSorteado = document.querySelector("div.box h2")
var roleta = []

for(input1; input1 <=input2; input1++){
    roleta.push(input1)
}

botaoSortear.addEventListener("click", () => {
    numeroSorteado.innerHTML = "O numero sorteado é: " + roleta[Math.floor(Math.random() * roleta.length)]

})

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
  }
  const titulo = document.querySelector('h1');
  typeWriter(titulo);

 
