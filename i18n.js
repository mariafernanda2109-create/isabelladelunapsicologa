/* =====================================================================
   Isabella de Luna — dicionário de idiomas (PT-BR / EN)
   ---------------------------------------------------------------------
   Todas as strings visíveis do site moram aqui. O português continua
   escrito no HTML como fallback (para quem abre a página sem JavaScript
   e para os buscadores); este arquivo é a fonte de verdade da troca.

   Como ligar um texto a uma chave, no HTML:

     data-i18n="chave"                 → troca o textContent
     data-i18n-html="chave"            → troca o innerHTML (texto com <em>, <br>…)
     data-i18n-attr="aria-label:chave" → troca um atributo
                                         (vários: "alt:a|title:b")

   Regra ao adicionar texto novo: escreva em português no HTML, crie a
   chave nos DOIS idiomas abaixo e aponte o elemento com data-i18n.
   ===================================================================== */

const I18N = {

  /* =================================================================== */
  /* PORTUGUÊS                                                           */
  /* =================================================================== */
  pt: {
    /* --- metadados ------------------------------------------------- */
    "meta.titulo": "Isabella de Luna | Psicóloga | Psicoterapia e Avaliação Psicológica",
    "meta.descricao": "Psicoterapia, psicoterapia breve e avaliação psicológica em Recife (PE) e online — em português e inglês — para o Brasil, para brasileiros no exterior e para estrangeiros.",
    "meta.tituloPolitica": "Política de Privacidade | Isabella de Luna",
    "meta.descricaoPolitica": "Política de Privacidade do site de Isabella de Luna, psicóloga.",

    /* --- cabeçalho e navegação ------------------------------------- */
    "geral.pular": "Pular para o conteúdo",
    "marca.aria": "Isabella de Luna, Psicóloga — ir para o início",
    "marca.papel": "Psicóloga",
    "nav.aria": "Navegação principal",
    "nav.sobre": "Sobre mim",
    "nav.atendimentos": "Atendimentos",
    "nav.comoFunciona": "Como funciona",
    "nav.faq": "FAQ",
    "menu.abrir": "Abrir menu",
    "menu.fechar": "Fechar menu",
    "idioma.aria": "Selecionar idioma",
    "idioma.pt": "Português",
    "idioma.en": "Inglês",

    /* --- hero ------------------------------------------------------ */
    "hero.rotulo": "Psicoterapia <span aria-hidden=\"true\">•</span> Psicoterapia breve <span aria-hidden=\"true\">•</span> Avaliação psicológica",
    "hero.titulo": "Criando espaços onde pessoas <em>não precisem fingir.</em>",
    "hero.sub": "Psicoterapia, avaliação psicológica e psicoterapia breve com escuta, cuidado e um olhar individual para cada história.",
    "hero.cta": "Conversar pelo WhatsApp <span class=\"seta\" aria-hidden=\"true\">→</span>",
    "hero.alt": "Símbolo da marca Isabella de Luna: um coração anatômico atravessado por linhas contínuas.",

    /* --- conceito -------------------------------------------------- */
    "conceito.titulo": "Te enxergar é o meu compromisso.",
    "conceito.texto": "Vamos criar, juntos, mais uma possibilidade de existência para você.",

    /* --- sobre ----------------------------------------------------- */
    "sobre.alt": "Retrato de Isabella de Luna, psicóloga.",
    "sobre.rotulo": "Sobre mim",
    "sobre.titulo": "Olá, me chamo Isabella de Luna.",
    "sobre.p1": "Sou psicóloga clínica e educacional formada pelo Centro Universitário UniFAFIRE, especialista em avaliação psicológica, e ofereço atendimentos para adultos, adolescentes e crianças a partir dos 3 anos de idade.",
    "sobre.p2": "Sigo a abordagem da Gestalt-terapia, que me permite olhar para cada pessoa de forma singular e trazer o foco para o que ocorre no hoje, aqui e agora.",
    "sobre.p3": "Estar atenta aos impactos sociais é um compromisso indispensável ao meu fazer. Por isso, o aprofundamento nas temáticas raciais e na vivência da comunidade LGBTQIAP+ é uma das bases da minha clínica.",
    "sobre.cta": "Conhecer meu trabalho <span class=\"seta\" aria-hidden=\"true\">→</span>",

    /* --- serviços -------------------------------------------------- */
    "servicos.rotulo": "Atendimentos",
    "servicos.titulo": "Formas de cuidado para diferentes necessidades.",
    "servicos.saibaMais": "Saiba mais <span class=\"seta\" aria-hidden=\"true\">→</span>",
    "servico1.categoria": "Psicoterapia",
    "servico1.titulo": "Um espaço para compreender o que está acontecendo.",
    "servico1.p1": "A psicoterapia é um espaço onde criamos possibilidades de existência sem deixar partes nossas de fora.",
    "servico1.p2": "Assim, desenvolvemos os próprios sentidos, escolhemos nossos caminhos e nos tornamos indivíduos autônomos, mas também coletivos, em contato com todas as nossas cores e formas.",
    "servico2.categoria": "Psicoterapia breve",
    "servico2.titulo": "Um processo com foco e tempo definidos.",
    "servico2.p1": "Uma modalidade de acompanhamento voltada para demandas específicas, com ênfase no alívio do sofrimento de forma pontual e orientação para que você saiba como lidar com a situação caso ela surja novamente.",
    "servico3.categoria": "Avaliação psicológica",
    "servico3.titulo": "Investigar também é uma forma de compreender.",
    "servico3.p1": "Um processo de escuta aprofundada para compreender como cada pessoa se relaciona com o mundo, com os estudos, com o trabalho e consigo mesma. Trabalho com as opções de avaliação geral, avaliação com foco em dificuldade de aprendizagem e orientação profissional.",

    /* --- modalidades ----------------------------------------------- */
    "modalidades.rotulo": "Modalidades",
    "modalidades.titulo": "De onde você estiver.",
    "presencial.rotulo": "Presencial",
    "presencial.titulo": "Um espaço reservado para você.",
    "presencial.texto": "Atendimento presencial em Recife (PE), em um espaço pensado para oferecer privacidade, acolhimento e tranquilidade.",
    "presencial.endereco": "<span class=\"endereco__predio\">Edifício Ambassador</span>\n      Rua José de Alencar, 44A &mdash; Sala 53<br>\n      Boa Vista, Recife (PE) &middot; CEP 50070-030",
    "presencial.mapa": "Ver no mapa <span class=\"seta\" aria-hidden=\"true\">→</span>",
    "online.rotulo": "Online",
    "online.titulo": "A mesma escuta, a qualquer distância.",
    "online.texto": "Atendimento online para pessoas em diferentes cidades do Brasil, para brasileiros residentes no exterior e para nativos falantes de inglês.",
    "online.detalheTitulo": "Atendimento bilíngue",
    "online.detalheTexto": "As sessões podem ser conduzidas em português ou em inglês, conforme a sua preferência.",
    "modalidades.fecho": "Se você não tem certeza de qual modalidade ou serviço é mais adequado para o seu momento, podemos conversar antes de definir o atendimento.",
    "modalidades.cta": "Conversar sobre atendimento <span class=\"seta\" aria-hidden=\"true\">→</span>",

    /* --- diferenciais ---------------------------------------------- */
    "diferenciais.titulo": "Um jeito de cuidar que respeita a sua história.",
    "dif1.titulo": "Escuta individualizada",
    "dif1.texto": "Cada processo parte da pessoa, da sua história e da demanda apresentada.",
    "dif2.titulo": "Acolhimento sem julgamentos",
    "dif2.texto": "Um espaço profissional para falar sobre o que está sendo vivido com liberdade e respeito.",
    "dif3.titulo": "Diferentes possibilidades de atendimento",
    "dif3.texto": "Psicoterapia, psicoterapia breve e avaliação psicológica, de acordo com a necessidade.",
    "dif4.titulo": "Presencial ou online",
    "dif4.texto": "Flexibilidade para realizar o atendimento de acordo com sua localização e a modalidade adequada.",

    /* --- como funciona --------------------------------------------- */
    "etapas.rotulo": "Como funciona",
    "etapas.titulo": "Começar pode ser mais simples do que parece.",
    "etapa1.titulo": "Você entra em contato",
    "etapa1.texto": "Envie uma mensagem pelo WhatsApp e conte brevemente o que está buscando.",
    "etapa2.titulo": "Conversamos sobre sua demanda",
    "etapa2.texto": "São esclarecidas suas dúvidas e as informações sobre o atendimento.",
    "etapa3.titulo": "Definimos os próximos passos",
    "etapa3.texto": "A partir da sua necessidade, verificamos a modalidade e a disponibilidade mais adequadas.",
    "etapas.cta": "Falar pelo WhatsApp <span class=\"seta\" aria-hidden=\"true\">→</span>",

    /* --- exterior --------------------------------------------------- */
    "exterior.rotulo": "Brasileiros no exterior e estrangeiros",
    "exterior.titulo": "Suporte psicológico para quem vive fora do país.",
    "exterior.p1": "Morar em outro país pode trazer experiências, mudanças e desafios particulares.",
    "exterior.p2": "Sou fluente em inglês e realizo sessões remotas com brasileiros residentes no exterior e com nativos falantes de inglês, acolhendo as particularidades de quem vive entre culturas. Os atendimentos podem ser conduzidos em português ou em inglês, conforme a sua preferência.",
    "exterior.p3": "Acredito que a distância geográfica não é um impedimento para cuidar da sua saúde mental com o mesmo acolhimento e seriedade.",
    "exterior.cta": "Quero saber sobre o atendimento online <span class=\"seta\" aria-hidden=\"true\">→</span>",
    "exterior.microcopy": "Atendimento bilíngue <span aria-hidden=\"true\">·</span> Português e inglês",

    /* --- FAQ -------------------------------------------------------- */
    "faq.rotulo": "Dúvidas frequentes",
    "faq.titulo": "Talvez você também esteja se perguntando.",
    "faq.filtroAria": "Filtrar perguntas por categoria",
    "faq.filtroTodos": "Todos",
    "faq.grupo1": "Primeiros passos",
    "faq.grupo2": "Psicoterapia",
    "faq.grupo3": "Avaliação psicológica",

    "faq.q1": "Preciso saber o que dizer para agendar uma sessão?",
    "faq.a1": "Não! Na psicoterapia existem muitas possibilidades de como conduzir uma sessão eficaz mesmo que você não saiba ao certo por onde começar.",
    "faq.q2": "Qual a diferença entre psicoterapia e avaliação psicológica?",
    "faq.a2": "A avaliação psicológica tem um número de sessões definido e o objetivo de chegar a um possível diagnóstico. A psicoterapia não tem prazo fixo e tem como foco autoconhecimento, desenvolvimento pessoal e melhora na qualidade de vida do paciente.",
    "faq.q3": "Quanto tempo dura cada sessão?",
    "faq.a3": "As sessões têm duração aproximada de 45 minutos.",
    "faq.q4": "Com que frequência acontecem os atendimentos?",
    "faq.a4": "A frequência é definida considerando a demanda, os objetivos do acompanhamento e a avaliação profissional.",
    "faq.q5": "Como faço para agendar?",
    "faq.a5": "Clique no botão de WhatsApp e envie uma mensagem. Você receberá as informações sobre disponibilidade, modalidade e próximos passos.",

    "faq.q6": "Como funciona a psicoterapia breve?",
    "faq.a6a": "Diferente do acompanhamento tradicional, ela parte de uma queixa específica e trabalha para que você possa compreendê-la, ressignificá-la e encontrar novos caminhos.",
    "faq.a6b": "O serviço pode ser contratado como uma porta de entrada para quem se encontra com alguma dificuldade de engajar na psicoterapia no momento, mas deseja um suporte qualificado.",
    "faq.q7": "Posso fazer apenas uma sessão de psicoterapia?",
    "faq.a7": "Na modalidade de psicoterapia breve ofereço também a possibilidade de sessão única: um espaço de escuta imediata para momentos em que você precisa de um acolhimento rápido, sem compromisso de continuidade, como um plantão psicológico com a mesma profundidade, seriedade, escuta e compromisso ético que guiam minha prática.",
    "faq.q8": "Como funciona a psicoterapia online?",
    "faq.a8": "O atendimento online é realizado por videochamada e pode ser uma alternativa para pessoas que estão em diferentes cidades do Brasil, para brasileiros residentes no exterior e para estrangeiros, observadas as condições aplicáveis à modalidade.",
    "faq.q9": "Quem pode fazer atendimento online?",
    "faq.a9": "Há atendimento online para brasileiros residentes no exterior e para nativos falantes de inglês. Entre em contato para verificar as condições de atendimento para sua localização.",

    "faq.q10": "Como funciona a avaliação psicológica geral?",
    "faq.a10a": "Parte de uma investigação de aspectos emocionais, cognitivos e relacionais — seja como parte de um processo terapêutico ou para esclarecimento diagnóstico. O processo inclui entrevistas, observação e, quando necessário, a aplicação de instrumentos disponíveis dentro da minha formação.",
    "faq.a10b": "Após a análise, entrego um documento com considerações e encaminhamentos, sempre de forma ética, transparente e em conformidade com a Resolução CFP nº 09/2018.",
    "faq.q11": "Como funciona a avaliação psicológica para dificuldades de aprendizagem?",
    "faq.a11": "Atendo crianças e adolescentes encaminhados pela escola ou pela família, compreendendo o jeito único de aprender e identificando barreiras e potencialidades para auxiliar na construção de estratégias pedagógicas e emocionais.",
    "faq.q12": "Como funciona a orientação profissional?",
    "faq.a12": "Essa modalidade é oferecida para jovens e adultos em dúvida sobre qual caminho seguir, ajudando a iluminar interesses, habilidades e valores pessoais.",
    "faq.q13": "A avaliação psicológica é realizada em quantas sessões?",
    "faq.a13": "A duração varia conforme a finalidade e as características de cada avaliação. No primeiro contato, é possível explicar como funciona o processo específico que você procura.",

    /* --- CTA final --------------------------------------------------- */
    "final.titulo": "Talvez o primeiro passo seja conversar.",
    "final.texto": "Se você está considerando iniciar um acompanhamento psicológico, entre em contato para conhecer melhor o trabalho e tirar suas dúvidas.",
    "final.cta": "Conversar pelo WhatsApp <span class=\"seta\" aria-hidden=\"true\">→</span>",
    "final.assinatura": "Isabella de Luna <span aria-hidden=\"true\">·</span> Psicóloga <span aria-hidden=\"true\">·</span> CRP 02/29244",

    /* --- rodapé ------------------------------------------------------ */
    "rodape.papel": "Psicóloga <span aria-hidden=\"true\">·</span> CRP 02/29244",
    "rodape.aria": "Navegação do rodapé",
    "rodape.navegar": "Navegar",
    "rodape.contato": "Contato",
    "rodape.atendimento": "Atendimento",
    "rodape.endereco": "Edifício Ambassador<br>\n        Rua José de Alencar, 44A &mdash; Sala 53<br>\n        Boa Vista, Recife (PE)<br>\n        CEP 50070-030",
    "rodape.info1": "Online para todo o Brasil",
    "rodape.info2": "Online para brasileiros residentes no exterior",
    "rodape.info3": "Online para nativos falantes de inglês",
    "rodape.politica": "Política de Privacidade",
    "rodape.direitos": "Isabella de Luna. Todos os direitos reservados.",
    "rodape.aviso": "Este site tem caráter informativo e não substitui o atendimento profissional.",

    /* --- botões flutuantes ------------------------------------------- */
    "zap.aria": "Conversar pelo WhatsApp",
    "zap.flutuante": "Conversar comigo",
    "zap.barra": "WhatsApp — Conversar comigo <span class=\"seta\" aria-hidden=\"true\">→</span>",

    /* --- mensagens do WhatsApp --------------------------------------- */
    "wa.padrao": "Olá, Isabella! Encontrei seu site e gostaria de saber mais sobre o atendimento psicológico.",
    "wa.trabalho": "Olá, Isabella! Encontrei seu site e gostaria de conhecer melhor o seu trabalho.",
    "wa.psicoterapia": "Olá, Isabella! Encontrei seu site e gostaria de saber mais sobre a psicoterapia.",
    "wa.breve": "Olá, Isabella! Encontrei seu site e gostaria de saber mais sobre a psicoterapia breve.",
    "wa.avaliacao": "Olá, Isabella! Encontrei seu site e gostaria de saber mais sobre a avaliação psicológica.",
    "wa.modalidades": "Olá, Isabella! Encontrei seu site e gostaria de conversar sobre as modalidades de atendimento.",
    "wa.exterior": "Olá, Isabella! Encontrei seu site. Moro fora do Brasil e gostaria de saber sobre o atendimento online.",

    /* --- política de privacidade -------------------------------------- */
    "pol.voltar": "<span class=\"seta\" aria-hidden=\"true\">←</span> Voltar ao site",
    "pol.titulo": "Política de Privacidade",
    "pol.atualizacao": "Última atualização:",
    "pol.h1": "1. Quem é responsável pelos dados",
    "pol.p1": "Este site é mantido por Isabella de Luna, psicóloga, inscrita no CRP 02/29244. O contato para assuntos relacionados a dados pessoais é o e-mail <a href=\"mailto:existiremcor.psi@gmail.com\">existiremcor.psi@gmail.com</a>.",
    "pol.h2": "2. Quais dados são coletados",
    "pol.p2": "Este site é institucional e não possui formulários de cadastro. Os dados eventualmente tratados são:",
    "pol.li2a": "<strong>Dados que você envia voluntariamente:</strong> ao clicar em um botão de WhatsApp, você é direcionado ao aplicativo e as informações que decidir enviar (nome, telefone e o conteúdo da mensagem) passam a ser tratadas nesse canal.",
    "pol.li2b": "<strong>Dados técnicos de navegação:</strong> registros comuns de acesso mantidos pelo serviço de hospedagem, como endereço IP, data e hora do acesso e tipo de navegador.",
    "pol.h3": "3. Para que os dados são utilizados",
    "pol.p3": "As informações enviadas por você são utilizadas exclusivamente para responder ao contato, esclarecer dúvidas sobre os serviços e, quando for o caso, organizar o agendamento de atendimento. Os registros técnicos servem para manter a segurança e o funcionamento do site.",
    "pol.h4": "4. Sigilo profissional",
    "pol.p4": "As informações compartilhadas no contexto de atendimento psicológico são protegidas pelo sigilo profissional previsto no Código de Ética Profissional do Psicólogo, e seu tratamento observa as hipóteses legais aplicáveis.",
    "pol.h5": "5. Compartilhamento",
    "pol.p5": "Seus dados não são vendidos nem cedidos para fins comerciais. O compartilhamento ocorre apenas com prestadores necessários ao funcionamento do site e do canal de atendimento (por exemplo, serviço de hospedagem e o próprio WhatsApp), ou quando houver obrigação legal.",
    "pol.h6": "6. Cookies",
    "pol.p6": "Este site não utiliza cookies próprios de rastreamento nem ferramentas de publicidade. Caso venham a ser adicionadas ferramentas de análise de audiência, esta política será atualizada antes da ativação.",
    "pol.h7": "7. Seus direitos",
    "pol.p7": "Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade ou eliminação dos seus dados, além de informações sobre compartilhamento. Para exercer esses direitos, escreva para <a href=\"mailto:existiremcor.psi@gmail.com\">existiremcor.psi@gmail.com</a>.",
    "pol.h8": "8. Retenção",
    "pol.p8": "As mensagens trocadas são mantidas pelo período necessário ao atendimento da finalidade que motivou o contato e ao cumprimento de obrigações legais e regulamentares aplicáveis à atividade profissional.",
    "pol.h9": "9. Alterações desta política",
    "pol.p9": "Esta política pode ser atualizada a qualquer momento. A data da última revisão está indicada no início da página.",
    "pol.dataPendente": "[inserir data]"
  },

  /* =================================================================== */
  /* ENGLISH                                                             */
  /* =================================================================== */
  en: {
    /* --- metadata --------------------------------------------------- */
    "meta.titulo": "Isabella de Luna | Psychologist | Therapy and Psychological Assessment",
    "meta.descricao": "Therapy, short-term therapy and psychological assessment in Recife, Brazil and online — in English and Portuguese — for Brazilians abroad and for English speakers.",
    "meta.tituloPolitica": "Privacy Policy | Isabella de Luna",
    "meta.descricaoPolitica": "Privacy Policy for the website of Isabella de Luna, psychologist.",

    /* --- header and navigation -------------------------------------- */
    "geral.pular": "Skip to content",
    "marca.aria": "Isabella de Luna, Psychologist — back to top",
    "marca.papel": "Psychologist",
    "nav.aria": "Main navigation",
    "nav.sobre": "About",
    "nav.atendimentos": "Services",
    "nav.comoFunciona": "How it works",
    "nav.faq": "FAQ",
    "menu.abrir": "Open menu",
    "menu.fechar": "Close menu",
    "idioma.aria": "Select language",
    "idioma.pt": "Portuguese",
    "idioma.en": "English",

    /* --- hero -------------------------------------------------------- */
    "hero.rotulo": "Therapy <span aria-hidden=\"true\">•</span> Short-term therapy <span aria-hidden=\"true\">•</span> Psychological assessment",
    "hero.titulo": "Creating spaces where people <em>don't have to pretend.</em>",
    "hero.sub": "Therapy, psychological assessment and short-term therapy — with real listening, care, and attention to your particular story.",
    "hero.cta": "Message me on WhatsApp <span class=\"seta\" aria-hidden=\"true\">→</span>",
    "hero.alt": "Isabella de Luna's brand symbol: an anatomical heart crossed by continuous lines.",

    /* --- concept ----------------------------------------------------- */
    "conceito.titulo": "Seeing you is my commitment.",
    "conceito.texto": "Together, we'll open up another way for you to exist.",

    /* --- about ------------------------------------------------------- */
    "sobre.alt": "Portrait of Isabella de Luna, psychologist.",
    "sobre.rotulo": "About me",
    "sobre.titulo": "Hi, I'm Isabella de Luna.",
    "sobre.p1": "I'm a clinical and educational psychologist trained at Centro Universitário UniFAFIRE, with a specialization in psychological assessment. I work with adults, teenagers and children from age 3.",
    "sobre.p2": "I practice Gestalt therapy, which lets me meet each person as an individual and keep the focus on what's happening right now, here and today.",
    "sobre.p3": "Paying attention to social context is essential to how I practice. Deep engagement with race and with LGBTQIAP+ lived experience is one of the foundations of my clinical work.",
    "sobre.cta": "Learn about my work <span class=\"seta\" aria-hidden=\"true\">→</span>",

    /* --- services ---------------------------------------------------- */
    "servicos.rotulo": "Services",
    "servicos.titulo": "Different kinds of care for different needs.",
    "servicos.saibaMais": "Learn more <span class=\"seta\" aria-hidden=\"true\">→</span>",
    "servico1.categoria": "Therapy",
    "servico1.titulo": "A space to understand what's going on.",
    "servico1.p1": "Therapy is a space where we build new ways of being — without leaving any part of you behind.",
    "servico1.p2": "You develop your own sense of things, choose your own path, and become someone autonomous but still connected — in touch with all your colors and shapes.",
    "servico2.categoria": "Short-term therapy",
    "servico2.titulo": "A focused process, with a defined timeframe.",
    "servico2.p1": "Support built around a specific concern, focused on easing distress now and leaving you equipped to handle the situation if it comes up again.",
    "servico3.categoria": "Psychological assessment",
    "servico3.titulo": "Investigating is its own way of understanding.",
    "servico3.p1": "In-depth listening to understand how you relate to the world, to school, to work and to yourself. I offer general assessment, learning-difficulty assessment and career guidance.",

    /* --- formats ----------------------------------------------------- */
    "modalidades.rotulo": "Formats",
    "modalidades.titulo": "From wherever you are.",
    "presencial.rotulo": "In person",
    "presencial.titulo": "A space kept just for you.",
    "presencial.texto": "In-person sessions in Recife, Brazil, in a space designed for privacy, warmth and calm.",
    "presencial.endereco": "<span class=\"endereco__predio\">Edifício Ambassador</span>\n      Rua José de Alencar, 44A &mdash; Suite 53<br>\n      Boa Vista, Recife (PE) &middot; ZIP 50070-030",
    "presencial.mapa": "View on map <span class=\"seta\" aria-hidden=\"true\">→</span>",
    "online.rotulo": "Online",
    "online.titulo": "The same listening, at any distance.",
    "online.texto": "Online sessions for people across Brazil, for Brazilians living abroad, and for native English speakers.",
    "online.detalheTitulo": "Bilingual sessions",
    "online.detalheTexto": "Sessions can be held in English or Portuguese, whichever you prefer.",
    "modalidades.fecho": "Not sure which format or service fits your moment? We can talk it through before deciding.",
    "modalidades.cta": "Talk about your options <span class=\"seta\" aria-hidden=\"true\">→</span>",

    /* --- what sets this apart ---------------------------------------- */
    "diferenciais.titulo": "Care that respects your story.",
    "dif1.titulo": "Listening built around you",
    "dif1.texto": "Every process starts from you — your story and what brought you here.",
    "dif2.titulo": "No judgment",
    "dif2.texto": "A professional space to talk about what you're living through, freely and with respect.",
    "dif3.titulo": "More than one way in",
    "dif3.texto": "Therapy, short-term therapy or psychological assessment, depending on what you need.",
    "dif4.titulo": "In person or online",
    "dif4.texto": "Flexibility to meet in the format and location that work for you.",

    /* --- how it works ------------------------------------------------ */
    "etapas.rotulo": "How it works",
    "etapas.titulo": "Starting can be simpler than it looks.",
    "etapa1.titulo": "You reach out",
    "etapa1.texto": "Send a WhatsApp message and say briefly what you're looking for.",
    "etapa2.titulo": "We talk about what you need",
    "etapa2.texto": "I answer your questions and walk you through how sessions work.",
    "etapa3.titulo": "We map the next steps",
    "etapa3.texto": "Based on what you need, we find the right format and a time that works.",
    "etapas.cta": "Message me on WhatsApp <span class=\"seta\" aria-hidden=\"true\">→</span>",

    /* --- living abroad ------------------------------------------------ */
    "exterior.rotulo": "Brazilians abroad and English speakers",
    "exterior.titulo": "Psychological support for life outside your home country.",
    "exterior.p1": "Living in another country brings its own experiences, changes and challenges.",
    "exterior.p2": "I'm fluent in English and hold remote sessions with Brazilians living abroad and with native English speakers, with room for what it means to live between cultures. Sessions can be held in English or Portuguese, whichever you prefer.",
    "exterior.p3": "Distance is no obstacle to caring for your mental health with the same warmth and seriousness.",
    "exterior.cta": "Tell me about online sessions <span class=\"seta\" aria-hidden=\"true\">→</span>",
    "exterior.microcopy": "Bilingual sessions <span aria-hidden=\"true\">·</span> English and Portuguese",

    /* --- FAQ ---------------------------------------------------------- */
    "faq.rotulo": "Common questions",
    "faq.titulo": "You might be wondering the same thing.",
    "faq.filtroAria": "Filter questions by category",
    "faq.filtroTodos": "All",
    "faq.grupo1": "Getting started",
    "faq.grupo2": "Therapy",
    "faq.grupo3": "Psychological assessment",

    "faq.q1": "Do I need to know what to say to book a session?",
    "faq.a1": "No. In therapy there are many ways to have a productive session, even when you're not sure where to begin.",
    "faq.q2": "What's the difference between therapy and psychological assessment?",
    "faq.a2": "An assessment has a set number of sessions and aims at a possible diagnosis. Therapy has no fixed end date and focuses on self-knowledge, personal growth and quality of life.",
    "faq.q3": "How long is each session?",
    "faq.a3": "Sessions run about 45 minutes.",
    "faq.q4": "How often do sessions happen?",
    "faq.a4": "Frequency is set based on what brought you here, the goals of the work and my professional assessment.",
    "faq.q5": "How do I book?",
    "faq.a5": "Tap the WhatsApp button and send a message. You'll get details on availability, formats and next steps.",

    "faq.q6": "How does short-term therapy work?",
    "faq.a6a": "Unlike ongoing therapy, it starts from one specific concern and works so you can understand it, reframe it and find new paths.",
    "faq.a6b": "It can also be a way in for people who aren't ready to commit to ongoing therapy right now but want qualified support.",
    "faq.q7": "Can I book just one session?",
    "faq.a7": "Within short-term therapy I also offer single sessions: immediate listening for moments when you need support quickly, with no commitment to continue — the same depth, seriousness and ethical care that guide all my practice.",
    "faq.q8": "How does online therapy work?",
    "faq.a8": "Online sessions happen by video call and can be an option for people in different cities across Brazil, for Brazilians living abroad and for international clients, subject to the conditions that apply to this format.",
    "faq.q9": "Who can book online sessions?",
    "faq.a9": "Online sessions are available for Brazilians living abroad and for native English speakers. Get in touch to check the conditions for your location.",

    "faq.q10": "How does a general psychological assessment work?",
    "faq.a10a": "It begins with an investigation of emotional, cognitive and relational aspects — whether as part of a therapeutic process or for diagnostic clarification. The process includes interviews, observation and, when needed, instruments available within my training.",
    "faq.a10b": "After the analysis, I deliver a document with findings and referrals — always ethically, transparently and in line with Brazilian Federal Council of Psychology Resolution 09/2018.",
    "faq.q11": "How does assessment for learning difficulties work?",
    "faq.a11": "I work with children and teenagers referred by their school or family, understanding each one's particular way of learning and identifying barriers and strengths to help build educational and emotional strategies.",
    "faq.q12": "How does career guidance work?",
    "faq.a12": "This is for young people and adults unsure which path to take, helping bring interests, skills and personal values into focus.",
    "faq.q13": "How many sessions does an assessment take?",
    "faq.a13": "It varies with the purpose and characteristics of each assessment. On first contact I can explain how the specific process you're looking for works.",

    /* --- final CTA ----------------------------------------------------- */
    "final.titulo": "Maybe the first step is just talking.",
    "final.texto": "If you're considering starting therapy, get in touch to learn more about the work and ask your questions.",
    "final.cta": "Message me on WhatsApp <span class=\"seta\" aria-hidden=\"true\">→</span>",
    "final.assinatura": "Isabella de Luna <span aria-hidden=\"true\">·</span> Psychologist <span aria-hidden=\"true\">·</span> CRP 02/29244",

    /* --- footer --------------------------------------------------------- */
    "rodape.papel": "Psychologist <span aria-hidden=\"true\">·</span> CRP 02/29244",
    "rodape.aria": "Footer navigation",
    "rodape.navegar": "Navigate",
    "rodape.contato": "Contact",
    "rodape.atendimento": "Sessions",
    "rodape.endereco": "Edifício Ambassador<br>\n        Rua José de Alencar, 44A &mdash; Suite 53<br>\n        Boa Vista, Recife (PE)<br>\n        ZIP 50070-030",
    "rodape.info1": "Online across Brazil",
    "rodape.info2": "Online for Brazilians living abroad",
    "rodape.info3": "Online for native English speakers",
    "rodape.politica": "Privacy Policy",
    "rodape.direitos": "Isabella de Luna. All rights reserved.",
    "rodape.aviso": "This site is informational and does not replace professional care.",

    /* --- floating buttons ------------------------------------------------ */
    "zap.aria": "Message me on WhatsApp",
    "zap.flutuante": "Message me",
    "zap.barra": "WhatsApp — Message me <span class=\"seta\" aria-hidden=\"true\">→</span>",

    /* --- WhatsApp messages ----------------------------------------------- */
    "wa.padrao": "Hi Isabella! I found your website and I'd like to know more about your sessions.",
    "wa.trabalho": "Hi Isabella! I found your website and I'd like to know more about your work.",
    "wa.psicoterapia": "Hi Isabella! I found your website and I'd like to know more about therapy.",
    "wa.breve": "Hi Isabella! I found your website and I'd like to know more about short-term therapy.",
    "wa.avaliacao": "Hi Isabella! I found your website and I'd like to know more about psychological assessment.",
    "wa.modalidades": "Hi Isabella! I found your website and I'd like to talk about the session formats.",
    "wa.exterior": "Hi Isabella! I found your website. I live outside Brazil and I'd like to know about online sessions.",

    /* --- privacy policy --------------------------------------------------- */
    "pol.voltar": "<span class=\"seta\" aria-hidden=\"true\">←</span> Back to the site",
    "pol.titulo": "Privacy Policy",
    "pol.atualizacao": "Last updated:",
    "pol.h1": "1. Who is responsible for your data",
    "pol.p1": "This site is maintained by Isabella de Luna, psychologist, registered under CRP 02/29244. For matters related to personal data, the contact is <a href=\"mailto:existiremcor.psi@gmail.com\">existiremcor.psi@gmail.com</a>.",
    "pol.h2": "2. What data is collected",
    "pol.p2": "This is an informational site with no sign-up forms. The data that may be processed is:",
    "pol.li2a": "<strong>Data you send voluntarily:</strong> when you tap a WhatsApp button you are taken to the app, and whatever you choose to send (name, phone number and message content) is then handled in that channel.",
    "pol.li2b": "<strong>Technical browsing data:</strong> standard access logs kept by the hosting provider, such as IP address, date and time of access, and browser type.",
    "pol.h3": "3. What the data is used for",
    "pol.p3": "The information you send is used solely to reply to your message, answer questions about the services and, where applicable, arrange scheduling. Technical logs serve to keep the site secure and running.",
    "pol.h4": "4. Professional confidentiality",
    "pol.p4": "Information shared in the context of psychological care is protected by the professional confidentiality set out in the Brazilian Code of Professional Ethics for Psychologists, and is handled in accordance with the applicable legal grounds.",
    "pol.h5": "5. Sharing",
    "pol.p5": "Your data is not sold or transferred for commercial purposes. Sharing occurs only with providers necessary to run the site and the contact channel (for example, the hosting service and WhatsApp itself), or where there is a legal obligation.",
    "pol.h6": "6. Cookies",
    "pol.p6": "This site uses no tracking cookies of its own and no advertising tools. If audience analytics tools are added, this policy will be updated before they go live.",
    "pol.h7": "7. Your rights",
    "pol.p7": "Under the Brazilian General Data Protection Law (Law 13.709/2018), you may request confirmation of processing, access, correction, anonymization, portability or deletion of your data, as well as information about sharing. To exercise these rights, write to <a href=\"mailto:existiremcor.psi@gmail.com\">existiremcor.psi@gmail.com</a>.",
    "pol.h8": "8. Retention",
    "pol.p8": "Messages exchanged are kept for as long as needed to fulfil the purpose that prompted the contact and to meet the legal and regulatory obligations applicable to the profession.",
    "pol.h9": "9. Changes to this policy",
    "pol.p9": "This policy may be updated at any time. The date of the latest revision is shown at the top of the page.",
    "pol.dataPendente": "[insert date]"
  }
};

/* ===================================================================== */
/* MOTOR DE TRADUÇÃO                                                     */
/* ===================================================================== */

(function () {
  "use strict";

  const IDIOMAS = ["pt", "en"];
  const CHAVE_ARMAZENAMENTO = "isabella-idioma";
  const raiz = document.documentElement;

  /* --------------------------------------------- idioma escolhido --- */

  function idiomaSalvo() {
    try {
      const valor = localStorage.getItem(CHAVE_ARMAZENAMENTO);
      return IDIOMAS.indexOf(valor) !== -1 ? valor : "pt";
    } catch (e) {
      return "pt";                       // navegação privada, cookies bloqueados
    }
  }

  function salvarIdioma(idioma) {
    try {
      localStorage.setItem(CHAVE_ARMAZENAMENTO, idioma);
    } catch (e) {
      /* sem persistência: a troca ainda funciona nesta visita */
    }
  }

  /* ------------------------------------------------- aplicar troca --- */

  function aplicar(idioma) {
    const dic = I18N[idioma] || I18N.pt;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const valor = dic[el.dataset.i18n];
      if (valor != null) el.textContent = valor;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const valor = dic[el.dataset.i18nHtml];
      if (valor != null) el.innerHTML = valor;
    });

    // data-i18n-attr="aria-label:nav.aria" ou "alt:x|title:y"
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split("|").forEach((par) => {
        const corte = par.indexOf(":");
        if (corte === -1) return;
        const atributo = par.slice(0, corte).trim();
        const valor = dic[par.slice(corte + 1).trim()];
        if (valor != null) el.setAttribute(atributo, valor);
      });
    });

    raiz.lang = idioma === "en" ? "en" : "pt-BR";

    const titulo = document.body.dataset.i18nTitulo || "meta.titulo";
    if (dic[titulo]) document.title = dic[titulo];

    const descricao = document.querySelector('meta[name="description"]');
    const chaveDescricao = document.body.dataset.i18nDescricao || "meta.descricao";
    if (descricao && dic[chaveDescricao]) {
      descricao.setAttribute("content", dic[chaveDescricao]);
    }

    // estado dos botões do toggle
    document.querySelectorAll("[data-idioma]").forEach((botao) => {
      const ativo = botao.dataset.idioma === idioma;
      botao.classList.toggle("idioma__opcao--ativo", ativo);
      botao.setAttribute("aria-pressed", String(ativo));
    });

    // o menu mobile guarda o rótulo conforme está aberto ou fechado
    const botaoMenu = document.getElementById("hamburguer");
    if (botaoMenu) {
      const aberto = botaoMenu.getAttribute("aria-expanded") === "true";
      botaoMenu.setAttribute("aria-label", dic[aberto ? "menu.fechar" : "menu.abrir"]);
    }

    // os links do WhatsApp são remontados a partir das mensagens traduzidas
    if (typeof window.atualizarLinksWhatsApp === "function") {
      window.atualizarLinksWhatsApp(dic["wa.padrao"]);
    }

    // a data da política é escrita por extenso no idioma ativo
    document.querySelectorAll('[data-cfg="dataPolitica"]').forEach((el) => {
      const formatada = typeof window.formatarDataPolitica === "function"
        ? window.formatarDataPolitica(idioma)
        : "";
      el.textContent = formatada || dic["pol.dataPendente"];
      el.classList.toggle("pendente", !formatada);
    });

    window.IDIOMA_ATUAL = idioma;
    raiz.removeAttribute("data-i18n-pendente");   // libera a pintura
  }

  /* ------------------------------------------------------- toggle --- */

  document.querySelectorAll("[data-idioma]").forEach((botao) => {
    botao.addEventListener("click", () => {
      const idioma = botao.dataset.idioma;
      if (idioma === window.IDIOMA_ATUAL) return;
      salvarIdioma(idioma);
      aplicar(idioma);
    });
  });

  aplicar(idiomaSalvo());
})();
