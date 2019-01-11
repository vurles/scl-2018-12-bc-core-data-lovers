
/*function buscarPais () {
	let selectCountry = document.getElementById("selectCountry").value;
	document.getElementById("selectCountry").addEventListener("click",
		(event) => {
			event.preventDefault();
}  
}*/ 

window.onload = () => {
	document.getElementById("button_buscar").addEventListener("click",(event) => {
		let selectCountry = document.getElementById("selectCountry").value;
		let selectIndicator = document.getElementById("selectIndicator").value;
		let selectDateOne = document.getElementById("date-one").value;
		let selectDateTwo = document.getElementById("date-two").value;
		console.log({selectCountry,selectIndicator,selectDateOne,selectDateTwo});

		
		console.log(data_bank["PER"]);

		
	});  

}
	
//`src/data.js`:
//* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la data, y nos retornaría aquellos datos que sí cumplan con la condición.

//sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar recibe tres parámetros. 
//El primer parámetro, `data`, nos entrega los datos.
//El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de la data se quiere ordenar.
//El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera ascendente o descendente.
	

	//document.getElementById("selectCountry").addEventListener("click",
	//	(event) => {
	//		event.preventDefault();

	//		let selectCountry = document.getElementById("selectCountry").value;
	//	})


//}

