/**
 * Navegação, catálogo e página de detalhes — site estático (GitHub Pages).
 * Identificação de produto: ?id= (query string — partilhável e compatível com hosting estático).
 */
(function () {
  var WA = "5531984315417";
  var COLECOES_POR_CATEGORIA = {
    colares: "Achego",
    cropped: "Sensação",
    top: "Essência Livre",
    pareos: "Luxury",
    bandanas: "Identidade",
    bags: "Movimento",
    toucas: "Charme",
    bolsas: "em breve",
  };

  function escapeHtml(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function escapeAttr(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;");
  }

  function whatsappUrl(mensagem) {
    var texto =
      mensagem ||
      "Olá! Vim pelo site oseucro e gostaria de mais informações.";
    return "https://wa.me/" + WA + "?text=" + encodeURIComponent(texto);
  }

  function firstNonEmpty(list, getValue) {
    if (!Array.isArray(list)) return "";
    for (var i = 0; i < list.length; i++) {
      var v = getValue ? getValue(list[i]) : list[i];
      v = (v || "").trim();
      if (v) return v;
    }
    return "";
  }

  function tamanhoParaWhatsapp(raw) {
    var s = (raw || "").trim();
    if (!s) return "";
    // Extrai apenas o primeiro número e padroniza para "<numero>cm"
    // Ex.: "70 cm (colar + corrente)" -> "70cm"
    var m = s.match(/(\d+(?:[.,]\d+)?)/);
    if (!m) return s;
    var num = m[1].replace(",", ".");
    // Se for inteiro (ex.: "65.0"), remove casas desnecessárias.
    if (/^\d+\.0+$/.test(num)) num = num.split(".")[0];
    return num + "cm";
  }

  function mensagemWhatsappProduto(produto) {
    if (!produto) return "Olá! Vim pelo site oseucro e gostaria de mais informações.";
    var cor = firstNonEmpty(produto.variantes, function (v) {
      return v && v.cor;
    });
    var tamanho = firstNonEmpty(produto.variantes, function (v) {
      return v && v.tamanho;
    });
    var tamanhoFmt = tamanhoParaWhatsapp(tamanho);
    var base = "Olá! Tenho interesse na peça: " + produto.nome;
    if (cor) base += " " + cor;
    if (tamanhoFmt) base += ", tamanho " + tamanhoFmt;
    return base;
  }

  function detalheUrl(id, opcoes) {
    opcoes = opcoes || {};
    var p = new URLSearchParams();
    p.set("id", id);
    if (opcoes.origem) p.set("origem", opcoes.origem);
    if (opcoes.categoria) p.set("categoria", opcoes.categoria);
    return "detalhes.html?" + p.toString();
  }

  function catalogoUrl(categoria) {
    if (!categoria || categoria === "todos") return "catalogo.html";
    return "catalogo.html?categoria=" + encodeURIComponent(categoria);
  }

  function voltarDetalhes(origem, categoria) {
    if (origem === "index") return "index.html";
    if (origem === "catalogo") {
      if (categoria && categoria !== "todos") return catalogoUrl(categoria);
      return "catalogo.html";
    }
    return "catalogo.html";
  }

  function sanitizeProductId(rawId) {
    var id = (rawId || "").trim().toLowerCase();
    if (!/^[a-z0-9-]+$/.test(id)) return "";
    return id;
  }

  function pageBasename(pathname) {
    var p = String(pathname || "");
    // Em file:// no Windows, pathname pode ser "C:/.../catalogo.html"
    // Em http(s), pathname costuma ser "/catalogo.html"
    // Em ambos os casos, queremos só "catalogo.html"
    var last = p.split("/").pop();
    last = (last || "").split("\\").pop();
    return last || "index.html";
  }

  function currentRelativeUrl() {
    return pageBasename(window.location.pathname) + (window.location.search || "");
  }

  function normalizeRelativeHref(raw) {
    var s = String(raw || "").trim();
    if (!s) return "";
    // Se por algum motivo já salvamos caminho absoluto (file://, C:/...), normaliza para basename + query + hash.
    try {
      var u = new URL(s, window.location.href);
      return pageBasename(u.pathname) + (u.search || "") + (u.hash || "");
    } catch (e) {
      // Fallback simples: remove diretórios e preserva query/hash se existirem.
      var hash = "";
      var q = "";
      var hi = s.indexOf("#");
      if (hi >= 0) {
        hash = s.slice(hi);
        s = s.slice(0, hi);
      }
      var qi = s.indexOf("?");
      if (qi >= 0) {
        q = s.slice(qi);
        s = s.slice(0, qi);
      }
      return pageBasename(s) + q + hash;
    }
  }

  function initDetalhe() {
    var params = new URLSearchParams(window.location.search);
    var id = sanitizeProductId(params.get("id"));
    var origem = params.get("origem") || "catalogo";
    var categoria = params.get("categoria") || "";

    var errEl = document.getElementById("detalhe-erro");
    var okEl = document.getElementById("detalhe-conteudo");
    var cat = window.OSEUCRO_CATALOGO;

    function showErro() {
      if (errEl) errEl.hidden = false;
      if (okEl) okEl.hidden = true;
    }

    if (!cat || !id) {
      showErro();
      return;
    }

    var p = cat.porId(id);
    if (!p) {
      showErro();
      return;
    }

    if (errEl) errEl.hidden = true;

    var back = document.getElementById("detalhe-voltar");
    // Topo: volta para a Home quando a navegação veio do catálogo por categoria.
    // Mantém o comportamento atual para origem=index (já está OK).
    var backHref = origem === "catalogo" ? "index.html" : voltarDetalhes(origem, categoria);
    if (origem === "catalogo") {
      try {
        var savedUrl = sessionStorage.getItem("oseucro:catalogo:returnUrl");
        // Não sobrescreve o "voltar ao home" do topo.
      } catch (e) {}
    }
    if (back) {
      back.href = backHref;
      back.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.assign(normalizeRelativeHref(backHref));
      });
    }

    var backCarousel = document.getElementById("detalhe-carrossel-voltar");
    if (backCarousel) {
      var carHref = voltarDetalhes(origem, categoria);
      try {
        if (origem === "index") {
          var idxUrl = sessionStorage.getItem("oseucro:index:returnUrl");
          if (idxUrl) carHref = idxUrl;
        }
        if (origem === "catalogo") {
          var catUrl = sessionStorage.getItem("oseucro:catalogo:returnUrl");
          if (catUrl) carHref = catUrl;
        }
      } catch (e) {}
      carHref = normalizeRelativeHref(carHref);
      backCarousel.href = carHref;
      backCarousel.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.assign(carHref);
      });
    }

    function uniqueImages(produto) {
      var imgs = [];
      if (produto && Array.isArray(produto.imagens)) imgs = produto.imagens.slice();
      else if (produto && produto.imagem) imgs = [produto.imagem];
      imgs = imgs
        .map(function (s) {
          return (s || "").trim();
        })
        .filter(Boolean);
      return Array.from(new Set(imgs));
    }

    function renderCarousel(produto) {
      var root = document.getElementById("detalhe-carrossel");
      var track = document.getElementById("detalhe-carrossel-track");
      var dots = document.getElementById("detalhe-carrossel-dots");
      if (!root || !track || !dots) return;

      var imgs = uniqueImages(produto);
      if (imgs.length === 0) return;

      track.innerHTML = "";
      dots.innerHTML = "";

      var index = 0;
      var prevBtn = root.querySelector("[data-carousel-prev]");
      var nextBtn = root.querySelector("[data-carousel-next]");

      function setIndex(i) {
        var max = imgs.length - 1;
        if (i < 0) i = 0;
        if (i > max) i = max;
        index = i;
        track.style.transform = "translateX(" + -index * 100 + "%)";

        if (prevBtn) prevBtn.disabled = index === 0;
        if (nextBtn) nextBtn.disabled = index === max;
        Array.from(dots.children).forEach(function (b, bi) {
          if (bi === index) b.classList.add("is-active");
          else b.classList.remove("is-active");
        });
        track.setAttribute("aria-label", "Imagem " + (index + 1) + " de " + imgs.length);
      }

      imgs.forEach(function (src, i) {
        var slide = document.createElement("div");
        slide.className = "oseucro-carousel__slide";

        var img = document.createElement("img");
        img.src = src;
        img.alt = produto && produto.nome ? produto.nome + " — imagem " + (i + 1) : "Imagem do produto";
        img.loading = i === 0 ? "eager" : "lazy";
        img.decoding = "async";

        slide.appendChild(img);
        track.appendChild(slide);

        var dot = document.createElement("button");
        dot.type = "button";
        dot.className = "oseucro-carousel__dot";
        dot.setAttribute("aria-label", "Ir para imagem " + (i + 1));
        dot.addEventListener("click", function () {
          setIndex(i);
        });
        dots.appendChild(dot);
      });

      function goPrev() {
        setIndex(index - 1);
      }
      function goNext() {
        setIndex(index + 1);
      }

      if (prevBtn) prevBtn.addEventListener("click", goPrev);
      if (nextBtn) nextBtn.addEventListener("click", goNext);

      root.tabIndex = 0;
      root.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          goPrev();
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          goNext();
        }
      });

      var startX = 0;
      var startY = 0;
      var tracking = false;

      function onTouchStart(ev) {
        if (!ev.touches || ev.touches.length !== 1) return;
        tracking = true;
        startX = ev.touches[0].clientX;
        startY = ev.touches[0].clientY;
      }
      function onTouchEnd(ev) {
        if (!tracking) return;
        tracking = false;
        var t = (ev.changedTouches && ev.changedTouches[0]) || null;
        if (!t) return;
        var dx = t.clientX - startX;
        var dy = t.clientY - startY;
        if (Math.abs(dx) < 30 || Math.abs(dx) < Math.abs(dy)) return;
        if (dx > 0) goPrev();
        else goNext();
      }

      root.addEventListener("touchstart", onTouchStart, { passive: true });
      root.addEventListener("touchend", onTouchEnd, { passive: true });

      if (imgs.length <= 1) {
        if (prevBtn) prevBtn.disabled = true;
        if (nextBtn) nextBtn.disabled = true;
        dots.style.display = "none";
      } else {
        dots.style.display = "";
      }

      setIndex(0);
    }

    renderCarousel(p);

    var titulo = document.getElementById("detalhe-titulo");
    if (titulo) titulo.textContent = p.nome;

    var precos = p.variantes.map(function (v) {
      return v.preco;
    });
    var minP = Math.min.apply(null, precos);
    var maxP = Math.max.apply(null, precos);
    var precoEl = document.getElementById("detalhe-preco");
    if (precoEl) {
      if (minP === maxP) {
        precoEl.textContent = cat.formatBRL(minP);
      } else {
        precoEl.textContent = "A partir de " + cat.formatBRL(minP);
      }
    }

    var cores = p.variantes
      .map(function (v) {
        return (v.cor || "").trim();
      })
      .filter(Boolean);
    var coresUnicas = Array.from(new Set(cores));

    var corEl = document.getElementById("detalhe-cor");
    if (corEl) {
      corEl.textContent = coresUnicas.join(", ");
    }

    var fioEl = document.getElementById("detalhe-fio");
    if (fioEl) {
      fioEl.textContent = p.fio;
    }

    var medidasEl = document.getElementById("detalhe-medidas");
    if (medidasEl) {
      var medidas = p.variantes
        .map(function (v) {
          return (v.tamanho || "").trim();
        })
        .filter(Boolean);
      var medidaPrincipal = medidas.length ? medidas[0] : "30 cm";
      var descricaoPorCategoria = {
        colares: "a medida refere-se ao comprimento total da peça.",
        toucas: "a medida refere-se ao contorno aproximado da peça.",
        cropped: "a medida refere-se ao comprimento da peça no corpo.",
        bandanas: "a medida refere-se ao comprimento total da peça aberta.",
        bags: "a medida refere-se ao tamanho total da peça, incluindo alças.",
        bolsas: "a medida refere-se ao tamanho total da peça, incluindo alças.",
        pareos: "Sob medida.",
      };
      var descricaoMedida =
        descricaoPorCategoria[p.categoria] ||
        "a medida refere-se ao comprimento total da peça.";
      medidasEl.textContent = medidaPrincipal + " - " + descricaoMedida;
    }

    var whatsappBtn = document.getElementById("detalhe-whatsapp");
    if (whatsappBtn) {
      whatsappBtn.href = whatsappUrl(mensagemWhatsappProduto(p));
    }

    if (okEl) okEl.hidden = false;
  }

  function initCatalogo() {
    var cat = window.OSEUCRO_CATALOGO;
    if (!cat) return;

    var params = new URLSearchParams(window.location.search);
    var ativa = params.get("categoria") || "todos";

    var voltarTopoBtn = document.getElementById("catalogo-voltar-topo");
    if (voltarTopoBtn) {
      voltarTopoBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    document.querySelectorAll("[data-cat-link]").forEach(function (a) {
      var c = a.getAttribute("data-cat-link");
      var isActive =
        (c === "todos" && ativa === "todos") || c === ativa;
      if (isActive) {
        a.classList.add("bg-primary", "text-on-primary", "shadow-sm");
        a.classList.remove(
          "bg-surface-container-low",
          "text-on-surface-variant",
          "hover:bg-surface-container-high"
        );
      } else {
        a.classList.remove("bg-primary", "text-on-primary", "shadow-sm");
        a.classList.add(
          "bg-surface-container-low",
          "text-on-surface-variant",
          "hover:bg-surface-container-high"
        );
      }
    });

    // UX: garante que o botão ativo fique visível no menu horizontal.
    try {
      var activeLink = document.querySelector(
        '[data-cat-link].bg-primary'
      );
      if (activeLink && activeLink.scrollIntoView) {
        activeLink.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    } catch (e) {}

    var lista = cat.porCategoria(ativa === "todos" ? null : ativa);
    var grid = document.getElementById("catalogo-grid");
    if (!grid) return;
    var tituloColecao = document.getElementById("catalogo-colecao-titulo");

    if (ativa !== "todos" && COLECOES_POR_CATEGORIA[ativa]) {
      if (!tituloColecao) {
        var pontoInsercao = document.getElementById("catalogo-vazio") || grid;
        tituloColecao = document.createElement("h4");
        tituloColecao.id = "catalogo-colecao-titulo";
        tituloColecao.className =
          "font-headline text-2xl md:text-3xl text-on-surface leading-tight mb-6";
        grid.parentNode.insertBefore(tituloColecao, pontoInsercao);
      }
      tituloColecao.innerHTML =
        'Coleção <span class="italic text-primary">' +
        escapeHtml(COLECOES_POR_CATEGORIA[ativa]) +
        "</span>";
      tituloColecao.hidden = false;
    } else if (tituloColecao) {
      tituloColecao.hidden = true;
    }

    grid.innerHTML = "";
    lista.forEach(function (p) {
      var minP = cat.menorPreco(p);
      var maxP = Math.max.apply(
        null,
        p.variantes.map(function (v) {
          return v.preco;
        })
      );
      var precoTxt =
        minP === maxP
          ? cat.formatBRL(minP)
          : "A partir de " + cat.formatBRL(minP);

      var art = document.createElement("article");
      art.className =
        "bg-surface-container-low rounded-xl overflow-hidden flex flex-col shadow-sm border border-outline-variant/10";
      art.innerHTML =
        '<div class="aspect-square overflow-hidden">' +
        '<a href="' +
        detalheUrl(p.id, {
          origem: "catalogo",
          categoria: ativa,
        }) +
        '" class="block h-full">' +
        '<img src="' +
        escapeAttr(p.imagem) +
        '" alt="' +
        escapeAttr(p.nome) +
        '" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy"/>' +
        "</a></div>" +
        '<div class="p-4 flex flex-col flex-1">' +
        '<h3 class="font-headline text-xl text-on-surface mb-1">' +
        escapeHtml(p.nome) +
        "</h3>" +
        '<p class="text-sm text-on-surface-variant mb-1">' +
        escapeHtml(p.fio) +
        "</p>" +
        '<p class="font-headline text-lg text-primary mb-4">' +
        escapeHtml(precoTxt) +
        "</p>" +
        '<a href="' +
        detalheUrl(p.id, {
          origem: "catalogo",
          categoria: ativa,
        }) +
        '" class="mt-auto w-full py-3 text-center rounded-full bg-surface-container-highest text-primary font-label font-bold text-sm hover:bg-primary-container transition-colors">Detalhes</a>' +
        "</div>";
      grid.appendChild(art);
    });

    // Salva a posição ao abrir "Detalhes" e restaura quando voltar.
    try {
      grid.querySelectorAll('a[href^="detalhes.html?"]').forEach(function (a) {
        a.addEventListener("click", function () {
          sessionStorage.setItem("oseucro:catalogo:scrollY", String(window.scrollY || 0));
          sessionStorage.setItem(
            "oseucro:catalogo:returnUrl",
            currentRelativeUrl()
          );
        });
      });

      var savedScroll = sessionStorage.getItem("oseucro:catalogo:scrollY");
      var shouldRestore = !!savedScroll && !params.has("noRestore");
      if (shouldRestore) {
        var y = parseInt(savedScroll, 10);
        if (!isNaN(y)) {
          // Aguarda um tick para garantir layout do grid.
          setTimeout(function () {
            window.scrollTo({ top: y, behavior: "auto" });
          }, 0);
        }
        sessionStorage.removeItem("oseucro:catalogo:scrollY");
      }
    } catch (e) {}

    var empty = document.getElementById("catalogo-vazio");
    if (empty) empty.hidden = lista.length > 0;
  }

  function initCopyrightFooter() {
    var footer = document.querySelector("footer");
    if (!footer) {
      var main = document.querySelector("main");
      if (!main || !main.parentNode) return;
      footer = document.createElement("footer");
      footer.className =
        "px-6 pb-36 text-center text-sm text-on-surface-variant";
      main.parentNode.insertBefore(footer, main.nextSibling);
    }

    var texto =
      "\u00A9 2026 – Todos os direitos reservados. Desenvolvido por @techlis.digital";
    var copyright = footer.querySelector("[data-site-copyright]");

    if (!copyright) {
      copyright = document.createElement("p");
      copyright.setAttribute("data-site-copyright", "true");
      copyright.className =
        "mt-4 text-xs md:text-sm text-on-surface-variant/90 leading-relaxed max-w-3xl mx-auto";
      footer.appendChild(copyright);
    }

    copyright.textContent = texto;
  }

  function bindWhatsAppIcons() {
    document.querySelectorAll("[data-whatsapp-icon]").forEach(function (el) {
      el.href = whatsappUrl();
      el.setAttribute("aria-label", "WhatsApp");
    });
  }

  function initIndexDrawer() {
    var btn = document.getElementById("menu-drawer-btn");
    var backdrop = document.getElementById("nav-drawer-backdrop");
    var panel = document.getElementById("nav-drawer-panel");
    var closeBtn = document.getElementById("nav-drawer-close");
    if (!btn || !backdrop || !panel) return;

    function open() {
      backdrop.classList.add("is-open");
      panel.classList.add("is-open");
      backdrop.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function close() {
      backdrop.classList.remove("is-open");
      panel.classList.remove("is-open");
      backdrop.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    btn.addEventListener("click", open);
    backdrop.addEventListener("click", close);
    if (closeBtn) closeBtn.addEventListener("click", close);
    panel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", close);
    });
  }

  function initIndexVoltarOrigem() {
    // Salva ponto exato (card/imagem) ao abrir "Detalhes" a partir da index.
    var anchors = document.querySelectorAll('a[href^="detalhes.html"]');
    if (!anchors || !anchors.length) return;

    anchors.forEach(function (a) {
      var href = a.getAttribute("href") || "";
      if (href.indexOf("origem=index") === -1) return;

      a.addEventListener("click", function () {
        try {
          // Garante um alvo para voltar (hash) sem alterar o HTML.
          if (!a.id) {
            var u = new URL(href, window.location.href);
            var pid = sanitizeProductId(u.searchParams.get("id") || "");
            a.id = pid ? "oseucro-origem-" + pid : "oseucro-origem";
          }
          sessionStorage.setItem("oseucro:index:scrollY", String(window.scrollY || 0));
          sessionStorage.setItem(
            "oseucro:index:returnUrl",
            currentRelativeUrl() + "#" + a.id
          );
        } catch (e) {}
      });
    });

    // Restaura a rolagem quando voltamos para a index.
    try {
      var saved = sessionStorage.getItem("oseucro:index:scrollY");
      if (saved) {
        var y = parseInt(saved, 10);
        if (!isNaN(y)) {
          setTimeout(function () {
            window.scrollTo({ top: y, behavior: "auto" });
          }, 0);
        }
        sessionStorage.removeItem("oseucro:index:scrollY");
      }
    } catch (e) {}
  }

  function initVoltarTopoPaginas() {
    var btn = document.getElementById("page-voltar-topo");
    if (!btn) return;
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    bindWhatsAppIcons();
    initIndexDrawer();
    initIndexVoltarOrigem();
    initVoltarTopoPaginas();
    initCopyrightFooter();
    var path = window.location.pathname || "";
    if (path.indexOf("detalhes.html") !== -1) initDetalhe();
    if (path.indexOf("catalogo.html") !== -1) initCatalogo();
  });

  window.OSEUCRO_APP = {
    whatsappUrl: whatsappUrl,
    detalheUrl: detalheUrl,
    catalogoUrl: catalogoUrl,
    voltarDetalhes: voltarDetalhes,
  };
})();