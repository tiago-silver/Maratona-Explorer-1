const elementoResposta = document.querySelector("#resposta")
const elementoPergunta= document.querySelector("#inputPergunta")
const buttomPerguntar= document.querySelector ("#botaoPerguntar")
const mensagem= [
 "Certeza!",
 "não tenho tanta certeza.",
 "É decididamente assim",
 "Não conte com isso.",
 "Sem dúvidas!",
 "Pergunte novamente mais tarde.",
 "Sim, definitivamente!",
 "Minha resposta é não.",
 "Você pode contar com isso.",
 "Melhor não te dizer agora.",
 "Ao meu ver,sim.",
 "Minhas fontes dizem que não.",
 "Provavelmente",
 "Não é possível prever agora.",
 "Perspectiva boa.",
 "As perspectivas não são tão boas.",
 "Sim.",
 "Concentre-se  e pergunte novamente.",
 "Sinais apontam que sim.",
]

 function fazerPergunta(){
   
    if(elementoPergunta.value ==""){
     alert("Digite uma mensagem!!!");
     return
    }
    buttomPerguntar.setAttribute("disabled",true)
    
    const pergunta = "<div>"+ elementoPergunta.value + "</div>"
     
   //Gerar número aleatório...
  const totResposta =mensagem.length;
  const numAleatorio = Math.floor(Math.random()*totResposta)
   
   elementoResposta.innerHTML= pergunta + mensagem[numAleatorio]
   elementoResposta.style.opacity=1;
   //Sumir respostas da tela...
   setTimeout(function(){
     elementoResposta.style.opacity= 0;
     buttomPerguntar.removeAttribute("disabled")
   },3000)
 }