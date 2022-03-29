const listaInformacoes = document.querySelectorAll(".lista")
const cardLista = document.querySelectorAll(".cartao")

listaInformacoes.forEach(lista=>{
    lista.addEventListener("click", ()=>{
        const cartaoAberto = document.querySelector('.aberto')
        cartaoAberto.classList.remove('aberto')

        const idCartaoSelecionado= lista.attributes.id.value

        const cartaoParaAbrir = document.getElementById('cartao-'+ idCartaoSelecionado)
        cartaoParaAbrir.classList.add('aberto')

        const ativoNaListagem = document.querySelector('.ativo')
        ativoNaListagem.classList.remove('ativo')

        const selecionadoNaListagem = document.getElementById(idCartaoSelecionado)
        selecionadoNaListagem.classList.add('ativo')
    })
})