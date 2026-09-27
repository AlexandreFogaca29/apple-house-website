const vitrine = document.getElementById("vitrine-produtos");

const listaProdutos = [
  {
    nome: "iPhone 17 Pro Max",
    descricao: "O iPhone definitivo: chip A19 Pro e inteligência sem limites.",
    preco: "R$ 11.499,00",
    imagem: "./assets/celular.jpg",
    link: "./pages/carrinho/carrinho-iphone.html",
  },
  {
    nome: "iPad Pro 13",
    descricao:
      "Criado para transformar qualquer espaço no seu escritório digital.",
    preco: "R$ 13.999,00",
    imagem: "./assets/tablet.jpg",
    link: "./pages/carrinho/carrinho-ipad.html",
  },
  {
    nome: "MacBook Pro",
    descricao:
      "Desempenho monstruoso, autonomia surreal e construção impecável.",
    preco: "R$ 24.999,00",
    imagem: "./assets/computador.jpg",
    link: "./pages/carrinho/carrinho-macbook.html",
  },
  {
    nome: "Apple Watch",
    descricao:
      "Apple Watch é o relógio inteligente da Apple, projetado para monitorar a saúde.",
    preco: "R$ 4.299,99",
    imagem: "./assets/apple-watch.jpg",
    link: "./pages/carrinho/carrinho-apleWatch.html",
  },
];

listaProdutos.forEach((produto) => {
  vitrine.insertAdjacentHTML(
    "beforeend",
    `
    <div class="col-12 col-md-6 col-lg-3">
      <article class="card card-produto h-100 rounded-4 p-3 bg-white text-center border-0 shadow-sm">
        <figure class="img-container my-3 mb-0">
          <img src="${produto.imagem}" alt="${produto.nome}" class="img-fluid" />
        </figure>
        <div class="card-body d-flex flex-column justify-content-between p-0 mt-3">
          <div>
            <h2 class="h5 fw-bold text-dark mb-2">${produto.nome}</h2>
            <p class="card-text text-secondary small mb-3">${produto.descricao}</p>
          </div>
          <div>
            <p class="fs-5 fw-bold text-dark mb-3">${produto.preco}</p>
            <a href="${produto.link}" class="btn btn-apple w-100 py-2">Comprar</a>
          </div>
        </div>
      </article>
    </div>
  `,
  );
});
