Design System: Experiência Artesanal Editorial de Alto Padrão
1. Visão Geral e Estrela-Guia Criativa

Estrela-Guia Criativa: "A Galeria Tátil"
Este design system afasta-se dos templates tradicionais de e-commerce para criar uma experiência de "Galeria Tátil". O objetivo é fazer a interface digital parecer tão intencional, suave e de alta qualidade quanto uma peça de crochê feita à mão. Alcançamos isso rejeitando grids rígidos em favor de uma assimetria intencional, formas orgânicas em camadas (efeitos de aquarela e molduras circulares) e uma escala tipográfica editorial que prioriza o respiro ao invés da densidade de informações.

Para quebrar o visual "padrão":

    Elementos Sobrepostos: Imagens de produtos (contidas em molduras circulares) devem frequentemente se sobrepor aos fundos manchados em aquarela (watercolor bleeds) ou blocos de texto adjacentes para criar uma sensação de profundidade física.

    Espaço Negativo como Luxo: Utilize margens generosas (referenciando os tokens spacing-24 e spacing-16) para emoldurar o conteúdo da mesma forma que um curador de museu faria.

    Imperfeição Artesanal: Use uma rotação sutil em imagens secundárias ou elementos decorativos para imitar o espírito "feito à mão" da marca.

2. Cores e Filosofia de Superfície

A paleta é uma mistura sofisticada de tons pastéis suaves ancorados por um azul-marinho profundo (deep navy). Use esses tokens para criar um layout editorial "sem linhas" (no-line).

A Regra "Sem Linhas"
Proíba estritamente o uso de bordas sólidas de 1px para a divisão de seções. Para definir limites, use mudanças de tom nas cores de fundo.

    Coloque uma seção surface-container-low (bege mais suave) contra o fundo principal (#fff8f0) para denotar uma mudança no conteúdo.

    Use surface-variant para barras laterais ou destaques para criar uma separação suave sem bordas duras.

Hierarquia de Superfície e Aninhamento
Trate a UI como uma série de camadas físicas:

    Camada Base: surface (#fff8f0) - O canvas (tela) principal.

    Nível Médio: surface-container - Para agrupamentos de informações secundárias.

    Nível Superior: surface-container-highest - Para os elementos interativos mais importantes (ex: cards de produtos, resumos de carrinho).

A Regra do Vidro e do Gradiente

    Glassmorphism (Efeito Vidro): Para barras de navegação flutuantes ou modais de visualização rápida, use versões semitransparentes de surface com um backdrop-blur de 20px.

    Gradientes de Assinatura: Para CTAs principais e fundos de destaque (hero), use um gradiente linear sutil de primary (#745090) para primary-container (#e1b6ff) em um ângulo de 45 graus. Isso traz "alma" e uma profundidade que imita fios tingidos.

3. Tipografia

O sistema tipográfico equilibra a elegância da alta moda da Newsreader (usada como um equivalente à elegância da Tenor Sans) com a utilidade acessível da Manrope.

    Display (Newsreader): Use para cabeçalhos hero e momentos da marca. As serifas de alto contraste transmitem o "Luxo Artesanal".

    Headline & Title (Newsreader): Definidos em headline-lg e headline-md para nomes de produtos e cabeçalhos de categoria.

    Body & Labels (Manrope): Use para descrições e microtextos da UI (microcopy). A fonte sem serifa limpa garante legibilidade contra os fundos em aquarela.

    Dica Editorial: Use display-lg para palavras ou frases únicas e de impacto (ex: "Feito à Mão") e sobreponha-as levemente com uma imagem de produto circular para uma sensação de revista de alto padrão.

4. Elevação e Profundidade

A hierarquia é alcançada através de Camadas Tonais (Tonal Layering) e uma iluminação ambiente suave, em vez de linhas estruturais.

    O Princípio do Empilhamento (Layering): Um card surface-container-lowest posicionado sobre uma seção surface-container-low cria uma "elevação" natural sem a necessidade de aplicar sombra.

    Sombras Ambientes: Para itens "flutuantes" (como um botão de checkout ou menu mobile), use a seguinte sombra: shadow: 0 12px 32px -4px rgba(54, 50, 39, 0.06). A cor da sombra deve ser uma tonalidade (tint) de on-surface (#363227) para permanecer natural.

    A "Borda Fantasma" (Fallback): Se uma borda for necessária por questões de acessibilidade, use o token outline-variant com 15% de opacidade.

    Molduras Circulares: Em alinhamento com a referência do logotipo, use roundedness-full para miniaturas de produtos. Contorne-as com um "anel de aquarela" sutil e multicolorido usando os tons pastéis primários da marca.

5. Componentes

Botões

    Primário: Preenchimento em gradiente (primary para primary-container), roundedness-full, texto on-primary. Sem borda.

    Secundário: Fundo surface-container-highest com texto primary. Use para "Adicionar ao Carrinho".

    Terciário: Apenas texto com um sublinhado de 2px em secondary (#386859). Use para "Ler Mais".

Campos de Entrada (Input Fields)

    Estilização: Use surface-container-low para o fundo do campo.

    Estados: Ao focar (on focus), faça a transição do fundo para surface-container-highest e adicione um brilho (glow) suave de 2px na cor secondary. Proíba bordas pretas e duras.

Cards e Listas

    A Regra Antidivisórias: Proíba o uso de linhas divisórias em listas ou cards. Separe os itens usando spacing-4 (espaço em branco vertical) ou alternando as cores de fundo entre surface e surface-container-low.

    Cards de Produtos: Devem apresentar roundedness-lg (2rem) ou full para imagens. O conteúdo deve ser alinhado ao centro para manter o tema "circular" do logotipo.

Componente Customizado: O "Toque de Aquarela"

    Pequenas formas SVG irregulares (blobs) e semitransparentes, usando on-secondary-container ou primary-fixed-dim, colocadas atrás das imagens para suavizar o grid e adicionar um aspecto artesanal e "pintado".

6. O que Fazer e o que Evitar (Do's and Don'ts)

O que Fazer (Do)

    Faça o uso de spacing-20 (7rem) entre as seções principais para deixar o design respirar.

    Faça cortes circulares (cropping) em imagens de lifestyle para ecoar a geometria do logotipo.

    Faça uso da cor primary (#745090) em todos os ícones interativos para manter o reconhecimento da marca.

    Faça experimentos com textos levemente deslocados — ex: um título que começa 20px mais à esquerda do que o corpo de texto logo abaixo — para quebrar a sensação de "template".

O que Evitar (Don't)

    Não use preto 100% (#000000). Use on-surface (#363227) para textos para manter a paleta "aconchegante".

    Não use cantos vivos ou pontiagudos. Todo elemento deve ter pelo menos roundedness-sm.

    Não use sombras (box shadows) em todos os cards. Reserve as sombras para elementos que fisicamente flutuam ou que exigem interação imediata do usuário.

    Não use mais do que um tamanho de fonte "Display" em uma única tela; mantenha a hierarquia bem focada.
