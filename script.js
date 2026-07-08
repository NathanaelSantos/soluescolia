const projects = [
  {
    id: "conecta-inclusao",
    name: "Conecta Inclusão",
    owner: "Aline",
    category: "Inclusão escolar",
    url: "https://conectainclusao.my.canva.site/",
    cover: "assets/conecta-inclusao.png",
    images: [
      "assets/conecta-inclusao.png",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "Ambiente para apoiar práticas inclusivas, acompanhamento de estudantes e organização de ações pedagógicas.",
    about:
      "O Conecta Inclusão reúne informações e caminhos para fortalecer o atendimento de estudantes que precisam de apoio educacional especializado. A proposta é facilitar a consulta, a organização das demandas e a comunicação sobre ações inclusivas dentro da rotina escolar.",
    highlights: [
      "Responsável: Aline",
      "Foco em inclusão, acompanhamento e apoio pedagógico.",
      "Acesso publicado em página do Canva.",
    ],
  },
  {
    id: "gestao-cantina",
    name: "Gestão da Cantina Escolar",
    owner: "Núbia",
    category: "Alimentação escolar",
    url: "https://sistema-cantina-escolar.my.canva.site/",
    cover: "assets/cantina-escolar.png",
    images: [
      "assets/cantina-escolar.png",
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "Sistema para organizar rotinas da cantina, cardápios, controle de alimentos e demandas de reposição.",
    about:
      "A Gestão da Cantina Escolar concentra informações úteis para o acompanhamento da alimentação escolar. O sistema ajuda a visualizar necessidades, registrar dados da rotina e apoiar decisões rápidas sobre estoque, cardápio e organização da cozinha.",
    highlights: [
      "Responsável: Núbia",
      "Foco em cardápio, estoque e consumo diário.",
      "Acesso publicado em página do Canva.",
    ],
    prompts: [
      {
        title: "Prompt de criação do sistema",
        prompt: `Crie um sistema de controle de estoque para cantina escolar, com visual organizado em formato de tabela ou planilha interativa, de fácil leitura e uso por funcionários da escola.

O sistema deve conter os seguintes campos para cada produto:
• Nome do produto
• Categoria (ex: frutas, carnes, bebidas, merenda seca, laticínios, hortifrúti, congelados)
• Unidade de medida (kg, litro, pacote, unidade)
• Quantidade em estoque
• Quantidade mínima de reposição
• Data de validade
• Fornecedor
• Preço de compra
• Local de armazenamento (freezer, geladeira, despensa, armário etc.)
• Número do lote

ORGANIZAÇÃO OBRIGATÓRIA
Organize os produtos em grupos separados por categoria, criando seções distintas, por exemplo:
• Bebidas (todos os sucos juntos, refrigerantes juntos, água juntos)
• Frutas
• Merenda seca
• Carnes
• Laticínios
• Congelados

Dentro de cada categoria, organize os itens em ordem crescente de data de validade, para facilitar o controle de vencimentos.`,
      },
    ],
  },
  {
    id: "gestao-almoxarifado",
    name: "Gestão do Almoxarifado",
    owner: "Keliane",
    category: "Estoque e patrimônio",
    url: "https://kelianeteles.my.canva.site",
    cover: "assets/gestao-estoque.png",
    images: [
      "assets/gestao-estoque.png",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "Ferramenta para controle de materiais, entradas, saídas e organização de itens do almoxarifado.",
    about:
      "A Gestão do Almoxarifado foi pensada para facilitar o acompanhamento dos materiais disponíveis na escola. O sistema centraliza registros e torna mais simples identificar itens, controlar movimentações e planejar reposições.",
    highlights: [
      "Responsável: Keliane",
      "Foco em materiais, movimentações e reposição.",
      "Acesso publicado em página do Canva.",
    ],
  },
  {
    id: "gestao-biblioteca",
    name: "Gestão da Biblioteca",
    owner: "Regina",
    category: "Leitura e acervo",
    url: "https://kelianeteles.my.canva.site/aplicativo-sem-t-tulo",
    cover: "assets/gestao-biblioteca.png",
    images: [
      "assets/gestao-biblioteca.png",
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "Sistema para organizar acervo, empréstimos, consulta de livros e rotina de atendimento da biblioteca.",
    about:
      "A Gestão da Biblioteca apoia a organização do acervo escolar e o acompanhamento dos atendimentos. O sistema pode servir como ponto de consulta para livros, empréstimos, devoluções e informações importantes para estudantes e equipe.",
    highlights: [
      "Responsável: Regina",
      "Foco em acervo, empréstimos e consulta de livros.",
      "Acesso publicado em página do Canva.",
    ],
    prompts: [
      {
        title: "Prompt de criação do sistema",
        prompt: `Prompt para Canva IA — Sistema "Gestão da Biblioteca Escolar"

1. Persona e Objetivo
Você é um assistente administrativo escolar. Crie um sistema web chamado "Biblioteca Escolar" para gestão completa do acervo, alunos e empréstimos. O objetivo é controlar livros, reduzir atrasos e incentivar a leitura. Conectar com "Canva Sheet".

2. Estrutura do Sistema — 5 Abas
• Painel: dashboard principal com cards e relatórios.
• Livros: cadastro de acervo com título, autor, categoria, código QR e status.
• Alunos: cadastro de alunos por turma e série.
• Empréstimos: registrar entrada, saída, devolução e reserva de livros.
• Catálogo: visualização pública do acervo para consulta.

3. Módulos do Painel Principal
• Cards de Resumo: Livros, Alunos, Atrasados, Em Aberto (com contadores).
• Relatórios da Biblioteca: livros mais lidos, turmas que mais utilizam, empréstimos por mês, perdidos ou danificados. Botão "Imprimir Lembretes".
• Avisos de Atraso: lista automática de livros com devolução em atraso.
• Incentivo: módulo de Ranking de Leitores e Leitor do Mês. Instrução: "Cadastre empréstimos para gerar o ranking".
• Organização Física Sugerida: tabela de cores por categoria. Ex.: Infantil = Amarelo, Didático = Verde, Contos = Vermelho, Ciências = Creme, Português = Branco, QR/Código = Numérico.

4. Regras e Funções Obrigatórias
• Calcular automaticamente livros Atrasados e Em Aberto.
• Gerar relatório de leitura por turma e por aluno.
• Permitir cadastro de doações e marcar livros como perdido ou danificado.
• Design limpo, cores claras em tons de bege e verde, com ícones. Linguagem formal e acessível para escolas estaduais.
• Rodapé: "Sistema escolar para organizar acervo, alunos, empréstimos, reservas, doações, avaliações e incentivo à leitura."

5. Exemplo de comando extra
"Adicione um botão para exportar a lista de atrasados em PDF e enviar por WhatsApp para os responsáveis."

Dicas para melhorar o prompt no Canva IA:
• Dados: "popular com 5 livros e 3 alunos fictícios" para já vir com exemplo.
• Automação: "crie uma regra: se passar 7 dias do empréstimo, o livro vai para 'Atrasados' automaticamente".
• Inclusão: "adicione campo de 'Nível de leitura' no cadastro do aluno para sugerir livros".`,
      },
    ],
  },
  {
    id: "gestao-frota",
    name: "Gestão da Frota",
    owner: "Alessandra",
    category: "Transporte escolar",
    url: "https://frota-dre3.my.canva.site/",
    cover: "assets/gestao-frota.png",
    images: [
      "assets/gestao-frota.png",
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "Sistema para acompanhar veículos, rotas, registros e necessidades relacionadas à frota escolar.",
    about:
      "A Gestão da Frota reúne informações para apoiar o controle de veículos e deslocamentos. O sistema ajuda a dar visibilidade a rotas, registros, manutenção e demandas operacionais ligadas ao transporte escolar.",
    highlights: [
      "Responsável: Alessandra",
      "Foco em veículos, rotas e acompanhamento operacional.",
      "Acesso publicado em página do Canva.",
    ],
  },
  {
    id: "assistente-pedagogico",
    name: "Assistente Pedagógico",
    owner: "Jessyca",
    category: "Apoio pedagógico",
    url: "https://jessica-psicopedagoga.my.canva.site/assistente-educacional-inclusivo-",
    cover: "assets/gestao-pedagogica.png",
    images: [
      "assets/gestao-pedagogica.png",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "Assistente educacional inclusivo para apoiar planejamento, orientações e práticas pedagógicas.",
    about:
      "O Assistente Pedagógico funciona como apoio para organizar orientações e recursos voltados à prática docente. A proposta é auxiliar professores e equipes escolares na construção de estratégias mais acessíveis, inclusivas e alinhadas às necessidades dos estudantes.",
    highlights: [
      "Responsável: Jessyca",
      "Foco em apoio ao professor e inclusão educacional.",
      "Acesso publicado em página do Canva.",
    ],
    prompts: [
      {
        title: "Prompt de criação do sistema",
        prompt: `1. Persona do Sistema
Você é um assistente pedagógico especializado em turmas multisseriadas e educação inclusiva do Ed. Infantil ao Ensino Médio. Seu foco é planejamento prático, alinhado à BNCC e à realidade de escolas estaduais, rurais e multisseriadas.

2. Módulos Principais
• Planejamento: gerar planejamentos Semanal, Mensal, Bimestral, Semestral e Anual.
• Atividades: criar atividades lúdicas por série/ano. Níveis Leve, Moderado e Severo para deficiência intelectual, TEA, TDAH e dificuldade de aprendizagem.
• Banco de Recursos: gerar caça-palavras, cruzadinhas, textos ilustrados, jogos e materiais em PDF prontos para impressão. Ícone clicável para escolher de 5 a 20 questões.
• Rotina & Metodologia: sugerir rodízio de atividades, trabalho em grupo, metodologias ativas e gestão de tempo para multisseriada.
• Avaliação: criar diagnósticas e formativas. Aba para cadastrar aluno e vincular à avaliação. Gerar relatório individual indicando onde o aluno precisa ser trabalhado.
• Relatórios: emitir relatório pedagógico individual e por turma.

3. Regras de Criação de Atividade
Toda atividade deve vir estruturada em:
• Objetivo
• Habilidades BNCC
• Desenvolvimento por Ano: 1º, 2º e 3º ano com níveis diferentes
• Adaptação: versão para cada nível de deficiência
• Recursos
• Avaliação
• Material Visual: colorido e acessível quando solicitado

4. Conteúdos Integrados
Português, Matemática, Ciências, História, Geografia, Arte. Incluir também habilidades da Educação Infantil.

5. Diretrizes Gerais
• Linguagem simples, visual e inclusiva.
• Priorizar: alfabetização, raciocínio lógico, coordenação motora, oralidade e ludicidade.
• Sempre considerar: faixa etária, nível de desenvolvimento e inclusão.
• Ícones clicáveis no planejamento bimestral para abrir as atividades.

Exemplo de comando:
"Crie uma atividade de adição para 1º, 2º e 3º ano com 3 níveis de dificuldade e adaptação para deficiência intelectual leve. Gerar em PDF."`,
      },
    ],
  },
  {
    id: "painel-monitoramento",
    name: "Painel de Monitoramento Escolar",
    owner: "Edinha",
    team: "Alex, Edenildes e Edinha",
    category: "Indicadores escolares",
    url: "https://canva.link/u2w7jmp2nzrm4cf",
    cover: "assets/monitoramento-escolar.png",
    images: [
      "assets/monitoramento-escolar.png",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "Acompanha frequência e rendimento dos estudantes para identificar vulnerabilidades pedagógicas e direcionar intervenções imediatas, apoiado em dados visuais para a gestão por evidências.",
    about:
      "O Painel de Monitoramento Escolar acompanha a frequência e o rendimento dos estudantes para identificar vulnerabilidades pedagógicas e direcionar intervenções práticas imediatas, como planos de recuperação continuada e o fortalecimento do vínculo com as famílias. O sistema ainda está em elaboração: a intenção é simplificá-lo até se tornar um sistema de gestão por evidências, apoiado em dados visuais — como gráficos de engajamento e tabelas de risco por disciplina — que sejam funcionais na rotina escolar.",
    highlights: [
      "Responsável: Edinha",
      "Equipe: Alex, Edenildes e Edinha",
      "Foco em frequência, rendimento e identificação de vulnerabilidades pedagógicas.",
      "Intervenções práticas: planos de recuperação continuada e fortalecimento do vínculo com as famílias.",
      "Em elaboração — evoluindo para gestão por evidências com gráficos de engajamento e tabelas de risco por disciplina.",
      "Link disponibilizado via Canva Link.",
    ],
    prompts: [
      {
        title: "Prompt 1",
        prompt: `Crie um dashboard interativo que centraliza informações de frequência e rendimento, destacando alunos em situação de risco. Adicione abas editáveis para inserção da escola, disciplinas, turmas, alunos manualmente ou através da importação de dados.

Funcionalidades principais:
• Monitoramento em tempo real: integração com sistemas de chamada e notas.
• Indicadores de risco: frequência abaixo de 75% com alerta amarelo, frequência abaixo de 50% com alerta vermelho, média de notas abaixo de 6,0 com alerta amarelo e média abaixo de 5,0 com alerta vermelho.
• Visualização gráfica: gráficos de barras para notas por disciplina, gráficos de linha para evolução da frequência e mapas de calor para identificar turmas com maior concentração de risco.
• Filtros inteligentes: por turma, disciplina, período ou perfil socioeconômico.
• Alertas automáticos: envio de notificações para professores e coordenação quando um aluno atinge critérios de risco.

Exemplo de estrutura do painel:
• Frequência < 75%: gráfico de linha com queda e contato com a família.
• Média < 5,0: barra em vermelho e reforço pedagógico.
• Turma com mais de 30% em risco: mapa de calor e planejamento coletivo.

O que mostrar no protótipo:
• Resumo de risco com caixas coloridas mostrando alunos em alerta amarelo, vermelho ou em dia.
• Frequência dos alunos com gráfico de linha e destaque para quedas abaixo de 50%.
• Desempenho por disciplina com barras verdes para notas acima de 5,0 e barras vermelhas para notas abaixo de 5,0.
• Alunos em risco com nomes destacados em amarelo e vermelho.
• Mapa de calor das turmas.
• Alertas recentes sobre frequência e rendimento crítico.

Crie também um fluxo de intervenção pedagógica inteligente:
1. Detecção automática: identificar alunos com frequência abaixo de 75% ou média inferior a 5,0 e gerar alertas para a coordenação.
2. Análise pedagógica: filtrar por turma ou disciplina, visualizar histórico e adicionar observações qualitativas.
3. Ação imediata: conversa com aluno e reforço em alerta amarelo; reunião com família e plano personalizado em alerta vermelho.
4. Monitoramento contínuo: atualizar indicadores semanalmente, registrar intervenções e mostrar evolução em gráficos.
5. Avaliação de resultados: comparar dados antes e depois de 30 dias e gerar relatório de impacto.`,
        response: `I'll create a comprehensive educational dashboard for monitoring student attendance and performance with risk indicators.

Criei um painel educacional completo com as seguintes funcionalidades:
• Dashboard com cartões de resumo, gráficos de frequência e notas, mapa de calor das turmas e lista de alunos em risco.
• Gestão completa com abas para cadastrar alunos, turmas e disciplinas manualmente ou via importação CSV.
• Fluxo de intervenção em 5 etapas: detecção, análise, ação, monitoramento e avaliação, com registro de intervenções.
• Alertas automáticos baseados nos critérios: frequência abaixo de 75% ou 50%, média abaixo de 6 ou 5.

Para começar, experimente criar uma turma na aba "Turmas", depois uma disciplina, e cadastre um aluno para ver os indicadores funcionando. Você também pode importar vários alunos de uma vez usando o botão "Importar" com formato CSV.`,
      },
      {
        title: "Prompt 2",
        prompt: "Acrescente, na aba 'Importar', o botão 'anexar arquivo'",
        response: `I'll add a file attachment button to the import modal so users can upload CSV files directly.

Adicionei o botão "Anexar arquivo" na modal de importação. Agora é possível clicar ou arrastar um arquivo CSV para a área de upload. O nome do arquivo aparece após a seleção, o conteúdo é lido automaticamente e o campo de texto continua disponível para colagem manual.

Formato esperado: nome, turma, disciplina, frequencia, media.`,
      },
      {
        title: "Prompt 3",
        prompt:
          "Distribua os dados no dashboard de acordo com as abas: Alunos, Turmas, Disciplinas, Intervenções, Alertas, Relatórios.",
        response: `Registro da evolução do protótipo:
• Organização por abas para separar informações de alunos, turmas, disciplinas, intervenções, alertas e relatórios.
• Melhoria da área de importação com zona de drag-and-drop maior.
• Feedback visual ao selecionar arquivo CSV.
• Instruções claras sobre o formato esperado dos dados antes da importação.`,
      },
    ],
  },
  {
    id: "cronometro-estudos",
    name: "Cronômetro de estudos",
    owner: "Monica",
    category: "Organização de estudos",
    url: "https://super-crinometro-2026.my.canva.site/",
    cover: "assets/cronometro.png",
    images: [
      "assets/cronometro.png",
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "Ferramenta para organizar sessões de estudo, tempo de foco e pausas durante a rotina escolar.",
    about:
      "O Cronômetro de estudos ajuda estudantes e professores a organizarem períodos de foco, revisão e pausa. A proposta é tornar a gestão do tempo mais simples e visível durante atividades individuais ou coletivas.",
    highlights: [
      "Responsável: Monica",
      "Foco em tempo de estudo, foco e pausas.",
      "Acesso publicado em página do Canva.",
    ],
    prompts: [
      {
        title: "Prompt de criação do sistema",
        prompt: `1. Persona e Objetivo
Você é um designer de apps educacionais. Crie um sistema web chamado "Cronômetro de Estudo" para ajudar alunos a focar nos estudos usando a técnica de blocos. Design moderno, fundo escuro e interface limpa.

2. Estrutura da Tela Principal
• Título: "Cronômetro de Estudo" no topo, em branco.
• Seletor de Blocos: 3 botões quadrados no topo — 1 vermelha, 2 mostarda, 3 vinho. O botão selecionado fica com borda mais clara.
• Cronômetro Central: círculo grande com borda vermelha; dentro, "10:00" em fonte grande branca e abaixo "BLOCO 1".
• Botões de Ação: "Iniciar" verde com ícone de Play; "Reiniciar" vermelho com ícone de seta circular.
• Barra de Progresso: barra fina horizontal abaixo dos botões.
• Status: texto "Pronto para começar!" centralizado abaixo da barra.

3. Funções Obrigatórias
• O cronômetro inicia em 10:00 por padrão no BLOCO 1.
• Ao clicar em Iniciar, começa a contagem regressiva e a barra de progresso vai preenchendo.
• Ao clicar em Reiniciar, o tempo volta para 10:00 e para a contagem.
• Ao terminar os 10 minutos, emitir um alerta sonoro e trocar automaticamente para o BLOCO 2.
• Cada bloco pode ter tempo configurável. Padrão: Bloco 1 = 10min, Bloco 2 = 10min, Bloco 3 = 10min.
• O usuário pode clicar nos botões 1, 2, 3 para trocar de bloco manualmente.

4. Diretrizes de Design
• Paleta: fundo azul-marinho escuro. Destaques em verde #10B981, vermelho #B91C1C, mostarda #A16207, vinho #7F1D1D.
• Fonte: grande, legível, sem serifa. Foco total no número do cronômetro.
• Estilo: minimalista, sem distrações. Foco em produtividade.
• Responsivo para celular.

5. Extras Opcionais
Adicione um botão de Configurações para o aluno alterar o tempo de cada bloco (25min, 50min, etc.).
Exemplo de comando extra: "Adicione um contador de 'Sessões Concluídas Hoje' abaixo do status e um som de sino quando o bloco terminar."`,
      },
    ],
  },
];

const categoryStyles = {
  "Inclusão escolar": { accent: "244, 114, 182", icon: "inclusion" },
  "Alimentação escolar": { accent: "251, 146, 60", icon: "food" },
  "Estoque e patrimônio": { accent: "45, 212, 191", icon: "box" },
  "Leitura e acervo": { accent: "167, 139, 250", icon: "book" },
  "Transporte escolar": { accent: "56, 189, 248", icon: "bus" },
  "Apoio pedagógico": { accent: "52, 211, 153", icon: "teach" },
  "Indicadores escolares": { accent: "129, 140, 248", icon: "chart" },
  "Organização de estudos": { accent: "250, 204, 21", icon: "timer" },
};

const defaultStyle = { accent: "129, 140, 248", icon: "chart" };

function styleFor(project) {
  return categoryStyles[project.category] || defaultStyle;
}

const app = document.querySelector("#app");
const searchInput = document.querySelector("#searchInput");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Reveal elements as they scroll into view (staggered), with graceful fallbacks.
const revealObserver =
  !prefersReducedMotion && "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }
            const el = entry.target;
            const order = Number(el.dataset.revealOrder || 0);
            window.setTimeout(() => el.classList.add("is-visible"), Math.min(order, 6) * 70);
            observer.unobserve(el);
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
      )
    : null;

function reveal(el, order = 0) {
  if (!revealObserver) {
    return; // motion disabled → element stays visible
  }
  el.classList.add("reveal");
  el.dataset.revealOrder = String(order);
  revealObserver.observe(el);
}

// Safety net: reveal anything already on screen, in case the observer is slow
// to deliver its first callback. Elements below the fold still wait for scroll.
function revealInView() {
  document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
      el.classList.add("is-visible");
    }
  });
}

// Count-up animation for the hero stats.
function animateStats() {
  document.querySelectorAll(".hero-stats dt").forEach((el) => {
    const match = el.textContent.trim().match(/^(\d+)(\D*)$/);
    if (!match) {
      return;
    }
    const target = Number(match[1]);
    const suffix = match[2] || "";
    if (prefersReducedMotion) {
      el.textContent = target + suffix;
      return;
    }
    const duration = 1100;
    let startTime = null;
    el.textContent = `0${suffix}`;
    const frame = (now) => {
      if (startTime === null) {
        startTime = now;
      }
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    };
    requestAnimationFrame(frame);
  });
}

// Highlight the nav link for the section currently in view.
let scrollSpy = null;
function setupScrollSpy() {
  if (scrollSpy) {
    scrollSpy.disconnect();
    scrollSpy = null;
  }
  if (!("IntersectionObserver" in window)) {
    return;
  }
  const sections = [
    document.querySelector(".hero"),
    document.querySelector("#sistemas"),
    document.querySelector("#destaques"),
  ].filter(Boolean);
  if (!sections.length) {
    return;
  }
  const links = document.querySelectorAll(".nav-links a");
  scrollSpy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        const id = entry.target.id || "inicio";
        links.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  sections.forEach((section) => scrollSpy.observe(section));
}

function imageUrl(url) {
  return `url("${url}")`;
}

function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function projectMatches(project, term) {
  const promptText = project.prompts
    ? project.prompts.map((item) => `${item.title} ${item.prompt} ${item.response}`).join(" ")
    : "";
  const searchable = `${project.name} ${project.owner} ${project.team || ""} ${project.category} ${project.description} ${project.about} ${promptText}`;
  return normalize(searchable).includes(normalize(term));
}

function createProjectCard(project) {
  const style = styleFor(project);
  const creditLabel = project.team ? "Equipe" : "Responsável";
  const creditValue = project.team || project.owner;
  const card = document.createElement("article");
  card.className = "project-card";
  card.style.setProperty("--card-accent", style.accent);

  card.innerHTML = `
    <div class="card-top">
      <span class="card-icon">
        <svg class="icon" aria-hidden="true"><use href="#icon-${style.icon}"></use></svg>
      </span>
      <a class="card-title-link" href="#sistema-${project.id}">
        <h3>${project.name}</h3>
      </a>
    </div>
    <a class="card-media" href="#sistema-${project.id}" aria-label="Ver detalhes de ${project.name}">
      <img src="${project.cover}" alt="Capa do sistema ${project.name}" loading="lazy" />
      <span class="tag">${project.category}</span>
    </a>
    <div class="card-content">
      <p>${project.description}</p>
      <div class="card-owner">
        <svg class="icon" aria-hidden="true"><use href="#icon-user"></use></svg>
        <span>${creditLabel}: <strong>${creditValue}</strong></span>
      </div>
      <div class="card-actions">
        <a class="launch-button" href="#sistema-${project.id}">
          Ver detalhes
          <svg class="icon" aria-hidden="true">
            <use href="#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    </div>
  `;
  return card;
}

function renderHome() {
  const template = document.querySelector("#homeTemplate");
  app.replaceChildren(template.content.cloneNode(true));
  renderHighlightGrid();
  animateStats();
  setupScrollSpy();
  window.setTimeout(revealInView, 900);
}

function renderProjectRail(items, animate = true) {
  const rail = document.querySelector("#projectRail");
  const count = document.querySelector("#resultCount");

  if (!rail || !count) {
    return;
  }

  rail.replaceChildren();
  count.textContent = `${items.length} sistema${items.length === 1 ? "" : "s"} cadastrado${items.length === 1 ? "" : "s"}`;

  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Nenhum sistema encontrado.";
    rail.append(empty);
    return;
  }

  items.forEach((project, index) => {
    const card = createProjectCard(project);
    if (animate) {
      reveal(card, index);
    }
    rail.append(card);
  });
}

function renderHighlightGrid() {
  const highlightGrid = document.querySelector("#highlightGrid");

  if (!highlightGrid) {
    return;
  }

  highlightGrid.replaceChildren();
  projects.forEach((project, index) => {
    const style = styleFor(project);
    const creditValue = project.team || project.owner;
    const item = document.createElement("article");
    item.className = "quick-card";
    item.style.setProperty("--card-accent", style.accent);
    item.innerHTML = `
      <div class="quick-head">
        <span class="quick-icon">
          <svg class="icon" aria-hidden="true"><use href="#icon-${style.icon}"></use></svg>
        </span>
        <div class="quick-title">
          <h3>${project.name}</h3>
          <p>${project.category} · ${creditValue}</p>
        </div>
      </div>
      <a class="quick-link" href="${project.url}" target="_blank" rel="noopener noreferrer">
        Acessar sistema
        <svg class="icon" aria-hidden="true">
          <use href="#icon-external"></use>
        </svg>
      </a>
    `;
    reveal(item, index);
    highlightGrid.append(item);
  });
}

function renderDetail(project) {
  const style = styleFor(project);
  const template = document.querySelector("#detailTemplate");
  app.replaceChildren(template.content.cloneNode(true));

  if (scrollSpy) {
    scrollSpy.disconnect();
    scrollSpy = null;
  }
  document.querySelectorAll(".nav-links a.active").forEach((link) => link.classList.remove("active"));

  document.title = `${project.name} | SoluEscolaIA`;

  const detailPage = document.querySelector(".detail-page");
  detailPage.style.setProperty("--card-accent", style.accent);

  const category = document.querySelector("#detailCategory");
  const detailCredit = project.team ? `Equipe: ${project.team}` : `Responsável: ${project.owner}`;
  category.innerHTML = `
    <svg class="icon" aria-hidden="true"><use href="#icon-${style.icon}"></use></svg>
    <span>${project.category} · ${detailCredit}</span>
  `;
  document.querySelector("#detailTitle").textContent = project.name;
  document.querySelector("#detailDescription").textContent = project.description;
  document.querySelector("#detailAbout").textContent = project.about;
  const detailHero = document.querySelector(".detail-hero");
  detailHero.style.setProperty("--detail-cover", imageUrl(project.cover));

  const detailActions = document.querySelector("#detailActions");
  const externalLink = document.createElement("a");
  externalLink.className = "primary-button";
  externalLink.href = project.url;
  externalLink.target = "_blank";
  externalLink.rel = "noopener noreferrer";
  externalLink.innerHTML = `
    Acessar sistema
    <svg class="icon" aria-hidden="true">
      <use href="#icon-external"></use>
    </svg>
  `;
  detailActions.append(externalLink);

  const facts = document.querySelector("#detailFacts");
  const url = new URL(project.url);
  const factItems = [
    ["Responsável", project.owner],
    ["Área", project.category],
    ["Endereço", url.hostname],
  ];

  if (project.team) {
    factItems.splice(1, 0, ["Equipe", project.team]);
  }

  if (project.prompts?.length) {
    factItems.push(["Prompts", `${project.prompts.length} registros`]);
  }

  factItems.forEach(([label, value]) => {
    const fact = document.createElement("div");
    fact.className = "fact-item";
    fact.innerHTML = `
      <span>${label}</span>
      <strong>${value}</strong>
    `;
    facts.append(fact);
  });

  const gallery = document.querySelector("#detailGallery");
  project.images.forEach((src, index) => {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.src = src;
    image.alt = index === 0 ? `Capa do sistema ${project.name}` : `Imagem ${index + 1} do sistema ${project.name}`;
    image.loading = index === 0 ? "eager" : "lazy";
    figure.append(image);
    gallery.append(figure);
  });

  const highlightList = document.querySelector("#detailHighlights");
  project.highlights.forEach((highlight, index) => {
    const item = document.createElement("blockquote");
    item.className = "highlight-item";
    item.textContent = `${index + 1}. ${highlight}`;
    highlightList.append(item);
  });

  const promptPanel = document.querySelector("#detailPromptPanel");
  const promptList = document.querySelector("#detailPrompts");

  if (project.prompts?.length) {
    project.prompts.forEach((promptItem, index) => {
      const entry = document.createElement("details");
      entry.className = "prompt-entry";
      entry.open = index === 0;

      const header = document.createElement("summary");
      header.className = "prompt-entry-head";

      const badge = document.createElement("span");
      badge.className = "prompt-badge";
      badge.textContent = String(index + 1).padStart(2, "0");

      const title = document.createElement("h3");
      title.textContent = promptItem.title;

      header.append(badge, title);

      const promptBlock = document.createElement("div");
      promptBlock.className = "prompt-block";

      const promptLabel = document.createElement("span");
      promptLabel.textContent = "Prompt";

      const promptText = document.createElement("p");
      promptText.textContent = promptItem.prompt;

      promptBlock.append(promptLabel, promptText);

      entry.append(header, promptBlock);

      if (promptItem.response) {
        const responseBlock = document.createElement("div");
        responseBlock.className = "prompt-block response-block";

        const responseLabel = document.createElement("span");
        responseLabel.textContent = "Resposta";

        const responseText = document.createElement("p");
        responseText.textContent = promptItem.response;

        responseBlock.append(responseLabel, responseText);
        entry.append(responseBlock);
      }

      promptList.append(entry);
    });
  } else {
    promptPanel?.remove();
  }

  window.scrollTo(0, 0);
}

function renderRoute() {
  const hash = window.location.hash.replace("#", "");
  const detailId = hash.startsWith("sistema-") ? hash.replace("sistema-", "") : "";
  const project = projects.find((item) => item.id === detailId);

  document.title = "SoluEscolaIA | HUB de soluções escolares com IA";

  if (project) {
    renderDetail(project);
    return;
  }

  renderHome();
  applySearch();

  if (hash === "sistemas" || hash === "destaques") {
    requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ block: "start" });
    });
  }
}

function applySearch() {
  const term = searchInput.value.trim();
  const filtered = term ? projects.filter((project) => projectMatches(project, term)) : projects;

  if (!document.querySelector("#projectRail")) {
    window.location.hash = "inicio";
    return;
  }

  renderProjectRail(filtered, !term);
}

// Cursor-tracking spotlight on cards (event delegation survives re-renders).
document.addEventListener("pointermove", (event) => {
  const card = event.target.closest && event.target.closest(".project-card, .quick-card");
  if (!card) {
    return;
  }
  const rect = card.getBoundingClientRect();
  card.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
  card.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height) * 100}%`);
});

// Keyboard: "/" focuses search, Esc clears/blurs it.
document.addEventListener("keydown", (event) => {
  const tag = document.activeElement && document.activeElement.tagName.toLowerCase();
  if (event.key === "/" && tag !== "input" && tag !== "textarea") {
    event.preventDefault();
    searchInput.focus();
    searchInput.select();
  } else if (event.key === "Escape" && document.activeElement === searchInput) {
    if (searchInput.value) {
      searchInput.value = "";
      applySearch();
    }
    searchInput.blur();
  }
});

searchInput.addEventListener("input", applySearch);
window.addEventListener("hashchange", renderRoute);
window.addEventListener("DOMContentLoaded", renderRoute);
