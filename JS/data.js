// creo una variable para almacenar mi data

//const data = (WORLDBANK);

//console.tabla(WORLDBANK);

//const filterCountry = (WORLDBANK, condition) => {
//Devuelve los elementos de una matriz que cumplen la condición especificada 
const population = WORLDBANK.PER.indicators.filter(pop => {
  return pop.indicatorCode.slice(0, 6) === 'SP.POP';
});

