// aqui va todo lo del manejo DOM

const resultadoPais =  document.getElementById("showme");


const showData = (WORLDBANK) => {
  let result = '';
  //console.log(WORLDBANK)
     WORLDBANK.forEach(element => {
        // element --> DATA[i]
        //console.log(element.house);
        if (element.data === '') {
          result = resultadoPais.innerHTML += `
          <h3>NO aplica</h3>
          <p>datos por integrar</p>`
        }
      })