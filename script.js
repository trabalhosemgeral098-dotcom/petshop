async function apigato(){
    const imagem = document.getElementById("imagem")
    try{
        const resposta = await fetch("https://api.thecatapi.com/v1/images/search")
        const dados = await resposta.json()
        imagem.src = dados[0].url
    } catch(erro){
        alert("Erro ao gerar a imagem:")
        console.log(erro)
    }
}
apigato()

const form = document.getElementById("conversao")
form.addEventListener("submit", async function (e) {
   e.preventDefault()
   const valor = Number(document.getElementById("valor").value) 
   const origem = document.getElementById("MoedaOrigem").value
   const destino = document.getElementById("MoedaDestino").value
   const valorfinal = document.getElementById("convertido")

   try{
    const resposta = await fetch(`https:/api.frankfurter.dev/v2/rate/${origem}/${destino}`)
    if(!resposta.ok){
        throw new Error ("Nao foi possivel obter a cotaçao")
    }
    const dados = await resposta.json()
    const valorConvertido = valor * dados.rate
    valorfinal.textContent = valorConvertido.toLocaleString("pt-BR", {style: "currency", currency: destino})
   } catch(erro){
    alert("erro de comunicaçao com a api")
    console.log(erro)
   }
})