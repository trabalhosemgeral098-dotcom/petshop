<<<<<<< HEAD
const formLogin = document.getElementById("formLogin")
formLogin.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value
    try {
        const resposta = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ email, senha})
        })
        const resultado = await resposta.json();
        if(!resposta.ok) {
            throw new Error(resultado.erro)
        }
        window.location.href = "/dashboard"
    } catch (erro) {
=======
const  formLogin = document.getElementById('formLogin');
formLogin.addEventListener('submit', async (e) =>{
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;

    try{
        const resp = await fetch('/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, senha})
        })
        const resultado = await resp.json();
        if(!resp.ok){
            throw new Error(resultado.erro)
        }
        window.location.href = '/dashboard'
    }
    catch(erro){
        console.log(erro);
>>>>>>> 814d6061397a33b616eb8d7703f73b69cd6e0017
        alert(erro.message)
    }
})

<<<<<<< HEAD
fetch("/api/verificar").then(resposta => {  
    if (resposta.ok) {
        window.location.href= "/dashboard"
    }
}).catch(() => {});
=======
fetch("/api/verificar").then(resposta => {
    if(resposta.ok){
        window.location.href = '/dashboard'
    }
}).catch(() => {})
>>>>>>> 814d6061397a33b616eb8d7703f73b69cd6e0017
