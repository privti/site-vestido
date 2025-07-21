// venda.js
document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('.btn-comprar');

    botoes.forEach(btn => {
        btn.addEventListener('click', () => {
            const produto = btn.dataset.produto;
            const preco = parseFloat(btn.dataset.preco);

            alert(`${produto} foi adicionado ao carrinho! Total: R$ ${preco.toFixed(2)}`);
            // Aqui você pode chamar uma função para adicionar ao carrinho real
        });
    });
});