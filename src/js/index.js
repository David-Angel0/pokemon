/* quando clicarmos no botao de troca de tema, temos que alterar a cor do tema da página para claro/escuro */


// objetivo 1 - colocar class="modo-escuro" no body ao clicar no botão de troca de tema e mudar imagem para lua

// passo 1 - pegar no JS o elemento html correspondente ao botão de troca de tema
// passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body
// passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
// passo 4 - adicionar a classe modo-escuro no boddy
// passo 5 - trocar a imagem de alterar tema para lua



// Objetivo 2 - quando clicar no botao de troca de tema, caso o body já tenha a class modo-escuro, remover a classe  pra mudar pro modo claro e mudar a imagem pro sol 
// passo 6 - verificar se o body tem a classe modo-escuro



// passo 7 - trocar a imagem do botão de alterar tema pra sol




const botaoAlterarTema = document.getElementById("botao-alterar-tema")

const body = document.querySelector("body")

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")



botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    
    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    }
    else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
        }
});



