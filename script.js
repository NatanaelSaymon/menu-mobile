
//Esse menu mobile pode ser feito das duas formas!

//Forma - 1 (Está é a forma que esta sendo usada nesse projeto)
document.querySelector('#icon').addEventListener("click", function(){
  document.getElementById('btn').classList.toggle('show') //coloca e retira classe show

  //Ao clicar em um link do menu, a classe .show será removida
  var links = document.querySelectorAll('.menu-principal li a')
  for(i=0; i < links.length; i++){
    links[i].onclick = function(){
      document.getElementById('btn').classList.remove('show')
    }
  }
})

// Forma - 2 (Para ativar a forma 2, basta inserir o evento de click com o nome da função onclick="menuMobile()" na tag <i>)
// function menuMobile(){
//   document.getElementById('btn').classList.toggle("show")
//   var links = document.querySelectorAll('.menu-principal li a')
//   for(i=0; i < links.length; i++){
//    links[i].onclick = function(){
//     document.getElementById('btn').classList.remove('show')
//    }
//   }
// }

