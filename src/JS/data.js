// creo una variable para almacenar mi data
const dataBank = WORLDBANK.worldbank;

const nombrePais = (dataBank) => {
  console.log(dataBank);
let data =;
// ahora debo convertir la data en array ya que esta construida en objetos

//Se inicializa mi data 
function initData() {
  data = convertObjectToArray(WORLDBANK);
  console.log(data);
}
