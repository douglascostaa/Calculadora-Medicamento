
var calculaBotao = document.querySelector(".calcular"); //variaver que recebe a classe do botao calcular;


document.getElementById("saidas").hidden = true; //utilizando hidden para ocultar a div dos resultados;


calculaBotao.addEventListener("click", function (event) { //função para escutar o click no botao


  document.getElementById("saidas").hidden = false; //utilizando hidden para exibir a div dos resultados;


  event.preventDefault(); //função para deixar o formulario estático após o click;
  exibeResultado();

})

var boataoReset = document.querySelector("#novoCalculo");
boataoReset.addEventListener("click", function (event) {
  document.getElementById("saidas").hidden = true;
});

function exibeResultado() {
  var diluicao = document.querySelector("#diluicao");
  var resultado = document.querySelector("#resultado");

  diluicao.textContent = `Diluir o pó em 2ml e misturar;`;
  resultado.textContent = "=> 5,34ml <= ";
}

