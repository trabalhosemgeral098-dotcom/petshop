require("dotenv").config()
const express = require("express")
const app = express()

app.use(express.json())
app.use(express.static("public"))

app.post("pagamento", async (req, res) => {
    const {produto, valor} = req.body
    if(!Number.isFinite(Number(valor)) || Number(valor) <=0){
        return res.status(400).json({erro: "numero invalido"})
    }
    try{const resp = await fetch("https://api.mercadopago.com/checkout/preferences", {
       
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Authorization": `Bearer: ${process.env.MP_ACESS_TOKEN}`
        },
        body: JSON.stringify({
            items: [{
                title: produto.trim(),
                quantity: 1,
                currency_id: "BRL",
                unit_prince: Number(valor)

            }]
        })
    })
    const dados = await resposta.json()
    if(!resposta.ok){
        console.log(dados)
        return res.status(400).json({erro: "nao foi possivel gerar o pagamento"})

    }
    res.json({link: dados.sandbox_init_point || dados.init_point});
    } catch(erro){
        console.log(erro)
        res.status(500).json({erro: "erro de conexao com o mercado pago"})
    }
})

app.listen