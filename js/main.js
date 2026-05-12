'use strict';

// ── QUESTÕES ─────────────────────────────────────────────────
const questions = [
  {
    type: 'multiple-choice',
    difficulty: 'Fácil',
    text: '1. O que é um verbo?',
    answers: [
      { letter: 'A', text: 'Palavra que indica ação, estado ou fenômeno da natureza.', correct: true,  hint: 'Verbo — resposta correta!' },
      { letter: 'B', text: 'Palavra que dá nome a seres, objetos, lugares e sentimentos.',  correct: false, hint: 'Substantivo — dá nome aos seres.' },
      { letter: 'C', text: 'Palavra que qualifica ou caracteriza o substantivo.',            correct: false, hint: 'Adjetivo — qualifica o substantivo.' },
      { letter: 'D', text: 'Palavra que liga termos ou orações na frase.',                  correct: false, hint: 'Conjunção — conecta termos e orações.' },
    ],
    feedback: 'Verbo é a palavra que indica ação. Toda vez que olhar um texto é a primeira coisa que precisa identificar.<br><br>Observe que a palavra faz o texto se mexer. A palavra <em>correr</em>, por exemplo — você imagina alguém se mexendo.<br><br>Também indica estado ou mudança de estado: <em>eu sou</em> ou <em>eu estou</em>, ou <em>estava</em>. Os textos indicam que inicialmente uma pessoa estava de uma forma e houve mudança (ser, estar).<br><br>Pode indicar também fenômeno da natureza (chover, amanhecer).<br><br>Os verbos têm terminação em <strong>ar, er, ir</strong> e <strong>pôr</strong> — que antes se chamava <em>poer</em>.',
    example: 'Exemplos: correr, ser, chover, nascer, parecer.',
  },

  {
    type: 'word-select',
    difficulty: 'Fácil',
    text: '3. Clique no VERBO da frase:',
    sentence: ['O', 'gato', 'dormiu', 'na', 'cama', '.'],
    correctIndex: 2,
    wordClassHints: [
      { word: 'O',      wordClass: 'Artigo definido',                             isVerb: false },
      { word: 'gato',   wordClass: 'Substantivo',                                 isVerb: false },
      { word: 'dormiu', wordClass: 'Verbo — pretérito perfeito de dormir (-ir)',  isVerb: true  },
      { word: 'na',     wordClass: 'Preposição + Artigo (em + a)',                isVerb: false },
      { word: 'cama',   wordClass: 'Substantivo',                                 isVerb: false },
    ],
    feedback: '"Dormiu" é o verbo — indica o que o gato fez. No infinitivo: <strong>dormir</strong>, terminação <strong>-ir</strong>.',
    example: 'Outros verbos -ir: partir, abrir, sorrir, sentir, assistir.',
    answers: [],
  },

  {
    type: 'word-select',
    difficulty: 'Fácil',
    text: '2. Clique no VERBO da frase:',
    sentence: ['A', 'Maria', 'cantou', 'no', 'coral', '.'],
    correctIndex: 2,
    wordClassHints: [
      { word: 'A',      wordClass: 'Artigo definido',                             isVerb: false },
      { word: 'Maria',  wordClass: 'Substantivo próprio',                         isVerb: false },
      { word: 'cantou', wordClass: 'Verbo — pretérito perfeito de cantar (-ar)',  isVerb: true  },
      { word: 'no',     wordClass: 'Preposição + Artigo (em + o)',                isVerb: false },
      { word: 'coral',  wordClass: 'Substantivo',                                 isVerb: false },
    ],
    feedback: '"Cantou" é o verbo — indica a ação de Maria. No infinitivo: <strong>cantar</strong>, terminação <strong>-ar</strong>.',
    example: 'Outros verbos -ar: falar, dançar, jogar, estudar, pular.',
    answers: [],
  },

  {
    type: 'word-select',
    difficulty: 'Fácil',
    text: '4. Clique no VERBO da frase:',
    sentence: ['O', 'Pedro', 'comeu', 'o', 'bolo', '.'],
    correctIndex: 2,
    wordClassHints: [
      { word: 'O',     wordClass: 'Artigo definido',                            isVerb: false },
      { word: 'Pedro', wordClass: 'Substantivo próprio',                        isVerb: false },
      { word: 'comeu', wordClass: 'Verbo — pretérito perfeito de comer (-er)',  isVerb: true  },
      { word: 'o',     wordClass: 'Artigo definido',                            isVerb: false },
      { word: 'bolo',  wordClass: 'Substantivo',                                isVerb: false },
    ],
    feedback: '"Comeu" é o verbo — indica o que Pedro fez. No infinitivo: <strong>comer</strong>, terminação <strong>-er</strong>.',
    example: 'Outros verbos -er: beber, correr, vender, perder, escrever.',
    answers: [],
  },

  {
    type: 'word-select',
    difficulty: 'Fácil',
    text: '5. Clique no VERBO da frase:',
    sentence: ['A', 'chuva', 'caiu', 'de', 'manhã', '.'],
    correctIndex: 2,
    wordClassHints: [
      { word: 'A',     wordClass: 'Artigo definido',                           isVerb: false },
      { word: 'chuva', wordClass: 'Substantivo',                               isVerb: false },
      { word: 'caiu',  wordClass: 'Verbo — pretérito perfeito de cair (-ir)',  isVerb: true  },
      { word: 'de',    wordClass: 'Preposição',                                isVerb: false },
      { word: 'manhã', wordClass: 'Substantivo',                               isVerb: false },
    ],
    feedback: '"Caiu" é o verbo — indica um fenômeno da natureza. No infinitivo: <strong>cair</strong>, terminação <strong>-ir</strong>.',
    example: 'Outros verbos -ir: subir, dividir, fugir, existir, abrir.',
    answers: [],
  },

  {
    type: 'word-select',
    difficulty: 'Fácil',
    text: '6. Clique no VERBO da frase:',
    sentence: ['O', 'João', 'estudou', 'a', 'lição', '.'],
    correctIndex: 2,
    wordClassHints: [
      { word: 'O',       wordClass: 'Artigo definido',                              isVerb: false },
      { word: 'João',    wordClass: 'Substantivo próprio',                          isVerb: false },
      { word: 'estudou', wordClass: 'Verbo — pretérito perfeito de estudar (-ar)',  isVerb: true  },
      { word: 'a',       wordClass: 'Artigo definido',                              isVerb: false },
      { word: 'lição',   wordClass: 'Substantivo',                                  isVerb: false },
    ],
    feedback: '"Estudou" é o verbo — indica a ação de João. No infinitivo: <strong>estudar</strong>, terminação <strong>-ar</strong>.',
    example: 'Outros verbos -ar: trabalhar, ajudar, terminar, amar, usar.',
    answers: [],
  },

  {
    type: 'word-select',
    difficulty: 'Fácil',
    text: '7. Clique no VERBO da frase:',
    sentence: ['A', 'Ana', 'bebeu', 'o', 'suco', '.'],
    correctIndex: 2,
    wordClassHints: [
      { word: 'A',     wordClass: 'Artigo definido',                            isVerb: false },
      { word: 'Ana',   wordClass: 'Substantivo próprio',                        isVerb: false },
      { word: 'bebeu', wordClass: 'Verbo — pretérito perfeito de beber (-er)',  isVerb: true  },
      { word: 'o',     wordClass: 'Artigo definido',                            isVerb: false },
      { word: 'suco',  wordClass: 'Substantivo',                                isVerb: false },
    ],
    feedback: '"Bebeu" é o verbo — indica o que Ana fez. No infinitivo: <strong>beber</strong>, terminação <strong>-er</strong>.',
    example: 'Outros verbos -er: comer, correr, trazer, colher, vender.',
    answers: [],
  },

  {
    type: 'word-select',
    difficulty: 'Fácil',
    text: '8. Clique no VERBO da frase:',
    sentence: ['O', 'menino', 'sorriu', 'feliz', '.'],
    correctIndex: 2,
    wordClassHints: [
      { word: 'O',       wordClass: 'Artigo definido',                             isVerb: false },
      { word: 'menino',  wordClass: 'Substantivo',                                 isVerb: false },
      { word: 'sorriu',  wordClass: 'Verbo — pretérito perfeito de sorrir (-ir)',  isVerb: true  },
      { word: 'feliz',   wordClass: 'Adjetivo',                                    isVerb: false },
    ],
    feedback: '"Sorriu" é o verbo — indica a expressão do menino. No infinitivo: <strong>sorrir</strong>, terminação <strong>-ir</strong>.',
    example: 'Outros verbos -ir: sentir, existir, dividir, transmitir, aplaudir.',
    answers: [],
  },

  {
    type: 'word-select',
    difficulty: 'Fácil',
    text: '9. Clique no VERBO da frase:',
    sentence: ['A', 'professora', 'pôs', 'o', 'livro', 'na', 'mesa', '.'],
    correctIndex: 2,
    wordClassHints: [
      { word: 'A',           wordClass: 'Artigo definido',                           isVerb: false },
      { word: 'professora',  wordClass: 'Substantivo',                               isVerb: false },
      { word: 'pôs',         wordClass: 'Verbo — pretérito perfeito de pôr (-pôr)',  isVerb: true  },
      { word: 'o',           wordClass: 'Artigo definido',                           isVerb: false },
      { word: 'livro',       wordClass: 'Substantivo',                               isVerb: false },
      { word: 'na',          wordClass: 'Preposição + Artigo (em + a)',               isVerb: false },
      { word: 'mesa',        wordClass: 'Substantivo',                               isVerb: false },
    ],
    feedback: '"Pôs" é o verbo — indica a ação da professora. No infinitivo: <strong>pôr</strong>, terminação <strong>-pôr</strong>. Antigamente chamado "poer".',
    example: 'Verbos derivados de pôr: compor, repor, dispor, supor, propor.',
    answers: [],
  },

  {
    type: 'word-select',
    difficulty: 'Fácil',
    text: '10. Clique no VERBO da frase:',
    sentence: ['O', 'cachorro', 'correu', 'no', 'parque', '.'],
    correctIndex: 2,
    wordClassHints: [
      { word: 'O',        wordClass: 'Artigo definido',                             isVerb: false },
      { word: 'cachorro', wordClass: 'Substantivo',                                 isVerb: false },
      { word: 'correu',   wordClass: 'Verbo — pretérito perfeito de correr (-er)',  isVerb: true  },
      { word: 'no',       wordClass: 'Preposição + Artigo (em + o)',                isVerb: false },
      { word: 'parque',   wordClass: 'Substantivo',                                 isVerb: false },
    ],
    feedback: '"Correu" é o verbo — indica o que o cachorro fez. No infinitivo: <strong>correr</strong>, terminação <strong>-er</strong>.',
    example: 'Outros verbos -er: comer, beber, vender, escrever, perder.',
    answers: [],
  },

  {
    type: 'word-select',
    difficulty: 'Fácil',
    text: '11. Clique no VERBO da frase:',
    sentence: ['A', 'criança', 'pulou', 'na', 'cama', '.'],
    correctIndex: 2,
    wordClassHints: [
      { word: 'A',       wordClass: 'Artigo definido',                            isVerb: false },
      { word: 'criança', wordClass: 'Substantivo',                                isVerb: false },
      { word: 'pulou',   wordClass: 'Verbo — pretérito perfeito de pular (-ar)',  isVerb: true  },
      { word: 'na',      wordClass: 'Preposição + Artigo (em + a)',               isVerb: false },
      { word: 'cama',    wordClass: 'Substantivo',                                isVerb: false },
    ],
    feedback: '"Pulou" é o verbo — indica a ação da criança. No infinitivo: <strong>pular</strong>, terminação <strong>-ar</strong>.',
    example: 'Outros verbos -ar: andar, brincar, desenhar, pintar, nadar.',
    answers: [],
  },

  {
    type: 'word-select',
    difficulty: 'Fácil',
    text: '12. Clique no VERBO da frase:',
    sentence: ['O', 'avô', 'leu', 'o', 'jornal', '.'],
    correctIndex: 2,
    wordClassHints: [
      { word: 'O',      wordClass: 'Artigo definido',                          isVerb: false },
      { word: 'avô',    wordClass: 'Substantivo',                              isVerb: false },
      { word: 'leu',    wordClass: 'Verbo — pretérito perfeito de ler (-er)',  isVerb: true  },
      { word: 'o',      wordClass: 'Artigo definido',                          isVerb: false },
      { word: 'jornal', wordClass: 'Substantivo',                              isVerb: false },
    ],
    feedback: '"Leu" é o verbo — indica o que o avô fez. No infinitivo: <strong>ler</strong>, terminação <strong>-er</strong>.',
    example: 'Outros verbos -er: ver, querer, trazer, saber, esquecer.',
    answers: [],
  },

  {
    type: 'word-select',
    difficulty: 'Fácil',
    text: '13. Clique no VERBO da frase:',
    sentence: ['A', 'mãe', 'abriu', 'a', 'janela', '.'],
    correctIndex: 2,
    wordClassHints: [
      { word: 'A',      wordClass: 'Artigo definido',                            isVerb: false },
      { word: 'mãe',    wordClass: 'Substantivo',                                isVerb: false },
      { word: 'abriu',  wordClass: 'Verbo — pretérito perfeito de abrir (-ir)',  isVerb: true  },
      { word: 'a',      wordClass: 'Artigo definido',                            isVerb: false },
      { word: 'janela', wordClass: 'Substantivo',                                isVerb: false },
    ],
    feedback: '"Abriu" é o verbo — indica a ação da mãe. No infinitivo: <strong>abrir</strong>, terminação <strong>-ir</strong>.',
    example: 'Outros verbos -ir: partir, cobrir, descobrir, ferir, imprimir.',
    answers: [],
  },

  {
    type: 'word-select',
    difficulty: 'Fácil',
    text: '14. Clique no VERBO da frase:',
    sentence: ['O', 'sol', 'forte', 'brilhou', 'hoje', '.'],
    correctIndex: 3,
    wordClassHints: [
      { word: 'O',       wordClass: 'Artigo definido',                              isVerb: false },
      { word: 'sol',     wordClass: 'Substantivo',                                  isVerb: false },
      { word: 'forte',   wordClass: 'Adjetivo',                                     isVerb: false },
      { word: 'brilhou', wordClass: 'Verbo — pretérito perfeito de brilhar (-ar)',  isVerb: true  },
      { word: 'hoje',    wordClass: 'Advérbio de tempo',                            isVerb: false },
    ],
    feedback: '"Brilhou" é o verbo — indica o fenômeno da natureza. No infinitivo: <strong>brilhar</strong>, terminação <strong>-ar</strong>. Atenção: o adjetivo "forte" vem antes do verbo, mas não é o verbo!',
    example: 'Outros verbos -ar: iluminar, clarear, resplandecer? Não — resplandecer é -er. Ex: iluminar, clarear.',
    answers: [],
  },

  {
    type: 'word-select',
    difficulty: 'Fácil',
    text: '15. Clique no VERBO da frase:',
    sentence: ['A', 'menina', 'partiu', 'cedo', '.'],
    correctIndex: 2,
    wordClassHints: [
      { word: 'A',       wordClass: 'Artigo definido',                             isVerb: false },
      { word: 'menina',  wordClass: 'Substantivo',                                 isVerb: false },
      { word: 'partiu',  wordClass: 'Verbo — pretérito perfeito de partir (-ir)',  isVerb: true  },
      { word: 'cedo',    wordClass: 'Advérbio de tempo',                           isVerb: false },
    ],
    feedback: '"Partiu" é o verbo — indica a ação de ir embora. No infinitivo: <strong>partir</strong>, terminação <strong>-ir</strong>.',
    example: 'Outros verbos -ir: sair, vir, ferir, nutrir, dividir.',
    answers: [],
  },

  {
    type: 'word-select',
    difficulty: 'Fácil',
    text: '16. Clique no VERBO da frase:',
    sentence: ['O', 'pai', 'vendeu', 'o', 'carro', '.'],
    correctIndex: 2,
    wordClassHints: [
      { word: 'O',      wordClass: 'Artigo definido',                             isVerb: false },
      { word: 'pai',    wordClass: 'Substantivo',                                 isVerb: false },
      { word: 'vendeu', wordClass: 'Verbo — pretérito perfeito de vender (-er)',  isVerb: true  },
      { word: 'o',      wordClass: 'Artigo definido',                             isVerb: false },
      { word: 'carro',  wordClass: 'Substantivo',                                 isVerb: false },
    ],
    feedback: '"Vendeu" é o verbo — indica o que o pai fez. No infinitivo: <strong>vender</strong>, terminação <strong>-er</strong>.',
    example: 'Outros verbos -er: perder, morder, resolver, esquecer, entender.',
    answers: [],
  },

  {
    type: 'word-select',
    difficulty: 'Fácil',
    text: '17. Clique no VERBO da frase:',
    sentence: ['O', 'vento', 'frio', 'soprou', 'forte', '.'],
    correctIndex: 3,
    wordClassHints: [
      { word: 'O',      wordClass: 'Artigo definido',                             isVerb: false },
      { word: 'vento',  wordClass: 'Substantivo',                                 isVerb: false },
      { word: 'frio',   wordClass: 'Adjetivo',                                    isVerb: false },
      { word: 'soprou', wordClass: 'Verbo — pretérito perfeito de soprar (-ar)',  isVerb: true  },
      { word: 'forte',  wordClass: 'Advérbio de modo',                            isVerb: false },
    ],
    feedback: '"Soprou" é o verbo — indica o fenômeno da natureza. No infinitivo: <strong>soprar</strong>, terminação <strong>-ar</strong>. O adjetivo "frio" qualifica o sujeito "vento", não é o verbo.',
    example: 'Outros verbos -ar: respirar, assobiar, uivar, ventar.',
    answers: [],
  },

  {
    type: 'word-select',
    difficulty: 'Fácil',
    text: '18. Clique no VERBO da frase:',
    sentence: ['A', 'vovó', 'propôs', 'uma', 'brincadeira', '.'],
    correctIndex: 2,
    wordClassHints: [
      { word: 'A',            wordClass: 'Artigo definido',                            isVerb: false },
      { word: 'vovó',         wordClass: 'Substantivo',                                isVerb: false },
      { word: 'propôs',       wordClass: 'Verbo — pretérito perfeito de propor (-pôr)', isVerb: true  },
      { word: 'uma',          wordClass: 'Artigo indefinido',                          isVerb: false },
      { word: 'brincadeira',  wordClass: 'Substantivo',                                isVerb: false },
    ],
    feedback: '"Propôs" é o verbo — indica a ação da vovó. No infinitivo: <strong>propor</strong>, derivado de <strong>pôr</strong>, terminação <strong>-pôr</strong>.',
    example: 'Outros derivados de pôr: compor, repor, dispor, supor, depor.',
    answers: [],
  },

  {
    type: 'word-select',
    difficulty: 'Fácil',
    text: '19. Clique no VERBO da frase:',
    sentence: ['O', 'pequeno', 'pássaro', 'voou', 'alto', '.'],
    correctIndex: 3,
    wordClassHints: [
      { word: 'O',        wordClass: 'Artigo definido',                           isVerb: false },
      { word: 'pequeno',  wordClass: 'Adjetivo',                                  isVerb: false },
      { word: 'pássaro',  wordClass: 'Substantivo',                               isVerb: false },
      { word: 'voou',     wordClass: 'Verbo — pretérito perfeito de voar (-ar)',  isVerb: true  },
      { word: 'alto',     wordClass: 'Advérbio de modo',                          isVerb: false },
    ],
    feedback: '"Voou" é o verbo — indica a ação do pássaro. No infinitivo: <strong>voar</strong>, terminação <strong>-ar</strong>. O adjetivo "pequeno" qualifica o sujeito, não é o verbo.',
    example: 'Outros verbos -ar: pousar, planar, alçar, agitar, bater.',
    answers: [],
  },

  {
    type: 'word-select',
    difficulty: 'Fácil',
    text: '20. Clique no VERBO da frase:',
    sentence: ['A', 'turma', 'aplaudiu', 'o', 'professor', '.'],
    correctIndex: 2,
    wordClassHints: [
      { word: 'A',          wordClass: 'Artigo definido',                               isVerb: false },
      { word: 'turma',      wordClass: 'Substantivo',                                   isVerb: false },
      { word: 'aplaudiu',   wordClass: 'Verbo — pretérito perfeito de aplaudir (-ir)',  isVerb: true  },
      { word: 'o',          wordClass: 'Artigo definido',                               isVerb: false },
      { word: 'professor',  wordClass: 'Substantivo',                                   isVerb: false },
    ],
    feedback: '"Aplaudiu" é o verbo — indica a ação da turma. No infinitivo: <strong>aplaudir</strong>, terminação <strong>-ir</strong>.',
    example: 'Outros verbos -ir: distribuir, possuir, contribuir, fugir, sorrir.',
    answers: [],
  },

  {
    type: 'word-select',
    difficulty: 'Fácil',
    text: '21. Clique no VERBO da frase:',
    sentence: ['A', 'Maria', 'escreveu', 'uma', 'carta', '.'],
    correctIndex: 2,
    wordClassHints: [
      { word: 'A',        wordClass: 'Artigo definido',                                isVerb: false },
      { word: 'Maria',    wordClass: 'Substantivo próprio',                            isVerb: false },
      { word: 'escreveu', wordClass: 'Verbo — pretérito perfeito de escrever (-er)',   isVerb: true  },
      { word: 'uma',      wordClass: 'Artigo indefinido',                              isVerb: false },
      { word: 'carta',    wordClass: 'Substantivo',                                    isVerb: false },
    ],
    feedback: '"Escreveu" é o verbo — indica a ação de Maria. No infinitivo: <strong>escrever</strong>, terminação <strong>-er</strong>.',
    example: 'Outros verbos -er: ler, vender, correr, beber, comer.',
    answers: [],
  },
];

// ── ESTADO ───────────────────────────────────────────────────
// phase: 'intro' | 'quiz' | 'results'
// activeSet: índices das questões da rodada atual
// results: array indexado pelo índice original da questão
const state = {
  phase:     'intro',
  current:   0,
  activeSet: questions.map((_, i) => i),
  results:   new Array(questions.length).fill(null),
  points:    180,
};

const $ = id => document.getElementById(id);

// ── ÍCONES ───────────────────────────────────────────────────
const icons = {
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M20 6 9 17l-5-5"/></svg>`,
  x:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M18 6 6 18"/><path d="M6 6l12 12"/></svg>`,
  left:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>`,
  right: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  bars:  `<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><rect x="4" y="13" width="4" height="7" rx="1"/><rect x="10" y="7" width="4" height="13" rx="1"/><rect x="16" y="3" width="4" height="17" rx="1"/></svg>`,
  retry: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,
};

const PUNCT = new Set(['.', ',', '!', '?', ';', ':']);

// ── DISPATCHER ───────────────────────────────────────────────
function render() {
  if (state.phase === 'intro')   { renderIntro();   return; }
  if (state.phase === 'results') { renderResults(); return; }
  renderQuestion();
}

// ── TELA DE INTRODUÇÃO ────────────────────────────────────────
function renderIntro() {
  $('quizContainer').innerHTML = `
    <div class="lesson-screen">
      <div class="lesson-badge"><i class="fa-solid fa-book-open"></i> Primeira Etapa</div>
      <h2>Você irá responder as questões que é a primeira etapa para conseguir analisar textos</h2>
      <div class="lesson-body">
        <p>Verbo é a palavra que indica ação. Toda vez que olhar um texto é a primeira coisa que precisa identificar.</p>
        <p>Observe que a palavra faz o texto se mexer. A palavra <em>correr</em>, por exemplo — você imagina alguém se mexendo.</p>
        <p>Também indica estado ou mudança de estado: <em>eu sou</em> ou <em>eu estou</em>, ou <em>estava</em>. Os textos indicam que inicialmente uma pessoa estava de uma forma e houve mudança (ser, estar).</p>
        <p>Pode indicar também fenômeno da natureza (chover, amanhecer).</p>
        <p>Os verbos têm terminação em <strong>ar, er, ir</strong> e <strong>pôr</strong> — que antes se chamava <em>poer</em>.</p>
        <p class="lesson-examples">Exemplos: correr, ser, chover, nascer, parecer.</p>
        <p>Então se tiver dúvida, tente conjugar no infinitivo (<strong>ar, er, ir</strong> ou <strong>pôr</strong>).</p>
        <p class="lesson-examples">Exemplo: <em>Amanheceu</em> ➜ colocar no infinitivo: <em>amanhecer</em>, terminação <strong>-er</strong>.</p>
      </div>
      <button type="button" class="btn-start" id="startBtn">
        Começar questões ${icons.right}
      </button>
    </div>`;
  $('startBtn').addEventListener('click', startQuiz);
}

function startQuiz() {
  state.phase     = 'quiz';
  state.current   = 0;
  state.activeSet = questions.map((_, i) => i);
  state.results   = new Array(questions.length).fill(null);
  state.points    = 180;
  const el = $('headerPontos'); if (el) el.textContent = state.points;
  updateStats();
  render();
}

// ── TELA DE RESULTADOS ────────────────────────────────────────
function renderResults() {
  const wrongSet  = state.activeSet.filter(i => state.results[i] && !state.results[i].correct);
  const correctCt = state.activeSet.length - wrongSet.length;
  const wrongCt   = wrongSet.length;
  const allClear  = wrongCt === 0;
  const iconBg    = allClear ? '#22c55e' : wrongCt > state.activeSet.length / 2 ? '#ef4444' : '#f97316';
  const iconName  = allClear ? 'fa-trophy' : 'fa-flag-checkered';

  $('quizContainer').innerHTML = `
    <div class="results-screen">
      <div class="results-icon" style="background:linear-gradient(135deg,${iconBg},${iconBg}bb)">
        <i class="fa-solid ${iconName}"></i>
      </div>
      <h2>Você concluiu as questões que é a primeira etapa para conseguir analisar textos</h2>
      <div class="results-stats-row">
        <div class="r-stat correct"><strong>${correctCt}</strong><span>Corretas</span></div>
        <div class="r-stat wrong"><strong>${wrongCt}</strong><span>Incorretas</span></div>
      </div>
      ${allClear
        ? `<p class="results-message">Parabéns! Você acertou todas as questões!</p>
           <div class="results-actions">
             <button type="button" class="btn-nav" id="retryAllBtn">${icons.retry} Recomeçar do início</button>
           </div>`
        : `<p class="results-message">
             Você errou <strong>${wrongCt}</strong> questão${wrongCt > 1 ? 'ões' : ''}.
             Clique em <strong>Praticar erros</strong> para tentar novamente as que errou.
           </p>
           <div class="results-actions">
             <button type="button" class="btn-nav" id="retryAllBtn">${icons.retry} Recomeçar tudo</button>
             <button type="button" class="btn-nav btn-nav-primary" id="practiceBtn">
               Praticar erros ${icons.right}
             </button>
           </div>`
      }
    </div>`;

  $('retryAllBtn').addEventListener('click', () => {
    state.results = new Array(questions.length).fill(null);
    startQuiz();
  });

  if (!allClear) {
    $('practiceBtn').addEventListener('click', () => {
      wrongSet.forEach(i => { state.results[i] = null; });
      state.activeSet = wrongSet;
      state.current   = 0;
      state.phase     = 'quiz';
      updateStats();
      render();
    });
  }
}

// ── RENDERIZAR QUESTÃO ────────────────────────────────────────
function renderQuestion() {
  const qIdx   = state.activeSet[state.current];
  const q      = questions[qIdx];
  const result = state.results[qIdx];
  const done   = result !== null;
  const isLast = state.current === state.activeSet.length - 1;
  const diffCls = q.difficulty === 'Médio'   ? ' difficulty-medium'
                : q.difficulty === 'Difícil' ? ' difficulty-hard' : '';

  const bodyHTML = q.type === 'word-select'
    ? buildWordSelect(q, result, done)
    : buildMultipleChoice(q, result, done);

  $('quizContainer').innerHTML = `
    <div class="question-counter">Questão ${state.current + 1} de ${state.activeSet.length}</div>
    <div class="difficulty${diffCls}">${icons.bars} ${q.difficulty}</div>
    <p class="question-title">${q.text}</p>
    ${bodyHTML}
    <div class="bottom-actions">
      <button type="button" class="btn-nav" id="prevBtn"${state.current === 0 ? ' disabled' : ''}>
        ${icons.left} Questão anterior
      </button>
      <button type="button" class="btn-nav btn-nav-primary" id="nextBtn"${!done ? ' disabled' : ''}>
        ${isLast ? 'Ver resultado' : 'Próxima questão'} ${icons.right}
      </button>
    </div>`;

  if (q.type === 'word-select') {
    $('quizContainer').querySelectorAll('.word-chip[data-wi]').forEach(chip => {
      chip.addEventListener('click', () => selectWordAnswer(+chip.dataset.wi));
    });
  } else {
    $('quizContainer').querySelectorAll('button[data-idx]').forEach(btn => {
      btn.addEventListener('click', () => selectAnswer(+btn.dataset.idx));
    });
  }

  $('prevBtn').addEventListener('click', () => navigate(-1));
  $('nextBtn').addEventListener('click', () => {
    if (isLast) { state.phase = 'results'; render(); }
    else        { navigate(1); }
  });
}

// ── MONTAR QUESTÃO MÚLTIPLA ESCOLHA ──────────────────────────
function buildMultipleChoice(q, result, done) {
  const answersHTML = q.answers.map((ans, idx) => {
    let cls  = 'answer';
    let mark = '';
    if (done) {
      cls += ' disabled';
      if (ans.correct)                   { cls += ' correct'; mark = `<span class="check-mark">${icons.check}</span>`; }
      else if (idx === result.selected)  { cls += ' wrong';   mark = `<span class="wrong-mark">${icons.x}</span>`; }
    }
    return `<button type="button" class="${cls}" data-idx="${idx}"${done ? ' disabled' : ''}>
      <span class="letter">${ans.letter}</span><span>${ans.text}</span>${mark}
    </button>`;
  }).join('');

  if (!done) return `<div class="answers">${answersHTML}</div>`;

  const hintsHTML = q.answers.map(ans => `
    <div class="hint-row">
      <span class="hint-letter${ans.correct ? ' correct' : ''}">${ans.letter}</span>
      <span class="hint-label${ans.correct ? ' correct' : ''}">${ans.hint}</span>
      ${ans.correct ? `<span class="hint-check">${icons.check}</span>` : ''}
    </div>`).join('');

  return `
    <div class="answers">${answersHTML}</div>
    <div class="feedback${result.correct ? '' : ' wrong'}">
      <div class="feedback-icon">${result.correct ? icons.check : icons.x}</div>
      <div class="feedback-content">
        <h2>${result.correct ? 'Resposta correta!' : 'Resposta incorreta!'}</h2>
        <p>${q.feedback}</p>
        ${q.example ? `<p>${q.example}</p>` : ''}
        <div class="hints-breakdown">
          <p class="hints-title">O que cada alternativa descrevia:</p>
          <div class="hints-list">${hintsHTML}</div>
        </div>
      </div>
    </div>`;
}

// ── MONTAR QUESTÃO WORD-SELECT ────────────────────────────────
function buildWordSelect(q, result, done) {
  const chipsHTML = q.sentence.map((word, idx) => {
    const isPunct = PUNCT.has(word);
    if (isPunct) return `<span class="word-chip punctuation">${word}</span>`;

    let cls = 'word-chip';
    if (done) {
      cls += ' disabled';
      if (idx === q.correctIndex)       cls += ' correct';
      else if (idx === result.selected) cls += ' wrong';
    }
    return `<span class="${cls}" data-wi="${idx}">${word}</span>`;
  }).join('');

  const instruction = done ? '' : `
    <p class="word-select-instruction">
      Clique na palavra que é um <strong>verbo</strong>
    </p>`;

  if (!done) return `${instruction}<div class="sentence-display">${chipsHTML}</div>`;

  const hintsHTML = q.wordClassHints.map(h => `
    <div class="hint-row">
      <span class="wh-word${h.isVerb ? ' correct' : ''}">${h.word}</span>
      <span class="wh-arrow">→</span>
      <span class="hint-label${h.isVerb ? ' correct' : ''}">${h.wordClass}</span>
      ${h.isVerb ? `<span class="hint-check">${icons.check}</span>` : ''}
    </div>`).join('');

  return `
    ${instruction}
    <div class="sentence-display">${chipsHTML}</div>
    <div class="feedback${result.correct ? '' : ' wrong'}">
      <div class="feedback-icon">${result.correct ? icons.check : icons.x}</div>
      <div class="feedback-content">
        <h2>${result.correct ? 'Correto!' : 'Incorreto!'}</h2>
        <p>${q.feedback}</p>
        ${q.example ? `<p>${q.example}</p>` : ''}
        <div class="hints-breakdown">
          <p class="hints-title">Classe de cada palavra da frase:</p>
          <div class="hints-list">${hintsHTML}</div>
        </div>
      </div>
    </div>`;
}

// ── SELECIONAR (múltipla escolha) ────────────────────────────
function selectAnswer(idx) {
  const qIdx = state.activeSet[state.current];
  if (state.results[qIdx] !== null) return;
  const correct = questions[qIdx].answers[idx].correct;
  state.results[qIdx] = { selected: idx, correct };
  if (correct) { state.points += 10; const el = $('headerPontos'); if (el) el.textContent = state.points; }
  updateStats();
  renderQuestion();
}

// ── SELECIONAR (word-select) ─────────────────────────────────
function selectWordAnswer(wordIdx) {
  const qIdx = state.activeSet[state.current];
  if (state.results[qIdx] !== null) return;
  const correct = wordIdx === questions[qIdx].correctIndex;
  state.results[qIdx] = { selected: wordIdx, correct };
  if (correct) { state.points += 10; const el = $('headerPontos'); if (el) el.textContent = state.points; }
  updateStats();
  renderQuestion();
}

// ── NAVEGAR ──────────────────────────────────────────────────
function navigate(dir) {
  state.current += dir;
  render();
}

// ── ESTATÍSTICAS ─────────────────────────────────────────────
function updateStats() {
  const answered    = state.activeSet.filter(i => state.results[i] !== null);
  const correctCt   = answered.filter(i => state.results[i].correct).length;
  const wrongCt     = answered.length - correctCt;
  const blank       = state.activeSet.length - answered.length;
  const acertoPct   = answered.length > 0 ? Math.round(correctCt / answered.length * 100) : 0;
  const progressPct = state.activeSet.length > 0
    ? Math.round(answered.length / state.activeSet.length * 100) : 0;

  const dc = $('donutChart');   if (dc) dc.style.background = `conic-gradient(var(--success-green) ${acertoPct}%, var(--divider-color) 0)`;
  const dv = $('donutValue');   if (dv) dv.textContent = acertoPct + '%';
  const sa = $('statAcertos');  if (sa) sa.textContent = correctCt;
  const se = $('statErros');    if (se) se.textContent = wrongCt;
  const sb = $('statEmBranco'); if (sb) sb.textContent = blank;
  const hp = $('headerPercent');      if (hp) hp.textContent = progressPct + '%';
  const hf = $('headerProgressFill'); if (hf) hf.style.width = progressPct + '%';
  const hs = $('headerSubtext');      if (hs) hs.textContent = `${answered.length} de ${state.activeSet.length} questões respondidas`;
  const mf = $('moduleProgressFill'); if (mf) mf.style.width = progressPct + '%';
  const mt = $('moduleProgressText'); if (mt) mt.textContent = progressPct + '%';
  const mp = $('moduleProgress');     if (mp) mp.textContent = `${answered.length} de ${state.activeSet.length} questões`;

  const badge = $('moduleBadge');
  const icon  = $('moduleStatusIcon');
  const allDone = answered.length === state.activeSet.length && state.activeSet.length > 0;
  if (allDone) {
    if (badge) { badge.className = 'badge'; badge.innerHTML = 'Concluído <i class="fa-solid fa-circle-check"></i>'; }
    if (icon)  icon.style.display = 'flex';
  } else {
    if (badge) { badge.className = 'badge in-progress'; badge.innerHTML = 'Em andamento <i class="fa-solid fa-circle-half-stroke"></i>'; }
    if (icon)  icon.style.display = 'none';
  }
}

// ── INICIAR ───────────────────────────────────────────────────
updateStats();
render();
