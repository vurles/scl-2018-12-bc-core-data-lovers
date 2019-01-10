// creo una variable para almacenar mi data
//const dataBank = WORLDBANK.worldbank;

//const nombrePais = (dataBank) => {
//  console.log(dataBank);
//}

const WORLDBANK = [
{
	"countryName": "Perú",
	"countryCode": "PER",
	"indicatorName": "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)",
	"indicatorCode": "SL.TLF.PART.FE.ZS"

}
] 

const indicatorsNames = (searchCountry) => {   //searchCountry (condición)
	console.log(searchCountry);
	let names = [];
  for (let i = 0; i < searchCountry.indicators.length; i++) { //searchCountry
  	let nameIndicator = searchCountry.indicators[i];
  	@@ -55,7 +54,7 @@ const dataForYear = (searchCountry, nameIndicator, almacenarObjetoData) => {
  		otherObject.push(newObject);
  	}
  }
  console.log(otherObject.length);

  return otherObject; //retorno el arreglo de objetos para luego tomarlo desde el archivo main.js y hacer la visualización de datos con el DOM
}
window.dataForYear = dataForYear;