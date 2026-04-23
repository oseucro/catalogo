/**
 * Catálogo oseucro — categorias: toucas, bandanas, bags, pareos, colares.
 * Imagens provisórias (URLs); trocar por assets/img quando disponível.
 */
(function (global) {
  const CATEGORIAS = [
    { id: "colares", label: "Colares" },
    { id: "toucas", label: "Toucas" },
    { id: "cropped", label: "Cropped" },
    { id: "top", label: "Top"},
    { id: "bandanas", label: "Bandanas" },
    { id: "bags", label: "Pocket Bags" },
    { id: "bolsas", label: "Bolsas" },
    { id: "pareos", label: "Pareôs" },
  ];

  const PRODUTOS = [
    {
      id: "colar-0",
      categoria: "colares",
      nome: "Colar Caracol",
      imagem:
        "assets/img/colar-1-1.png",
      imagens: ["assets/img/colar-1-1.png","assets/img/colar-1-2.png"],
      fio: "Algodão",
      variantes: [{ cor: "Azul marinho e Bege", tamanho: "65 cm", preco: 45.0 }],
    },
    {
      id: "colar-1",
      categoria: "colares",
      nome: "Colar Tubular",
      imagem:
        "assets/img/colar-2-1.png",
      imagens: ["assets/img/colar-2-1.png", "assets/img/colar-2-2.jpeg"],
      fio: "Cetim",
      variantes: [{ cor: "Cobre", tamanho: "70 cm (colar + corrente)", preco: 50.0 }],
    },
    {
      id: "colar-2",
      categoria: "colares",
      nome: "Colar Caracol Duplo",
      imagem:
        "assets/img/colar-3-1.png",
      imagens: ["assets/img/colar-3-1.png", "assets/img/colar-3-2.jpeg"],
      fio: "Polipropileno",
      variantes: [{ cor: "Marrom", tamanho: "60cm (colar + corrente)", preco: 55.0 }],
    },
    {
      id: "colar-3",
      categoria: "colares",
      nome: "Colar Caracol Duplo",
      imagem:
        "assets/img/colar-4-1.png",
      imagens: ["assets/img/colar-4-1.png", "assets/img/colar-4-2.jpeg"],
      fio: "Cetim",
      variantes: [{ cor: "Verde", tamanho: "60cm (colar + corrente)", preco: 55.0 }],
    },
    {
      id: "colar-4",
      categoria: "colares",
      nome: "Colar Tubular",
      imagem:
        "assets/img/colar-5-1.png",
      imagens: ["assets/img/colar-5-1.png","assets/img/colar-5-2.jpeg"],
      fio: "Cetim",
      variantes: [{ cor: "Salmão", tamanho: "60cm (colar + corrente)", preco: 50.0 }],
    },
    {
      id: "colar-5",
      categoria: "colares",
      nome: "Colar Caracol",
      imagem:
        "assets/img/colar-6-1.png",
      imagens: ["assets/img/colar-6-1.png","assets/img/colar-6-2.jpeg"],
      fio: "Algodão",
      variantes: [{ cor: "Verde e Preto", tamanho: "75 cm", preco: 45.0 }],
    },
    {
      id: "colar-6",
      categoria: "colares",
      nome: "Colar Tubular",
      imagem:
        "assets/img/colar-7-1.png",
      imagens: ["assets/img/colar-7-1.png","assets/img/colar-7-2.jpeg"],
      fio: "Cetim",
      variantes: [{ cor: "Bege Médio", tamanho: "70cm", preco: 50.0 }],
    },
   {
      id: "colar-7",
      categoria: "colares",
      nome: "Colar Caracol Duplo",
      imagem:
        "assets/img/colar-8-1.png",
      imagens: ["assets/img/colar-8-1.png","assets/img/colar-8-2.jpeg"],
      fio: "Cetim",
      variantes: [{ cor: "Champagne", tamanho: "60cm (colar + corrente)", preco: 55.0 }],
    },
    {
      id: "colar-8",
      categoria: "colares",
      nome: "Colar Tubular",
      imagem:
        "assets/img/colar-9-1.png",
      imagens: ["assets/img/colar-9-1.png","assets/img/colar-9-2.png"],
      fio: "Algodão",
      variantes: [{ cor: "Chocolate", tamanho: "75 cm (colar + corrente)", preco: 45.0 }],
    },
    {
      id: "colar-9",
      categoria: "colares",
      nome: "Colar Caracol",
      imagem:
        "assets/img/colar-10-1.png",
      imagens: ["assets/img/colar-10-1.png","assets/img/colar-10-2.jpeg"],
      fio: "Algodão",
      variantes: [{ cor: "Off White", tamanho: "65cm (colar de amarrar)", preco: 45.0 }],
    },
    {
      id: "colar-10",
      categoria: "colares",
      nome: "Colar Tubular",
      imagem:
        "assets/img/colar-11-1.png",
      imagens: ["assets/img/colar-11-1.png","assets/img/colar-11-2.jpeg"],
      fio: "Náutico",
      variantes: [{ cor: "Verde Militar", tamanho: "70cm (colar de amarrar)", preco: 50.0 }],
    },
    {
      id: "colar-11",
      categoria: "colares",
      nome: "Colar Caracol",
      imagem:
        "assets/img/colar-12-1.png",
      imagens: ["assets/img/colar-12-1.png","assets/img/colar-12-2.jpeg"],
      fio: "Algodão",
      variantes: [{ cor: "Preto e Dourado", tamanho: "60 cm (colar + corrente)", preco: 55.0 }],
    },
    {
      id: "colar-12",
      categoria: "colares",
      nome: "Colar Tubular",
      imagem:
        "assets/img/colar-13-1.png",
      imagens: ["assets/img/colar-13-1.png","assets/img/colar-13-2.jpeg"],
      fio: "Algodão",
      variantes: [{ cor: "Preto", tamanho: "75 cm (colar + corrente)", preco: 45.0 }],
    },
    {
      id: "colar-13",
      categoria: "colares",
      nome: "Colar Caracol",
      imagem:
        "assets/img/colar-14-1.png",
      imagens: ["assets/img/colar-14-1.png","assets/img/colar-14-2.jpeg"],
      fio: "Algodão",
      variantes: [{ cor: "Marrom", tamanho: "60 cm", preco: 45.0 }],
    },
    {
      id: "colar-14",
      categoria: "colares",
      nome: "Colar Tubular",
      imagem:
        "assets/img/colar-15-1.png",
      imagens: ["assets/img/colar-15-1.png","assets/img/colar-15-2.jpeg"],
      fio: "Algodão",
      variantes: [{ cor: "Verde com Vinho", tamanho: "65cm (colar + corrente)", preco: 45.0 }],
    },
    {
      id: "colar-15",
      categoria: "colares",
      nome: "Colar Caracol",
      imagem:
        "assets/img/colar-16-1.png",
      imagens: ["assets/img/colar-16-1.png","assets/img/colar-16-2.jpeg"],
      fio: "Algodão",
      variantes: [{ cor: "Prata", tamanho: "80 cm (Colar de Amarrar)", preco: 45.0 }],
    },
    {
      id: "colar-16",
      categoria: "colares",
      nome: "Colar Tubular",
      imagem:
        "assets/img/colar-17-1.png",
      imagens: ["assets/img/colar-17-1.png","assets/img/colar-17-2.jpg"],
      fio: "Cetim",
      variantes: [{ cor: "Verde", tamanho: "70 cm (colar + corrente)", preco: 50.0 }],
    },
    {
      id: "colar-17",
      categoria: "colares",
      nome: "Colar Caracol",
      imagem:
        "assets/img/colar-18-1.png",
      imagens: ["assets/img/colar-18-1.png","assets/img/colar-18-2.jpeg"],
      fio: "Algodão",
      variantes: [{ cor: "Verde Abacate", tamanho: "65cm (colar de amarrar)", preco: 45.0 }],
    },
    {
      id: "colar-18",
      categoria: "colares",
      nome: "Colar Tubular",
      imagem:
        "assets/img/colar-19-1.png",
      imagens: ["assets/img/colar-19-1.png","assets/img/colar-19-2.jpeg"],
      fio: "Náutico",
      variantes: [{ cor: "Verde Militar", tamanho: "55cm", preco: 50.0 }],
    },
    {
      id: "colar-19",
      categoria: "colares",
      nome: "Colar Tubular",
      imagem:
        "assets/img/colar-20-1.png",
      imagens: ["assets/img/colar-20-1.png","assets/img/colar-20-2.png"],
      fio: "Cetim",
      variantes: [{ cor: "Azul Royal", tamanho: "60cm (colar + corrente)", preco: 50.0 }],
    },
    {
      id: "colar-20",
      categoria: "colares",
      nome: "Colar Caracol",
      imagem:
        "assets/img/colar-21-1.png",
      imagens: ["assets/img/colar-21-1.png","assets/img/colar-21-2.jpeg"],
      fio: "Cetim",
      variantes: [{ cor: "Vermelho e Prata", tamanho: "80 cm (colar de amarrar)", preco: 50.0 }],
    },
    {
      id: "colar-21",
      categoria: "colares",
      nome: "Colar Tubular",
      imagem:
        "assets/img/colar-22-1.png",
      imagens: ["assets/img/colar-22-1.png","assets/img/colar-22-2.jpeg"],
      fio: "Cetim",
      variantes: [{ cor: "Cobre", tamanho: "80 cm (colar de amarrar)", preco: 50.0 }],
    },
    {
      id: "touca-1",
      categoria: "toucas",
      nome: "Touca Verde",
      imagem:
        "assets/img/touca-verde-1-1.png",
      imagens: ["assets/img/touca-verde-1-2.png", "assets/img/touca-verde-1-3.png"],
      fio: "Algodão",
      variantes: [{ cor: "Verde", tamanho: "Único (adulto)", preco: 55.0 }],
      destaque: true,
    },
    {
      id: "touca-2",
      categoria: "toucas",
      nome: "Touca Laranja",
      imagem:
        "assets/img/touca-laranja-1-1.png",
      imagens: ["assets/img/touca-laranja-1-2.png","assets/img/touca-laranja-1-3.png"],
      fio: "Algodão",
      variantes: [{ cor: "Laranja", tamanho: "Único (adulto)", preco: 55.0 }],
    },
    {
      id: "touca-3",
      categoria: "toucas",
      nome: "Touca Azul",
      imagem:
        "assets/img/touca-azul-1-1.png",
      imagens: ["assets/img/touca-azul-1-2.png", "assets/img/touca-azul-1-3.png"],
      fio: "Algodão",
      variantes: [{ cor: "Azul", tamanho: "Único (adulto)", preco: 55.0 }],
      destaque: true,
    },
    {
      id: "touca-4",
      categoria: "toucas",
      nome: "Touca Verde",
      imagem:
        "assets/img/touca-vverde-1-1.png",
      imagens: ["assets/img/touca-vverde-1-2.png", "assets/img/touca-vverde-1-3.png"],
      fio: "Algodão",
      variantes: [{ cor: "Verde", tamanho: "Único (adulto)", preco: 55.0 }],
      destaque: true,
    },
    {
      id: "touca-5",
      categoria: "toucas",
      nome: "Touca Amarela",
      imagem:
        "assets/img/touca-amarela-1-1.png",
      imagens: ["assets/img/touca-amarela-1-1.png", "assets/img/touca-amarela-1-2.png"],
      fio: "Algodão",
      variantes: [{ cor: "Amarela", tamanho: "Único (adulto)", preco: 55.0 }],
      destaque: true,
    },
    {
      id: "cropped-1",
      categoria: "cropped",
      nome: "Cropped Azul",
      imagem: "assets/img/cropped-azul-1-1.png",
      imagens: ["assets/img/cropped-azul-1-1.png", "assets/img/cropped-azul-1-2.png"],
      fio: "Algodão",
      variantes: [{ cor: "Azul", tamanho: "Médio", preco: 80.0 }],
    },
    {
      id: "cropped-2",
      categoria: "cropped",
      nome: "Cropped Amarelo",
      imagem:
        "assets/img/cropped-amarelo-1-1.png",
      imagens: ["assets/img/cropped-amarelo-1-1.png", "assets/img/cropped-amarelo-1-2.png"],
      fio: "Algodão",
      variantes: [{ cor: "Amarelo", tamanho: "Médio", preco: 80.0 }],
      destaque: true,
    },
    {
      id: "cropped-3",
      categoria: "cropped",
      nome: "Cropped Verde e Branco",
      imagem:
        "assets/img/cropped-verdeb-1-1.png",
      imagens: ["assets/img/cropped-verdeb-1-1.png", "assets/img/cropped-verdeb-1-2.png"],
      fio: "Algodão",
      variantes: [{ cor: "Verde e Branco", tamanho: "Médio", preco: 80.0 }],
      destaque: true,
    },
    {
      id: "top-1",
      categoria: "top",
      nome: "Top Preto",
      imagem:
        "assets/img/top-preto-1-1.png",
      imagens: ["assets/img/top-preto-1-1.png", "assets/img/top-preto-1-2.png"],
      fio: "Algodão",
      variantes: [{ cor: "Preto", tamanho: "Médio", preco: 60.0 }],
      destaque: true,
    },
    {
      id: "top-2",
      categoria: "top",
      nome: "Top Branco",
      imagem:
        "assets/img/top-branco-1-1.png",
      imagens: ["assets/img/top-branco-1-1.png", "assets/img/top-branco-1-2.png"],
      fio: "Algodão",
      variantes: [{ cor: "Branco", tamanho: "Médio", preco: 60.0 }],
      destaque: true,
    },
    {
      id: "bag-1",
      categoria: "bags",
      nome: "Pocket Bag Cores variadas (em breve)",
      imagem:
        "assets/img/bag-1.png",
      imagens: ["assets/img/bag-1.png"],
      fio: "Algodão",
      variantes: [{ cor: "Variadas", tamanho: "85 cm", preco: 65.0 }],
      destaque: true,
    },
    {
      id: "par-1",
      categoria: "pareos",
      nome: "Pareô Preto",
      imagem:
        "assets/img/par-1-1.png",
      imagens: ["assets/img/par-1-1.png", "assets/img/par-1-3.png"],
      fio: "Viscose",
      variantes: [{ cor: "Preto", tamanho: "cm", preco: 180.0 }],
      destaque: true,
    },
    {
      id: "bandana-1",
      categoria: "bandanas",
      nome: "Bandana Fio da Saudade",
      imagem:
        "assets/img/bandana-1-1.png",
      imagens: ["assets/img/bandana-1-1.png"],
      fio: "Algodão",
      variantes: [{ cor: "Verde", tamanho: "Médio", preco: 60.0 }],
      destaque: true,
    },
    {
      id: "bolsa-1",
      categoria: "bolsas",
      nome: "Lindas bolsas em breve",
      imagem:
        "",
      imagens: [""],
      fio: "Variados",
      variantes: [{ cor: "Variadas", tamanho: "Variados", preco: 0.00 }],
      destaque: true,
    },
  ];

  function menorPreco(produto) {
    const vals = produto.variantes.map((v) => v.preco);
    return Math.min.apply(null, vals);
  }

  function formatBRL(n) {
    return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  function porId(id) {
    return PRODUTOS.find((p) => p.id === id) || null;
  }

  function porCategoria(catId) {
    if (!catId || catId === "todos") return PRODUTOS.slice();
    return PRODUTOS.filter((p) => p.categoria === catId);
  }

  global.OSEUCRO_CATALOGO = {
    CATEGORIAS,
    PRODUTOS,
    menorPreco,
    formatBRL,
    porId,
    porCategoria,
  };
})(typeof window !== "undefined" ? window : globalThis);
