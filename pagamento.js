const form = document.getElementById("formPagamento")
form.addEventListener("submit", async (e) =>{
    e.preventDefault()
    const produto = document.getElementById("produto").value
    const valor = Number(document.getElementById("valor").value)

    try{
        const resp = await fetch("/pagamentos", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({produto, valor})
        })
        const dados = await resp.json();
        if(resp.ok){
            throw new Error(dados.erro)
        }
        window.location.href = dados.link
    } catch(erro){
        alert("erro.message")
    }
})