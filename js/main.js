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
  previousPhase:   null,
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
      const validPhases = ['objective', 'intro', 'quiz', 'results', 'error-notebook', 'module2-intro', 'module2-quiz', 'module2-results'];
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
      const el = $('statPontos'); if (el) el.textContent = state.points;
      updateStreak();
      updateModule2Card();
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
      <h2>Tem certeza que deseja sair?</h2>
      <p>O progresso desta sessão não está salvo. Se sair agora, perderá tudo que respondeu.</p>
      <button type="button" class="btn-setup" id="btnSaveNow">
        <i class="fa-solid fa-floppy-disk"></i> Salvar progresso
      </button>
      <button type="button" class="btn-setup-skip" id="btnLeaveAnyway">Sair sem salvar</button>
    </div>`;
  document.body.appendChild(overlay);

  document.getElementById('btnSaveNow').addEventListener('click', () => {
    overlay.remove();
    showSetupScreen();
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

const PHASES_NO_HEADER  = ['intro', 'error-notebook', 'module2-intro', 'module2-quiz', 'module2-results', 'objective'];
const PHASES_SHOW_TITLE = ['intro', 'objective'];
const PHASES_MODULE2    = ['module2-intro', 'module2-quiz', 'module2-results'];

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
  const m0c = $('module0Card');
  if (cc)  cc.classList.toggle('active-view', state.phase === 'error-notebook');
  if (m1c) m1c.classList.toggle('active', PHASES_M1.includes(state.phase));
  if (m2c) m2c.classList.toggle('active-view', PHASES_MODULE2.includes(state.phase));
  if (m0c) m0c.classList.toggle('active-view', state.phase === 'objective');
  if (state.phase === 'objective')         { renderObjective();         return; }
  if (state.phase === 'intro')             { renderIntro();             return; }
  if (state.phase === 'results')           { renderResults();           return; }
  if (state.phase === 'error-notebook')    { renderErrorNotebookPage(); return; }
  if (state.phase === 'module2-intro')     { renderModule2Intro();      return; }
  if (state.phase === 'module2-quiz')      { renderModule2Question();   return; }
  if (state.phase === 'module2-results')   { renderModule2Results();    return; }
  renderQuestion();
}

// ── TELA DE OBJETIVO ─────────────────────────────────────────
function renderObjective() {
  $('quizContainer').innerHTML = `
    <div class="lesson-screen">
      <div class="lesson-badge"><i class="fa-solid fa-bullseye"></i> Projeto Integrador</div>
      <div class="lesson-body objective-body">
        <p>Esta aplicação faz parte de um <strong>Projeto Integrador</strong> do curso de Análise e Desenvolvimento de Sistemas, com o objetivo de desenvolver uma plataforma web educacional interativa para auxiliar no aprendizado de Língua Portuguesa.</p>
        <p>O sistema utiliza recursos visuais, exercícios práticos, gamificação e acompanhamento de desempenho para tornar o estudo mais acessível, dinâmico e organizado, permitindo que o estudante avance progressivamente pelos conteúdos gramaticais e pratique questões inspiradas em concursos públicos.</p>
        <p>O projeto se enquadra na categoria de extensão voltada ao desenvolvimento de soluções tecnológicas e inovação educacional, alinhando-se aos <strong>Objetivos de Desenvolvimento Sustentável (ODS) da ONU</strong>, especialmente:</p>
        <div class="ods-list">
          <div class="ods-item ods-4">
            <div class="ods-icon"><strong>4</strong></div>
            <div class="ods-text"><strong>ODS 4 — Educação de Qualidade</strong></div>
          </div>
          <div class="ods-item ods-9">
            <div class="ods-icon"><strong>9</strong></div>
            <div class="ods-text"><strong>ODS 9 — Indústria, Inovação e Infraestrutura</strong></div>
          </div>
          <div class="ods-item ods-10">
            <div class="ods-icon"><strong>10</strong></div>
            <div class="ods-text"><strong>ODS 10 — Redução das Desigualdades</strong></div>
          </div>
        </div>
      </div>
      <button type="button" class="btn-nav btn-nav-primary" id="objStartBtn">
        Começar os módulos ${icons.right}
      </button>
    </div>`;

  $('objStartBtn').addEventListener('click', () => {
    state.phase = 'intro';
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
      <p style="margin-top:8px;margin-bottom:0;font-size:15px;color:var(--text-gray);line-height:1.7">Essa etapa 1 você irá aprender o primeiro passo para poder analisar texto: aprender a identificar e classificar um verbo.</p>
      <div class="lesson-body" style="margin-top:24px">
        <h3 class="lesson-title">Lição de Verbo <span class="lesson-title-sub">(Versão Resumida)</span></h3>
        <p>Verbo é a palavra que indica <strong>ação, estado, mudança de estado ou fenômeno da natureza</strong>. Ao ler um texto, uma das primeiras coisas que devemos identificar é o verbo, porque ele dá movimento e sentido à frase.</p>
        <p>Por exemplo, na palavra <em>correr</em>, imaginamos alguém em movimento, saindo de um ponto e se deslocando rapidamente. Isso mostra a ideia de ação.</p>
        <p><strong>Verbos indicam:</strong></p>
        <div class="lesson-table">
          <div class="lesson-row"><span class="lesson-col-key">ação</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>correr</em>, <em>cantar</em></span></div>
          <div class="lesson-row"><span class="lesson-col-key">estado</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>ser</em>, <em>estar</em></span></div>
          <div class="lesson-row"><span class="lesson-col-key">mudança de estado</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>ficar</em>, <em>tornar-se</em></span></div>
          <div class="lesson-row"><span class="lesson-col-key">fenômeno da natureza</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>chover</em>, <em>amanhecer</em></span></div>
        </div>
        <p><strong>Os verbos normalmente terminam em:</strong></p>
        <p class="lesson-examples">
          <strong>-ar</strong> → 1ª conjugação<br>
          <strong>-er</strong> → 2ª conjugação<br>
          <strong>-ir</strong> → 3ª conjugação
        </p>
        <p>Existe também o verbo <strong>pôr</strong>, que antigamente era escrito como <em>poer</em>. Então ele é classificado na 2ª conjugação.</p>
        <p><strong>Para identificar um verbo, tente colocá-lo no infinitivo:</strong></p>
        <p class="lesson-examples">
          <em>cantou</em> → <em>cantar</em><br>
          <em>bebeu</em> &nbsp; → <em>beber</em><br>
          <em>partiu</em> → <em>partir</em>
        </p>
        <p><strong>Tente identificar também se ele é ação, fenômeno da natureza, estado ou mudança de estado:</strong></p>
        <div class="lesson-grid">
          <span class="lg-key"><em>estava</em> → <em>estar</em></span><span class="lg-arrow">→</span><span class="lg-val">estado</span>
          <span class="lg-key"><em>ficou</em> → <em>ficar</em></span><span class="lg-arrow">→</span><span class="lg-val">mudança de estado</span>
          <span class="lg-key"><em>amanheceu</em> → <em>amanhecer</em></span><span class="lg-arrow">→</span><span class="lg-val">fenômeno da natureza</span>
          <span class="lg-key"><em>correu</em> → <em>correr</em></span><span class="lg-arrow">→</span><span class="lg-val">ação</span>
        </div>
      </div>
      <button type="button" class="btn-start" id="startBtn">
        Começar questões ${icons.right}
      </button>
    </div>`;
  $('startBtn').addEventListener('click', startQuiz);
}

// ── TELA DE INTRODUÇÃO — MÓDULO 2 ────────────────────────────
function renderModule2Intro() {
  $('quizContainer').innerHTML = `
    <div class="lesson-screen">
      <div class="lesson-badge"><i class="fa-solid fa-book-open"></i> Segunda Etapa</div>
      <h2>Você irá responder as questões que é a segunda etapa para conseguir analisar textos.</h2>
      <div class="lesson-body">
        <h3 class="lesson-title">Lição de Sujeito <span class="lesson-title-sub">(Versão Resumida)</span></h3>
        <p>Agora que você já sabe identificar o verbo, ficará mais fácil encontrar o sujeito.</p>
        <p>O sujeito é <strong>quem pratica a ação, sofre a ação ou sobre quem se fala</strong> na frase.</p>

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
      saveProgress();
    });
  }
}

// ── MODAL CONSULTAR LIÇÃO ────────────────────────────────────
function getLessonBodyHTML(module) {
  if (module === 1) return `
    <div class="lesson-body">
      <h3 class="lesson-title">Lição de Verbo <span class="lesson-title-sub">(Versão Resumida)</span></h3>
      <p>Verbo é a palavra que indica <strong>ação, estado, mudança de estado ou fenômeno da natureza</strong>. Ao ler um texto, uma das primeiras coisas que devemos identificar é o verbo, porque ele dá movimento e sentido à frase.</p>
      <p>Por exemplo, na palavra <em>correr</em>, imaginamos alguém em movimento, saindo de um ponto e se deslocando rapidamente. Isso mostra a ideia de ação.</p>
      <p><strong>Verbos indicam:</strong></p>
      <div class="lesson-table">
        <div class="lesson-row"><span class="lesson-col-key">ação</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>correr</em>, <em>cantar</em></span></div>
        <div class="lesson-row"><span class="lesson-col-key">estado</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>ser</em>, <em>estar</em></span></div>
        <div class="lesson-row"><span class="lesson-col-key">mudança de estado</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>ficar</em>, <em>tornar-se</em></span></div>
        <div class="lesson-row"><span class="lesson-col-key">fenômeno da natureza</span><span class="lesson-col-arrow">→</span><span class="lesson-col-val"><em>chover</em>, <em>amanhecer</em></span></div>
      </div>
      <p><strong>Os verbos normalmente terminam em:</strong></p>
      <p class="lesson-examples"><strong>-ar</strong> → 1ª conjugação<br><strong>-er</strong> → 2ª conjugação<br><strong>-ir</strong> → 3ª conjugação</p>
      <p>Existe também o verbo <strong>pôr</strong>, que antigamente era escrito como <em>poer</em>. Então ele é classificado na 2ª conjugação.</p>
      <p><strong>Para identificar um verbo, tente colocá-lo no infinitivo:</strong></p>
      <p class="lesson-examples"><em>cantou</em> → <em>cantar</em><br><em>bebeu</em> &nbsp; → <em>beber</em><br><em>partiu</em> → <em>partir</em></p>
      <p><strong>Tente identificar também se ele é ação, fenômeno da natureza, estado ou mudança de estado:</strong></p>
      <div class="lesson-grid">
        <span class="lg-key"><em>estava</em> → <em>estar</em></span><span class="lg-arrow">→</span><span class="lg-val">estado</span>
        <span class="lg-key"><em>ficou</em> → <em>ficar</em></span><span class="lg-arrow">→</span><span class="lg-val">mudança de estado</span>
        <span class="lg-key"><em>amanheceu</em> → <em>amanhecer</em></span><span class="lg-arrow">→</span><span class="lg-val">fenômeno da natureza</span>
        <span class="lg-key"><em>correu</em> → <em>correr</em></span><span class="lg-arrow">→</span><span class="lg-val">ação</span>
      </div>
    </div>`;
  return `
    <div class="lesson-body">
      <h3 class="lesson-title">Lição de Sujeito <span class="lesson-title-sub">(Versão Resumida)</span></h3>
      <p>Agora que você já sabe identificar o verbo, ficará mais fácil encontrar o sujeito.</p>
      <p>O sujeito é <strong>quem pratica a ação, sofre a ação ou sobre quem se fala</strong> na frase.</p>
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
  title.textContent = module === 1 ? 'Lição de Verbo (Versão Resumida)' : 'Lição de Sujeito (Versão Resumida)';
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
  const count  = count1 + count2;
  const badge        = $('cadernoErrorBadge');
  const countEl      = $('cadernoErrorCount');
  const progressText = $('cadernoProgressText');
  const progressFill = $('cadernoProgressFill');
  if (badge)        badge.style.display = count > 0 ? 'flex' : 'none';
  if (countEl)      countEl.textContent = count;
  if (progressText) progressText.textContent = count === 0 ? '0 erros' : `${count} erro${count !== 1 ? 's' : ''}`;
  const totalQ = questions.length + questions2.length;
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

// ── PÁGINA CADERNO DE ERROS ───────────────────────────────────
function renderErrorNotebookPage() {
  const entries1 = Object.entries(state.errorNotebook).sort((a, b) => Number(a[0]) - Number(b[0]));
  const entries2 = Object.entries(state.m2errorNotebook).sort((a, b) => Number(a[0]) - Number(b[0]));
  const totalErrors = entries1.length + entries2.length;

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

  const listHTML = totalErrors === 0
    ? `<div class="enp-empty">
         <i class="fa-solid fa-check-circle"></i>
         <p>Nenhum erro ainda!<br>Continue praticando e suas questões erradas aparecerão aqui.</p>
       </div>`
    : [...cardsM1, ...cardsM2].join('');

  const actionsHTML = [
    entries1.length > 0
      ? `<button type="button" class="btn-nav btn-nav-primary" id="practiceAllErrorsBtn">
           ${icons.retry} Praticar erros Módulo 1
         </button>`
      : '',
    entries2.length > 0
      ? `<button type="button" class="btn-nav btn-nav-primary" id="practiceM2ErrorsBtn">
           ${icons.retry} Praticar erros Módulo 2
         </button>`
      : '',
  ].filter(Boolean).join('');

  const backLabel = state.previousPhase && state.previousPhase.startsWith('module2') ? 'Módulo 2' : 'Módulo 1';

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

  if (entries1.length > 0) {
    $('practiceAllErrorsBtn').addEventListener('click', () => {
      const wrongSet = Object.keys(state.errorNotebook).map(Number);
      wrongSet.forEach(i => { state.results[i] = null; });
      state.activeSet = wrongSet;
      state.current   = 0;
      state.phase     = 'quiz';
      updateStats();
      render();
      saveProgress();
    });
  }
  if (entries2.length > 0) {
    $('practiceM2ErrorsBtn').addEventListener('click', () => {
      const wrongSet = Object.keys(state.m2errorNotebook).map(Number);
      wrongSet.forEach(i => { state.m2results[i] = null; });
      state.m2activeSet = wrongSet;
      state.m2current   = 0;
      state.m2phase     = 'quiz';
      state.m2pending   = { mode: 'verb', verbIdx: null, subjectIdxs: [] };
      state.phase       = 'module2-quiz';
      updateModule2Card();
      render();
      saveProgress();
    });
  }
}

// ── NAVEGAR PARA QUESTÃO (caderno de erros) ──────────────────
function goToQuestion(qIdx) {
  if (state.activeSet.indexOf(Number(qIdx)) === -1) {
    state.activeSet = questions.map((_, i) => i);
  }
  state.current = state.activeSet.indexOf(Number(qIdx));
  state.results[Number(qIdx)] = null;
  state.phase   = 'quiz';
  updateStats();
  document.getElementById('leftSidebar').classList.remove('open');
  document.getElementById('btnMobileConteudos').classList.remove('active');
  const bd = document.getElementById('mobilePanelBackdrop');
  if (bd) bd.classList.remove('active');
  render();
}

// ── NAVEGAR PARA QUESTÃO MÓDULO 2 (caderno de erros) ─────────
function goToM2Question(qIdx) {
  if (state.m2activeSet.indexOf(Number(qIdx)) === -1) {
    state.m2activeSet = questions2.map((_, i) => i);
  }
  state.m2current = state.m2activeSet.indexOf(Number(qIdx));
  state.m2results[Number(qIdx)] = null;
  state.m2phase   = 'quiz';
  state.m2pending = { mode: 'verb', verbIdx: null, subjectIdxs: [] };
  state.phase     = 'module2-quiz';
  updateModule2Card();
  document.getElementById('leftSidebar').classList.remove('open');
  document.getElementById('btnMobileConteudos').classList.remove('active');
  const bd = document.getElementById('mobilePanelBackdrop');
  if (bd) bd.classList.remove('active');
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
    ${buildDualSelect(q, result, done)}
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

function buildDualSelect(q, result, done) {
  if (!done) {
    const { mode, verbIdx, subjectIdxs } = state.m2pending;
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
          <i class="fa-solid fa-circle" style="color:#2563eb;font-size:8px"></i> Selecionar Verbo
        </button>
        <button type="button" class="${subjBtnCls}" id="dualModeSubject">
          <i class="fa-solid fa-circle" style="color:#dc2626;font-size:8px"></i> Selecionar Sujeito
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

  return `
    ${sentenceHTML}
    <div class="feedback${result.correct ? '' : ' wrong'}">
      <div class="feedback-icon">${result.correct ? icons.check : icons.x}</div>
      <div class="feedback-content">
        <h2>${result.correct ? 'Correto!' : 'Incorreto!'}</h2>
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

  const allDone = answered === total && total > 0;
  const m3Card = $('module3Card');
  const m3Lock = $('module3LockIcon');
  if (m3Card) m3Card.classList.toggle('locked', !allDone);
  if (m3Lock) m3Lock.style.display = allDone ? 'none' : '';
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
  let correctCt, wrongCt, blank, acertoPct;

  if (isM2) {
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
  const allDone = m1answeredCt === m1total && m1total > 0;
  if (allDone) {
    if (badge) { badge.className = 'badge'; badge.innerHTML = 'Concluído <i class="fa-solid fa-circle-check"></i>'; }
    if (icon)  icon.style.display = 'flex';
    const m2 = $('module2Card');
    const m2lock = $('module2LockIcon');
    if (m2) m2.classList.remove('locked');
    if (m2lock) m2lock.style.display = 'none';
  } else {
    if (badge) { badge.className = 'badge in-progress'; badge.innerHTML = 'Em andamento <i class="fa-solid fa-circle-half-stroke"></i>'; }
    if (icon)  icon.style.display = 'none';
    const m2 = $('module2Card');
    const m2lock = $('module2LockIcon');
    if (m2) m2.classList.add('locked');
    if (m2lock) m2lock.style.display = '';
  }
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
