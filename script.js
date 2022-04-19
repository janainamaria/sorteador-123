const botaoSortear = document.querySelector("div.box button")
var numeroSorteado = document.querySelector("div.box h2")
var roleta = []

for(i = 0; i <=50; i++){
    roleta.push(i)
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
