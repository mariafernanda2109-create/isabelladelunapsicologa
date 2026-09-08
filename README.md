# Isabella de Luna — site institucional

Site estático (HTML + CSS + JavaScript, sem dependências e sem build) construído sobre a
identidade visual existente: o coração anatômico e as linhas contínuas.

Conceito visual: **"Dar forma ao que sentimos."**

---

## 1. Dados do site

Os dados profissionais estão escritos **direto no HTML** — assim são lidos por buscadores
mesmo sem JavaScript:

| Dado | Valor | Onde aparece |
| --- | --- | --- |
| CRP | 02/29244 | seção Sobre, CTA final, rodapé, política |
| Endereço | Edifício Ambassador — Rua José de Alencar, 44A, Sala 53, Boa Vista, Recife (PE), CEP 50070-030 | bloco Presencial (com link para o mapa), rodapé, política |
| Instagram | [@existiremcor.psi](https://www.instagram.com/existiremcor.psi/) | rodapé |
| E-mail | existiremcor.psi@gmail.com | rodapé, política |
| Duração da sessão | aproximadamente 45 minutos | FAQ |

O bloco `CONFIG`, no topo de [`script.js`](script.js), guarda só o que monta links:

```js
const CONFIG = {
  whatsapp: "5581993239438",     // DDI + DDD + número, só dígitos
  mensagemPadrao: "Olá, Isabella! ...",
  dataPolitica: "2026-09-08"     // AAAA-MM-DD
};
```

A `dataPolitica` é escrita em ISO e o site formata sozinho conforme o idioma:
"8 de setembro de 2026" em português, "September 8, 2026" em inglês. Sempre que você
revisar o texto da política, atualize essa data.

### Ainda em aberto

- **Revisão jurídica da política.** O texto de
  [`politica-de-privacidade.html`](politica-de-privacidade.html) partiu de um modelo.
  Confira cada item com apoio jurídico e ajuste conforme as ferramentas realmente usadas
  no site (hospedagem, analytics, pixels). Ao revisar, atualize a `dataPolitica`.
- **A política em inglês é informativa.** Ela cita a LGPD e o Código de Ética do CFP; a
  versão em português é a que vale juridicamente. Vale uma nota dizendo isso.
- **`<meta property="og:image">`** aponta para o ícone; troque por uma imagem de
  compartilhamento 1200×630 se quiser algo mais elaborado.

Enquanto um campo do `CONFIG` estiver vazio, ele aparece no site como um marcador
destacado — de propósito, para não ir ao ar em branco.

Nenhuma especialização, abordagem, preço ou depoimento foi inventado.

---

## 2. Como rodar localmente

Por causa dos caminhos relativos, abra por um servidor, não por `file://`:

```bash
python -m http.server 5173
```

Depois acesse `http://localhost:5173`.

> O `python -m http.server` não envia cabeçalhos de cache, então o navegador pode
> segurar uma versão antiga do CSS ou do JS depois de você editar. Se uma mudança
> não aparecer, recarregue com **Ctrl+Shift+R**. Em produção isso não acontece: o
> `vercel.json` manda revalidar HTML, CSS e JS a cada visita.

---

## 2.1 Como publicar (GitHub → Vercel)

O código vive em
[github.com/mariafernanda2109-create/isabelladelunapsicologa](https://github.com/mariafernanda2109-create/isabelladelunapsicologa).

**Para publicar uma mudança:**

```bash
git add -A
git commit -m "descreva a mudança"
git push
```

A Vercel republica sozinha a cada push na `main`.

**Para ligar a Vercel na primeira vez:**

1. Entre em [vercel.com](https://vercel.com) com a conta do GitHub.
2. *Add New… → Project* e escolha o repositório `isabelladelunapsicologa`.
3. Não mexa em nada nas configurações — **Framework Preset: Other**, sem comando de
   build, sem diretório de saída. É um site estático puro.
4. *Deploy*.

Não há etapa de build: a Vercel só serve os arquivos. O `vercel.json` já cuida dos
cabeçalhos de cache e de segurança.

### Sobre o `?v=` nos arquivos

O HTML carrega `styles.css?v=4`, `script.js?v=3` e `i18n.js?v=1`. Com os cabeçalhos do
`vercel.json` isso deixou de ser obrigatório — o navegador revalida a cada visita de
qualquer jeito. O número continua ali só para ajudar no servidor local. Se você quiser
forçar todo mundo a buscar de novo depois de uma mudança grande, aumente o número; se
esquecer, o site continua correto.

---

## 3. Estrutura

```
index.html                    página única, com as 10 seções do briefing
politica-de-privacidade.html  página de apoio
styles.css                    sistema visual completo (tokens no :root)
script.js                     CONFIG + header, menu, acordeão, filtro do FAQ, animações
i18n.js                       dicionário PT/EN + motor da troca de idioma
vercel.json                   cabeçalhos de cache e segurança da hospedagem
.vercelignore                 o que fica no GitHub mas não vai para o site
gerar-assets.py               regenera os assets a partir dos originais
assets/
  coracao-creme.png           marca com fundo transparente (para fundos vermelhos)
  coracao-vermelho.png        versão vermelha (para fundos claros — header fixo)
  coracao-vinho.png           variação escura
  linhas-creme.png            padrão de linhas recortado, tom claro
  linhas-vermelho.png         padrão de linhas recortado, tom vermelho
  linhas-claro.png            variação off-white
  isabella.jpg                foto (1200px) + isabella-small.jpg (420px)
  favicon.png / apple-touch-icon.png
  originais/                  os JPEGs originais da identidade e a foto sem tratamento
```

### Sobre os assets

Os arquivos originais da identidade são JPEGs com fundo chapado, o que impede usá-los
sobre fundos diferentes. O script `gerar-assets.py` separa a marca do fundo por canal de
cor e gera versões com transparência, além de recolorir o padrão de linhas.

Se você substituir os originais em `assets/originais/`, rode de novo:

```bash
python gerar-assets.py
```

Requer `Pillow` e `numpy` (`pip install Pillow numpy`).

---

## 4. Sistema visual

**Cores** (definidas em `:root`, em `styles.css`)

| Token | Valor | Uso |
| --- | --- | --- |
| `--vermelho` | `#9E2027` | cor de personalidade: hero, exterior, CTA final |
| `--vinho` | `#801A21` | rodapé, títulos sobre fundos claros |
| `--nude` | `#E3BD98` | seções de respiro |
| `--nude-claro` | `#EFD9B6` | textos pequenos sobre vermelho (contraste AA) |
| `--creme` | `#F7E4C4` | seções de respiro, botões claros |
| `--claro` | `#FBF5EC` | fundo padrão |

A distribuição alterna vermelho e tons claros a cada seção, de modo que o vermelho
apareça com força sem pesar: hero (vermelho) → conceito (nude) → sobre (off-white) →
serviços (creme) → modalidades (off-white) → diferenciais (nude) → como funciona
(off-white) → exterior (vermelho) → FAQ (creme) → CTA final (vermelho) → rodapé (vinho).

**Tipografia** — DM Serif Display nos títulos, Manrope no restante. Todos os tamanhos
usam `clamp()`, então escalam sozinhos entre o celular e o desktop.

**Linhas orgânicas** — a classe `.textura` aplica o padrão da identidade como camada de
fundo em opacidade baixa. As variações `--creme`, `--vermelho` e `--canto` cobrem os
diferentes contextos. Os serviços recebem um fragmento das linhas que reage ao hover.

---

## 5. WhatsApp

É o único caminho de conversão do site. Aparece em seis pontos: header, hero, serviços
(uma mensagem específica por serviço), modalidades, como funciona, brasileiros no
exterior e CTA final — além do botão flutuante no desktop e da barra fixa no celular.

São 14 links no total, todos montados pelo JavaScript a partir de `CONFIG.whatsapp`
(`5581993239438`). Para dar a um botão uma mensagem própria, basta o atributo
`data-wa-msg`:

```html
<a data-wa data-wa-msg="Olá, Isabella! Gostaria de saber sobre..." href="#contato">…</a>
```

---

## 6. Idiomas (PT-BR / EN)

O site inteiro existe nos dois idiomas. O botão `PT | EN` fica no header (e dentro do
menu, no celular). A escolha é guardada no navegador e vale para as duas páginas.

**Todo texto mora em [`i18n.js`](i18n.js)**, num único dicionário com 169 chaves em cada
idioma. O português também continua escrito no HTML — assim a página funciona sem
JavaScript e os buscadores leem o conteúdo.

Para ligar um texto novo ao dicionário:

```html
<p data-i18n="secao.chave">Texto em português</p>              <!-- texto simples -->
<p data-i18n-html="secao.chave">Texto com <em>marcação</em></p> <!-- com HTML dentro -->
<img data-i18n-attr="alt:secao.chave" alt="Descrição">          <!-- atributo -->
```

Depois crie a chave nos **dois** idiomas em `i18n.js`. Se faltar em um deles, aquele
trecho fica em português.

**Não são traduzidos, de propósito:** o nome "Isabella de Luna", "WhatsApp", o CRP, o
e-mail, o @ do Instagram e os numerais decorativos das seções.

O endereço traduz só os genéricos (`Sala` → `Suite`, `CEP` → `ZIP`); rua, bairro e cidade
ficam como estão, por precisão postal.

---

## 7. Acessibilidade e performance

- HTML semântico, um único `<h1>`, hierarquia de `<h2>`/`<h3>` por seção.
- Acordeão com `aria-expanded` / `aria-controls`; menu com `aria-expanded` e fechamento
  por `Esc`; link "pular para o conteúdo"; `:focus-visible` visível em tudo.
- Contraste conferido nas combinações de texto sobre vermelho, nude, creme e vinho.
- Alvos de toque a partir de 52px na barra fixa e 62px nos itens do menu.
- `prefers-reduced-motion` desliga todas as animações.
- Sem JavaScript, nada fica escondido: as respostas do FAQ aparecem abertas.
- Zero dependências externas além das fontes do Google. Imagens com `width`/`height`
  declarados (sem deslocamento de layout), `loading="lazy"` fora da primeira dobra e
  `srcset` na foto.
- Sem rolagem horizontal — verificado de 360px a 1920px.
- Dados estruturados JSON-LD do tipo `Psychologist`, com endereço, telefone,
  e-mail, Instagram e os três serviços — base para o SEO local em Recife.
