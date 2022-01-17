
function heroi(){
    while(x != 1 || x!= 2 || x!= 3){
     var x = Number(prompt("Escolha"))
      if( x === 1){
          window.location.href ="./1Paladino/1ª pagina do Paladino.html";
        break
      }
      else if(x === 2){
          window.location.href = "./1Vampiro/1ª Pagina do Vampiro.html"
        break
      }
      else if(x === 3){
        window.location.href = "./1Aprendiz/1ª pagina do Aprendiz.html"
        break
      }
      else{
        alert("Digite 1 , 2 ou 3 como foi pedido");
      } 
  }
}