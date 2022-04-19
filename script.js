
console.log(numero1)

const botaoSortear = document.querySelector("div.box button")
var numeroSorteado = document.querySelector("div.box h2")


function sortear(){
    var roleta = []
    var input1 = document.getElementById("numero1")
    var numero1 = parseInt(input1.value) 
    var input2 = document.getElementById("numero2")
    var numero2 = parseInt(input2.value)
    
    if (!numero1 || !numero2 ) {
        window.alert("Digite os numeros para continuar.")
        return
    }

    for(numero1; numero1 <=numero2; numero1++){
        roleta.push(numero1)
    }
    numeroSorteado.innerHTML = roleta[Math.floor(Math.random() * roleta.length)]
}

botaoSortear.addEventListener("click", () => {
    sortear()
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

 
