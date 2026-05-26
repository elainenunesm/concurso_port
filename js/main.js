'use strict';

// ── QUESTÕES — MÓDULO 1: VERBOS ───────────────────────────────
// Questões gerenciadas em QUESTOES.md. Alterar lá antes de implementar.
// Ativas: A21 (conceito) + A01–A10 (reconhecimento) + B01–B10 (classificação) = 21 questões
const questions = [

  // ── A21: CONCEITO (multiple-choice) ──────────────────────────
  {
    type: 'multiple-choice',
    difficulty: 'Fácil',
    text: 'O que é um <strong>verbo</strong>?',
    answers: [
      { letter: 'A', text: 'Palavra que indica ação, estado, mudança de estado ou fenômeno da natureza.',  correct: true,  hint: 'Correto! Verbos expressam o que o sujeito faz, como está ou o que acontece na natureza.' },
      { letter: 'B', text: 'Palavra que nomeia seres, lugares, objetos ou sentimentos.',                    correct: false, hint: 'Essa é a definição de substantivo, não de verbo. Ex: casa, João, alegria.' },
      { letter: 'C', text: 'Palavra que qualifica ou caracteriza o substantivo.',                          correct: false, hint: 'Essa é a definição de adjetivo, não de verbo. Ex: bonito, alto, triste.' },
      { letter: 'D', text: 'Palavra que indica lugar, tempo ou modo.',                                     correct: false, hint: 'Essa é a definição de advérbio, não de verbo. Ex: aqui, ontem, rapidamente.' },
    ],
    feedback: 'O <strong>verbo</strong> é a palavra que indica: <strong>ação</strong> (correu, estudou), <strong>estado</strong> (está, permanece), <strong>mudança de estado</strong> (ficou, cresceu) ou <strong>fenômeno da natureza</strong> (choveu, amanheceu).',
    example: 'Exemplos de verbos: cantar, ser, ficar, chover. Em cada frase, o verbo é o núcleo que conecta o sujeito ao que acontece.',
  },

  // ── A: RECONHECIMENTO DE VERBO (word-select) ─────────────────
  {
    type: 'word-select',
    difficulty: 'Fácil',
    text: 'Clique no VERBO da frase:',
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
    text: 'Clique no VERBO da frase:',
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
    text: 'Clique no VERBO da frase:',
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
    text: 'Clique no VERBO da frase:',
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
    text: 'Clique no VERBO da frase:',
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
    text: 'Clique no VERBO da frase:',
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
    text: 'Clique no VERBO da frase:',
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
    example: 'Outros verbos -ar: iluminar, clarear, aquecer.',
    answers: [],
  },

  {
    type: 'word-select',
    difficulty: 'Fácil',
    text: 'Clique no VERBO da frase:',
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
    text: 'Clique no VERBO da frase:',
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
    text: 'Clique no VERBO da frase:',
    sentence: ['A', 'vovó', 'propôs', 'uma', 'brincadeira', '.'],
    correctIndex: 2,
    wordClassHints: [
      { word: 'A',            wordClass: 'Artigo definido',                             isVerb: false },
      { word: 'vovó',         wordClass: 'Substantivo',                                 isVerb: false },
      { word: 'propôs',       wordClass: 'Verbo — pretérito perfeito de propor (-pôr)', isVerb: true  },
      { word: 'uma',          wordClass: 'Artigo indefinido',                           isVerb: false },
      { word: 'brincadeira',  wordClass: 'Substantivo',                                 isVerb: false },
    ],
    feedback: '"Propôs" é o verbo — indica a ação da vovó. No infinitivo: <strong>propor</strong>, derivado de <strong>pôr</strong>, terminação <strong>-pôr</strong>.',
    example: 'Outros derivados de pôr: compor, repor, dispor, supor, depor.',
    answers: [],
  },

  // ── B: CLASSIFICAÇÃO DO VERBO (multiple-choice) ───────────────
  {
    type: 'multiple-choice',
    difficulty: 'Fácil',
    text: 'Na frase: <span style="font-weight:400"><em>"O cachorro <strong>correu</strong> pelo jardim."</em></span><br>O verbo em destaque indica:',
    answers: [
      { letter: 'A', text: 'ação',                 correct: true,  hint: 'Correto! "Correu" mostra o cachorro em movimento — uma ação praticada.' },
      { letter: 'B', text: 'estado',               correct: false, hint: 'Estado indica como o sujeito se encontra, sem movimento. Aqui há deslocamento físico.' },
      { letter: 'C', text: 'mudança de estado',    correct: false, hint: 'Mudança de estado indica transformação de condição. Aqui há movimento físico intencional.' },
      { letter: 'D', text: 'fenômeno da natureza', correct: false, hint: 'Fenômenos da natureza são eventos como chover, amanhecer. Aqui o sujeito é um animal que se move.' },
    ],
    feedback: '"Correu" indica movimento físico do cachorro — ele praticou uma ação. Verbos de ação mostram que o sujeito faz algo ou se desloca.',
    example: 'Outros verbos de ação: pular, nadar, escrever, rir, gritar.',
  },

  {
    type: 'multiple-choice',
    difficulty: 'Fácil',
    text: 'Na frase: <span style="font-weight:400"><em>"Ana <strong>está</strong> muito animada com a viagem."</em></span><br>O verbo em destaque indica:',
    answers: [
      { letter: 'A', text: 'ação',                 correct: false, hint: 'Ação implica movimento ou atividade. Aqui Ana não está fazendo nada — ela está num estado de ânimo.' },
      { letter: 'B', text: 'estado',               correct: true,  hint: 'Correto! "Está" mostra como Ana se encontra — ela está em um estado de animação.' },
      { letter: 'C', text: 'mudança de estado',    correct: false, hint: 'Mudança implica transformação. Aqui não há mudança descrita, apenas a condição atual de Ana.' },
      { letter: 'D', text: 'fenômeno da natureza', correct: false, hint: 'Fenômenos da natureza são eventos como chover, nevar. Aqui o sujeito é uma pessoa.' },
    ],
    feedback: '"Está" mostra como Ana se encontra naquele momento — ela não está fazendo nada, apenas se encontra em um estado de animação. Verbos de estado: ser, estar, parecer, permanecer.',
    example: 'Compare: "Ana <strong>está</strong> animada." (estado) x "Ana <strong>correu</strong> para abraçar a amiga." (ação).',
  },

  {
    type: 'multiple-choice',
    difficulty: 'Fácil',
    text: 'Na frase: <span style="font-weight:400"><em>"<strong>Amanheceu</strong> com neblina hoje."</em></span><br>O verbo em destaque indica:',
    answers: [
      { letter: 'A', text: 'ação',                 correct: false, hint: 'Ação implica um sujeito que age voluntariamente. Aqui não há sujeito — é um evento natural.' },
      { letter: 'B', text: 'estado',               correct: false, hint: 'Estado indica como algo se encontra. "Amanhecer" indica um evento, não uma condição persistente.' },
      { letter: 'C', text: 'mudança de estado',    correct: false, hint: 'Mudança de estado indica transformação de um ser. Aqui o sujeito é indeterminado — é a natureza.' },
      { letter: 'D', text: 'fenômeno da natureza', correct: true,  hint: 'Correto! "Amanheceu" indica o nascer do dia — um evento natural sem sujeito determinado.' },
    ],
    feedback: '"Amanheceu" indica o nascer do dia — um evento natural que independe da vontade de qualquer ser. Verbos de fenômeno: chover, nevar, amanhecer, anoitecer, trovejar, relampejar.',
    example: 'Esses verbos geralmente não têm sujeito: "Choveu." "Amanheceu." "Trovejou."',
  },

  {
    type: 'multiple-choice',
    difficulty: 'Fácil',
    text: 'Na frase: <span style="font-weight:400"><em>"O garoto <strong>cresceu</strong> cinco centímetros em seis meses."</em></span><br>O verbo em destaque indica:',
    answers: [
      { letter: 'A', text: 'ação',                 correct: false, hint: 'Crescer não é uma ação voluntária — o garoto não "fez" crescer. Houve uma transformação no seu corpo.' },
      { letter: 'B', text: 'estado',               correct: false, hint: 'Estado indica permanência de condição. Crescer implica que algo mudou, não que ficou igual.' },
      { letter: 'C', text: 'mudança de estado',    correct: true,  hint: 'Correto! "Cresceu" indica que o garoto passou de uma condição para outra — ele mudou de tamanho.' },
      { letter: 'D', text: 'fenômeno da natureza', correct: false, hint: 'Fenômenos da natureza são eventos como chover. O sujeito aqui é um ser humano que se transformou.' },
    ],
    feedback: '"Cresceu" indica que o garoto passou de uma condição para outra — mudou de tamanho. Não há ação voluntária; houve uma transformação no sujeito.',
    example: 'Outros verbos de mudança de estado: envelhecer, emagrecer, engrossar, virar, tornar-se.',
  },

  {
    type: 'multiple-choice',
    difficulty: 'Fácil',
    text: 'Na frase: <span style="font-weight:400"><em>"O doente <strong>ficou</strong> com febre alta."</em></span><br>O verbo em destaque indica:',
    answers: [
      { letter: 'A', text: 'ação',                 correct: false, hint: 'Ter febre não é uma ação praticada voluntariamente. O doente não "fez" ficar com febre.' },
      { letter: 'B', text: 'estado',               correct: false, hint: 'Estado indica permanência de condição. Aqui a condição do doente mudou — antes estava sem febre.' },
      { letter: 'C', text: 'mudança de estado',    correct: true,  hint: 'Correto! "Ficou com febre" indica que o doente passou de uma condição para outra — surgiu a febre.' },
      { letter: 'D', text: 'fenômeno da natureza', correct: false, hint: 'Fenômenos da natureza são eventos como chover. Aqui um ser humano mudou de condição física.' },
    ],
    feedback: '"Ficou com febre" indica que o doente passou de uma condição para outra — antes estava sem febre e depois passou a ter. "Ficar + condição/adjetivo" geralmente indica mudança de estado.',
    example: 'Outros exemplos de mudança: "ficou triste", "ficou nervosa", "ficou doente".',
  },

  {
    type: 'multiple-choice',
    difficulty: 'Fácil',
    text: 'Na frase: <span style="font-weight:400"><em>"O professor <strong>permaneceu</strong> de pé durante toda a aula."</em></span><br>O verbo em destaque indica:',
    answers: [
      { letter: 'A', text: 'ação',                 correct: false, hint: 'Ação implica movimento ou atividade. Permanecer de pé indica que ele ficou assim, sem mudar.' },
      { letter: 'B', text: 'estado',               correct: true,  hint: 'Correto! "Permaneceu" indica que o professor manteve a mesma condição — ficou de pé sem mudar.' },
      { letter: 'C', text: 'mudança de estado',    correct: false, hint: 'Mudança implica transformação. Aqui não houve mudança — ele permaneceu na mesma posição.' },
      { letter: 'D', text: 'fenômeno da natureza', correct: false, hint: 'Fenômenos da natureza são eventos climáticos. Aqui uma pessoa manteve uma posição física.' },
    ],
    feedback: '"Permaneceu" indica continuidade — o professor ficou no mesmo estado (de pé) durante toda a aula. Não houve mudança, apenas manutenção de uma condição: isso é <strong>estado</strong>.',
    example: 'Verbos de estado: ser, estar, parecer, permanecer, continuar (+ adj.), ficar (+ lugar).',
  },

  {
    type: 'multiple-choice',
    difficulty: 'Médio',
    text: '<strong>Atenção, pegadinha!</strong><br>Na frase: <span style="font-weight:400"><em>"Pedro <strong>anda</strong> preocupado ultimamente."</em></span><br>O verbo em destaque indica:',
    answers: [
      { letter: 'A', text: 'ação',                 correct: false, hint: 'Aqui "anda" não significa caminhar. Leia a frase com atenção: Pedro não está se deslocando.' },
      { letter: 'B', text: 'estado',               correct: true,  hint: 'Correto! "Anda preocupado" é expressão coloquial para "está preocupado" — indica estado.' },
      { letter: 'C', text: 'mudança de estado',    correct: false, hint: 'Mudança implica transformação. A frase mostra como Pedro se encontra, não que ele mudou agora.' },
      { letter: 'D', text: 'fenômeno da natureza', correct: false, hint: 'Fenômenos da natureza são eventos climáticos. Pedro é uma pessoa em estado de preocupação.' },
    ],
    feedback: 'Atenção! Aqui "anda" não significa caminhar. No uso coloquial, <em>"anda preocupado"</em> = <em>"está preocupado ultimamente"</em>. O verbo indica como Pedro se encontra — um <strong>estado</strong>.',
    example: 'Compare: "Pedro <strong>anda</strong> preocupado." (estado) x "Pedro <strong>andou</strong> quilômetros." (ação).',
  },

  {
    type: 'multiple-choice',
    difficulty: 'Médio',
    text: '<strong>Atenção, pegadinha!</strong><br>Na frase: <span style="font-weight:400"><em>"A criança <strong>caiu</strong> da bicicleta."</em></span><br>O verbo em destaque indica:',
    answers: [
      { letter: 'A', text: 'ação',                 correct: true,  hint: 'Correto! A criança sofreu uma ação física — o ato de cair é um evento com sujeito determinado.' },
      { letter: 'B', text: 'estado',               correct: false, hint: 'Estado indica permanência de condição. Aqui houve movimento — a criança se deslocou involuntariamente.' },
      { letter: 'C', text: 'mudança de estado',    correct: false, hint: 'Mudança de estado indica transformação de condição. Aqui a criança realizou um movimento físico.' },
      { letter: 'D', text: 'fenômeno da natureza', correct: false, hint: 'O mesmo verbo "cair" indica fenômeno quando o sujeito é a chuva. Aqui o sujeito é uma criança.' },
    ],
    feedback: 'Atenção! O verbo "cair" muda de classificação conforme o contexto. Quando a <em>chuva</em> cai, é fenômeno da natureza. Quando a <em>criança</em> cai, é ação — um evento físico com sujeito determinado.',
    example: 'Compare: "A chuva <strong>caiu</strong>." (fenômeno) x "A criança <strong>caiu</strong>." (ação) x "A temperatura <strong>caiu</strong>." (mudança de estado).',
  },

  {
    type: 'multiple-choice',
    difficulty: 'Difícil',
    text: '<strong>Atenção, pegadinha!</strong><br>Na frase: <span style="font-weight:400"><em>"O soldado <strong>morreu</strong> no campo de batalha."</em></span><br>O verbo em destaque indica:',
    answers: [
      { letter: 'A', text: 'ação',                 correct: false, hint: 'Morrer não é uma ação voluntária praticada pelo sujeito. É uma transformação irreversível de condição.' },
      { letter: 'B', text: 'estado',               correct: false, hint: 'Estado indica permanência de condição. Morrer implica que a condição do sujeito se transformou.' },
      { letter: 'C', text: 'mudança de estado',    correct: true,  hint: 'Correto! "Morreu" indica que o soldado passou da condição de vivo para a de morto — transformação irreversível.' },
      { letter: 'D', text: 'fenômeno da natureza', correct: false, hint: 'Fenômenos da natureza são eventos climáticos. Aqui há a transformação de condição de um ser humano.' },
    ],
    feedback: '"Morreu" indica que o soldado passou da condição de vivo para a de morto — uma <strong>mudança de estado</strong> irreversível. Muitos marcam "ação" por impulso, mas "morrer" não descreve uma ação voluntária: é uma transformação.',
    example: 'Verbos de mudança de estado: morrer, nascer, envelhecer, crescer, emagrecer, virar, tornar-se.',
  },

  {
    type: 'multiple-choice',
    difficulty: 'Difícil',
    text: '<strong>Atenção, pegadinha!</strong><br>Na frase: <span style="font-weight:400"><em>"Ele <strong>amanheceu</strong> doente na segunda-feira."</em></span><br>O verbo em destaque indica:',
    answers: [
      { letter: 'A', text: 'ação',                 correct: false, hint: 'Amanhecer doente não é uma ação praticada. É uma condição em que o sujeito se encontrou ao acordar.' },
      { letter: 'B', text: 'estado',               correct: false, hint: 'Estado indica permanência. Aqui "amanheceu" indica que ao acordar o sujeito passou a ter essa condição.' },
      { letter: 'C', text: 'mudança de estado',    correct: true,  hint: 'Correto! "Amanheceu doente" indica que ao acordar ele estava numa nova condição — mudança de estado.' },
      { letter: 'D', text: 'fenômeno da natureza', correct: false, hint: 'Atenção! "Amanheceu" só é fenômeno quando o sujeito é indeterminado (o dia amanheceu). Aqui o sujeito é "ele".' },
    ],
    feedback: 'Atenção! "Amanhecer" nem sempre é fenômeno da natureza. Quando o sujeito é uma <strong>pessoa</strong>, indica que ao amanhecer ela se encontrava naquela condição — <strong>mudança de estado</strong>. Compare: <em>"Amanheceu cedo."</em> (fenômeno) x <em>"Ele amanheceu doente."</em> (mudança de estado).',
    example: 'O mesmo vale para "anoitecer": "Anoiteceu." (fenômeno) x "Ela anoiteceu triste." (mudança de estado).',
  },
];

// ── QUESTÕES MÓDULO 2 ─────────────────────────────────────────
const questions2 = [
  {
    type: 'dual-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong> e no <strong>SUJEITO</strong> da frase:',
    sentence: ['O', 'gato', 'dormiu', 'na', 'cama', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    feedback: '"Dormiu" é o verbo (ação de dormir). "O gato" é o sujeito — quem dormiu? O gato.',
    example: 'Pergunte: Quem dormiu? → O gato. Essa é a técnica para encontrar o sujeito!',
  },
  {
    type: 'dual-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong> e no <strong>SUJEITO</strong> da frase:',
    sentence: ['A', 'Maria', 'cantou', 'no', 'coral', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    feedback: '"Cantou" é o verbo (ação de cantar). "A Maria" é o sujeito — quem cantou? A Maria.',
    example: 'O sujeito pode ser uma pessoa. "A Maria" = artigo + nome próprio.',
  },
  {
    type: 'dual-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong> e no <strong>SUJEITO</strong> da frase:',
    sentence: ['O', 'Pedro', 'comeu', 'o', 'bolo', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    feedback: '"Comeu" é o verbo (ação de comer). "O Pedro" é o sujeito — quem comeu? O Pedro.',
    example: 'O artigo "O" faz parte do sujeito! Sujeito = "O Pedro", não só "Pedro".',
  },
  {
    type: 'dual-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong> e no <strong>SUJEITO</strong> da frase:',
    sentence: ['A', 'chuva', 'caiu', 'de', 'manhã', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    feedback: '"Caiu" é o verbo (fenômeno da natureza). "A chuva" é o sujeito — o que caiu? A chuva.',
    example: 'O sujeito pode ser um elemento da natureza. Quem ou o que + verbo = sujeito.',
  },
  {
    type: 'dual-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong> e no <strong>SUJEITO</strong> da frase:',
    sentence: ['O', 'João', 'estudou', 'a', 'lição', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    feedback: '"Estudou" é o verbo (ação de estudar). "O João" é o sujeito — quem estudou? O João.',
    example: 'Sujeito simples: apenas uma pessoa ou coisa pratica a ação.',
  },
  {
    type: 'dual-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong> e no <strong>SUJEITO</strong> da frase:',
    sentence: ['A', 'Ana', 'bebeu', 'o', 'suco', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    feedback: '"Bebeu" é o verbo (ação de beber). "A Ana" é o sujeito — quem bebeu? A Ana.',
    example: 'Atenção: "o suco" é o objeto (o que foi bebido), não o sujeito!',
  },
  {
    type: 'dual-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong> e no <strong>SUJEITO</strong> da frase:',
    sentence: ['O', 'menino', 'sorriu', 'feliz', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    feedback: '"Sorriu" é o verbo (ação de sorrir). "O menino" é o sujeito — quem sorriu? O menino.',
    example: '"Feliz" é adjetivo que descreve o menino — não é o sujeito.',
  },
  {
    type: 'dual-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong> e no <strong>SUJEITO</strong> da frase:',
    sentence: ['A', 'professora', 'pôs', 'o', 'livro', 'na', 'mesa', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    feedback: '"Pôs" é o verbo (ação de pôr). "A professora" é o sujeito — quem pôs? A professora.',
    example: '"O livro" é o objeto (o que foi posto). O sujeito é quem pratica a ação.',
  },
  {
    type: 'dual-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong> e no <strong>SUJEITO</strong> da frase:',
    sentence: ['O', 'cachorro', 'correu', 'no', 'parque', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    feedback: '"Correu" é o verbo (ação de correr). "O cachorro" é o sujeito — quem correu? O cachorro.',
    example: 'O sujeito pode ser um animal. "No parque" indica lugar — não é o sujeito.',
  },
  {
    type: 'dual-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong> e no <strong>SUJEITO</strong> da frase:',
    sentence: ['A', 'criança', 'pulou', 'na', 'cama', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    feedback: '"Pulou" é o verbo (ação de pular). "A criança" é o sujeito — quem pulou? A criança.',
    example: '"Na cama" indica lugar — não confunda com o sujeito.',
  },
  {
    type: 'dual-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong> e no <strong>SUJEITO</strong> da frase:',
    sentence: ['O', 'avô', 'leu', 'o', 'jornal', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    feedback: '"Leu" é o verbo (ação de ler). "O avô" é o sujeito — quem leu? O avô.',
    example: '"O jornal" é o objeto (o que foi lido). Sujeito ≠ objeto.',
  },
  {
    type: 'dual-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong> e no <strong>SUJEITO</strong> da frase:',
    sentence: ['A', 'mãe', 'abriu', 'a', 'janela', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    feedback: '"Abriu" é o verbo (ação de abrir). "A mãe" é o sujeito — quem abriu? A mãe.',
    example: '"A janela" é o objeto. Encontre o verbo primeiro, depois pergunte quem praticou a ação.',
  },
  {
    type: 'dual-select',
    difficulty: 'Médio',
    text: 'Clique no <strong>VERBO</strong> e em <strong>TODAS</strong> as palavras do <strong>SUJEITO</strong>:',
    sentence: ['O', 'sol', 'forte', 'brilhou', 'hoje', '.'],
    verbIndex: 3,
    subjectIndices: [0, 1, 2],
    feedback: '"Brilhou" é o verbo. "O sol forte" é o sujeito — quem brilhou? O sol forte. O adjetivo "forte" faz parte do sujeito!',
    example: 'O sujeito inclui todos os termos referentes a quem pratica a ação: artigo + substantivo + adjetivo.',
  },
  {
    type: 'dual-select',
    difficulty: 'Médio',
    text: 'Clique no <strong>VERBO</strong> e em <strong>TODAS</strong> as palavras do <strong>SUJEITO</strong>:',
    sentence: ['O', 'vento', 'frio', 'soprou', 'forte', '.'],
    verbIndex: 3,
    subjectIndices: [0, 1, 2],
    feedback: '"Soprou" é o verbo. "O vento frio" é o sujeito completo — quem soprou? O vento frio. O adjetivo "frio" faz parte do sujeito.',
    example: 'Cuidado: "forte" no final é advérbio (como soprou?), não faz parte do sujeito.',
  },
  {
    type: 'dual-select',
    difficulty: 'Médio',
    text: 'Clique no <strong>VERBO</strong> e em <strong>TODAS</strong> as palavras do <strong>SUJEITO</strong>:',
    sentence: ['O', 'pequeno', 'pássaro', 'voou', 'alto', '.'],
    verbIndex: 3,
    subjectIndices: [0, 1, 2],
    feedback: '"Voou" é o verbo. "O pequeno pássaro" é o sujeito — quem voou? O pequeno pássaro. O adjetivo "pequeno" faz parte do sujeito.',
    example: '"Alto" no final é advérbio (como voou?), não é parte do sujeito.',
  },
  {
    type: 'dual-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong> e no <strong>SUJEITO</strong> da frase:',
    sentence: ['A', 'menina', 'partiu', 'cedo', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    feedback: '"Partiu" é o verbo (ação de partir). "A menina" é o sujeito — quem partiu? A menina.',
    example: '"Cedo" é advérbio de tempo — indica quando, não quem praticou a ação.',
  },
  {
    type: 'dual-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong> e no <strong>SUJEITO</strong> da frase:',
    sentence: ['O', 'pai', 'vendeu', 'o', 'carro', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    feedback: '"Vendeu" é o verbo (ação de vender). "O pai" é o sujeito — quem vendeu? O pai.',
    example: '"O carro" é o objeto da venda — não é o sujeito.',
  },
  {
    type: 'dual-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong> e no <strong>SUJEITO</strong> da frase:',
    sentence: ['A', 'vovó', 'propôs', 'uma', 'brincadeira', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    feedback: '"Propôs" é o verbo (ação de propor). "A vovó" é o sujeito — quem propôs? A vovó.',
    example: '"Uma brincadeira" é o que foi proposto (objeto), não o sujeito.',
  },
  {
    type: 'dual-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong> e no <strong>SUJEITO</strong> da frase:',
    sentence: ['A', 'turma', 'aplaudiu', 'o', 'professor', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    feedback: '"Aplaudiu" é o verbo (ação de aplaudir). "A turma" é o sujeito — quem aplaudiu? A turma.',
    example: '"O professor" é quem recebeu o aplauso (objeto), não o sujeito.',
  },
  {
    type: 'dual-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong> e no <strong>SUJEITO</strong> da frase:',
    sentence: ['A', 'Maria', 'escreveu', 'uma', 'carta', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    feedback: '"Escreveu" é o verbo (ação de escrever). "A Maria" é o sujeito — quem escreveu? A Maria.',
    example: '"Uma carta" é o que foi escrito (objeto). O sujeito é quem pratica a ação do verbo.',
  },
];

// ── QUESTÕES MÓDULO 3 ─────────────────────────────────────────
const questions3 = [
  {
    type: 'tri-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['O', 'gato', 'dormiu', 'na', 'cama', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    predicateIndices: [2, 3, 4],
    feedback: '"Dormiu" é o verbo. "O gato" é o sujeito — quem dormiu? O gato. O predicado é "dormiu na cama" — tudo que não é sujeito, incluindo o verbo.',
    example: 'Dica: o predicado sempre começa com o verbo e inclui tudo que não é sujeito.',
  },
  {
    type: 'tri-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['A', 'Maria', 'cantou', 'no', 'coral', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    predicateIndices: [2, 3, 4],
    feedback: '"Cantou" é o verbo. "A Maria" é o sujeito. O predicado é "cantou no coral" — informa o que Maria fez e onde.',
    example: '"No coral" indica lugar — é parte do predicado, não do sujeito.',
  },
  {
    type: 'tri-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['O', 'Pedro', 'comeu', 'o', 'bolo', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    predicateIndices: [2, 3, 4],
    feedback: '"Comeu" é o verbo. "O Pedro" é o sujeito. O predicado é "comeu o bolo" — informa a ação e o que foi consumido.',
    example: '"O bolo" é o objeto (o que Pedro comeu) — o objeto está no predicado!',
  },
  {
    type: 'tri-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['A', 'chuva', 'caiu', 'de', 'manhã', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    predicateIndices: [2, 3, 4],
    feedback: '"Caiu" é o verbo. "A chuva" é o sujeito. O predicado é "caiu de manhã" — indica a ação e o tempo.',
    example: '"De manhã" é adjunto adverbial de tempo — faz parte do predicado.',
  },
  {
    type: 'tri-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['O', 'João', 'estudou', 'a', 'lição', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    predicateIndices: [2, 3, 4],
    feedback: '"Estudou" é o verbo. "O João" é o sujeito. O predicado é "estudou a lição" — informa a ação e o que foi estudado.',
    example: '"A lição" é o que foi estudado (objeto direto) — parte do predicado.',
  },
  {
    type: 'tri-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['A', 'Ana', 'bebeu', 'o', 'suco', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    predicateIndices: [2, 3, 4],
    feedback: '"Bebeu" é o verbo. "A Ana" é o sujeito. O predicado é "bebeu o suco" — a ação e o que foi bebido.',
    example: 'Atenção: "o suco" é o objeto (o que foi bebido) — parte do predicado, não do sujeito!',
  },
  {
    type: 'tri-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['O', 'menino', 'sorriu', 'feliz', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    predicateIndices: [2, 3],
    feedback: '"Sorriu" é o verbo. "O menino" é o sujeito. O predicado é "sorriu feliz" — descreve a ação e o estado.',
    example: '"Feliz" descreve o menino durante a ação — é parte do predicado.',
  },
  {
    type: 'tri-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['A', 'professora', 'pôs', 'o', 'livro', 'na', 'mesa', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    predicateIndices: [2, 3, 4, 5, 6],
    feedback: '"Pôs" é o verbo. "A professora" é o sujeito. O predicado é "pôs o livro na mesa" — ação, objeto e lugar.',
    example: '"O livro" (objeto) e "na mesa" (lugar) fazem parte do predicado.',
  },
  {
    type: 'tri-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['O', 'cachorro', 'correu', 'no', 'parque', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    predicateIndices: [2, 3, 4],
    feedback: '"Correu" é o verbo. "O cachorro" é o sujeito. O predicado é "correu no parque" — a ação e o lugar.',
    example: '"No parque" indica onde correu — adjunto adverbial de lugar, parte do predicado.',
  },
  {
    type: 'tri-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['A', 'criança', 'pulou', 'na', 'cama', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    predicateIndices: [2, 3, 4],
    feedback: '"Pulou" é o verbo. "A criança" é o sujeito. O predicado é "pulou na cama" — ação e local.',
    example: '"Na cama" indica onde a criança pulou — faz parte do predicado.',
  },
  {
    type: 'tri-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['O', 'avô', 'leu', 'o', 'jornal', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    predicateIndices: [2, 3, 4],
    feedback: '"Leu" é o verbo. "O avô" é o sujeito. O predicado é "leu o jornal" — a ação e o que foi lido.',
    example: '"O jornal" é o objeto da leitura — parte do predicado, não do sujeito.',
  },
  {
    type: 'tri-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['A', 'mãe', 'abriu', 'a', 'janela', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    predicateIndices: [2, 3, 4],
    feedback: '"Abriu" é o verbo. "A mãe" é o sujeito. O predicado é "abriu a janela" — ação e o que foi aberto.',
    example: 'Encontre o verbo primeiro, depois o sujeito. O que sobra é o predicado.',
  },
  {
    type: 'tri-select',
    difficulty: 'Médio',
    text: 'Clique no <strong>VERBO</strong>, em <strong>TODAS</strong> as palavras do <strong>SUJEITO</strong> e em <strong>TODAS</strong> as palavras do <strong>PREDICADO</strong>:',
    sentence: ['O', 'sol', 'forte', 'brilhou', 'hoje', '.'],
    verbIndex: 3,
    subjectIndices: [0, 1, 2],
    predicateIndices: [3, 4],
    feedback: '"Brilhou" é o verbo. "O sol forte" é o sujeito — o adjetivo "forte" faz parte do sujeito! O predicado é "brilhou hoje".',
    example: '"Forte" qualifica o sujeito. "Hoje" é advérbio de tempo — parte do predicado.',
  },
  {
    type: 'tri-select',
    difficulty: 'Médio',
    text: 'Clique no <strong>VERBO</strong>, em <strong>TODAS</strong> as palavras do <strong>SUJEITO</strong> e em <strong>TODAS</strong> as palavras do <strong>PREDICADO</strong>:',
    sentence: ['O', 'vento', 'frio', 'soprou', 'forte', '.'],
    verbIndex: 3,
    subjectIndices: [0, 1, 2],
    predicateIndices: [3, 4],
    feedback: '"Soprou" é o verbo. "O vento frio" é o sujeito completo. O predicado é "soprou forte" — a ação e como foi.',
    example: '"Frio" é adjetivo do sujeito. "Forte" no final é advérbio (como soprou?) — parte do predicado.',
  },
  {
    type: 'tri-select',
    difficulty: 'Médio',
    text: 'Clique no <strong>VERBO</strong>, em <strong>TODAS</strong> as palavras do <strong>SUJEITO</strong> e em <strong>TODAS</strong> as palavras do <strong>PREDICADO</strong>:',
    sentence: ['O', 'pequeno', 'pássaro', 'voou', 'alto', '.'],
    verbIndex: 3,
    subjectIndices: [0, 1, 2],
    predicateIndices: [3, 4],
    feedback: '"Voou" é o verbo. "O pequeno pássaro" é o sujeito. O predicado é "voou alto" — a ação e como foi.',
    example: '"Pequeno" é adjetivo do sujeito. "Alto" é advérbio de modo — parte do predicado.',
  },
  {
    type: 'tri-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['A', 'menina', 'partiu', 'cedo', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    predicateIndices: [2, 3],
    feedback: '"Partiu" é o verbo. "A menina" é o sujeito. O predicado é "partiu cedo" — a ação e quando aconteceu.',
    example: '"Cedo" é advérbio de tempo — parte do predicado.',
  },
  {
    type: 'tri-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['O', 'pai', 'vendeu', 'o', 'carro', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    predicateIndices: [2, 3, 4],
    feedback: '"Vendeu" é o verbo. "O pai" é o sujeito. O predicado é "vendeu o carro" — a ação e o que foi vendido.',
    example: '"O carro" é o objeto da venda — faz parte do predicado.',
  },
  {
    type: 'tri-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['A', 'vovó', 'propôs', 'uma', 'brincadeira', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    predicateIndices: [2, 3, 4],
    feedback: '"Propôs" é o verbo. "A vovó" é o sujeito. O predicado é "propôs uma brincadeira" — a ação e o que foi proposto.',
    example: '"Uma brincadeira" é o que foi proposto (objeto direto) — parte do predicado.',
  },
  {
    type: 'tri-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['A', 'turma', 'aplaudiu', 'o', 'professor', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    predicateIndices: [2, 3, 4],
    feedback: '"Aplaudiu" é o verbo. "A turma" é o sujeito. O predicado é "aplaudiu o professor" — quem foi aplaudido faz parte do predicado.',
    example: '"O professor" é o objeto (quem recebeu o aplauso) — parte do predicado, não do sujeito.',
  },
  {
    type: 'tri-select',
    difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['A', 'Maria', 'escreveu', 'uma', 'carta', '.'],
    verbIndex: 2,
    subjectIndices: [0, 1],
    predicateIndices: [2, 3, 4],
    feedback: '"Escreveu" é o verbo. "A Maria" é o sujeito. O predicado é "escreveu uma carta" — a ação e o que foi escrito.',
    example: '"Uma carta" é o que foi escrito (objeto direto) — parte do predicado.',
  },
];

// ── QUESTÕES MÓDULO 4 ─────────────────────────────────────────
const questions4 = [
  // ── haver = existir ────────────────────────────────────────
  {
    type: 'tri-select', noSubject: true, difficulty: 'Fácil',
    text: 'Identifique o verbo e o predicado. Esta oração possui sujeito?',
    sentence: ['Há', 'muitos', 'livros', 'nesta', 'estante', '.'],
    verbIndex: 0, subjectIndices: [], predicateIndices: [0, 1, 2, 3, 4],
    feedback: 'O verbo "há" equivale a "existem". Verbos no sentido de existir são impessoais — a oração não possui sujeito.',
  },
  {
    type: 'tri-select', noSubject: true, difficulty: 'Fácil',
    text: 'Identifique o verbo e o predicado. Esta oração possui sujeito?',
    sentence: ['Havia', 'crianças', 'brincando', 'no', 'parque', '.'],
    verbIndex: 0, subjectIndices: [], predicateIndices: [0, 1, 2, 3, 4],
    feedback: 'O verbo "havia" equivale a "existiam". Nesse sentido, é impessoal e a oração não possui sujeito.',
  },
  // ── haver = ocorrer ────────────────────────────────────────
  {
    type: 'tri-select', noSubject: true, difficulty: 'Fácil',
    text: 'Identifique o verbo e o predicado. Esta oração possui sujeito?',
    sentence: ['Houve', 'uma', 'reunião', 'ontem', '.'],
    verbIndex: 0, subjectIndices: [], predicateIndices: [0, 1, 2, 3],
    feedback: 'O verbo "houve" significa "ocorreu". Nesse sentido de ocorrência, é impessoal — a oração não possui sujeito.',
  },
  {
    type: 'tri-select', noSubject: true, difficulty: 'Fácil',
    text: 'Identifique o verbo e o predicado. Esta oração possui sujeito?',
    sentence: ['Haverá', 'mudanças', 'na', 'empresa', '.'],
    verbIndex: 0, subjectIndices: [], predicateIndices: [0, 1, 2, 3],
    feedback: 'O verbo "haverá" equivale a "ocorrerão". Verbo impessoal — a oração não possui sujeito.',
  },
  // ── fazer/haver indicando tempo ────────────────────────────
  {
    type: 'tri-select', noSubject: true, difficulty: 'Médio',
    text: 'Identifique o verbo e o predicado. Esta oração possui sujeito?',
    sentence: ['Faz', 'três', 'dias', 'que', 'não', 'chove', '.'],
    verbIndex: 0, subjectIndices: [], predicateIndices: [0, 1, 2, 3, 4, 5],
    feedback: 'O verbo "faz" indica tempo decorrido. Nesse uso temporal, é impessoal — a oração não possui sujeito.',
  },
  {
    type: 'tri-select', noSubject: true, difficulty: 'Médio',
    text: 'Identifique o verbo e o predicado. Esta oração possui sujeito?',
    sentence: ['Faz', 'muito', 'tempo', 'que', 'não', 'viajamos', '.'],
    verbIndex: 0, subjectIndices: [], predicateIndices: [0, 1, 2, 3, 4, 5],
    feedback: 'O verbo "faz" indica tempo decorrido. Nesse uso, é impessoal — a oração não possui sujeito.',
  },
  {
    type: 'tri-select', noSubject: true, difficulty: 'Médio',
    text: 'Identifique o verbo e o predicado. Esta oração possui sujeito?',
    sentence: ['Há', 'dois', 'anos', 'que', 'moro', 'nesta', 'cidade', '.'],
    verbIndex: 0, subjectIndices: [], predicateIndices: [0, 1, 2, 3, 4, 5, 6],
    feedback: 'O verbo "há" indica tempo decorrido ("faz dois anos"). Nesse uso temporal, é impessoal — a oração não possui sujeito.',
  },
  // ── fenômenos da natureza ──────────────────────────────────
  {
    type: 'tri-select', noSubject: true, difficulty: 'Fácil',
    text: 'Identifique o verbo e o predicado. Esta oração possui sujeito?',
    sentence: ['Choveu', 'muito', 'esta', 'semana', '.'],
    verbIndex: 0, subjectIndices: [], predicateIndices: [0, 1, 2, 3],
    feedback: 'O verbo "choveu" indica fenômeno da natureza. Verbos de fenômenos naturais são impessoais — não possuem sujeito.',
  },
  {
    type: 'tri-select', noSubject: true, difficulty: 'Fácil',
    text: 'Identifique o verbo e o predicado. Esta oração possui sujeito?',
    sentence: ['Nevou', 'na', 'serra', 'durante', 'a', 'madrugada', '.'],
    verbIndex: 0, subjectIndices: [], predicateIndices: [0, 1, 2, 3, 4, 5],
    feedback: 'O verbo "nevou" indica fenômeno da natureza. É impessoal — a oração não possui sujeito.',
  },
  {
    type: 'tri-select', noSubject: true, difficulty: 'Fácil',
    text: 'Identifique o verbo e o predicado. Esta oração possui sujeito?',
    sentence: ['Trovejou', 'a', 'noite', 'toda', '.'],
    verbIndex: 0, subjectIndices: [], predicateIndices: [0, 1, 2, 3],
    feedback: 'O verbo "trovejou" indica fenômeno da natureza. É impessoal — a oração não possui sujeito.',
  },
  {
    type: 'tri-select', noSubject: true, difficulty: 'Fácil',
    text: 'Identifique o verbo e o predicado. Esta oração possui sujeito?',
    sentence: ['Amanheceu', 'muito', 'cedo', 'hoje', '.'],
    verbIndex: 0, subjectIndices: [], predicateIndices: [0, 1, 2, 3],
    feedback: 'O verbo "amanheceu" indica fenômeno da natureza. É impessoal — a oração não possui sujeito.',
  },
  // ── existir / ocorrer COM sujeito ──────────────────────────
  {
    type: 'tri-select', noSubject: false, difficulty: 'Médio',
    text: 'Identifique o verbo, o sujeito e o predicado. Esta oração possui sujeito?',
    sentence: ['Os', 'problemas', 'existem', 'em', 'todo', 'lugar', '.'],
    verbIndex: 2, subjectIndices: [0, 1], predicateIndices: [2, 3, 4, 5],
    feedback: '"Existem" tem sujeito: "Os problemas" — eles existem. Diferente do impessoal "há", o verbo "existir" admite sujeito.',
  },
  {
    type: 'tri-select', noSubject: false, difficulty: 'Médio',
    text: 'Identifique o verbo, o sujeito e o predicado. Esta oração possui sujeito?',
    sentence: ['O', 'acidente', 'ocorreu', 'na', 'rodovia', '.'],
    verbIndex: 2, subjectIndices: [0, 1], predicateIndices: [2, 3, 4],
    feedback: '"Ocorreu" tem sujeito: "O acidente" — ele ocorreu. Diferente do impessoal "houve", o verbo "ocorrer" admite sujeito.',
  },
  {
    type: 'tri-select', noSubject: false, difficulty: 'Médio',
    text: 'Identifique o verbo, o sujeito e o predicado. Esta oração possui sujeito?',
    sentence: ['A', 'neve', 'existe', 'em', 'regiões', 'muito', 'frias', '.'],
    verbIndex: 2, subjectIndices: [0, 1], predicateIndices: [2, 3, 4, 5, 6],
    feedback: '"Existe" tem sujeito: "A neve" — ela existe. Compare com "Há neve em regiões frias", onde "há" é impessoal.',
  },
  {
    type: 'tri-select', noSubject: false, difficulty: 'Médio',
    text: 'Identifique o verbo, o sujeito e o predicado. Esta oração possui sujeito?',
    sentence: ['Muitas', 'dificuldades', 'ocorrem', 'no', 'caminho', '.'],
    verbIndex: 2, subjectIndices: [0, 1], predicateIndices: [2, 3, 4],
    feedback: '"Ocorrem" tem sujeito: "Muitas dificuldades" — elas ocorrem. Compare com "Houve dificuldades", onde "houve" é impessoal.',
  },
  // ── fenômeno como sujeito explícito (contraste) ────────────
  {
    type: 'tri-select', noSubject: false, difficulty: 'Difícil',
    text: 'Identifique o verbo, o sujeito e o predicado. Esta oração possui sujeito?',
    sentence: ['A', 'chuva', 'caiu', 'de', 'manhã', '.'],
    verbIndex: 2, subjectIndices: [0, 1], predicateIndices: [2, 3, 4],
    feedback: 'Atenção: "A chuva" é o sujeito — ela caiu. Quando o fenômeno natural aparece como sujeito explícito, a oração tem sujeito.',
  },
  {
    type: 'tri-select', noSubject: false, difficulty: 'Difícil',
    text: 'Identifique o verbo, o sujeito e o predicado. Esta oração possui sujeito?',
    sentence: ['A', 'tempestade', 'causou', 'muitos', 'danos', '.'],
    verbIndex: 2, subjectIndices: [0, 1], predicateIndices: [2, 3, 4],
    feedback: '"A tempestade" é o sujeito — ela causou os danos. O fenômeno natural como sujeito explícito faz a oração ter sujeito.',
  },
  {
    type: 'tri-select', noSubject: false, difficulty: 'Difícil',
    text: 'Identifique o verbo, o sujeito e o predicado. Esta oração possui sujeito?',
    sentence: ['O', 'trovão', 'assustou', 'as', 'crianças', '.'],
    verbIndex: 2, subjectIndices: [0, 1], predicateIndices: [2, 3, 4],
    feedback: '"O trovão" é o sujeito — ele assustou. Compare com "Trovejou" (impessoal). O substantivo como sujeito muda a análise.',
  },
  // ── misturadas do módulo 3 ─────────────────────────────────
  {
    type: 'tri-select', noSubject: false, difficulty: 'Fácil',
    text: 'Identifique o verbo, o sujeito e o predicado. Esta oração possui sujeito?',
    sentence: ['O', 'gato', 'dormiu', 'na', 'cama', '.'],
    verbIndex: 2, subjectIndices: [0, 1], predicateIndices: [2, 3, 4],
    feedback: '"O gato" é o sujeito — ele dormiu. É uma oração comum com sujeito e predicado.',
  },
  {
    type: 'tri-select', noSubject: false, difficulty: 'Fácil',
    text: 'Identifique o verbo, o sujeito e o predicado. Esta oração possui sujeito?',
    sentence: ['A', 'Maria', 'cantou', 'no', 'coral', '.'],
    verbIndex: 2, subjectIndices: [0, 1], predicateIndices: [2, 3, 4],
    feedback: '"A Maria" é o sujeito — ela cantou. É uma oração com sujeito explícito.',
  },
  {
    type: 'tri-select', noSubject: false, difficulty: 'Médio',
    text: 'Identifique o verbo, o sujeito e o predicado. Esta oração possui sujeito?',
    sentence: ['O', 'vento', 'forte', 'derrubou', 'as', 'árvores', '.'],
    verbIndex: 3, subjectIndices: [0, 1, 2], predicateIndices: [3, 4, 5],
    feedback: '"O vento forte" é o sujeito — ele derrubou as árvores. Compare com "Ventou" (impessoal): aqui o fenômeno é sujeito explícito.',
  },
];

// ── QUESTÕES MÓDULO 5 ─────────────────────────────────────────
const questions5 = [
  {
    type: 'tri-select', difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['Chegou', 'o', 'ônibus', '.'],
    verbIndex: 0, subjectIndices: [1, 2], predicateIndices: [0],
    feedback: '"Chegou" é o verbo. Quem chegou? "O ônibus" — esse é o sujeito. Note a ordem inversa: verbo antes do sujeito.',
    example: 'Dica: faça a pergunta "Quem + verbo?" para encontrar o sujeito.',
  },
  {
    type: 'tri-select', difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['Correu', 'o', 'menino', '.'],
    verbIndex: 0, subjectIndices: [1, 2], predicateIndices: [0],
    feedback: '"Correu" é o verbo. Quem correu? "O menino" — esse é o sujeito. O predicado é apenas "correu".',
    example: 'Na ordem inversa, o sujeito aparece depois do verbo.',
  },
  {
    type: 'tri-select', difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['Dormiu', 'muito', 'o', 'gato', '.'],
    verbIndex: 0, subjectIndices: [2, 3], predicateIndices: [0, 1],
    feedback: '"Dormiu" é o verbo. Quem dormiu? "O gato" — esse é o sujeito. O predicado é "dormiu muito" — verbo + complemento antes do sujeito.',
    example: '"Muito" é adjunto adverbial de intensidade — faz parte do predicado.',
  },
  {
    type: 'tri-select', difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['Saíram', 'cedo', 'os', 'alunos', '.'],
    verbIndex: 0, subjectIndices: [2, 3], predicateIndices: [0, 1],
    feedback: '"Saíram" é o verbo. Quem saiu? "Os alunos" — esse é o sujeito. O predicado é "saíram cedo".',
    example: '"Cedo" indica tempo — é adjunto adverbial e faz parte do predicado.',
  },
  {
    type: 'tri-select', difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['Chegou', 'tarde', 'o', 'professor', '.'],
    verbIndex: 0, subjectIndices: [2, 3], predicateIndices: [0, 1],
    feedback: '"Chegou" é o verbo. Quem chegou? "O professor" — esse é o sujeito. O predicado é "chegou tarde".',
    example: 'Perceba que "tarde" qualifica a chegada — é parte do predicado.',
  },
  {
    type: 'tri-select', difficulty: 'Fácil',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['Correu', 'rápido', 'o', 'ciclista', '.'],
    verbIndex: 0, subjectIndices: [2, 3], predicateIndices: [0, 1],
    feedback: '"Correu" é o verbo. Quem correu? "O ciclista" — esse é o sujeito. O predicado é "correu rápido".',
    example: '"Rápido" qualifica a corrida — é adjunto adverbial de modo no predicado.',
  },
  {
    type: 'tri-select', difficulty: 'Médio',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['Ontem', ',', 'dormiu', 'o', 'gato', '.'],
    verbIndex: 2, subjectIndices: [3, 4], predicateIndices: [0, 2],
    feedback: '"Dormiu" é o verbo. Quem dormiu? "O gato" — esse é o sujeito. O predicado é "Ontem dormiu" — o adjunto temporal faz parte do predicado mesmo separado.',
    example: 'O predicado pode ser separado pelo sujeito. "Ontem" + "dormiu" formam o predicado.',
  },
  {
    type: 'tri-select', difficulty: 'Médio',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['Na', 'festa', ',', 'chegaram', 'os', 'convidados', '.'],
    verbIndex: 3, subjectIndices: [4, 5], predicateIndices: [0, 1, 3],
    feedback: '"Chegaram" é o verbo. Quem chegou? "Os convidados" — esse é o sujeito. O predicado é "Na festa chegaram".',
    example: '"Na festa" é o adjunto adverbial de lugar — integra o predicado.',
  },
  {
    type: 'tri-select', difficulty: 'Médio',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['Ao', 'longe', ',', 'cantavam', 'os', 'pássaros', '.'],
    verbIndex: 3, subjectIndices: [4, 5], predicateIndices: [0, 1, 3],
    feedback: '"Cantavam" é o verbo. Quem cantava? "Os pássaros" — esse é o sujeito. O predicado é "Ao longe cantavam".',
    example: '"Ao longe" indica lugar — é adjunto adverbial no predicado.',
  },
  {
    type: 'tri-select', difficulty: 'Médio',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['De', 'manhã', ',', 'saiu', 'a', 'professora', '.'],
    verbIndex: 3, subjectIndices: [4, 5], predicateIndices: [0, 1, 3],
    feedback: '"Saiu" é o verbo. Quem saiu? "A professora" — esse é o sujeito. O predicado é "De manhã saiu".',
    example: '"De manhã" é adjunto adverbial de tempo — faz parte do predicado.',
  },
  {
    type: 'tri-select', difficulty: 'Médio',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['No', 'jardim', ',', 'brincavam', 'as', 'crianças', '.'],
    verbIndex: 3, subjectIndices: [4, 5], predicateIndices: [0, 1, 3],
    feedback: '"Brincavam" é o verbo. Quem brincava? "As crianças" — esse é o sujeito. O predicado é "No jardim brincavam".',
    example: '"No jardim" indica o lugar onde a ação acontece — faz parte do predicado.',
  },
  {
    type: 'tri-select', difficulty: 'Médio',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['Nesta', 'cidade', ',', 'vivem', 'muitas', 'pessoas', '.'],
    verbIndex: 3, subjectIndices: [4, 5], predicateIndices: [0, 1, 3],
    feedback: '"Vivem" é o verbo. Quem vive? "Muitas pessoas" — esse é o sujeito. O predicado é "Nesta cidade vivem".',
    example: '"Muitas pessoas" é o sujeito — responde à pergunta "Quem vive nesta cidade?"',
  },
  {
    type: 'tri-select', difficulty: 'Difícil',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['Com', 'grande', 'esforço', ',', 'venceu', 'o', 'time', '.'],
    verbIndex: 4, subjectIndices: [5, 6], predicateIndices: [0, 1, 2, 4],
    feedback: '"Venceu" é o verbo. Quem venceu? "O time" — esse é o sujeito. O predicado é "Com grande esforço venceu".',
    example: '"Com grande esforço" é adjunto adverbial de modo — faz parte do predicado.',
  },
  {
    type: 'tri-select', difficulty: 'Difícil',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['No', 'início', 'do', 'ano', ',', 'chegou', 'a', 'carta', '.'],
    verbIndex: 5, subjectIndices: [6, 7], predicateIndices: [0, 1, 2, 3, 5],
    feedback: '"Chegou" é o verbo. Quem chegou? "A carta" — esse é o sujeito. O predicado é "No início do ano chegou".',
    example: '"No início do ano" é um adjunto adverbial de tempo — integra o predicado.',
  },
  {
    type: 'tri-select', difficulty: 'Difícil',
    text: 'Clique no <strong>VERBO</strong>, no <strong>SUJEITO</strong> e em todas as palavras do <strong>PREDICADO</strong>:',
    sentence: ['Sob', 'o', 'sol', 'forte', ',', 'trabalhavam', 'os', 'operários', '.'],
    verbIndex: 5, subjectIndices: [6, 7], predicateIndices: [0, 1, 2, 3, 5],
    feedback: '"Trabalhavam" é o verbo. Quem trabalhava? "Os operários" — esse é o sujeito. O predicado é "Sob o sol forte trabalhavam".',
    example: '"Sob o sol forte" descreve a condição da ação — é parte do predicado.',
  },
];

// ── MÓDULO 6: QUESTÕES ───────────────────────────────────────
const questions6 = [
  // ── FÁCIL ──
  {
    type: 'locucao-select', difficulty: 'Fácil',
    text: 'Identifique a locução verbal desta oração:',
    sentence: ['Minha', 'mãe', 'estava', 'dormindo', 'na', 'varanda', '.'],
    locuIndices: [2, 3], auxVerb: 'estava', mainVerb: 'dormindo', verbType: 'gerúndio',
    feedback: '"Estava" é o auxiliar que indica o tempo e "dormindo" é o principal no gerúndio, indicando uma ação em andamento.',
  },
  {
    type: 'locucao-select', difficulty: 'Fácil',
    text: 'Identifique a locução verbal desta oração:',
    sentence: ['Ela', 'vai', 'viajar', 'nas', 'férias', '.'],
    locuIndices: [1, 2], auxVerb: 'vai', mainVerb: 'viajar', verbType: 'infinitivo',
    feedback: '"Vai" é o auxiliar que indica futuro próximo e "viajar" é o principal no infinitivo.',
  },
  {
    type: 'locucao-select', difficulty: 'Fácil',
    text: 'Identifique a locução verbal desta oração:',
    sentence: ['Os', 'alunos', 'estão', 'estudando', 'para', 'a', 'prova', '.'],
    locuIndices: [2, 3], auxVerb: 'estão', mainVerb: 'estudando', verbType: 'gerúndio',
    feedback: '"Estão" é o auxiliar e "estudando" é o verbo principal no gerúndio, indicando ação em andamento.',
  },
  {
    type: 'locucao-select', difficulty: 'Fácil',
    text: 'Identifique a locução verbal desta oração:',
    sentence: ['O', 'menino', 'tinha', 'comido', 'todo', 'o', 'lanche', '.'],
    locuIndices: [2, 3], auxVerb: 'tinha', mainVerb: 'comido', verbType: 'particípio',
    feedback: '"Tinha" é o auxiliar e "comido" é o verbo principal no particípio, indicando ação concluída antes de outra.',
  },
  {
    type: 'locucao-select', difficulty: 'Fácil',
    text: 'Identifique a locução verbal desta oração:',
    sentence: ['O', 'professor', 'pode', 'explicar', 'a', 'matéria', '.'],
    locuIndices: [2, 3], auxVerb: 'pode', mainVerb: 'explicar', verbType: 'infinitivo',
    feedback: '"Pode" é o auxiliar de modalidade e "explicar" é o verbo principal no infinitivo.',
  },
  {
    type: 'locucao-select', difficulty: 'Fácil',
    text: 'Identifique a locução verbal desta oração:',
    sentence: ['Nós', 'devemos', 'respeitar', 'as', 'regras', '.'],
    locuIndices: [1, 2], auxVerb: 'devemos', mainVerb: 'respeitar', verbType: 'infinitivo',
    feedback: '"Devemos" é o auxiliar de modalidade e "respeitar" é o verbo principal no infinitivo.',
  },
  // ── MÉDIO ──
  {
    type: 'locucao-select', difficulty: 'Médio',
    text: 'Identifique a locução verbal desta oração:',
    sentence: ['A', 'criança', 'estava', 'chorando', 'muito', '.'],
    locuIndices: [2, 3], auxVerb: 'estava', mainVerb: 'chorando', verbType: 'gerúndio',
    feedback: '"Estava" é o auxiliar e "chorando" é o verbo principal no gerúndio.',
  },
  {
    type: 'locucao-select', difficulty: 'Médio',
    text: 'Identifique a locução verbal desta oração:',
    sentence: ['O', 'trabalho', 'foi', 'entregue', 'no', 'prazo', '.'],
    locuIndices: [2, 3], auxVerb: 'foi', mainVerb: 'entregue', verbType: 'particípio',
    feedback: '"Foi" é o auxiliar de voz passiva e "entregue" é o verbo principal no particípio.',
  },
  {
    type: 'locucao-select', difficulty: 'Médio',
    text: 'Identifique a locução verbal desta oração:',
    sentence: ['João', 'tem', 'estudado', 'todos', 'os', 'dias', '.'],
    locuIndices: [1, 2], auxVerb: 'tem', mainVerb: 'estudado', verbType: 'particípio',
    feedback: '"Tem" é o auxiliar e "estudado" é o principal no particípio, indicando ação repetida até o presente.',
  },
  {
    type: 'locucao-select', difficulty: 'Médio',
    text: 'Identifique a locução verbal desta oração:',
    sentence: ['Os', 'jogadores', 'estão', 'treinando', 'bastante', '.'],
    locuIndices: [2, 3], auxVerb: 'estão', mainVerb: 'treinando', verbType: 'gerúndio',
    feedback: '"Estão" é o auxiliar e "treinando" é o verbo principal no gerúndio.',
  },
  {
    type: 'locucao-select', difficulty: 'Médio',
    text: 'Identifique a locução verbal desta oração:',
    sentence: ['Pedro', 'pode', 'vir', 'à', 'festa', '.'],
    locuIndices: [1, 2], auxVerb: 'pode', mainVerb: 'vir', verbType: 'infinitivo',
    feedback: '"Pode" é o auxiliar de modalidade e "vir" é o verbo principal no infinitivo.',
  },
  // ── DIFÍCIL ──
  {
    type: 'locucao-select', difficulty: 'Difícil',
    text: 'Identifique a locução verbal desta oração:',
    sentence: ['As', 'flores', 'vão', 'ser', 'regadas', 'amanhã', '.'],
    locuIndices: [2, 3, 4], auxVerb: 'vão ser', mainVerb: 'regadas', verbType: 'particípio',
    feedback: 'Locução de três verbos: "vão" e "ser" são auxiliares e "regadas" é o principal no particípio (voz passiva analítica com futuro).',
  },
  {
    type: 'locucao-select', difficulty: 'Difícil',
    text: 'Identifique a locução verbal desta oração:',
    sentence: ['Ela', 'deve', 'ter', 'chegado', 'cedo', '.'],
    locuIndices: [1, 2, 3], auxVerb: 'deve ter', mainVerb: 'chegado', verbType: 'particípio',
    feedback: 'Locução de três verbos: "deve" e "ter" são auxiliares e "chegado" é o principal no particípio.',
  },
  {
    type: 'locucao-select', difficulty: 'Difícil',
    text: 'Identifique a locução verbal desta oração:',
    sentence: ['O', 'relatório', 'tinha', 'sido', 'enviado', 'antes', '.'],
    locuIndices: [2, 3, 4], auxVerb: 'tinha sido', mainVerb: 'enviado', verbType: 'particípio',
    feedback: 'Locução de três verbos: "tinha" e "sido" são auxiliares e "enviado" é o principal no particípio (voz passiva no passado).',
  },
  {
    type: 'locucao-select', difficulty: 'Difícil',
    text: 'Identifique a locução verbal desta oração:',
    sentence: ['Maria', 'vai', 'continuar', 'estudando', 'amanhã', '.'],
    locuIndices: [1, 2, 3], auxVerb: 'vai continuar', mainVerb: 'estudando', verbType: 'gerúndio',
    feedback: 'Locução de três verbos: "vai" e "continuar" são auxiliares e "estudando" é o principal no gerúndio.',
  },
  // ── SENSE-SELECT: identificar o sentido da locução ──
  {
    type: 'sense-select', difficulty: 'Fácil',
    text: 'Qual é o sentido da locução verbal em destaque?',
    sentence: ['Ela', 'estava', 'dormindo', 'no', 'sofá', '.'],
    locuIndices: [1, 2], correctSense: 'andamento',
    feedback: '"estava dormindo" — estar + gerúndio: a ação estava em curso no momento descrito.',
  },
  {
    type: 'sense-select', difficulty: 'Fácil',
    text: 'Qual é o sentido da locução verbal em destaque?',
    sentence: ['O', 'aluno', 'vai', 'estudar', 'amanhã', '.'],
    locuIndices: [2, 3], correctSense: 'futura',
    feedback: '"vai estudar" — ir + infinitivo: a ação ainda não aconteceu, está projetada para o futuro.',
  },
  {
    type: 'sense-select', difficulty: 'Fácil',
    text: 'Qual é o sentido da locução verbal em destaque?',
    sentence: ['Maria', 'tinha', 'comido', 'antes', 'de', 'sair', '.'],
    locuIndices: [1, 2], correctSense: 'concluida',
    feedback: '"tinha comido" — ter + particípio: a ação já havia sido concluída antes de outra ação passada.',
  },
  {
    type: 'sense-select', difficulty: 'Fácil',
    text: 'Qual é o sentido da locução verbal em destaque?',
    sentence: ['Pedro', 'está', 'correndo', 'na', 'praça', '.'],
    locuIndices: [1, 2], correctSense: 'andamento',
    feedback: '"está correndo" — estar + gerúndio: a ação acontece no momento presente, em curso.',
  },
  {
    type: 'sense-select', difficulty: 'Médio',
    text: 'Qual é o sentido da locução verbal em destaque?',
    sentence: ['Nós', 'vamos', 'viajar', 'nas', 'férias', '.'],
    locuIndices: [1, 2], correctSense: 'futura',
    feedback: '"vamos viajar" — ir + infinitivo: a ação está planejada para acontecer depois do momento da fala.',
  },
  {
    type: 'sense-select', difficulty: 'Médio',
    text: 'Qual é o sentido da locução verbal em destaque?',
    sentence: ['O', 'professor', 'havia', 'explicado', 'o', 'conteúdo', '.'],
    locuIndices: [2, 3], correctSense: 'concluida',
    feedback: '"havia explicado" — haver + particípio: a ação já estava concluída antes de um momento de referência no passado.',
  },
  {
    type: 'sense-select', difficulty: 'Médio',
    text: 'Qual é o sentido da locução verbal em destaque?',
    sentence: ['As', 'crianças', 'ficaram', 'brincando', 'no', 'parque', '.'],
    locuIndices: [2, 3], correctSense: 'andamento',
    feedback: '"ficaram brincando" — ficar + gerúndio: a ação se manteve em andamento por um período.',
  },
  {
    type: 'sense-select', difficulty: 'Difícil',
    text: 'Qual é o sentido da locução verbal em destaque?',
    sentence: ['O', 'time', 'pode', 'ganhar', 'a', 'partida', '.'],
    locuIndices: [2, 3], correctSense: 'futura',
    feedback: '"pode ganhar" — poder + infinitivo: a ação é apresentada como possibilidade futura, ainda não realizada.',
  },
  {
    type: 'sense-select', difficulty: 'Difícil',
    text: 'Qual é o sentido da locução verbal em destaque?',
    sentence: ['Ontem', ',', 'a', 'turma', 'tinha', 'terminado', 'a', 'prova', '.'],
    locuIndices: [4, 5], correctSense: 'concluida',
    feedback: '"tinha terminado" — ter + particípio: a ação foi concluída antes de outro evento passado (daí o "ontem").',
  },
  {
    type: 'sense-select', difficulty: 'Difícil',
    text: 'Qual é o sentido da locução verbal em destaque?',
    sentence: ['Os', 'alunos', 'continuaram', 'estudando', 'durante', 'a', 'tarde', '.'],
    locuIndices: [2, 3], correctSense: 'andamento',
    feedback: '"continuaram estudando" — continuar + gerúndio: a ação persistiu em andamento ao longo do tempo.',
  },
];

// ── QUESTÕES — MÓDULO 7: SUJEITO COMPOSTO ─────────────────────
const questions7 = [
  // ── FÁCIL ──────────────────────────────────────────────────
  {
    type: 'nucleo-select', difficulty: 'Fácil',
    text: 'Identifique o VERBO, o SUJEITO e o NÚCLEO do sujeito:',
    sentence: ['A', 'professora', 'explicou', 'a', 'matéria', '.'],
    verbIndex: 2, subjectIndices: [0, 1], nucleoIndex: 1,
    feedback: 'Verbo: "explicou". Sujeito: "a professora". Núcleo: "professora" — o artigo "a" apenas acompanha o núcleo.',
    example: '',
  },
  {
    type: 'nucleo-select', difficulty: 'Fácil',
    text: 'Identifique o VERBO, o SUJEITO e o NÚCLEO do sujeito:',
    sentence: ['O', 'menino', 'correu', 'na', 'praça', '.'],
    verbIndex: 2, subjectIndices: [0, 1], nucleoIndex: 1,
    feedback: 'Verbo: "correu". Sujeito: "o menino". Núcleo: "menino" — "o" é o artigo que acompanha o núcleo.',
    example: '',
  },
  {
    type: 'nucleo-select', difficulty: 'Fácil',
    text: 'Identifique o VERBO, o SUJEITO e o NÚCLEO do sujeito:',
    sentence: ['Ela', 'chegou', 'cedo', '.'],
    verbIndex: 1, subjectIndices: [0], nucleoIndex: 0,
    feedback: 'Verbo: "chegou". Sujeito: "ela". Núcleo: "ela" — quando o sujeito é um pronome, ele mesmo é o núcleo.',
    example: '',
  },
  {
    type: 'nucleo-select', difficulty: 'Fácil',
    text: 'Identifique o VERBO, o SUJEITO e o NÚCLEO do sujeito:',
    sentence: ['O', 'cachorro', 'latiu', 'muito', '.'],
    verbIndex: 2, subjectIndices: [0, 1], nucleoIndex: 1,
    feedback: 'Verbo: "latiu". Sujeito: "o cachorro". Núcleo: "cachorro" — "o" é artigo que acompanha o núcleo.',
    example: '',
  },
  {
    type: 'nucleo-select', difficulty: 'Fácil',
    text: 'Identifique o VERBO, o SUJEITO e o NÚCLEO do sujeito:',
    sentence: ['A', 'chuva', 'caiu', 'forte', '.'],
    verbIndex: 2, subjectIndices: [0, 1], nucleoIndex: 1,
    feedback: 'Verbo: "caiu". Sujeito: "a chuva". Núcleo: "chuva" — "a" é o artigo definido que acompanha o núcleo.',
    example: '',
  },
  // ── MÉDIO ──────────────────────────────────────────────────
  {
    type: 'nucleo-select', difficulty: 'Médio',
    text: 'Identifique o VERBO, o SUJEITO e o NÚCLEO do sujeito:',
    sentence: ['Os', 'alunos', 'atentos', 'chegaram', 'cedo', '.'],
    verbIndex: 3, subjectIndices: [0, 1, 2], nucleoIndex: 1,
    feedback: 'Verbo: "chegaram". Sujeito: "os alunos atentos". Núcleo: "alunos" — "os" é artigo e "atentos" é adjetivo que caracteriza o núcleo.',
    example: '',
  },
  {
    type: 'nucleo-select', difficulty: 'Médio',
    text: 'Identifique o VERBO, o SUJEITO e o NÚCLEO do sujeito:',
    sentence: ['Um', 'pássaro', 'pequeno', 'voou', 'alto', '.'],
    verbIndex: 3, subjectIndices: [0, 1, 2], nucleoIndex: 1,
    feedback: 'Verbo: "voou". Sujeito: "um pássaro pequeno". Núcleo: "pássaro" — "um" é artigo indefinido e "pequeno" é adjetivo.',
    example: '',
  },
  {
    type: 'nucleo-select', difficulty: 'Médio',
    text: 'Identifique o VERBO, o SUJEITO e o NÚCLEO do sujeito:',
    sentence: ['A', 'menina', 'bonita', 'sorriu', 'para', 'todos', '.'],
    verbIndex: 3, subjectIndices: [0, 1, 2], nucleoIndex: 1,
    feedback: 'Verbo: "sorriu". Sujeito: "a menina bonita". Núcleo: "menina" — "a" é artigo e "bonita" é adjetivo que a caracteriza.',
    example: '',
  },
  {
    type: 'nucleo-select', difficulty: 'Médio',
    text: 'Identifique o VERBO, o SUJEITO e o NÚCLEO do sujeito:',
    sentence: ['O', 'velho', 'professor', 'explicou', 'a', 'teoria', '.'],
    verbIndex: 3, subjectIndices: [0, 1, 2], nucleoIndex: 2,
    feedback: 'Verbo: "explicou". Sujeito: "o velho professor". Núcleo: "professor" — "o" é artigo e "velho" é adjetivo anteposto ao núcleo.',
    example: '',
  },
  {
    type: 'nucleo-select', difficulty: 'Médio',
    text: 'Identifique o VERBO, o SUJEITO e o NÚCLEO do sujeito:',
    sentence: ['Aquele', 'jovem', 'estudou', 'muito', '.'],
    verbIndex: 2, subjectIndices: [0, 1], nucleoIndex: 1,
    feedback: 'Verbo: "estudou". Sujeito: "aquele jovem". Núcleo: "jovem" — "aquele" é pronome demonstrativo que determina o núcleo.',
    example: '',
  },
  // ── DIFÍCIL ────────────────────────────────────────────────
  {
    type: 'nucleo-select', difficulty: 'Difícil',
    text: 'Identifique o VERBO, o SUJEITO e o NÚCLEO do sujeito:',
    sentence: ['A', 'menina', 'bonita', 'da', 'turma', 'sorriu', '.'],
    verbIndex: 5, subjectIndices: [0, 1, 2, 3, 4], nucleoIndex: 1,
    feedback: 'Verbo: "sorriu". Sujeito: "a menina bonita da turma". Núcleo: "menina" — retire "a" (artigo), "bonita" (adjetivo) e "da turma" (especificação): resta "menina".',
    example: '',
  },
  {
    type: 'nucleo-select', difficulty: 'Difícil',
    text: 'Identifique o VERBO, o SUJEITO e o NÚCLEO do sujeito:',
    sentence: ['Os', 'alunos', 'da', 'escola', 'pública', 'chegaram', '.'],
    verbIndex: 5, subjectIndices: [0, 1, 2, 3, 4], nucleoIndex: 1,
    feedback: 'Verbo: "chegaram". Sujeito: "os alunos da escola pública". Núcleo: "alunos" — "os" é artigo e "da escola pública" especifica quais alunos.',
    example: '',
  },
  {
    type: 'nucleo-select', difficulty: 'Difícil',
    text: 'Identifique o VERBO, o SUJEITO e o NÚCLEO do sujeito:',
    sentence: ['O', 'cachorro', 'do', 'vizinho', 'latiu', 'muito', '.'],
    verbIndex: 4, subjectIndices: [0, 1, 2, 3], nucleoIndex: 1,
    feedback: 'Verbo: "latiu". Sujeito: "o cachorro do vizinho". Núcleo: "cachorro" — "o" é artigo e "do vizinho" especifica de quem é o cachorro.',
    example: '',
  },
  {
    type: 'nucleo-select', difficulty: 'Difícil',
    text: 'Identifique o VERBO, o SUJEITO e o NÚCLEO do sujeito:',
    sentence: ['A', 'professora', 'de', 'português', 'explicou', 'o', 'conteúdo', '.'],
    verbIndex: 4, subjectIndices: [0, 1, 2, 3], nucleoIndex: 1,
    feedback: 'Verbo: "explicou". Sujeito: "a professora de português". Núcleo: "professora" — "a" é artigo e "de português" especifica a área da professora.',
    example: '',
  },
  {
    type: 'nucleo-select', difficulty: 'Difícil',
    text: 'Identifique o VERBO, o SUJEITO e o NÚCLEO do sujeito:',
    sentence: ['Um', 'jovem', 'estudante', 'de', 'medicina', 'chegou', 'ao', 'hospital', '.'],
    verbIndex: 5, subjectIndices: [0, 1, 2, 3, 4], nucleoIndex: 2,
    feedback: 'Verbo: "chegou". Sujeito: "um jovem estudante de medicina". Núcleo: "estudante" — "um" é artigo, "jovem" é adjetivo e "de medicina" especifica a área.',
    example: '',
  },
];

// ── ESTADO ───────────────────────────────────────────────────
// phase: 'objective' | 'intro' | 'quiz' | 'results'
// activeSet: índices das questões da rodada atual
// results: array indexado pelo índice original da questão
const state = {
  phase:         'objective',
  current:       0,
  activeSet:     questions.map((_, i) => i),
  results:       new Array(questions.length).fill(null),
  points:        0,
  dirHandle:     null,
  folderName:    null,
  allowReload:   false,
  errorNotebook: {},
  activityLog:   [],
  m2phase:         'none',
  m2current:       0,
  m2activeSet:     questions2.map((_, i) => i),
  m2results:       new Array(questions2.length).fill(null),
  m2points:        0,
  m2errorNotebook: {},
  m2pending:       { mode: 'verb', verbIdx: null, subjectIdxs: [] },
  m2unlocked:      false,
  m3phase:         'none',
  m3current:       0,
  m3activeSet:     questions3.map((_, i) => i),
  m3results:       new Array(questions3.length).fill(null),
  m3points:        0,
  m3errorNotebook: {},
  m3pending:       { mode: 'verb', verbIdx: null, subjectIdxs: [], predicateIdxs: [], predicateConfirmed: false },
  m3unlocked:      false,
  m4unlocked:      false,
  m5unlocked:      false,
  m4phase:         'none',
  m4current:       0,
  m4activeSet:     questions4.map((_, i) => i),
  m4results:       new Array(questions4.length).fill(null),
  m4points:        0,
  m4errorNotebook: {},
  m4pending:       { mode: 'verb', verbIdx: null, subjectIdxs: [], predicateIdxs: [], noSubject: false, predicateConfirmed: false },
  m5phase:         'none',
  m5current:       0,
  m5activeSet:     questions5.map((_, i) => i),
  m5results:       new Array(questions5.length).fill(null),
  m5points:        0,
  m5errorNotebook: {},
  m5pending:       { mode: 'verb', verbIdx: null, subjectIdxs: [], predicateIdxs: [], predicateConfirmed: false },
  m6phase:         'none',
  m6current:       0,
  m6activeSet:     questions6.map((_, i) => i),
  m6results:       new Array(questions6.length).fill(null),
  m6points:        0,
  m6pending:       { locuIndices: [] },
  m6errorNotebook: {},
  m6unlocked:      false,
  m7phase:         'none',
  m7current:       0,
  m7activeSet:     questions7.map((_, i) => i),
  m7results:       new Array(questions7.length).fill(null),
  m7points:        0,
  m7pending:       { mode: 'verb', verbIdx: null, subjectIdxs: [], nucleoIdx: null },
  m7errorNotebook: {},
  m7unlocked:      false,
  simUnlocked:     false,
  simPhase:        'none',
  simQueue:        [],
  simAnswered:     {},
  simCurrent:      0,
  sim2Unlocked:    false,
  sim2Phase:       'none',
  sim2Queue:       [],
  sim2Answered:    {},
  sim2Current:     0,
  previousPhase:   null,
  cadernoQueue:    [],
  cadernoCurrent:  0,
  cadernoAnswered: {},
  cadernoPending:  { mode: 'verb', verbIdx: null, subjectIdxs: [], predicateIdxs: [], noSubject: false, predicateConfirmed: false, nucleoIdx: null },
  cadernoM6Pending: { locuIndices: [] },
};

// ── SEQUÊNCIA (streak) ───────────────────────────────────────
function localDateStr(isoStr) {
  const d = new Date(isoStr);
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function computeStreak(log) {
  if (!log || log.length === 0) return 0;
  const days = [...new Set(log.map(localDateStr))].sort().reverse();
  const today = localDateStr(new Date().toISOString());
  const yesterday = localDateStr(new Date(Date.now() - 864e5).toISOString());
  if (days[0] !== today && days[0] !== yesterday) return 0;
  let streak = 1;
  for (let i = 1; i < days.length; i++) {
    const prev = new Date(days[i - 1]);
    const curr = new Date(days[i]);
    const diff = Math.round((prev - curr) / 864e5);
    if (diff === 1) streak++;
    else break;
  }
  return streak;
}
function recordActivity() {
  state.activityLog.push(new Date().toISOString());
  updateStreak();
}
function updateStreak() {
  const el = $('statSequencia');
  if (!el) return;
  const n = computeStreak(state.activityLog);
  el.textContent = n === 1 ? '1 dia' : `${n} dias`;
}

// ── INDEXEDDB (persiste o handle da pasta entre sessões) ─────
const IDB_NAME  = 'exercitar-portugues';
const IDB_STORE = 'config';

function openIDB() {
  return new Promise((res, rej) => {
    const req = indexedDB.open(IDB_NAME, 1);
    req.onupgradeneeded = e => e.target.result.createObjectStore(IDB_STORE);
    req.onsuccess = e => res(e.target.result);
    req.onerror   = e => rej(e.target.error);
  });
}
async function idbGet(key) {
  const db = await openIDB();
  return new Promise((res, rej) => {
    const req = db.transaction(IDB_STORE, 'readonly').objectStore(IDB_STORE).get(key);
    req.onsuccess = () => res(req.result);
    req.onerror   = e => rej(e.target.error);
  });
}
async function idbSet(key, value) {
  const db = await openIDB();
  return new Promise((res, rej) => {
    const req = db.transaction(IDB_STORE, 'readwrite').objectStore(IDB_STORE).put(value, key);
    req.onsuccess = () => res();
    req.onerror   = e => rej(e.target.error);
  });
}
async function idbDelete(key) {
  const db = await openIDB();
  return new Promise((res, rej) => {
    const req = db.transaction(IDB_STORE, 'readwrite').objectStore(IDB_STORE).delete(key);
    req.onsuccess = () => res();
    req.onerror   = e => rej(e.target.error);
  });
}

// ── SALVAR / CARREGAR PROGRESSO ──────────────────────────────
async function saveProgress() {
  if (!state.dirHandle) return;
  try {
    const data = {
      phase:           state.phase,
      current:         state.current,
      activeSet:       state.activeSet,
      results:         state.results,
      points:          state.points,
      errorNotebook:   state.errorNotebook,
      activityLog:     state.activityLog,
      m2phase:         state.m2phase,
      m2current:       state.m2current,
      m2activeSet:     state.m2activeSet,
      m2results:       state.m2results,
      m2points:        state.m2points,
      m2errorNotebook: state.m2errorNotebook,
      m2unlocked:      state.m2unlocked,
      m3phase:         state.m3phase,
      m3current:       state.m3current,
      m3activeSet:     state.m3activeSet,
      m3results:       state.m3results,
      m3points:        state.m3points,
      m3errorNotebook: state.m3errorNotebook,
      m3unlocked:      state.m3unlocked,
      m4unlocked:      state.m4unlocked,
      m5unlocked:      state.m5unlocked,
      m4phase:         state.m4phase,
      m4current:       state.m4current,
      m4activeSet:     state.m4activeSet,
      m4results:       state.m4results,
      m4points:        state.m4points,
      m4errorNotebook: state.m4errorNotebook,
      m5phase:         state.m5phase,
      m5current:       state.m5current,
      m5activeSet:     state.m5activeSet,
      m5results:       state.m5results,
      m5points:        state.m5points,
      m5errorNotebook: state.m5errorNotebook,
      m6unlocked:      state.m6unlocked,
      m6phase:         state.m6phase,
      m6current:       state.m6current,
      m6activeSet:     state.m6activeSet,
      m6results:       state.m6results,
      m6points:        state.m6points,
      m6errorNotebook: state.m6errorNotebook,
      m7unlocked:      state.m7unlocked,
      m7phase:         state.m7phase,
      m7current:       state.m7current,
      m7activeSet:     state.m7activeSet,
      m7results:       state.m7results,
      m7points:        state.m7points,
      m7errorNotebook: state.m7errorNotebook,
      simUnlocked:     state.simUnlocked,
      simPhase:        state.simPhase,
      simQueue:        state.simQueue,
      simAnswered:     state.simAnswered,
      simCurrent:      state.simCurrent,
      sim2Unlocked:    state.sim2Unlocked,
      sim2Phase:       state.sim2Phase,
      sim2Queue:       state.sim2Queue,
      sim2Answered:    state.sim2Answered,
      sim2Current:     state.sim2Current,
      savedAt:         new Date().toISOString(),
    };
    const fh = await state.dirHandle.getFileHandle('progresso.json', { create: true });
    const wr = await fh.createWritable();
    await wr.write(JSON.stringify(data, null, 2));
    await wr.close();
  } catch (e) { console.warn('Erro ao salvar progresso:', e); }
}
async function loadProgress() {
  if (!state.dirHandle) return;
  try {
    const fh   = await state.dirHandle.getFileHandle('progresso.json');
    const file = await fh.getFile();
    const data = JSON.parse(await file.text());
    if (Array.isArray(data.results) && data.results.length === questions.length) {
      state.results       = data.results;
      state.points        = data.points ?? 0;
      state.errorNotebook = data.errorNotebook ?? {};
      state.activityLog   = Array.isArray(data.activityLog) ? data.activityLog : [];
      const validPhases = ['objective', 'intro', 'quiz', 'results', 'error-notebook', 'module2-intro', 'module2-quiz', 'module2-results', 'module3-intro', 'module3-quiz', 'module3-results', 'module4-intro', 'module4-quiz', 'module4-results', 'module5-intro', 'module5-quiz', 'module5-results', 'module6-intro', 'module6-quiz', 'module6-results', 'module7-intro', 'module7-quiz', 'module7-results', 'sim-intro', 'sim-quiz', 'sim-results', 'sim2-intro', 'sim2-quiz', 'sim2-results'];
      if (validPhases.includes(data.phase)) {
        state.phase   = data.phase;
        state.current = data.current ?? 0;
        if (Array.isArray(data.activeSet)) state.activeSet = data.activeSet;
      }
      state.m2phase         = data.m2phase ?? 'none';
      state.m2current       = data.m2current ?? 0;
      state.m2activeSet     = Array.isArray(data.m2activeSet) ? data.m2activeSet : questions2.map((_, i) => i);
      state.m2results       = Array.isArray(data.m2results) && data.m2results.length === questions2.length
        ? data.m2results : new Array(questions2.length).fill(null);
      state.m2points        = data.m2points ?? 0;
      state.m2errorNotebook = data.m2errorNotebook ?? {};
      state.m2unlocked      = !!(data.m2unlocked || PHASES_MODULE2.includes(data.phase) || state.m2results.some(r => r !== null));
      state.m3phase         = data.m3phase ?? 'none';
      state.m3current       = data.m3current ?? 0;
      state.m3activeSet     = Array.isArray(data.m3activeSet) ? data.m3activeSet : questions3.map((_, i) => i);
      state.m3results       = Array.isArray(data.m3results) && data.m3results.length === questions3.length
        ? data.m3results : new Array(questions3.length).fill(null);
      state.m3points        = data.m3points ?? 0;
      state.m3errorNotebook = data.m3errorNotebook ?? {};
      state.m3unlocked      = !!(data.m3unlocked || PHASES_MODULE3.includes(data.phase) || state.m3results.some(r => r !== null));
      state.m4unlocked      = !!(data.m4unlocked || PHASES_MODULE4.includes(data.phase) || (Array.isArray(data.m4results) && data.m4results.some(r => r !== null)));
      state.m5unlocked      = !!(data.m5unlocked || ['module5-intro','module5-quiz','module5-results'].includes(data.phase) || (Array.isArray(data.m4results) && data.m4results.every(r => r !== null) && data.m4results.length > 0) || (Array.isArray(data.m5results) && data.m5results.some(r => r !== null)));
      state.m4phase         = data.m4phase ?? 'none';
      state.m4current       = data.m4current ?? 0;
      state.m4activeSet     = Array.isArray(data.m4activeSet) ? data.m4activeSet : questions4.map((_, i) => i);
      state.m4results       = Array.isArray(data.m4results) && data.m4results.length === questions4.length
        ? data.m4results : new Array(questions4.length).fill(null);
      state.m4points        = data.m4points ?? 0;
      state.m4errorNotebook = data.m4errorNotebook ?? {};
      state.m5results       = Array.isArray(data.m5results) && data.m5results.length === questions5.length
        ? data.m5results : new Array(questions5.length).fill(null);
      state.m5points        = data.m5points ?? 0;
      state.m5errorNotebook = data.m5errorNotebook ?? {};
      state.m5phase         = data.m5phase ?? 'none';
      state.m5current       = data.m5current ?? 0;
      if (Array.isArray(data.m5activeSet)) state.m5activeSet = data.m5activeSet;
      state.m6unlocked      = !!(data.m6unlocked || PHASES_MODULE6.includes(data.phase) || (Array.isArray(data.m6results) && data.m6results.some(r => r !== null)));
      state.m6phase         = data.m6phase ?? 'none';
      state.m6current       = data.m6current ?? 0;
      state.m6activeSet     = Array.isArray(data.m6activeSet) ? data.m6activeSet : questions6.map((_, i) => i);
      state.m6results       = Array.isArray(data.m6results) && data.m6results.length === questions6.length
        ? data.m6results : new Array(questions6.length).fill(null);
      state.m6points        = data.m6points ?? 0;
      state.m6errorNotebook = data.m6errorNotebook ?? {};
      state.m7unlocked      = !!(data.m7unlocked || PHASES_MODULE7.includes(data.phase) || (Array.isArray(data.m7results) && data.m7results.some(r => r !== null)));
      state.m7phase         = data.m7phase ?? 'none';
      state.m7current       = data.m7current ?? 0;
      state.m7activeSet     = Array.isArray(data.m7activeSet) ? data.m7activeSet : questions7.map((_, i) => i);
      state.m7results       = Array.isArray(data.m7results) && data.m7results.length === questions7.length
        ? data.m7results : new Array(questions7.length).fill(null);
      state.m7points        = data.m7points ?? 0;
      state.m7errorNotebook = data.m7errorNotebook ?? {};
      state.simUnlocked  = !!(data.simUnlocked || PHASES_SIM.includes(data.phase) || (Array.isArray(data.m5results) && data.m5results.length > 0 && data.m5results.every(r => r !== null)));
      state.sim2Unlocked = !!(data.sim2Unlocked || PHASES_SIM2.includes(data.phase) || (Array.isArray(data.m7results) && data.m7results.length > 0 && data.m7results.every(r => r !== null)));
      state.sim2Phase    = data.sim2Phase ?? 'none';
      state.sim2Queue    = Array.isArray(data.sim2Queue) ? data.sim2Queue : [];
      state.sim2Answered = (data.sim2Answered && typeof data.sim2Answered === 'object') ? data.sim2Answered : {};
      state.sim2Current  = data.sim2Current ?? 0;
      state.simPhase     = data.simPhase ?? 'none';
      state.simQueue     = Array.isArray(data.simQueue) ? data.simQueue : [];
      state.simAnswered  = (data.simAnswered && typeof data.simAnswered === 'object') ? data.simAnswered : {};
      state.simCurrent   = data.simCurrent ?? 0;
      const el = $('statPontos'); if (el) el.textContent = state.points;
      updateStreak();
      updateModule2Card();
      updateModule3Card();
      updateModule4Card();
      updateModule5Card();
      updateModule6Card();
      updateModule7Card();
      updateSimCard();
      updateSim2Card();
      updateErrorNotebook();
    }
  } catch (e) { /* sem progresso salvo, começa do zero */ }
}

// ── BADGE DE PASTA ───────────────────────────────────────────
// state.folderName: nome guardado mesmo sem permissão ativa
function updateFolderBadge() {
  const headerIndicator = document.getElementById('headerFolderIndicator');
  const headerName      = document.getElementById('headerFolderName');
  const headerIcon      = document.getElementById('headerFolderIcon');
  const btnText         = document.getElementById('btnSaveText');

  if (state.dirHandle) {
    // Pasta ativa e com permissão
    if (headerName) headerName.textContent = state.dirHandle.name;
    if (headerIcon) headerIcon.className = 'fa-solid fa-folder-open';
    if (headerIndicator) {
      headerIndicator.className = 'folder-indicator connected';
      headerIndicator.onclick = () => showSetupScreen();
      headerIndicator.title = 'Pasta conectada — clique para alterar';
    }
    if (btnText) btnText.textContent = 'Salvar agora';
  } else if (state.folderName) {
    // Pasta conhecida mas precisa reconectar
    if (headerName) headerName.textContent = state.folderName;
    if (headerIcon) headerIcon.className = 'fa-solid fa-folder';
    if (headerIndicator) {
      headerIndicator.className = 'folder-indicator needs-reconnect';
      headerIndicator.onclick = () => showSetupScreen();
      headerIndicator.title = 'Clique para reconectar a pasta';
    }
    if (btnText) btnText.textContent = 'Reconectar pasta';
  } else {
    // Nenhuma pasta
    if (headerName) headerName.textContent = 'Salvar progresso';
    if (headerIcon) headerIcon.className = 'fa-solid fa-floppy-disk';
    if (headerIndicator) {
      headerIndicator.className = 'folder-indicator unsaved';
      headerIndicator.onclick = () => showSetupScreen();
      headerIndicator.title = 'Clique para conectar uma pasta e salvar seu progresso';
    }
    if (btnText) btnText.textContent = 'Salvar progresso';
  }
}

function showToast(msg, type = 'info') {
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  t.innerHTML = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add('toast-visible'));
  setTimeout(() => { t.classList.remove('toast-visible'); setTimeout(() => t.remove(), 350); }, 4000);
}

// ── TELA DE CONFIGURAÇÃO DE PASTA ───────────────────────────
function showSetupScreen() {
  const supported = 'showDirectoryPicker' in window;

  const overlay = document.createElement('div');
  overlay.id        = 'setupOverlay';
  overlay.className = 'setup-overlay';
  overlay.innerHTML = `
    <div class="setup-card">
      <div class="setup-icon"><i class="fa-solid fa-folder-open"></i></div>
      <h2>Salvar seu progresso</h2>
      <p>Selecione uma pasta no seu dispositivo para guardar seu progresso. Nenhum dado é enviado para a internet — tudo fica salvo apenas no seu computador.</p>
      <div class="setup-info">
        <i class="fa-solid fa-shield-halved"></i>
        <span>O progresso será armazenado <strong>localmente</strong>, na pasta que você escolher.</span>
      </div>
      ${supported
        ? `<button type="button" class="btn-setup" id="selectFolderBtn">
             <i class="fa-solid fa-folder-open"></i> Selecionar pasta
           </button>
           <button type="button" class="btn-setup-skip" id="skipSetupBtn">Continuar sem salvar</button>`
        : `<div class="setup-warning">
             <i class="fa-solid fa-triangle-exclamation"></i>
             Seu navegador não suporta seleção de pasta. Use Chrome ou Edge para salvar o progresso.
           </div>
           <button type="button" class="btn-setup" id="skipSetupBtn">Continuar sem salvar</button>`
      }
    </div>`;
  document.body.appendChild(overlay);

  function dismiss() { overlay.remove(); updateFolderBadge(); updateStats(); updateErrorNotebook(); render(); }

  if (supported) {
    document.getElementById('selectFolderBtn').addEventListener('click', async () => {
      try {
        const handle = await window.showDirectoryPicker({ mode: 'readwrite' });
        state.dirHandle  = handle;
        state.folderName = handle.name;
        await idbSet('dirHandle', handle);
        await idbSet('folderName', handle.name);
        await loadProgress();
        await saveProgress();
        dismiss();
      } catch (e) { /* usuário cancelou o seletor */ }
    });
  }
  document.getElementById('skipSetupBtn').addEventListener('click', () => {
    dismiss();
  });
}

// ── TELA DE RECONEXÃO ────────────────────────────────────────
function showReconnectScreen(handle) {
  const overlay = document.createElement('div');
  overlay.id        = 'reconnectOverlay';
  overlay.className = 'setup-overlay';
  overlay.innerHTML = `
    <div class="setup-card">
      <div class="setup-icon"><i class="fa-solid fa-rotate-right"></i></div>
      <h2>Continuar de onde parou</h2>
      <p>Você tem progresso salvo na pasta <strong>${handle.name}</strong>.<br>
         Clique em <strong>Continuar</strong> para recarregar seu progresso.</p>
      <div class="setup-info">
        <i class="fa-solid fa-shield-halved"></i>
        <span>O navegador precisa de permissão para acessar a pasta novamente.</span>
      </div>
      <button type="button" class="btn-setup" id="btnReconnect">
        <i class="fa-solid fa-folder-open"></i> Continuar
      </button>
      <button type="button" class="btn-setup-skip" id="btnSkipReconnect">Começar do zero</button>
    </div>`;
  document.body.appendChild(overlay);

  document.getElementById('btnReconnect').addEventListener('click', async () => {
    try {
      const perm = await handle.requestPermission({ mode: 'readwrite' });
      if (perm === 'granted') {
        state.dirHandle  = handle;
        state.folderName = handle.name;
        await loadProgress();
        overlay.remove();
        updateFolderBadge();
        updateStats();
        updateErrorNotebook();
        render();
      }
    } catch (e) { /* usuário negou */ }
  });

  document.getElementById('btnSkipReconnect').addEventListener('click', async () => {
    try {
      await idbDelete('dirHandle');
      await idbDelete('folderName');
    } catch (e) {}
    state.dirHandle  = null;
    state.folderName = null;
    overlay.remove();
    showSetupScreen();
    updateFolderBadge();
    updateStats();
    render();
  });
}

// ── INICIALIZAÇÃO ─────────────────────────────────────────────
async function init() {
  try { state.folderName = await idbGet('folderName') || null; } catch (e) {}

  try {
    const handle = await idbGet('dirHandle');
    if (handle) {
      const perm = await handle.queryPermission({ mode: 'readwrite' });
      if (perm === 'granted') {
        state.dirHandle  = handle;
        state.folderName = handle.name;
        await loadProgress();
        updateFolderBadge();
        updateStats();
        updateErrorNotebook();
        render();
        return;
      }
      // Permissão precisa de gesto do usuário — tela de reconexão
      updateFolderBadge();
      showReconnectScreen(handle);
      updateStats();
      updateErrorNotebook();
      render();
      return;
    }
  } catch (e) { /* IDB indisponível */ }

  // Sem pasta salva — sempre exibe tela de seleção
  updateFolderBadge();
  showSetupScreen();
  updateStats();
  updateErrorNotebook();
  render();
}

const $ = id => document.getElementById(id);

// ── AVISO DE SAÍDA SEM SALVAR ────────────────────────────────
function showUnsavedReloadWarning(onProceed) {
  if (document.getElementById('unsavedWarningOverlay')) return;
  const overlay = document.createElement('div');
  overlay.id        = 'unsavedWarningOverlay';
  overlay.className = 'setup-overlay';
  overlay.innerHTML = `
    <div class="setup-card">
      <div class="setup-icon setup-icon-warn"><i class="fa-solid fa-triangle-exclamation"></i></div>
      <h2>Progresso não salvo</h2>
      <p>O progresso desta sessão não está salvo. O que deseja fazer?</p>
      <button type="button" class="btn-setup" id="btnSaveNow">
        <i class="fa-solid fa-floppy-disk"></i> Salvar progresso
      </button>
      <button type="button" class="btn-setup" id="btnKeepStudying" style="background:var(--success-green)">
        <i class="fa-solid fa-book-open"></i> Continuar estudando
      </button>
      <button type="button" class="btn-setup-skip" id="btnLeaveAnyway">Sair sem salvar</button>
    </div>`;
  document.body.appendChild(overlay);

  document.getElementById('btnSaveNow').addEventListener('click', () => {
    overlay.remove();
    showSetupScreen();
  });

  document.getElementById('btnKeepStudying').addEventListener('click', () => {
    overlay.remove();
  });

  document.getElementById('btnLeaveAnyway').addEventListener('click', async () => {
    // Limpa a pasta do IDB para que a tela de seleção apareça no próximo carregamento
    try {
      await idbDelete('dirHandle');
      await idbDelete('folderName');
    } catch (e) {}
    state.dirHandle   = null;
    state.folderName  = null;
    state.allowReload = true;
    onProceed();
  });
}

// Intercepta F5 / Ctrl+R / Cmd+R quando não há pasta conectada
window.addEventListener('keydown', e => {
  if (state.dirHandle || state.allowReload) return;
  const isRefresh = e.key === 'F5' || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'r');
  if (isRefresh) {
    e.preventDefault();
    showUnsavedReloadWarning(() => location.reload());
  }
}, true);

// Fallback para o botão de atualizar do browser
window.addEventListener('beforeunload', e => {
  if (!state.dirHandle && !state.allowReload) {
    e.preventDefault();
    e.returnValue = '';
  }
});

// ── CARD CLASSIFICAÇÃO DE PALAVRAS (SIDEBAR) ─────────────────
document.getElementById('moduleBtnCard').addEventListener('click', () => {
  const answered = state.results.filter(r => r !== null).length;
  const allDone  = answered === questions.length;
  state.phase = (answered > 0 && !allDone) ? 'quiz' : 'intro';
  render();
  document.getElementById('leftSidebar').classList.remove('open');
  document.getElementById('btnMobileConteudos').classList.remove('active');
  const bd = document.getElementById('mobilePanelBackdrop');
  if (bd) bd.classList.remove('active');
});

// ── CARD SUJEITO - BÁSICO (SIDEBAR) ──────────────────────────
document.getElementById('module0Card').addEventListener('click', () => {
  state.phase = 'objective';
  render();
  document.getElementById('leftSidebar').classList.remove('open');
  document.getElementById('btnMobileConteudos').classList.remove('active');
  const bd = document.getElementById('mobilePanelBackdrop');
  if (bd) bd.classList.remove('active');
});

document.getElementById('module2Card').addEventListener('click', () => {
  if ($('module2Card').classList.contains('locked')) return;
  state.m2unlocked = true;
  const answered = state.m2results.filter(r => r !== null).length;
  if (answered > 0 && answered < questions2.length) {
    state.phase = 'module2-quiz';
  } else {
    state.phase = 'module2-intro';
  }
  render();
  document.getElementById('leftSidebar').classList.remove('open');
  document.getElementById('btnMobileConteudos').classList.remove('active');
  const bd = document.getElementById('mobilePanelBackdrop');
  if (bd) bd.classList.remove('active');
});

// ── CARD MÓDULO 3 (SIDEBAR) ──────────────────────────────────
document.getElementById('module3Card').addEventListener('click', () => {
  if ($('module3Card').classList.contains('locked')) return;
  state.m3unlocked = true;
  state.phase = 'module3-intro';
  render();
  document.getElementById('leftSidebar').classList.remove('open');
  document.getElementById('btnMobileConteudos').classList.remove('active');
  const bd = document.getElementById('mobilePanelBackdrop');
  if (bd) bd.classList.remove('active');
});

document.getElementById('module4Card').addEventListener('click', () => {
  if ($('module4Card').classList.contains('locked')) return;
  state.m4unlocked = true;
  state.phase = 'module4-intro';
  render();
  document.getElementById('leftSidebar').classList.remove('open');
  document.getElementById('btnMobileConteudos').classList.remove('active');
  const bd = document.getElementById('mobilePanelBackdrop');
  if (bd) bd.classList.remove('active');
});

// ── CARD MÓDULO 5 (SIDEBAR) ──────────────────────────────────
document.getElementById('module5Card').addEventListener('click', () => {
  if ($('module5Card').classList.contains('locked')) return;
  state.m5unlocked = true;
  state.phase = 'module5-intro';
  render();
  document.getElementById('leftSidebar').classList.remove('open');
  document.getElementById('btnMobileConteudos').classList.remove('active');
  const bd = document.getElementById('mobilePanelBackdrop');
  if (bd) bd.classList.remove('active');
});

// ── CARD SIMULADOS (SIDEBAR) ─────────────────────────────────
document.getElementById('moduleSimCard').addEventListener('click', () => {
  if ($('moduleSimCard').classList.contains('locked')) return;
  state.simUnlocked = true;
  state.phase = 'sim-intro';
  render();
  document.getElementById('leftSidebar').classList.remove('open');
  document.getElementById('btnMobileConteudos').classList.remove('active');
  const bd = document.getElementById('mobilePanelBackdrop');
  if (bd) bd.classList.remove('active');
});

// ── CARD MÓDULO 6 (SIDEBAR) ──────────────────────────────────
document.getElementById('module6Card').addEventListener('click', () => {
  if ($('module6Card').classList.contains('locked')) return;
  state.m6unlocked = true;
  state.phase = 'module6-intro';
  render();
  document.getElementById('leftSidebar').classList.remove('open');
  document.getElementById('btnMobileConteudos').classList.remove('active');
  const bd = document.getElementById('mobilePanelBackdrop');
  if (bd) bd.classList.remove('active');
});

// ── CARD MÓDULO 7 (SIDEBAR) ──────────────────────────────────
document.getElementById('module7Card').addEventListener('click', () => {
  if ($('module7Card').classList.contains('locked')) return;
  state.m7unlocked = true;
  state.phase = 'module7-intro';
  render();
  document.getElementById('leftSidebar').classList.remove('open');
  document.getElementById('btnMobileConteudos').classList.remove('active');
  const bd = document.getElementById('mobilePanelBackdrop');
  if (bd) bd.classList.remove('active');
});

// ── CARD SIMULADOS AVANÇADO (SIDEBAR) ────────────────────────
document.getElementById('moduleSim2Card').addEventListener('click', () => {
  if ($('moduleSim2Card').classList.contains('locked')) return;
  state.sim2Unlocked = true;
  state.phase = 'sim2-intro';
  render();
  document.getElementById('leftSidebar').classList.remove('open');
  document.getElementById('btnMobileConteudos').classList.remove('active');
  const bd = document.getElementById('mobilePanelBackdrop');
  if (bd) bd.classList.remove('active');
});

// ── CARD CADERNO DE ERROS (SIDEBAR) ──────────────────────────
document.getElementById('cadernoBtnCard').addEventListener('click', () => {
  if (state.phase !== 'error-notebook') state.previousPhase = state.phase;
  state.phase = 'error-notebook';
  render();
  document.getElementById('leftSidebar').classList.remove('open');
  document.getElementById('btnMobileConteudos').classList.remove('active');
  const bd = document.getElementById('mobilePanelBackdrop');
  if (bd) bd.classList.remove('active');
});

// ── BOTÃO VER DESEMPENHO ─────────────────────────────────────
document.getElementById('btnVerDesempenho').addEventListener('click', showPerformanceModal);

// ── BOTÃO DE SALVAR (SIDEBAR) ────────────────────────────────
document.getElementById('btnSaveSidebar').addEventListener('click', async () => {
  if (state.dirHandle) {
    await saveProgress();
    showToast('<i class="fa-solid fa-check"></i> Progresso salvo!', 'success');
  } else {
    showSetupScreen();
  }
});

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
function updateHeaderH() {
  const navbar = document.querySelector('.top-navbar');
  if (navbar) document.documentElement.style.setProperty('--header-h', navbar.offsetHeight + 'px');
}

const PHASES_NO_HEADER  = ['intro', 'error-notebook', 'caderno-quiz', 'module2-intro', 'module2-quiz', 'module2-results', 'objective', 'module3-intro', 'module3-quiz', 'module3-results', 'module4-intro', 'module4-quiz', 'module4-results', 'module5-intro', 'module5-quiz', 'module5-results', 'module6-intro', 'module6-quiz', 'module6-results', 'module7-intro', 'module7-quiz', 'module7-results', 'sim-intro', 'sim-quiz', 'sim-results', 'sim2-intro', 'sim2-quiz', 'sim2-results'];
const PHASES_SHOW_TITLE = ['intro', 'objective', 'module2-intro', 'module2-quiz', 'module2-results', 'module3-intro', 'module3-quiz', 'module3-results', 'module4-intro', 'module4-quiz', 'module4-results', 'module5-intro', 'module5-quiz', 'module5-results', 'module6-intro', 'module6-quiz', 'module6-results', 'module7-intro', 'module7-quiz', 'module7-results', 'sim-intro', 'sim-quiz', 'sim-results', 'sim2-intro', 'sim2-quiz', 'sim2-results'];
const PHASES_MODULE2    = ['module2-intro', 'module2-quiz', 'module2-results'];
const PHASES_MODULE3    = ['module3-intro', 'module3-quiz', 'module3-results'];
const PHASES_MODULE4    = ['module4-intro', 'module4-quiz', 'module4-results'];
const PHASES_MODULE5    = ['module5-intro', 'module5-quiz', 'module5-results'];
const PHASES_MODULE6    = ['module6-intro', 'module6-quiz', 'module6-results'];
const PHASES_MODULE7    = ['module7-intro', 'module7-quiz', 'module7-results'];
const PHASES_SIM        = ['sim-intro', 'sim-quiz', 'sim-results'];
const PHASES_SIM2       = ['sim2-intro', 'sim2-quiz', 'sim2-results'];

const PHASES_M1 = ['intro', 'quiz', 'results'];

function render() {
  updateStats();
  const hc = $('headerCenter');
  if (hc) hc.style.display = PHASES_NO_HEADER.includes(state.phase) ? 'none' : '';
  const titleArea = $('centerPanelTitleArea');
  if (titleArea) {
    titleArea.style.display = PHASES_SHOW_TITLE.includes(state.phase) ? '' : 'none';
    const iconEl = titleArea.querySelector('.header-icon-large');
    const h2El   = titleArea.querySelector('.header-texts h2');
    const descEl = $('centerPanelDesc');
    if (state.phase === 'objective') {
      if (iconEl)  iconEl.innerHTML = '<i class="fa-solid fa-bullseye" style="color:#0d9488;font-size:24px"></i>';
      if (h2El)    h2El.textContent = '0. Objetivo';
      if (descEl)  descEl.textContent = 'Entenda a proposta desta plataforma educacional.';
    } else if (PHASES_MODULE2.includes(state.phase)) {
      if (iconEl)  iconEl.innerHTML = '<i class="fa-solid fa-diagram-project" style="color:#3b82f6;font-size:24px"></i>';
      if (h2El)    h2El.textContent = '2. Sujeito - Básico';
      if (descEl)  descEl.textContent = 'Aprenda a identificar os termos da oração e suas funções.';
    } else if (PHASES_MODULE3.includes(state.phase)) {
      if (iconEl)  iconEl.innerHTML = '<span style="font-size:16px;font-weight:700;color:#3b82f6">VP</span>';
      if (h2El)    h2El.textContent = '3. Estudo do predicado';
      if (descEl)  descEl.textContent = 'Entenda o que é o predicado e como identificá-lo na oração.';
    } else if (PHASES_MODULE4.includes(state.phase)) {
      if (iconEl)  iconEl.innerHTML = '<span style="font-size:18px;font-weight:700;color:#0d9488">Ø</span>';
      if (h2El)    h2El.textContent = '4. Orações sem sujeito';
      if (descEl)  descEl.textContent = 'Entenda os verbos impessoais e as orações sem sujeito.';
    } else if (PHASES_MODULE5.includes(state.phase)) {
      if (iconEl)  iconEl.innerHTML = '<span style="font-size:13px;font-weight:700;color:#7c3aed">INV</span>';
      if (h2El)    h2El.textContent = '5. Inversão da ordem - termos essenciais';
      if (descEl)  descEl.textContent = 'Identifique verbo, sujeito e predicado em orações com ordem invertida.';
    } else if (PHASES_MODULE6.includes(state.phase)) {
      if (iconEl)  iconEl.innerHTML = '<i class="fa-solid fa-link" style="color:#3b82f6;font-size:22px"></i>';
      if (h2El)    h2El.textContent = '6. Verbos - Locução';
      if (descEl)  descEl.textContent = 'Aprenda a identificar locuções verbais formadas por dois ou mais verbos.';
    } else if (PHASES_MODULE7.includes(state.phase)) {
      if (iconEl)  iconEl.innerHTML = '<span style="font-size:12px;font-weight:700;color:#ef4444">NS</span>';
      if (h2El)    h2El.textContent = '7. Núcleo simples do sujeito';
      if (descEl)  descEl.textContent = 'Aprenda a identificar a palavra principal dentro do sujeito da oração.';
    } else if (PHASES_SIM.includes(state.phase)) {
      if (iconEl)  iconEl.innerHTML = '<i class="fa-solid fa-graduation-cap" style="color:#16a34a;font-size:22px"></i>';
      if (h2El)    h2El.textContent = 'S. Simulados';
      if (descEl)  descEl.textContent = 'Teste seus conhecimentos com questões misturadas dos módulos 1 a 5.';
    } else if (PHASES_SIM2.includes(state.phase)) {
      if (iconEl)  iconEl.innerHTML = '<i class="fa-solid fa-graduation-cap" style="color:#16a34a;font-size:22px"></i>';
      if (h2El)    h2El.textContent = 'S2. Simulados';
      if (descEl)  descEl.textContent = 'Teste seus conhecimentos com questões misturadas dos módulos 1 a 7.';
    } else if (state.phase === 'caderno-quiz') {
      if (iconEl)  iconEl.innerHTML = '<i class="fa-solid fa-triangle-exclamation" style="color:#ef4444;font-size:20px"></i>';
      if (h2El)    h2El.textContent = 'Caderno de Erros';
      if (descEl)  descEl.textContent = 'Pratique as questões que você errou.';
    } else {
      if (iconEl)  iconEl.textContent = 'Aa';
      if (h2El)    h2El.textContent = '1. Verbos - Básico';
      if (descEl)  descEl.textContent = 'Aprenda as classes de palavras e como identificá-las em diferentes contextos.';
    }
  }
  const sb = document.querySelector('.header-status-badge');
  if (sb) sb.style.display = PHASES_M1.includes(state.phase) ? '' : 'none';
  updateHeaderH();
  const cc  = $('cadernoBtnCard');
  const m1c = $('moduleBtnCard');
  const m2c = $('module2Card');
  const m3c = $('module3Card');
  const m0c = $('module0Card');
  if (cc)  cc.classList.toggle('active-view', state.phase === 'error-notebook' || state.phase === 'caderno-quiz');
  if (m1c) m1c.classList.toggle('active', PHASES_M1.includes(state.phase));
  if (m2c) m2c.classList.toggle('active-view', PHASES_MODULE2.includes(state.phase));
  if (m3c) m3c.classList.toggle('active-view', PHASES_MODULE3.includes(state.phase));
  const m4c = $('module4Card');
  if (m4c) m4c.classList.toggle('active-view', PHASES_MODULE4.includes(state.phase));
  const m5c = $('module5Card');
  if (m5c) m5c.classList.toggle('active-view', PHASES_MODULE5.includes(state.phase));
  const m6c = $('module6Card');
  if (m6c) m6c.classList.toggle('active-view', PHASES_MODULE6.includes(state.phase));
  const m7c = $('module7Card');
  if (m7c) m7c.classList.toggle('active-view', PHASES_MODULE7.includes(state.phase));
  const mSc = $('moduleSimCard');
  if (mSc) mSc.classList.toggle('active-view', PHASES_SIM.includes(state.phase));
  const mS2c = $('moduleSim2Card');
  if (mS2c) mS2c.classList.toggle('active-view', PHASES_SIM2.includes(state.phase));
  if (m0c) m0c.classList.toggle('active-view', state.phase === 'objective');
  if (state.phase === 'objective')         { renderObjective();         return; }
  if (state.phase === 'intro')             { renderIntro();             return; }
  if (state.phase === 'results')           { renderResults();           return; }
  if (state.phase === 'error-notebook')    { renderErrorNotebookPage(); return; }
  if (state.phase === 'module2-intro')     { renderModule2Intro();      return; }
  if (state.phase === 'module2-quiz')      { renderModule2Question();   return; }
  if (state.phase === 'module2-results')   { renderModule2Results();    return; }
  if (state.phase === 'module3-intro')     { renderModule3Intro();      return; }
  if (state.phase === 'module3-quiz')      { renderModule3Question();   return; }
  if (state.phase === 'module3-results')   { renderModule3Results();    return; }
  if (state.phase === 'module4-intro')     { renderModule4Intro();      return; }
  if (state.phase === 'module4-quiz')      { renderModule4Question();   return; }
  if (state.phase === 'module4-results')   { renderModule4Results();    return; }
  if (state.phase === 'module5-intro')     { renderModule5Intro();      return; }
  if (state.phase === 'module5-quiz')      { renderModule5Question();   return; }
  if (state.phase === 'module5-results')   { renderModule5Results();    return; }
  if (state.phase === 'module6-intro')     { renderModule6Intro();      return; }
  if (state.phase === 'module6-quiz')      { renderModule6Question();   return; }
  if (state.phase === 'module6-results')   { renderModule6Results();    return; }
  if (state.phase === 'module7-intro')     { renderModule7Intro();      return; }
  if (state.phase === 'module7-quiz')      { renderModule7Question();   return; }
  if (state.phase === 'module7-results')   { renderModule7Results();    return; }
  if (state.phase === 'sim-intro')         { renderSimIntro();          return; }
  if (state.phase === 'sim-quiz')          { renderSimQuestion();       return; }
  if (state.phase === 'sim-results')       { renderSimResults();        return; }
  if (state.phase === 'sim2-intro')        { renderSim2Intro();         return; }
  if (state.phase === 'sim2-quiz')         { renderSim2Question();      return; }
  if (state.phase === 'sim2-results')      { renderSim2Results();       return; }
  if (state.phase === 'caderno-quiz')      { renderCadernoQuestion();   return; }
  renderQuestion();
}

// ── TELA DE OBJETIVO ─────────────────────────────────────────
function renderObjective() {
  $('quizContainer').innerHTML = `
    <div class="lesson-screen">
      <div class="lesson-badge"><i class="fa-solid fa-bullseye"></i> Projeto de extensão</div>
      <div class="lesson-body objective-body">
        <p>Esta aplicação foi desenvolvida como parte de um <strong>Projeto de Extensão</strong> do curso de Análise e Desenvolvimento de Sistemas, com o propósito de tornar o aprendizado de Língua Portuguesa mais acessível, prático e motivador para diferentes públicos e faixas etárias.</p>
        <p>O site foi criado a partir da percepção de que muitos estudantes encontram dificuldades em conteúdos gramaticais devido ao excesso de teoria e à falta de ferramentas interativas que auxiliem na prática e na organização dos estudos. Pensando nisso, a plataforma reúne recursos visuais, exercícios, desafios, gamificação e acompanhamento de desempenho para transformar o processo de aprendizagem em uma experiência mais dinâmica e eficiente.</p>
        <p>Além de apoiar estudantes em reforço escolar e preparação para concursos públicos, o projeto busca incentivar a autonomia nos estudos, permitindo que cada usuário avance no próprio ritmo e acompanhe sua evolução ao longo do aprendizado.</p>
        <p>A iniciativa faz parte das ações de extensão universitária voltadas à inovação tecnológica e educacional, promovendo a integração entre tecnologia, educação e impacto social. O projeto também está alinhado aos <strong>Objetivos de Desenvolvimento Sustentável (ODS) da ONU</strong>, especialmente:</p>
        <div class="ods-list">
          <div class="ods-item ods-4">
            <div class="ods-icon"><strong>4</strong></div>
            <div class="ods-text"><strong>ODS 4 — Educação de Qualidade</strong><span>Promover acesso a uma aprendizagem mais inclusiva, acessível e eficiente.</span></div>
          </div>
          <div class="ods-item ods-9">
            <div class="ods-icon"><strong>9</strong></div>
            <div class="ods-text"><strong>ODS 9 — Indústria, Inovação e Infraestrutura</strong><span>Estimular o desenvolvimento de soluções tecnológicas aplicadas à educação.</span></div>
          </div>
          <div class="ods-item ods-10">
            <div class="ods-icon"><strong>10</strong></div>
            <div class="ods-text"><strong>ODS 10 — Redução das Desigualdades</strong><span>Contribuir para ampliar o acesso ao aprendizado por meio da tecnologia.</span></div>
          </div>
        </div>
      </div>
      <button type="button" class="btn-nav btn-nav-primary" id="objStartBtn">
        Começar os módulos ${icons.right}
      </button>
    </div>`;

  $('objStartBtn').addEventListener('click', () => {
    const answered = state.results.filter(r => r !== null).length;
    if (answered > 0 && answered < questions.length) {
      state.phase = 'quiz';
    } else if (answered === questions.length) {
      state.phase = 'results';
    } else {
      state.phase = 'intro';
    }
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── TELA DE INTRODUÇÃO ────────────────────────────────────────
function renderIntro() {
  $('quizContainer').innerHTML = `
    <div class="lesson-screen">
      <div class="lesson-badge"><i class="fa-solid fa-book-open"></i> Primeira Etapa</div>
      <h2>Justificativa da lição:</h2>
      <p style="margin-top:8px;margin-bottom:0;font-size:15px;color:var(--text-gray);line-height:1.7;text-align:justify">Esta etapa tem como objetivo desenvolver a compreensão de textos simples por meio da identificação do verbo.<br>O reconhecimento do verbo auxilia na interpretação das frases e na identificação do sujeito.<br><br>Para isso, o conteúdo abaixo foi organizado de forma gradual e acessível, permitindo a prática contínua até que o estudante compreenda o sentido e a estrutura das orações.</p>
      <div class="lesson-body" style="margin-top:24px">
        <h3 class="lesson-title">Lição de Verbo</h3>
        <p>Verbo é a palavra que expressa <strong>ação</strong>, <strong>estado</strong>, <strong>mudança de estado</strong> ou <strong>fenômeno da natureza</strong>.<br>Ao ler uma frase ou texto, uma das primeiras coisas que devemos procurar é o verbo, pois ele dá movimento e sentido à oração.<br>(Oração é toda frase que possui um verbo.)</p>
        <p>Por exemplo, ao ouvir a palavra correr, imaginamos alguém se movimentando rapidamente de um lugar para outro. Isso representa uma ação.</p>
        <p><strong>Os verbos podem indicar:</strong></p>
        <div class="lesson-table">
          <div class="lesson-row"><span class="lesson-col-key"><strong>Ação</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">correr, cantar</span></div>
          <div class="lesson-row"><span class="lesson-col-key"><strong>Estado</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">ser, estar</span></div>
          <div class="lesson-row"><span class="lesson-col-key"><strong>Mudança de estado</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">ficar, tornar-se</span></div>
          <div class="lesson-row"><span class="lesson-col-key"><strong>Fenômeno da natureza</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">chover, amanhecer</span></div>
        </div>
        <hr>
        <p>Os verbos no <strong>infinitivo</strong> aparecem em sua forma original, sem indicar tempo, pessoa ou número.<br>Essa é a forma considerada "padrão" da palavra.</p>
        <p><strong>Normalmente, os infinitivos terminam em:</strong></p>
        <div class="lesson-table">
          <div class="lesson-row"><span class="lesson-col-key">-<strong>ar</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">1ª conjugação</span></div>
          <div class="lesson-row"><span class="lesson-col-key">-<strong>er</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">2ª conjugação</span></div>
          <div class="lesson-row"><span class="lesson-col-key">-<strong>ir</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">3ª conjugação</span></div>
        </div>
        <p>Existe também o verbo pôr, que antigamente era escrito como poer. Por isso, ele pertence à 2ª conjugação.</p>
        <hr>
        <p><strong>Como identificar um verbo na oração?</strong></p>
        <p>Uma maneira simples é transformar a palavra em infinitivo:</p>
        <div class="lesson-table">
          <div class="lesson-row"><span class="lesson-col-key"><strong>cantou</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">cantar → terminação <strong>-ar</strong> → 1ª conjugação</span></div>
          <div class="lesson-row"><span class="lesson-col-key"><strong>bebeu</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">beber → terminação <strong>-er</strong> → 2ª conjugação</span></div>
          <div class="lesson-row"><span class="lesson-col-key"><strong>partiu</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">partir → terminação <strong>-ir</strong> → 3ª conjugação</span></div>
        </div>
        <p>Você pode fazer isso com qualquer palavra que suspeite ser um verbo. Assim, fica mais fácil praticar e reconhecer cada caso.</p>
        <hr>
        <p>Depois de localizar o verbo, observe o sentido que ele transmite na oração.<br>Ele pode indicar <strong>ação</strong>, <strong>estado</strong>, <strong>mudança de estado</strong> ou <strong>fenômeno da natureza</strong>. Porém, o significado depende do contexto, já que um mesmo verbo pode assumir sentidos diferentes em frases diferentes.</p>
        <p><strong>Exemplos:</strong></p>
        <div class="lesson-table">
          <div class="lesson-row"><span class="lesson-col-key"><em>João correu no parque.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>correu</em> → <em>correr</em> → <strong>ação</strong></span></div>
          <div class="lesson-row"><span class="lesson-col-key"><em>Maria estava cansada.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>estava</em> → <em>estar</em> → <strong>estado</strong></span></div>
          <div class="lesson-row"><span class="lesson-col-key"><em>O leite ficou azedo.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>ficou</em> → <em>ficar</em> → <strong>mudança de estado</strong></span></div>
          <div class="lesson-row"><span class="lesson-col-key"><em>Amanheceu muito cedo hoje.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>amanheceu</em> → <em>amanhecer</em> → <strong>fenômeno da natureza</strong></span></div>
        </div>
        <hr>
        <p><strong>Exemplos de como o sentido do verbo pode mudar conforme o contexto:</strong></p>
        <div class="lesson-table">
          <div class="lesson-row"><span class="lesson-col-key"><em>Pedro ficou em casa ontem.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>ficou</em> → <em>ficar</em> → <strong>permanência</strong></span></div>
          <div class="lesson-row"><span class="lesson-col-key"><em>Ana ficou triste com a notícia.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>ficou</em> → <em>ficar</em> → <strong>mudança de estado</strong></span></div>
          <div class="lesson-row"><span class="lesson-col-key"><em>Carlos passou pela escola cedo.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>passou</em> → <em>passar</em> → <strong>movimento</strong></span></div>
          <div class="lesson-row"><span class="lesson-col-key"><em>Carlos passou na prova.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>passou</em> → <em>passar</em> → <strong>aprovação</strong></span></div>
          <div class="lesson-row"><span class="lesson-col-key"><em>Marina estava na cozinha.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>estava</em> → <em>estar</em> → <strong>estado/localização</strong></span></div>
          <div class="lesson-row"><span class="lesson-col-key"><em>Marina estava estudando.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>estava</em> → <em>estar</em> → <strong>auxiliar de ação contínua</strong></span></div>
          <div class="lesson-row"><span class="lesson-col-key"><em>O menino virou a esquina.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>virou</em> → <em>virar</em> → <strong>movimento</strong></span></div>
          <div class="lesson-row"><span class="lesson-col-key"><em>O leite virou queijo.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>virou</em> → <em>virar</em> → <strong>transformação/mudança de estado</strong></span></div>
        </div>
      </div>
      <button type="button" class="btn-start" id="startBtn">
        Começar questões ${icons.right}
      </button>
    </div>`;
  $('startBtn').addEventListener('click', () => {
    const hasProgress = state.results.some(r => r !== null);
    if (hasProgress) {
      state.phase = 'quiz';
      render();
    } else {
      startQuiz();
    }
  });
}

// ── TELA DE INTRODUÇÃO — MÓDULO 2 ────────────────────────────
function renderModule2Intro() {
  $('quizContainer').innerHTML = `
    <div class="lesson-screen">
      <div class="lesson-badge"><i class="fa-solid fa-book-open"></i> Segunda Etapa</div>
      <h2>Justificativa da lição:</h2>
      <p style="margin-top:8px;margin-bottom:0;font-size:15px;color:var(--text-gray);line-height:1.7">Essa etapa 2 você irá aprender o segundo passo para poder analisar texto: aprender a identificar o sujeito simples da frase.</p>
      <div class="lesson-body" style="margin-top:24px">
        <h3 class="lesson-title">Lição de Sujeito <span class="lesson-title-sub">(Versão Resumida)</span></h3>
        <p>Agora que você já sabe identificar o verbo, ficará mais fácil encontrar o sujeito.</p>
        <p>O sujeito é <strong>quem pratica a ação, sofre a ação ou o termo sujeito é sobre quem se fala</strong> na frase.</p>

        <p><strong>Como identificar o sujeito em uma frase ou texto?</strong></p>
        <div class="lesson-table">
          <div class="lesson-row"><span class="lesson-col-key">1º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Encontre o <strong>verbo</strong> da frase.</span></div>
          <div class="lesson-row"><span class="lesson-col-key">2º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Faça a pergunta: <strong>quem + verbo?</strong> ou <strong>o que + verbo?</strong></span></div>
          <div class="lesson-row"><span class="lesson-col-key">3º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">A resposta será o <strong>sujeito</strong>.</span></div>
        </div>

        <p><strong>Exemplos:</strong></p>
        <div class="lesson-grid">
          <span class="lg-key"><em>Maria estudou ontem.</em></span><span class="lg-arrow">→</span><span class="lg-val">Quem estudou? <strong>Maria</strong></span>
          <span class="lg-key"><em>O cachorro latiu muito.</em></span><span class="lg-arrow">→</span><span class="lg-val">Quem latiu? <strong>o cachorro</strong></span>
          <span class="lg-key"><em>As crianças brincaram na rua.</em></span><span class="lg-arrow">→</span><span class="lg-val">Quem brincou? <strong>as crianças</strong></span>
          <span class="lg-key"><em>O carro quebrou.</em></span><span class="lg-arrow">→</span><span class="lg-val">O que quebrou? <strong>o carro</strong></span>
          <span class="lg-key"><em>A janela abriu.</em></span><span class="lg-arrow">→</span><span class="lg-val">O que abriu? <strong>a janela</strong></span>
          <span class="lg-key"><em>O computador desligou sozinho.</em></span><span class="lg-arrow">→</span><span class="lg-val">O que desligou? <strong>o computador</strong></span>
          <span class="lg-key"><em>A chuva começou cedo.</em></span><span class="lg-arrow">→</span><span class="lg-val">O que começou cedo? <strong>a chuva</strong></span>
        </div>

        <p><strong>O sujeito pode ser:</strong></p>
        <div class="lesson-table">
          <div class="lesson-row"><span class="lesson-col-key">pessoa</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>Maria, o menino, elas…</em></span></div>
          <div class="lesson-row"><span class="lesson-col-key">animal</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>o cachorro, a abelha…</em></span></div>
          <div class="lesson-row"><span class="lesson-col-key">objeto</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>o carro, o computador…</em></span></div>
          <div class="lesson-row"><span class="lesson-col-key">lugar</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>a cidade, a escola…</em></span></div>
        </div>

        <p><strong>Resumo:</strong> O sujeito é o termo da frase sobre o qual se declara algo. Geralmente, é quem faz a ação do verbo ou de quem se fala.</p>
      </div>
      <button type="button" class="btn-start" id="startModule2Btn">
        Começar questões ${icons.right}
      </button>
    </div>`;
  $('startModule2Btn').addEventListener('click', startModule2Quiz);
}


// ── TELA DE INTRODUÇÃO — MÓDULO 3 ────────────────────────────
function renderModule3Intro() {
  $('quizContainer').innerHTML = `
    <div class="lesson-screen">
      <div class="lesson-badge"><i class="fa-solid fa-book-open"></i> Terceira Etapa</div>
      <h2>Justificativa da lição:</h2>
      <p style="margin-top:8px;margin-bottom:0;font-size:15px;color:var(--text-gray);line-height:1.7">Essa etapa 3 você irá aprender sobre o predicado: o que é e como identificá-lo na oração.</p>
      <div class="lesson-body" style="margin-top:24px">
        <h3 class="lesson-title">Lição de Estudo do predicado</h3>
        <p>Você já sabe identificar o verbo e o sujeito. Também entendeu que o verbo "fala" sobre o sujeito.</p>
        <p>Depois de identificar o sujeito, surge outra pergunta: o que são o verbo e as outras palavras da oração?<br>Esse conjunto recebe o nome de <strong>predicado</strong>.</p>
        <p>O <strong>predicado</strong> é tudo aquilo que se declara sobre o sujeito. É a parte da oração que contém a informação, ação, característica ou estado relacionado a ele.<br>O próprio verbo faz parte do predicado.</p>
        <hr>
        <p><strong>Como identificar o predicado?</strong></p>
        <div class="lesson-table">
          <div class="lesson-row"><span class="lesson-col-key">1º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Encontre o <strong>verbo</strong> da frase.</span></div>
          <div class="lesson-row"><span class="lesson-col-key">2º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Faça a pergunta: <strong>quem + verbo?</strong> ou <strong>o que + verbo?</strong></span></div>
          <div class="lesson-row"><span class="lesson-col-key">3º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">A resposta é o <strong>sujeito</strong>.</span></div>
          <div class="lesson-row"><span class="lesson-col-key">4º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Tudo que sobra na oração (com o verbo) é o <strong>predicado</strong>.</span></div>
        </div>
        <p><strong>Exemplos:</strong></p>
        <div class="m3-example">
          <p><strong>Frase:</strong> <em>Maria estudou ontem.</em></p>
          <p class="m3-step-label">1ª etapa — identificar o verbo:</p>
          <p class="m3-step-value">verbo: <strong>estudou</strong></p>
          <p class="m3-step-label">2ª etapa — perguntar ao verbo "quem estudou?" ou "o quê estudou?":</p>
          <p class="m3-step-value">A resposta é o sujeito: <strong>Maria</strong></p>
          <p class="m3-step-label">3ª — o que não é sujeito é predicado:</p>
          <p class="m3-step-value">Predicado: <strong>estudou ontem</strong> <span class="m3-concl">(inclusive o verbo faz parte do predicado)</span></p>
          <div class="sa-wrap" style="margin-top:16px">
            <div class="sentence-annotated" style="grid-template-columns:repeat(4,auto);grid-template-rows:auto auto auto">
              <div class="word-chip correct-subject disabled" style="grid-row:1;grid-column:1">Maria</div>
              <div class="word-chip lesson-verb" style="grid-row:1;grid-column:2">estudou</div>
              <div class="word-chip lesson-predicate" style="grid-row:1;grid-column:3">ontem</div>
              <div class="word-chip punctuation" style="grid-row:1;grid-column:4">.</div>
              <div class="annot-subject" style="grid-column:1;grid-row:2">Sujeito</div>
              <div class="annot-verb" style="grid-column:2;grid-row:2">Verbo</div>
              <div class="annot-predicate" style="grid-column:2/span 2;grid-row:3">Predicado</div>
            </div>
          </div>
        </div>
        <div class="m3-example">
          <p><strong>Frase:</strong> <em>O cachorro latiu muito durante a noite.</em></p>
          <p class="m3-step-label">1ª etapa — identificar o verbo:</p>
          <p class="m3-step-value">verbo: <strong>latiu</strong></p>
          <p class="m3-step-label">2ª etapa — perguntar ao verbo "quem latiu?" ou "o quê latiu?":</p>
          <p class="m3-step-value">A resposta é o sujeito: <strong>O cachorro</strong></p>
          <p class="m3-step-label">3ª — o que não é sujeito é predicado:</p>
          <p class="m3-step-value">Predicado: <strong>latiu muito durante a noite</strong></p>
          <div class="sa-wrap" style="margin-top:16px">
            <div class="sentence-annotated" style="grid-template-columns:repeat(8,auto);grid-template-rows:auto auto auto">
              <div class="word-chip correct-subject disabled" style="grid-row:1;grid-column:1">O</div>
              <div class="word-chip correct-subject disabled" style="grid-row:1;grid-column:2">cachorro</div>
              <div class="word-chip lesson-verb" style="grid-row:1;grid-column:3">latiu</div>
              <div class="word-chip lesson-predicate" style="grid-row:1;grid-column:4">muito</div>
              <div class="word-chip lesson-predicate" style="grid-row:1;grid-column:5">durante</div>
              <div class="word-chip lesson-predicate" style="grid-row:1;grid-column:6">a</div>
              <div class="word-chip lesson-predicate" style="grid-row:1;grid-column:7">noite</div>
              <div class="word-chip punctuation" style="grid-row:1;grid-column:8">.</div>
              <div class="annot-subject" style="grid-column:1/span 2;grid-row:2">Sujeito</div>
              <div class="annot-verb" style="grid-column:3;grid-row:2">Verbo</div>
              <div class="annot-predicate" style="grid-column:3/span 5;grid-row:3">Predicado</div>
            </div>
          </div>
        </div>
        <hr>
        <p>O predicado sempre traz alguma informação sobre o sujeito. Ele pode indicar:</p>
        <div class="lesson-table">
          <div class="lesson-row"><span class="lesson-col-key"><strong>Ação</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>João correu rapidamente.</em></span></div>
          <div class="lesson-row"><span class="lesson-col-key"><strong>Estado</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>Ana está cansada.</em></span></div>
          <div class="lesson-row"><span class="lesson-col-key"><strong>Característica</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>O menino é inteligente.</em></span></div>
          <div class="lesson-row"><span class="lesson-col-key"><strong>Mudança de estado</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>O menino ficou feliz.</em></span></div>
        </div>
        <p><strong>Exemplos:</strong></p>
        <div class="m3-example">
          <p class="m3-concl">→ O predicado indica uma ação.</p>
          <div class="sa-wrap" style="margin-top:10px">
            <div class="sentence-annotated" style="grid-template-columns:repeat(4,auto);grid-template-rows:auto auto auto">
              <div class="word-chip correct-subject disabled" style="grid-row:1;grid-column:1">João</div>
              <div class="word-chip lesson-verb" style="grid-row:1;grid-column:2">correu</div>
              <div class="word-chip lesson-predicate" style="grid-row:1;grid-column:3">rapidamente</div>
              <div class="word-chip punctuation" style="grid-row:1;grid-column:4">.</div>
              <div class="annot-subject" style="grid-column:1;grid-row:2">Sujeito</div>
              <div class="annot-verb" style="grid-column:2;grid-row:2">Verbo</div>
              <div class="annot-predicate" style="grid-column:2/span 2;grid-row:3">Predicado</div>
            </div>
          </div>
        </div>
        <div class="m3-example">
          <p class="m3-concl">→ O predicado indica um estado.</p>
          <div class="sa-wrap" style="margin-top:10px">
            <div class="sentence-annotated" style="grid-template-columns:repeat(4,auto);grid-template-rows:auto auto auto">
              <div class="word-chip correct-subject disabled" style="grid-row:1;grid-column:1">Ana</div>
              <div class="word-chip lesson-verb" style="grid-row:1;grid-column:2">está</div>
              <div class="word-chip lesson-predicate" style="grid-row:1;grid-column:3">cansada</div>
              <div class="word-chip punctuation" style="grid-row:1;grid-column:4">.</div>
              <div class="annot-subject" style="grid-column:1;grid-row:2">Sujeito</div>
              <div class="annot-verb" style="grid-column:2;grid-row:2">Verbo</div>
              <div class="annot-predicate" style="grid-column:2/span 2;grid-row:3">Predicado</div>
            </div>
          </div>
        </div>
        <div class="m3-example">
          <p class="m3-concl">→ O predicado indica mudança de estado.</p>
          <div class="sa-wrap" style="margin-top:10px">
            <div class="sentence-annotated" style="grid-template-columns:repeat(5,auto);grid-template-rows:auto auto auto">
              <div class="word-chip correct-subject disabled" style="grid-row:1;grid-column:1">O</div>
              <div class="word-chip correct-subject disabled" style="grid-row:1;grid-column:2">menino</div>
              <div class="word-chip lesson-verb" style="grid-row:1;grid-column:3">ficou</div>
              <div class="word-chip lesson-predicate" style="grid-row:1;grid-column:4">feliz</div>
              <div class="word-chip punctuation" style="grid-row:1;grid-column:5">.</div>
              <div class="annot-subject" style="grid-column:1/span 2;grid-row:2">Sujeito</div>
              <div class="annot-verb" style="grid-column:3;grid-row:2">Verbo</div>
              <div class="annot-predicate" style="grid-column:3/span 2;grid-row:3">Predicado</div>
            </div>
          </div>
        </div>
      </div>
      <button type="button" class="btn-start" id="startModule3Btn">
        Começar questões ${icons.right}
      </button>
    </div>`;
  $('startModule3Btn').addEventListener('click', startModule3Quiz);
}

// ── TELA DE INTRODUÇÃO — MÓDULO 4 ────────────────────────────
function renderModule4Intro() {
  $('quizContainer').innerHTML = `
    <div class="lesson-screen">
      <div class="lesson-badge"><i class="fa-solid fa-book-open"></i> Quarta Etapa</div>
      <h2>Justificativa da lição:</h2>
      <p style="margin-top:8px;margin-bottom:0;font-size:15px;color:var(--text-gray);line-height:1.7">Essa etapa 4 você irá aprender sobre orações sem sujeito: quando e por que certos verbos aparecem sem um sujeito na frase.</p>
      <div class="lesson-body" style="margin-top:24px">
        <h3 class="lesson-title">Lição de Orações sem sujeito</h3>
        <p>Você já sabe identificar o verbo e o sujeito. Também entendeu que o verbo "fala" sobre o sujeito. Podemos até imaginar o verbo como um vizinho fofoqueiro, porque ele sempre denuncia onde o sujeito está na frase.</p>
        <p>Mas existe um detalhe importante: alguns verbos aparecem em orações sem sujeito. Nesses casos, eles são chamados de <strong>verbos impessoais</strong>.</p>
        <p>Infelizmente, esse é um dos assuntos que mais aparecem em provas. Por isso, não basta apenas entender: é importante decorar essas regras e praticar bastante para conseguir identificar rapidamente quando esse conteúdo surgir em questões.</p>
        <p>Uma dica para resolver questões é substituir o verbo pelo sentido dele e verificar se a frase continua coerente.</p>
        <hr>
        <p><strong>Exemplo:</strong></p>
        <div class="m3-example">
          <p><em>Há muitas pessoas na sala.</em></p>
          <p>Substituindo:</p>
          <p><em>Existem muitas pessoas na sala.</em></p>
        </div>
        <p>A frase continua com o mesmo sentido. Portanto, o verbo <em>haver</em> está no sentido de existir e é impessoal.</p>
        <p>Mas atenção: se a substituição deixar a frase sem sentido ou mudar completamente a ideia da oração, então o verbo pode não estar sendo usado como impessoal.</p>
        <hr>
        <p><strong>Os principais casos são:</strong></p>
        <hr>
        <p><strong>Verbo haver no sentido de existir</strong></p>
        <p>Quando o verbo <em>haver</em> significa existir, a oração não possui sujeito.</p>
        <p><strong>Exemplos:</strong></p>
        <div class="m3-example">
          <p><em>Há muitas pessoas na fila.</em></p>
          <p class="m3-sub">→ Existem muitas pessoas na fila.</p>
          <p class="m3-concl">→ O sentido foi mantido, então o verbo é impessoal.</p>
        </div>
        <div class="m3-example">
          <p><em>Havia vários livros na mesa.</em></p>
          <p class="m3-sub">→ Existiam vários livros na mesa.</p>
          <p class="m3-concl">→ A frase continua coerente, então o verbo é impessoal.</p>
        </div>
        <div class="m3-example">
          <p><em>Houve problemas durante a viagem.</em></p>
          <p class="m3-sub">→ Existiram problemas durante a viagem.</p>
          <p class="m3-concl">→ O sentido permaneceu o mesmo, portanto é um verbo impessoal.</p>
        </div>
        <hr>
        <p><strong>Verbo haver no sentido de ocorrer</strong></p>
        <p>O verbo <em>haver</em> também pode indicar acontecimento ou ocorrência.</p>
        <p><strong>Exemplos:</strong></p>
        <div class="m3-example">
          <p><em>Houve uma reunião ontem.</em></p>
          <p class="m3-sub">→ Ocorreu uma reunião ontem.</p>
          <p class="m3-concl">→ O sentido foi mantido, então o verbo é impessoal.</p>
        </div>
        <div class="m3-example">
          <p><em>Houve acidentes na estrada.</em></p>
          <p class="m3-sub">→ Ocorreram acidentes na estrada.</p>
          <p class="m3-concl">→ A ideia permanece igual, portanto é impessoal.</p>
        </div>
        <div class="m3-example">
          <p><em>Haverá mudanças na empresa.</em></p>
          <p class="m3-sub">→ Ocorrerão mudanças na empresa.</p>
          <p class="m3-concl">→ O sentido continua o mesmo, então não há sujeito.</p>
        </div>
        <hr>
        <p><strong>Verbos fazer e haver indicando tempo</strong></p>
        <p>Quando indicam tempo decorrido, os verbos <em>fazer</em> e <em>haver</em> ficam sem sujeito.</p>
        <p><strong>Exemplos:</strong></p>
        <div class="m3-example">
          <p><em>Faz dez anos que moro aqui.</em></p>
          <p class="m3-sub">→ Tem dez anos que moro aqui.</p>
          <p class="m3-concl">→ O sentido continua relacionado a tempo, então o verbo é impessoal.</p>
        </div>
        <div class="m3-example">
          <p><em>Faz muito tempo que não viajamos.</em></p>
          <p class="m3-sub">→ Tem muito tempo que não viajamos.</p>
          <p class="m3-concl">→ A ideia foi mantida, então não existe sujeito.</p>
        </div>
        <div class="m3-example">
          <p><em>Havia meses que ele não aparecia.</em></p>
          <p class="m3-sub">→ Fazia meses que ele não aparecia.</p>
          <p class="m3-concl">→ O sentido continua temporal, portanto é impessoal.</p>
        </div>
        <div class="m3-example">
          <p><em>Há duas semanas não chove.</em></p>
          <p class="m3-sub">→ Faz duas semanas que não chove.</p>
          <p class="m3-concl">→ A frase manteve o sentido de tempo decorrido.</p>
        </div>
        <hr>
        <p><strong>Verbos que indicam fenômenos da natureza</strong></p>
        <p>Fenômenos da natureza normalmente formam orações sem sujeito.</p>
        <p><strong>Exemplos:</strong></p>
        <div class="m3-example">
          <p><em>Choveu ontem.</em></p>
          <p class="m3-concl">→ O verbo indica fenômeno da natureza, por isso é impessoal.</p>
        </div>
        <div class="m3-example">
          <p><em>Amanheceu cedo.</em></p>
          <p class="m3-concl">→ O verbo representa um fenômeno natural, então a oração não possui sujeito.</p>
        </div>
        <div class="m3-example">
          <p><em>Ventou bastante à noite.</em></p>
          <p class="m3-concl">→ Não há alguém praticando a ação. Portanto, o verbo é impessoal.</p>
        </div>
        <div class="m3-example">
          <p><em>Nevou durante a madrugada.</em></p>
          <p class="m3-concl">→ O verbo apenas indica um fenômeno da natureza.</p>
        </div>
      </div>
      <button type="button" class="btn-start" id="startModule4Btn">
        Começar questões ${icons.right}
      </button>
    </div>`;
  $('startModule4Btn').addEventListener('click', startModule4Quiz);
}

// ── TELA DE INTRODUÇÃO — MÓDULO 5 ────────────────────────────
function renderModule5Intro() {
  $('quizContainer').innerHTML = `
    <div class="lesson-screen">
      <div class="lesson-badge"><i class="fa-solid fa-book-open"></i> Quinta Etapa</div>
      <h2>Justificativa da lição:</h2>
      <p style="margin-top:8px;margin-bottom:0;font-size:15px;color:var(--text-gray);line-height:1.7">Essa etapa 5 você irá aprender porque na grande maioria das vezes você erra quem é o sujeito e o complemento.</p>
      <div class="lesson-body" style="margin-top:24px">
        <h3 class="lesson-title">Lição de Estudo da inversão da ordem</h3>
        <p>Preste atenção: até o momento analisamos orações na <strong>ordem direta</strong>, ou seja, na estrutura mais comum da língua:</p>
        <div class="m3-example">
          <p><strong>Sujeito + verbo + complemento</strong></p>
        </div>
        <p><strong>Exemplo:</strong></p>
        <div class="m3-example">
          <p class="m3-concl">→ João comprou um livro.</p>
          <div class="sa-wrap" style="margin-top:10px">
            <div class="sentence-annotated" style="grid-template-columns:repeat(5,auto);grid-template-rows:auto auto auto">
              <div class="word-chip correct-subject disabled" style="grid-row:1;grid-column:1">João</div>
              <div class="word-chip lesson-verb" style="grid-row:1;grid-column:2">comprou</div>
              <div class="word-chip lesson-predicate" style="grid-row:1;grid-column:3">um</div>
              <div class="word-chip lesson-predicate" style="grid-row:1;grid-column:4">livro</div>
              <div class="word-chip punctuation" style="grid-row:1;grid-column:5">.</div>
              <div class="annot-subject" style="grid-column:1;grid-row:2">Sujeito</div>
              <div class="annot-verb" style="grid-column:2;grid-row:2">Verbo</div>
              <div class="annot-predicate" style="grid-column:2/span 3;grid-row:3">Predicado</div>
            </div>
          </div>
        </div>
        <p>Porém, principalmente em textos de concursos, é muito comum encontrarmos orações na <strong>ordem inversa</strong>.</p>
        <hr>
        <p><strong>E o que seria a ordem inversa?</strong></p>
        <p>É quando os termos da oração aparecem deslocados, mudando a posição tradicional da frase. Assim, o texto pode aparecer de diferentes formas:</p>
        <div class="m3-example">
          <p><strong>Verbo + complemento + sujeito</strong></p>
          <div class="sa-wrap" style="margin-top:10px">
            <div class="sentence-annotated" style="grid-template-columns:repeat(5,auto);grid-template-rows:auto auto auto">
              <div class="word-chip lesson-verb" style="grid-row:1;grid-column:1">Dormiu</div>
              <div class="word-chip lesson-predicate" style="grid-row:1;grid-column:2">muito</div>
              <div class="word-chip correct-subject disabled" style="grid-row:1;grid-column:3">o</div>
              <div class="word-chip correct-subject disabled" style="grid-row:1;grid-column:4">gato</div>
              <div class="word-chip punctuation" style="grid-row:1;grid-column:5">.</div>
              <div class="annot-verb" style="grid-column:1;grid-row:2">Verbo</div>
              <div class="annot-subject" style="grid-column:3/span 2;grid-row:2">Sujeito</div>
              <div class="annot-predicate" style="grid-column:1/span 2;grid-row:3">Predicado</div>
            </div>
          </div>
        </div>
        <div class="m3-example">
          <p><strong>Complemento + verbo + sujeito</strong></p>
          <div class="sa-wrap" style="margin-top:10px">
            <div class="sentence-annotated" style="grid-template-columns:repeat(7,auto);grid-template-rows:auto auto auto">
              <div class="word-chip lesson-predicate" style="grid-row:1;grid-column:1">Na</div>
              <div class="word-chip lesson-predicate" style="grid-row:1;grid-column:2">festa</div>
              <div class="word-chip punctuation" style="grid-row:1;grid-column:3">,</div>
              <div class="word-chip lesson-verb" style="grid-row:1;grid-column:4">chegaram</div>
              <div class="word-chip correct-subject disabled" style="grid-row:1;grid-column:5">os</div>
              <div class="word-chip correct-subject disabled" style="grid-row:1;grid-column:6">convidados</div>
              <div class="word-chip punctuation" style="grid-row:1;grid-column:7">.</div>
              <div class="annot-verb" style="grid-column:4;grid-row:2">Verbo</div>
              <div class="annot-subject" style="grid-column:5/span 2;grid-row:2">Sujeito</div>
              <div class="annot-predicate" style="grid-column:1/span 4;grid-row:3">Predicado</div>
            </div>
          </div>
        </div>
        <div class="m3-example">
          <p><strong>Complemento + sujeito + verbo</strong></p>
          <div class="sa-wrap" style="margin-top:10px">
            <div class="sentence-annotated" style="grid-template-columns:repeat(5,auto);grid-template-rows:auto auto auto">
              <div class="word-chip lesson-predicate" style="grid-row:1;grid-column:1">Ontem</div>
              <div class="word-chip punctuation" style="grid-row:1;grid-column:2">,</div>
              <div class="word-chip correct-subject disabled" style="grid-row:1;grid-column:3">Pedro</div>
              <div class="word-chip lesson-verb" style="grid-row:1;grid-column:4">dormiu</div>
              <div class="word-chip punctuation" style="grid-row:1;grid-column:5">.</div>
              <div class="annot-subject" style="grid-column:3;grid-row:2">Sujeito</div>
              <div class="annot-verb" style="grid-column:4;grid-row:2">Verbo</div>
              <div class="annot-predicate" style="grid-column:1;grid-row:3">Predicado</div>
              <div class="annot-predicate" style="grid-column:4;grid-row:3">Predicado</div>
            </div>
          </div>
          <p class="m3-sub" style="margin-top:8px">→ O predicado é formado por "Ontem" + "dormiu" (separados pelo sujeito)</p>
        </div>
        <p>Essas inversões tornam a análise mais difícil, porque o sujeito nem sempre aparece no início da oração. Por isso, as primeiras lições focaram na identificação do verbo e do sujeito.</p>
        <p>Até aqui trabalhamos principalmente com a ordem direta; agora, precisamos nos acostumar com as inversões presentes na ordem indireta.</p>
        <hr>
        <p><strong>Resumo rápido:</strong></p>
        <p>Veja como aplicar a análise na frase em ordem inversa: <em>"Ontem, dormiu o gato."</em></p>
        <div class="m3-example">
          <p><strong>1º</strong> Ache o verbo</p>
          <div class="sa-wrap" style="margin-top:8px">
            <div class="sentence-annotated" style="grid-template-columns:repeat(6,auto);grid-template-rows:auto auto">
              <div class="word-chip" style="grid-row:1;grid-column:1">Ontem</div>
              <div class="word-chip punctuation" style="grid-row:1;grid-column:2">,</div>
              <div class="word-chip lesson-verb" style="grid-row:1;grid-column:3">dormiu</div>
              <div class="word-chip" style="grid-row:1;grid-column:4">o</div>
              <div class="word-chip" style="grid-row:1;grid-column:5">gato</div>
              <div class="word-chip punctuation" style="grid-row:1;grid-column:6">.</div>
              <div class="annot-verb" style="grid-column:3;grid-row:2">Verbo</div>
            </div>
          </div>
        </div>
        <div class="m3-example">
          <p><strong>2º</strong> Identifique se é impessoal <em>(verbos impessoais: haver/existir, fazer/tempo, fenômenos da natureza)</em></p>
          <p class="m3-sub" style="margin-top:6px">→ <em>Dormir</em> não é impessoal — continue a análise.</p>
        </div>
        <div class="m3-example">
          <p><strong>3º</strong> Faça a pergunta: <em>Quem dormiu?</em></p>
          <p><strong>4º</strong> A resposta é o sujeito: <em>"o gato"</em></p>
          <div class="sa-wrap" style="margin-top:8px">
            <div class="sentence-annotated" style="grid-template-columns:repeat(6,auto);grid-template-rows:auto auto">
              <div class="word-chip" style="grid-row:1;grid-column:1">Ontem</div>
              <div class="word-chip punctuation" style="grid-row:1;grid-column:2">,</div>
              <div class="word-chip lesson-verb" style="grid-row:1;grid-column:3">dormiu</div>
              <div class="word-chip correct-subject disabled" style="grid-row:1;grid-column:4">o</div>
              <div class="word-chip correct-subject disabled" style="grid-row:1;grid-column:5">gato</div>
              <div class="word-chip punctuation" style="grid-row:1;grid-column:6">.</div>
              <div class="annot-verb" style="grid-column:3;grid-row:2">Verbo</div>
              <div class="annot-subject" style="grid-column:4/span 2;grid-row:2">Sujeito</div>
            </div>
          </div>
        </div>
        <div class="m3-example">
          <p><strong>5º</strong> O que não é sujeito é o predicado, incluindo o verbo</p>
          <div class="sa-wrap" style="margin-top:8px">
            <div class="sentence-annotated" style="grid-template-columns:repeat(6,auto);grid-template-rows:auto auto auto">
              <div class="word-chip lesson-predicate" style="grid-row:1;grid-column:1">Ontem</div>
              <div class="word-chip punctuation" style="grid-row:1;grid-column:2">,</div>
              <div class="word-chip lesson-verb" style="grid-row:1;grid-column:3">dormiu</div>
              <div class="word-chip correct-subject disabled" style="grid-row:1;grid-column:4">o</div>
              <div class="word-chip correct-subject disabled" style="grid-row:1;grid-column:5">gato</div>
              <div class="word-chip punctuation" style="grid-row:1;grid-column:6">.</div>
              <div class="annot-verb" style="grid-column:3;grid-row:2">Verbo</div>
              <div class="annot-subject" style="grid-column:4/span 2;grid-row:2">Sujeito</div>
              <div class="annot-predicate" style="grid-column:1;grid-row:3">Predicado</div>
              <div class="annot-predicate" style="grid-column:3;grid-row:3">Predicado</div>
            </div>
          </div>
          <p class="m3-sub" style="margin-top:8px">→ O predicado é "Ontem" + "dormiu" (separados pelo sujeito)</p>
        </div>
      </div>
      <button type="button" class="btn-start" id="startModule5Btn">
        Iniciar exercícios <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>`;
  $('startModule5Btn').addEventListener('click', startModule5Quiz);
}

function startModule2Quiz() {
  state.m2phase     = 'quiz';
  state.m2current   = 0;
  state.m2activeSet = questions2.map((_, i) => i);
  state.m2results   = new Array(questions2.length).fill(null);
  state.m2points    = 0;
  state.m2pending   = { mode: 'verb', verbIdx: null, subjectIdxs: [] };
  state.phase       = 'module2-quiz';
  updateModule2Card();
  render();
  saveProgress();
}

function startModule3Quiz() {
  state.m3phase     = 'quiz';
  state.m3current   = 0;
  state.m3activeSet = questions3.map((_, i) => i);
  state.m3results   = new Array(questions3.length).fill(null);
  state.m3points    = 0;
  state.m3pending   = { mode: 'verb', verbIdx: null, subjectIdxs: [], predicateIdxs: [], predicateConfirmed: false };
  state.phase       = 'module3-quiz';
  updateModule3Card();
  render();
  saveProgress();
}

function startQuiz() {
  state.phase     = 'quiz';
  state.current   = 0;
  state.activeSet = questions.map((_, i) => i);
  state.results   = new Array(questions.length).fill(null);
  state.points    = 0;
  const el = $('statPontos'); if (el) el.textContent = state.points;
  updateStats();
  render();
  saveProgress();
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
             <button type="button" class="btn-nav btn-nav-primary" id="nextModuleBtn">
               Próximo módulo ${icons.right}
             </button>
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

  if (allClear) {
    $('nextModuleBtn').addEventListener('click', () => {
      state.m2unlocked = true;
      state.phase = 'module2-intro';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      render();
      saveProgress();
    });
  } else {
    $('practiceBtn').addEventListener('click', () => {
      wrongSet.forEach(i => { state.results[i] = null; });
      state.activeSet = wrongSet;
      state.current   = 0;
      state.phase     = 'quiz';
      updateStats();
      render();
      saveProgress();
    });
  }
}

// ── MODAL CONSULTAR LIÇÃO ────────────────────────────────────
function getLessonBodyHTML(module) {
  if (module === 1) return `
    <div class="lesson-body">
      <h3 class="lesson-title">Lição de Verbo</h3>
      <p>Verbo é a palavra que expressa <strong>ação</strong>, <strong>estado</strong>, <strong>mudança de estado</strong> ou <strong>fenômeno da natureza</strong>.<br>Ao ler uma frase ou texto, uma das primeiras coisas que devemos procurar é o verbo, pois ele dá movimento e sentido à oração.<br>(Oração é toda frase que possui um verbo.)</p>
      <p>Por exemplo, ao ouvir a palavra correr, imaginamos alguém se movimentando rapidamente de um lugar para outro. Isso representa uma ação.</p>
      <p><strong>Os verbos podem indicar:</strong></p>
      <div class="lesson-table">
        <div class="lesson-row"><span class="lesson-col-key"><strong>Ação</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">correr, cantar</span></div>
        <div class="lesson-row"><span class="lesson-col-key"><strong>Estado</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">ser, estar</span></div>
        <div class="lesson-row"><span class="lesson-col-key"><strong>Mudança de estado</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">ficar, tornar-se</span></div>
        <div class="lesson-row"><span class="lesson-col-key"><strong>Fenômeno da natureza</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">chover, amanhecer</span></div>
      </div>
      <hr>
      <p>Os verbos no <strong>infinitivo</strong> aparecem em sua forma original, sem indicar tempo, pessoa ou número.<br>Essa é a forma considerada "padrão" da palavra.</p>
      <p><strong>Normalmente, os infinitivos terminam em:</strong></p>
      <div class="lesson-table">
        <div class="lesson-row"><span class="lesson-col-key">-<strong>ar</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">1ª conjugação</span></div>
        <div class="lesson-row"><span class="lesson-col-key">-<strong>er</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">2ª conjugação</span></div>
        <div class="lesson-row"><span class="lesson-col-key">-<strong>ir</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">3ª conjugação</span></div>
      </div>
      <p>Existe também o verbo pôr, que antigamente era escrito como poer. Por isso, ele pertence à 2ª conjugação.</p>
      <hr>
      <p><strong>Como identificar um verbo na oração?</strong></p>
      <p>Uma maneira simples é transformar a palavra em infinitivo:</p>
      <div class="lesson-table">
        <div class="lesson-row"><span class="lesson-col-key"><strong>cantou</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">cantar → terminação <strong>-ar</strong> → 1ª conjugação</span></div>
        <div class="lesson-row"><span class="lesson-col-key"><strong>bebeu</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">beber → terminação <strong>-er</strong> → 2ª conjugação</span></div>
        <div class="lesson-row"><span class="lesson-col-key"><strong>partiu</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">partir → terminação <strong>-ir</strong> → 3ª conjugação</span></div>
      </div>
      <p>Você pode fazer isso com qualquer palavra que suspeite ser um verbo. Assim, fica mais fácil praticar e reconhecer cada caso.</p>
      <hr>
      <p>Depois, observe o que a palavra expressa: <strong>ação</strong>, <strong>estado</strong>, <strong>mudança de estado</strong> ou <strong>fenômeno da natureza</strong>.<br>Mas atenção: isso depende do contexto da frase. Um mesmo verbo pode apresentar sentidos diferentes, então é importante compreender primeiro o significado da oração.</p>
      <p><strong>Exemplos:</strong></p>
      <div class="lesson-table">
        <div class="lesson-row"><span class="lesson-col-key"><em>João correu no parque.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>correu</em> → <em>correr</em> → <strong>ação</strong></span></div>
        <div class="lesson-row"><span class="lesson-col-key"><em>Maria estava cansada.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>estava</em> → <em>estar</em> → <strong>estado</strong></span></div>
        <div class="lesson-row"><span class="lesson-col-key"><em>O leite ficou azedo.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>ficou</em> → <em>ficar</em> → <strong>mudança de estado</strong></span></div>
        <div class="lesson-row"><span class="lesson-col-key"><em>Amanheceu muito cedo hoje.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>amanheceu</em> → <em>amanhecer</em> → <strong>fenômeno da natureza</strong></span></div>
      </div>
      <hr>
      <p><strong>Exemplos de como o sentido do verbo pode mudar conforme o contexto:</strong></p>
      <div class="lesson-table">
        <div class="lesson-row"><span class="lesson-col-key"><em>Pedro ficou em casa ontem.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>ficou</em> → <em>ficar</em> → <strong>permanência</strong></span></div>
        <div class="lesson-row"><span class="lesson-col-key"><em>Ana ficou triste com a notícia.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>ficou</em> → <em>ficar</em> → <strong>mudança de estado</strong></span></div>
        <div class="lesson-row"><span class="lesson-col-key"><em>Carlos passou pela escola cedo.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>passou</em> → <em>passar</em> → <strong>movimento</strong></span></div>
        <div class="lesson-row"><span class="lesson-col-key"><em>Carlos passou na prova.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>passou</em> → <em>passar</em> → <strong>aprovação</strong></span></div>
        <div class="lesson-row"><span class="lesson-col-key"><em>Marina estava na cozinha.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>estava</em> → <em>estar</em> → <strong>estado/localização</strong></span></div>
        <div class="lesson-row"><span class="lesson-col-key"><em>Marina estava estudando.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>estava</em> → <em>estar</em> → <strong>auxiliar de ação contínua</strong></span></div>
        <div class="lesson-row"><span class="lesson-col-key"><em>O menino virou a esquina.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>virou</em> → <em>virar</em> → <strong>movimento</strong></span></div>
        <div class="lesson-row"><span class="lesson-col-key"><em>O leite virou queijo.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>virou</em> → <em>virar</em> → <strong>transformação/mudança de estado</strong></span></div>
      </div>
    </div>`;
  if (module === 3) return `
    <div class="lesson-body">
      <h3 class="lesson-title">Lição de Estudo do predicado</h3>
      <p>Você já sabe identificar o verbo e o sujeito. Também entendeu que o verbo "fala" sobre o sujeito.</p>
      <p>Depois de identificar o sujeito, surge outra pergunta: o que são o verbo e as outras palavras da oração?<br>Esse conjunto recebe o nome de <strong>predicado</strong>.</p>
      <p>O <strong>predicado</strong> é tudo aquilo que se declara sobre o sujeito. É a parte da oração que contém a informação, ação, característica ou estado relacionado a ele.<br>O próprio verbo faz parte do predicado.</p>
      <hr>
      <p><strong>Como identificar o predicado?</strong></p>
      <div class="lesson-table">
        <div class="lesson-row"><span class="lesson-col-key">1º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Encontre o <strong>verbo</strong> da frase.</span></div>
        <div class="lesson-row"><span class="lesson-col-key">2º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Faça a pergunta: <strong>quem + verbo?</strong> ou <strong>o que + verbo?</strong></span></div>
        <div class="lesson-row"><span class="lesson-col-key">3º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">A resposta é o <strong>sujeito</strong>.</span></div>
        <div class="lesson-row"><span class="lesson-col-key">4º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Tudo que sobra na oração (com o verbo) é o <strong>predicado</strong>.</span></div>
      </div>
      <p><strong>Exemplos:</strong></p>
      <div class="m3-example">
        <p><strong>Frase:</strong> <em>Maria estudou ontem.</em></p>
        <p class="m3-step-label">1ª etapa — identificar o verbo:</p>
        <p class="m3-step-value">verbo: <strong>estudou</strong></p>
        <p class="m3-step-label">2ª etapa — perguntar ao verbo "quem estudou?":</p>
        <p class="m3-step-value">Sujeito: <strong>Maria</strong></p>
        <p class="m3-step-label">3ª — o que não é sujeito é predicado:</p>
        <p class="m3-step-value">Predicado: <strong>estudou ontem</strong> <span class="m3-concl">(inclusive o verbo faz parte do predicado)</span></p>
        <div class="sa-wrap" style="margin-top:16px">
          <div class="sentence-annotated" style="grid-template-columns:repeat(4,auto);grid-template-rows:auto auto auto">
            <div class="word-chip correct-subject disabled" style="grid-row:1;grid-column:1">Maria</div>
            <div class="word-chip lesson-verb" style="grid-row:1;grid-column:2">estudou</div>
            <div class="word-chip lesson-predicate" style="grid-row:1;grid-column:3">ontem</div>
            <div class="word-chip punctuation" style="grid-row:1;grid-column:4">.</div>
            <div class="annot-subject" style="grid-column:1;grid-row:2">Sujeito</div>
            <div class="annot-verb" style="grid-column:2;grid-row:2">Verbo</div>
            <div class="annot-predicate" style="grid-column:2/span 2;grid-row:3">Predicado</div>
          </div>
        </div>
      </div>
      <div class="m3-example">
        <p><strong>Frase:</strong> <em>O cachorro latiu muito durante a noite.</em></p>
        <p class="m3-step-value">Verbo: <strong>latiu</strong> — Sujeito: <strong>O cachorro</strong> — Predicado: <strong>latiu muito durante a noite</strong></p>
        <div class="sa-wrap" style="margin-top:16px">
          <div class="sentence-annotated" style="grid-template-columns:repeat(8,auto);grid-template-rows:auto auto auto">
            <div class="word-chip correct-subject disabled" style="grid-row:1;grid-column:1">O</div>
            <div class="word-chip correct-subject disabled" style="grid-row:1;grid-column:2">cachorro</div>
            <div class="word-chip lesson-verb" style="grid-row:1;grid-column:3">latiu</div>
            <div class="word-chip lesson-predicate" style="grid-row:1;grid-column:4">muito</div>
            <div class="word-chip lesson-predicate" style="grid-row:1;grid-column:5">durante</div>
            <div class="word-chip lesson-predicate" style="grid-row:1;grid-column:6">a</div>
            <div class="word-chip lesson-predicate" style="grid-row:1;grid-column:7">noite</div>
            <div class="word-chip punctuation" style="grid-row:1;grid-column:8">.</div>
            <div class="annot-subject" style="grid-column:1/span 2;grid-row:2">Sujeito</div>
            <div class="annot-verb" style="grid-column:3;grid-row:2">Verbo</div>
            <div class="annot-predicate" style="grid-column:3/span 5;grid-row:3">Predicado</div>
          </div>
        </div>
      </div>
      <hr>
      <p>O predicado sempre traz alguma informação sobre o sujeito. Ele pode indicar:</p>
      <div class="lesson-table">
        <div class="lesson-row"><span class="lesson-col-key"><strong>Ação</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>João correu rapidamente.</em></span></div>
        <div class="lesson-row"><span class="lesson-col-key"><strong>Estado</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>Ana está cansada.</em></span></div>
        <div class="lesson-row"><span class="lesson-col-key"><strong>Característica</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>O menino é inteligente.</em></span></div>
        <div class="lesson-row"><span class="lesson-col-key"><strong>Mudança de estado</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>O menino ficou feliz.</em></span></div>
      </div>
    </div>`;
  if (module === 4) return `
    <div class="lesson-body">
      <h3 class="lesson-title">Lição de Orações sem sujeito (Resumo)</h3>
      <p>Alguns verbos são <strong>impessoais</strong> e formam orações sem sujeito. Os principais casos são:</p>
      <p><strong>1. Haver = existir ou ocorrer</strong></p>
      <div class="lesson-table">
        <div class="lesson-row"><span class="lesson-col-key"><em>Há livros na mesa.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">existem livros — sem sujeito</span></div>
        <div class="lesson-row"><span class="lesson-col-key"><em>Houve um acidente.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">ocorreu um acidente — sem sujeito</span></div>
      </div>
      <p><strong>2. Fazer/Haver indicando tempo</strong></p>
      <div class="lesson-table">
        <div class="lesson-row"><span class="lesson-col-key"><em>Faz três dias.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">tempo decorrido — sem sujeito</span></div>
        <div class="lesson-row"><span class="lesson-col-key"><em>Há dois anos.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">tempo decorrido — sem sujeito</span></div>
      </div>
      <p><strong>3. Fenômenos da natureza</strong></p>
      <div class="lesson-table">
        <div class="lesson-row"><span class="lesson-col-key"><em>Choveu ontem.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">fenômeno natural — sem sujeito</span></div>
        <div class="lesson-row"><span class="lesson-col-key"><em>Nevou na serra.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">fenômeno natural — sem sujeito</span></div>
      </div>
      <p><strong>Atenção:</strong> "Existir" e "ocorrer" admitem sujeito (<em>Os problemas existem. O acidente ocorreu.</em>). Compare sempre com o impessoal "há/houve".</p>
    </div>`;
  if (module === 5) return `
    <div class="lesson-body">
      <h3 class="lesson-title">Lição de Inversão da ordem (Resumo)</h3>
      <p>Na <strong>ordem direta</strong>, a estrutura mais comum é: <strong>Sujeito + Verbo + Complemento</strong>.</p>
      <p>Na <strong>ordem inversa</strong>, os termos aparecem deslocados. O sujeito pode vir depois do verbo ou até no final da frase.</p>
      <p><strong>Como analisar frases em ordem inversa:</strong></p>
      <div class="lesson-table">
        <div class="lesson-row"><span class="lesson-col-key">1º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Encontre o <strong>verbo</strong>.</span></div>
        <div class="lesson-row"><span class="lesson-col-key">2º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Pergunte: <strong>Quem + verbo?</strong> — a resposta é o <strong>sujeito</strong>.</span></div>
        <div class="lesson-row"><span class="lesson-col-key">3º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Tudo que não é sujeito (inclusive o verbo e adjuntos) é o <strong>predicado</strong>.</span></div>
      </div>
      <p><strong>Exemplos de inversão:</strong></p>
      <div class="lesson-table">
        <div class="lesson-row"><span class="lesson-col-key"><em>Chegou o ônibus.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Verbo: chegou · Sujeito: o ônibus · Predicado: chegou</span></div>
        <div class="lesson-row"><span class="lesson-col-key"><em>Ontem, dormiu o gato.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Verbo: dormiu · Sujeito: o gato · Predicado: Ontem dormiu</span></div>
        <div class="lesson-row"><span class="lesson-col-key"><em>Na festa, chegaram os convidados.</em></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Verbo: chegaram · Sujeito: os convidados · Predicado: Na festa chegaram</span></div>
      </div>
      <p><strong>Atenção:</strong> O predicado pode ser separado pelo sujeito. Adjuntos adverbiais (lugar, tempo, modo) fazem parte do predicado mesmo quando aparecem antes do verbo.</p>
    </div>`;
  if (module === 7) return `
    <div class="lesson-body">
      <h3 class="lesson-title">Núcleo simples do sujeito</h3>
      <h3 class="lesson-title" style="margin-top:12px">Justificativa da lição</h3>
      <p>Até o momento, estudamos como identificar o sujeito da oração: a palavra ou grupo de palavras sobre o qual se faz uma declaração.</p>
      <p>Para localizar o sujeito, seguimos este caminho:</p>
      <div class="lesson-table">
        <div class="lesson-row"><span class="lesson-col-key">1º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">encontrar o <strong>verbo</strong></span></div>
        <div class="lesson-row"><span class="lesson-col-key">2º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">fazer a pergunta ao verbo</span></div>
        <div class="lesson-row"><span class="lesson-col-key">3º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">a resposta será o <strong>sujeito</strong></span></div>
      </div>
      <p>Agora vamos aprofundar essa análise. Além de localizar o sujeito, precisamos descobrir qual é a <strong>palavra principal</strong> dentro dele. Essa palavra principal recebe o nome de <strong>núcleo do sujeito</strong>.</p>
      <p>Estudar o núcleo é importante porque ele concentra a ideia central do sujeito e será essencial nas próximas etapas, especialmente ao analisar a relação entre sujeito e verbo (estudo de concordância). Por isso, precisamos reconhecer:</p>
      <div class="lesson-table">
        <div class="lesson-row"><span class="lesson-col-key">1º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">onde está o sujeito</span></div>
        <div class="lesson-row"><span class="lesson-col-key">2º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">qual é sua palavra principal</span></div>
        <div class="lesson-row"><span class="lesson-col-key">3º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">quais palavras apenas acompanham esse núcleo</span></div>
      </div>
      <hr style="margin:16px 0;border:none;border-top:1px solid var(--border-color)">
      <h3 class="lesson-title">Núcleo do sujeito</h3>
      <p>O núcleo do sujeito é a <strong>palavra principal</strong> do sujeito.</p>
      <div class="m3-example"><p><em>O aluno chegou cedo.</em></p></div>
      <div class="lesson-table">
        <div class="lesson-row"><span class="lesson-col-key">Verbo</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">chegou</span></div>
        <div class="lesson-row"><span class="lesson-col-key">Pergunta</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Quem chegou?</span></div>
        <div class="lesson-row"><span class="lesson-col-key">Sujeito</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">o aluno</span></div>
        <div class="lesson-row"><span class="lesson-col-key">Núcleo</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><strong>aluno</strong> — <em>o</em> sozinho não transmite ideia completa</span></div>
      </div>
      <hr style="margin:16px 0;border:none;border-top:1px solid var(--border-color)">
      <h3 class="lesson-title">Palavras que acompanham o núcleo</h3>
      <div class="lesson-table">
        <div class="lesson-row"><span class="lesson-col-key">Determinar</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>o aluno</em> — "o" acompanha aluno</span></div>
        <div class="lesson-row"><span class="lesson-col-key">Caracterizar</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>aluno dedicado</em> — "dedicado" caracteriza aluno</span></div>
        <div class="lesson-row"><span class="lesson-col-key">Especificar</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>aluno da turma</em> — "da turma" especifica aluno; núcleo continua sendo aluno</span></div>
      </div>
      <hr style="margin:16px 0;border:none;border-top:1px solid var(--border-color)">
      <h3 class="lesson-title">Regras importantes</h3>
      <div class="lesson-table">
        <div class="lesson-row"><span class="lesson-col-key">1.</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">O núcleo normalmente é um <strong>substantivo</strong> — <em>A professora explicou a matéria.</em> → núcleo: <strong>professora</strong></span></div>
        <div class="lesson-row"><span class="lesson-col-key">2.</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">O núcleo pode ser uma palavra que ocupa o lugar do substantivo — <em>Ele chegou cedo.</em> → núcleo: <strong>ele</strong></span></div>
        <div class="lesson-row"><span class="lesson-col-key">3.</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">O sujeito <strong>não</strong> vem introduzido por preposição — <em>com os alunos</em> ✘ não é sujeito</span></div>
        <div class="lesson-row"><span class="lesson-col-key">4.</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">O <strong>artigo não é núcleo</strong> — <em>A menina sorriu.</em> → núcleo: <strong>menina</strong></span></div>
        <div class="lesson-row"><span class="lesson-col-key">5.</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Ao retirar os acompanhantes, a ideia central costuma permanecer — <em>Os alunos atentos da turma chegaram cedo.</em> → núcleo: <strong>alunos</strong></span></div>
      </div>
      <hr style="margin:16px 0;border:none;border-top:1px solid var(--border-color)">
      <h3 class="lesson-title">Como identificar o núcleo</h3>
      <div class="lesson-table">
        <div class="lesson-row"><span class="lesson-col-key">1º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Encontre o <strong>verbo</strong></span></div>
        <div class="lesson-row"><span class="lesson-col-key">2º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Pergunte: <strong>Quem + verbo?</strong> → resposta = sujeito</span></div>
        <div class="lesson-row"><span class="lesson-col-key">3º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Observe o sujeito e pergunte: <strong>qual é a palavra principal?</strong></span></div>
        <div class="lesson-row"><span class="lesson-col-key">4º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Retire mentalmente as palavras que acompanham — a restante é o <strong>núcleo</strong></span></div>
      </div>
      <hr style="margin:16px 0;border:none;border-top:1px solid var(--border-color)">
      <h3 class="lesson-title">Resumo</h3>
      <div class="lesson-table">
        <div class="lesson-row"><span class="lesson-col-key">Sujeito</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">termo sobre o qual se declara algo</span></div>
        <div class="lesson-row"><span class="lesson-col-key">Núcleo</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">palavra principal do sujeito</span></div>
        <div class="lesson-row"><span class="lesson-col-key">Acompanhantes</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">determinam, caracterizam ou especificam</span></div>
      </div>
      <div class="tip-box" style="margin-top:16px">
        <i class="fa-regular fa-star"></i>
        <div style="display:flex;flex-direction:column;gap:4px">
          <span>✅ Normalmente substantivo</span>
          <span>✅ Pode ocupar lugar do substantivo</span>
          <span>✅ Artigo não é núcleo</span>
          <span>✅ Sujeito não vem com preposição</span>
        </div>
      </div>
    </div>`;
  if (module === 6) return `
    <div class="lesson-body">
      <h3 class="lesson-title">Locução Verbal</h3>
      <p><strong>Locução verbal</strong> é um conjunto de dois ou mais verbos que funcionam juntos como uma unidade, formando o núcleo verbal da oração.</p>
      <p>A estrutura básica é:</p>
      <div class="m3-example"><p><strong>Verbo auxiliar + verbo principal</strong></p></div>
      <p>O verbo <strong>principal</strong> aparece em uma das formas nominais: <strong>infinitivo</strong>, <strong>gerúndio</strong> ou <strong>particípio</strong>.</p>
      <hr>
      <p><strong>Infinitivo</strong> — terminação <strong>-ar, -er, -ir</strong> (ação como potencialidade):</p>
      <div class="lesson-table">
        <div class="lesson-row"><span class="lesson-col-key">estudar</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Ela vai <em>estudar</em>.</span></div>
        <div class="lesson-row"><span class="lesson-col-key">correr</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Ele pode <em>correr</em>.</span></div>
        <div class="lesson-row"><span class="lesson-col-key">partir</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Vamos <em>partir</em> cedo.</span></div>
      </div>
      <hr>
      <p><strong>Gerúndio</strong> — terminação <strong>-ando, -endo, -indo</strong> (ação em andamento):</p>
      <div class="lesson-table">
        <div class="lesson-row"><span class="lesson-col-key">estudando</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">estudar → est<strong>ando</strong></span></div>
        <div class="lesson-row"><span class="lesson-col-key">correndo</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">correr → corr<strong>endo</strong></span></div>
        <div class="lesson-row"><span class="lesson-col-key">partindo</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">partir → part<strong>indo</strong></span></div>
      </div>
      <hr>
      <p><strong>Particípio</strong> — terminação <strong>-ado, -ido</strong> (ação concluída):</p>
      <div class="lesson-table">
        <div class="lesson-row"><span class="lesson-col-key">estudado</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">estudar → estud<strong>ado</strong></span></div>
        <div class="lesson-row"><span class="lesson-col-key">vendido</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">vender → vend<strong>ido</strong></span></div>
        <div class="lesson-row"><span class="lesson-col-key">partido</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">partir → part<strong>ido</strong></span></div>
      </div>
      <hr>
      <p><strong>Exemplos de locuções:</strong></p>
      <div class="lesson-grid">
        <span class="lg-key"><em>estava dormindo</em></span><span class="lg-arrow">→</span><span class="lg-val">auxiliar + gerúndio</span>
        <span class="lg-key"><em>vai viajar</em></span><span class="lg-arrow">→</span><span class="lg-val">auxiliar + infinitivo</span>
        <span class="lg-key"><em>tinha comido</em></span><span class="lg-arrow">→</span><span class="lg-val">auxiliar + particípio</span>
        <span class="lg-key"><em>vão ser regadas</em></span><span class="lg-arrow">→</span><span class="lg-val">dois auxiliares + particípio</span>
      </div>
    </div>`;
  return `
    <div class="lesson-body">
      <h3 class="lesson-title">Lição de Sujeito <span class="lesson-title-sub">(Versão Resumida)</span></h3>
      <p>Agora que você já sabe identificar o verbo, ficará mais fácil encontrar o sujeito.</p>
      <p>O sujeito é <strong>quem pratica a ação, sofre a ação ou o termo sujeito é sobre quem se fala</strong> na frase.</p>
      <p><strong>Como identificar o sujeito em uma frase ou texto?</strong></p>
      <div class="lesson-table">
        <div class="lesson-row"><span class="lesson-col-key">1º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Encontre o <strong>verbo</strong> da frase.</span></div>
        <div class="lesson-row"><span class="lesson-col-key">2º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Faça a pergunta: <strong>quem + verbo?</strong> ou <strong>o que + verbo?</strong></span></div>
        <div class="lesson-row"><span class="lesson-col-key">3º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">A resposta será o <strong>sujeito</strong>.</span></div>
      </div>
      <p><strong>Exemplos:</strong></p>
      <div class="lesson-grid">
        <span class="lg-key"><em>Maria estudou ontem.</em></span><span class="lg-arrow">→</span><span class="lg-val">Quem estudou? <strong>Maria</strong></span>
        <span class="lg-key"><em>O cachorro latiu muito.</em></span><span class="lg-arrow">→</span><span class="lg-val">Quem latiu? <strong>o cachorro</strong></span>
        <span class="lg-key"><em>As crianças brincaram na rua.</em></span><span class="lg-arrow">→</span><span class="lg-val">Quem brincou? <strong>as crianças</strong></span>
      </div>
      <p><strong>O sujeito pode ser:</strong></p>
      <div class="lesson-table">
        <div class="lesson-row"><span class="lesson-col-key">pessoa</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>Maria, o menino, elas…</em></span></div>
        <div class="lesson-row"><span class="lesson-col-key">animal</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>o cachorro, a abelha…</em></span></div>
        <div class="lesson-row"><span class="lesson-col-key">objeto</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>o carro, o computador…</em></span></div>
      </div>
      <p><strong>Resumo:</strong> O sujeito é o termo da frase sobre o qual se declara algo. Geralmente, é quem faz a ação do verbo ou de quem se fala.</p>
    </div>`;
}

function openLessonModal(module) {
  const overlay = document.getElementById('lessonModal');
  const title   = document.getElementById('lessonModalTitle');
  const body    = document.getElementById('lessonModalBody');
  title.textContent = module === 1 ? 'Lição de Verbo'
    : module === 3 ? 'Lição de Estudo do predicado'
    : module === 4 ? 'Lição de Orações sem sujeito'
    : module === 5 ? 'Lição de Inversão da ordem'
    : module === 6 ? 'Lição de Locução Verbal'
    : module === 7 ? 'Lição de Núcleo simples do sujeito'
    : 'Lição de Sujeito (Versão Resumida)';
  body.innerHTML = getLessonBodyHTML(module);
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeLessonModal() {
  document.getElementById('lessonModal').style.display = 'none';
  document.body.style.overflow = '';
}

(function initLessonModal() {
  document.getElementById('lessonModalClose').addEventListener('click', closeLessonModal);
  document.getElementById('lessonModal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeLessonModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLessonModal();
  });
})();

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
    <button type="button" class="btn-lesson-hint" id="btnLessonHint">
      <i class="fa-solid fa-book-open"></i> Consultar lição
    </button>
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

  $('btnLessonHint').addEventListener('click', () => openLessonModal(1));
  $('prevBtn').addEventListener('click', () => navigate(-1));
  $('nextBtn').addEventListener('click', () => {
    if (isLast) { state.phase = 'results'; render(); saveProgress(); }
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

// ── CADERNO DE ERROS ─────────────────────────────────────────
function updateErrorNotebook() {
  const count1 = Object.keys(state.errorNotebook).length;
  const count2 = Object.keys(state.m2errorNotebook).length;
  const count3 = Object.keys(state.m3errorNotebook).length;
  const count4 = Object.keys(state.m4errorNotebook).length;
  const count5 = Object.keys(state.m5errorNotebook).length;
  const count6 = Object.keys(state.m6errorNotebook).length;
  const count  = count1 + count2 + count3 + count4 + count5 + count6;
  const badge        = $('cadernoErrorBadge');
  const countEl      = $('cadernoErrorCount');
  const progressText = $('cadernoProgressText');
  const progressFill = $('cadernoProgressFill');
  if (badge)        badge.style.display = count > 0 ? 'flex' : 'none';
  if (countEl)      countEl.textContent = count;
  if (progressText) progressText.textContent = count === 0 ? '0 erros' : `${count} erro${count !== 1 ? 's' : ''}`;
  const totalQ = questions.length + questions2.length + questions3.length + questions4.length + questions5.length;
  if (progressFill) progressFill.style.width = count === 0 ? '0%' : `${Math.round(count / totalQ * 100)}%`;
  if (state.phase === 'error-notebook') renderErrorNotebookPage();
}

// ── MODAL DESEMPENHO DETALHADO ───────────────────────────────
function showPerformanceModal() {
  const total     = questions.length;
  const correct   = state.results.filter(r => r && r.correct).length;
  const wrong     = state.results.filter(r => r && !r.correct).length;
  const blank     = state.results.filter(r => r === null).length;
  const pct       = total > 0 ? Math.round(correct / total * 100) : 0;
  const streak    = computeStreak(state.activityLog);

  function diffClass(d) {
    if (!d) return '';
    const s = d.toLowerCase();
    if (s.includes('fácil') || s.includes('facil')) return 'facil';
    if (s.includes('médio') || s.includes('medio')) return 'medio';
    return 'avancado';
  }

  const rowsHTML = questions.map((q, i) => {
    const r = state.results[i];
    const cls = r === null ? 'blank' : r.correct ? 'correct' : 'wrong';
    const statusText = r === null
      ? '<i class="fa-solid fa-circle" style="font-size:8px"></i> Em branco'
      : r.correct
        ? '<i class="fa-solid fa-check-circle"></i> Correto'
        : '<i class="fa-solid fa-times-circle"></i> Errado';
    const diff = q.difficulty
      ? `<span class="perf-diff ${diffClass(q.difficulty)}">${q.difficulty}</span>`
      : '';
    const shortText = q.text.replace(/<[^>]+>/g, '').substring(0, 55);
    return `<div class="perf-qrow ${cls}">
      <span class="perf-qnum">Q${i + 1}</span>
      ${diff}
      <span class="perf-qtext">${shortText}</span>
      <span class="perf-qstatus">${statusText}</span>
    </div>`;
  }).join('');

  const overlay = document.createElement('div');
  overlay.className = 'setup-overlay';
  overlay.id = 'perfModalOverlay';
  overlay.innerHTML = `
    <div class="perf-modal">
      <div class="perf-modal-header">
        <h2><i class="fa-solid fa-chart-column" style="color:var(--primary-main);margin-right:8px"></i>Desempenho Detalhado</h2>
        <button class="perf-close" id="perfCloseBtn"><i class="fa-solid fa-xmark"></i></button>
      </div>

      <div class="perf-summary">
        <div class="perf-summary-card green">
          <div class="psv">${pct}%</div>
          <div class="psl">de acerto</div>
        </div>
        <div class="perf-summary-card purple">
          <div class="psv">${state.points}</div>
          <div class="psl">pontos</div>
        </div>
        <div class="perf-summary-card">
          <div class="psv">${streak === 1 ? '1 dia' : streak + ' dias'}</div>
          <div class="psl">sequência</div>
        </div>
      </div>

      <div class="stats-list" style="background:var(--bg-page);border-radius:12px;padding:14px 16px;">
        <div class="stat-row">
          <div class="stat-label"><i class="fa-solid fa-check-circle"></i> Acertos</div>
          <div class="stat-value" style="color:var(--success-green)">${correct}</div>
        </div>
        <div class="stat-row">
          <div class="stat-label"><i class="fa-solid fa-times-circle"></i> Erros</div>
          <div class="stat-value" style="color:var(--error-red)">${wrong}</div>
        </div>
        <div class="stat-row">
          <div class="stat-label"><i class="fa-solid fa-circle" style="font-size:10px"></i> Em branco</div>
          <div class="stat-value">${blank}</div>
        </div>
      </div>

      <p class="perf-section-title">Por questão</p>
      <div class="perf-qlist">${rowsHTML}</div>
    </div>`;

  document.body.appendChild(overlay);
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
  document.getElementById('perfCloseBtn').addEventListener('click', () => overlay.remove());
}

// ── CADERNO: MONTAR FILA DE QUESTÕES ─────────────────────────
function buildCadernoQueue() {
  const q = [];
  Object.keys(state.errorNotebook).sort((a,b)=>+a-+b).forEach(i => q.push({mod:1, qIdx:+i}));
  Object.keys(state.m2errorNotebook).sort((a,b)=>+a-+b).forEach(i => q.push({mod:2, qIdx:+i}));
  Object.keys(state.m3errorNotebook).sort((a,b)=>+a-+b).forEach(i => q.push({mod:3, qIdx:+i}));
  Object.keys(state.m4errorNotebook).sort((a,b)=>+a-+b).forEach(i => q.push({mod:4, qIdx:+i}));
  Object.keys(state.m5errorNotebook).sort((a,b)=>+a-+b).forEach(i => q.push({mod:5, qIdx:+i}));
  Object.keys(state.m6errorNotebook).sort((a,b)=>+a-+b).forEach(i => q.push({mod:6, qIdx:+i}));
  Object.keys(state.m7errorNotebook).sort((a,b)=>+a-+b).forEach(i => q.push({mod:7, qIdx:+i}));
  return q;
}

function cadernoResetPending() {
  state.cadernoPending   = { mode: 'verb', verbIdx: null, subjectIdxs: [], predicateIdxs: [], noSubject: false, predicateConfirmed: false, nucleoIdx: null };
  state.cadernoM6Pending = { locuIndices: [] };
}

function cadernoExit() {
  state.phase = 'error-notebook';
  state.cadernoQueue = [];
  state.cadernoCurrent = 0;
  state.cadernoAnswered = {};
  cadernoResetPending();
  render();
}

// ── CADERNO: RENDERIZAR QUESTÃO ───────────────────────────────
function renderCadernoQuestion() {
  const item = state.cadernoQueue[state.cadernoCurrent];
  if (!item) { cadernoExit(); return; }
  const { mod, qIdx } = item;
  const total    = state.cadernoQueue.length;
  const pos      = state.cadernoCurrent + 1;
  const key      = `${mod}-${qIdx}`;
  const answered = state.cadernoAnswered[key];
  const modColor = mod === 1 ? '#7c3aed' : mod === 4 ? '#0d9488' : mod === 5 ? '#7c3aed' : mod === 7 ? '#ef4444' : '#3b82f6';
  const modNames = { 1: 'Módulo 1 — Verbos', 2: 'Módulo 2 — Sujeito', 3: 'Módulo 3 — Predicado', 4: 'Módulo 4 — Orações', 5: 'Módulo 5 — Inversão', 6: 'Módulo 6 — Locução', 7: 'Módulo 7 — Núcleo simples' };
  const modLabel = modNames[mod] || `Módulo ${mod}`;

  let bodyHTML = '';
  if (mod === 1) {
    const q = questions[qIdx];
    bodyHTML = q.type === 'word-select' ? cadernoWordSelectHTML(q, answered) : cadernoMCHTML(q, answered);
  } else if (mod === 2) {
    bodyHTML = cadernoDualSelectHTML(questions2[qIdx], answered);
  } else if (mod === 3) {
    bodyHTML = cadernoTriSelectHTML(questions3[qIdx], answered, false);
  } else if (mod === 5) {
    bodyHTML = cadernoTriSelectHTML(questions5[qIdx], answered, false);
  } else if (mod === 6) {
    const q6 = questions6[qIdx];
    bodyHTML = q6.type === 'sense-select'
      ? cadernoSenseSelectHTML(q6, answered)
      : cadernoLocSelectHTML(q6, answered);
  } else if (mod === 7) {
    bodyHTML = cadernoNucleoSelectHTML(questions7[qIdx], answered);
  } else {
    bodyHTML = cadernoTriSelectHTML(questions4[qIdx], answered, true);
  }

  $('quizContainer').innerHTML = `
    <div class="lesson-screen">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;flex-wrap:wrap">
        <span style="background:${modColor}18;color:${modColor};font-size:12px;padding:3px 10px;border-radius:20px;font-weight:700">${modLabel}</span>
        <button type="button" class="btn-lesson-hint" id="cadernoLessonBtn"><i class="fa-solid fa-book-open"></i> Consultar lição</button>
        <span style="font-size:13px;color:var(--text-gray);margin-left:auto">Questão ${pos} de ${total}</span>
        <button type="button" class="btn-nav enp-back" id="cadernoBackBtn" style="padding:4px 10px;font-size:13px">${icons.left} Caderno</button>
      </div>
      ${bodyHTML}
      ${answered ? `<div class="bottom-actions">
        <button type="button" class="btn-nav" id="cadernoBackBtn2">${icons.left} Voltar ao caderno</button>
        <button type="button" class="btn-nav btn-nav-primary" id="cadernoNextBtn">
          ${pos < total ? `Próxima questão ${icons.right}` : `${icons.check} Concluir prática`}
        </button></div>` : ''}
    </div>`;

  document.querySelectorAll('#cadernoBackBtn,#cadernoBackBtn2').forEach(b => {
    if (b) b.addEventListener('click', cadernoExit);
  });
  $('cadernoLessonBtn').addEventListener('click', () => openLessonModal(mod));

  if (answered) {
    $('cadernoNextBtn').addEventListener('click', () => {
      if (pos < total) { state.cadernoCurrent++; cadernoResetPending(); render(); }
      else             { cadernoExit(); }
    });
    return;
  }

  if (mod === 1) {
    const q = questions[qIdx];
    if (q.type === 'word-select') setupCadernoWordSelect(q, qIdx, key);
    else                          setupCadernoMC(q, qIdx, key);
  } else if (mod === 2) {
    setupCadernoDualSelect(questions2[qIdx], qIdx, key, state.m2errorNotebook);
  } else if (mod === 3) {
    setupCadernoTriSelect(questions3[qIdx], qIdx, key, false, 3);
  } else if (mod === 5) {
    setupCadernoTriSelect(questions5[qIdx], qIdx, key, false, 5);
  } else if (mod === 6) {
    const q6 = questions6[qIdx];
    if (q6.type === 'sense-select') setupCadernoSenseSelect(q6, qIdx, key);
    else setupCadernoLocSelect(q6, qIdx, key);
  } else if (mod === 7) {
    setupCadernoNucleoSelect(questions7[qIdx], qIdx, key, state.m7errorNotebook);
  } else {
    setupCadernoTriSelect(questions4[qIdx], qIdx, key, true, 4);
  }
}

// ── CADERNO: M1 MÚLTIPLA ESCOLHA ─────────────────────────────
function cadernoMCHTML(q, answered) {
  const diffCls = q.difficulty === 'Médio' ? ' difficulty-medium' : q.difficulty === 'Difícil' ? ' difficulty-hard' : '';
  const answersHTML = q.answers.map((a, i) => {
    let cls = 'answer';
    let mark = '';
    if (answered) {
      cls += ' disabled';
      if (a.correct)                                       { cls += ' correct'; mark = `<span class="check-mark">${icons.check}</span>`; }
      else if (i === answered.selected && !answered.correct) { cls += ' wrong';   mark = `<span class="wrong-mark">${icons.x}</span>`; }
    }
    return `<button type="button" class="${cls}" data-cadmc="${i}"${answered ? ' disabled' : ''}>
      <span class="letter">${a.letter}</span><span>${a.text}</span>${mark}
    </button>`;
  }).join('');
  const header = `<div class="difficulty${diffCls}">${icons.bars} ${q.difficulty}</div>
    <p class="question-title">${q.text}</p>
    <div class="answers">${answersHTML}</div>`;
  if (!answered) return header;
  const hintsHTML = q.answers.map(ans => `
    <div class="hint-row">
      <span class="hint-letter${ans.correct ? ' correct' : ''}">${ans.letter}</span>
      <span class="hint-label${ans.correct ? ' correct' : ''}">${ans.hint}</span>
      ${ans.correct ? `<span class="hint-check">${icons.check}</span>` : ''}
    </div>`).join('');
  return `${header}
    <div class="feedback${answered.correct ? '' : ' wrong'}">
      <div class="feedback-icon">${answered.correct ? icons.check : icons.x}</div>
      <div class="feedback-content">
        <h2>${answered.correct ? 'Resposta correta!' : 'Resposta incorreta!'}</h2>
        <p>${q.feedback}</p>
        ${q.example ? `<p>${q.example}</p>` : ''}
        <div class="hints-breakdown">
          <p class="hints-title">O que cada alternativa descrevia:</p>
          <div class="hints-list">${hintsHTML}</div>
        </div>
      </div>
    </div>`;
}

function setupCadernoMC(q, qIdx, key) {
  document.querySelectorAll('button[data-cadmc]').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = +btn.dataset.cadmc;
      const correct = q.answers[i].correct;
      state.cadernoAnswered[key] = { correct, selected: i };
      if (!correct) state.errorNotebook[qIdx] = (state.errorNotebook[qIdx] || 0) + 1;
      recordActivity(); updateErrorNotebook(); saveProgress(); render();
    });
  });
}

// ── CADERNO: M1 WORD-SELECT ───────────────────────────────────
function cadernoWordSelectHTML(q, answered) {
  const diffCls = q.difficulty === 'Médio' ? ' difficulty-medium' : q.difficulty === 'Difícil' ? ' difficulty-hard' : '';
  const chipsHTML = q.sentence.map((word, idx) => {
    if (PUNCT.has(word)) return `<span class="word-chip punctuation">${word}</span>`;
    let cls = 'word-chip';
    if (answered) {
      cls += ' disabled';
      if (idx === q.correctIndex)                              cls += ' correct';
      else if (idx === answered.selected && !answered.correct) cls += ' wrong';
    }
    return `<span class="${cls}" data-cadws="${idx}">${word}</span>`;
  }).join('');
  const instruction = answered ? '' : `<p class="word-select-instruction">Clique na palavra que é um <strong>verbo</strong></p>`;
  const header = `<div class="difficulty${diffCls}">${icons.bars} ${q.difficulty}</div>
    <p class="question-title">${q.text}</p>
    ${instruction}<div class="sentence-display">${chipsHTML}</div>`;
  if (!answered) return header;
  const hintsHTML = q.wordClassHints.map(h => `
    <div class="hint-row">
      <span class="wh-word${h.isVerb ? ' correct' : ''}">${h.word}</span>
      <span class="wh-arrow">→</span>
      <span class="hint-label${h.isVerb ? ' correct' : ''}">${h.wordClass}</span>
      ${h.isVerb ? `<span class="hint-check">${icons.check}</span>` : ''}
    </div>`).join('');
  return `${header}
    <div class="feedback${answered.correct ? '' : ' wrong'}">
      <div class="feedback-icon">${answered.correct ? icons.check : icons.x}</div>
      <div class="feedback-content">
        <h2>${answered.correct ? 'Correto!' : 'Incorreto!'}</h2>
        <p>${q.feedback}</p>
        ${q.example ? `<p>${q.example}</p>` : ''}
        <div class="hints-breakdown">
          <p class="hints-title">Classe de cada palavra da frase:</p>
          <div class="hints-list">${hintsHTML}</div>
        </div>
      </div>
    </div>`;
}

function setupCadernoWordSelect(q, qIdx, key) {
  document.querySelectorAll('[data-cadws]').forEach(chip => {
    const i = +chip.dataset.cadws;
    if (PUNCT.has(q.sentence[i])) return;
    chip.addEventListener('click', () => {
      const correct = i === q.correctIndex;
      state.cadernoAnswered[key] = { correct, selected: i };
      if (!correct) state.errorNotebook[qIdx] = (state.errorNotebook[qIdx] || 0) + 1;
      recordActivity(); updateErrorNotebook(); saveProgress(); render();
    });
  });
}

// ── CADERNO: M2 DUAL-SELECT ───────────────────────────────────
function cadernoDualSelectHTML(q, answered) {
  const diffCls = q.difficulty === 'Médio' ? ' difficulty-medium' : q.difficulty === 'Difícil' ? ' difficulty-hard' : '';
  if (!answered) {
    const { mode, verbIdx, subjectIdxs } = state.cadernoPending;
    const canConfirm = verbIdx !== null && subjectIdxs.length > 0;
    const sentenceHTML = buildAnnotatedSentence(q,
      (word, idx) => {
        let cls = 'word-chip';
        if (idx === verbIdx)                cls += ' verb-pending';
        else if (subjectIdxs.includes(idx)) cls += ' subject-pending';
        return `<span class="${cls}" data-caddual="${idx}" style="grid-column:${idx+1};grid-row:1">${word}</span>`;
      },
      () => {
        let a = '';
        if (verbIdx !== null) a += `<div class="annot-verb" style="grid-column:${verbIdx+1};grid-row:2">Verbo</div>`;
        if (subjectIdxs.length > 0) {
          const sorted = [...subjectIdxs].sort((a,b) => a-b);
          a += `<div class="annot-subject" style="grid-column:${sorted[0]+1}/span ${sorted[sorted.length-1]-sorted[0]+1};grid-row:2">Sujeito</div>`;
        }
        return a;
      }
    );
    const verbBtnCls = mode === 'verb'    ? 'dual-mode-btn active-verb'    : 'dual-mode-btn';
    const subjBtnCls = mode === 'subject' ? 'dual-mode-btn active-subject' : 'dual-mode-btn';
    return `
      <div class="difficulty${diffCls}">${icons.bars} ${q.difficulty}</div>
      <p class="question-title">${q.text || 'Identifique o verbo e o sujeito:'}</p>
      <div class="dual-mode-toggle">
        <button type="button" class="${verbBtnCls}" id="cPhaseVerb">
          <i class="fa-solid fa-circle" style="color:#2563eb;font-size:8px"></i> VERBO
        </button>
        <button type="button" class="${subjBtnCls}" id="cPhaseSuj">
          <i class="fa-solid fa-circle" style="color:#dc2626;font-size:8px"></i> SUJEITO
        </button>
      </div>
      ${sentenceHTML}
      <button type="button" class="dual-confirm-btn" id="cadernoConfirmBtn"${canConfirm ? '' : ' disabled'}>
        ${icons.check} Confirmar resposta
      </button>`;
  }
  // Questão respondida
  const sentenceHTML = buildAnnotatedSentence(q,
    (word, idx) => {
      let cls = 'word-chip disabled';
      const isV = idx === q.verbIndex;
      const isS = q.subjectIndices.includes(idx);
      const wasV = idx === answered.verbSelected;
      const wasS = answered.subjectSelected && answered.subjectSelected.includes(idx);
      if      (isV)           cls += ' correct-verb';
      else if (isS)           cls += ' correct-subject';
      else if (wasV && !isV)  cls += ' wrong-verb';
      else if (wasS && !isS)  cls += ' wrong-subject';
      return `<span class="${cls}" style="grid-column:${idx+1};grid-row:1">${word}</span>`;
    },
    (q) => {
      const subjStart = Math.min(...q.subjectIndices) + 1;
      const subjSpan  = Math.max(...q.subjectIndices) - Math.min(...q.subjectIndices) + 1;
      return `<div class="annot-verb" style="grid-column:${q.verbIndex+1};grid-row:2">Verbo</div>` +
             `<div class="annot-subject" style="grid-column:${subjStart}/span ${subjSpan};grid-row:2">Sujeito</div>`;
    }
  );
  const hintsHTML = q.sentence.map((word, idx) => {
    if (PUNCT.has(word)) return '';
    const isVerb = idx === q.verbIndex;
    const isSubj = q.subjectIndices.includes(idx);
    const role = isVerb ? 'Verbo' : isSubj ? 'Sujeito' : '—';
    return `<div class="hint-row">
      <span class="wh-word${isVerb || isSubj ? ' correct' : ''}">${word}</span>
      <span class="wh-arrow">→</span>
      <span class="hint-label${isVerb ? ' correct' : isSubj ? ' subject-hint' : ''}">${role}</span>
      ${isVerb || isSubj ? `<span class="hint-check">${icons.check}</span>` : ''}
    </div>`;
  }).filter(h => h).join('');
  const userVerbWord  = answered.verbSelected != null ? q.sentence[answered.verbSelected] : '—';
  const userSubjWords = answered.subjectSelected && answered.subjectSelected.length > 0
    ? [...answered.subjectSelected].sort((a,b)=>a-b).map(i=>q.sentence[i]).join(' ') : '—';
  return `
    <div class="difficulty${diffCls}">${icons.bars} ${q.difficulty}</div>
    <p class="question-title">${q.text || 'Identifique o verbo e o sujeito:'}</p>
    ${sentenceHTML}
    <div class="feedback${answered.correct ? '' : ' wrong'}">
      <div class="feedback-icon">${answered.correct ? icons.check : icons.x}</div>
      <div class="feedback-content">
        <h2>${answered.correct ? 'Correto!' : 'Incorreto!'}</h2>
        ${!answered.correct ? `<p class="user-answer-recap"><span class="recap-verb">Verbo: <strong>${userVerbWord}</strong></span><span class="recap-sep">·</span><span class="recap-subject">Sujeito: <strong>${userSubjWords}</strong></span></p>` : ''}
        <p>${q.feedback}</p>
        ${q.example ? `<p>${q.example}</p>` : ''}
        <div class="hints-breakdown">
          <p class="hints-title">Papel de cada palavra:</p>
          <div class="hints-list">${hintsHTML}</div>
        </div>
      </div>
    </div>`;
}

function setupCadernoDualSelect(q, qIdx, key, errorNotebook) {
  if (!errorNotebook) errorNotebook = state.m2errorNotebook;
  document.querySelectorAll('[data-caddual]').forEach(chip => {
    chip.addEventListener('click', () => {
      const i = +chip.dataset.caddual;
      if (PUNCT.has(q.sentence[i])) return;
      const p = state.cadernoPending;
      if (p.mode === 'verb') {
        if (p.verbIdx === i) { p.verbIdx = null; }
        else { p.subjectIdxs = p.subjectIdxs.filter(x=>x!==i); p.verbIdx = i; p.mode = 'subject'; }
      } else {
        if (i === p.verbIdx) return;
        const idx = p.subjectIdxs.indexOf(i);
        idx === -1 ? p.subjectIdxs.push(i) : p.subjectIdxs.splice(idx, 1);
      }
      render();
    });
  });
  const bv = document.getElementById('cPhaseVerb');
  const bs = document.getElementById('cPhaseSuj');
  if (bv) bv.addEventListener('click', () => { state.cadernoPending.mode = 'verb';    render(); });
  if (bs) bs.addEventListener('click', () => { state.cadernoPending.mode = 'subject'; render(); });
  const cf = document.getElementById('cadernoConfirmBtn');
  if (cf) cf.addEventListener('click', () => {
    const p = state.cadernoPending;
    if (p.verbIdx === null || p.subjectIdxs.length === 0) return;
    const vOk = p.verbIdx === q.verbIndex;
    const sOk = p.subjectIdxs.length === q.subjectIndices.length && q.subjectIndices.every(i => p.subjectIdxs.includes(i));
    const ok  = vOk && sOk;
    state.cadernoAnswered[key] = { correct: ok, verbCorrect: vOk, subjectCorrect: sOk, verbSelected: p.verbIdx, subjectSelected: [...p.subjectIdxs] };
    if (!ok) errorNotebook[qIdx] = (errorNotebook[qIdx] || 0) + 1;
    recordActivity(); updateErrorNotebook(); saveProgress(); render();
  });
}

// ── CADERNO: M7 NUCLEO-SELECT ────────────────────────────────
function cadernoNucleoSelectHTML(q, answered) {
  const diffCls = q.difficulty === 'Médio' ? ' difficulty-medium' : q.difficulty === 'Difícil' ? ' difficulty-hard' : '';
  if (!answered) {
    const { mode, verbIdx, subjectIdxs, nucleoIdx } = state.cadernoPending;
    const canConfirm = verbIdx !== null && subjectIdxs.length > 0 && nucleoIdx !== null;
    const sentenceHTML = buildAnnotatedSentence3(q,
      (word, idx) => {
        let cls = 'word-chip';
        if (idx === verbIdx) {
          cls += ' verb-pending';
        } else if (idx === nucleoIdx) {
          cls += ' nucleo-pending';
        } else if (subjectIdxs.includes(idx)) {
          cls += ' subject-pending';
        }
        if (mode === 'nucleo' && idx !== verbIdx && !subjectIdxs.includes(idx)) cls += ' disabled';
        return `<span class="${cls}" data-cad7="${idx}" style="grid-column:${idx+1};grid-row:1">${word}</span>`;
      },
      () => {
        let a = '';
        if (verbIdx !== null) a += `<div class="annot-verb" style="grid-column:${verbIdx+1};grid-row:2">Verbo</div>`;
        if (subjectIdxs.length > 0) {
          const sorted = [...subjectIdxs].sort((a,b) => a-b);
          a += `<div class="annot-subject" style="grid-column:${sorted[0]+1}/span ${sorted[sorted.length-1]-sorted[0]+1};grid-row:2">Sujeito</div>`;
        }
        if (nucleoIdx !== null) a += `<div class="annot-nucleo" style="grid-column:${nucleoIdx+1}">Núcleo</div>`;
        return a;
      }
    );
    const verbBtnCls   = mode === 'verb'    ? 'dual-mode-btn active-verb'    : 'dual-mode-btn';
    const subjBtnCls   = mode === 'subject' ? 'dual-mode-btn active-subject' : 'dual-mode-btn';
    const nucleoBtnCls = mode === 'nucleo'  ? 'dual-mode-btn active-nucleo'  : 'dual-mode-btn';
    return `
      <div class="difficulty${diffCls}">${icons.bars} ${q.difficulty}</div>
      <p class="question-title">${q.text}</p>
      <div class="dual-mode-toggle">
        <button type="button" class="${verbBtnCls}" id="cPhaseVerb7">
          <i class="fa-solid fa-circle" style="color:#2563eb;font-size:8px"></i> VERBO
        </button>
        <button type="button" class="${subjBtnCls}" id="cPhaseSuj7">
          <i class="fa-solid fa-circle" style="color:#dc2626;font-size:8px"></i> SUJEITO
        </button>
        <button type="button" class="${nucleoBtnCls}" id="cPhaseNucleo7">
          <i class="fa-solid fa-circle" style="color:#d97706;font-size:8px"></i> NÚCLEO
        </button>
      </div>
      ${sentenceHTML}
      <button type="button" class="dual-confirm-btn" id="cadernoConfirmBtn"${canConfirm ? '' : ' disabled'}>
        ${icons.check} Confirmar resposta
      </button>`;
  }
  // Questão respondida
  const sentenceHTML = buildAnnotatedSentence3(q,
    (word, idx) => {
      let cls = 'word-chip disabled';
      const isV = idx === q.verbIndex;
      const isS = q.subjectIndices.includes(idx);
      const isN = idx === q.nucleoIndex;
      const wasV = idx === answered.verbSelected;
      const wasS = answered.subjectSelected && answered.subjectSelected.includes(idx);
      if      (isV)           cls += ' correct-verb';
      else if (isN && isS)    cls += ' correct-nucleo';
      else if (isS)           cls += ' correct-subject';
      else if (wasV && !isV)  cls += ' wrong-verb';
      else if (wasS && !isS)  cls += ' wrong-subject';
      return `<span class="${cls}" style="grid-column:${idx+1};grid-row:1">${word}</span>`;
    },
    () => {
      const sMin  = Math.min(...q.subjectIndices) + 1;
      const sSpan = Math.max(...q.subjectIndices) - Math.min(...q.subjectIndices) + 1;
      return `<div class="annot-verb" style="grid-column:${q.verbIndex+1};grid-row:2">Verbo</div>` +
             `<div class="annot-subject" style="grid-column:${sMin}/span ${sSpan};grid-row:2">Sujeito</div>` +
             `<div class="annot-nucleo" style="grid-column:${q.nucleoIndex+1}">Núcleo</div>`;
    }
  );
  const hintsHTML = q.sentence.map((word, idx) => {
    if (PUNCT.has(word)) return '';
    const isV = idx === q.verbIndex;
    const isN = idx === q.nucleoIndex;
    const isS = q.subjectIndices.includes(idx);
    const role = isV ? 'Verbo' : isN ? 'Núcleo' : isS ? 'Sujeito' : '—';
    const ok = isV || isS;
    return `<div class="hint-row">
      <span class="wh-word${ok ? ' correct' : ''}">${word}</span>
      <span class="wh-arrow">→</span>
      <span class="hint-label${isV ? ' correct' : isN ? ' correct' : isS ? ' subject-hint' : ''}">${role}</span>
      ${ok ? `<span class="hint-check">${icons.check}</span>` : ''}
    </div>`;
  }).filter(h => h).join('');
  const uv = answered.verbSelected != null ? q.sentence[answered.verbSelected] : '—';
  const us = answered.subjectSelected && answered.subjectSelected.length > 0
    ? [...answered.subjectSelected].sort((a,b) => a-b).map(i => q.sentence[i]).join(' ') : '—';
  const un = answered.nucleoSelected != null ? q.sentence[answered.nucleoSelected] : '—';
  return `
    <div class="difficulty${diffCls}">${icons.bars} ${q.difficulty}</div>
    <p class="question-title">${q.text}</p>
    ${sentenceHTML}
    <div class="feedback${answered.correct ? '' : ' wrong'}">
      <div class="feedback-icon">${answered.correct ? icons.check : icons.x}</div>
      <div class="feedback-content">
        <h2>${answered.correct ? 'Correto!' : 'Incorreto!'}</h2>
        ${!answered.correct ? `<p class="user-answer-recap">
          <span class="recap-verb">Verbo: <strong>${uv}</strong></span><span class="recap-sep">·</span>
          <span class="recap-subject">Sujeito: <strong>${us}</strong></span><span class="recap-sep">·</span>
          <span style="color:#d97706;font-size:13px">Núcleo: <strong>${un}</strong></span>
        </p>` : ''}
        <p>${q.feedback}</p>
        ${q.example ? `<p>${q.example}</p>` : ''}
        <div class="hints-breakdown">
          <p class="hints-title">Papel de cada palavra:</p>
          <div class="hints-list">${hintsHTML}</div>
        </div>
      </div>
    </div>`;
}

function setupCadernoNucleoSelect(q, qIdx, key, errorNotebook) {
  document.querySelectorAll('[data-cad7]').forEach(chip => {
    chip.addEventListener('click', () => {
      const i = +chip.dataset.cad7;
      if (PUNCT.has(q.sentence[i])) return;
      const p = state.cadernoPending;
      if (p.mode === 'verb') {
        if (p.verbIdx === i) { p.verbIdx = null; }
        else {
          p.subjectIdxs = p.subjectIdxs.filter(x => x !== i);
          if (p.nucleoIdx === i) p.nucleoIdx = null;
          p.verbIdx = i;
          p.mode = 'subject';
        }
      } else if (p.mode === 'subject') {
        if (i === p.verbIdx) return;
        const idx = p.subjectIdxs.indexOf(i);
        if (idx === -1) { p.subjectIdxs.push(i); }
        else { p.subjectIdxs.splice(idx, 1); if (p.nucleoIdx === i) p.nucleoIdx = null; }
      } else if (p.mode === 'nucleo') {
        if (!p.subjectIdxs.includes(i)) return;
        p.nucleoIdx = (p.nucleoIdx === i) ? null : i;
      }
      render();
    });
  });
  const bv = document.getElementById('cPhaseVerb7');
  const bs = document.getElementById('cPhaseSuj7');
  const bn = document.getElementById('cPhaseNucleo7');
  if (bv) bv.addEventListener('click', () => { state.cadernoPending.mode = 'verb';    render(); });
  if (bs) bs.addEventListener('click', () => { state.cadernoPending.mode = 'subject'; render(); });
  if (bn) bn.addEventListener('click', () => { state.cadernoPending.mode = 'nucleo';  render(); });
  const cf = document.getElementById('cadernoConfirmBtn');
  if (cf) cf.addEventListener('click', () => {
    const p = state.cadernoPending;
    if (p.verbIdx === null || p.subjectIdxs.length === 0 || p.nucleoIdx === null) return;
    const vOk = p.verbIdx === q.verbIndex;
    const sOk = p.subjectIdxs.length === q.subjectIndices.length && q.subjectIndices.every(i => p.subjectIdxs.includes(i));
    const nOk = p.nucleoIdx === q.nucleoIndex;
    const ok  = vOk && sOk && nOk;
    state.cadernoAnswered[key] = {
      correct: ok, verbCorrect: vOk, subjectCorrect: sOk, nucleoCorrect: nOk,
      verbSelected: p.verbIdx, subjectSelected: [...p.subjectIdxs], nucleoSelected: p.nucleoIdx
    };
    if (!ok) errorNotebook[qIdx] = (errorNotebook[qIdx] || 0) + 1;
    recordActivity(); updateErrorNotebook(); saveProgress(); render();
  });
}

// ── CADERNO: M3/M4 TRI-SELECT ────────────────────────────────
function cadernoTriSelectHTML(q, answered, hasNoSubject) {
  const diffCls = q.difficulty === 'Médio' ? ' difficulty-medium' : q.difficulty === 'Difícil' ? ' difficulty-hard' : '';
  if (!answered) {
    const { mode, verbIdx, subjectIdxs, predicateIdxs, noSubject, predicateConfirmed } = state.cadernoPending;
    const canConfirm = verbIdx !== null && (subjectIdxs.length > 0 || noSubject);
    const sentenceHTML = buildAnnotatedSentence3(q,
      (word, idx) => {
        let cls = 'word-chip';
        if (idx === verbIdx)                                     cls += (mode === 'predicate' && predicateConfirmed) ? ' predicate-pending' : ' verb-pending';
        else if (!noSubject && subjectIdxs.includes(idx))       cls += ' subject-pending';
        else if (predicateIdxs.includes(idx))                   cls += ' predicate-pending';
        return `<span class="${cls}" data-cadtri="${idx}" style="grid-column:${idx+1};grid-row:1">${word}</span>`;
      },
      () => {
        let a = '';
        if (!noSubject && subjectIdxs.length > 0) {
          const sorted = [...subjectIdxs].sort((a,b) => a-b);
          a += `<div class="annot-subject" style="grid-column:${sorted[0]+1}/span ${sorted[sorted.length-1]-sorted[0]+1};grid-row:2">Sujeito</div>`;
        }
        if (verbIdx !== null) a += `<div class="annot-verb" style="grid-column:${verbIdx+1};grid-row:2">Verbo</div>`;
        if (predicateConfirmed || predicateIdxs.some(i => i !== verbIdx)) {
          const renderIdxs = predicateIdxs;
          if (renderIdxs.length > 0) {
            const sorted = [...renderIdxs].sort((a,b) => a-b);
            const segs = []; let seg = [sorted[0]];
            for (let i = 1; i < sorted.length; i++) {
              const prev = sorted[i-1], curr = sorted[i];
              let ok = true;
              for (let j = prev+1; j < curr; j++) if (!PUNCT.has(q.sentence[j])) { ok = false; break; }
              ok ? seg.push(curr) : (segs.push(seg), seg = [curr]);
            }
            segs.push(seg);
            segs.forEach(g => { a += `<div class="annot-predicate" style="grid-column:${g[0]+1}/span ${g[g.length-1]-g[0]+1};grid-row:3">Predicado</div>`; });
          }
        }
        return a;
      }
    );
    const verbBtnCls = mode === 'verb'                       ? 'dual-mode-btn active-verb'      : 'dual-mode-btn';
    const subjBtnCls = mode === 'subject' && !noSubject      ? 'dual-mode-btn active-subject'   : 'dual-mode-btn';
    const predBtnCls = mode === 'predicate'                  ? 'dual-mode-btn active-predicate' : 'dual-mode-btn';
    const noSbjCls   = noSubject ? 'm4-nosubj-btn active' : 'm4-nosubj-btn';
    return `
      <div class="difficulty${diffCls}">${icons.bars} ${q.difficulty}</div>
      <p class="question-title">${q.text || 'Identifique o verbo, sujeito e predicado:'}</p>
      <div class="dual-mode-toggle">
        <button type="button" class="${verbBtnCls}" id="cPhaseVerb">
          <i class="fa-solid fa-circle" style="color:#2563eb;font-size:8px"></i> VERBO
        </button>
        <button type="button" class="${subjBtnCls}" id="cPhaseSuj">
          <i class="fa-solid fa-circle" style="color:#dc2626;font-size:8px"></i> SUJEITO
        </button>
        <button type="button" class="${predBtnCls}" id="cPhasePred">
          <i class="fa-solid fa-circle" style="color:#7c3aed;font-size:8px"></i> PREDICADO
        </button>
      </div>
      ${hasNoSubject ? `<div class="m4-nosubj-row">
        <button type="button" class="${noSbjCls}" id="cNoSubjBtn">
          <i class="fa-solid fa-ban" style="font-size:10px"></i>
          ${noSubject ? 'Marcado: sem sujeito' : 'Oração sem sujeito'}
        </button>
      </div>` : ''}
      ${sentenceHTML}
      <button type="button" class="dual-confirm-btn" id="cadernoConfirmBtn"${canConfirm ? '' : ' disabled'}>
        ${icons.check} Confirmar resposta
      </button>`;
  }
  // Questão respondida
  const sentenceHTML = buildAnnotatedSentence3(q,
    (word, idx) => {
      let cls = 'word-chip disabled';
      const isVerb = idx === q.verbIndex;
      const isSubj = !q.noSubject && q.subjectIndices.includes(idx);
      const isPred = q.predicateIndices.includes(idx);
      const wasVerb = idx === answered.verbSelected;
      const wasSubj = !answered.noSubjectSelected && answered.subjectSelected && answered.subjectSelected.includes(idx);
      const wasPred = answered.predicateSelected && answered.predicateSelected.includes(idx);
      if      (isVerb)              cls += ' correct-verb';
      else if (isSubj)              cls += ' correct-subject';
      else if (isPred)              cls += ' lesson-predicate';
      else if (wasVerb && !isVerb)  cls += ' wrong-verb';
      else if (wasSubj && !isSubj)  cls += ' wrong-subject';
      else if (wasPred && !isPred)  cls += ' wrong-subject';
      return `<span class="${cls}" style="grid-column:${idx+1};grid-row:1">${word}</span>`;
    },
    (q) => {
      let a = '';
      if (!q.noSubject && q.subjectIndices.length > 0) {
        const subjStart = Math.min(...q.subjectIndices) + 1;
        const subjSpan  = Math.max(...q.subjectIndices) - Math.min(...q.subjectIndices) + 1;
        a += `<div class="annot-subject" style="grid-column:${subjStart}/span ${subjSpan};grid-row:2">Sujeito</div>`;
      }
      a += `<div class="annot-verb" style="grid-column:${q.verbIndex+1};grid-row:2">Verbo</div>`;
      if (q.predicateIndices.length > 0) {
        const predStart = Math.min(...q.predicateIndices) + 1;
        const predSpan  = Math.max(...q.predicateIndices) - Math.min(...q.predicateIndices) + 1;
        a += `<div class="annot-predicate" style="grid-column:${predStart}/span ${predSpan};grid-row:3">Predicado</div>`;
      }
      return a;
    }
  );
  const hintsHTML = q.sentence.map((word, idx) => {
    if (PUNCT.has(word)) return '';
    const isVerb = idx === q.verbIndex;
    const isSubj = !q.noSubject && q.subjectIndices.includes(idx);
    const isPred = q.predicateIndices.includes(idx) && !isVerb;
    const role   = isVerb ? 'Verbo' : isSubj ? 'Sujeito' : isPred ? 'Predicado' : '—';
    const cls    = isVerb ? ' correct' : isSubj ? ' subject-hint' : isPred ? ' predicate-hint' : '';
    return `<div class="hint-row">
      <span class="wh-word${isVerb || isSubj || isPred ? ' correct' : ''}">${word}</span>
      <span class="wh-arrow">→</span>
      <span class="hint-label${cls}">${role}</span>
      ${isVerb || isSubj || isPred ? `<span class="hint-check">${icons.check}</span>` : ''}
    </div>`;
  }).filter(h => h).join('');
  const userVerbWord  = answered.verbSelected != null ? q.sentence[answered.verbSelected] : '—';
  const userSubjWords = answered.noSubjectSelected ? 'Sem sujeito'
    : (answered.subjectSelected && answered.subjectSelected.length > 0
        ? [...answered.subjectSelected].sort((a,b)=>a-b).map(i=>q.sentence[i]).join(' ') : '—');
  const userPredWords = answered.predicateSelected && answered.predicateSelected.length > 0
    ? [...answered.predicateSelected].sort((a,b)=>a-b).map(i=>q.sentence[i]).join(' ') : '—';
  const noSubjLabel = q.noSubject
    ? `<div class="m4-nosubj-result-tag${answered.subjectCorrect ? '' : ' wrong'}">
        <i class="fa-solid fa-ban"></i>
        ${answered.subjectCorrect ? 'Correto: esta oração não possui sujeito' : 'Incorreto: esta oração não possui sujeito'}
      </div>` : '';
  return `
    <div class="difficulty${diffCls}">${icons.bars} ${q.difficulty}</div>
    <p class="question-title">${q.text || 'Identifique o verbo, sujeito e predicado:'}</p>
    ${sentenceHTML}
    ${noSubjLabel}
    <div class="feedback${answered.correct ? '' : ' wrong'}">
      <div class="feedback-icon">${answered.correct ? icons.check : icons.x}</div>
      <div class="feedback-content">
        <h2>${answered.correct ? 'Correto!' : 'Incorreto!'}</h2>
        ${!answered.correct ? `<p class="user-answer-recap">
          <span class="recap-verb">Verbo: <strong>${userVerbWord}</strong></span>
          <span class="recap-sep">·</span>
          <span class="recap-subject">Sujeito: <strong>${userSubjWords}</strong></span>
          <span class="recap-sep">·</span>
          <span>Predicado: <strong>${userPredWords}</strong></span>
        </p>` : ''}
        <p>${q.feedback}</p>
        ${q.example ? `<p>${q.example}</p>` : ''}
        <div class="hints-breakdown">
          <p class="hints-title">Papel de cada palavra:</p>
          <div class="hints-list">${hintsHTML}</div>
        </div>
      </div>
    </div>`;
}

function setupCadernoTriSelect(q, qIdx, key, hasNoSubject, mod) {
  document.querySelectorAll('[data-cadtri]').forEach(chip => {
    chip.addEventListener('click', () => {
      const i = +chip.dataset.cadtri;
      if (PUNCT.has(q.sentence[i])) return;
      const p = state.cadernoPending;
      if (p.mode === 'verb') {
        if (p.verbIdx === i) {
          p.predicateIdxs      = [];
          p.predicateConfirmed = false;
          p.verbIdx = null;
        } else {
          p.subjectIdxs        = p.subjectIdxs.filter(x => x !== i);
          p.predicateIdxs      = [];
          p.predicateConfirmed = false;
          p.verbIdx = i;
          p.mode = 'subject';
        }
      } else if (p.mode === 'subject') {
        if (p.noSubject || i === p.verbIdx) return;
        p.predicateIdxs = p.predicateIdxs.filter(x=>x!==i);
        const idx = p.subjectIdxs.indexOf(i); idx===-1 ? p.subjectIdxs.push(i) : p.subjectIdxs.splice(idx,1);
      } else {
        if (i === p.verbIdx) { p.predicateConfirmed = true; if (!p.predicateIdxs.includes(i)) p.predicateIdxs.push(i); }
        else if (!p.subjectIdxs.includes(i)) {
          const idx = p.predicateIdxs.indexOf(i); idx===-1 ? p.predicateIdxs.push(i) : p.predicateIdxs.splice(idx,1);
        }
      }
      render();
    });
  });
  const bv = document.getElementById('cPhaseVerb');
  const bs = document.getElementById('cPhaseSuj');
  const bp = document.getElementById('cPhasePred');
  const bn = document.getElementById('cNoSubjBtn');
  if (bv) bv.addEventListener('click', () => { state.cadernoPending.mode = 'verb';      render(); });
  if (bs) bs.addEventListener('click', () => { state.cadernoPending.mode = 'subject';   render(); });
  if (bp) bp.addEventListener('click', () => { state.cadernoPending.mode = 'predicate'; render(); });
  if (bn) bn.addEventListener('click', () => {
    const p = state.cadernoPending;
    if (p.noSubject) { p.noSubject = false; p.mode = 'subject'; }
    else             { p.noSubject = true; p.subjectIdxs = []; p.mode = 'predicate'; }
    render();
  });
  const cf = document.getElementById('cadernoConfirmBtn');
  if (cf) cf.addEventListener('click', () => {
    const p = state.cadernoPending;
    if (p.verbIdx === null) return;
    if (!p.noSubject && p.subjectIdxs.length === 0) return;
    const vOk = p.verbIdx === q.verbIndex;
    const pOk = p.predicateIdxs.length === q.predicateIndices.length && q.predicateIndices.every(i => p.predicateIdxs.includes(i));
    const sOk = q.noSubject ? p.noSubject : (!p.noSubject && p.subjectIdxs.length === q.subjectIndices.length && q.subjectIndices.every(i => p.subjectIdxs.includes(i)));
    const ok  = vOk && sOk && pOk;
    state.cadernoAnswered[key] = { correct: ok, verbCorrect: vOk, subjectCorrect: sOk, predicateCorrect: pOk, verbSelected: p.verbIdx, subjectSelected: [...p.subjectIdxs], predicateSelected: [...p.predicateIdxs], noSubjectSelected: p.noSubject };
    if (!ok) {
      if (mod === 5)    state.m5errorNotebook[qIdx] = (state.m5errorNotebook[qIdx] || 0) + 1;
      else if (hasNoSubject) state.m4errorNotebook[qIdx] = (state.m4errorNotebook[qIdx] || 0) + 1;
      else              state.m3errorNotebook[qIdx] = (state.m3errorNotebook[qIdx] || 0) + 1;
    }
    recordActivity(); updateErrorNotebook(); saveProgress(); render();
  });
}

// ── CADERNO: M6 LOCUÇÃO-SELECT ────────────────────────────────
function cadernoLocSelectHTML(q, answered) {
  const diffCls = q.difficulty === 'Médio' ? ' difficulty-medium' : q.difficulty === 'Difícil' ? ' difficulty-hard' : '';
  if (!answered) {
    const { locuIndices } = state.cadernoM6Pending;
    const canConfirm = locuIndices.length >= 2;
    const sentenceHTML = buildAnnotatedSentence(q,
      (word, idx) => {
        let cls = 'word-chip';
        if (locuIndices.includes(idx)) cls += ' verb-pending';
        return `<span class="${cls}" data-cadloc="${idx}" style="grid-column:${idx+1};grid-row:1">${word}</span>`;
      },
      () => {
        if (locuIndices.length === 0) return '';
        const sorted = [...locuIndices].sort((a, b) => a - b);
        return `<div class="annot-verb" style="grid-column:${sorted[0]+1}/span ${sorted[sorted.length-1]-sorted[0]+1};grid-row:2">Locução Verbal</div>`;
      }
    );
    return `
      <div class="difficulty${diffCls}">${icons.bars} ${q.difficulty}</div>
      <p class="question-title">${q.text}</p>
      <p style="font-size:13px;color:var(--text-gray);margin:0 0 8px">Clique em <strong>todas</strong> as palavras que formam a locução verbal.</p>
      ${sentenceHTML}
      <button type="button" class="dual-confirm-btn" id="cadernoConfirmBtn"${canConfirm ? '' : ' disabled'}>
        ${icons.check} Confirmar locução verbal
      </button>`;
  }
  // Respondida
  const sentenceHTML = buildAnnotatedSentence(q,
    (word, idx) => {
      let cls = 'word-chip disabled';
      const isCorrect   = q.locuIndices.includes(idx);
      const wasSelected = answered.selected && answered.selected.includes(idx);
      if (isCorrect)                      cls += ' correct-verb';
      else if (wasSelected && !isCorrect) cls += ' wrong-verb';
      return `<span class="${cls}" style="grid-column:${idx+1};grid-row:1">${word}</span>`;
    },
    () => {
      const sorted = [...q.locuIndices].sort((a, b) => a - b);
      return `<div class="annot-verb" style="grid-column:${sorted[0]+1}/span ${sorted[sorted.length-1]-sorted[0]+1};grid-row:2">Locução Verbal</div>`;
    }
  );
  const locuWords = q.locuIndices.map(i => q.sentence[i]).join(' ');
  return `
    <div class="difficulty${diffCls}">${icons.bars} ${q.difficulty}</div>
    <p class="question-title">${q.text}</p>
    ${sentenceHTML}
    <div class="feedback${answered.correct ? '' : ' wrong'}">
      <div class="feedback-icon">${answered.correct ? icons.check : icons.x}</div>
      <div class="feedback-content">
        <h2>${answered.correct ? 'Correto!' : 'Incorreto!'}</h2>
        <p>A locução verbal é <strong>${locuWords}</strong> — <em>${q.auxVerb}</em> (auxiliar) + <em>${q.mainVerb}</em> (principal) na forma de ${q.verbType}.</p>
        <p>${q.feedback}</p>
      </div>
    </div>`;
}

function setupCadernoLocSelect(q, qIdx, key) {
  document.querySelectorAll('[data-cadloc]').forEach(chip => {
    chip.addEventListener('click', () => {
      const i = +chip.dataset.cadloc;
      if (PUNCT.has(q.sentence[i])) return;
      const loci = state.cadernoM6Pending.locuIndices;
      const idx = loci.indexOf(i);
      if (idx === -1) loci.push(i); else loci.splice(idx, 1);
      render();
    });
  });
  const cf = document.getElementById('cadernoConfirmBtn');
  if (cf) cf.addEventListener('click', () => {
    const selected = [...state.cadernoM6Pending.locuIndices];
    if (selected.length < 2) return;
    const correct = selected.length === q.locuIndices.length && q.locuIndices.every(i => selected.includes(i));
    state.cadernoAnswered[key] = { correct, selected };
    if (!correct) state.m6errorNotebook[qIdx] = (state.m6errorNotebook[qIdx] || 0) + 1;
    recordActivity(); updateErrorNotebook(); saveProgress(); render();
  });
}

// ── CADERNO: M6 SENSE-SELECT ──────────────────────────────────
function cadernoSenseSelectHTML(q, answered) {
  const diffCls = q.difficulty === 'Médio' ? ' difficulty-medium' : q.difficulty === 'Difícil' ? ' difficulty-hard' : '';

  const sentenceHTML = q.sentence.map((word, idx) => {
    const isLocu = q.locuIndices.includes(idx);
    const cls = isLocu ? 'word-chip lesson-verb' : (PUNCT.has(word) ? 'word-chip punctuation' : 'word-chip disabled');
    return `<span class="${cls}">${word}</span>`;
  }).join('');

  const optionsHTML = SENSE_OPTIONS.map(s => {
    if (!answered) {
      return `<button type="button" class="sense-option" data-cadsense="${s.key}">
        <span class="sense-label">${s.label}</span>
        <span class="sense-sub">${s.sub}</span>
      </button>`;
    }
    const isCorrect = s.key === q.correctSense;
    const wasWrong  = s.key === answered.selected && !answered.correct;
    let cls = 'sense-option disabled';
    if (isCorrect) cls += ' sense-correct';
    if (wasWrong)  cls += ' sense-wrong';
    const icon = isCorrect ? `<span class="sense-icon">${icons.check}</span>`
               : wasWrong  ? `<span class="sense-icon">${icons.x}</span>` : '';
    return `<button type="button" class="${cls}" disabled>
      <span class="sense-label">${s.label}</span>
      <span class="sense-sub">${s.sub}</span>
      ${icon}
    </button>`;
  }).join('');

  const header = `
    <div class="difficulty${diffCls}">${icons.bars} ${q.difficulty}</div>
    <p class="question-title">${q.text}</p>
    <div class="sense-sentence">${sentenceHTML}</div>
    ${!answered ? `<p class="sense-hint">A locução verbal está destacada. Qual é o seu sentido?</p>` : ''}
    <div class="sense-options">${optionsHTML}</div>`;

  if (!answered) return header;

  const locuWords  = q.locuIndices.map(i => q.sentence[i]).join(' ');
  const senseLabel = q.correctSense === 'andamento' ? 'ação em andamento (auxiliar + gerúndio)'
                   : q.correctSense === 'futura'    ? 'ação futura (auxiliar + infinitivo)'
                   :                                  'ação concluída (auxiliar + particípio)';
  return `${header}
    <div class="feedback${answered.correct ? '' : ' wrong'}">
      <div class="feedback-icon">${answered.correct ? icons.check : icons.x}</div>
      <div class="feedback-content">
        <h2>${answered.correct ? 'Correto!' : 'Incorreto!'}</h2>
        <p>A locução <strong>${locuWords}</strong> indica <strong>${senseLabel}</strong>.</p>
        <p>${q.feedback}</p>
      </div>
    </div>`;
}

function setupCadernoSenseSelect(q, qIdx, key) {
  document.querySelectorAll('[data-cadsense]').forEach(btn => {
    btn.addEventListener('click', () => {
      const senseKey = btn.dataset.cadsense;
      const correct  = senseKey === q.correctSense;
      state.cadernoAnswered[key] = { correct, selected: senseKey };
      if (!correct) state.m6errorNotebook[qIdx] = (state.m6errorNotebook[qIdx] || 0) + 1;
      recordActivity(); updateErrorNotebook(); saveProgress(); render();
    });
  });
}

// ── PÁGINA CADERNO DE ERROS ───────────────────────────────────
function renderErrorNotebookPage() {
  const entries1 = Object.entries(state.errorNotebook).sort((a, b) => Number(a[0]) - Number(b[0]));
  const entries2 = Object.entries(state.m2errorNotebook).sort((a, b) => Number(a[0]) - Number(b[0]));
  const entries3 = Object.entries(state.m3errorNotebook).sort((a, b) => Number(a[0]) - Number(b[0]));
  const entries4 = Object.entries(state.m4errorNotebook).sort((a, b) => Number(a[0]) - Number(b[0]));
  const entries5 = Object.entries(state.m5errorNotebook).sort((a, b) => Number(a[0]) - Number(b[0]));
  const entries6 = Object.entries(state.m6errorNotebook).sort((a, b) => Number(a[0]) - Number(b[0]));
  const entries7 = Object.entries(state.m7errorNotebook).sort((a, b) => Number(a[0]) - Number(b[0]));
  const totalErrors = entries1.length + entries2.length + entries3.length + entries4.length + entries5.length + entries6.length + entries7.length;

  function diffCls(d) {
    if (!d) return 'easy';
    const s = d.toLowerCase();
    return s.includes('médio') || s.includes('medio') ? 'medium' : s.includes('difícil') || s.includes('dificil') ? 'hard' : 'easy';
  }

  const cardsM1 = entries1.map(([qIdx, count]) => {
    const q = questions[Number(qIdx)];
    const num = Number(qIdx) + 1;
    const qText = q.text.replace(/<[^>]+>/g, '').replace(/&[^;]+;/g, ' ').trim();
    return `<div class="enp-card">
      <div class="enp-card-meta">
        <span class="enb-num">M1·Q${num}</span>
        <span class="enb-diff enb-diff-${diffCls(q.difficulty)}">${q.difficulty}</span>
        <span class="enb-count">${count}×</span>
      </div>
      <p class="enp-qtext">${qText}</p>
      <button type="button" class="btn-nav enp-goto" onclick="goToQuestion(${qIdx})">
        Ir para questão ${icons.right}
      </button>
    </div>`;
  });

  const cardsM2 = entries2.map(([qIdx, count]) => {
    const q = questions2[Number(qIdx)];
    const num = Number(qIdx) + 1;
    const sentence = q.sentence.filter(w => w !== '.').join(' ');
    return `<div class="enp-card">
      <div class="enp-card-meta">
        <span class="enb-num">M2·Q${num}</span>
        <span class="enb-diff enb-diff-${diffCls(q.difficulty)}">${q.difficulty}</span>
        <span class="enb-count">${count}×</span>
      </div>
      <p class="enp-qtext">${sentence}</p>
      <button type="button" class="btn-nav enp-goto" onclick="goToM2Question(${qIdx})">
        Ir para questão ${icons.right}
      </button>
    </div>`;
  });

  const cardsM3 = entries3.map(([qIdx, count]) => {
    const q = questions3[Number(qIdx)];
    const num = Number(qIdx) + 1;
    const sentence = q.sentence.filter(w => w !== '.').join(' ');
    return `<div class="enp-card">
      <div class="enp-card-meta">
        <span class="enb-num">M3·Q${num}</span>
        <span class="enb-diff enb-diff-${diffCls(q.difficulty)}">${q.difficulty}</span>
        <span class="enb-count">${count}×</span>
      </div>
      <p class="enp-qtext">${sentence}</p>
      <button type="button" class="btn-nav enp-goto" onclick="goToM3Question(${qIdx})">
        Ir para questão ${icons.right}
      </button>
    </div>`;
  });

  const cardsM4 = entries4.map(([qIdx, count]) => {
    const q = questions4[Number(qIdx)];
    const num = Number(qIdx) + 1;
    const sentence = q.sentence.filter(w => w !== '.').join(' ');
    return `<div class="enp-card">
      <div class="enp-card-meta">
        <span class="enb-num">M4·Q${num}</span>
        <span class="enb-diff enb-diff-${diffCls(q.difficulty)}">${q.difficulty}</span>
        <span class="enb-count">${count}×</span>
      </div>
      <p class="enp-qtext">${sentence}</p>
      <button type="button" class="btn-nav enp-goto" onclick="goToM4Question(${qIdx})">
        Ir para questão ${icons.right}
      </button>
    </div>`;
  });

  const cardsM5 = entries5.map(([qIdx, count]) => {
    const q = questions5[Number(qIdx)];
    const num = Number(qIdx) + 1;
    const sentence = q.sentence.filter(w => w !== '.' && w !== ',').join(' ');
    return `<div class="enp-card">
      <div class="enp-card-meta">
        <span class="enb-num">M5·Q${num}</span>
        <span class="enb-diff enb-diff-${diffCls(q.difficulty)}">${q.difficulty}</span>
        <span class="enb-count">${count}×</span>
      </div>
      <p class="enp-qtext">${sentence}</p>
      <button type="button" class="btn-nav enp-goto" onclick="goToM5Question(${qIdx})">
        Ir para questão ${icons.right}
      </button>
    </div>`;
  });

  const cardsM6 = entries6.map(([qIdx, count]) => {
    const q = questions6[Number(qIdx)];
    const num = Number(qIdx) + 1;
    const sentence = q.sentence.filter(w => w !== '.').join(' ');
    return `<div class="enp-card">
      <div class="enp-card-meta">
        <span class="enb-num">M6·Q${num}</span>
        <span class="enb-diff enb-diff-${diffCls(q.difficulty)}">${q.difficulty}</span>
        <span class="enb-count">${count}×</span>
      </div>
      <p class="enp-qtext">${sentence}</p>
      <button type="button" class="btn-nav enp-goto" onclick="goToM6Question(${qIdx})">
        Ir para questão ${icons.right}
      </button>
    </div>`;
  });

  const cardsM7 = entries7.map(([qIdx, count]) => {
    const q = questions7[Number(qIdx)];
    const num = Number(qIdx) + 1;
    const sentence = q.sentence.filter(w => !PUNCT.has(w)).join(' ');
    return `<div class="enp-card">
      <div class="enp-card-meta">
        <span class="enb-num">M7·Q${num}</span>
        <span class="enb-diff enb-diff-${diffCls(q.difficulty)}">${q.difficulty}</span>
        <span class="enb-count">${count}×</span>
      </div>
      <p class="enp-qtext">${sentence}</p>
      <button type="button" class="btn-nav enp-goto" onclick="goToM7Question(${qIdx})">
        Ir para questão ${icons.right}
      </button>
    </div>`;
  });

  const listHTML = totalErrors === 0
    ? `<div class="enp-empty">
         <i class="fa-solid fa-check-circle"></i>
         <p>Nenhum erro ainda!<br>Continue praticando e suas questões erradas aparecerão aqui.</p>
       </div>`
    : [...cardsM1, ...cardsM2, ...cardsM3, ...cardsM4, ...cardsM5, ...cardsM6, ...cardsM7].join('');

  const actionsHTML = totalErrors > 0
    ? `<button type="button" class="btn-nav btn-nav-primary" id="practiceAllBtn">
         ${icons.retry} Praticar tudo
       </button>`
    : '';

  const backLabel = state.previousPhase
    ? state.previousPhase.startsWith('module7') ? 'Módulo 7'
    : state.previousPhase.startsWith('module6') ? 'Módulo 6'
    : state.previousPhase.startsWith('module5') ? 'Módulo 5'
    : state.previousPhase.startsWith('module4') ? 'Módulo 4'
    : state.previousPhase.startsWith('module3') ? 'Módulo 3'
    : state.previousPhase.startsWith('module2') ? 'Módulo 2'
    : 'Módulo 1'
    : 'Módulo 1';

  $('quizContainer').innerHTML = `
    <div class="enp-page">
      ${state.previousPhase ? `<button type="button" class="btn-nav enp-back" id="enpBackBtn">${icons.left} Voltar para ${backLabel}</button>` : ''}
      <div class="enp-header">
        <div class="enp-icon"><i class="fa-solid fa-triangle-exclamation"></i></div>
        <div class="enp-titles">
          <h2>Caderno de Erros</h2>
          <p>Questões que você errou. Clique em uma para revisitar ou pratique todas de uma vez.</p>
        </div>
      </div>
      <div class="enp-list">${listHTML}</div>
      ${actionsHTML ? `<div class="enp-actions">${actionsHTML}</div>` : ''}
    </div>`;

  if (state.previousPhase) {
    $('enpBackBtn').addEventListener('click', () => {
      state.phase = state.previousPhase;
      state.previousPhase = null;
      render();
    });
  }

  if (totalErrors > 0) {
    $('practiceAllBtn').addEventListener('click', () => {
      state.cadernoQueue    = buildCadernoQueue();
      state.cadernoCurrent  = 0;
      state.cadernoAnswered = {};
      cadernoResetPending();
      state.phase = 'caderno-quiz';
      render();
    });
  }
}

// ── NAVEGAR PARA QUESTÃO (caderno de erros) ──────────────────
function goToQuestion(qIdx) {
  state.cadernoQueue    = [{ mod: 1, qIdx: +qIdx }];
  state.cadernoCurrent  = 0;
  state.cadernoAnswered = {};
  cadernoResetPending();
  state.phase = 'caderno-quiz';
  render();
}

function goToM2Question(qIdx) {
  state.cadernoQueue    = [{ mod: 2, qIdx: +qIdx }];
  state.cadernoCurrent  = 0;
  state.cadernoAnswered = {};
  cadernoResetPending();
  state.phase = 'caderno-quiz';
  render();
}

function goToM3Question(qIdx) {
  state.cadernoQueue    = [{ mod: 3, qIdx: +qIdx }];
  state.cadernoCurrent  = 0;
  state.cadernoAnswered = {};
  cadernoResetPending();
  state.phase = 'caderno-quiz';
  render();
}

function goToM4Question(qIdx) {
  state.cadernoQueue    = [{ mod: 4, qIdx: +qIdx }];
  state.cadernoCurrent  = 0;
  state.cadernoAnswered = {};
  cadernoResetPending();
  state.phase = 'caderno-quiz';
  render();
}

// ── SELECIONAR (múltipla escolha) ────────────────────────────
function selectAnswer(idx) {
  const qIdx = state.activeSet[state.current];
  if (state.results[qIdx] !== null) return;
  const correct = questions[qIdx].answers[idx].correct;
  state.results[qIdx] = { selected: idx, correct };
  if (correct) { state.points += 10; const el = $('statPontos'); if (el) el.textContent = state.points; }
  if (!correct) { state.errorNotebook[qIdx] = (state.errorNotebook[qIdx] || 0) + 1; }
  recordActivity();
  updateStats();
  updateErrorNotebook();
  renderQuestion();
  saveProgress();
}

// ── SELECIONAR (word-select) ─────────────────────────────────
function selectWordAnswer(wordIdx) {
  const qIdx = state.activeSet[state.current];
  if (state.results[qIdx] !== null) return;
  const correct = wordIdx === questions[qIdx].correctIndex;
  state.results[qIdx] = { selected: wordIdx, correct };
  if (correct) { state.points += 10; const el = $('statPontos'); if (el) el.textContent = state.points; }
  if (!correct) { state.errorNotebook[qIdx] = (state.errorNotebook[qIdx] || 0) + 1; }
  recordActivity();
  updateStats();
  updateErrorNotebook();
  renderQuestion();
  saveProgress();
}

// ── MÓDULO 2: RENDERIZAR QUESTÃO ─────────────────────────────
function renderModule2Question() {
  const qIdx   = state.m2activeSet[state.m2current];
  const q      = questions2[qIdx];
  const result = state.m2results[qIdx];
  const done   = result !== null;
  const isLast = state.m2current === state.m2activeSet.length - 1;
  const diffCls = q.difficulty === 'Médio'   ? ' difficulty-medium'
                : q.difficulty === 'Difícil' ? ' difficulty-hard' : '';

  $('quizContainer').innerHTML = `
    <div class="question-counter">Questão ${state.m2current + 1} de ${state.m2activeSet.length}</div>
    <div class="difficulty${diffCls}">${icons.bars} ${q.difficulty}</div>
    <button type="button" class="btn-lesson-hint" id="m2BtnLessonHint">
      <i class="fa-solid fa-book-open"></i> Consultar lição
    </button>
    <p class="question-title">${q.text}</p>
    ${buildDualSelect(q, result, done, state.m2pending)}
    <div class="bottom-actions">
      <button type="button" class="btn-nav" id="m2PrevBtn"${state.m2current === 0 ? ' disabled' : ''}>
        ${icons.left} Questão anterior
      </button>
      <button type="button" class="btn-nav btn-nav-primary" id="m2NextBtn"${!done ? ' disabled' : ''}>
        ${isLast ? 'Ver resultado' : 'Próxima questão'} ${icons.right}
      </button>
    </div>`;

  if (!done) {
    $('quizContainer').querySelectorAll('.word-chip[data-wi]').forEach(chip => {
      chip.addEventListener('click', () => selectDualWord(+chip.dataset.wi));
    });
    const modeVerb = $('dualModeVerb');
    const modeSubj = $('dualModeSubject');
    if (modeVerb) modeVerb.addEventListener('click', () => { state.m2pending.mode = 'verb'; renderModule2Question(); });
    if (modeSubj) modeSubj.addEventListener('click', () => { state.m2pending.mode = 'subject'; renderModule2Question(); });
    const confirmBtn = $('dualConfirmBtn');
    if (confirmBtn) confirmBtn.addEventListener('click', confirmDualAnswer);
  }

  $('m2BtnLessonHint').addEventListener('click', () => openLessonModal(2));
  $('m2PrevBtn').addEventListener('click', () => m2navigate(-1));
  $('m2NextBtn').addEventListener('click', () => {
    if (isLast) { state.phase = 'module2-results'; render(); saveProgress(); }
    else        { m2navigate(1); }
  });
}

// ── MÓDULO 2: MONTAR DUAL-SELECT ─────────────────────────────
function buildAnnotatedSentence(q, chipsFn, annotFn) {
  const N = q.sentence.length;
  const chipsHTML = q.sentence.map((word, idx) => {
    if (PUNCT.has(word)) {
      return `<span class="word-chip punctuation" style="grid-column:${idx+1};grid-row:1">${word}</span>`;
    }
    return chipsFn(word, idx);
  }).join('');
  const annotHTML = annotFn(q);
  return `<div class="sa-wrap"><div class="sentence-annotated" style="grid-template-columns:repeat(${N},auto)">${chipsHTML}${annotHTML}</div></div>`;
}

function buildDualSelect(q, result, done, pending) {
  if (!pending) pending = state.m2pending;
  if (!done) {
    const { mode, verbIdx, subjectIdxs } = pending;
    const canConfirm = verbIdx !== null && subjectIdxs.length > 0;

    const sentenceHTML = buildAnnotatedSentence(q,
      (word, idx) => {
        let cls = 'word-chip';
        if (idx === verbIdx)                cls += ' verb-pending';
        else if (subjectIdxs.includes(idx)) cls += ' subject-pending';
        return `<span class="${cls}" data-wi="${idx}" style="grid-column:${idx+1};grid-row:1">${word}</span>`;
      },
      (q) => {
        let a = '';
        if (verbIdx !== null) {
          a += `<div class="annot-verb" style="grid-column:${verbIdx+1};grid-row:2">Verbo</div>`;
        }
        if (subjectIdxs.length > 0) {
          const sorted = [...subjectIdxs].sort((a,b) => a-b);
          const col = sorted[0] + 1;
          const span = sorted[sorted.length-1] - sorted[0] + 1;
          a += `<div class="annot-subject" style="grid-column:${col}/span ${span};grid-row:2">Sujeito</div>`;
        }
        return a;
      }
    );

    const verbBtnCls = mode === 'verb'    ? 'dual-mode-btn active-verb'    : 'dual-mode-btn';
    const subjBtnCls = mode === 'subject' ? 'dual-mode-btn active-subject' : 'dual-mode-btn';

    return `
      <div class="dual-mode-toggle">
        <button type="button" class="${verbBtnCls}" id="dualModeVerb">
          <i class="fa-solid fa-circle" style="color:#2563eb;font-size:8px"></i> VERBO
        </button>
        <button type="button" class="${subjBtnCls}" id="dualModeSubject">
          <i class="fa-solid fa-circle" style="color:#dc2626;font-size:8px"></i> SUJEITO
        </button>
      </div>
      ${sentenceHTML}
      <button type="button" class="dual-confirm-btn" id="dualConfirmBtn"${canConfirm ? '' : ' disabled'}>
        ${icons.check} Confirmar resposta
      </button>`;
  }

  // Questão já respondida — mostrar resultado com chave
  const sentenceHTML = buildAnnotatedSentence(q,
    (word, idx) => {
      let cls = 'word-chip disabled';
      const isCorrectVerb = idx === q.verbIndex;
      const isCorrectSubj = q.subjectIndices.includes(idx);
      const wasVerb = idx === result.verbSelected;
      const wasSubj = result.subjectSelected.includes(idx);
      if      (isCorrectVerb)              cls += ' correct-verb';
      else if (isCorrectSubj)              cls += ' correct-subject';
      else if (wasVerb && !isCorrectVerb)  cls += ' wrong-verb';
      else if (wasSubj && !isCorrectSubj)  cls += ' wrong-subject';
      return `<span class="${cls}" style="grid-column:${idx+1};grid-row:1">${word}</span>`;
    },
    (q) => {
      const subjStart = Math.min(...q.subjectIndices) + 1;
      const subjSpan  = Math.max(...q.subjectIndices) - Math.min(...q.subjectIndices) + 1;
      return `<div class="annot-verb" style="grid-column:${q.verbIndex+1};grid-row:2">Verbo</div>` +
             `<div class="annot-subject" style="grid-column:${subjStart}/span ${subjSpan};grid-row:2">Sujeito</div>`;
    }
  );

  const hintsHTML = q.sentence.map((word, idx) => {
    if (PUNCT.has(word)) return '';
    const isVerb = idx === q.verbIndex;
    const isSubj = q.subjectIndices.includes(idx);
    const role = isVerb ? 'Verbo' : isSubj ? 'Sujeito' : '—';
    return `<div class="hint-row">
      <span class="wh-word${isVerb || isSubj ? ' correct' : ''}">${word}</span>
      <span class="wh-arrow">→</span>
      <span class="hint-label${isVerb ? ' correct' : isSubj ? ' subject-hint' : ''}">${role}</span>
      ${isVerb || isSubj ? `<span class="hint-check">${icons.check}</span>` : ''}
    </div>`;
  }).filter(h => h).join('');

  const userVerbWord  = result.verbSelected != null
    ? q.sentence[result.verbSelected] : '—';
  const userSubjWords = result.subjectSelected.length > 0
    ? result.subjectSelected.slice().sort((a, b) => a - b).map(i => q.sentence[i]).join(' ')
    : '—';

  return `
    ${sentenceHTML}
    <div class="feedback${result.correct ? '' : ' wrong'}">
      <div class="feedback-icon">${result.correct ? icons.check : icons.x}</div>
      <div class="feedback-content">
        <h2>${result.correct ? 'Correto!' : 'Incorreto!'}</h2>
        ${!result.correct ? `<p class="user-answer-recap"><span class="recap-verb">Verbo: <strong>${userVerbWord}</strong></span><span class="recap-sep">·</span><span class="recap-subject">Sujeito: <strong>${userSubjWords}</strong></span></p>` : ''}
        <p>${q.feedback}</p>
        ${q.example ? `<p>${q.example}</p>` : ''}
        <div class="hints-breakdown">
          <p class="hints-title">Papel de cada palavra:</p>
          <div class="hints-list">${hintsHTML}</div>
        </div>
      </div>
    </div>`;
}

// ── MÓDULO 7: MONTAR NUCLEO-SELECT ───────────────────────────
function buildNucleoSelect(q, result, done, pending) {
  if (!pending) pending = state.m7pending;
  if (!done) {
    const { mode, verbIdx, subjectIdxs, nucleoIdx } = pending;
    const canConfirm = verbIdx !== null && subjectIdxs.length > 0 && nucleoIdx !== null;

    const sentenceHTML = buildAnnotatedSentence3(q,
      (word, idx) => {
        let cls = 'word-chip';
        if (idx === verbIdx) {
          cls += ' verb-pending';
        } else if (idx === nucleoIdx) {
          cls += ' nucleo-pending';
        } else if (subjectIdxs.includes(idx)) {
          cls += ' subject-pending';
        }
        if (mode === 'nucleo' && idx !== verbIdx && !subjectIdxs.includes(idx)) cls += ' disabled';
        return `<span class="${cls}" data-wi="${idx}" style="grid-column:${idx+1};grid-row:1">${word}</span>`;
      },
      () => {
        let a = '';
        if (verbIdx !== null) a += `<div class="annot-verb" style="grid-column:${verbIdx+1};grid-row:2">Verbo</div>`;
        if (subjectIdxs.length > 0) {
          const sorted = [...subjectIdxs].sort((a,b) => a-b);
          a += `<div class="annot-subject" style="grid-column:${sorted[0]+1}/span ${sorted[sorted.length-1]-sorted[0]+1};grid-row:2">Sujeito</div>`;
        }
        if (nucleoIdx !== null) a += `<div class="annot-nucleo" style="grid-column:${nucleoIdx+1}">Núcleo</div>`;
        return a;
      }
    );

    const verbBtnCls   = mode === 'verb'    ? 'dual-mode-btn active-verb'    : 'dual-mode-btn';
    const subjBtnCls   = mode === 'subject' ? 'dual-mode-btn active-subject' : 'dual-mode-btn';
    const nucleoBtnCls = mode === 'nucleo'  ? 'dual-mode-btn active-nucleo'  : 'dual-mode-btn';

    return `
      <div class="dual-mode-toggle">
        <button type="button" class="${verbBtnCls}" id="m7ModeVerb">
          <i class="fa-solid fa-circle" style="color:#2563eb;font-size:8px"></i> VERBO
        </button>
        <button type="button" class="${subjBtnCls}" id="m7ModeSubject">
          <i class="fa-solid fa-circle" style="color:#dc2626;font-size:8px"></i> SUJEITO
        </button>
        <button type="button" class="${nucleoBtnCls}" id="m7ModeNucleo">
          <i class="fa-solid fa-circle" style="color:#d97706;font-size:8px"></i> NÚCLEO
        </button>
      </div>
      ${sentenceHTML}
      <button type="button" class="dual-confirm-btn" id="m7ConfirmBtn"${canConfirm ? '' : ' disabled'}>
        ${icons.check} Confirmar resposta
      </button>`;
  }

  // Questão já respondida — mostrar resultado
  const sentenceHTML = buildAnnotatedSentence3(q,
    (word, idx) => {
      let cls = 'word-chip disabled';
      const isV = idx === q.verbIndex;
      const isS = q.subjectIndices.includes(idx);
      const isN = idx === q.nucleoIndex;
      const wasV = idx === result.verbSelected;
      const wasS = result.subjectSelected && result.subjectSelected.includes(idx);
      if      (isV)           cls += ' correct-verb';
      else if (isN && isS)    cls += ' correct-nucleo';
      else if (isS)           cls += ' correct-subject';
      else if (wasV && !isV)  cls += ' wrong-verb';
      else if (wasS && !isS)  cls += ' wrong-subject';
      return `<span class="${cls}" style="grid-column:${idx+1};grid-row:1">${word}</span>`;
    },
    () => {
      const sMin = Math.min(...q.subjectIndices) + 1;
      const sSpan = Math.max(...q.subjectIndices) - Math.min(...q.subjectIndices) + 1;
      return `<div class="annot-verb" style="grid-column:${q.verbIndex+1};grid-row:2">Verbo</div>` +
             `<div class="annot-subject" style="grid-column:${sMin}/span ${sSpan};grid-row:2">Sujeito</div>` +
             `<div class="annot-nucleo" style="grid-column:${q.nucleoIndex+1}">Núcleo</div>`;
    }
  );

  const hintsHTML = q.sentence.map((word, idx) => {
    if (PUNCT.has(word)) return '';
    const isV = idx === q.verbIndex;
    const isN = idx === q.nucleoIndex;
    const isS = q.subjectIndices.includes(idx);
    const role = isV ? 'Verbo' : isN ? 'Núcleo' : isS ? 'Sujeito' : '—';
    const ok = isV || isS;
    return `<div class="hint-row">
      <span class="wh-word${ok ? ' correct' : ''}">${word}</span>
      <span class="wh-arrow">→</span>
      <span class="hint-label${isV ? ' correct' : isN ? ' correct' : isS ? ' subject-hint' : ''}">${role}</span>
      ${ok ? `<span class="hint-check">${icons.check}</span>` : ''}
    </div>`;
  }).filter(h => h).join('');

  const uv = result.verbSelected != null ? q.sentence[result.verbSelected] : '—';
  const us = result.subjectSelected && result.subjectSelected.length > 0
    ? [...result.subjectSelected].sort((a,b) => a-b).map(i => q.sentence[i]).join(' ') : '—';
  const un = result.nucleoSelected != null ? q.sentence[result.nucleoSelected] : '—';

  return `
    ${sentenceHTML}
    <div class="feedback${result.correct ? '' : ' wrong'}">
      <div class="feedback-icon">${result.correct ? icons.check : icons.x}</div>
      <div class="feedback-content">
        <h2>${result.correct ? 'Correto!' : 'Incorreto!'}</h2>
        ${!result.correct ? `<p class="user-answer-recap">
          <span class="recap-verb">Verbo: <strong>${uv}</strong></span>
          <span class="recap-sep">·</span>
          <span class="recap-subject">Sujeito: <strong>${us}</strong></span>
          <span class="recap-sep">·</span>
          <span style="color:#d97706;font-size:13px">Núcleo: <strong>${un}</strong></span>
        </p>` : ''}
        <p>${q.feedback}</p>
        ${q.example ? `<p>${q.example}</p>` : ''}
        <div class="hints-breakdown">
          <p class="hints-title">Papel de cada palavra:</p>
          <div class="hints-list">${hintsHTML}</div>
        </div>
      </div>
    </div>`;
}

// ── MÓDULO 2: SELECIONAR PALAVRA ─────────────────────────────
function selectDualWord(wordIdx) {
  const { mode } = state.m2pending;
  if (mode === 'verb') {
    if (state.m2pending.verbIdx === wordIdx) {
      state.m2pending.verbIdx = null;
    } else {
      state.m2pending.verbIdx = wordIdx;
      state.m2pending.subjectIdxs = state.m2pending.subjectIdxs.filter(i => i !== wordIdx);
      state.m2pending.mode = 'subject';
    }
  } else {
    if (wordIdx === state.m2pending.verbIdx) return;
    const i = state.m2pending.subjectIdxs.indexOf(wordIdx);
    if (i === -1) state.m2pending.subjectIdxs.push(wordIdx);
    else          state.m2pending.subjectIdxs.splice(i, 1);
  }
  renderModule2Question();
}

// ── MÓDULO 2: CONFIRMAR RESPOSTA ─────────────────────────────
function confirmDualAnswer() {
  const qIdx = state.m2activeSet[state.m2current];
  if (state.m2results[qIdx] !== null) return;
  const q = questions2[qIdx];
  const { verbIdx, subjectIdxs } = state.m2pending;
  if (verbIdx === null || subjectIdxs.length === 0) return;

  const verbCorrect    = verbIdx === q.verbIndex;
  const subjectCorrect = subjectIdxs.length === q.subjectIndices.length &&
                         q.subjectIndices.every(i => subjectIdxs.includes(i));
  const correct = verbCorrect && subjectCorrect;

  state.m2results[qIdx] = { verbSelected: verbIdx, subjectSelected: [...subjectIdxs], correct, verbCorrect, subjectCorrect };
  if (correct) state.m2points += 10;
  if (!correct) state.m2errorNotebook[qIdx] = (state.m2errorNotebook[qIdx] || 0) + 1;
  recordActivity();
  updateModule2Card();
  updateErrorNotebook();
  renderModule2Question();
  saveProgress();
}

// ── MÓDULO 2: NAVEGAR ────────────────────────────────────────
function m2navigate(dir) {
  state.m2current += dir;
  state.m2pending = { mode: 'verb', verbIdx: null, subjectIdxs: [] };
  renderModule2Question();
  saveProgress();
}

// ── MÓDULO 2: TELA DE RESULTADOS ─────────────────────────────
function renderModule2Results() {
  const correctCt = state.m2results.filter(r => r && r.correct).length;
  const wrongCt   = state.m2results.filter(r => r && !r.correct).length;
  const allClear  = wrongCt === 0;
  const iconBg    = allClear ? '#22c55e' : wrongCt > state.m2activeSet.length / 2 ? '#ef4444' : '#f97316';
  const iconName  = allClear ? 'fa-trophy' : 'fa-flag-checkered';

  $('quizContainer').innerHTML = `
    <div class="results-screen">
      <div class="results-icon" style="background:linear-gradient(135deg,${iconBg},${iconBg}bb)">
        <i class="fa-solid ${iconName}"></i>
      </div>
      <h2>Você concluiu as questões de Sujeito — segunda etapa!</h2>
      <div class="results-stats-row">
        <div class="r-stat correct"><strong>${correctCt}</strong><span>Corretas</span></div>
        <div class="r-stat wrong"><strong>${wrongCt}</strong><span>Incorretas</span></div>
      </div>
      ${allClear
        ? `<p class="results-message">Parabéns! Você acertou todas as questões!</p>
           <div class="results-actions">
             <button type="button" class="btn-nav" id="m2RetryBtn">${icons.retry} Recomeçar</button>
             <button type="button" class="btn-nav btn-nav-primary" id="m2NextModuleBtn">Próximo módulo ${icons.right}</button>
           </div>`
        : `<p class="results-message">
             Você errou <strong>${wrongCt}</strong> questão${wrongCt > 1 ? 'ões' : ''}.
             Clique em <strong>Praticar erros</strong> para tentar novamente as que errou.
           </p>
           <div class="results-actions">
             <button type="button" class="btn-nav" id="m2RetryBtn">${icons.retry} Recomeçar tudo</button>
             <button type="button" class="btn-nav btn-nav-primary" id="m2PracticeBtn">
               Praticar erros ${icons.right}
             </button>
           </div>`
      }
    </div>`;

  $('m2RetryBtn').addEventListener('click', startModule2Quiz);

  if (allClear && $('m2NextModuleBtn')) {
    $('m2NextModuleBtn').addEventListener('click', () => {
      state.m3unlocked = true;
      state.phase = 'module3-intro';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      render();
      saveProgress();
    });
  }

  if (!allClear) {
    $('m2PracticeBtn').addEventListener('click', () => {
      const wrongSet = state.m2results
        .map((r, i) => (r && !r.correct) ? i : -1)
        .filter(i => i !== -1);
      wrongSet.forEach(i => { state.m2results[i] = null; });
      state.m2activeSet = wrongSet;
      state.m2current   = 0;
      state.m2pending   = { mode: 'verb', verbIdx: null, subjectIdxs: [] };
      state.phase       = 'module2-quiz';
      render();
      saveProgress();
    });
  }
}

// ── MÓDULO 2: ATUALIZAR CARD DA SIDEBAR ──────────────────────
function updateModule2Card() {
  const m2Card = $('module2Card');
  if (!m2Card) return;
  const total    = questions2.length;
  const answered = state.m2results.filter(r => r !== null).length;
  const pct      = total > 0 ? Math.round(answered / total * 100) : 0;
  const fill = m2Card.querySelector('.fill');
  const text = m2Card.querySelector('.module-progress span');
  if (fill) fill.style.width = pct + '%';
  if (text) text.textContent = pct + '%';

  if (answered === total && total > 0) state.m3unlocked = true;
  const allDone = state.m3unlocked;
  const m3Card = $('module3Card');
  const m3Lock = $('module3LockIcon');
  if (m3Card) m3Card.classList.toggle('locked', !allDone);
  if (m3Lock) m3Lock.style.display = allDone ? 'none' : '';
}

// ── MÓDULO 4: ATUALIZAR CARD DA SIDEBAR ──────────────────────
function updateModule4Card() {
  const m4Card = $('module4Card');
  if (!m4Card) return;
  const total    = questions4.length;
  const answered = state.m4results.filter(r => r !== null).length;
  const pct      = total > 0 ? Math.round(answered / total * 100) : 0;
  const fill = m4Card.querySelector('.fill');
  const text = m4Card.querySelector('.module-progress span');
  if (fill) fill.style.width = pct + '%';
  if (text) text.textContent = pct + '%';

  if (answered === total && total > 0) state.m5unlocked = true;
  const allDone = state.m5unlocked;
  const m5Card = $('module5Card');
  const m5Lock = $('module5LockIcon');
  if (m5Card) m5Card.classList.toggle('locked', !allDone);
  if (m5Lock) m5Lock.style.display = allDone ? 'none' : '';
}

// ── MÓDULO 5: ATUALIZAR CARD DA SIDEBAR ──────────────────────
function updateModule5Card() {
  const m5Card = $('module5Card');
  if (!m5Card) return;
  const total    = questions5.length;
  const answered = state.m5results.filter(r => r !== null).length;
  const pct      = total > 0 ? Math.round(answered / total * 100) : 0;
  const fill = m5Card.querySelector('.fill');
  const text = m5Card.querySelector('.module-progress span');
  if (fill) fill.style.width = pct + '%';
  if (text) text.textContent = pct + '%';

  if (answered === total && total > 0) { state.simUnlocked = true; state.m6unlocked = true; }
  const simCard = $('moduleSimCard');
  const simLock = $('moduleSimLockIcon');
  if (simCard) simCard.classList.toggle('locked', !state.simUnlocked);
  if (simLock) simLock.style.display = state.simUnlocked ? 'none' : '';
  const m6Card2 = $('module6Card');
  const m6Lock2 = $('module6LockIcon');
  if (m6Card2) m6Card2.classList.toggle('locked', !state.m6unlocked);
  if (m6Lock2) m6Lock2.style.display = state.m6unlocked ? 'none' : '';
}

// ── MÓDULO 6: ATUALIZAR CARD DA SIDEBAR ──────────────────────
function updateModule6Card() {
  const m6Card = $('module6Card');
  if (!m6Card) return;
  const total    = questions6.length;
  const answered = state.m6results.filter(r => r !== null).length;
  const pct      = total > 0 ? Math.round(answered / total * 100) : 0;
  const fill = m6Card.querySelector('.fill');
  const text = m6Card.querySelector('.module-progress span');
  if (fill) fill.style.width = pct + '%';
  if (text) text.textContent = pct + '%';
  // aplica estado de bloqueado/desbloqueado
  m6Card.classList.toggle('locked', !state.m6unlocked);
  const m6Lock = $('module6LockIcon');
  if (m6Lock) m6Lock.style.display = state.m6unlocked ? 'none' : '';
  // desbloqueia módulo 7 somente quando todas as questões estão corretas
  const allCorrect = total > 0 && state.m6results.every(r => r !== null && r.correct);
  if (allCorrect) state.m7unlocked = true;
  const m7Card = $('module7Card');
  const m7Lock = $('module7LockIcon');
  if (m7Card) m7Card.classList.toggle('locked', !state.m7unlocked);
  if (m7Lock) m7Lock.style.display = state.m7unlocked ? 'none' : '';
}

// ── MÓDULO 7: ATUALIZAR CARD DA SIDEBAR ──────────────────────
function updateModule7Card() {
  const m7Card = $('module7Card');
  if (!m7Card) return;
  const total    = questions7.length;
  const answered = state.m7results.filter(r => r !== null).length;
  const pct      = total > 0 ? Math.round(answered / total * 100) : 0;
  const fill = m7Card.querySelector('.fill');
  const text = m7Card.querySelector('.module-progress span');
  if (fill) fill.style.width = pct + '%';
  if (text) text.textContent = pct + '%';
  m7Card.classList.toggle('locked', !state.m7unlocked);
  const m7Lock = $('module7LockIcon');
  if (m7Lock) m7Lock.style.display = state.m7unlocked ? 'none' : '';
  if (answered === total && total > 0) state.sim2Unlocked = true;
  const sim2Card = $('moduleSim2Card');
  const sim2Lock = $('moduleSim2LockIcon');
  if (sim2Card) sim2Card.classList.toggle('locked', !state.sim2Unlocked);
  if (sim2Lock) sim2Lock.style.display = state.sim2Unlocked ? 'none' : '';
}

// ── SIMULADOS: ATUALIZAR CARD DA SIDEBAR ─────────────────────
function updateSimCard() {
  const simCard = $('moduleSimCard');
  if (!simCard) return;
  const total    = state.simQueue.length || 25;
  const answered = Object.keys(state.simAnswered).length;
  const pct      = total > 0 ? Math.round(answered / total * 100) : 0;
  const fill = simCard.querySelector('.fill');
  const text = simCard.querySelector('.module-progress span');
  if (fill) fill.style.width = pct + '%';
  if (text) text.textContent = pct + '%';
}

// ── SIMULADOS AVANÇADO: ATUALIZAR CARD DA SIDEBAR ────────────
function updateSim2Card() {
  const sim2Card = $('moduleSim2Card');
  if (!sim2Card) return;
  const total    = state.sim2Queue.length || 35;
  const answered = Object.keys(state.sim2Answered).length;
  const pct      = total > 0 ? Math.round(answered / total * 100) : 0;
  const fill = sim2Card.querySelector('.fill');
  const text = sim2Card.querySelector('.module-progress span');
  if (fill) fill.style.width = pct + '%';
  if (text) text.textContent = pct + '%';
  sim2Card.classList.toggle('locked', !state.sim2Unlocked);
  const sim2Lock = $('moduleSim2LockIcon');
  if (sim2Lock) sim2Lock.style.display = state.sim2Unlocked ? 'none' : '';
}

// ── MÓDULO 3: ATUALIZAR CARD DA SIDEBAR ──────────────────────
function updateModule3Card() {
  const m3Card = $('module3Card');
  if (!m3Card) return;
  const total    = questions3.length;
  const answered = state.m3results.filter(r => r !== null).length;
  const pct      = total > 0 ? Math.round(answered / total * 100) : 0;
  const fill = m3Card.querySelector('.fill');
  const text = m3Card.querySelector('.module-progress span');
  if (fill) fill.style.width = pct + '%';
  if (text) text.textContent = pct + '%';

  if (answered === total && total > 0) state.m4unlocked = true;
  const allDone = state.m4unlocked;
  const m4Card = $('module4Card');
  const m4Lock = $('module4LockIcon');
  if (m4Card) m4Card.classList.toggle('locked', !allDone);
  if (m4Lock) m4Lock.style.display = allDone ? 'none' : '';
}

// ── MÓDULO 3: CONSTRUIR SENTENÇA ANOTADA (3 linhas) ──────────
function buildAnnotatedSentence3(q, chipsFn, annotFn) {
  const N = q.sentence.length;
  const chipsHTML = q.sentence.map((word, idx) => {
    if (PUNCT.has(word)) {
      return `<span class="word-chip punctuation" style="grid-column:${idx+1};grid-row:1">${word}</span>`;
    }
    return chipsFn(word, idx);
  }).join('');
  const annotHTML = annotFn(q);
  return `<div class="sa-wrap"><div class="sentence-annotated" style="grid-template-columns:repeat(${N},auto);grid-template-rows:auto auto auto">${chipsHTML}${annotHTML}</div></div>`;
}

// ── MÓDULO 3: MONTAR TRI-SELECT ───────────────────────────────
function buildTriSelect(q, result, done) {
  if (!done) {
    const { mode, verbIdx, subjectIdxs, predicateIdxs, predicateConfirmed } = state.m3pending;
    const canConfirm = verbIdx !== null && subjectIdxs.length > 0;

    const sentenceHTML = buildAnnotatedSentence3(q,
      (word, idx) => {
        let cls = 'word-chip';
        if (idx === verbIdx)                  cls += (mode === 'predicate' && predicateConfirmed) ? ' predicate-pending' : ' verb-pending';
        else if (subjectIdxs.includes(idx))   cls += ' subject-pending';
        else if (predicateIdxs.includes(idx)) cls += ' predicate-pending';
        return `<span class="${cls}" data-wi="${idx}" style="grid-column:${idx+1};grid-row:1">${word}</span>`;
      },
      () => {
        let a = '';
        if (subjectIdxs.length > 0) {
          const sorted = [...subjectIdxs].sort((a,b) => a-b);
          a += `<div class="annot-subject" style="grid-column:${sorted[0]+1}/span ${sorted[sorted.length-1]-sorted[0]+1};grid-row:2">Sujeito</div>`;
        }
        if (verbIdx !== null) {
          a += `<div class="annot-verb" style="grid-column:${verbIdx+1};grid-row:2">Verbo</div>`;
        }
        if (predicateConfirmed || predicateIdxs.some(i => i !== verbIdx)) {
          const renderIdxs = predicateIdxs;
          if (renderIdxs.length > 0) {
            const sorted = [...renderIdxs].sort((a,b) => a-b);
            const segs = []; let seg = [sorted[0]];
            for (let i = 1; i < sorted.length; i++) {
              const prev = sorted[i-1], curr = sorted[i];
              let ok = true;
              for (let j = prev+1; j < curr; j++) if (!PUNCT.has(q.sentence[j])) { ok = false; break; }
              ok ? seg.push(curr) : (segs.push(seg), seg = [curr]);
            }
            segs.push(seg);
            segs.forEach(g => { a += `<div class="annot-predicate" style="grid-column:${g[0]+1}/span ${g[g.length-1]-g[0]+1};grid-row:3">Predicado</div>`; });
          }
        }
        return a;
      }
    );

    const verbBtnCls = mode === 'verb'      ? 'dual-mode-btn active-verb'      : 'dual-mode-btn';
    const subjBtnCls = mode === 'subject'   ? 'dual-mode-btn active-subject'   : 'dual-mode-btn';
    const predBtnCls = mode === 'predicate' ? 'dual-mode-btn active-predicate' : 'dual-mode-btn';

    return `
      <div class="dual-mode-toggle">
        <button type="button" class="${verbBtnCls}" id="triModeVerb">
          <i class="fa-solid fa-circle" style="color:#2563eb;font-size:8px"></i> VERBO
        </button>
        <button type="button" class="${subjBtnCls}" id="triModeSubject">
          <i class="fa-solid fa-circle" style="color:#dc2626;font-size:8px"></i> SUJEITO
        </button>
        <button type="button" class="${predBtnCls}" id="triModePredicate">
          <i class="fa-solid fa-circle" style="color:#7c3aed;font-size:8px"></i> PREDICADO
        </button>
      </div>
      ${sentenceHTML}
      <button type="button" class="dual-confirm-btn" id="triConfirmBtn"${canConfirm ? '' : ' disabled'}>
        ${icons.check} Confirmar resposta
      </button>`;
  }

  // Questão já respondida — mostrar resultado
  const sentenceHTML = buildAnnotatedSentence3(q,
    (word, idx) => {
      let cls = 'word-chip disabled';
      const isVerb  = idx === q.verbIndex;
      const isSubj  = q.subjectIndices.includes(idx);
      const isPred  = q.predicateIndices.includes(idx);
      const wasVerb = idx === result.verbSelected;
      const wasSubj = result.subjectSelected.includes(idx);
      const wasPred = result.predicateSelected.includes(idx);
      if      (isVerb)                      cls += ' correct-verb';
      else if (isSubj)                      cls += ' correct-subject';
      else if (isPred)                      cls += ' lesson-predicate';
      else if (wasVerb && !isVerb)          cls += ' wrong-verb';
      else if (wasSubj && !isSubj)          cls += ' wrong-subject';
      else if (wasPred && !isPred)          cls += ' wrong-subject';
      return `<span class="${cls}" style="grid-column:${idx+1};grid-row:1">${word}</span>`;
    },
    (q) => {
      const subjStart = Math.min(...q.subjectIndices) + 1;
      const subjSpan  = Math.max(...q.subjectIndices) - Math.min(...q.subjectIndices) + 1;
      const predStart = Math.min(...q.predicateIndices) + 1;
      const predSpan  = Math.max(...q.predicateIndices) - Math.min(...q.predicateIndices) + 1;
      return `<div class="annot-subject" style="grid-column:${subjStart}/span ${subjSpan};grid-row:2">Sujeito</div>` +
             `<div class="annot-verb" style="grid-column:${q.verbIndex+1};grid-row:2">Verbo</div>` +
             `<div class="annot-predicate" style="grid-column:${predStart}/span ${predSpan};grid-row:3">Predicado</div>`;
    }
  );

  const hintsHTML = q.sentence.map((word, idx) => {
    if (PUNCT.has(word)) return '';
    const isVerb = idx === q.verbIndex;
    const isSubj = q.subjectIndices.includes(idx);
    const isPred = q.predicateIndices.includes(idx) && !isVerb;
    const role   = isVerb ? 'Verbo' : isSubj ? 'Sujeito' : isPred ? 'Predicado' : '—';
    const cls    = isVerb ? ' correct' : isSubj ? ' subject-hint' : isPred ? ' predicate-hint' : '';
    return `<div class="hint-row">
      <span class="wh-word${isVerb || isSubj || isPred ? ' correct' : ''}">${word}</span>
      <span class="wh-arrow">→</span>
      <span class="hint-label${cls}">${role}</span>
      ${isVerb || isSubj || isPred ? `<span class="hint-check">${icons.check}</span>` : ''}
    </div>`;
  }).filter(h => h).join('');

  const userVerbWord  = result.verbSelected != null ? q.sentence[result.verbSelected] : '—';
  const userSubjWords = result.subjectSelected.length > 0
    ? result.subjectSelected.slice().sort((a,b) => a-b).map(i => q.sentence[i]).join(' ') : '—';
  const userPredWords = result.predicateSelected.length > 0
    ? result.predicateSelected.slice().sort((a,b) => a-b).map(i => q.sentence[i]).join(' ') : '—';

  return `
    ${sentenceHTML}
    <div class="feedback${result.correct ? '' : ' wrong'}">
      <div class="feedback-icon">${result.correct ? icons.check : icons.x}</div>
      <div class="feedback-content">
        <h2>${result.correct ? 'Correto!' : 'Incorreto!'}</h2>
        ${!result.correct ? `<p class="user-answer-recap">
          <span class="recap-verb">Verbo: <strong>${userVerbWord}</strong></span>
          <span class="recap-sep">·</span>
          <span class="recap-subject">Sujeito: <strong>${userSubjWords}</strong></span>
          <span class="recap-sep">·</span>
          <span class="recap-predicate">Predicado: <strong>${userPredWords}</strong></span>
        </p>` : ''}
        <p>${q.feedback}</p>
        ${q.example ? `<p>${q.example}</p>` : ''}
        <div class="hints-breakdown">
          <p class="hints-title">Papel de cada palavra:</p>
          <div class="hints-list">${hintsHTML}</div>
        </div>
      </div>
    </div>`;
}

// ── MÓDULO 3: RENDERIZAR QUESTÃO ─────────────────────────────
function renderModule3Question() {
  const qIdx   = state.m3activeSet[state.m3current];
  const q      = questions3[qIdx];
  const result = state.m3results[qIdx];
  const done   = result !== null;
  const isLast = state.m3current === state.m3activeSet.length - 1;
  const diffCls = q.difficulty === 'Médio'   ? ' difficulty-medium'
                : q.difficulty === 'Difícil' ? ' difficulty-hard' : '';

  $('quizContainer').innerHTML = `
    <div class="question-counter">Questão ${state.m3current + 1} de ${state.m3activeSet.length}</div>
    <div class="difficulty${diffCls}">${icons.bars} ${q.difficulty}</div>
    <button type="button" class="btn-lesson-hint" id="m3BtnLessonHint">
      <i class="fa-solid fa-book-open"></i> Consultar lição
    </button>
    <p class="question-title">${q.text}</p>
    ${buildTriSelect(q, result, done)}
    <div class="bottom-actions">
      <button type="button" class="btn-nav" id="m3PrevBtn"${state.m3current === 0 ? ' disabled' : ''}>
        ${icons.left} Questão anterior
      </button>
      <button type="button" class="btn-nav btn-nav-primary" id="m3NextBtn"${!done ? ' disabled' : ''}>
        ${isLast ? 'Ver resultado' : 'Próxima questão'} ${icons.right}
      </button>
    </div>`;

  if (!done) {
    $('quizContainer').querySelectorAll('.word-chip[data-wi]').forEach(chip => {
      chip.addEventListener('click', () => selectTriWord(+chip.dataset.wi));
    });
    const mv = $('triModeVerb');
    const ms = $('triModeSubject');
    const mp = $('triModePredicate');
    if (mv) mv.addEventListener('click', () => { state.m3pending.mode = 'verb';      renderModule3Question(); });
    if (ms) ms.addEventListener('click', () => { state.m3pending.mode = 'subject';   renderModule3Question(); });
    if (mp) mp.addEventListener('click', () => { state.m3pending.mode = 'predicate'; renderModule3Question(); });
    const confirmBtn = $('triConfirmBtn');
    if (confirmBtn) confirmBtn.addEventListener('click', confirmTriAnswer);
  }

  $('m3BtnLessonHint').addEventListener('click', () => openLessonModal(3));
  $('m3PrevBtn').addEventListener('click', () => m3navigate(-1));
  $('m3NextBtn').addEventListener('click', () => {
    if (isLast) { state.phase = 'module3-results'; render(); saveProgress(); }
    else        { m3navigate(1); }
  });
}

// ── MÓDULO 3: SELECIONAR PALAVRA ─────────────────────────────
function selectTriWord(wordIdx) {
  const { mode } = state.m3pending;
  if (mode === 'verb') {
    if (state.m3pending.verbIdx === wordIdx) {
      state.m3pending.predicateIdxs     = [];
      state.m3pending.predicateConfirmed = false;
      state.m3pending.verbIdx = null;
    } else {
      state.m3pending.subjectIdxs        = state.m3pending.subjectIdxs.filter(i => i !== wordIdx);
      state.m3pending.predicateIdxs      = [];
      state.m3pending.predicateConfirmed = false;
      state.m3pending.verbIdx = wordIdx;
      state.m3pending.mode    = 'subject';
    }
  } else if (mode === 'subject') {
    if (wordIdx === state.m3pending.verbIdx) return;
    state.m3pending.predicateIdxs = state.m3pending.predicateIdxs.filter(i => i !== wordIdx);
    const i = state.m3pending.subjectIdxs.indexOf(wordIdx);
    if (i === -1) state.m3pending.subjectIdxs.push(wordIdx);
    else          state.m3pending.subjectIdxs.splice(i, 1);
  } else {
    if (wordIdx === state.m3pending.verbIdx) {
      state.m3pending.predicateConfirmed = true;
      if (!state.m3pending.predicateIdxs.includes(wordIdx)) state.m3pending.predicateIdxs.push(wordIdx);
    } else {
      if (state.m3pending.subjectIdxs.includes(wordIdx)) return;
      const i = state.m3pending.predicateIdxs.indexOf(wordIdx);
      if (i === -1) state.m3pending.predicateIdxs.push(wordIdx);
      else          state.m3pending.predicateIdxs.splice(i, 1);
    }
  }
  renderModule3Question();
}

// ── MÓDULO 3: CONFIRMAR RESPOSTA ─────────────────────────────
function confirmTriAnswer() {
  const qIdx = state.m3activeSet[state.m3current];
  if (state.m3results[qIdx] !== null) return;
  const q = questions3[qIdx];
  const { verbIdx, subjectIdxs, predicateIdxs, predicateConfirmed } = state.m3pending;
  if (verbIdx === null || subjectIdxs.length === 0) return;

  const verbCorrect      = verbIdx === q.verbIndex;
  const subjectCorrect   = subjectIdxs.length === q.subjectIndices.length &&
                           q.subjectIndices.every(i => subjectIdxs.includes(i));
  const predicateCorrect = predicateIdxs.length === q.predicateIndices.length &&
                           q.predicateIndices.every(i => predicateIdxs.includes(i));
  const correct = verbCorrect && subjectCorrect && predicateCorrect;

  state.m3results[qIdx] = {
    verbSelected: verbIdx,
    subjectSelected: [...subjectIdxs],
    predicateSelected: [...predicateIdxs],
    correct, verbCorrect, subjectCorrect, predicateCorrect,
  };
  if (correct)  state.m3points += 10;
  if (!correct) state.m3errorNotebook[qIdx] = (state.m3errorNotebook[qIdx] || 0) + 1;
  recordActivity();
  updateModule3Card();
  updateErrorNotebook();
  renderModule3Question();
  saveProgress();
}

// ── MÓDULO 3: NAVEGAR ────────────────────────────────────────
function m3navigate(dir) {
  state.m3current += dir;
  state.m3pending = { mode: 'verb', verbIdx: null, subjectIdxs: [], predicateIdxs: [], predicateConfirmed: false };
  renderModule3Question();
  saveProgress();
}

// ── MÓDULO 3: TELA DE RESULTADOS ─────────────────────────────
function renderModule3Results() {
  const correctCt = state.m3results.filter(r => r && r.correct).length;
  const wrongCt   = state.m3results.filter(r => r && !r.correct).length;
  const allClear  = wrongCt === 0;
  const iconBg    = allClear ? '#22c55e' : wrongCt > state.m3activeSet.length / 2 ? '#ef4444' : '#f97316';
  const iconName  = allClear ? 'fa-trophy' : 'fa-flag-checkered';

  $('quizContainer').innerHTML = `
    <div class="results-screen">
      <div class="results-icon" style="background:linear-gradient(135deg,${iconBg},${iconBg}bb)">
        <i class="fa-solid ${iconName}"></i>
      </div>
      <h2>Você concluiu as questões de Predicado — terceira etapa!</h2>
      <div class="results-stats-row">
        <div class="r-stat correct"><strong>${correctCt}</strong><span>Corretas</span></div>
        <div class="r-stat wrong"><strong>${wrongCt}</strong><span>Incorretas</span></div>
      </div>
      ${allClear
        ? `<p class="results-message">Parabéns! Você acertou todas as questões!</p>
           <div class="results-actions">
             <button type="button" class="btn-nav" id="m3RetryBtn">${icons.retry} Recomeçar</button>
             <button type="button" class="btn-nav btn-nav-primary" id="m3NextModuleBtn">Próximo módulo ${icons.right}</button>
           </div>`
        : `<p class="results-message">
             Você errou <strong>${wrongCt}</strong> questão${wrongCt > 1 ? 'ões' : ''}.
             Clique em <strong>Praticar erros</strong> para tentar novamente as que errou.
           </p>
           <div class="results-actions">
             <button type="button" class="btn-nav" id="m3RetryBtn">${icons.retry} Recomeçar tudo</button>
             <button type="button" class="btn-nav btn-nav-primary" id="m3PracticeBtn">
               Praticar erros ${icons.right}
             </button>
           </div>`
      }
    </div>`;

  $('m3RetryBtn').addEventListener('click', startModule3Quiz);

  if (allClear && $('m3NextModuleBtn')) {
    $('m3NextModuleBtn').addEventListener('click', () => {
      state.m4unlocked = true;
      state.phase = 'module4-intro';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      render();
      saveProgress();
    });
  }

  if (!allClear) {
    $('m3PracticeBtn').addEventListener('click', () => {
      const wrongSet = state.m3results
        .map((r, i) => (r && !r.correct) ? i : -1)
        .filter(i => i !== -1);
      wrongSet.forEach(i => { state.m3results[i] = null; });
      state.m3activeSet = wrongSet;
      state.m3current   = 0;
      state.m3pending   = { mode: 'verb', verbIdx: null, subjectIdxs: [], predicateIdxs: [], predicateConfirmed: false };
      state.phase       = 'module3-quiz';
      render();
      saveProgress();
    });
  }
}

// ── MÓDULO 4: INICIAR QUIZ ───────────────────────────────────
function startModule4Quiz() {
  state.m4phase     = 'quiz';
  state.m4current   = 0;
  state.m4activeSet = questions4.map((_, i) => i);
  state.m4results   = new Array(questions4.length).fill(null);
  state.m4points    = 0;
  state.m4pending   = { mode: 'verb', verbIdx: null, subjectIdxs: [], predicateIdxs: [], noSubject: false, predicateConfirmed: false };
  state.phase       = 'module4-quiz';
  updateModule4Card();
  render();
  saveProgress();
}

// ── MÓDULO 4: MONTAR TRI-SELECT COM "SEM SUJEITO" ────────────
function buildM4TriSelect(q, result, done) {
  if (!done) {
    const { mode, verbIdx, subjectIdxs, predicateIdxs, noSubject, predicateConfirmed } = state.m4pending;
    const canConfirm = verbIdx !== null && (subjectIdxs.length > 0 || noSubject);

    const sentenceHTML = buildAnnotatedSentence3(q,
      (word, idx) => {
        let cls = 'word-chip';
        if (idx === verbIdx)                                     cls += (mode === 'predicate' && predicateConfirmed) ? ' predicate-pending' : ' verb-pending';
        else if (!noSubject && subjectIdxs.includes(idx))       cls += ' subject-pending';
        else if (predicateIdxs.includes(idx))                   cls += ' predicate-pending';
        return `<span class="${cls}" data-wi="${idx}" style="grid-column:${idx+1};grid-row:1">${word}</span>`;
      },
      () => {
        let a = '';
        if (!noSubject && subjectIdxs.length > 0) {
          const sorted = [...subjectIdxs].sort((a,b) => a-b);
          a += `<div class="annot-subject" style="grid-column:${sorted[0]+1}/span ${sorted[sorted.length-1]-sorted[0]+1};grid-row:2">Sujeito</div>`;
        }
        if (verbIdx !== null) {
          a += `<div class="annot-verb" style="grid-column:${verbIdx+1};grid-row:2">Verbo</div>`;
        }
        if (predicateConfirmed || predicateIdxs.some(i => i !== verbIdx)) {
          const renderIdxs = predicateIdxs;
          if (renderIdxs.length > 0) {
            const sorted = [...renderIdxs].sort((a,b) => a-b);
            const segs = []; let seg = [sorted[0]];
            for (let i = 1; i < sorted.length; i++) {
              const prev = sorted[i-1], curr = sorted[i];
              let ok = true;
              for (let j = prev+1; j < curr; j++) if (!PUNCT.has(q.sentence[j])) { ok = false; break; }
              ok ? seg.push(curr) : (segs.push(seg), seg = [curr]);
            }
            segs.push(seg);
            segs.forEach(g => { a += `<div class="annot-predicate" style="grid-column:${g[0]+1}/span ${g[g.length-1]-g[0]+1};grid-row:3">Predicado</div>`; });
          }
        }
        return a;
      }
    );

    const verbBtnCls = mode === 'verb'                       ? 'dual-mode-btn active-verb'      : 'dual-mode-btn';
    const subjBtnCls = mode === 'subject' && !noSubject      ? 'dual-mode-btn active-subject'   : 'dual-mode-btn';
    const predBtnCls = mode === 'predicate'                  ? 'dual-mode-btn active-predicate' : 'dual-mode-btn';
    const noSbjCls   = noSubject ? 'm4-nosubj-btn active' : 'm4-nosubj-btn';

    return `
      <div class="dual-mode-toggle">
        <button type="button" class="${verbBtnCls}" id="m4ModeVerb">
          <i class="fa-solid fa-circle" style="color:#2563eb;font-size:8px"></i> VERBO
        </button>
        <button type="button" class="${subjBtnCls}" id="m4ModeSubject">
          <i class="fa-solid fa-circle" style="color:#dc2626;font-size:8px"></i> SUJEITO
        </button>
        <button type="button" class="${predBtnCls}" id="m4ModePredicate">
          <i class="fa-solid fa-circle" style="color:#7c3aed;font-size:8px"></i> PREDICADO
        </button>
      </div>
      <div class="m4-nosubj-row">
        <button type="button" class="${noSbjCls}" id="m4NoSubjBtn">
          <i class="fa-solid fa-ban" style="font-size:10px"></i>
          ${noSubject ? 'Marcado: sem sujeito' : 'Oração sem sujeito'}
        </button>
      </div>
      ${sentenceHTML}
      <button type="button" class="dual-confirm-btn" id="m4ConfirmBtn"${canConfirm ? '' : ' disabled'}>
        ${icons.check} Confirmar resposta
      </button>`;
  }

  // ── Questão já respondida ──────────────────────────────────
  const sentenceHTML = buildAnnotatedSentence3(q,
    (word, idx) => {
      let cls = 'word-chip disabled';
      const isVerb = idx === q.verbIndex;
      const isSubj = !q.noSubject && q.subjectIndices.includes(idx);
      const isPred = q.predicateIndices.includes(idx);
      const wasVerb = idx === result.verbSelected;
      const wasSubj = !result.noSubjectSelected && result.subjectSelected.includes(idx);
      const wasPred = result.predicateSelected.includes(idx);
      if      (isVerb)               cls += ' correct-verb';
      else if (isSubj)               cls += ' correct-subject';
      else if (isPred)               cls += ' lesson-predicate';
      else if (wasVerb && !isVerb)   cls += ' wrong-verb';
      else if (wasSubj && !isSubj)   cls += ' wrong-subject';
      else if (wasPred && !isPred)   cls += ' wrong-subject';
      return `<span class="${cls}" style="grid-column:${idx+1};grid-row:1">${word}</span>`;
    },
    (q) => {
      let a = '';
      if (!q.noSubject && q.subjectIndices.length > 0) {
        const subjStart = Math.min(...q.subjectIndices) + 1;
        const subjSpan  = Math.max(...q.subjectIndices) - Math.min(...q.subjectIndices) + 1;
        a += `<div class="annot-subject" style="grid-column:${subjStart}/span ${subjSpan};grid-row:2">Sujeito</div>`;
      }
      a += `<div class="annot-verb" style="grid-column:${q.verbIndex+1};grid-row:2">Verbo</div>`;
      if (q.predicateIndices.length > 0) {
        const predStart = Math.min(...q.predicateIndices) + 1;
        const predSpan  = Math.max(...q.predicateIndices) - Math.min(...q.predicateIndices) + 1;
        a += `<div class="annot-predicate" style="grid-column:${predStart}/span ${predSpan};grid-row:3">Predicado</div>`;
      }
      return a;
    }
  );

  const hintsHTML = q.sentence.map((word, idx) => {
    if (PUNCT.has(word)) return '';
    const isVerb = idx === q.verbIndex;
    const isSubj = !q.noSubject && q.subjectIndices.includes(idx);
    const isPred = q.predicateIndices.includes(idx) && !isVerb;
    const role   = isVerb ? 'Verbo' : isSubj ? 'Sujeito' : isPred ? 'Predicado' : '—';
    const cls    = isVerb ? ' correct' : isSubj ? ' subject-hint' : isPred ? ' predicate-hint' : '';
    return `<div class="hint-row">
      <span class="wh-word${isVerb || isSubj || isPred ? ' correct' : ''}">${word}</span>
      <span class="wh-arrow">→</span>
      <span class="hint-label${cls}">${role}</span>
      ${isVerb || isSubj || isPred ? `<span class="hint-check">${icons.check}</span>` : ''}
    </div>`;
  }).filter(h => h).join('');

  const userVerbWord  = result.verbSelected != null ? q.sentence[result.verbSelected] : '—';
  const userSubjWords = result.noSubjectSelected ? 'Sem sujeito (✓)' :
    result.subjectSelected.length > 0
      ? result.subjectSelected.slice().sort((a,b) => a-b).map(i => q.sentence[i]).join(' ') : '—';
  const userPredWords = result.predicateSelected.length > 0
    ? result.predicateSelected.slice().sort((a,b) => a-b).map(i => q.sentence[i]).join(' ') : '—';

  const noSubjLabel = q.noSubject
    ? `<div class="m4-nosubj-result-tag${result.subjectCorrect ? '' : ' wrong'}">
        <i class="fa-solid fa-ban"></i>
        ${result.subjectCorrect ? 'Correto: esta oração não possui sujeito' : 'Incorreto: esta oração não possui sujeito'}
      </div>` : '';

  return `
    ${sentenceHTML}
    ${noSubjLabel}
    <div class="feedback${result.correct ? '' : ' wrong'}">
      <div class="feedback-icon">${result.correct ? icons.check : icons.x}</div>
      <div class="feedback-content">
        <h2>${result.correct ? 'Correto!' : 'Incorreto!'}</h2>
        ${!result.correct ? `<p class="user-answer-recap">
          <span class="recap-verb">Verbo: <strong>${userVerbWord}</strong></span>
          <span class="recap-sep">·</span>
          <span class="recap-subject">Sujeito: <strong>${userSubjWords}</strong></span>
          <span class="recap-sep">·</span>
          <span class="recap-predicate">Predicado: <strong>${userPredWords}</strong></span>
        </p>` : ''}
        <p>${q.feedback}</p>
        <div class="hints-breakdown">
          <p class="hints-title">Papel de cada palavra:</p>
          <div class="hints-list">${hintsHTML}</div>
        </div>
        ${q.noSubject ? `<p class="m4-nosubj-note"><i class="fa-solid fa-ban"></i> Esta oração <strong>não possui sujeito</strong> — verbo impessoal.</p>` : ''}
      </div>
    </div>`;
}

// ── MÓDULO 4: RENDERIZAR QUESTÃO ─────────────────────────────
function renderModule4Question() {
  const qIdx   = state.m4activeSet[state.m4current];
  const q      = questions4[qIdx];
  const result = state.m4results[qIdx];
  const done   = result !== null;
  const isLast = state.m4current === state.m4activeSet.length - 1;
  const diffCls = q.difficulty === 'Médio'   ? ' difficulty-medium'
                : q.difficulty === 'Difícil' ? ' difficulty-hard' : '';

  $('quizContainer').innerHTML = `
    <div class="question-counter">Questão ${state.m4current + 1} de ${state.m4activeSet.length}</div>
    <div class="difficulty${diffCls}">${icons.bars} ${q.difficulty}</div>
    <button type="button" class="btn-lesson-hint" id="m4BtnLessonHint">
      <i class="fa-solid fa-book-open"></i> Consultar lição
    </button>
    <p class="question-title">${q.text}</p>
    ${buildM4TriSelect(q, result, done)}
    <div class="bottom-actions">
      <button type="button" class="btn-nav" id="m4PrevBtn"${state.m4current === 0 ? ' disabled' : ''}>
        ${icons.left} Questão anterior
      </button>
      <button type="button" class="btn-nav btn-nav-primary" id="m4NextBtn"${!done ? ' disabled' : ''}>
        ${isLast ? 'Ver resultado' : 'Próxima questão'} ${icons.right}
      </button>
    </div>`;

  if (!done) {
    $('quizContainer').querySelectorAll('.word-chip[data-wi]').forEach(chip => {
      chip.addEventListener('click', () => selectM4Word(+chip.dataset.wi));
    });
    const mv = $('m4ModeVerb');
    const ms = $('m4ModeSubject');
    const mp = $('m4ModePredicate');
    const mn = $('m4NoSubjBtn');
    if (mv) mv.addEventListener('click', () => { state.m4pending.mode = 'verb';      renderModule4Question(); });
    if (ms) ms.addEventListener('click', () => { state.m4pending.mode = 'subject';   renderModule4Question(); });
    if (mp) mp.addEventListener('click', () => { state.m4pending.mode = 'predicate'; renderModule4Question(); });
    if (mn) mn.addEventListener('click', toggleM4NoSubject);
    const confirmBtn = $('m4ConfirmBtn');
    if (confirmBtn) confirmBtn.addEventListener('click', confirmM4Answer);
  }

  $('m4BtnLessonHint').addEventListener('click', () => openLessonModal(4));
  $('m4PrevBtn').addEventListener('click', () => m4navigate(-1));
  $('m4NextBtn').addEventListener('click', () => {
    if (isLast) { state.phase = 'module4-results'; render(); saveProgress(); }
    else        { m4navigate(1); }
  });
}

// ── MÓDULO 4: SELECIONAR PALAVRA ─────────────────────────────
function selectM4Word(wordIdx) {
  const { mode, noSubject } = state.m4pending;
  if (mode === 'verb') {
    if (state.m4pending.verbIdx === wordIdx) {
      state.m4pending.predicateIdxs     = [];
      state.m4pending.predicateConfirmed = false;
      state.m4pending.verbIdx = null;
    } else {
      state.m4pending.subjectIdxs        = state.m4pending.subjectIdxs.filter(i => i !== wordIdx);
      state.m4pending.predicateIdxs      = [];
      state.m4pending.predicateConfirmed = false;
      state.m4pending.verbIdx = wordIdx;
      state.m4pending.mode    = 'subject';
    }
  } else if (mode === 'subject') {
    if (noSubject) return;
    if (wordIdx === state.m4pending.verbIdx) return;
    state.m4pending.predicateIdxs = state.m4pending.predicateIdxs.filter(i => i !== wordIdx);
    const i = state.m4pending.subjectIdxs.indexOf(wordIdx);
    if (i === -1) state.m4pending.subjectIdxs.push(wordIdx);
    else          state.m4pending.subjectIdxs.splice(i, 1);
  } else {
    if (wordIdx === state.m4pending.verbIdx) {
      state.m4pending.predicateConfirmed = true;
      if (!state.m4pending.predicateIdxs.includes(wordIdx)) state.m4pending.predicateIdxs.push(wordIdx);
    } else {
      if (state.m4pending.subjectIdxs.includes(wordIdx)) return;
      const i = state.m4pending.predicateIdxs.indexOf(wordIdx);
      if (i === -1) state.m4pending.predicateIdxs.push(wordIdx);
      else          state.m4pending.predicateIdxs.splice(i, 1);
    }
  }
  renderModule4Question();
}

// ── MÓDULO 4: TOGGLE SEM SUJEITO ─────────────────────────────
function toggleM4NoSubject() {
  if (state.m4pending.noSubject) {
    state.m4pending.noSubject = false;
    state.m4pending.mode = 'subject';
  } else {
    state.m4pending.noSubject    = true;
    state.m4pending.subjectIdxs  = [];
    state.m4pending.mode         = 'predicate';
  }
  renderModule4Question();
}

// ── MÓDULO 4: CONFIRMAR RESPOSTA ─────────────────────────────
function confirmM4Answer() {
  const qIdx = state.m4activeSet[state.m4current];
  if (state.m4results[qIdx] !== null) return;
  const q = questions4[qIdx];
  const { verbIdx, subjectIdxs, predicateIdxs, noSubject, predicateConfirmed } = state.m4pending;
  if (verbIdx === null) return;
  if (!noSubject && subjectIdxs.length === 0) return;

  const verbCorrect      = verbIdx === q.verbIndex;
  const predicateCorrect = predicateIdxs.length === q.predicateIndices.length &&
                           q.predicateIndices.every(i => predicateIdxs.includes(i));
  const subjectCorrect   = q.noSubject
    ? noSubject
    : (!noSubject && subjectIdxs.length === q.subjectIndices.length &&
       q.subjectIndices.every(i => subjectIdxs.includes(i)));
  const correct = verbCorrect && subjectCorrect && predicateCorrect;

  state.m4results[qIdx] = {
    verbSelected: verbIdx,
    subjectSelected: [...subjectIdxs],
    predicateSelected: [...predicateIdxs],
    noSubjectSelected: noSubject,
    correct, verbCorrect, subjectCorrect, predicateCorrect,
  };
  if (correct)  state.m4points += 10;
  if (!correct) state.m4errorNotebook[qIdx] = (state.m4errorNotebook[qIdx] || 0) + 1;
  recordActivity();
  updateModule4Card();
  updateErrorNotebook();
  renderModule4Question();
  saveProgress();
}

// ── MÓDULO 4: NAVEGAR ────────────────────────────────────────
function m4navigate(dir) {
  state.m4current += dir;
  state.m4pending = { mode: 'verb', verbIdx: null, subjectIdxs: [], predicateIdxs: [], noSubject: false, predicateConfirmed: false };
  renderModule4Question();
  saveProgress();
}

// ── MÓDULO 4: TELA DE RESULTADOS ─────────────────────────────
function renderModule4Results() {
  const correctCt = state.m4results.filter(r => r && r.correct).length;
  const wrongCt   = state.m4results.filter(r => r && !r.correct).length;
  const allClear  = wrongCt === 0;
  const iconBg    = allClear ? '#22c55e' : wrongCt > state.m4activeSet.length / 2 ? '#ef4444' : '#f97316';
  const iconName  = allClear ? 'fa-trophy' : 'fa-flag-checkered';

  $('quizContainer').innerHTML = `
    <div class="results-screen">
      <div class="results-icon" style="background:linear-gradient(135deg,${iconBg},${iconBg}bb)">
        <i class="fa-solid ${iconName}"></i>
      </div>
      <h2>Você concluiu as questões de Orações sem sujeito — quarta etapa!</h2>
      <div class="results-stats-row">
        <div class="r-stat correct"><strong>${correctCt}</strong><span>Corretas</span></div>
        <div class="r-stat wrong"><strong>${wrongCt}</strong><span>Incorretas</span></div>
      </div>
      ${allClear
        ? `<p class="results-message">Parabéns! Você acertou todas as questões!</p>
           <div class="results-actions">
             <button type="button" class="btn-nav" id="m4RetryBtn">${icons.retry} Recomeçar</button>
           </div>`
        : `<p class="results-message">
             Você errou <strong>${wrongCt}</strong> questão${wrongCt > 1 ? 'ões' : ''}.
             Clique em <strong>Praticar erros</strong> para tentar novamente as que errou.
           </p>
           <div class="results-actions">
             <button type="button" class="btn-nav" id="m4RetryBtn">${icons.retry} Recomeçar tudo</button>
             <button type="button" class="btn-nav btn-nav-primary" id="m4PracticeBtn">
               Praticar erros ${icons.right}
             </button>
           </div>`
      }
    </div>`;

  $('m4RetryBtn').addEventListener('click', startModule4Quiz);

  if (!allClear && $('m4PracticeBtn')) {
    $('m4PracticeBtn').addEventListener('click', () => {
      const wrongSet = state.m4results
        .map((r, i) => (r && !r.correct) ? i : -1)
        .filter(i => i !== -1);
      wrongSet.forEach(i => { state.m4results[i] = null; });
      state.m4activeSet = wrongSet;
      state.m4current   = 0;
      state.m4pending   = { mode: 'verb', verbIdx: null, subjectIdxs: [], predicateIdxs: [], noSubject: false, predicateConfirmed: false };
      state.phase       = 'module4-quiz';
      render();
      saveProgress();
    });
  }
}

// ── MÓDULO 5: INICIAR QUIZ ───────────────────────────────────
function startModule5Quiz() {
  state.m5phase     = 'quiz';
  state.m5current   = 0;
  state.m5activeSet = questions5.map((_, i) => i);
  state.m5results   = new Array(questions5.length).fill(null);
  state.m5points    = 0;
  state.m5pending   = { mode: 'verb', verbIdx: null, subjectIdxs: [], predicateIdxs: [], predicateConfirmed: false };
  state.phase       = 'module5-quiz';
  updateModule5Card();
  render();
  saveProgress();
}

// ── MÓDULO 5: MONTAR TRI-SELECT ───────────────────────────────
function buildM5TriSelect(q, result, done) {
  if (!done) {
    const { mode, verbIdx, subjectIdxs, predicateIdxs, predicateConfirmed } = state.m5pending;
    const canConfirm = verbIdx !== null && subjectIdxs.length > 0;

    const sentenceHTML = buildAnnotatedSentence3(q,
      (word, idx) => {
        let cls = 'word-chip';
        if (idx === verbIdx)                  cls += (mode === 'predicate' && predicateConfirmed) ? ' predicate-pending' : ' verb-pending';
        else if (subjectIdxs.includes(idx))   cls += ' subject-pending';
        else if (predicateIdxs.includes(idx)) cls += ' predicate-pending';
        return `<span class="${cls}" data-wi="${idx}" style="grid-column:${idx+1};grid-row:1">${word}</span>`;
      },
      () => {
        let a = '';
        if (subjectIdxs.length > 0) {
          const sorted = [...subjectIdxs].sort((a,b) => a-b);
          a += `<div class="annot-subject" style="grid-column:${sorted[0]+1}/span ${sorted[sorted.length-1]-sorted[0]+1};grid-row:2">Sujeito</div>`;
        }
        if (verbIdx !== null) {
          a += `<div class="annot-verb" style="grid-column:${verbIdx+1};grid-row:2">Verbo</div>`;
        }
        if (predicateConfirmed || predicateIdxs.some(i => i !== verbIdx)) {
          const renderIdxs = predicateIdxs;
          if (renderIdxs.length > 0) {
            const sorted = [...renderIdxs].sort((a,b) => a-b);
            const segs = []; let seg = [sorted[0]];
            for (let i = 1; i < sorted.length; i++) {
              const prev = sorted[i-1], curr = sorted[i];
              let ok = true;
              for (let j = prev+1; j < curr; j++) if (!PUNCT.has(q.sentence[j])) { ok = false; break; }
              ok ? seg.push(curr) : (segs.push(seg), seg = [curr]);
            }
            segs.push(seg);
            segs.forEach(g => { a += `<div class="annot-predicate" style="grid-column:${g[0]+1}/span ${g[g.length-1]-g[0]+1};grid-row:3">Predicado</div>`; });
          }
        }
        return a;
      }
    );

    const verbBtnCls = mode === 'verb'      ? 'dual-mode-btn active-verb'      : 'dual-mode-btn';
    const subjBtnCls = mode === 'subject'   ? 'dual-mode-btn active-subject'   : 'dual-mode-btn';
    const predBtnCls = mode === 'predicate' ? 'dual-mode-btn active-predicate' : 'dual-mode-btn';

    return `
      <div class="dual-mode-toggle">
        <button type="button" class="${verbBtnCls}" id="m5ModeVerb">
          <i class="fa-solid fa-circle" style="color:#2563eb;font-size:8px"></i> VERBO
        </button>
        <button type="button" class="${subjBtnCls}" id="m5ModeSubject">
          <i class="fa-solid fa-circle" style="color:#dc2626;font-size:8px"></i> SUJEITO
        </button>
        <button type="button" class="${predBtnCls}" id="m5ModePredicate">
          <i class="fa-solid fa-circle" style="color:#7c3aed;font-size:8px"></i> PREDICADO
        </button>
      </div>
      ${sentenceHTML}
      <button type="button" class="dual-confirm-btn" id="m5ConfirmBtn"${canConfirm ? '' : ' disabled'}>
        ${icons.check} Confirmar resposta
      </button>`;
  }

  // Questão já respondida — mostrar resultado
  const sentenceHTML = buildAnnotatedSentence3(q,
    (word, idx) => {
      let cls = 'word-chip disabled';
      const isVerb  = idx === q.verbIndex;
      const isSubj  = q.subjectIndices.includes(idx);
      const isPred  = q.predicateIndices.includes(idx);
      const wasVerb = idx === result.verbSelected;
      const wasSubj = result.subjectSelected.includes(idx);
      const wasPred = result.predicateSelected.includes(idx);
      if      (isVerb)                      cls += ' correct-verb';
      else if (isSubj)                      cls += ' correct-subject';
      else if (isPred)                      cls += ' lesson-predicate';
      else if (wasVerb && !isVerb)          cls += ' wrong-verb';
      else if (wasSubj && !isSubj)          cls += ' wrong-subject';
      else if (wasPred && !isPred)          cls += ' wrong-subject';
      return `<span class="${cls}" style="grid-column:${idx+1};grid-row:1">${word}</span>`;
    },
    (q) => {
      const subjStart = Math.min(...q.subjectIndices) + 1;
      const subjSpan  = Math.max(...q.subjectIndices) - Math.min(...q.subjectIndices) + 1;
      const predStart = Math.min(...q.predicateIndices) + 1;
      const predSpan  = Math.max(...q.predicateIndices) - Math.min(...q.predicateIndices) + 1;
      return `<div class="annot-subject" style="grid-column:${subjStart}/span ${subjSpan};grid-row:2">Sujeito</div>` +
             `<div class="annot-verb" style="grid-column:${q.verbIndex+1};grid-row:2">Verbo</div>` +
             `<div class="annot-predicate" style="grid-column:${predStart}/span ${predSpan};grid-row:3">Predicado</div>`;
    }
  );

  const hintsHTML = q.sentence.map((word, idx) => {
    if (PUNCT.has(word)) return '';
    const isVerb = idx === q.verbIndex;
    const isSubj = q.subjectIndices.includes(idx);
    const isPred = q.predicateIndices.includes(idx) && !isVerb;
    const role   = isVerb ? 'Verbo' : isSubj ? 'Sujeito' : isPred ? 'Predicado' : '—';
    const cls    = isVerb ? ' correct' : isSubj ? ' subject-hint' : isPred ? ' predicate-hint' : '';
    return `<div class="hint-row">
      <span class="wh-word${isVerb || isSubj || isPred ? ' correct' : ''}">${word}</span>
      <span class="wh-arrow">→</span>
      <span class="hint-label${cls}">${role}</span>
      ${isVerb || isSubj || isPred ? `<span class="hint-check">${icons.check}</span>` : ''}
    </div>`;
  }).filter(h => h).join('');

  const userVerbWord  = result.verbSelected != null ? q.sentence[result.verbSelected] : '—';
  const userSubjWords = result.subjectSelected.length > 0
    ? result.subjectSelected.slice().sort((a,b) => a-b).map(i => q.sentence[i]).join(' ') : '—';
  const userPredWords = result.predicateSelected.length > 0
    ? result.predicateSelected.slice().sort((a,b) => a-b).map(i => q.sentence[i]).join(' ') : '—';

  return `
    ${sentenceHTML}
    <div class="feedback${result.correct ? '' : ' wrong'}">
      <div class="feedback-icon">${result.correct ? icons.check : icons.x}</div>
      <div class="feedback-content">
        <h2>${result.correct ? 'Correto!' : 'Incorreto!'}</h2>
        ${!result.correct ? `<p class="user-answer-recap">
          <span class="recap-verb">Verbo: <strong>${userVerbWord}</strong></span>
          <span class="recap-sep">·</span>
          <span class="recap-subject">Sujeito: <strong>${userSubjWords}</strong></span>
          <span class="recap-sep">·</span>
          <span class="recap-predicate">Predicado: <strong>${userPredWords}</strong></span>
        </p>` : ''}
        <p>${q.feedback}</p>
        ${q.example ? `<p>${q.example}</p>` : ''}
        <div class="hints-breakdown">
          <p class="hints-title">Papel de cada palavra:</p>
          <div class="hints-list">${hintsHTML}</div>
        </div>
      </div>
    </div>`;
}

// ── MÓDULO 5: RENDERIZAR QUESTÃO ─────────────────────────────
function renderModule5Question() {
  const qIdx   = state.m5activeSet[state.m5current];
  const q      = questions5[qIdx];
  const result = state.m5results[qIdx];
  const done   = result !== null;
  const isLast = state.m5current === state.m5activeSet.length - 1;
  const diffCls = q.difficulty === 'Médio' ? ' difficulty-medium' : q.difficulty === 'Difícil' ? ' difficulty-hard' : '';

  $('quizContainer').innerHTML = `
    <div class="question-counter">Questão ${state.m5current + 1} de ${state.m5activeSet.length}</div>
    <div class="difficulty${diffCls}">${icons.bars} ${q.difficulty}</div>
    <button type="button" class="btn-lesson-hint" id="m5BtnLessonHint">
      <i class="fa-solid fa-book-open"></i> Consultar lição
    </button>
    <p class="question-title">${q.text}</p>
    ${buildM5TriSelect(q, result, done)}
    <div class="bottom-actions">
      <button type="button" class="btn-nav" id="m5PrevBtn"${state.m5current === 0 ? ' disabled' : ''}>
        ${icons.left} Questão anterior
      </button>
      <button type="button" class="btn-nav btn-nav-primary" id="m5NextBtn"${!done ? ' disabled' : ''}>
        ${isLast ? 'Ver resultado' : 'Próxima questão'} ${icons.right}
      </button>
    </div>`;

  if (!done) {
    $('quizContainer').querySelectorAll('.word-chip[data-wi]').forEach(chip => {
      chip.addEventListener('click', () => selectM5Word(+chip.dataset.wi));
    });
    const mv = $('m5ModeVerb');
    const ms = $('m5ModeSubject');
    const mp = $('m5ModePredicate');
    if (mv) mv.addEventListener('click', () => { state.m5pending.mode = 'verb';      renderModule5Question(); });
    if (ms) ms.addEventListener('click', () => { state.m5pending.mode = 'subject';   renderModule5Question(); });
    if (mp) mp.addEventListener('click', () => { state.m5pending.mode = 'predicate'; renderModule5Question(); });
    const confirmBtn = $('m5ConfirmBtn');
    if (confirmBtn) confirmBtn.addEventListener('click', confirmM5Answer);
  }

  $('m5BtnLessonHint').addEventListener('click', () => openLessonModal(5));
  $('m5PrevBtn').addEventListener('click', () => m5navigate(-1));
  $('m5NextBtn').addEventListener('click', () => {
    if (isLast) { state.phase = 'module5-results'; render(); saveProgress(); }
    else        { m5navigate(1); }
  });
}

// ── MÓDULO 5: SELECIONAR PALAVRA ─────────────────────────────
function selectM5Word(wordIdx) {
  const { mode } = state.m5pending;
  if (mode === 'verb') {
    if (state.m5pending.verbIdx === wordIdx) {
      state.m5pending.predicateIdxs     = [];
      state.m5pending.predicateConfirmed = false;
      state.m5pending.verbIdx = null;
    } else {
      state.m5pending.subjectIdxs        = state.m5pending.subjectIdxs.filter(i => i !== wordIdx);
      state.m5pending.predicateIdxs      = [];
      state.m5pending.predicateConfirmed = false;
      state.m5pending.verbIdx = wordIdx;
      state.m5pending.mode    = 'subject';
    }
  } else if (mode === 'subject') {
    if (wordIdx === state.m5pending.verbIdx) return;
    state.m5pending.predicateIdxs = state.m5pending.predicateIdxs.filter(i => i !== wordIdx);
    const i = state.m5pending.subjectIdxs.indexOf(wordIdx);
    if (i === -1) state.m5pending.subjectIdxs.push(wordIdx);
    else          state.m5pending.subjectIdxs.splice(i, 1);
  } else {
    if (wordIdx === state.m5pending.verbIdx) {
      state.m5pending.predicateConfirmed = true;
      if (!state.m5pending.predicateIdxs.includes(wordIdx)) state.m5pending.predicateIdxs.push(wordIdx);
    } else {
      if (state.m5pending.subjectIdxs.includes(wordIdx)) return;
      const i = state.m5pending.predicateIdxs.indexOf(wordIdx);
      if (i === -1) state.m5pending.predicateIdxs.push(wordIdx);
      else          state.m5pending.predicateIdxs.splice(i, 1);
    }
  }
  renderModule5Question();
}

// ── MÓDULO 5: CONFIRMAR RESPOSTA ─────────────────────────────
function confirmM5Answer() {
  const qIdx = state.m5activeSet[state.m5current];
  if (state.m5results[qIdx] !== null) return;
  const q = questions5[qIdx];
  const { verbIdx, subjectIdxs, predicateIdxs, predicateConfirmed } = state.m5pending;
  if (verbIdx === null || subjectIdxs.length === 0) return;

  const verbCorrect      = verbIdx === q.verbIndex;
  const subjectCorrect   = subjectIdxs.length === q.subjectIndices.length &&
                           q.subjectIndices.every(i => subjectIdxs.includes(i));
  const predicateCorrect = predicateIdxs.length === q.predicateIndices.length &&
                           q.predicateIndices.every(i => predicateIdxs.includes(i));
  const correct = verbCorrect && subjectCorrect && predicateCorrect;

  state.m5results[qIdx] = {
    verbSelected: verbIdx,
    subjectSelected: [...subjectIdxs],
    predicateSelected: [...predicateIdxs],
    correct, verbCorrect, subjectCorrect, predicateCorrect,
  };
  if (correct)  state.m5points += 10;
  if (!correct) state.m5errorNotebook[qIdx] = (state.m5errorNotebook[qIdx] || 0) + 1;
  recordActivity();
  updateModule5Card();
  updateErrorNotebook();
  renderModule5Question();
  saveProgress();
}

// ── MÓDULO 5: NAVEGAR ────────────────────────────────────────
function m5navigate(dir) {
  state.m5current += dir;
  state.m5pending = { mode: 'verb', verbIdx: null, subjectIdxs: [], predicateIdxs: [], predicateConfirmed: false };
  renderModule5Question();
  saveProgress();
}

// ── MÓDULO 5: TELA DE RESULTADOS ─────────────────────────────
function renderModule5Results() {
  const correctCt = state.m5results.filter(r => r && r.correct).length;
  const wrongCt   = state.m5results.filter(r => r && !r.correct).length;
  const allClear  = wrongCt === 0;
  const iconBg    = allClear ? '#22c55e' : wrongCt > state.m5activeSet.length / 2 ? '#ef4444' : '#f97316';
  const iconName  = allClear ? 'fa-trophy' : 'fa-flag-checkered';

  $('quizContainer').innerHTML = `
    <div class="results-screen">
      <div class="results-icon" style="background:linear-gradient(135deg,${iconBg},${iconBg}bb)">
        <i class="fa-solid ${iconName}"></i>
      </div>
      <h2>Você concluiu as questões de Inversão da ordem — quinta etapa!</h2>
      <div class="results-stats-row">
        <div class="r-stat correct"><strong>${correctCt}</strong><span>Corretas</span></div>
        <div class="r-stat wrong"><strong>${wrongCt}</strong><span>Incorretas</span></div>
      </div>
      ${allClear
        ? `<p class="results-message">Parabéns! Você acertou todas as questões!</p>
           <div class="results-actions">
             <button type="button" class="btn-nav" id="m5RetryBtn">${icons.retry} Recomeçar</button>
             <button type="button" class="btn-nav btn-nav-primary" id="m5NextModuleBtn">
               <i class="fa-solid fa-graduation-cap"></i> Ir para Simulados ${icons.right}
             </button>
           </div>`
        : `<p class="results-message">
             Você errou <strong>${wrongCt}</strong> questão${wrongCt > 1 ? 'ões' : ''}.
             Clique em <strong>Praticar erros</strong> para tentar novamente as que errou.
           </p>
           <div class="results-actions">
             <button type="button" class="btn-nav" id="m5RetryBtn">${icons.retry} Recomeçar tudo</button>
             <button type="button" class="btn-nav" id="m5PracticeBtn">
               Praticar erros ${icons.right}
             </button>
             <button type="button" class="btn-nav btn-nav-primary" id="m5NextModuleBtn">
               <i class="fa-solid fa-graduation-cap"></i> Ir para Simulados ${icons.right}
             </button>
           </div>`
      }
    </div>`;

  $('m5RetryBtn').addEventListener('click', startModule5Quiz);

  if ($('m5NextModuleBtn')) {
    $('m5NextModuleBtn').addEventListener('click', () => {
      state.simUnlocked = true;
      state.phase = 'sim-intro';
      render();
    });
  }

  if (!allClear && $('m5PracticeBtn')) {
    $('m5PracticeBtn').addEventListener('click', () => {
      const wrongSet = state.m5results
        .map((r, i) => (r && !r.correct) ? i : -1)
        .filter(i => i !== -1);
      wrongSet.forEach(i => { state.m5results[i] = null; });
      state.m5activeSet = wrongSet;
      state.m5current   = 0;
      state.m5pending   = { mode: 'verb', verbIdx: null, subjectIdxs: [], predicateIdxs: [], predicateConfirmed: false };
      state.phase       = 'module5-quiz';
      render();
      saveProgress();
    });
  }
}

// ── MÓDULO 5: IR PARA QUESTÃO (caderno de erros) ─────────────
function goToM5Question(qIdx) {
  state.cadernoQueue    = [{ mod: 5, qIdx: +qIdx }];
  state.cadernoCurrent  = 0;
  state.cadernoAnswered = {};
  cadernoResetPending();
  state.phase = 'caderno-quiz';
  render();
}

// ── MÓDULO 6: INTRO ──────────────────────────────────────────
function renderModule6Intro() {
  $('quizContainer').innerHTML = `
    <div class="lesson-screen">
      <div class="lesson-badge"><i class="fa-solid fa-book-open"></i> Sexta Etapa</div>
      <h2>Justificativa da lição:</h2>
      <p style="margin-top:8px;margin-bottom:0;font-size:15px;color:var(--text-gray);line-height:1.7;text-align:justify">
        Até o momento, estudamos os verbos em sua forma simples, analisando orações que apresentam apenas um verbo.
        A partir de agora, avançaremos para um novo nível de análise: as locuções, estruturas formadas por duas ou mais palavras que atuam juntas na oração.
      </p>
      <div class="lesson-body" style="margin-top:24px">
        <h3 class="lesson-title">Locução Verbal</h3>
        <p><strong>Locução</strong> é um termo da Língua Portuguesa que significa um conjunto de duas ou mais palavras que funcionam como uma só unidade de sentido dentro da frase.</p>
        <p>Os verbos ficam assim:</p>
        <div class="m3-example"><p><strong>Verbo auxiliar + verbo principal</strong></p></div>
        <p>No verbo principal aparece na forma <strong>infinitiva</strong>, <strong>gerúndio</strong> ou <strong>particípio</strong>.</p>
        <hr>
        <p>Já vimos o que é o infinitivo, terminação <strong>-ar, -er</strong> ou <strong>-ir</strong>.</p>
        <p>O <strong>gerúndio</strong> é uma das formas nominais do verbo e normalmente indica uma ação em andamento, acontecendo naquele momento. Os verbos no gerúndio terminam em:</p>
        <div class="lesson-table">
          <div class="lesson-row"><span class="lesson-col-key"><strong>-ando</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">estudar → estud<strong>ando</strong></span></div>
          <div class="lesson-row"><span class="lesson-col-key"><strong>-endo</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">correr → corr<strong>endo</strong></span></div>
          <div class="lesson-row"><span class="lesson-col-key"><strong>-indo</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">partir → part<strong>indo</strong></span></div>
        </div>
        <hr>
        <p>O <strong>particípio</strong> é uma das formas nominais do verbo e geralmente indica uma ação já concluída. Os verbos no particípio normalmente terminam em:</p>
        <div class="lesson-table">
          <div class="lesson-row"><span class="lesson-col-key"><strong>-ado</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">estudar → estud<strong>ado</strong></span></div>
          <div class="lesson-row"><span class="lesson-col-key"><strong>-ido</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">vender → vend<strong>ido</strong></span></div>
          <div class="lesson-row"><span class="lesson-col-key"><strong>-ido</strong></span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">partir → part<strong>ido</strong></span></div>
        </div>
        <hr>
        <p><strong>Exemplos de locuções verbais:</strong></p>
        <div class="lesson-grid">
          <span class="lg-key"><em>estava dormindo</em></span><span class="lg-arrow">→</span><span class="lg-val">auxiliar + gerúndio (ação em andamento)</span>
          <span class="lg-key"><em>vai viajar</em></span><span class="lg-arrow">→</span><span class="lg-val">auxiliar + infinitivo (ação futura)</span>
          <span class="lg-key"><em>tinha comido</em></span><span class="lg-arrow">→</span><span class="lg-val">auxiliar + particípio (ação concluída)</span>
        </div>
      </div>
      <button type="button" class="btn-nav btn-nav-primary" id="m6StartBtn">
        Iniciar exercícios ${icons.right}
      </button>
    </div>`;

  $('m6StartBtn').addEventListener('click', startModule6Quiz);
}

function startModule6Quiz() {
  const answered = state.m6results.filter(r => r !== null).length;
  if (answered > 0 && answered < questions6.length) {
    state.m6phase = 'quiz';
    state.phase   = 'module6-quiz';
  } else {
    state.m6activeSet = questions6.map((_, i) => i);
    state.m6current   = 0;
    state.m6results   = new Array(questions6.length).fill(null);
    state.m6points    = 0;
    state.m6pending   = { locuIndices: [] };
    state.m6phase     = 'quiz';
    state.phase       = 'module6-quiz';
  }
  updateModule6Card();
  render();
  saveProgress();
}

// ── MÓDULO 6: RENDERIZAR QUESTÃO ─────────────────────────────
function buildM6LocSelect(q, result, done) {
  const N = q.sentence.length;
  const diffCls = q.difficulty === 'Médio' ? ' difficulty-medium' : q.difficulty === 'Difícil' ? ' difficulty-hard' : '';

  if (!done) {
    const { locuIndices } = state.m6pending;
    const canConfirm = locuIndices.length >= 2;
    const sentenceHTML = buildAnnotatedSentence(q,
      (word, idx) => {
        let cls = 'word-chip';
        if (locuIndices.includes(idx)) cls += ' verb-pending';
        return `<span class="${cls}" data-m6wi="${idx}" style="grid-column:${idx+1};grid-row:1">${word}</span>`;
      },
      () => {
        if (locuIndices.length === 0) return '';
        const sorted = [...locuIndices].sort((a, b) => a - b);
        return `<div class="annot-verb" style="grid-column:${sorted[0]+1}/span ${sorted[sorted.length-1]-sorted[0]+1};grid-row:2">Locução Verbal</div>`;
      }
    );
    return `
      <div class="difficulty${diffCls}">${icons.bars} ${q.difficulty}</div>
      <p class="question-title">${q.text}</p>
      <p style="font-size:13px;color:var(--text-gray);margin:0 0 8px">Clique em <strong>todas</strong> as palavras que formam a locução verbal.</p>
      ${sentenceHTML}
      <button type="button" class="dual-confirm-btn" id="m6ConfirmBtn"${canConfirm ? '' : ' disabled'}>
        ${icons.check} Confirmar locução verbal
      </button>`;
  }

  // Questão respondida
  const sentenceHTML = buildAnnotatedSentence(q,
    (word, idx) => {
      let cls = 'word-chip disabled';
      const isCorrect  = q.locuIndices.includes(idx);
      const wasSelected = result.selected && result.selected.includes(idx);
      if (isCorrect)                    cls += ' correct-verb';
      else if (wasSelected && !isCorrect) cls += ' wrong-verb';
      return `<span class="${cls}" style="grid-column:${idx+1};grid-row:1">${word}</span>`;
    },
    () => {
      const sorted = [...q.locuIndices].sort((a, b) => a - b);
      return `<div class="annot-verb" style="grid-column:${sorted[0]+1}/span ${sorted[sorted.length-1]-sorted[0]+1};grid-row:2">Locução Verbal</div>`;
    }
  );
  const locuWords = q.locuIndices.map(i => q.sentence[i]).join(' ');
  return `
    <div class="difficulty${diffCls}">${icons.bars} ${q.difficulty}</div>
    <p class="question-title">${q.text}</p>
    ${sentenceHTML}
    <div class="feedback${result.correct ? '' : ' wrong'}">
      <div class="feedback-icon">${result.correct ? icons.check : icons.x}</div>
      <div class="feedback-content">
        <h2>${result.correct ? 'Correto!' : 'Incorreto!'}</h2>
        <p>A locução verbal é <strong>${locuWords}</strong> — <em>${q.auxVerb}</em> (auxiliar) + <em>${q.mainVerb}</em> (principal) na forma de ${q.verbType}.</p>
        <p>${q.feedback}</p>
      </div>
    </div>`;
}

const SENSE_OPTIONS = [
  { key: 'andamento', label: 'Ação em andamento', sub: 'auxiliar + gerúndio' },
  { key: 'futura',    label: 'Ação futura',        sub: 'auxiliar + infinitivo' },
  { key: 'concluida', label: 'Ação concluída',     sub: 'auxiliar + particípio' },
];

function buildM6SenseSelect(q, result, done) {
  const diffCls = q.difficulty === 'Médio' ? ' difficulty-medium' : q.difficulty === 'Difícil' ? ' difficulty-hard' : '';

  const sentenceHTML = q.sentence.map((word, idx) => {
    const isLocu = q.locuIndices.includes(idx);
    const cls = isLocu ? 'word-chip lesson-verb' : (PUNCT.has(word) ? 'word-chip punctuation' : 'word-chip disabled');
    return `<span class="${cls}">${word}</span>`;
  }).join('');

  const optionsHTML = SENSE_OPTIONS.map(s => {
    if (!done) {
      return `<button type="button" class="sense-option" data-sense="${s.key}">
        <span class="sense-label">${s.label}</span>
        <span class="sense-sub">${s.sub}</span>
      </button>`;
    }
    const isCorrect  = s.key === q.correctSense;
    const wasWrong   = s.key === result.selected && !result.correct;
    let cls = 'sense-option disabled';
    if (isCorrect) cls += ' sense-correct';
    if (wasWrong)  cls += ' sense-wrong';
    const icon = isCorrect ? `<span class="sense-icon">${icons.check}</span>`
               : wasWrong  ? `<span class="sense-icon">${icons.x}</span>` : '';
    return `<button type="button" class="${cls}" disabled>
      <span class="sense-label">${s.label}</span>
      <span class="sense-sub">${s.sub}</span>
      ${icon}
    </button>`;
  }).join('');

  const locuWords  = q.locuIndices.map(i => q.sentence[i]).join(' ');
  const senseLabel = q.correctSense === 'andamento' ? 'ação em andamento (auxiliar + gerúndio)'
                   : q.correctSense === 'futura'    ? 'ação futura (auxiliar + infinitivo)'
                   :                                  'ação concluída (auxiliar + particípio)';

  const feedbackHTML = done ? `
    <div class="feedback${result.correct ? '' : ' wrong'}">
      <div class="feedback-icon">${result.correct ? icons.check : icons.x}</div>
      <div class="feedback-content">
        <h2>${result.correct ? 'Correto!' : 'Incorreto!'}</h2>
        <p>A locução <strong>${locuWords}</strong> indica <strong>${senseLabel}</strong>.</p>
        <p>${q.feedback}</p>
      </div>
    </div>` : '';

  return `
    <div class="difficulty${diffCls}">${icons.bars} ${q.difficulty}</div>
    <p class="question-title">${q.text}</p>
    <div class="sense-sentence">${sentenceHTML}</div>
    ${!done ? `<p class="sense-hint">A locução verbal está destacada. Qual é o seu sentido?</p>` : ''}
    <div class="sense-options">${optionsHTML}</div>
    ${feedbackHTML}`;
}

function renderModule6Question() {
  const qIdx   = state.m6activeSet[state.m6current];
  const q      = questions6[qIdx];
  const result = state.m6results[qIdx];
  const done   = result !== null;
  const isLast = state.m6current === state.m6activeSet.length - 1;

  $('quizContainer').innerHTML = `
    <div class="lesson-screen">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;flex-wrap:wrap">
        <button type="button" class="btn-lesson-hint" id="m6LessonBtn"><i class="fa-solid fa-book-open"></i> Consultar lição</button>
        <span style="font-size:13px;color:var(--text-gray);margin-left:auto">Questão ${state.m6current + 1} de ${state.m6activeSet.length}</span>
      </div>
      ${q.type === 'sense-select' ? buildM6SenseSelect(q, result, done) : buildM6LocSelect(q, result, done)}
      ${done ? `<div class="bottom-actions">
        ${state.m6current > 0 ? `<button type="button" class="btn-nav" id="m6PrevBtn">${icons.left} Anterior</button>` : ''}
        ${isLast
          ? `<button type="button" class="btn-nav btn-nav-primary" id="m6ResultsBtn">${icons.check} Ver resultados</button>`
          : `<button type="button" class="btn-nav btn-nav-primary" id="m6NextBtn">Próxima ${icons.right}</button>`
        }
      </div>` : ''}
    </div>`;

  $('m6LessonBtn').addEventListener('click', () => openLessonModal(6));
  if (done) {
    if ($('m6PrevBtn')) $('m6PrevBtn').addEventListener('click', () => m6navigate(-1));
    if ($('m6NextBtn')) $('m6NextBtn').addEventListener('click', () => m6navigate(1));
    if ($('m6ResultsBtn')) $('m6ResultsBtn').addEventListener('click', () => { state.phase = 'module6-results'; render(); saveProgress(); });
    return;
  }

  if (q.type === 'sense-select') {
    document.querySelectorAll('[data-sense]').forEach(btn => {
      btn.addEventListener('click', () => selectM6Sense(btn.dataset.sense));
    });
  } else {
    document.querySelectorAll('[data-m6wi]').forEach(chip => {
      chip.addEventListener('click', () => selectM6Word(+chip.dataset.m6wi));
    });
    const cf = $('m6ConfirmBtn');
    if (cf) cf.addEventListener('click', confirmM6Answer);
  }
}

function selectM6Word(wordIdx) {
  if (PUNCT.has(questions6[state.m6activeSet[state.m6current]].sentence[wordIdx])) return;
  const loci = state.m6pending.locuIndices;
  const idx = loci.indexOf(wordIdx);
  if (idx === -1) loci.push(wordIdx); else loci.splice(idx, 1);
  renderModule6Question();
}

function confirmM6Answer() {
  const qIdx = state.m6activeSet[state.m6current];
  if (state.m6results[qIdx] !== null) return;
  const q = questions6[qIdx];
  const selected = [...state.m6pending.locuIndices];
  if (selected.length < 2) return;
  const correct = selected.length === q.locuIndices.length && q.locuIndices.every(i => selected.includes(i));
  state.m6results[qIdx] = { correct, selected };
  if (correct)  state.m6points += 10;
  if (!correct) state.m6errorNotebook[qIdx] = (state.m6errorNotebook[qIdx] || 0) + 1;
  state.m6pending = { locuIndices: [] };
  recordActivity();
  updateModule6Card();
  updateErrorNotebook();
  renderModule6Question();
  saveProgress();
}

function selectM6Sense(senseKey) {
  const qIdx = state.m6activeSet[state.m6current];
  if (state.m6results[qIdx] !== null) return;
  const q = questions6[qIdx];
  const correct = senseKey === q.correctSense;
  state.m6results[qIdx] = { correct, selected: senseKey };
  if (correct)  state.m6points += 10;
  if (!correct) state.m6errorNotebook[qIdx] = (state.m6errorNotebook[qIdx] || 0) + 1;
  recordActivity();
  updateModule6Card();
  updateErrorNotebook();
  renderModule6Question();
  saveProgress();
}

function m6navigate(dir) {
  state.m6current += dir;
  state.m6pending  = { locuIndices: [] };
  renderModule6Question();
  saveProgress();
}

// ── MÓDULO 6: RESULTADOS ──────────────────────────────────────
function renderModule6Results() {
  const correctCt = state.m6results.filter(r => r && r.correct).length;
  const wrongCt   = state.m6results.filter(r => r && !r.correct).length;
  const allClear  = wrongCt === 0;
  const iconBg    = allClear ? '#22c55e' : wrongCt > state.m6activeSet.length / 2 ? '#ef4444' : '#f97316';
  const iconName  = allClear ? 'fa-trophy' : 'fa-flag-checkered';

  $('quizContainer').innerHTML = `
    <div class="results-screen">
      <div class="results-icon" style="background:linear-gradient(135deg,${iconBg},${iconBg}bb)">
        <i class="fa-solid ${iconName}"></i>
      </div>
      <h2>Você concluiu as questões de Locução Verbal — sexta etapa!</h2>
      <div class="results-stats-row">
        <div class="r-stat correct"><strong>${correctCt}</strong><span>Corretas</span></div>
        <div class="r-stat wrong"><strong>${wrongCt}</strong><span>Incorretas</span></div>
      </div>
      ${allClear
        ? `<p class="results-message">Parabéns! Você acertou todas as questões!</p>
           <div class="results-actions">
             <button type="button" class="btn-nav" id="m6RetryBtn">${icons.retry} Recomeçar</button>
             <button type="button" class="btn-nav btn-nav-primary" id="m6NextModuleBtn">
               Próximo módulo ${icons.right}
             </button>
           </div>`
        : `<p class="results-message">
             Você errou <strong>${wrongCt}</strong> questão${wrongCt > 1 ? 'ões' : ''}.
             Clique em <strong>Praticar erros</strong> para tentar novamente as que errou.
             Para avançar ao próximo módulo é preciso terminar sem erros.
           </p>
           <div class="results-actions">
             <button type="button" class="btn-nav" id="m6RetryBtn">${icons.retry} Recomeçar tudo</button>
             <button type="button" class="btn-nav btn-nav-primary" id="m6PracticeBtn">
               Praticar erros ${icons.right}
             </button>
           </div>`
      }
    </div>`;

  $('m6RetryBtn').addEventListener('click', startModule6Quiz);

  if (allClear && $('m6NextModuleBtn')) {
    $('m6NextModuleBtn').addEventListener('click', () => {
      state.m7unlocked = true;
      state.phase = 'module7-intro';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      render();
      saveProgress();
    });
  }

  if (!allClear && $('m6PracticeBtn')) {
    $('m6PracticeBtn').addEventListener('click', () => {
      const wrongSet = state.m6results.map((r, i) => (r && !r.correct) ? i : -1).filter(i => i !== -1);
      wrongSet.forEach(i => { state.m6results[i] = null; });
      state.m6activeSet = wrongSet;
      state.m6current   = 0;
      state.m6pending   = { locuIndices: [] };
      state.phase       = 'module6-quiz';
      render();
      saveProgress();
    });
  }
}

// ── MÓDULO 6: IR PARA QUESTÃO (caderno de erros) ─────────────
function goToM6Question(qIdx) {
  state.cadernoQueue    = [{ mod: 6, qIdx: +qIdx }];
  state.cadernoCurrent  = 0;
  state.cadernoAnswered = {};
  state.cadernoPending  = { mode: 'verb', verbIdx: null, subjectIdxs: [], predicateIdxs: [], noSubject: false, predicateConfirmed: false };
  state.cadernoM6Pending = { locuIndices: [] };
  state.phase = 'caderno-quiz';
  render();
}

// ── MÓDULO 7: INTRO ──────────────────────────────────────────
function renderModule7Intro() {
  $('quizContainer').innerHTML = `
    <div class="lesson-screen">
      <div class="lesson-badge"><i class="fa-solid fa-book-open"></i> Sétima Etapa</div>
      <h2>Justificativa da lição:</h2>
      <div style="margin-top:8px;font-size:15px;color:var(--text-gray);line-height:1.7;text-align:justify">
        <p style="margin:0 0 8px 0">Até o momento, estudamos como identificar o sujeito da oração: a palavra ou grupo de palavras sobre o qual se faz uma declaração.</p>
        <p style="margin:0 0 8px 0">Para localizar o sujeito, seguimos este caminho:</p>
        <div class="lesson-table" style="margin-bottom:8px">
          <div class="lesson-row"><span class="lesson-col-key">1º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">encontrar o verbo</span></div>
          <div class="lesson-row"><span class="lesson-col-key">2º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">fazer a pergunta ao verbo</span></div>
          <div class="lesson-row"><span class="lesson-col-key">3º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">a resposta será o sujeito</span></div>
        </div>
        <p style="margin:0 0 8px 0">Agora vamos aprofundar essa análise. Além de localizar o sujeito, precisamos descobrir qual é a palavra principal dentro dele. Essa palavra principal recebe o nome de núcleo do sujeito.</p>
        <p style="margin:0 0 8px 0">Estudar o núcleo é importante porque ele concentra a ideia central do sujeito e será essencial nas próximas etapas, especialmente ao analisar a relação entre sujeito e verbo (estudo de concordância). Por isso, precisamos reconhecer:</p>
        <div class="lesson-table">
          <div class="lesson-row"><span class="lesson-col-key">1º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">onde está o sujeito</span></div>
          <div class="lesson-row"><span class="lesson-col-key">2º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">qual é sua palavra principal</span></div>
          <div class="lesson-row"><span class="lesson-col-key">3º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">quais palavras apenas acompanham esse núcleo</span></div>
        </div>
      </div>
      <div class="lesson-body" style="margin-top:24px">
        <h3 class="lesson-title">Núcleo do sujeito</h3>
        <p>O núcleo do sujeito é a <strong>palavra principal</strong> do sujeito.</p>
        <div class="m3-example"><p><em>O aluno chegou cedo.</em></p></div>
        <div class="lesson-table">
          <div class="lesson-row"><span class="lesson-col-key">Verbo</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">chegou</span></div>
          <div class="lesson-row"><span class="lesson-col-key">Pergunta</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Quem chegou?</span></div>
          <div class="lesson-row"><span class="lesson-col-key">Sujeito</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">o aluno</span></div>
          <div class="lesson-row"><span class="lesson-col-key">Núcleo</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><strong>aluno</strong> — <em>o</em> sozinho não transmite ideia completa</span></div>
        </div>
        <hr style="margin:16px 0;border:none;border-top:1px solid var(--border-color)">
        <h3 class="lesson-title">Palavras que acompanham o núcleo</h3>
        <div class="lesson-table">
          <div class="lesson-row"><span class="lesson-col-key">Determinar</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>o aluno</em> — "o" acompanha aluno</span></div>
          <div class="lesson-row"><span class="lesson-col-key">Caracterizar</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>aluno dedicado</em> — "dedicado" caracteriza aluno</span></div>
          <div class="lesson-row"><span class="lesson-col-key">Especificar</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>aluno da turma</em> — "da turma" especifica aluno; núcleo continua sendo aluno</span></div>
        </div>
        <hr style="margin:16px 0;border:none;border-top:1px solid var(--border-color)">
        <h3 class="lesson-title">Regras importantes</h3>
        <div class="lesson-table">
          <div class="lesson-row"><span class="lesson-col-key">1.</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">O núcleo normalmente é um <strong>substantivo</strong> — <em>A professora explicou a matéria.</em> → núcleo: <strong>professora</strong></span></div>
          <div class="lesson-row"><span class="lesson-col-key">2.</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">O núcleo pode ser uma palavra que ocupa o lugar do substantivo — <em>Ele chegou cedo.</em> → núcleo: <strong>ele</strong></span></div>
          <div class="lesson-row"><span class="lesson-col-key">3.</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">O sujeito <strong>não</strong> vem introduzido por preposição — <em>com os alunos</em> ✘ não é sujeito</span></div>
          <div class="lesson-row"><span class="lesson-col-key">4.</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">O <strong>artigo não é núcleo</strong> — <em>A menina sorriu.</em> → núcleo: <strong>menina</strong></span></div>
          <div class="lesson-row"><span class="lesson-col-key">5.</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Ao retirar os acompanhantes, a ideia central costuma permanecer — <em>Os alunos atentos da turma chegaram cedo.</em> → núcleo: <strong>alunos</strong></span></div>
        </div>
        <hr style="margin:16px 0;border:none;border-top:1px solid var(--border-color)">
        <h3 class="lesson-title">Como identificar o núcleo</h3>
        <div class="lesson-table">
          <div class="lesson-row"><span class="lesson-col-key">1º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Encontre o <strong>verbo</strong></span></div>
          <div class="lesson-row"><span class="lesson-col-key">2º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Pergunte: <strong>Quem + verbo?</strong> → resposta = sujeito</span></div>
          <div class="lesson-row"><span class="lesson-col-key">3º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Observe o sujeito e pergunte: <strong>qual é a palavra principal?</strong></span></div>
          <div class="lesson-row"><span class="lesson-col-key">4º</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">Retire mentalmente as palavras que acompanham — a restante é o <strong>núcleo</strong></span></div>
        </div>
        <hr style="margin:16px 0;border:none;border-top:1px solid var(--border-color)">
        <h3 class="lesson-title">Resumo</h3>
        <div class="lesson-table">
          <div class="lesson-row"><span class="lesson-col-key">Sujeito</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">termo sobre o qual se declara algo</span></div>
          <div class="lesson-row"><span class="lesson-col-key">Núcleo</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">palavra principal do sujeito</span></div>
          <div class="lesson-row"><span class="lesson-col-key">Acompanhantes</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val">determinam, caracterizam ou especificam</span></div>
        </div>
        <div class="tip-box" style="margin-top:16px">
          <i class="fa-regular fa-star"></i>
          <div style="display:flex;flex-direction:column;gap:4px">
            <span>✅ Normalmente substantivo</span>
            <span>✅ Pode ocupar lugar do substantivo</span>
            <span>✅ Artigo não é núcleo</span>
            <span>✅ Sujeito não vem com preposição</span>
          </div>
        </div>
      </div>
      <div style="display:flex;gap:12px;margin-top:24px;flex-wrap:wrap">
        <button type="button" class="btn-nav btn-nav-primary" id="startModule7Btn">
          Praticar questões ${icons.right}
        </button>
      </div>
    </div>`;

  $('startModule7Btn').addEventListener('click', startModule7Quiz);
}

function startModule7Quiz() {
  const answered = state.m7results.filter(r => r !== null).length;
  if (answered > 0 && answered < questions7.length) {
    // quiz em andamento — continua de onde parou
    state.m7phase = 'quiz';
    state.phase   = 'module7-quiz';
  } else {
    // início ou recomeço — zera tudo
    state.m7activeSet     = questions7.map((_, i) => i);
    state.m7current       = 0;
    state.m7results       = new Array(questions7.length).fill(null);
    state.m7points        = 0;
    state.m7errorNotebook = {};
    state.m7pending       = { mode: 'verb', verbIdx: null, subjectIdxs: [], nucleoIdx: null };
    state.m7phase         = 'quiz';
    state.phase           = 'module7-quiz';
    updateModule7Card();
    updateErrorNotebook();
  }
  render();
  saveProgress();
}

// ── MÓDULO 7: RENDERIZAR QUESTÃO ─────────────────────────────
function renderModule7Question() {
  const qIdx   = state.m7activeSet[state.m7current];
  const q      = questions7[qIdx];
  const result = state.m7results[qIdx];
  const done   = result !== null;
  const isLast = state.m7current === state.m7activeSet.length - 1;
  const diffCls = q.difficulty === 'Médio'   ? ' difficulty-medium'
                : q.difficulty === 'Difícil' ? ' difficulty-hard' : '';

  $('quizContainer').innerHTML = `
    <div class="question-counter">Questão ${state.m7current + 1} de ${state.m7activeSet.length}</div>
    <div class="difficulty${diffCls}">${icons.bars} ${q.difficulty}</div>
    <button type="button" class="btn-lesson-hint" id="m7BtnLessonHint">
      <i class="fa-solid fa-book-open"></i> Consultar lição
    </button>
    <p class="question-title">${q.text}</p>
    ${buildNucleoSelect(q, result, done, state.m7pending)}
    <div class="bottom-actions">
      <button type="button" class="btn-nav" id="m7PrevBtn"${state.m7current === 0 ? ' disabled' : ''}>
        ${icons.left} Questão anterior
      </button>
      <button type="button" class="btn-nav btn-nav-primary" id="m7NextBtn"${!done ? ' disabled' : ''}>
        ${isLast ? 'Ver resultado' : 'Próxima questão'} ${icons.right}
      </button>
    </div>`;

  if (!done) {
    $('quizContainer').querySelectorAll('.word-chip[data-wi]').forEach(chip => {
      chip.addEventListener('click', () => selectM7Word(+chip.dataset.wi));
    });
    const mv = $('m7ModeVerb');
    const ms = $('m7ModeSubject');
    const mn = $('m7ModeNucleo');
    if (mv) mv.addEventListener('click', () => { state.m7pending.mode = 'verb';    renderModule7Question(); });
    if (ms) ms.addEventListener('click', () => { state.m7pending.mode = 'subject'; renderModule7Question(); });
    if (mn) mn.addEventListener('click', () => { state.m7pending.mode = 'nucleo';  renderModule7Question(); });
    const confirmBtn = $('m7ConfirmBtn');
    if (confirmBtn) confirmBtn.addEventListener('click', confirmM7Answer);
  }

  $('m7BtnLessonHint').addEventListener('click', () => openLessonModal(7));
  $('m7PrevBtn').addEventListener('click', () => m7navigate(-1));
  $('m7NextBtn').addEventListener('click', () => {
    if (isLast) { state.phase = 'module7-results'; render(); saveProgress(); }
    else        { m7navigate(1); }
  });
}

// ── MÓDULO 7: SELECIONAR PALAVRA ─────────────────────────────
function selectM7Word(wordIdx) {
  const p = state.m7pending;
  if (p.mode === 'verb') {
    if (p.verbIdx === wordIdx) {
      p.verbIdx = null;
    } else {
      p.verbIdx = wordIdx;
      p.subjectIdxs = p.subjectIdxs.filter(i => i !== wordIdx);
      if (p.nucleoIdx === wordIdx) p.nucleoIdx = null;
      p.mode = 'subject';
    }
  } else if (p.mode === 'subject') {
    if (wordIdx === p.verbIdx) return;
    const i = p.subjectIdxs.indexOf(wordIdx);
    if (i === -1) {
      p.subjectIdxs.push(wordIdx);
    } else {
      p.subjectIdxs.splice(i, 1);
      if (p.nucleoIdx === wordIdx) p.nucleoIdx = null;
    }
  } else if (p.mode === 'nucleo') {
    if (!p.subjectIdxs.includes(wordIdx)) return;
    p.nucleoIdx = (p.nucleoIdx === wordIdx) ? null : wordIdx;
  }
  renderModule7Question();
}

// ── MÓDULO 7: CONFIRMAR RESPOSTA ─────────────────────────────
function confirmM7Answer() {
  const qIdx = state.m7activeSet[state.m7current];
  if (state.m7results[qIdx] !== null) return;
  const q = questions7[qIdx];
  const { verbIdx, subjectIdxs, nucleoIdx } = state.m7pending;
  if (verbIdx === null || subjectIdxs.length === 0 || nucleoIdx === null) return;

  const verbCorrect    = verbIdx === q.verbIndex;
  const subjectCorrect = subjectIdxs.length === q.subjectIndices.length &&
                         q.subjectIndices.every(i => subjectIdxs.includes(i));
  const nucleoCorrect  = nucleoIdx === q.nucleoIndex;
  const correct = verbCorrect && subjectCorrect && nucleoCorrect;

  state.m7results[qIdx] = {
    verbSelected: verbIdx, subjectSelected: [...subjectIdxs], nucleoSelected: nucleoIdx,
    correct, verbCorrect, subjectCorrect, nucleoCorrect
  };
  if (correct)  state.m7points += 10;
  if (!correct) state.m7errorNotebook[qIdx] = (state.m7errorNotebook[qIdx] || 0) + 1;
  recordActivity();
  updateModule7Card();
  updateErrorNotebook();
  renderModule7Question();
  saveProgress();
}

// ── MÓDULO 7: NAVEGAR ────────────────────────────────────────
function m7navigate(dir) {
  state.m7current += dir;
  state.m7pending = { mode: 'verb', verbIdx: null, subjectIdxs: [], nucleoIdx: null };
  renderModule7Question();
  saveProgress();
}

// ── MÓDULO 7: TELA DE RESULTADOS ─────────────────────────────
function renderModule7Results() {
  const correctCt = state.m7results.filter(r => r && r.correct).length;
  const wrongCt   = state.m7results.filter(r => r && !r.correct).length;
  const allClear  = wrongCt === 0;
  const iconBg    = allClear ? '#22c55e' : wrongCt > state.m7activeSet.length / 2 ? '#ef4444' : '#f97316';
  const iconName  = allClear ? 'fa-trophy' : 'fa-flag-checkered';

  $('quizContainer').innerHTML = `
    <div class="results-screen">
      <div class="results-icon" style="background:linear-gradient(135deg,${iconBg},${iconBg}bb)">
        <i class="fa-solid ${iconName}"></i>
      </div>
      <h2>Você concluiu as questões de Núcleo simples do sujeito — sétima etapa!</h2>
      <div class="results-stats-row">
        <div class="r-stat correct"><strong>${correctCt}</strong><span>Corretas</span></div>
        <div class="r-stat wrong"><strong>${wrongCt}</strong><span>Incorretas</span></div>
      </div>
      ${allClear
        ? `<p class="results-message">Parabéns! Você acertou todas as questões!</p>
           <div class="results-actions">
             <button type="button" class="btn-nav" id="m7RetryBtn">${icons.retry} Recomeçar</button>
             <button type="button" class="btn-nav btn-nav-primary" id="m7NextSimBtn">
               <i class="fa-solid fa-graduation-cap"></i> Ir para Simulados ${icons.right}
             </button>
           </div>`
        : `<p class="results-message">
             Você errou <strong>${wrongCt}</strong> questão${wrongCt > 1 ? 'ões' : ''}.
             Clique em <strong>Praticar erros</strong> para tentar novamente as que errou.
           </p>
           <div class="results-actions">
             <button type="button" class="btn-nav" id="m7RetryBtn">${icons.retry} Recomeçar tudo</button>
             <button type="button" class="btn-nav" id="m7PracticeBtn">
               Praticar erros ${icons.right}
             </button>
             <button type="button" class="btn-nav btn-nav-primary" id="m7NextSimBtn">
               <i class="fa-solid fa-graduation-cap"></i> Ir para Simulados ${icons.right}
             </button>
           </div>`
      }
    </div>`;

  $('m7RetryBtn').addEventListener('click', startModule7Quiz);

  if ($('m7NextSimBtn')) {
    $('m7NextSimBtn').addEventListener('click', () => {
      state.sim2Unlocked = true;
      state.phase = 'sim2-intro';
      render();
    });
  }

  if (!allClear && $('m7PracticeBtn')) {
    $('m7PracticeBtn').addEventListener('click', () => {
      const wrongSet = state.m7results
        .map((r, i) => (r && !r.correct) ? i : -1)
        .filter(i => i !== -1);
      wrongSet.forEach(i => { state.m7results[i] = null; });
      state.m7activeSet = wrongSet;
      state.m7current   = 0;
      state.m7pending   = { mode: 'verb', verbIdx: null, subjectIdxs: [], nucleoIdx: null };
      state.phase       = 'module7-quiz';
      render();
      saveProgress();
    });
  }
}

// ── MÓDULO 7: IR PARA QUESTÃO (caderno de erros) ─────────────
function goToM7Question(qIdx) {
  state.cadernoQueue    = [{ mod: 7, qIdx: +qIdx }];
  state.cadernoCurrent  = 0;
  state.cadernoAnswered = {};
  cadernoResetPending();
  state.phase = 'caderno-quiz';
  render();
}

// ── SIMULADOS: CONSTRUIR FILA ─────────────────────────────────
function buildSimQueue() {
  function pickRandom(arr, mod, count) {
    const indices = arr.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices.slice(0, Math.min(count, indices.length)).map(qIdx => ({ mod, qIdx }));
  }
  const queue = [
    ...pickRandom(questions,  1, 5),
    ...pickRandom(questions2, 2, 5),
    ...pickRandom(questions3, 3, 5),
    ...pickRandom(questions4, 4, 5),
    ...pickRandom(questions5, 5, 5),
  ];
  for (let i = queue.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [queue[i], queue[j]] = [queue[j], queue[i]];
  }
  return queue;
}

// ── SIMULADOS: INTRO ──────────────────────────────────────────
function renderSimIntro() {
  const answered   = Object.keys(state.simAnswered).length;
  const total      = state.simQueue.length;
  const hasPartial = total > 0 && answered > 0 && answered < total;
  const hasDone    = total > 0 && answered === total;

  $('quizContainer').innerHTML = `
    <div class="lesson-screen">
      <div class="lesson-badge"><i class="fa-solid fa-graduation-cap"></i> Revisão geral</div>
      <h2>Simulados — Revisão dos módulos 1 a 5</h2>
      <p style="margin-top:8px;margin-bottom:0;font-size:15px;color:var(--text-gray);line-height:1.7;text-align:justify">
        Este simulado reúne <strong>25 questões</strong> escolhidas aleatoriamente dos módulos 1 a 5 (5 por módulo) e apresentadas em ordem misturada.
        Use para testar seus conhecimentos de forma integrada!
      </p>
      <div class="lesson-body" style="margin-top:24px">
        <h3 class="lesson-title">O que será cobrado</h3>
        <div class="how-it-works-list" style="margin-top:12px">
          <div class="step-item">
            <div class="step-icon purple"><span style="font-weight:700;font-size:13px">M1</span></div>
            <div class="step-text"><h4>Verbos — 5 questões</h4><p>Múltipla escolha e seleção de palavra</p></div>
          </div>
          <div class="step-item">
            <div class="step-icon blue"><span style="font-weight:700;font-size:13px">M2</span></div>
            <div class="step-text"><h4>Sujeito — 5 questões</h4><p>Identificar verbo e sujeito na frase</p></div>
          </div>
          <div class="step-item">
            <div class="step-icon blue"><span style="font-weight:700;font-size:13px">M3</span></div>
            <div class="step-text"><h4>Predicado — 5 questões</h4><p>Identificar verbo, sujeito e predicado</p></div>
          </div>
          <div class="step-item">
            <div class="step-icon" style="background:#0d9488"><span style="font-weight:700;font-size:13px;color:#fff">M4</span></div>
            <div class="step-text"><h4>Orações sem sujeito — 5 questões</h4><p>Identificar verbos impessoais</p></div>
          </div>
          <div class="step-item">
            <div class="step-icon purple"><span style="font-weight:700;font-size:13px">M5</span></div>
            <div class="step-text"><h4>Inversão da ordem — 5 questões</h4><p>Frases com ordem invertida</p></div>
          </div>
        </div>
      </div>
      <div class="results-actions" style="margin-top:24px">
        ${hasPartial
          ? `<button type="button" class="btn-nav" id="simRetryBtn">${icons.retry} Recomeçar</button>
             <button type="button" class="btn-nav btn-nav-primary" id="simStartBtn">Continuar ${icons.right}</button>`
          : hasDone
          ? `<button type="button" class="btn-nav" id="simRetryBtn">${icons.retry} Refazer simulado</button>
             <button type="button" class="btn-nav btn-nav-primary" id="simResultsBtn">${icons.check} Ver resultados</button>`
          : `<button type="button" class="btn-nav btn-nav-primary" id="simStartBtn">Iniciar simulado ${icons.right}</button>`
        }
      </div>
    </div>`;

  const startBtn   = $('simStartBtn');
  const retryBtn   = $('simRetryBtn');
  const resultsBtn = $('simResultsBtn');
  if (startBtn)   startBtn.addEventListener('click', hasPartial ? resumeSimQuiz : startSimQuiz);
  if (retryBtn)   retryBtn.addEventListener('click', startSimQuiz);
  if (resultsBtn) resultsBtn.addEventListener('click', () => { state.phase = 'sim-results'; render(); });
}

function startSimQuiz() {
  state.simQueue    = buildSimQueue();
  state.simAnswered = {};
  state.simCurrent  = 0;
  cadernoResetPending();
  state.simPhase = 'quiz';
  state.phase    = 'sim-quiz';
  updateSimCard();
  saveProgress();
  render();
}

function resumeSimQuiz() {
  cadernoResetPending();
  state.phase = 'sim-quiz';
  render();
}

// ── SIMULADOS: RENDERIZAR QUESTÃO ────────────────────────────
function renderSimQuestion() {
  const item = state.simQueue[state.simCurrent];
  if (!item) { state.phase = 'sim-results'; render(); return; }
  const { mod, qIdx } = item;
  const total    = state.simQueue.length;
  const pos      = state.simCurrent + 1;
  const key      = `${mod}-${qIdx}`;
  const answered = state.simAnswered[key];
  const modColor = mod === 1 ? '#7c3aed' : mod === 4 ? '#0d9488' : mod === 5 ? '#7c3aed' : '#3b82f6';
  const modNames = { 1: 'Módulo 1 — Verbos', 2: 'Módulo 2 — Sujeito', 3: 'Módulo 3 — Predicado', 4: 'Módulo 4 — Orações', 5: 'Módulo 5 — Inversão', 6: 'Módulo 6 — Locução' };
  const modLabel = modNames[mod] || `Módulo ${mod}`;

  let bodyHTML = '';
  if (mod === 1) {
    const q = questions[qIdx];
    bodyHTML = q.type === 'word-select' ? cadernoWordSelectHTML(q, answered) : cadernoMCHTML(q, answered);
  } else if (mod === 2) {
    bodyHTML = cadernoDualSelectHTML(questions2[qIdx], answered);
  } else if (mod === 3) {
    bodyHTML = cadernoTriSelectHTML(questions3[qIdx], answered, false);
  } else if (mod === 5) {
    bodyHTML = cadernoTriSelectHTML(questions5[qIdx], answered, false);
  } else {
    bodyHTML = cadernoTriSelectHTML(questions4[qIdx], answered, true);
  }

  $('quizContainer').innerHTML = `
    <div class="lesson-screen">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;flex-wrap:wrap">
        <span style="background:${modColor}18;color:${modColor};font-size:12px;padding:3px 10px;border-radius:20px;font-weight:700">${modLabel}</span>
        <button type="button" class="btn-lesson-hint" id="simLessonBtn"><i class="fa-solid fa-book-open"></i> Consultar lição</button>
        <span style="font-size:13px;color:var(--text-gray);margin-left:auto">Questão ${pos} de ${total}</span>
        <button type="button" class="btn-nav enp-back" id="simBackBtn" style="padding:4px 10px;font-size:13px">${icons.left} Simulado</button>
      </div>
      ${bodyHTML}
      ${answered ? `<div class="bottom-actions">
        <button type="button" class="btn-nav" id="simBackBtn2">${icons.left} Voltar ao início</button>
        <button type="button" class="btn-nav btn-nav-primary" id="simNextBtn">
          ${pos < total ? `Próxima questão ${icons.right}` : `${icons.check} Concluir simulado`}
        </button></div>` : ''}
    </div>`;

  document.querySelectorAll('#simBackBtn,#simBackBtn2').forEach(b => {
    if (b) b.addEventListener('click', () => { state.phase = 'sim-intro'; render(); });
  });
  $('simLessonBtn').addEventListener('click', () => openLessonModal(mod));

  if (answered) {
    $('simNextBtn').addEventListener('click', () => {
      if (pos < total) { state.simCurrent++; cadernoResetPending(); render(); }
      else             { state.phase = 'sim-results'; render(); }
    });
    return;
  }

  if (mod === 1) {
    const q = questions[qIdx];
    if (q.type === 'word-select') setupSimWS(q, key);
    else                          setupSimMC(q, key);
  } else if (mod === 2) {
    setupSimDualSelect(questions2[qIdx], key);
  } else if (mod === 3) {
    setupSimTriSelect(questions3[qIdx], key, false);
  } else if (mod === 5) {
    setupSimTriSelect(questions5[qIdx], key, false);
  } else {
    setupSimTriSelect(questions4[qIdx], key, true);
  }
}

function setupSimMC(q, key) {
  document.querySelectorAll('button[data-cadmc]').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = +btn.dataset.cadmc;
      const correct = q.answers[i].correct;
      state.simAnswered[key] = { correct, selected: i };
      updateSimCard();
      recordActivity();
      saveProgress();
      render();
    });
  });
}

function setupSimWS(q, key) {
  document.querySelectorAll('[data-cadws]').forEach(chip => {
    const i = +chip.dataset.cadws;
    if (PUNCT.has(q.sentence[i])) return;
    chip.addEventListener('click', () => {
      const correct = i === q.correctIndex;
      state.simAnswered[key] = { correct, selected: i };
      updateSimCard();
      recordActivity();
      saveProgress();
      render();
    });
  });
}

function setupSimDualSelect(q, key) {
  document.querySelectorAll('[data-caddual]').forEach(chip => {
    chip.addEventListener('click', () => {
      const i = +chip.dataset.caddual;
      if (PUNCT.has(q.sentence[i])) return;
      const p = state.cadernoPending;
      if (p.mode === 'verb') {
        if (p.verbIdx === i) { p.verbIdx = null; }
        else { p.subjectIdxs = p.subjectIdxs.filter(x => x !== i); p.verbIdx = i; p.mode = 'subject'; }
      } else {
        if (i === p.verbIdx) return;
        const idx = p.subjectIdxs.indexOf(i);
        idx === -1 ? p.subjectIdxs.push(i) : p.subjectIdxs.splice(idx, 1);
      }
      render();
    });
  });
  const bv = document.getElementById('cPhaseVerb');
  const bs = document.getElementById('cPhaseSuj');
  if (bv) bv.addEventListener('click', () => { state.cadernoPending.mode = 'verb';    render(); });
  if (bs) bs.addEventListener('click', () => { state.cadernoPending.mode = 'subject'; render(); });
  const cf = document.getElementById('cadernoConfirmBtn');
  if (cf) cf.addEventListener('click', () => {
    const p = state.cadernoPending;
    if (p.verbIdx === null || p.subjectIdxs.length === 0) return;
    const vOk = p.verbIdx === q.verbIndex;
    const sOk = p.subjectIdxs.length === q.subjectIndices.length && q.subjectIndices.every(i => p.subjectIdxs.includes(i));
    const ok  = vOk && sOk;
    state.simAnswered[key] = { correct: ok, verbCorrect: vOk, subjectCorrect: sOk, verbSelected: p.verbIdx, subjectSelected: [...p.subjectIdxs] };
    updateSimCard();
    recordActivity();
    saveProgress();
    render();
  });
}

function setupSimTriSelect(q, key, hasNoSubject) {
  document.querySelectorAll('[data-cadtri]').forEach(chip => {
    chip.addEventListener('click', () => {
      const i = +chip.dataset.cadtri;
      if (PUNCT.has(q.sentence[i])) return;
      const p = state.cadernoPending;
      if (p.mode === 'verb') {
        if (p.verbIdx === i) {
          p.predicateIdxs      = [];
          p.predicateConfirmed = false;
          p.verbIdx = null;
        } else {
          p.subjectIdxs        = p.subjectIdxs.filter(x => x !== i);
          p.predicateIdxs      = [];
          p.predicateConfirmed = false;
          p.verbIdx = i;
          p.mode = 'subject';
        }
      } else if (p.mode === 'subject') {
        if (p.noSubject || i === p.verbIdx) return;
        p.predicateIdxs = p.predicateIdxs.filter(x => x !== i);
        const idx = p.subjectIdxs.indexOf(i); idx === -1 ? p.subjectIdxs.push(i) : p.subjectIdxs.splice(idx, 1);
      } else {
        if (i === p.verbIdx) { p.predicateConfirmed = true; if (!p.predicateIdxs.includes(i)) p.predicateIdxs.push(i); }
        else if (!p.subjectIdxs.includes(i)) {
          const idx = p.predicateIdxs.indexOf(i); idx === -1 ? p.predicateIdxs.push(i) : p.predicateIdxs.splice(idx, 1);
        }
      }
      render();
    });
  });
  const bv = document.getElementById('cPhaseVerb');
  const bs = document.getElementById('cPhaseSuj');
  const bp = document.getElementById('cPhasePred');
  const bn = document.getElementById('cNoSubjBtn');
  if (bv) bv.addEventListener('click', () => { state.cadernoPending.mode = 'verb';      render(); });
  if (bs) bs.addEventListener('click', () => { state.cadernoPending.mode = 'subject';   render(); });
  if (bp) bp.addEventListener('click', () => { state.cadernoPending.mode = 'predicate'; render(); });
  if (bn) bn.addEventListener('click', () => {
    const p = state.cadernoPending;
    if (p.noSubject) { p.noSubject = false; p.mode = 'subject'; }
    else             { p.noSubject = true; p.subjectIdxs = []; p.mode = 'predicate'; }
    render();
  });
  const cf = document.getElementById('cadernoConfirmBtn');
  if (cf) cf.addEventListener('click', () => {
    const p = state.cadernoPending;
    if (p.verbIdx === null) return;
    if (!p.noSubject && p.subjectIdxs.length === 0) return;
    const vOk = p.verbIdx === q.verbIndex;
    const pOk = p.predicateIdxs.length === q.predicateIndices.length && q.predicateIndices.every(i => p.predicateIdxs.includes(i));
    const sOk = q.noSubject ? p.noSubject : (!p.noSubject && p.subjectIdxs.length === q.subjectIndices.length && q.subjectIndices.every(i => p.subjectIdxs.includes(i)));
    const ok  = vOk && sOk && pOk;
    state.simAnswered[key] = { correct: ok, verbCorrect: vOk, subjectCorrect: sOk, predicateCorrect: pOk, verbSelected: p.verbIdx, subjectSelected: [...p.subjectIdxs], predicateSelected: [...p.predicateIdxs], noSubjectSelected: p.noSubject };
    updateSimCard();
    recordActivity();
    saveProgress();
    render();
  });
}

// ── SIMULADOS: RESULTADOS ─────────────────────────────────────
function renderSimResults() {
  const values  = Object.values(state.simAnswered);
  const total   = state.simQueue.length;
  const correct = values.filter(r => r && r.correct).length;
  const wrong   = values.filter(r => r && !r.correct).length;
  const blank   = total - values.length;
  const pct     = total > 0 ? Math.round(correct / total * 100) : 0;
  const iconBg  = pct >= 80 ? '#22c55e' : pct >= 50 ? '#f97316' : '#ef4444';
  const iconName = pct >= 80 ? 'fa-trophy' : 'fa-flag-checkered';

  $('quizContainer').innerHTML = `
    <div class="results-screen">
      <div class="results-icon" style="background:linear-gradient(135deg,${iconBg},${iconBg}bb)">
        <i class="fa-solid ${iconName}"></i>
      </div>
      <h2>Simulado concluído!</h2>
      <div class="results-stats-row">
        <div class="r-stat correct"><strong>${correct}</strong><span>Corretas</span></div>
        <div class="r-stat wrong"><strong>${wrong}</strong><span>Incorretas</span></div>
        ${blank > 0 ? `<div class="r-stat"><strong>${blank}</strong><span>Em branco</span></div>` : ''}
      </div>
      <div style="text-align:center;margin:16px 0">
        <span style="font-size:32px;font-weight:700;color:${iconBg}">${pct}%</span>
        <p style="color:var(--text-gray);font-size:14px;margin:4px 0 0">de acerto</p>
      </div>
      <p class="results-message">${
        pct >= 80 ? 'Excelente! Você dominou o conteúdo dos módulos 1 a 5!' :
        pct >= 50 ? 'Bom trabalho! Continue praticando para melhorar seu desempenho.' :
        'Continue estudando! Revise os módulos com mais erros e tente novamente.'
      }</p>
      <div class="results-actions">
        <button type="button" class="btn-nav" id="simRetryBtn">${icons.retry} Refazer simulado</button>
        <button type="button" class="btn-nav btn-nav-primary" id="simBackToIntroBtn">
          ${icons.left} Voltar ao início
        </button>
      </div>
    </div>`;

  $('simRetryBtn').addEventListener('click', startSimQuiz);
  $('simBackToIntroBtn').addEventListener('click', () => { state.phase = 'sim-intro'; render(); });
}

// ══════════════════════════════════════════════════════════════
// ── SIMULADOS AVANÇADO (S2) — M1 a M7, 35 questões ──────────
// ══════════════════════════════════════════════════════════════

function buildSim2Queue() {
  function pickRandom(arr, mod, count) {
    const indices = arr.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices.slice(0, Math.min(count, indices.length)).map(qIdx => ({ mod, qIdx }));
  }
  const queue = [
    ...pickRandom(questions,  1, 5),
    ...pickRandom(questions2, 2, 5),
    ...pickRandom(questions3, 3, 5),
    ...pickRandom(questions4, 4, 5),
    ...pickRandom(questions5, 5, 5),
    ...pickRandom(questions6, 6, 5),
    ...pickRandom(questions7, 7, 5),
  ];
  for (let i = queue.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [queue[i], queue[j]] = [queue[j], queue[i]];
  }
  return queue;
}

// ── SIMULADOS AVANÇADO: INTRO ─────────────────────────────────
function renderSim2Intro() {
  const answered   = Object.keys(state.sim2Answered).length;
  const total      = state.sim2Queue.length;
  const hasPartial = total > 0 && answered > 0 && answered < total;
  const hasDone    = total > 0 && answered === total;

  $('quizContainer').innerHTML = `
    <div class="lesson-screen">
      <div class="lesson-badge"><i class="fa-solid fa-graduation-cap"></i> Revisão geral avançada</div>
      <h2>Simulados — Revisão dos módulos 1 a 7</h2>
      <p style="margin-top:8px;margin-bottom:0;font-size:15px;color:var(--text-gray);line-height:1.7;text-align:justify">
        Este simulado reúne <strong>35 questões</strong> escolhidas aleatoriamente dos módulos 1 a 7 (5 por módulo) e apresentadas em ordem misturada.
        Use para testar seus conhecimentos de forma integrada!
      </p>
      <div class="lesson-body" style="margin-top:24px">
        <h3 class="lesson-title">O que será cobrado</h3>
        <div class="how-it-works-list" style="margin-top:12px">
          <div class="step-item">
            <div class="step-icon purple"><span style="font-weight:700;font-size:13px">M1</span></div>
            <div class="step-text"><h4>Verbos — 5 questões</h4><p>Múltipla escolha e seleção de palavra</p></div>
          </div>
          <div class="step-item">
            <div class="step-icon blue"><span style="font-weight:700;font-size:13px">M2</span></div>
            <div class="step-text"><h4>Sujeito — 5 questões</h4><p>Identificar verbo e sujeito na frase</p></div>
          </div>
          <div class="step-item">
            <div class="step-icon blue"><span style="font-weight:700;font-size:13px">M3</span></div>
            <div class="step-text"><h4>Predicado — 5 questões</h4><p>Identificar verbo, sujeito e predicado</p></div>
          </div>
          <div class="step-item">
            <div class="step-icon" style="background:#0d9488"><span style="font-weight:700;font-size:13px;color:#fff">M4</span></div>
            <div class="step-text"><h4>Orações sem sujeito — 5 questões</h4><p>Identificar verbos impessoais</p></div>
          </div>
          <div class="step-item">
            <div class="step-icon purple"><span style="font-weight:700;font-size:13px">M5</span></div>
            <div class="step-text"><h4>Inversão da ordem — 5 questões</h4><p>Frases com ordem invertida</p></div>
          </div>
          <div class="step-item">
            <div class="step-icon blue"><span style="font-weight:700;font-size:13px">M6</span></div>
            <div class="step-text"><h4>Locução Verbal — 5 questões</h4><p>Identificar e classificar locuções verbais</p></div>
          </div>
          <div class="step-item">
            <div class="step-icon" style="background:#ef4444"><span style="font-weight:700;font-size:12px;color:#fff">M7</span></div>
            <div class="step-text"><h4>Núcleo simples do sujeito — 5 questões</h4><p>Identificar verbo, sujeito e núcleo do sujeito</p></div>
          </div>
        </div>
      </div>
      <div class="results-actions" style="margin-top:24px">
        ${hasPartial
          ? `<button type="button" class="btn-nav" id="sim2RetryBtn">${icons.retry} Recomeçar</button>
             <button type="button" class="btn-nav btn-nav-primary" id="sim2StartBtn">Continuar ${icons.right}</button>`
          : hasDone
          ? `<button type="button" class="btn-nav" id="sim2RetryBtn">${icons.retry} Refazer simulado</button>
             <button type="button" class="btn-nav btn-nav-primary" id="sim2ResultsBtn">${icons.check} Ver resultados</button>`
          : `<button type="button" class="btn-nav btn-nav-primary" id="sim2StartBtn">Iniciar simulado ${icons.right}</button>`
        }
      </div>
    </div>`;

  const startBtn   = $('sim2StartBtn');
  const retryBtn   = $('sim2RetryBtn');
  const resultsBtn = $('sim2ResultsBtn');
  if (startBtn)   startBtn.addEventListener('click', hasPartial ? resumeSim2Quiz : startSim2Quiz);
  if (retryBtn)   retryBtn.addEventListener('click', startSim2Quiz);
  if (resultsBtn) resultsBtn.addEventListener('click', () => { state.phase = 'sim2-results'; render(); });
}

function startSim2Quiz() {
  state.sim2Queue    = buildSim2Queue();
  state.sim2Answered = {};
  state.sim2Current  = 0;
  cadernoResetPending();
  state.sim2Phase = 'quiz';
  state.phase     = 'sim2-quiz';
  updateSim2Card();
  saveProgress();
  render();
}

function resumeSim2Quiz() {
  cadernoResetPending();
  state.phase = 'sim2-quiz';
  render();
}

// ── SIMULADOS AVANÇADO: RENDERIZAR QUESTÃO ───────────────────
function renderSim2Question() {
  const item = state.sim2Queue[state.sim2Current];
  if (!item) { state.phase = 'sim2-results'; render(); return; }
  const { mod, qIdx } = item;
  const total    = state.sim2Queue.length;
  const pos      = state.sim2Current + 1;
  const key      = `${mod}-${qIdx}`;
  const answered = state.sim2Answered[key];
  const modColor = mod === 1 ? '#7c3aed' : mod === 4 ? '#0d9488' : mod === 5 ? '#7c3aed' : mod === 7 ? '#ef4444' : '#3b82f6';
  const modNames = { 1: 'Módulo 1 — Verbos', 2: 'Módulo 2 — Sujeito', 3: 'Módulo 3 — Predicado', 4: 'Módulo 4 — Orações', 5: 'Módulo 5 — Inversão', 6: 'Módulo 6 — Locução', 7: 'Módulo 7 — Núcleo' };
  const modLabel = modNames[mod] || `Módulo ${mod}`;

  let bodyHTML = '';
  if (mod === 1) {
    const q = questions[qIdx];
    bodyHTML = q.type === 'word-select' ? cadernoWordSelectHTML(q, answered) : cadernoMCHTML(q, answered);
  } else if (mod === 2) {
    bodyHTML = cadernoDualSelectHTML(questions2[qIdx], answered);
  } else if (mod === 3) {
    bodyHTML = cadernoTriSelectHTML(questions3[qIdx], answered, false);
  } else if (mod === 4) {
    bodyHTML = cadernoTriSelectHTML(questions4[qIdx], answered, true);
  } else if (mod === 5) {
    bodyHTML = cadernoTriSelectHTML(questions5[qIdx], answered, false);
  } else if (mod === 6) {
    const q6 = questions6[qIdx];
    bodyHTML = q6.type === 'sense-select' ? cadernoSenseSelectHTML(q6, answered) : cadernoLocSelectHTML(q6, answered);
  } else if (mod === 7) {
    bodyHTML = cadernoNucleoSelectHTML(questions7[qIdx], answered);
  }

  $('quizContainer').innerHTML = `
    <div class="lesson-screen">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;flex-wrap:wrap">
        <span style="background:${modColor}18;color:${modColor};font-size:12px;padding:3px 10px;border-radius:20px;font-weight:700">${modLabel}</span>
        <button type="button" class="btn-lesson-hint" id="sim2LessonBtn"><i class="fa-solid fa-book-open"></i> Consultar lição</button>
        <span style="font-size:13px;color:var(--text-gray);margin-left:auto">Questão ${pos} de ${total}</span>
        <button type="button" class="btn-nav enp-back" id="sim2BackBtn" style="padding:4px 10px;font-size:13px">${icons.left} Simulado</button>
      </div>
      ${bodyHTML}
      ${answered ? `<div class="bottom-actions">
        <button type="button" class="btn-nav" id="sim2BackBtn2">${icons.left} Voltar ao início</button>
        <button type="button" class="btn-nav btn-nav-primary" id="sim2NextBtn">
          ${pos < total ? `Próxima questão ${icons.right}` : `${icons.check} Concluir simulado`}
        </button></div>` : ''}
    </div>`;

  document.querySelectorAll('#sim2BackBtn,#sim2BackBtn2').forEach(b => {
    if (b) b.addEventListener('click', () => { state.phase = 'sim2-intro'; render(); });
  });
  $('sim2LessonBtn').addEventListener('click', () => openLessonModal(mod));

  if (answered) {
    $('sim2NextBtn').addEventListener('click', () => {
      if (pos < total) { state.sim2Current++; cadernoResetPending(); render(); }
      else             { state.phase = 'sim2-results'; render(); }
    });
    return;
  }

  if (mod === 1) {
    const q = questions[qIdx];
    if (q.type === 'word-select') setupSim2WS(q, key);
    else                          setupSim2MC(q, key);
  } else if (mod === 2) {
    setupSim2DualSelect(questions2[qIdx], key);
  } else if (mod === 3) {
    setupSim2TriSelect(questions3[qIdx], key, false);
  } else if (mod === 4) {
    setupSim2TriSelect(questions4[qIdx], key, true);
  } else if (mod === 5) {
    setupSim2TriSelect(questions5[qIdx], key, false);
  } else if (mod === 6) {
    const q6 = questions6[qIdx];
    if (q6.type === 'sense-select') setupSim2SenseSelect(q6, key);
    else                            setupSim2LocSelect(q6, key);
  } else if (mod === 7) {
    setupSim2NucleoSelect(questions7[qIdx], key);
  }
}

function setupSim2MC(q, key) {
  document.querySelectorAll('button[data-cadmc]').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = +btn.dataset.cadmc;
      const correct = q.answers[i].correct;
      state.sim2Answered[key] = { correct, selected: i };
      updateSim2Card(); recordActivity(); saveProgress(); render();
    });
  });
}

function setupSim2WS(q, key) {
  document.querySelectorAll('[data-cadws]').forEach(chip => {
    const i = +chip.dataset.cadws;
    if (PUNCT.has(q.sentence[i])) return;
    chip.addEventListener('click', () => {
      const correct = i === q.correctIndex;
      state.sim2Answered[key] = { correct, selected: i };
      updateSim2Card(); recordActivity(); saveProgress(); render();
    });
  });
}

function setupSim2DualSelect(q, key) {
  document.querySelectorAll('[data-caddual]').forEach(chip => {
    chip.addEventListener('click', () => {
      const i = +chip.dataset.caddual;
      if (PUNCT.has(q.sentence[i])) return;
      const p = state.cadernoPending;
      if (p.mode === 'verb') {
        if (p.verbIdx === i) { p.verbIdx = null; }
        else { p.subjectIdxs = p.subjectIdxs.filter(x => x !== i); p.verbIdx = i; p.mode = 'subject'; }
      } else {
        if (i === p.verbIdx) return;
        const idx = p.subjectIdxs.indexOf(i);
        idx === -1 ? p.subjectIdxs.push(i) : p.subjectIdxs.splice(idx, 1);
      }
      render();
    });
  });
  const bv = document.getElementById('cPhaseVerb');
  const bs = document.getElementById('cPhaseSuj');
  if (bv) bv.addEventListener('click', () => { state.cadernoPending.mode = 'verb';    render(); });
  if (bs) bs.addEventListener('click', () => { state.cadernoPending.mode = 'subject'; render(); });
  const cf = document.getElementById('cadernoConfirmBtn');
  if (cf) cf.addEventListener('click', () => {
    const p = state.cadernoPending;
    if (p.verbIdx === null || p.subjectIdxs.length === 0) return;
    const vOk = p.verbIdx === q.verbIndex;
    const sOk = p.subjectIdxs.length === q.subjectIndices.length && q.subjectIndices.every(i => p.subjectIdxs.includes(i));
    const ok  = vOk && sOk;
    state.sim2Answered[key] = { correct: ok, verbCorrect: vOk, subjectCorrect: sOk, verbSelected: p.verbIdx, subjectSelected: [...p.subjectIdxs] };
    updateSim2Card(); recordActivity(); saveProgress(); render();
  });
}

function setupSim2TriSelect(q, key, hasNoSubject) {
  document.querySelectorAll('[data-cadtri]').forEach(chip => {
    chip.addEventListener('click', () => {
      const i = +chip.dataset.cadtri;
      if (PUNCT.has(q.sentence[i])) return;
      const p = state.cadernoPending;
      if (p.mode === 'verb') {
        if (p.verbIdx === i) {
          p.predicateIdxs = []; p.predicateConfirmed = false; p.verbIdx = null;
        } else {
          p.subjectIdxs = p.subjectIdxs.filter(x => x !== i);
          p.predicateIdxs = []; p.predicateConfirmed = false;
          p.verbIdx = i; p.mode = 'subject';
        }
      } else if (p.mode === 'subject') {
        if (p.noSubject || i === p.verbIdx) return;
        p.predicateIdxs = p.predicateIdxs.filter(x => x !== i);
        const idx = p.subjectIdxs.indexOf(i); idx === -1 ? p.subjectIdxs.push(i) : p.subjectIdxs.splice(idx, 1);
      } else {
        if (i === p.verbIdx) { p.predicateConfirmed = true; if (!p.predicateIdxs.includes(i)) p.predicateIdxs.push(i); }
        else if (!p.subjectIdxs.includes(i)) {
          const idx = p.predicateIdxs.indexOf(i); idx === -1 ? p.predicateIdxs.push(i) : p.predicateIdxs.splice(idx, 1);
        }
      }
      render();
    });
  });
  const bv = document.getElementById('cPhaseVerb');
  const bs = document.getElementById('cPhaseSuj');
  const bp = document.getElementById('cPhasePred');
  const bn = document.getElementById('cNoSubjBtn');
  if (bv) bv.addEventListener('click', () => { state.cadernoPending.mode = 'verb';      render(); });
  if (bs) bs.addEventListener('click', () => { state.cadernoPending.mode = 'subject';   render(); });
  if (bp) bp.addEventListener('click', () => { state.cadernoPending.mode = 'predicate'; render(); });
  if (bn) bn.addEventListener('click', () => {
    const p = state.cadernoPending;
    if (p.noSubject) { p.noSubject = false; p.mode = 'subject'; }
    else             { p.noSubject = true; p.subjectIdxs = []; p.mode = 'predicate'; }
    render();
  });
  const cf = document.getElementById('cadernoConfirmBtn');
  if (cf) cf.addEventListener('click', () => {
    const p = state.cadernoPending;
    if (p.verbIdx === null) return;
    if (!p.noSubject && p.subjectIdxs.length === 0) return;
    const vOk = p.verbIdx === q.verbIndex;
    const pOk = p.predicateIdxs.length === q.predicateIndices.length && q.predicateIndices.every(i => p.predicateIdxs.includes(i));
    const sOk = q.noSubject ? p.noSubject : (!p.noSubject && p.subjectIdxs.length === q.subjectIndices.length && q.subjectIndices.every(i => p.subjectIdxs.includes(i)));
    const ok  = vOk && sOk && pOk;
    state.sim2Answered[key] = { correct: ok, verbCorrect: vOk, subjectCorrect: sOk, predicateCorrect: pOk, verbSelected: p.verbIdx, subjectSelected: [...p.subjectIdxs], predicateSelected: [...p.predicateIdxs], noSubjectSelected: p.noSubject };
    updateSim2Card(); recordActivity(); saveProgress(); render();
  });
}

function setupSim2LocSelect(q, key) {
  document.querySelectorAll('[data-cadloc]').forEach(chip => {
    chip.addEventListener('click', () => {
      const i = +chip.dataset.cadloc;
      if (PUNCT.has(q.sentence[i])) return;
      const loci = state.cadernoM6Pending.locuIndices;
      const idx = loci.indexOf(i);
      if (idx === -1) loci.push(i); else loci.splice(idx, 1);
      render();
    });
  });
  const cf = document.getElementById('cadernoConfirmBtn');
  if (cf) cf.addEventListener('click', () => {
    const selected = [...state.cadernoM6Pending.locuIndices];
    if (selected.length < 2) return;
    const correct = selected.length === q.locuIndices.length && q.locuIndices.every(i => selected.includes(i));
    state.sim2Answered[key] = { correct, selected };
    updateSim2Card(); recordActivity(); saveProgress(); render();
  });
}

function setupSim2SenseSelect(q, key) {
  document.querySelectorAll('[data-cadsense]').forEach(btn => {
    btn.addEventListener('click', () => {
      const s = btn.dataset.cadsense;
      const correct = s === q.correctSense;
      state.sim2Answered[key] = { correct, selected: s };
      updateSim2Card(); recordActivity(); saveProgress(); render();
    });
  });
}

function setupSim2NucleoSelect(q, key) {
  document.querySelectorAll('[data-cad7]').forEach(chip => {
    chip.addEventListener('click', () => {
      const i = +chip.dataset.cad7;
      if (PUNCT.has(q.sentence[i])) return;
      const p = state.cadernoPending;
      if (p.mode === 'verb') {
        if (p.verbIdx === i) { p.verbIdx = null; }
        else { p.subjectIdxs = p.subjectIdxs.filter(x => x !== i); if (p.nucleoIdx === i) p.nucleoIdx = null; p.verbIdx = i; p.mode = 'subject'; }
      } else if (p.mode === 'subject') {
        if (i === p.verbIdx) return;
        const idx = p.subjectIdxs.indexOf(i);
        if (idx === -1) { p.subjectIdxs.push(i); }
        else { p.subjectIdxs.splice(idx, 1); if (p.nucleoIdx === i) p.nucleoIdx = null; }
      } else if (p.mode === 'nucleo') {
        if (!p.subjectIdxs.includes(i)) return;
        p.nucleoIdx = (p.nucleoIdx === i) ? null : i;
      }
      render();
    });
  });
  const bv = document.getElementById('cPhaseVerb7');
  const bs = document.getElementById('cPhaseSuj7');
  const bn = document.getElementById('cPhaseNucleo7');
  if (bv) bv.addEventListener('click', () => { state.cadernoPending.mode = 'verb';    render(); });
  if (bs) bs.addEventListener('click', () => { state.cadernoPending.mode = 'subject'; render(); });
  if (bn) bn.addEventListener('click', () => { state.cadernoPending.mode = 'nucleo';  render(); });
  const cf = document.getElementById('cadernoConfirmBtn');
  if (cf) cf.addEventListener('click', () => {
    const p = state.cadernoPending;
    if (p.verbIdx === null || p.subjectIdxs.length === 0 || p.nucleoIdx === null) return;
    const vOk = p.verbIdx === q.verbIndex;
    const sOk = p.subjectIdxs.length === q.subjectIndices.length && q.subjectIndices.every(i => p.subjectIdxs.includes(i));
    const nOk = p.nucleoIdx === q.nucleoIndex;
    const ok  = vOk && sOk && nOk;
    state.sim2Answered[key] = { correct: ok, verbCorrect: vOk, subjectCorrect: sOk, nucleoCorrect: nOk, verbSelected: p.verbIdx, subjectSelected: [...p.subjectIdxs], nucleoSelected: p.nucleoIdx };
    updateSim2Card(); recordActivity(); saveProgress(); render();
  });
}

// ── SIMULADOS AVANÇADO: RESULTADOS ───────────────────────────
function renderSim2Results() {
  const values  = Object.values(state.sim2Answered);
  const total   = state.sim2Queue.length;
  const correct = values.filter(r => r && r.correct).length;
  const wrong   = values.filter(r => r && !r.correct).length;
  const blank   = total - values.length;
  const pct     = total > 0 ? Math.round(correct / total * 100) : 0;
  const iconBg  = pct >= 80 ? '#22c55e' : pct >= 50 ? '#f97316' : '#ef4444';
  const iconName = pct >= 80 ? 'fa-trophy' : 'fa-flag-checkered';

  $('quizContainer').innerHTML = `
    <div class="results-screen">
      <div class="results-icon" style="background:linear-gradient(135deg,${iconBg},${iconBg}bb)">
        <i class="fa-solid ${iconName}"></i>
      </div>
      <h2>Simulado Avançado concluído!</h2>
      <div class="results-stats-row">
        <div class="r-stat correct"><strong>${correct}</strong><span>Corretas</span></div>
        <div class="r-stat wrong"><strong>${wrong}</strong><span>Incorretas</span></div>
        ${blank > 0 ? `<div class="r-stat"><strong>${blank}</strong><span>Em branco</span></div>` : ''}
      </div>
      <div style="text-align:center;margin:16px 0">
        <span style="font-size:32px;font-weight:700;color:${iconBg}">${pct}%</span>
        <p style="color:var(--text-gray);font-size:14px;margin:4px 0 0">de acerto</p>
      </div>
      <p class="results-message">${
        pct >= 80 ? 'Excelente! Você dominou o conteúdo dos módulos 1 a 7!' :
        pct >= 50 ? 'Bom trabalho! Continue praticando para melhorar seu desempenho.' :
        'Continue estudando! Revise os módulos com mais erros e tente novamente.'
      }</p>
      <div class="results-actions">
        <button type="button" class="btn-nav" id="sim2RetryBtn">${icons.retry} Refazer simulado</button>
        <button type="button" class="btn-nav btn-nav-primary" id="sim2BackToIntroBtn">
          ${icons.left} Voltar ao início
        </button>
      </div>
    </div>`;

  $('sim2RetryBtn').addEventListener('click', startSim2Quiz);
  $('sim2BackToIntroBtn').addEventListener('click', () => { state.phase = 'sim2-intro'; render(); });
}

// ── NAVEGAR ──────────────────────────────────────────────────
function navigate(dir) {
  state.current += dir;
  render();
  saveProgress();
}

// ── ESTATÍSTICAS ─────────────────────────────────────────────
function updateStats() {
  // Acertos/Erros/Em branco e donut refletem o módulo atual
  const isM2 = PHASES_MODULE2.includes(state.phase);
  const isM3 = PHASES_MODULE3.includes(state.phase) && state.phase !== 'module3-intro';
  const isM4 = PHASES_MODULE4.includes(state.phase) && state.phase !== 'module4-intro';
  const isM5 = PHASES_MODULE5.includes(state.phase) && state.phase !== 'module5-intro';
  let correctCt, wrongCt, blank, acertoPct;

  if (isM5) {
    correctCt = state.m5results.filter(r => r && r.correct).length;
    wrongCt   = state.m5results.filter(r => r && !r.correct).length;
    blank     = state.m5results.filter(r => r === null).length;
    const answeredCt = correctCt + wrongCt;
    acertoPct = answeredCt > 0 ? Math.round(correctCt / answeredCt * 100) : 0;
  } else if (isM4) {
    correctCt = state.m4results.filter(r => r && r.correct).length;
    wrongCt   = state.m4results.filter(r => r && !r.correct).length;
    blank     = state.m4results.filter(r => r === null).length;
    const answeredCt = correctCt + wrongCt;
    acertoPct = answeredCt > 0 ? Math.round(correctCt / answeredCt * 100) : 0;
  } else if (isM3) {
    correctCt = state.m3results.filter(r => r && r.correct).length;
    wrongCt   = state.m3results.filter(r => r && !r.correct).length;
    blank     = state.m3results.filter(r => r === null).length;
    const answeredCt = correctCt + wrongCt;
    acertoPct = answeredCt > 0 ? Math.round(correctCt / answeredCt * 100) : 0;
  } else if (isM2) {
    correctCt = state.m2results.filter(r => r && r.correct).length;
    wrongCt   = state.m2results.filter(r => r && !r.correct).length;
    blank     = state.m2results.filter(r => r === null).length;
    const answeredCt = correctCt + wrongCt;
    acertoPct = answeredCt > 0 ? Math.round(correctCt / answeredCt * 100) : 0;
  } else {
    correctCt = state.results.filter(r => r && r.correct).length;
    wrongCt   = state.results.filter(r => r && !r.correct).length;
    blank     = state.results.filter(r => r === null).length;
    const answeredCt = correctCt + wrongCt;
    acertoPct = answeredCt > 0 ? Math.round(correctCt / answeredCt * 100) : 0;
  }

  const dc = $('donutChart');   if (dc) dc.style.background = `conic-gradient(var(--success-green) ${acertoPct}%, var(--divider-color) 0)`;
  const dv = $('donutValue');   if (dv) dv.textContent = acertoPct + '%';
  const sa = $('statAcertos');  if (sa) sa.textContent = correctCt;
  const se = $('statErros');    if (se) se.textContent = wrongCt;
  const sb = $('statEmBranco'); if (sb) sb.textContent = blank;

  // Header e card do Módulo 1 sempre usam o total real do módulo (não o activeSet)
  const m1answeredCt = state.results.filter(r => r !== null).length;
  const m1total      = questions.length;
  const progressPct  = m1total > 0 ? Math.round(m1answeredCt / m1total * 100) : 0;

  const hp = $('headerPercent');      if (hp) hp.textContent = progressPct + '%';
  const hf = $('headerProgressFill'); if (hf) hf.style.width = progressPct + '%';
  const hs = $('headerSubtext');      if (hs) hs.textContent = `${m1answeredCt} de ${m1total} questões respondidas`;
  const mf = $('moduleProgressFill'); if (mf) mf.style.width = progressPct + '%';
  const mt = $('moduleProgressText'); if (mt) mt.textContent = progressPct + '%';
  const mp = $('moduleProgress');     if (mp) mp.textContent = `${m1answeredCt} de ${m1total} questões`;

  const badge = $('moduleBadge');
  const icon  = $('moduleStatusIcon');
  const m1correctCt = state.results.filter(r => r !== null && r.correct).length;
  const allDone = m1correctCt === m1total && m1total > 0;
  if (allDone) state.m2unlocked = true;
  if (allDone) {
    if (badge) { badge.className = 'badge'; badge.innerHTML = 'Concluído <i class="fa-solid fa-circle-check"></i>'; }
    if (icon)  icon.style.display = 'flex';
  } else {
    if (badge) { badge.className = 'badge in-progress'; badge.innerHTML = 'Em andamento <i class="fa-solid fa-circle-half-stroke"></i>'; }
    if (icon)  icon.style.display = 'none';
  }
  const m2 = $('module2Card');
  const m2lock = $('module2LockIcon');
  if (m2) m2.classList.toggle('locked', !state.m2unlocked);
  if (m2lock) m2lock.style.display = state.m2unlocked ? 'none' : '';
}

// Mobile nav panel toggles
(function () {
  const backdrop = document.getElementById('mobilePanelBackdrop');

  function closePanels() {
    document.getElementById('leftSidebar').classList.remove('open');
    document.getElementById('rightSidebar').classList.remove('open');
    document.getElementById('btnMobileConteudos').classList.remove('active');
    document.getElementById('btnMobileDesempenho').classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
  }

  function togglePanel(sidebarId, btnId) {
    const isOpen = document.getElementById(sidebarId).classList.contains('open');
    closePanels();
    if (!isOpen) {
      updateHeaderH();
      document.getElementById(sidebarId).classList.add('open');
      document.getElementById(btnId).classList.add('active');
      if (backdrop) backdrop.classList.add('active');
    }
  }

  document.getElementById('btnMobileConteudos').addEventListener('click', () => {
    togglePanel('leftSidebar', 'btnMobileConteudos');
  });
  document.getElementById('btnMobileDesempenho').addEventListener('click', () => {
    togglePanel('rightSidebar', 'btnMobileDesempenho');
  });

  if (backdrop) backdrop.addEventListener('click', closePanels);
})();

window.addEventListener('resize', updateHeaderH);
updateHeaderH();

init();
