/* =====================================================================
   Isabella de Luna — Psicóloga
   ---------------------------------------------------------------------
   >>> EDITE APENAS O BLOCO "CONFIG" ABAIXO. <<<
   Aqui ficam o número do WhatsApp (que monta todos os botões do site) e os
   poucos dados ainda em aberto. Campos deixados em branco aparecem como um
   marcador visível na página, para não passarem despercebidos.

   CRP, endereço, Instagram e e-mail estão escritos direto no HTML, para
   serem lidos por buscadores mesmo sem JavaScript.
   ===================================================================== */

const CONFIG = {
  // Número do WhatsApp com DDI e DDD, apenas dígitos. Ex.: "5511987654321"
  whatsapp: "5581993239438",

  // Mensagem que já vem escrita quando a pessoa abre a conversa.
  // Esta é a versão em português; a versão em inglês fica em i18n.js,
  // na chave "wa.padrao", e entra sozinha quando o site está em EN.
  mensagemPadrao:
    "Olá, Isabella! Encontrei seu site e gostaria de saber mais sobre o atendimento psicológico.",

  // Data da última revisão da Política de Privacidade. Ex.: "10 de março de 2026"
  dataPolitica: ""
};

/* ===================================================================== */

(function () {
  "use strict";

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------------------------------------------- textos configuráveis */

  const ROTULOS = {
    dataPolitica: "[inserir data]"
  };

  $$("[data-cfg]").forEach((el) => {
    const chave = el.dataset.cfg;
    const valor = (CONFIG[chave] || "").trim();
    el.textContent = valor || ROTULOS[chave] || "";
    if (!valor) el.classList.add("pendente");
  });

  /* ------------------------------------------------ links do WhatsApp */

  const numero = (CONFIG.whatsapp || "").replace(/\D/g, "");

  /* Remonta os links. O i18n chama esta função a cada troca de idioma,
     passando a mensagem padrão já traduzida. */
  function atualizarLinksWhatsApp(mensagemPadrao) {
    if (!numero) return;
    const padrao = mensagemPadrao || CONFIG.mensagemPadrao;
    $$("[data-wa]").forEach((el) => {
      const msg = el.dataset.waMsg || padrao;
      el.href = "https://wa.me/" + numero + "?text=" + encodeURIComponent(msg);
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    });
  }

  window.atualizarLinksWhatsApp = atualizarLinksWhatsApp;

  if (numero) {
    atualizarLinksWhatsApp();
  } else {
    console.warn(
      "[Isabella de Luna] Configure CONFIG.whatsapp em script.js — " +
      "os botões de WhatsApp ainda não têm destino."
    );
  }

  /* Busca um rótulo no dicionário de idiomas, com o português como
     alternativa caso o i18n.js não tenha carregado. */
  function traduzir(chave, alternativa) {
    try {
      const dic = I18N[window.IDIOMA_ATUAL || "pt"];
      return (dic && dic[chave]) || alternativa;
    } catch (e) {
      return alternativa;
    }
  }

  /* ------------------------------------------------------- cabeçalho */

  const cabecalho = $("#cabecalho");
  const zapFlutuante = $(".zap-flutuante");
  let ultimoScroll = -1;


  function aoRolar() {
    const y = window.scrollY;
    if (y === ultimoScroll) return;
    ultimoScroll = y;

    if (cabecalho) cabecalho.classList.toggle("cabecalho--fixo", y > 24);
    if (zapFlutuante) {
      zapFlutuante.classList.toggle("visivel", y > window.innerHeight * 0.65);
    }
  }

  aoRolar();
  window.addEventListener("scroll", aoRolar, { passive: true });

  /* ----------------------------------------------------- menu mobile */

  const botaoMenu = $("#hamburguer");
  const navegacao = $("#navegacao");

  if (botaoMenu && navegacao) {

  function fecharMenu() {
    cabecalho.classList.remove("cabecalho--menu");
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-label", traduzir("menu.abrir", "Abrir menu"));
    document.body.style.removeProperty("overflow");
  }

  function alternarMenu() {
    const aberto = cabecalho.classList.toggle("cabecalho--menu");
    botaoMenu.setAttribute("aria-expanded", String(aberto));
    botaoMenu.setAttribute("aria-label", aberto
      ? traduzir("menu.fechar", "Fechar menu")
      : traduzir("menu.abrir", "Abrir menu"));
    document.body.style.overflow = aberto ? "hidden" : "";
  }

  botaoMenu.addEventListener("click", alternarMenu);
  $$("a", navegacao).forEach((a) => a.addEventListener("click", fecharMenu));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && cabecalho.classList.contains("cabecalho--menu")) {
      fecharMenu();
      botaoMenu.focus();
    }
  });

  const consultaLarga = window.matchMedia("(min-width: 901px)");
  consultaLarga.addEventListener("change", (e) => { if (e.matches) fecharMenu(); });

  }

  /* -------------------------------------------------------- acordeão */

  const gatilhos = $$(".acordeao__gatilho");

  gatilhos.forEach((gatilho) => {
    const painel = document.getElementById(gatilho.getAttribute("aria-controls"));
    painel.hidden = false;               // o controle passa a ser do CSS/JS

    gatilho.addEventListener("click", () => {
      const abrindo = gatilho.getAttribute("aria-expanded") !== "true";

      // mantém apenas uma resposta aberta por vez
      gatilhos.forEach((outro) => {
        if (outro === gatilho) return;
        const alvo = document.getElementById(outro.getAttribute("aria-controls"));
        outro.setAttribute("aria-expanded", "false");
        alvo.classList.remove("aberto");
        alvo.style.maxHeight = "0px";
      });

      gatilho.setAttribute("aria-expanded", String(abrindo));
      painel.classList.toggle("aberto", abrindo);
      painel.style.maxHeight = abrindo ? painel.scrollHeight + "px" : "0px";
    });
  });

  window.addEventListener("resize", () => {
    const aberto = $(".acordeao__painel.aberto");
    if (aberto) aberto.style.maxHeight = aberto.scrollHeight + "px";
  });

  /* ------------------------------------------------------- filtros FAQ */

  const botoesFiltro = $$(".faq__filtro");
  const gruposAcordeao = $$(".acordeao__grupo");

  if (botoesFiltro.length > 0) {
    botoesFiltro.forEach((botao) => {
      botao.addEventListener("click", () => {
        const categoria = botao.dataset.categoria;

        // atualiza estado visual dos botões
        botoesFiltro.forEach((b) => {
          const ativo = b.dataset.categoria === categoria;
          b.classList.toggle("faq__filtro--ativo", ativo);
          b.setAttribute("aria-pressed", String(ativo));
        });

        // mostra/esconde grupos e fecha acordeões abertos
        gruposAcordeao.forEach((grupo) => {
          const visivel = categoria === "todos" || grupo.dataset.categoria === categoria;
          grupo.hidden = !visivel;

          // fecha acordeões abertos ao trocar filtro
          $$(".acordeao__gatilho", grupo).forEach((gatilho) => {
            const painel = document.getElementById(gatilho.getAttribute("aria-controls"));
            gatilho.setAttribute("aria-expanded", "false");
            painel.classList.remove("aberto");
            painel.style.maxHeight = "0px";
          });
        });
      });
    });
  }

  /* ------------------------------------------ revelação no scroll */

  const alvos = $$(".reveal, .etapas__lista");

  if (!("IntersectionObserver" in window)) {
    alvos.forEach((el) => el.classList.add("visivel"));
  } else {
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return;
          entrada.target.classList.add("visivel");
          observador.unobserve(entrada.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );
    alvos.forEach((el) => observador.observe(el));
  }

  /* ----------------------------------------------------------- ano */

  const ano = $("#ano");
  if (ano) ano.textContent = String(new Date().getFullYear());
})();
