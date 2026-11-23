const logout = document.getElementById('logout')
logout.addEventListener("click", async() =>{
    await fetch('/api/logout', {method: 'POST'})
    window.location.href = '/login.html'
})

const grafico = document.getElementById('grafico')

function carregarGraficos(){
    grafico.src= '/api/graficos'
}

carregarGraficos()

const botao = document.getElementById('gerarPdf')
botao.addEventListener('click', async()=>{
    try{
        const resp = await fetch('/api/pdf')
        if(resp.status ===401){
            window.location.href  = '/login/html'
        }
        if(!resp.ok){
            const erro = await resp.json()
            throw new Error(erro.erro)
        }
        const arquivo = await resp.blob()
        const url = URL.createObjectURL(arquivo)
        const link = document.createElement('a')
        link.href = url
        link.download = 'relatorio-petshop.pdf'
        document.body.appendChild(link)
        link.click()
        link.remove()
        setTimeout(()=> URL.revokeObjectURL(url), 1000)
    }
    catch(erro){
        console.log(erro)
    }
})