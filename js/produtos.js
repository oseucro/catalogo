/**
 * Catálogo oseucro — categorias: toucas, bandanas, bags, pareos, colares, brincos.
 * Imagens provisórias (URLs); trocar por assets/img quando disponível.
 */
(function (global) {
  const CATEGORIAS = [
    { id: "colares", label: "Colares" },
    { id: "brincos", label: "Brincos" },
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
      id: "b01",
      categoria: "bolsas",
      nome: "Bolsa Luiza",
      imagem:
        "assets/img/b01.png",
      imagens: ["assets/img/b01.png","assets/img/b01-1.png", "assets/img/b01-2.png"],
      fio: "Fio de malha",
      variantes: [{ cor: "Cinza grafite", tamanho: "Alça tubular 17cm e bolsa 19cm x 25cm", preco: 189.00 }],
      destaque: true,
    },
    {
      id: "b02",
      categoria: "bolsas",
      nome: "Bolsa Terracota",
      imagem:
        "assets/img/b02.png",
      imagens: ["assets/img/b02.png", "assets/img/b02-1.png"],
      fio: "Fio de malha",
      variantes: [{ cor: "Marrom", tamanho: "16cm x 24cm", preco: 115.00 }],
      destaque: true,
    },
    {
      id: "b03",
      categoria: "bolsas",
      nome: "Bolsa Anne",
      imagem:
        "assets/img/b03.png",
      imagens: ["assets/img/b03.png", "assets/img/b03-1.png"],
      fio: "Fio de malha",
      variantes: [{ cor: "Preta", tamanho: "Alça 90cm com corrente dourada", preco: 195.00 }],
      destaque: true,
    },
    {
      id: "b04",
      categoria: "bolsas",
      nome: "Minicarteira",
      imagem:
        "assets/img/b04.png",
      imagens: ["assets/img/b04.png", "assets/img/b04-1.png"],
      fio: "Fio de náutico",
      variantes: [{ cor: "Verde", tamanho: "11cm x 15cm", preco: 105.00 }],
      destaque: true,
    },
    {
      id: "b05",
      categoria: "bolsas",
      nome: "Bolsa Origame",
      imagem:
        "assets/img/b05.png",
      imagens: ["assets/img/b05.png", "assets/img/b05-1.png"],
      fio: "Fio de malha",
      variantes: [{ cor: "Azul Marinho", tamanho: "Alça 40cm e bolsa 16cm x 23cm", preco: 134.90 }],
      destaque: true,
    },
    {
      id: "b06",
      categoria: "bolsas",
      nome: "Bolsa Dueto",
      imagem:
        "assets/img/b06.png",
      imagens: ["assets/img/b06.png", "assets/img/b06-1.png","assets/img/b06-2.png"],
      fio: "Fio polipropileno + corino",
      variantes: [{ cor: "Bege escuro", tamanho: "Alça 90cm e bolsa 14cm x 19cm", preco: 109.90 }],
      destaque: true,
    },
    {
      id: "b07",
      categoria: "bolsas",
      nome: "Bolsa Origame",
      imagem:
        "assets/img/b07.png",
      imagens: ["assets/img/b07.png", "assets/img/b07-1.png"],
      fio: "Fio de malha",
      variantes: [{ cor: "Cromio", tamanho: "Alça 90cm e bolsa 16cm x 23cm", preco: 169.00 }],
      destaque: true,
    },
    {
      id: "b08",
      categoria: "bolsas",
      nome: "Bolsa Âncora",
      imagem:
        "assets/img/b08.png",
      imagens: ["assets/img/b08.png", "assets/img/b08-1.png"],
      fio: "Fio de algodão",
      variantes: [{ cor: "Preta", tamanho: "Alça 95cm e bolsa 17cm x 25cm", preco: 159.00 }],
      destaque: true,
    },
    {
      id: "b09",
      categoria: "bolsas",
      nome: "Carteira luxo com pedrarias",
      imagem:
        "assets/img/b09.png",
      imagens: ["assets/img/b09.png", "assets/img/b09-1.png"],
      fio: "Fio de cetim",
      variantes: [{ cor: "Verde", tamanho: "13cm x 23cm", preco: 194.90 }],
      destaque: true,
    },
    {
      id: "b10",
      categoria: "bolsas",
      nome: "Carteira luxo com pedrarias",
      imagem:
        "assets/img/b10.png",
      imagens: ["assets/img/b10.png", "assets/img/b10-1.png"],
      fio: "Fio de cetim",
      variantes: [{ cor: "Dourada", tamanho: "13cm x 21cm", preco: 194.90 }],
      destaque: true,
    },
    {
      id: "b11",
      categoria: "bolsas",
      nome: "Carteira luxo com pedrarias",
      imagem:
        "assets/img/b11.png",
      imagens: ["assets/img/b11.png", "assets/img/b11-1.png"],
      fio: "Fio de cetim",
      variantes: [{ cor: "Preta", tamanho: "13cm x 23cm", preco: 194.90 }],
      destaque: true,
    },
    {
      id: "b12",
      categoria: "bolsas",
      nome: "Carteira luxo com franjas",
      imagem:
        "assets/img/b12.png",
      imagens: ["assets/img/b12.png", "assets/img/b12-1.png"],
      fio: "Fio de cetim",
      variantes: [{ cor: "Azul claro", tamanho: "13cm x 23cm", preco: 194.90 }],
      destaque: true,
    },
    {
      id: "b13",
      categoria: "bolsas",
      nome: "Carteira luxo com franjas",
      imagem:
        "assets/img/b13.png",
      imagens: ["assets/img/b13.png", "assets/img/b13-1.png"],
      fio: "Fio de cetim",
      variantes: [{ cor: "Cinza", tamanho: "13cm x 22cm", preco: 194.90 }],
      destaque: true,
    },
    {
      id: "b14",
      categoria: "bolsas",
      nome: "Carteira luxo",
      imagem:
        "assets/img/b14.png",
      imagens: ["assets/img/b14.png", "assets/img/b14-1.png"],
      fio: "Fio de cetim",
      variantes: [{ cor: "Vermelho", tamanho: "12cm x 21cm", preco: 184.90 }],
      destaque: true,
    },
    {
      id: "b15",
      categoria: "bolsas",
      nome: "Bolsa Orbe",
      imagem:
        "assets/img/b15.png",
      imagens: ["assets/img/b15.png", "assets/img/b15-1.png"],
      fio: "Fio de malha",
      variantes: [{ cor: "Cinza grafite", tamanho: "20cm x 22cm", preco: 114.90 }],
      destaque: true,
    },
    {
      id: "b16",
      categoria: "bolsas",
      nome: "Bolsa Herança",
      imagem:
        "assets/img/b16.png",
      imagens: ["assets/img/b16.png", "assets/img/b16-1.png","assets/img/b16-2.png" ],
      fio: "Fio de malha",
      variantes: [{ cor: "Azul Marinho", tamanho: "Alça sarja 90cm, alça malha 38cm e bolsa 18cm x 20cm", preco: 134.90 }],
      destaque: true,
    },
    {
      id: "b17",
      categoria: "bolsas",
      nome: "Bolsa Angel",
      imagem:
        "assets/img/b17.png",
      imagens: ["assets/img/b17.png", "assets/img/b17-1.png", "assets/img/b17-2.png"],
      fio: "Fio de malha",
      variantes: [{ cor: "Capuccino", tamanho: "15cm x 23cm", preco: 179.90 }],
      destaque: true,
    },
    {
      id: "b18",
      categoria: "bolsas",
      nome: "Carteira luxo com pedrarias",
      imagem:
        "assets/img/b18.png",
      imagens: ["assets/img/b18.png", "assets/img/b18-1.png"],
      fio: "Fio náutico",
      variantes: [{ cor: "Verde militar", tamanho: "13cm x 23cm", preco: 184.90 }],
      destaque: true,
    },
    {
      id: "b19",
      categoria: "bolsas",
      nome: "Bolsa Ânima",
      imagem:
        "assets/img/b19.png",
      imagens: ["assets/img/b19.png", "assets/img/b19-1.png"],
      fio: "Fio ecológico",
      variantes: [{ cor: "Branca", tamanho: "20cm x 25cm", preco: 109.90 }],
      destaque: true,
    },
    {
      id: "b20",
      categoria: "bolsas",
      nome: "Bolsa Essência",
      imagem:
        "assets/img/b20.png",
      imagens: ["assets/img/b20.png", "assets/img/b20-1.png","assets/img/b20-2.png", "assets/img/b20-3.png" ],
      fio: "Fio de malha",
      variantes: [{ cor: "Branca", tamanho: "Alça removível 95cm e bolsa 15cm x 20cm", preco: 109.90 }],
      destaque: true,
    },
    {
      id: "colar-0",
      categoria: "colares",
      nome: "Colar Caracol",
      imagem:
        "assets/img/colar-1-1.png",
      imagens: ["assets/img/colar-1-1.png","assets/img/colar-1-2.png"],
      fio: "Algodão",
      variantes: [{ cor: "Azul marinho e Bege", tamanho: "65cm", preco: 45.0 }],
    },
    {
      id: "colar-1",
      categoria: "colares",
      nome: "Colar Tubular",
      imagem:
        "assets/img/colar-2-1.png",
      imagens: ["assets/img/colar-2-1.png", "assets/img/colar-2-2.jpeg"],
      fio: "Cetim",
      variantes: [{ cor: "Cobre", tamanho: "70cm (colar + corrente)", preco: 50.0 }],
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
      id: "colar-22",
      categoria: "colares",
      nome: "Colar Tubular Verde",
      imagem:
        "assets/img/colar-23.png",
      imagens: ["assets/img/colar-23.png","assets/img/colar-23-1.png"],
      fio: "Cetim",
      variantes: [{ cor: "Verde", tamanho: "65cm", preco: 45.0 }],
    },
    {
      id: "colar-23",
      categoria: "colares",
      nome: "Colar multicolor",
      imagem:
        "assets/img/colar-24.png",
      imagens: ["assets/img/colar-24.png","assets/img/colar-24-1.png"],
      fio: "Algodão",
      variantes: [{ cor: "Azul multicolor", tamanho: "43cm", preco: 45.0 }],
    },
    {
      id: "colar-24",
      categoria: "colares",
      nome: "Colar Argolas",
      imagem:
        "assets/img/colar-25.png",
      imagens: ["assets/img/colar-25.png","assets/img/colar-25-1.png"],
      fio: "Algodão",
      variantes: [{ cor: "Verde", tamanho: "95cm", preco: 45.0 }],
    },
    {
      id: "colar-25",
      categoria: "colares",
      nome: "Colar Argolas",
      imagem:
        "assets/img/colar-26.png",
      imagens: ["assets/img/colar-26.png","assets/img/colar-26-1.png"],
      fio: "Algodão",
      variantes: [{ cor: "Marrom", tamanho: "78cm", preco: 45.0 }],
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
      id: "br1",
      categoria: "brincos",
      nome: "Brinco Concha",
      imagem: "assets/img/br1.png",
      imagens: ["assets/img/br1.png", "assets/img/br1-1.png"],
      fio: "Fio de Algodão",
      variantes: [{ cor: "Marrom", tamanho: "Pequeno", preco: 25.00 }],
      destaque: true,
    },
    {
      id: "br2",
      categoria: "brincos",
      nome: "Brinco Espiral",
      imagem: "assets/img/br2.png",
      imagens: ["assets/img/br2.png", "assets/img/br2-1.png"],
      fio: "Fio de Algodão",
      variantes: [{ cor: "Preto", tamanho: "Pequeno", preco: 25.0 }],
      destaque: true,
    },
    {
      id: "br3",
      categoria: "brincos",
      nome: "Brinco Vértice",
      imagem: "assets/img/br3.png",
      imagens: ["assets/img/br3.png", "assets/img/br3-1.png"],
      fio: "Fio de Algodão",
      variantes: [{ cor: "Preto", tamanho: "Pequeno", preco: 25.0 }],
      destaque: true,
    },
    {
      id: "br4",
      categoria: "brincos",
      nome: "Brincos Órbita",
      imagem: "assets/img/br4.png",
      imagens: ["assets/img/br4.png", "assets/img/br4-1.png"],
      fio: "Fio de Algodão",
      variantes: [{ cor: "Preto e dourado", tamanho: "Pequeno", preco: 25.0 }],
      destaque: true,
    },
    {
      id: "br5",
      categoria: "brincos",
      nome: "Brincos Flor",
      imagem: "assets/img/br5.png",
      imagens: ["assets/img/br5.png", "assets/img/br5-1.png"],
      fio: "Fio de Algodão",
      variantes: [{ cor: "Branco", tamanho: "Pequeno", preco: 25.0 }],
      destaque: true,
    },
    {
      id: "br6",
      categoria: "brincos",
      nome: "Brinco Cálice",
      imagem: "assets/img/br6.png",
      imagens: ["assets/img/br6.png", "assets/img/br6-1.png"],
      fio: "Fio de Algodão",
      variantes: [{ cor: "Preto", tamanho: "Pequeno", preco: 25.0 }],
      destaque: true,
    },
    {
      id: "br7",
      categoria: "brincos",
      nome: "Brinco Realeza",
      imagem: "assets/img/br7.png",
      imagens: ["assets/img/br7.png", "assets/img/br7-1.png"],
      fio: "Fio de Algodão",
      variantes: [{ cor: "Preto e dourado", tamanho: "Pequeno", preco: 25.0 }],
      destaque: true,
    },
    {
      id: "br8",
      categoria: "brincos",
      nome: "Brinco Fenda",
      imagem: "assets/img/br8.png",
      imagens: ["assets/img/br8.png", "assets/img/br8-1.png"],
      fio: "Fio de Algodão",
      variantes: [{ cor: "Verde", tamanho: "Pequeno", preco: 25.0 }],
      destaque: true,
    },
    {
      id: "br9",
      categoria: "brincos",
      nome: "Brinco Espiral",
      imagem: "assets/img/br9.png",
      imagens: ["assets/img/br9.png", "assets/img/br9-1.png"],
      fio: "Fio de Algodão",
      variantes: [{ cor: "Cinza", tamanho: "Pequeno", preco: 25.0 }],
      destaque: true,
    },
    {
      id: "br10",
      categoria: "brincos",
      nome: "Brinco Cálice",
      imagem: "assets/img/br10.png",
      imagens: ["assets/img/br10.png", "assets/img/br10-1.png"],
      fio: "Fio de Algodão",
      variantes: [{ cor: "Vemelho", tamanho: "Pequeno", preco: 25.0 }],
      destaque: true,
    },
    {
      id: "br11",
      categoria: "brincos",
      nome: "Brinco Corola",
      imagem: "assets/img/br11.png",
      imagens: ["assets/img/br11.png", "assets/img/br11-1.png"],
      fio: "Fio de Algodão",
      variantes: [{ cor: "Preto e dourado", tamanho: "Pequeno", preco: 25.0 }],
      destaque: true,
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
      id: "bag-azul",
      categoria: "bags",
      nome: "Pocket Bag Azul",
      imagem:
        "assets/img/bag-azul.png",
      imagens: ["assets/img/bag-azul.png","assets/img/bag-azul1.png"],
      fio: "Algodão",
      variantes: [{ cor: "Variadas", tamanho: "85 cm", preco: 65.0 }],
      destaque: true,
    },
    {
      id: "bag-vermelha",
      categoria: "bags",
      nome: "Pocket Bag Vermelha",
      imagem:
        "assets/img/bag-vermelha.png",
      imagens: ["assets/img/bag-vermelha.png","assets/img/bag-vermelha1.png"],
      fio: "Algodão",
      variantes: [{ cor: "Variadas", tamanho: "85 cm", preco: 65.0 }],
      destaque: true,
    },
    {
      id: "bag-mostarda",
      categoria: "bags",
      nome: "Pocket Bag Mostarda",
      imagem:
        "assets/img/bag-mostarda.png",
      imagens: ["assets/img/bag-mostarda.png","assets/img/bag-mostarda1.png"],
      fio: "Algodão",
      variantes: [{ cor: "Mostarda", tamanho: "85 cm", preco: 65.0 }],
      destaque: true,
    },
    {
      id: "bag-verde-limao",
      categoria: "bags",
      nome: "Pocket Bag Verde Limão",
      imagem:
        "assets/img/bag-verde-limao.png",
      imagens: ["assets/img/bag-verde-limao.png","assets/img/bag-verde-limao1.png"],
      fio: "Algodão",
      variantes: [{ cor: "Verde Limão", tamanho: "85 cm", preco: 65.0 }],
      destaque: true,
    },
    {
      id: "bag-cinza-prata",
      categoria: "bags",
      nome: "Pocket Bag Cinza Prata",
      imagem:
        "assets/img/bag-cinza-prata.png",
      imagens: ["assets/img/bag-cinza-prata.png","assets/img/bag-cinza-prata1.png"],
      fio: "Algodão",
      variantes: [{ cor: "Cinza Prata", tamanho: "85 cm", preco: 65.0 }],
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
