# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Portuguese language learning platform prototype. The UI presents grammar topics organized into modules, with progress tracking, completion states, and performance metrics.

## Running the Project

No build process — open `index.html` directly in a browser. There are no dependencies to install, no server required, and no test suite. Bump the `?v=N` cache suffix in `index.html` on both the CSS and JS tags after every change.

## Architecture

The project is split into three files:

- [index.html](index.html) — markup only; links to external CSS and JS
- [css/styles.css](css/styles.css) — all styles, including the design system variables
- [js/main.js](js/main.js) — all quiz logic, state, rendering

**Layout:** Three-panel design — left sidebar (module navigation), center panel (quiz content), right sidebar (performance metrics).

**Design system:** All colors, spacing, and visual tokens are defined as CSS custom properties on `:root`. Prefer modifying these variables over hardcoding values.

**State persistence:** File System Access API + IndexedDB via `saveProgress()` / `loadProgress()`.

---

## Checklist: criar um novo módulo N

Siga esta ordem sempre que um novo módulo for adicionado.

### 1. `index.html` — card na sidebar

```html
<div class="module-card locked" id="moduleNCard">
    <div class="module-icon bg-COLOR">ÍCONE</div>
    <div class="module-content">
        <h3 class="module-title">N. Nome do módulo</h3>
        <p class="module-desc">Descrição curta.</p>
        <div class="module-progress">
            <div class="bar"><div class="fill" style="width:0%"></div></div>
            <span>0%</span>
        </div>
    </div>
    <div class="status-icon lock" id="moduleNLockIcon"><i class="fa-solid fa-lock"></i></div>
</div>
```

### 2. `js/main.js` — questões

```js
const questionsN = [ /* array de questões */ ];
```

### 3. `js/main.js` — estado inicial (objeto `state`)

```js
mNphase:         'none',
mNcurrent:       0,
mNactiveSet:     questionsN.map((_, i) => i),
mNresults:       new Array(questionsN.length).fill(null),
mNpoints:        0,
mNpending:       { /* campos do tipo de questão */ },
mNerrorNotebook: {},
mNunlocked:      false,
m(N+1)unlocked:  false,   // flag para desbloquear o próximo módulo
```

### 4. `js/main.js` — constante de fases

```js
const PHASES_MODULEN = ['moduleN-intro', 'moduleN-quiz', 'moduleN-results'];
```

### 5. `js/main.js` — adicionar às listas de fases

```js
// PHASES_NO_HEADER  → adicionar 'moduleN-intro', 'moduleN-quiz', 'moduleN-results'
// PHASES_SHOW_TITLE → idem
// validPhases (em loadProgress) → idem
```

### 6. `js/main.js` — salvar progresso (`saveProgress`)

Adicionar ao objeto `data`:
```js
mNunlocked:      state.mNunlocked,
m(N+1)unlocked:  state.m(N+1)unlocked,
mNphase:         state.mNphase,
mNcurrent:       state.mNcurrent,
mNactiveSet:     state.mNactiveSet,
mNresults:       state.mNresults,
mNpoints:        state.mNpoints,
mNerrorNotebook: state.mNerrorNotebook,
```

### 7. `js/main.js` — restaurar progresso (`loadProgress`)

```js
state.mNresults       = data.mNresults ?? new Array(questionsN.length).fill(null);
state.mNpoints        = data.mNpoints ?? 0;
state.mNerrorNotebook = data.mNerrorNotebook ?? {};
state.mNunlocked      = !!(data.mNunlocked || PHASES_MODULEN.includes(data.phase) || state.mNresults.some(r => r !== null));
state.mNphase         = data.mNphase ?? 'none';
state.mNcurrent       = data.mNcurrent ?? 0;
if (Array.isArray(data.mNactiveSet)) state.mNactiveSet = data.mNactiveSet;
```

### 8. `js/main.js` — dispatcher `render()`

```js
if (state.phase === 'moduleN-intro')   { renderModuleNIntro();    return; }
if (state.phase === 'moduleN-quiz')    { renderModuleNQuestion(); return; }
if (state.phase === 'moduleN-results') { renderModuleNResults();  return; }
```

### 9. `js/main.js` — destaque na sidebar (dentro de `render()`, antes do dispatcher)

```js
const mNc = $('moduleNCard');
if (mNc) mNc.classList.toggle('active-view', PHASES_MODULEN.includes(state.phase));
```

### 10. `js/main.js` — click handler do card na sidebar

```js
document.getElementById('moduleNCard').addEventListener('click', () => {
  if ($('moduleNCard').classList.contains('locked')) return;
  state.mNunlocked = true;
  state.phase = 'moduleN-intro';
  render();
  document.getElementById('leftSidebar').classList.remove('open');
  document.getElementById('btnMobileConteudos').classList.remove('active');
  const bd = document.getElementById('mobilePanelBackdrop');
  if (bd) bd.classList.remove('active');
});
```

### 11. `js/main.js` — funções de renderização

```js
function renderModuleNIntro()    { /* lição */ }
function startModuleNQuiz()      { /* inicializa state e vai para moduleN-quiz */ }
function renderModuleNQuestion() { /* renderiza a questão atual */ }
function renderModuleNResults()  { /* tela de resultados */ }
```

### 12. `js/main.js` — `updateModuleNCard()` (atualiza barra de progresso e desbloqueia N+1)

```js
function updateModuleNCard() {
  const mNCard = $('moduleNCard');
  if (!mNCard) return;
  const total    = questionsN.length;
  const answered = state.mNresults.filter(r => r !== null).length;
  const pct      = total > 0 ? Math.round(answered / total * 100) : 0;
  const fill = mNCard.querySelector('.fill');
  const text = mNCard.querySelector('.module-progress span');
  if (fill) fill.style.width = pct + '%';
  if (text) text.textContent = pct + '%';

  if (answered === total && total > 0) state.m(N+1)unlocked = true;
  const allDone = state.m(N+1)unlocked;
  const mN1Card = $('module(N+1)Card');
  const mN1Lock = $('module(N+1)LockIcon');
  if (mN1Card) mN1Card.classList.toggle('locked', !allDone);
  if (mN1Lock) mN1Lock.style.display = allDone ? 'none' : '';
}
```

### 13. `js/main.js` — atualizar `updateModule(N-1)Card()` para desbloquear módulo N

No `updateModule(N-1)Card()` existente, substituir a lógica de unlock para usar `state.mNunlocked`:
```js
if (answered === total && total > 0) state.mNunlocked = true;
const allDone = state.mNunlocked;
// toggle locked no moduleNCard / moduleNLockIcon
```

### 14. `js/main.js` — `goToMNQuestion(qIdx)` para Caderno de Erros

```js
function goToMNQuestion(qIdx) {
  state.mNunlocked = true;
  if (state.mNactiveSet.indexOf(Number(qIdx)) === -1) {
    state.mNactiveSet = questionsN.map((_, i) => i);
  }
  state.mNcurrent = state.mNactiveSet.indexOf(Number(qIdx));
  state.mNphase   = 'quiz';
  state.phase     = 'moduleN-quiz';
  updateModuleNCard();
  render();
  saveProgress();
}
```

### 15. Chamar `updateModuleNCard()` nos lugares certos

- Dentro de `render()` (junto com as outras chamadas `updateModule*Card`)
- Após cada resposta gravada em `renderModuleNQuestion`
- No `goToMNQuestion`

---

## Módulos existentes

| # | Nome | Fases | Quiz | Tipo de questão |
|---|------|-------|------|-----------------|
| 0 | Objetivo | `objective` | não | — |
| 1 | Verbos - Básico | `intro / quiz / results` | sim — `questions[]` | `multiple-choice`, `word-select` |
| 2 | Sujeito - Básico | `module2-*` | sim — `questions2[]` | `dual-select` |
| 3 | Estudo do predicado | `module3-*` | sim — `questions3[]` | `tri-select` |
| 4 | Orações sem sujeito | `module4-*` | sim — `questions4[]` | `tri-select` (com `noSubject`) |
| 5 | Inversão da ordem | `module5-*` | sim — `questions5[]` | `tri-select` |
| 6 | Pontuação | placeholder bloqueado | não | — |
| 7 | Interpretação de Texto | placeholder bloqueado | não | — |
| 8 | Ortografia | placeholder bloqueado | não | — |

---

## Tipos de questão

### `multiple-choice`
Usada no módulo 1. O aluno escolhe uma alternativa (A–D).
```js
{
  type: 'multiple-choice',
  difficulty: 'Fácil' | 'Médio' | 'Difícil',
  text: 'HTML da pergunta',
  answers: [
    { letter: 'A', text: '...', correct: true,  hint: 'feedback por alternativa' },
    { letter: 'B', text: '...', correct: false, hint: '...' },
    // ...
  ],
  feedback: 'explicação geral após responder',
  example:  'exemplo complementar',
}
```

### `word-select`
Usada no módulo 1. O aluno clica em uma palavra da frase.
```js
{
  type: 'word-select',
  difficulty: '...',
  text: 'instrução',
  sentence: ['array', 'de', 'tokens'],
  correctIndex: 2,                           // índice da palavra correta
  wordClassHints: [
    { word: '...', wordClass: '...', isVerb: false },
    // ...
  ],
  feedback: '...',
  example:  '...',
  answers:  [],                              // sempre vazio neste tipo
}
```

### `dual-select`
Usada no módulo 2. O aluno clica no verbo (1 palavra) e depois no sujeito (1 ou mais palavras).  
Estado pendente: `m2pending = { mode: 'verb' | 'subject', verbIdx: null, subjectIdxs: [] }`.
```js
{
  type: 'dual-select',
  difficulty: '...',
  text: 'instrução',
  sentence: ['array', 'de', 'tokens'],
  verbIndex:      2,                         // índice do verbo correto
  subjectIndices: [0, 1],                    // índices do sujeito correto
  feedback: '...',
  example:  '...',
}
```

### `tri-select`
Usada nos módulos 3, 4 e 5. O aluno seleciona verbo → sujeito → predicado.  
Estado pendente: `m3pending / m4pending / m5pending = { mode: 'verb'|'subject'|'predicate', verbIdx: null, subjectIdxs: [], predicateIdxs: [], predicateConfirmed: false }`.  
Questões de módulo 4 com `noSubject: true` representam orações sem sujeito (verbo impessoal).
```js
{
  type: 'tri-select',
  difficulty: '...',
  text: 'instrução',
  sentence: ['array', 'de', 'tokens'],
  verbIndex:        2,
  subjectIndices:   [0, 1],
  predicateIndices: [2, 3, 4],
  noSubject: false,                          // true → oração sem sujeito (módulo 4)
  feedback: '...',
  example:  '...',
}
```

---

## Atenção: nomenclatura do Módulo 1

O módulo 1 foi criado antes da convenção `mN*`. Suas chaves no `state` são **sem prefixo**:

| Convenção (módulos 2+) | Módulo 1 |
|------------------------|----------|
| `state.mNcurrent` | `state.current` |
| `state.mNresults` | `state.results` |
| `state.mNpoints` | `state.points` |
| `state.mNactiveSet` | `state.activeSet` |
| `state.mNerrorNotebook` | `state.errorNotebook` |
| `state.mNphase` | (não existe — usa `state.phase` direto) |

As fases do módulo 1 (`'intro'`, `'quiz'`, `'results'`) ficam diretamente em `state.phase`, sem prefixo de módulo. A constante correspondente é `PHASES_M1`.
