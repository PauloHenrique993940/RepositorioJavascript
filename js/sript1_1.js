//Cria referencia ao form e elementos de resposta do Programa

const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//Criar um ouvinte de evento acionado quando o botao subimitfor clicado
frm.addEventListener("submit", (e) =>{
    e.preventDefault() // evita envio para o form
    const nome = frm.InNome.value //Obter valores do form

    const nota1 = Number(frm.InNota1.value)
    const nota2 = Number(frm.InNota2.value)

    const media = (noata1 +  nota2 ) /2 //calcula a media da nota
    resp1.innerText = `Média das notas ${media.toFixed(2)}`

    //Criando Conciçoes
    if (media == 7){
        //altera a cor do style do elento resp2
        resp2.innerText = `Parabens ${nome} ! Voçê foi aprovado(a)`
        resp2.style.color ="blue"
    }else {
        resp2.innerText = `Ops ${nome} ... Voçê foi reprovado(a)`
        resp2.style.color ="red"
        
    }
})
