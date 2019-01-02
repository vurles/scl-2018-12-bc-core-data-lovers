// creo una variable para almacenar mi data

let data =;
// ahora debo convertir la data en array ya que esta construida en objetos

//Se inicializa mi data 
function initData() {
  data = convertObjectToArray(WORLDBANK);
  console.log(data);
