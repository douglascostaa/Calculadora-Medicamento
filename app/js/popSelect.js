async function getContent(api, id) {
  var response = await fetch(api);


  var data = await response.json();  //Guardando dados da api na variaveis 
  var element = document.getElementById(id);


  for (var i = 0; i < data.length; i++) {  //Estr. de rep. para percorrer o MockApi JSON

    element.innerHTML = `${element.innerHTML}<option value=${data[i]['id']}>${data[i]['name']}</option>`;
  }
}

getContent('https://611e96c49771bf001785c54d.mockapi.io/api/v1/medicamentos', 'select-medicamento'); //Chamada da função para pegar os dados da api de medicamentos e alimentar o select
getContent('https://611e96c49771bf001785c54d.mockapi.io/api/v1/marcas', 'select-marca'); //Chamada da função para pegar os dados da api de marcas e alimentar o select