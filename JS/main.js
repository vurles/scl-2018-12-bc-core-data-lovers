// aqui va todo lo del manejo DOM
const resultadoPais = nombrePais(dataBank); // guardo en la constante el resultado de mi función nombrePokemones (lo que está retornando)
//console.log(resultadoNombres);

//llamo al evento click atraves de addEvent..... y le paso mi funcion
document.getElementById('toShow').addEventListener('click', () => {

  document.getElementById('ejemplo').innerHTML = ''; // limpio el div cada vez que se hace click

  for (let i = 0; i < resultadoPais.length; i++) {
    document.getElementById('ejemplo').innerHTML += '<p>' + resultadoPais[i] + '</p>'; // imprimo en el HTML cada nombre que está dentro de cada posición del arreglo.
  }

})