// aqui va todo lo del manejo DOM
//const resultadoPais = nombrePais(dataBank); // guardo en la constante el resultado de mi función nombrePokemones (lo que está retornando)
//console.log(resultadoNombres);

//llamo al evento click atraves de addEvent..... y le paso mi funcion
//document.getElementById('toShow').addEventListener('click', () => {

//  document.getElementById('ejemplo').innerHTML = ''; // limpio el div cada vez que se hace click

//  for (let i = 0; i < resultadoPais.length; i++) {
//    document.getElementById('ejemplo').innerHTML += '<p>' + resultadoPais[i] + '</p>'; // imprimo en el HTML cada nombre que está dentro de cada posición del arreglo.
//  }
//})

//console.table (WORLDBANK)

const containerRoot = document.getElementById('root');
const showData = (WORLDBANK) => {
	//console.log(WORLDBANK)
	WORLDBANK.forEach(element => {
        // element --> WORLDBANK[i]
        console.log(element.data);
        
});
	
}

//showData(DATA);
window.onload =showData(WORLDBANK);












//document.getElementById("start").addEventListener("click",
//(event) => {
//event.preventDefault();

//document.getElementById("page1").style.display="none";
//document.getElementById("page2").style.display="block";

//document.getElementById("page3").style.display="none";
//})

//document.getElementById('select').addEventListener("change",()=>{

//document.getElementById('root').innerHTML=''
// let condicion=document.getElementById('select').value;
//  for(let i=0; i<filter(datos,condicion).length;i++){
//      document.getElementById('root').innerHTML += `
//      <div class="card ">
//      <div class="col s2 m2">
    
//        <div class="card-image">
//          <img class="responsive-img" src="${filter(datos,condicion)[i]["splash"]}" alt="" HSACE="10" VSPACE="20" width="10" >
//        </div>
//        <div class="card-title center">
          
//          <span class="card-title center">${filter(datos,condicion)[i]["id"]}</span>
          
//        </div>
//      </div>
//    </div> `
//}
//});