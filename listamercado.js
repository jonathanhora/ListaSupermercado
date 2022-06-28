var itens = [];

document.querySelector('input[type=submit]').addEventListener('click',()=>{
    //pegando os dados na tela
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=preco_produto');

    //cadastrando os itens na lista
    itens.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    })

    var listaItens = document.querySelector('.lista-produtos')
    var totalCompra = Number(0);
    var nome;
    listaItens.innerHTML = "";
    itens.map((val)=>{
        //apresentando lista na tela
        listaItens.innerHTML += `
        <div class="lista-produto-single">
        <h3>`+val.nome+`</h3>
        <h3 class="price-produto"><span>R$`+val.valor+`</span></h3>
        </div>`
        //somando o valor total
        totalCompra += parseFloat(val.valor);
    })

    //considerar duas casas decimais
    totalCompra = totalCompra.toFixed(2)

    //apreentando valor total na tela
    var total = document.querySelector('.soma-produto')
    total.innerHTML = `<h2> Total: `+totalCompra+`</h2>`

    //Resentando caixas de entrada
    nomeProduto.value = "";
    precoProduto.value="";

})

//limpando o carrinho e zerando total
document.querySelector('.limparCarrinho').addEventListener('click', ()=>{
    itens = [];
    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produto').innerHTML = "<h2> Total: R$0</h2>"
})