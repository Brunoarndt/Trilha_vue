# Trilha prática — construindo o CineVue com Vue, Pinia e Vue Router

## Apresentação

Esta não é apenas uma lista de assuntos para estudar. É um roteiro de implementação para construir, passo a passo, uma landing page de filmes e um backoffice de gerenciamento.

A trilha foi organizada para cinco dias úteis. Cinco dias são a meta, não uma obrigação rígida. Se alguma atividade precisar continuar no dia seguinte, priorize entender as decisões e manter o código organizado em vez de correr para terminar.

O repositório contém a aplicação completa como referência. Durante o estudo, o aluno deve reconstruir cada parte seguindo a ordem deste documento, comparar o resultado com os arquivos prontos e explicar as decisões tomadas.

## Navegação rápida

- [Antes de começar](#1-antes-de-começar)
- [Como organizar o projeto](#2-como-organizar-o-projeto)
- [Dia 1 — Base visual, Vue e primeiro catálogo](#dia-1--base-visual-vue-e-primeiro-catálogo)
- [Dia 2 — Componentização e landing page](#dia-2--componentização-e-landing-page)
- [Dia 3 — Vue Router, Inertia e Pinia](#dia-3--vue-router-inertia-e-pinia)
- [Dia 4 — Formulários, CRUD e backoffice](#dia-4--formulários-crud-e-backoffice)
- [Dia 5 — Login, proteção de rotas e qualidade](#dia-5--login-proteção-de-rotas-e-qualidade)
- [Checklist de arquitetura](#3-checklist-de-arquitetura)
- [Critérios de avaliação](#4-critérios-de-avaliação)
- [Se não terminar em cinco dias](#5-se-não-terminar-em-cinco-dias)
- [Evoluções após a trilha](#6-evoluções-após-a-trilha)
- [Perguntas para a revisão final](#7-perguntas-para-a-revisão-final)

Leitura complementar: [arquitetura do CineVue](arquitetura.md).

## O que será construído

Ao final, a aplicação terá:

- landing page com carrossel de filmes;
- catálogo com pesquisa e filtro por status;
- página de detalhes do filme;
- página pública explicando a trilha;
- login didático;
- dashboard administrativo;
- listagem, cadastro, edição e exclusão de filmes;
- rotas públicas e administrativas;
- proteção das rotas do backoffice;
- feedback visual em navegações lentas;
- estado global e persistência no navegador;
- testes básicos, lint e build de produção.

O conteúdo também pode ser estudado pela interface da própria aplicação:

```text
/trilha                              visão geral
/trilha/dias/segunda                roteiro detalhado de um dia
/trilha/modulos/componentizacao     conteúdo, código e exemplo visual
```

A versão escrita é a referência completa; a versão visual organiza o mesmo aprendizado em telas navegáveis e demonstrações interativas.

## Cronograma da semana

| Dia | Tema principal | Entrega do dia |
| --- | --- | --- |
| Segunda-feira | UI/UX, Vue, reatividade e dados | Wireframe e catálogo simples renderizado |
| Terça-feira | Componentização e landing page | Área pública organizada e reutilizável |
| Quarta-feira | Router, Inertia e Pinia | Navegação, comparação arquitetural e estado global |
| Quinta-feira | Formulários, CRUD e backoffice | Gerenciamento de filmes funcional |
| Sexta-feira | Login, rotas protegidas e qualidade | Projeto revisado e demonstrável |

## Como estudar em cada dia

Use este ciclo para cada bloco:

1. Leia o objetivo antes de abrir o código.
2. Identifique os arquivos que serão criados ou modificados.
3. Digite a implementação mínima apresentada.
4. Execute e confira o comportamento no navegador.
5. Compare com o arquivo completo deste repositório.
6. Resolva os exercícios sem copiar a solução.
7. Explique verbalmente o fluxo dos dados.
8. Faça um commit pequeno e descritivo.

Uma sugestão de distribuição diária é:

- 45 minutos para explicação;
- 60 minutos para demonstração;
- 2 horas para implementação acompanhada;
- 90 minutos para exercícios;
- 45 minutos para revisão e commit.

---

# 1. Antes de começar

## 1.1 Pré-requisitos

O aluno precisa ter uma base inicial de:

- HTML semântico;
- seletores e propriedades básicas de CSS;
- variáveis, funções, arrays e objetos em JavaScript;
- terminal;
- Git básico.

Também é necessário ter instalado:

- Node.js 22 ou superior;
- npm 11 ou superior;
- um editor como VS Code;
- extensão Vue - Official para o VS Code.

Confira o ambiente:

```bash
node --version
npm --version
```

## 1.2 Executando a referência pronta

Na raiz do repositório:

```bash
npm install
npm run dev
```

O terminal mostrará um endereço parecido com:

```text
http://localhost:5173
```

Antes de começar a reconstrução, navegue pela aplicação pronta e identifique:

- quais partes aparecem em várias páginas;
- quais dados mudam quando um filme é editado;
- quais páginas são públicas;
- quais páginas exigem login;
- quais componentes parecem genéricos;
- quais componentes conhecem o domínio de filmes.

## 1.3 Criando um projeto do zero

Esta seção começa realmente do zero. Se você nunca abriu um projeto Vue, siga sem pular etapas. Não é necessário decorar os comandos: primeiro entenda o que cada um pede ao computador.

### Passo 1 — Escolher onde a pasta será criada

Abra o terminal. Ele sempre está “dentro” de alguma pasta do computador. O projeto será criado dentro da pasta atual.

Você pode conferir a pasta atual com:

```bash
pwd
```

No Windows PowerShell, `pwd` também funciona. Escolha uma pasta de estudos e navegue até ela com `cd`. Por exemplo:

```bash
cd Documentos
```

> `cd` significa *change directory*, ou “mudar de pasta”. Ainda não entre em uma pasta chamada `cinevue`, pois ela será criada no próximo passo.

### Passo 2 — Pedir ao criador oficial para montar o projeto

Execute:

```bash
npm create vue@latest
```

Esse comando executa o criador oficial de projetos Vue. Ele fará algumas perguntas. Use as setas para navegar, a barra de espaço quando for possível marcar mais de uma opção e Enter para confirmar.

Selecione estas respostas:

```text
Project name: cinevue
TypeScript: No
JSX: No
Vue Router: Yes
Pinia: Yes
Vitest: Yes
ESLint: Yes
Prettier: opcional
```

O que essas escolhas significam:

| Escolha | Por que usar na trilha |
| --- | --- |
| JavaScript | Mantém a atenção em Vue sem adicionar TypeScript agora |
| Vue Router | Relaciona URLs às páginas públicas, à trilha e ao backoffice |
| Pinia | Compartilha filmes e sessão entre várias telas |
| Vitest | Permite testar regras da store |
| ESLint | Aponta problemas e inconsistências no código |
| Prettier | É opcional; apenas automatiza parte da formatação |

Ao final, uma pasta chamada `cinevue` será criada. O terminal ainda estará na pasta anterior.

### Passo 3 — Entrar no projeto

Execute:

```bash
cd cinevue
```

Agora o terminal está dentro do projeto. Para conferir, execute `pwd` novamente. O caminho deve terminar em `/cinevue` ou `\cinevue`.

### Passo 4 — Baixar as dependências

Execute:

```bash
npm install
```

O arquivo `package.json` funciona como uma lista de ferramentas necessárias. `npm install` lê essa lista, baixa as ferramentas e cria a pasta `node_modules`.

Essa pasta pode ser grande e não deve ser editada manualmente. Também não deve ser enviada ao Git, porque pode ser reconstruída pelo mesmo comando.

Espere o terminal terminar antes de continuar. Avisos não são necessariamente erros. Um erro normalmente interrompe o comando e mostra palavras como `ERR!` ou `failed`.

### Passo 5 — Ligar o servidor de desenvolvimento

Execute:

```bash
npm run dev
```

O Vite mostrará uma resposta parecida com:

```text
VITE ready
Local: http://localhost:5173/
```

Segure `Ctrl` e clique no endereço ou copie-o para o navegador. Se a porta 5173 já estiver sendo usada, o Vite escolherá outra, como 5174. Use o endereço que apareceu no seu terminal.

Não feche esse terminal enquanto estiver programando. Ele mantém a aplicação ligada e mostra erros importantes. Para executar outros comandos, abra uma segunda aba do terminal.

### Passo 6 — Confirmar que a atualização automática funciona

1. Abra `src/App.vue` no editor.
2. Encontre algum texto visível no template.
3. Troque esse texto por `Meu primeiro CineVue`.
4. Salve o arquivo.
5. Volte ao navegador.

O texto deve mudar sem atualizar a página manualmente. Esse comportamento é chamado de *Hot Module Replacement* (HMR): durante o desenvolvimento, o Vite aplica mudanças rapidamente.

Se a tela não atualizar:

1. confira se o arquivo foi salvo;
2. confira se `npm run dev` continua executando;
3. leia a primeira mensagem de erro no terminal;
4. confira a primeira mensagem de erro no console do navegador;
5. desfaça somente a última alteração e teste novamente.

### O que acabou de acontecer

Você não “instalou o Vue no navegador”. Você criou um projeto que usa várias ferramentas:

```text
npm create vue@latest  → montou os arquivos iniciais
cd cinevue             → entrou na pasta do projeto
npm install            → baixou as dependências
npm run dev            → ligou o servidor de desenvolvimento
navegador               → abriu a aplicação servida pelo Vite
```

Nesta trilha usamos JavaScript para manter o foco em Vue, componentização, Pinia e Router. TypeScript pode ser uma evolução posterior.

### Erros comuns nesta primeira execução

| Sintoma | O que verificar |
| --- | --- |
| `npm: command not found` | Node.js não está instalado ou o terminal precisa ser reaberto |
| `ENOENT package.json` | O comando foi executado fora da pasta `cinevue` |
| A URL não abre | Confira se `npm run dev` continua ligado e use a porta mostrada |
| O terminal parece “preso” | Isso é esperado: o servidor está executando e aguardando alterações |
| Alterei App.vue e nada aconteceu | Salve o arquivo e observe se há erro de sintaxe no terminal |

## 1.4 Vocabulário usado na trilha

| Termo | Significado neste projeto |
| --- | --- |
| View | Página ligada diretamente a uma rota |
| Component | Parte reutilizável ou isolável de uma interface |
| Layout | Estrutura compartilhada por um grupo de páginas |
| Store | Estado e regras compartilhados entre várias partes da aplicação |
| Service | Comunicação com algo externo, como storage ou API |
| Props | Dados recebidos pelo componente pai |
| Emit | Evento enviado do componente filho para o pai |
| Slot | Espaço que o componente pai pode preencher com conteúdo |
| Estado local | Informação necessária somente dentro de um componente ou página |
| Estado global | Informação usada por várias páginas ou componentes |

---

# 2. Como organizar o projeto

## 2.1 Estrutura final de pastas

```text
src/
├── assets/
│   └── styles/
│       ├── global.css
│       ├── main.css
│       ├── reset.css
│       └── tokens.css
├── components/
│   ├── admin/
│   │   ├── AdminMovieTable.vue
│   │   └── StatCard.vue
│   ├── base/
│   │   ├── AppLogo.vue
│   │   ├── BaseBadge.vue
│   │   ├── BaseButton.vue
│   │   ├── BaseEmptyState.vue
│   │   ├── BaseIcon.vue
│   │   ├── BaseInput.vue
│   │   └── BaseModal.vue
│   ├── learning/
│   │   ├── LearningCodeBlock.vue
│   │   ├── LearningDayCard.vue
│   │   ├── LearningLessonIntro.vue
│   │   ├── LearningModuleCard.vue
│   │   ├── LearningPreview.vue
│   │   └── LearningReferences.vue
│   ├── layout/
│   │   ├── AdminHeader.vue
│   │   ├── AdminLayout.vue
│   │   ├── AdminSidebar.vue
│   │   ├── PublicFooter.vue
│   │   ├── PublicHeader.vue
│   │   └── PublicLayout.vue
│   └── movie/
│       ├── HeroBanner.vue
│       ├── HeroCarousel.vue
│       ├── MovieCard.vue
│       ├── MovieFilters.vue
│       ├── MovieForm.vue
│       └── MovieGrid.vue
├── data/
│   ├── movies.js
│   ├── roadmap.js
│   ├── roadmapDays.js
│   ├── roadmapLessons.js
│   ├── roadmapModules.js
│   └── roadmapStepExamples.js
├── router/
│   └── index.js
├── services/
│   └── storageService.js
├── stores/
│   ├── auth.js
│   ├── index.js
│   ├── movies.js
│   └── movies.test.js
├── views/
│   ├── admin/
│   │   ├── AdminDashboardView.vue
│   │   ├── AdminMovieFormView.vue
│   │   └── AdminMoviesView.vue
│   ├── auth/
│   │   └── LoginView.vue
│   ├── public/
│   │   ├── HomeView.vue
│   │   ├── MovieDetailsView.vue
│   │   ├── RoadmapDayView.vue
│   │   ├── RoadmapModuleView.vue
│   │   └── RoadmapView.vue
│   └── NotFoundView.vue
├── App.vue
└── main.js
```

## 2.2 Como decidir onde criar um arquivo

Antes de criar um arquivo, faça estas perguntas:

### É uma página acessada por URL?

Crie em `src/views/`.

Exemplos:

- `/` usa `views/public/HomeView.vue`;
- `/login` usa `views/auth/LoginView.vue`;
- `/admin/filmes` usa `views/admin/AdminMoviesView.vue`.

### É uma estrutura que envolve várias páginas?

Crie em `src/components/layout/`.

Exemplos:

- cabeçalho e rodapé públicos;
- menu lateral e cabeçalho administrativo;
- estrutura pública com `<RouterView />`.

### É genérico e poderia ser usado em outro sistema?

Crie em `src/components/base/`.

Exemplos:

- botão;
- campo de texto;
- modal;
- selo;
- estado vazio.

Um componente base não deve importar `useMoviesStore` ou conhecer palavras como filme, catálogo ou sessão.

### Conhece regras ou dados de filmes?

Crie em `src/components/movie/`.

Exemplos:

- card de filme;
- grade de filmes;
- formulário de filme;
- carrossel de destaques.

### É exclusivo da administração?

Crie em `src/components/admin/`.

Exemplos:

- tabela administrativa;
- card de indicador do dashboard.

### É estado usado por várias páginas?

Crie em `src/stores/`.

### Conversa com navegador, API ou outro recurso externo?

Crie em `src/services/`.

### É um conjunto de dados fixos para iniciar o projeto?

Crie em `src/data/`.

## 2.3 Regra prática: view compõe, component apresenta, store decide

Observe o fluxo da Home:

```text
HomeView
├── pede filmes para moviesStore
├── controla texto da pesquisa localmente
├── entrega a lista para MovieGrid
└── MovieGrid cria um MovieCard para cada filme
```

A `HomeView` decide quais partes formam a página. O `MovieCard` decide como um filme é apresentado. A store guarda e altera o catálogo.

## 2.4 Estrutura de um arquivo `.vue`

Um Single-File Component normalmente possui três blocos:

```vue
<script setup>
// Estado, imports, props, eventos e funções.
</script>

<template>
  <!-- HTML reativo do componente. -->
</template>

<style scoped>
/* Estilos que pertencem somente a este componente. */
</style>
```

`scoped` faz o Vue limitar aqueles estilos ao componente. Tokens de cores, reset e classes realmente globais ficam em `src/assets/styles/`.

## 2.5 Modelo de dados de um filme

Todos os componentes e stores precisam concordar com a estrutura do objeto:

| Campo | Tipo | Uso |
| --- | --- | --- |
| `id` | Number | Identificador único e parâmetro da rota |
| `title` | String | Título exibido no card e detalhes |
| `tagline` | String | Frase curta do carrossel |
| `synopsis` | String | Descrição completa |
| `genre` | String | Gênero e filtro |
| `year` | Number | Ano de lançamento |
| `duration` | Number | Duração em minutos |
| `rating` | Number | Avaliação entre 0 e 10 |
| `ageRating` | String | Classificação indicativa |
| `status` | String | `showing` ou `coming-soon` |
| `featured` | Boolean | Define o principal destaque |
| `poster` | String | Imagem vertical |
| `backdrop` | String | Imagem horizontal do carrossel |

Definir este contrato antes de montar as telas reduz condicionais e inconsistências.

---

# Dia 1 — Base visual, Vue e primeiro catálogo

## Objetivo do dia

Planejar a experiência visual, entender como o Vue liga dados JavaScript ao HTML e terminar o dia renderizando uma lista simples de filmes.

## Arquivos trabalhados

```text
src/
├── assets/styles/
├── data/movies.js
├── views/public/HomeView.vue
├── App.vue
└── main.js

docs/
├── fluxo-usuario.md
├── referencias-ui-ux.md
└── wireframes.md
```

## Passo 1 — Entender o ponto de entrada

Abra `src/main.js`:

```js
import { createApp } from 'vue'

import App from './App.vue'
import './assets/styles/main.css'

createApp(App).mount('#app')
```

O fluxo é:

1. `index.html` possui `<div id="app"></div>`.
2. `createApp(App)` cria a aplicação usando `App.vue` como raiz.
3. `.mount('#app')` coloca a aplicação dentro daquela `div`.
4. `main.css` carrega os estilos globais.

Mais adiante, Pinia e Router serão instalados entre `createApp(App)` e `.mount()`.

## Passo 2 — Organizar os estilos globais

Crie:

```text
src/assets/styles/tokens.css
src/assets/styles/reset.css
src/assets/styles/global.css
src/assets/styles/main.css
```

Em `tokens.css`, coloque valores reutilizados:

```css
:root {
  --color-bg: #080b12;
  --color-surface: #141a27;
  --color-text: #f7f8fb;
  --color-text-muted: #9da7b8;
  --color-primary: #e8ff47;
  --radius-md: 0.875rem;
  --container: 1200px;
}
```

Em `main.css`, importe na ordem correta:

```css
@import './tokens.css';
@import './reset.css';
@import './global.css';
```

Por que separar?

- `tokens.css` centraliza decisões visuais;
- `reset.css` normaliza o comportamento do navegador;
- `global.css` contém tipografia, container e utilitários;
- estilos específicos continuam dentro dos componentes.

## Passo 3 — Criar os dados iniciais

Crie `src/data/movies.js`:

```js
export const initialMovies = [
  {
    id: 1,
    title: 'Além do Horizonte',
    tagline: 'O futuro começa onde termina o medo.',
    synopsis: 'Uma piloto atravessa uma tempestade cósmica...',
    genre: 'Ficção científica',
    year: 2026,
    duration: 142,
    rating: 9.1,
    ageRating: '12',
    status: 'showing',
    featured: true,
    poster: 'URL_DA_IMAGEM_VERTICAL',
    backdrop: 'URL_DA_IMAGEM_HORIZONTAL',
  },
]
```

Nesta etapa os dados são apenas um módulo JavaScript. Ainda não precisamos de Pinia.

## Módulo 02 — Fundamentos de UI e UX

Agora já sabemos o que é um filme para o sistema. Antes de renderizar a Home, precisamos decidir como uma pessoa encontrará esse filme.

UI e UX trabalham juntas, mas não são sinônimos:

| Conceito | Pergunta principal | Exemplos no CineVue |
| --- | --- | --- |
| UI — User Interface | Como a interface apresenta e permite interagir? | Cores, textos, botões, cards, espaços e ícones |
| UX — User Experience | A pessoa consegue concluir a tarefa com clareza? | Encontrar um filme, entender um erro e voltar para a lista |

### Referências: bons resultados podem ter aparências muito diferentes

Antes de desenhar, aumente seu repertório. Abra os exemplos e procure decisões, não apenas efeitos que parecem bonitos.

| Referência | Tipo de experiência | O que observar |
| --- | --- | --- |
| [Apple](https://www.apple.com/) | Apresentação e comércio de produtos | Hierarquia entre produto, benefício e compra; imagens grandes; poucas ações por bloco |
| [Lando Norris](https://landonorris.com/) | Marca pessoal e esporte | Movimento, narrativa, identidade e exploração de conteúdo para fãs |
| [shadcn/vue](https://shadcn-vue.com/) | Base para design system | Consistência, composição, acessibilidade e liberdade para adaptar o código |
| [PrimeVue](https://primevue.org/) | Sistemas e backoffices | Tabelas, formulários, estados, variações e componentes para interfaces densas |
| [GSAP](https://gsap.com/) | Movimento e experiências criativas | Scroll, transições, direção da atenção e animação como parte da explicação |
| [GOV.UK Design System](https://design-system.service.gov.uk/) | Serviços públicos | Clareza, previsibilidade, linguagem direta, acessibilidade e padrões testados |

Esses exemplos não tentam resolver o mesmo problema:

- a Apple precisa explicar e vender produtos;
- o site de Lando Norris precisa expressar personalidade e envolver fãs;
- shadcn/vue ajuda equipes a construir o próprio sistema de componentes;
- PrimeVue acelera sistemas com muitos controles e dados;
- GSAP demonstra experiências em que movimento é parte central;
- GOV.UK prioriza confiança e conclusão de tarefas importantes.

Uma animação longa pode enriquecer uma narrativa esportiva e atrapalhar um atendente que precisa cadastrar 40 registros. Uma tabela cheia de controles pode ser adequada para um backoffice e inadequada para a apresentação de um filme. UI e UX sempre dependem de pessoa, objetivo e contexto.

#### Roteiro para analisar cada referência

Não navegue sem uma pergunta. Em cada site, responda:

1. Qual parece ser a principal tarefa ou intenção da página?
2. Onde seu olhar pousa primeiro? O que criou essa prioridade?
3. Quantas ações disputam atenção no mesmo bloco?
4. Como o sistema informa que um elemento é clicável?
5. O que muda em uma largura pequena?
6. É possível navegar por teclado e reconhecer o foco?
7. As animações explicam, orientam, encantam ou apenas atrasam?
8. Qual decisão faria sentido no CineVue? Qual não faria?

Registre a análise em `docs/referencias-ui-ux.md`:

```md
# Referência analisada

Nome e endereço:
Tipo de sistema:
Pessoa principal:
Tarefa principal:

## Decisões que funcionaram
-
-

## Possíveis dificuldades
-
-

## O que posso adaptar ao CineVue
-

## O que não combina com o CineVue
-
```

> Referência não é receita. Não copie uma página inteira nem conclua que movimento sempre melhora a experiência. Preserve a função, adapte ao contexto e respeite preferências como `prefers-reduced-motion`.

Uma interface pode ser bonita e ainda oferecer uma experiência ruim. Um botão elegante, mas escondido, possui uma boa aparência isolada e uma função mal comunicada.

### Etapa 1 — Definir a pessoa e a tarefa

Crie `docs/fluxo-usuario.md`:

```md
# Fluxo: encontrar um filme

## Pessoa
Visitante que deseja escolher um filme para assistir.

## Objetivo
Encontrar um filme em cartaz e abrir seus detalhes.

## Caminho
1. Entrar na página inicial.
2. Reconhecer o filme em destaque.
3. Pesquisar ou percorrer o catálogo.
4. Abrir um filme.
5. Ler os detalhes.

## Como saber se funcionou
A pessoa encontra um filme sem receber instruções.
```

Não descreva a pessoa como “qualquer usuário”. Escolha uma necessidade concreta. Também não escreva componentes como `MovieCard` no fluxo: o fluxo descreve o que a pessoa faz, e não como o código será organizado.

### Etapa 2 — Desenhar o wireframe

Wireframe é um desenho estrutural. Ele decide ordem, agrupamento e prioridade antes de cores, imagens e sombras.

Comece pela versão mobile:

```text
┌─────────────────────────┐
│ Logo              Menu  │
├─────────────────────────┤
│ DESTAQUE                │
│ Título do filme         │
│ Resumo curto            │
│ [ Ver detalhes ]        │
├─────────────────────────┤
│ Pesquisar filmes...     │
├─────────────────────────┤
│ Filmes em cartaz        │
│ [ Card do filme ]       │
│ [ Card do filme ]       │
└─────────────────────────┘
```

Pergunte em cada bloco:

1. qual informação a pessoa procura primeiro?
2. qual é a ação principal?
3. quais conteúdos pertencem ao mesmo grupo?
4. o que pode aparecer depois sem atrapalhar a decisão?
5. o desenho continua compreensível sem cores?

Faça também wireframes para detalhes, login, listagem administrativa e formulário. Papel e lápis são suficientes; a intenção é pensar rapidamente.

### Etapa 3 — Transformar decisões em tokens

Um token é uma decisão visual que recebeu um nome. Em vez de espalhar `#e8ff47`, usamos `--color-primary` para explicar a função daquela cor.

Refine `src/assets/styles/tokens.css`:

```css
:root {
  --color-bg: #080b11;
  --color-surface: #151b27;
  --color-border: rgba(255, 255, 255, 0.1);
  --color-text: #f5f7fb;
  --color-text-muted: #a7b0bf;
  --color-primary: #e8ff47;
  --color-primary-ink: #111500;

  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;

  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-pill: 999px;
}
```

Comece com uma escala pequena. Se cada componente criar um espaço e um raio diferentes, os tokens deixam de formar um sistema.

### Etapa 4 — Construir hierarquia e feedback

Hierarquia visual informa o que é mais importante. Ela pode ser criada com:

- tamanho e peso da tipografia;
- contraste entre texto e fundo;
- espaço que separa ou aproxima conteúdos;
- posição do elemento;
- cor reservada para a ação principal.

Evite dar o mesmo destaque a todas as ações. Por exemplo:

```html
<section aria-labelledby="featured-title">
  <span>Em destaque</span>
  <h1 id="featured-title">Além do Horizonte</h1>
  <p>Uma aventura para além do que conhecemos.</p>

  <a class="primary-action" href="/filmes/1">
    Ver detalhes
  </a>
</section>
```

Garanta também um foco visível para teclado:

```css
.primary-action:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 4px;
}
```

### Etapa 5 — Testar sem explicar

Entregue o wireframe ou protótipo para outra pessoa e peça: “encontre um filme em cartaz e abra seus detalhes”. Não explique onde clicar.

Observe:

- onde o olhar começa;
- onde a pessoa hesita;
- se a ação principal é reconhecida;
- se o resultado de uma ação é percebido;
- se a interface funciona em largura pequena e por teclado.

Uma hesitação não significa que a pessoa “usou errado”. É uma informação sobre algo que a interface talvez não tenha comunicado bem.

### Conferência do módulo de UI e UX

- [ ] O fluxo possui pessoa, objetivo, passos e critério de sucesso.
- [ ] Pelo menos três referências de contextos diferentes foram analisadas.
- [ ] O wireframe funciona sem cores e imagens.
- [ ] Cada página possui uma ação principal reconhecível.
- [ ] Cores e espaços repetidos usam tokens.
- [ ] Foco e contraste fazem parte da decisão visual.

## Passo 4 — Renderizar uma lista na Home

Crie `src/views/public/HomeView.vue` com uma primeira versão simples:

```vue
<script setup>
import { initialMovies } from '@/data/movies'
</script>

<template>
  <main>
    <h1>Filmes em cartaz</h1>

    <article v-for="movie in initialMovies" :key="movie.id">
      <img :src="movie.poster" :alt="`Pôster de ${movie.title}`">
      <h2>{{ movie.title }}</h2>
      <p>{{ movie.genre }} · {{ movie.year }}</p>
      <span v-if="movie.status === 'showing'">Em cartaz</span>
    </article>
  </main>
</template>
```

Conceitos usados:

- `v-for` repete o elemento para cada filme;
- `:key` ajuda o Vue a identificar cada item;
- `{{ }}` exibe valores no template;
- `:src` e `:alt` ligam atributos a expressões JavaScript;
- `v-if` renderiza algo apenas quando a condição é verdadeira.

## Passo 5 — Usar a view temporariamente

Enquanto o Router ainda não foi configurado, `App.vue` pode importar a página diretamente:

```vue
<script setup>
import HomeView from '@/views/public/HomeView.vue'
</script>

<template>
  <HomeView />
</template>
```

No Dia 3, este conteúdo será substituído por `<RouterView />`.

## Passo 6 — Praticar `ref` e `computed`

Adicione uma pesquisa simples na Home:

```vue
<script setup>
import { computed, ref } from 'vue'
import { initialMovies } from '@/data/movies'

const search = ref('')

const filteredMovies = computed(() => {
  const query = search.value.trim().toLowerCase()

  return initialMovies.filter((movie) =>
    movie.title.toLowerCase().includes(query),
  )
})
</script>

<template>
  <input v-model="search" placeholder="Pesquisar filme...">

  <article v-for="movie in filteredMovies" :key="movie.id">
    {{ movie.title }}
  </article>
</template>
```

`ref` cria um valor reativo. No JavaScript acessamos `search.value`; no template, o Vue desembrulha o valor automaticamente. `computed` representa um valor derivado e só é recalculado quando suas dependências mudam.

## Conferência do Dia 1

- [ ] O projeto abre sem erros no console.
- [ ] Os filmes vêm de `src/data/movies.js`.
- [ ] O fluxo e o wireframe foram definidos antes do acabamento visual.
- [ ] A ação principal é reconhecível e os estilos usam tokens.
- [ ] A Home usa `v-for` com uma `key` estável.
- [ ] A busca atualiza a lista enquanto o usuário digita.
- [ ] Nenhum filme foi duplicado manualmente no HTML.

## Exercícios do Dia 1

1. Adicione um segundo filme aos dados iniciais.
2. Mostre duração e avaliação.
3. Exiba “Em breve” quando o status for `coming-soon`.
4. Faça a pesquisa funcionar também pelo gênero.
5. Explique a diferença entre `filter` e `find`.
6. Desenhe a página de detalhes em mobile e desktop.
7. Peça para outra pessoa identificar a ação principal sem explicar a tela.

## Erros comuns

| Problema | Causa provável |
| --- | --- |
| Nada aparece no `v-for` | Import incorreto ou array vazio |
| Imagem não carrega | URL inválida ou uso de `src` sem `:` |
| Busca não atualiza | Variável comum usada no lugar de `ref` |
| Erro ao usar `.value` no template | No template normalmente não se usa `.value` |

## Commit sugerido

```bash
git add src
git commit -m "feat: cria catalogo inicial com vue"
```

---

# Dia 2 — Componentização e landing page

## Objetivo do dia

Dividir a Home em componentes com responsabilidades pequenas, criar a identidade visual, implementar o carrossel e preparar o formulário reutilizável.

## Arquivos trabalhados

```text
src/components/
├── base/
├── layout/
└── movie/
```

## Passo 1 — Identificar responsabilidades antes de separar

Na primeira Home, o mesmo arquivo contém:

- estrutura da página;
- repetição da lista;
- apresentação de um filme;
- campo de pesquisa;
- destaque principal.

Separe pela responsabilidade, não pelo tamanho do HTML:

```text
HomeView
├── HeroCarousel
│   └── HeroBanner
├── MovieFilters
└── MovieGrid
    └── MovieCard
```

## Passo 2 — Criar o primeiro componente base

Crie `src/components/base/BaseBadge.vue`:

```vue
<script setup>
defineProps({
  tone: {
    type: String,
    default: 'neutral',
  },
})
</script>

<template>
  <span class="badge" :class="`badge--${tone}`">
    <slot />
  </span>
</template>
```

O componente não sabe qual texto será exibido. O pai fornece o conteúdo pelo slot:

```vue
<BaseBadge tone="primary">Em cartaz</BaseBadge>
```

O contrato é:

- prop `tone`: define a variação visual;
- slot padrão: recebe o texto;
- o componente não importa dados de filmes.

## Passo 3 — Criar um botão reutilizável

Crie `src/components/base/BaseButton.vue`.

O botão final aceita:

| Prop | Função |
| --- | --- |
| `to` | Renderiza navegação do Router |
| `href` | Renderiza link externo |
| `type` | Define o tipo do botão HTML |
| `variant` | `primary`, `secondary`, `ghost` ou `danger` |
| `size` | `sm`, `md` ou `lg` |
| `block` | Ocupa toda a largura |
| `loading` | Mostra carregamento e impede novo clique |
| `disabled` | Desabilita a ação |

Comece apenas com `variant` e slot. Depois compare com [BaseButton.vue](../src/components/base/BaseButton.vue) e acrescente as outras capacidades conforme elas forem necessárias.

Evite criar todas as opções antecipadamente. Um componente cresce porque o projeto demonstrou uma necessidade, não porque talvez um dia precise.

## Passo 4 — Extrair o card do filme

Crie `src/components/movie/MovieCard.vue`:

```vue
<script setup>
import BaseBadge from '@/components/base/BaseBadge.vue'

defineProps({
  movie: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="movie-card">
    <img :src="movie.poster" :alt="`Pôster de ${movie.title}`">
    <BaseBadge :tone="movie.status === 'showing' ? 'primary' : 'neutral'">
      {{ movie.status === 'showing' ? 'Em cartaz' : 'Em breve' }}
    </BaseBadge>
    <h3>{{ movie.title }}</h3>
    <p>{{ movie.genre }} · {{ movie.year }}</p>
  </article>
</template>
```

O componente recebe o filme por prop e apenas o apresenta. Ele não deve alterar `movie.title`, remover o filme ou buscar dados sozinho.

Uma prop pertence ao pai. Se o filho precisar solicitar uma ação, ele deve emitir um evento.

## Passo 5 — Criar a grade

Crie `src/components/movie/MovieGrid.vue`:

```vue
<script setup>
import MovieCard from './MovieCard.vue'

defineProps({
  movies: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div v-if="movies.length" class="movie-grid">
    <MovieCard
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
    />
  </div>
  <p v-else>Nenhum filme encontrado.</p>
</template>
```

Agora a repetição pertence à grade e a apresentação de um item pertence ao card.

Na Home:

```vue
<MovieGrid :movies="filteredMovies" />
```

## Passo 6 — Criar filtros com `v-model` entre componentes

Crie `src/components/movie/MovieFilters.vue`.

O pai possui o estado:

```js
const search = ref('')
const activeFilter = ref('all')
```

O filho recebe os valores e emite alterações:

```vue
<script setup>
defineProps({
  search: { type: String, default: '' },
  activeFilter: { type: String, default: 'all' },
})

const emit = defineEmits(['update:search', 'update:activeFilter'])
</script>

<template>
  <input
    :value="search"
    @input="emit('update:search', $event.target.value)"
  >

  <button @click="emit('update:activeFilter', 'showing')">
    Em cartaz
  </button>
</template>
```

O pai usa:

```vue
<MovieFilters
  v-model:search="search"
  v-model:active-filter="activeFilter"
/>
```

Esta comunicação mantém a fonte do estado no pai e evita que dois componentes tenham versões diferentes da mesma pesquisa.

## Passo 7 — Separar slide e controlador do carrossel

Crie dois arquivos:

```text
src/components/movie/HeroBanner.vue
src/components/movie/HeroCarousel.vue
```

As responsabilidades são diferentes:

### `HeroBanner.vue`

- recebe um filme;
- mostra imagem, título, sinopse e botões;
- não conhece slide anterior ou próximo;
- não controla tempo.

### `HeroCarousel.vue`

- recebe uma lista de filmes;
- guarda o índice ativo;
- avança e volta;
- controla autoplay e pausa;
- escolhe a direção da transição;
- entrega somente o filme atual ao `HeroBanner`.

Implementação mínima do controlador:

```vue
<script setup>
import { computed, ref } from 'vue'
import HeroBanner from './HeroBanner.vue'

const props = defineProps({
  movies: { type: Array, required: true },
})

const activeIndex = ref(0)
const direction = ref('next')

const activeMovie = computed(() => props.movies[activeIndex.value])
const transitionName = computed(() => `hero-${direction.value}`)

function showNext() {
  direction.value = 'next'
  activeIndex.value = (activeIndex.value + 1) % props.movies.length
}

function showPrevious() {
  direction.value = 'previous'
  activeIndex.value =
    (activeIndex.value - 1 + props.movies.length) % props.movies.length
}
</script>

<template>
  <section class="carousel">
    <Transition :name="transitionName">
      <div :key="activeMovie.id" class="carousel__slide">
        <HeroBanner :movie="activeMovie" />
      </div>
    </Transition>

    <button @click="showPrevious">Anterior</button>
    <button @click="showNext">Próximo</button>
  </section>
</template>
```

A operação `% props.movies.length` volta ao primeiro item depois do último. No botão anterior, somamos o tamanho antes do `%` para evitar índice negativo.

A versão completa com autoplay, pausa, teclado e movimento reduzido está em [HeroCarousel.vue](../src/components/movie/HeroCarousel.vue).

## Passo 8 — Criar cabeçalho, rodapé e layout público

Crie:

```text
src/components/layout/PublicHeader.vue
src/components/layout/PublicFooter.vue
src/components/layout/PublicLayout.vue
```

Comece pelo cabeçalho. A lista mantém texto e destino juntos e o `nav` explica
a finalidade dos links para tecnologias assistivas:

```vue
<!-- src/components/layout/PublicHeader.vue -->
<script setup>
import AppLogo from '@/components/base/AppLogo.vue'

const navigation = [
  { label: 'Início', to: { name: 'home' } },
  { label: 'Em cartaz', to: { name: 'home', hash: '#em-cartaz' } },
  { label: 'A trilha', to: { name: 'roadmap' } },
]
</script>

<template>
  <header>
    <AppLogo />
    <nav aria-label="Navegação principal">
      <RouterLink
        v-for="item in navigation"
        :key="item.label"
        :to="item.to"
      >
        {{ item.label }}
      </RouterLink>
    </nav>
  </header>
</template>
```

O rodapé oferece caminhos úteis no fim de qualquer página pública:

```vue
<!-- src/components/layout/PublicFooter.vue -->
<script setup>
import AppLogo from '@/components/base/AppLogo.vue'
</script>

<template>
  <footer>
    <AppLogo />
    <nav aria-label="Links do rodapé">
      <RouterLink :to="{ name: 'home' }">Catálogo</RouterLink>
      <RouterLink :to="{ name: 'roadmap' }">Trilha de estudo</RouterLink>
      <RouterLink :to="{ name: 'login' }">Backoffice</RouterLink>
    </nav>
  </footer>
</template>
```

O layout será usado no Dia 3. Sua estrutura é:

```vue
<template>
  <div class="public-layout">
    <PublicHeader />
    <main>
      <RouterView />
    </main>
    <PublicFooter />
  </div>
</template>
```

`RouterView` funciona como o espaço onde o Router colocará a página atual.

## Passo 9 — Preparar o formulário reutilizável

Antes de conectar o backoffice, prepare `src/components/movie/MovieForm.vue`. Nesta etapa ele ainda não importa a store nem navega: recebe valores iniciais, controla os campos, valida e emite um objeto pronto.

```vue
<script setup>
import { reactive, watch } from 'vue'

const props = defineProps({
  movie: { type: Object, default: null },
})

const emit = defineEmits(['submit', 'cancel'])
const emptyForm = {
  title: '',
  genre: '',
  year: new Date().getFullYear(),
  rating: 0,
  status: 'coming-soon',
}

const form = reactive({ ...emptyForm })
const errors = reactive({})

watch(
  () => props.movie,
  (movie) => Object.assign(form, emptyForm, movie ?? {}),
  { immediate: true },
)

function handleSubmit() {
  errors.title = form.title.trim() ? '' : 'Informe o título.'
  if (errors.title) return

  emit('submit', {
    ...form,
    title: form.title.trim(),
    year: Number(form.year),
    rating: Number(form.rating),
  })
}
</script>
```

O objetivo da terça é finalizar o contrato do formulário. A integração com `addMovie`, `updateMovie` e as rotas administrativas acontecerá na quinta-feira.

## Conferência do Dia 2

- [ ] A Home apenas compõe componentes e controla filtros locais.
- [ ] A repetição dos filmes está em `MovieGrid`.
- [ ] A apresentação de um filme está em `MovieCard`.
- [ ] Componentes base não importam stores de filmes.
- [ ] O carrossel troca imagem, título e conteúdo completo.
- [ ] Anterior e próximo usam direções visuais coerentes.
- [ ] O layout público possui cabeçalho, conteúdo e rodapé.
- [ ] MovieForm valida e emite sem acessar a store.

## Exercícios do Dia 2

1. Adicione uma variação `danger` ao botão base.
2. Crie um componente `BaseEmptyState` e use na grade vazia.
3. Adicione filtro “Em breve”.
4. Implemente indicadores com o nome de cada filme no carrossel.
5. Pause o autoplay quando o usuário passar o mouse.
6. Explique por que `HeroBanner` e `HeroCarousel` não são um único componente.

## Erros comuns

| Problema | Causa provável |
| --- | --- |
| Prop aparece como `undefined` | Nome diferente entre pai e filho |
| Evento não chega ao pai | Evento não declarado ou nome divergente |
| Componente não renderiza | Import ou caminho incorreto |
| Estilo vaza para outras telas | Ausência de `scoped` ou seletor global demais |
| Carrossel pula para índice inválido | Cálculo sem considerar o tamanho do array |

## Commit sugerido

```bash
git add src
git commit -m "feat: componentiza landing page e adiciona carrossel"
```

---

# Dia 3 — Vue Router, Inertia e Pinia

## Objetivo do dia

Transformar o projeto em uma SPA com URLs próprias, comparar essa arquitetura com Inertia e substituir os dados locais por uma fonte global compartilhada.

## Arquivos trabalhados

```text
src/
├── router/index.js
├── stores/index.js
├── stores/movies.js
├── services/storageService.js
├── views/public/
└── App.vue

Projeto Inertia separado:
├── app/Http/Controllers/
├── resources/js/Pages/
└── routes/web.php
```

## Passo 1 — Planejar as rotas antes de programar

| URL | Nome da rota | View | Acesso |
| --- | --- | --- | --- |
| `/` | `home` | `HomeView` | Público |
| `/trilha` | `roadmap` | `RoadmapView` | Público |
| `/filmes/:id` | `movie-details` | `MovieDetailsView` | Público |
| `/login` | `login` | `LoginView` | Público |
| `/admin` | `admin-dashboard` | `AdminDashboardView` | Protegido |
| `/admin/filmes` | `admin-movies` | `AdminMoviesView` | Protegido |
| `/admin/filmes/novo` | `admin-movie-create` | `AdminMovieFormView` | Protegido |
| `/admin/filmes/:id/editar` | `admin-movie-edit` | `AdminMovieFormView` | Protegido |

Rotas nomeadas evitam espalhar URLs pelo projeto:

```vue
<RouterLink :to="{ name: 'home' }">Início</RouterLink>
```

## Passo 2 — Criar o Router

Crie `src/router/index.js`:

```js
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/components/layout/PublicLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/public/HomeView.vue'),
        },
        {
          path: 'filmes/:id',
          name: 'movie-details',
          component: () => import('@/views/public/MovieDetailsView.vue'),
        },
      ],
    },
  ],
})

export default router
```

O layout é pai e as views são filhas. Quando a URL for `/filmes/2`, o Router monta:

```text
PublicLayout
├── PublicHeader
├── MovieDetailsView
└── PublicFooter
```

## Passo 3 — Instalar o Router na aplicação

Atualize `src/main.js`:

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
```

E simplifique `App.vue`:

```vue
<template>
  <RouterView />
</template>
```

## Passo 4 — Criar a página de detalhes

Em `MovieCard.vue`, navegue passando o ID:

```vue
<RouterLink
  :to="{ name: 'movie-details', params: { id: movie.id } }"
>
  {{ movie.title }}
</RouterLink>
```

Em `MovieDetailsView.vue`, leia o parâmetro:

```vue
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const movie = computed(() =>
  movies.find((item) => item.id === Number(route.params.id)),
)
</script>
```

Parâmetros de URL chegam como texto. Por isso usamos `Number(route.params.id)` antes da comparação.

## Módulo 07 — Inertia.js como arquitetura alternativa

> Este módulo não instala Inertia dentro do CineVue atual. O CineVue atual é uma SPA independente com Vue Router. O exemplo de Inertia deve ser feito em um projeto com backend separado, usando Laravel nos exemplos.

### O que o Inertia resolve

Inertia conecta um framework de backend a páginas Vue. O backend continua responsável por:

- rotas;
- controllers;
- autenticação e autorização;
- acesso ao banco de dados;
- validação no servidor.

O Vue continua responsável pelos componentes e pela interação visual. O Inertia transporta o nome da página e suas props entre os dois lados.

Compare os fluxos:

```text
CineVue atual — SPA independente

URL
 └── Vue Router
      └── View Vue
           ├── Pinia
           └── API ou localStorage
```

```text
Aplicação com Inertia — monólito moderno

URL
 └── rota do backend
      └── controller
           └── Inertia::render('Movies/Index', props)
                └── página Vue
```

Em uma aplicação Inertia, as rotas são definidas no servidor. Para essas mesmas páginas, normalmente não usamos Vue Router. Inertia também não exige a criação de uma API separada para entregar os dados iniciais da página.

Este conteúdo acompanha o Inertia v3. Consulte sempre a [documentação oficial de instalação](https://inertiajs.com/docs/v3/installation/server-side-setup), pois comandos e requisitos podem mudar entre versões.

### Etapa 1 — Preparar um projeto Laravel separado

O caminho mais rápido recomendado pela documentação é usar um starter kit Laravel com Vue e Inertia. Para compreender as peças, estes são os adapters principais:

```bash
composer require inertiajs/inertia-laravel:^3.0
npm install @inertiajs/vue3@^3.0 @inertiajs/vite@^3.0
```

Não execute esses comandos na raiz do CineVue Vite. Abra uma aplicação Laravel separada.

No Inertia v3, o template raiz recomendado usa os componentes Blade:

```blade
<!-- resources/views/app.blade.php -->
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @vite('resources/js/app.js')
    <x-inertia::head />
  </head>
  <body>
    <x-inertia::app />
  </body>
</html>
```

Publique o middleware:

```bash
php artisan inertia:middleware
```

Depois, registre `HandleInertiaRequests` no grupo `web` de `bootstrap/app.php`, conforme a documentação oficial da versão usada.

No cliente, a configuração simplificada da versão 3 pode iniciar assim quando o plugin Vite do Inertia está configurado:

```js
// resources/js/app.js
import { createInertiaApp } from '@inertiajs/vue3'

createInertiaApp()
```

### Etapa 2 — Criar rota e controller no backend

Defina a rota em `routes/web.php`:

```php
use App\Http\Controllers\MovieController;

Route::get('/filmes', [MovieController::class, 'index'])
    ->name('movies.index');
```

No controller:

```php
use App\Models\Movie;
use Inertia\Inertia;

class MovieController extends Controller
{
    public function index()
    {
        return Inertia::render('Movies/Index', [
            'movies' => Movie::query()
                ->latest()
                ->get(['id', 'title', 'status']),
        ]);
    }
}
```

Leia a resposta como uma frase:

> Para a URL `/filmes`, carregue a página Vue `Movies/Index` e entregue uma prop chamada `movies`.

Selecione apenas os campos necessários. Toda prop enviada para a página fica disponível no cliente e não deve conter segredos.

### Etapa 3 — Receber as props na página Vue

Crie `resources/js/Pages/Movies/Index.vue`:

```vue
<script setup>
import { Head } from '@inertiajs/vue3'

defineProps({
  movies: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <Head title="Filmes" />

  <main>
    <h1>Filmes</h1>

    <article v-for="movie in movies" :key="movie.id">
      <h2>{{ movie.title }}</h2>
      <p>{{ movie.status }}</p>
    </article>
  </main>
</template>
```

Não existe `fetch` nem `onMounted` para buscar a lista inicial. O controller resolveu os dados antes de selecionar a página.

### Etapa 4 — Navegar com Link

Para links internos, importe `Link`:

```vue
<script setup>
import { Link } from '@inertiajs/vue3'
</script>

<template>
  <nav>
    <Link href="/">Início</Link>
    <Link href="/filmes">Filmes</Link>
  </nav>
</template>
```

`Link` produz uma navegação real e acessível, mas intercepta o clique. Inertia pede ao servidor a próxima página, atualiza o histórico e troca o componente sem recarregar o documento inteiro.

Para ações que alteram dados, preserve a semântica. Por exemplo, logout por POST deve usar botão:

```vue
<Link href="/logout" method="post" as="button">
  Sair
</Link>
```

### Etapa 5 — Explicar quando escolher cada opção

Use Vue Router quando:

- o frontend é uma SPA independente;
- frontend e backend podem ter deploys separados;
- a aplicação consome uma API;
- as rotas pertencem ao cliente.

Considere Inertia quando:

- existe um backend tradicional compatível;
- a equipe quer manter rotas e controllers no servidor;
- Vue será usado nas páginas sem manter uma API separada para cada tela;
- frontend e backend formam uma única aplicação.

### Conferência do módulo de Inertia

- [ ] O aluno explica que Inertia precisa de backend.
- [ ] O aluno diferencia rota Laravel de rota Vue Router.
- [ ] O controller retorna página e props.
- [ ] A página Vue recebe dados com `defineProps`.
- [ ] Links internos usam `Link`.
- [ ] Nenhum dado sensível é enviado como prop.

### Erros comuns de Inertia

| Problema | Correção |
| --- | --- |
| Instalar Inertia como plugin visual do Vite | Começar por um backend e uma decisão arquitetural |
| Usar Vue Router para as mesmas páginas | Manter as rotas no servidor em uma aplicação Inertia |
| Nome da página não corresponde ao arquivo | Comparar `Movies/Index` com o caminho em `Pages/` |
| Enviar o model inteiro | Selecionar e transformar somente os campos necessários |
| Misturar exemplos v2 e v3 | Consultar a documentação da mesma versão dos adapters |

## Passo 5 — Criar e instalar o Pinia

Crie `src/stores/index.js`:

```js
import { createPinia } from 'pinia'

export const pinia = createPinia()
```

Atualize `main.js`:

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { pinia } from './stores'

createApp(App).use(pinia).use(router).mount('#app')
```

## Passo 6 — Criar a store de filmes

Crie `src/stores/movies.js`:

```js
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { initialMovies } from '@/data/movies'

export const useMoviesStore = defineStore('movies', () => {
  const movies = ref(structuredClone(initialMovies))

  const nowShowing = computed(() =>
    movies.value.filter((movie) => movie.status === 'showing'),
  )

  function getMovieById(id) {
    return movies.value.find((movie) => movie.id === Number(id)) ?? null
  }

  return {
    movies,
    nowShowing,
    getMovieById,
  }
})
```

### De onde vem `moviesStore`?

Não existe outro arquivo chamado `movieStore` ou `moviesStore`. O arquivo
`src/stores/movies.js` exporta a função `useMoviesStore`. Cada view chama essa
função e escolhe um nome para guardar a instância:

```js
import { useMoviesStore } from '@/stores/movies'

const moviesStore = useMoviesStore()
```

Assim:

- `useMoviesStore` é a função criada e exportada por `defineStore`;
- `moviesStore` é a constante local que representa a instância dentro da view;
- `moviesStore.movies` lê o estado;
- `moviesStore.nowShowing` e `moviesStore.carouselMovies` leem getters;
- `moviesStore.getMovieById(id)` executa a função de busca exposta pela store.

Na Home:

```js
import { useMoviesStore } from '@/stores/movies'

const moviesStore = useMoviesStore()
```

No template:

```vue
<MovieGrid :movies="moviesStore.movies" />
```

Agora Home, detalhes e backoffice poderão usar o mesmo catálogo.

## Passo 7 — Decidir entre estado local e global

Use estado local quando somente aquela página precisa do valor:

```js
const search = ref('')
const isModalOpen = ref(false)
```

Use Pinia quando várias páginas precisam compartilhar o valor:

```js
const movies = ref([])
const user = ref(null)
```

Não coloque tudo na store. O texto digitado na busca da Home não precisa aparecer no dashboard e, portanto, deve continuar local.

## Passo 8 — Isolar o `localStorage` em um service

Crie `src/services/storageService.js`:

```js
const STORAGE_PREFIX = 'cinevue:'

export function readStorage(key, fallbackValue) {
  try {
    const value = localStorage.getItem(`${STORAGE_PREFIX}${key}`)
    return value ? JSON.parse(value) : fallbackValue
  } catch {
    return fallbackValue
  }
}

export function writeStorage(key, value) {
  try {
    localStorage.setItem(`${STORAGE_PREFIX}${key}`, JSON.stringify(value))
  } catch {
    // O app continua funcionando sem persistência.
  }
}
```

A store pode chamar o service, mas uma view não deve acessar `localStorage` diretamente.

O benefício aparece quando a persistência for substituída por API: a mudança fica concentrada na camada de acesso a dados.

## Passo 9 — Montar os getters do projeto

Além de `nowShowing`, a store completa possui:

- `featuredMovie`;
- `comingSoon`;
- `carouselMovies`;
- `totalMovies`.

`carouselMovies` é um valor derivado. Ele ordena o destaque primeiro, depois pela avaliação, e limita o resultado a cinco itens. Como não representa um novo dado, deve ser `computed`, e não outro `ref` atualizado manualmente.

Dentro de `defineStore`, adicione:

```js
const featuredMovie = computed(
  () => movies.value.find((movie) => movie.featured) ?? movies.value[0] ?? null,
)

const comingSoon = computed(() =>
  movies.value.filter((movie) => movie.status === 'coming-soon'),
)

const carouselMovies = computed(() =>
  [...movies.value]
    .sort((firstMovie, secondMovie) => {
      if (firstMovie.featured !== secondMovie.featured) {
        return firstMovie.featured ? -1 : 1
      }

      return Number(secondMovie.rating) - Number(firstMovie.rating)
    })
    .slice(0, 5),
)

const totalMovies = computed(() => movies.value.length)
```

Depois exponha tudo no `return` da store:

```js
return {
  movies,
  featuredMovie,
  nowShowing,
  comingSoon,
  carouselMovies,
  totalMovies,
  getMovieById,
}
```

### Referências do módulo Pinia e da MovieStore

- [MovieStore do CineVue (useMoviesStore)](../src/stores/movies.js) — implementação final usada pela Home, detalhes e backoffice;
- [Defining a Store — documentação oficial do Pinia](https://pinia.vuejs.org/core-concepts/) — `defineStore`, Setup Stores e criação da instância;
- [State — documentação oficial do Pinia](https://pinia.vuejs.org/core-concepts/state.html) — estado e reset em Setup Stores;
- [Getters — documentação oficial do Pinia](https://pinia.vuejs.org/core-concepts/getters.html) — valores derivados do estado;
- [Actions — documentação oficial do Pinia](https://pinia.vuejs.org/core-concepts/actions.html) — mudanças e regras compartilhadas.

Use a implementação completa como conferência depois de terminar os passos. Antes
de copiar, identifique no arquivo quais `ref` são state, quais `computed` são
getters e quais funções são actions.

## Conferência do Dia 3

- [ ] Cada URL renderiza a view esperada.
- [ ] Header e footer permanecem ao trocar páginas públicas.
- [ ] A rota de detalhes usa o ID da URL.
- [ ] Página inexistente possui fallback 404.
- [ ] O aluno diferencia a SPA com Vue Router de uma aplicação Inertia.
- [ ] O exercício separado envia dados do controller como page props.
- [ ] Home e detalhes leem a mesma store.
- [ ] A busca continua como estado local.
- [ ] Nenhuma view acessa `localStorage` diretamente.

## Exercícios do Dia 3

1. Crie a rota `/trilha`.
2. Implemente `NotFoundView.vue` com `/:pathMatch(.*)*`.
3. Crie o getter `comingSoon`.
4. Crie o getter `totalMovies`.
5. Faça o carrossel usar `carouselMovies`.
6. Recarregue a página de detalhes diretamente pelo navegador.
7. Em um projeto Inertia separado, crie `Movies/Show.vue` e envie um filme pelo controller.
8. Explique em voz alta por que o projeto principal usa Vue Router e o exemplo alternativo não.

## Erros comuns

| Problema | Causa provável |
| --- | --- |
| URL muda, mas página não | `RouterView` ausente no layout |
| Detalhes não encontra o filme | ID da rota não convertido para número |
| `getActivePinia()` | Pinia não instalado com `.use(pinia)` |
| Dados voltam ao atualizar | Persistência ainda não implementada |
| Header duplicado | Header colocado na view e também no layout |
| Inertia abre uma página vazia | Nome enviado por `Inertia::render` não corresponde ao arquivo em `Pages/` |

## Commit sugerido

```bash
git add src
git commit -m "feat: adiciona rotas compara inertia e cria store"
```

---

# Dia 4 — Formulários, CRUD e backoffice

## Objetivo do dia

Construir as telas administrativas e implementar criação, leitura, edição e exclusão usando a store como fonte única.

## Arquivos trabalhados

```text
src/
├── components/admin/
├── components/layout/AdminLayout.vue
├── components/layout/AdminHeader.vue
├── components/layout/AdminSidebar.vue
├── components/movie/MovieForm.vue
├── views/admin/
└── stores/movies.js
```

## Passo 1 — Criar o layout administrativo

O backoffice possui estrutura visual diferente da área pública:

```text
AdminLayout
├── AdminSidebar
└── conteúdo
    ├── AdminHeader
    └── RouterView
```

Crie `src/components/layout/AdminLayout.vue`:

```vue
<script setup>
import { ref } from 'vue'
import AdminHeader from './AdminHeader.vue'
import AdminSidebar from './AdminSidebar.vue'

const isSidebarOpen = ref(false)
</script>

<template>
  <div class="admin-layout">
    <AdminSidebar
      :open="isSidebarOpen"
      @close="isSidebarOpen = false"
    />

    <div class="admin-layout__content">
      <AdminHeader @open-menu="isSidebarOpen = true" />
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>
```

Aqui aparece a comunicação pai-filho:

- layout passa `open` como prop;
- sidebar emite `close`;
- header emite `open-menu`;
- layout continua dono do estado `isSidebarOpen`.

## Passo 2 — Adicionar as rotas administrativas

No Router:

```js
{
  path: '/admin',
  component: () => import('@/components/layout/AdminLayout.vue'),
  children: [
    {
      path: '',
      name: 'admin-dashboard',
      component: () => import('@/views/admin/AdminDashboardView.vue'),
    },
    {
      path: 'filmes',
      name: 'admin-movies',
      component: () => import('@/views/admin/AdminMoviesView.vue'),
    },
    {
      path: 'filmes/novo',
      name: 'admin-movie-create',
      component: () => import('@/views/admin/AdminMovieFormView.vue'),
    },
    {
      path: 'filmes/:id/editar',
      name: 'admin-movie-edit',
      component: () => import('@/views/admin/AdminMovieFormView.vue'),
    },
  ],
}
```

## Passo 3 — Adicionar actions de CRUD na store

Na store de filmes:

```js
function addMovie(movieData) {
  const nextId = Math.max(0, ...movies.value.map((movie) => movie.id)) + 1
  const movie = { ...movieData, id: nextId }

  movies.value.push(movie)
  persist()
  return movie
}

function updateMovie(id, movieData) {
  const index = movies.value.findIndex((movie) => movie.id === Number(id))
  if (index === -1) return null

  movies.value[index] = {
    ...movies.value[index],
    ...movieData,
    id: Number(id),
  }

  persist()
  return movies.value[index]
}

function removeMovie(id) {
  const index = movies.value.findIndex((movie) => movie.id === Number(id))
  if (index === -1) return false

  movies.value.splice(index, 1)
  persist()
  return true
}
```

As regras de alteração ficam na store porque qualquer página deve modificar o catálogo da mesma maneira.

## Passo 4 — Integrar o formulário preparado na terça

Reabra `src/components/movie/MovieForm.vue`, criado no módulo de formulários. Não faça uma segunda versão: complete o contrato necessário para cadastro e edição e conecte-o somente pela view administrativa.

Contrato do componente:

| Entrada ou saída | Responsabilidade |
| --- | --- |
| prop `movie` | Preenche o formulário durante edição |
| prop `submitLabel` | Altera o texto do botão |
| evento `submit` | Entrega dados validados à view |
| evento `cancel` | Solicita o retorno à listagem |

Confira se o estado inicial contém o contrato completo:

```js
const emptyForm = {
  title: '',
  tagline: '',
  synopsis: '',
  genre: '',
  year: new Date().getFullYear(),
  duration: 100,
  rating: 8,
  ageRating: 'Livre',
  status: 'showing',
  featured: false,
  poster: '',
  backdrop: '',
}

const form = reactive({ ...emptyForm })
const errors = reactive({})
```

Preencha ao editar:

```js
watch(
  () => props.movie,
  (movie) => {
    Object.assign(form, emptyForm, movie ?? {})
  },
  { immediate: true },
)
```

Validar não é somente usar `required` no HTML. Crie uma função:

```js
function validate() {
  Object.keys(errors).forEach((key) => delete errors[key])

  if (!form.title.trim()) errors.title = 'Informe o título.'
  if (!form.genre.trim()) errors.genre = 'Informe o gênero.'
  if (!form.synopsis.trim()) errors.synopsis = 'Informe a sinopse.'
  if (Number(form.rating) < 0 || Number(form.rating) > 10) {
    errors.rating = 'A avaliação deve ficar entre 0 e 10.'
  }

  return Object.keys(errors).length === 0
}
```

O componente continua responsável apenas por validar e emitir:

```js
function handleSubmit() {
  if (!validate()) return

  emit('submit', {
    ...form,
    year: Number(form.year),
    duration: Number(form.duration),
    rating: Number(form.rating),
  })
}
```

O componente não deve chamar `router.push()` nem decidir se usa `addMovie` ou `updateMovie`. Essa decisão depende da página.

## Passo 5 — Reutilizar uma view para cadastro e edição

Crie `src/views/admin/AdminMovieFormView.vue`.

```js
const route = useRoute()
const router = useRouter()
const moviesStore = useMoviesStore()

const isEditing = computed(() => route.name === 'admin-movie-edit')
const movie = computed(() =>
  isEditing.value ? moviesStore.getMovieById(route.params.id) : null,
)

function handleSubmit(movieData) {
  if (isEditing.value) {
    moviesStore.updateMovie(route.params.id, movieData)
  } else {
    moviesStore.addMovie(movieData)
  }

  router.push({ name: 'admin-movies' })
}
```

No template:

```vue
<MovieForm
  :movie="movie"
  :submit-label="isEditing ? 'Salvar alterações' : 'Cadastrar filme'"
  @cancel="router.push({ name: 'admin-movies' })"
  @submit="handleSubmit"
/>
```

## Passo 6 — Criar listagem e tabela administrativa

Separe novamente página e apresentação:

```text
AdminMoviesView
├── controla pesquisa
├── controla modal de exclusão
├── chama moviesStore.removeMovie
└── entrega filmes para AdminMovieTable
```

```text
AdminMovieTable
├── recebe movies por prop
├── apresenta as linhas
├── cria links de visualizar e editar
└── emite delete com o filme escolhido
```

No componente da tabela:

```js
defineProps({
  movies: { type: Array, required: true },
})

const emit = defineEmits(['delete'])
```

No botão:

```vue
<button @click="emit('delete', movie)">Excluir</button>
```

Na view:

```vue
<AdminMovieTable
  :movies="filteredMovies"
  @delete="selectedMovie = $event"
/>
```

## Passo 7 — Confirmar ações destrutivas

Não exclua imediatamente no primeiro clique. Use `BaseModal`:

```vue
<BaseModal
  :open="Boolean(selectedMovie)"
  title="Excluir este filme?"
  @close="selectedMovie = null"
>
  O filme será removido da landing page.

  <template #actions>
    <BaseButton @click="selectedMovie = null">Cancelar</BaseButton>
    <BaseButton variant="danger" @click="confirmDelete">Excluir</BaseButton>
  </template>
</BaseModal>
```

O modal é base porque não conhece filmes. A mensagem e a função de exclusão vêm da página.

## Passo 8 — Criar o dashboard

O dashboard usa getters já existentes:

```js
const moviesStore = useMoviesStore()

moviesStore.totalMovies
moviesStore.nowShowing.length
moviesStore.comingSoon.length
```

Crie `components/admin/StatCard.vue` para apresentar cada indicador. O card recebe `label`, `value`, `detail`, `icon` e `tone`; ele não calcula os números.

## Passo 9 — Conferir a integração completa

Teste este fluxo:

1. Abra `/admin/filmes/novo`.
2. Cadastre um filme em cartaz.
3. Volte à Home.
4. Confirme que o filme aparece sem recarregar dados de outro local.
5. Edite o filme.
6. Confira a alteração na Home e nos detalhes.
7. Exclua com confirmação.
8. Atualize o navegador e confira a persistência.

Se o backoffice muda um array e a Home usa outro, a arquitetura está incorreta. Deve existir uma única fonte: `moviesStore.movies`.

## Conferência do Dia 4

- [ ] Layout administrativo é separado do público.
- [ ] O formulário serve para criar e editar.
- [ ] A view decide qual action chamar.
- [ ] A store gera o novo ID.
- [ ] Exclusão pede confirmação.
- [ ] CRUD persiste após atualizar o navegador.
- [ ] Alterações administrativas aparecem na área pública.
- [ ] Componentes não alteram props diretamente.

## Exercícios do Dia 4

1. Mostre uma prévia do pôster no formulário.
2. Impeça avaliação menor que 0 ou maior que 10.
3. Mostre feedback depois de cadastrar ou editar.
4. Crie o botão “Restaurar exemplos”.
5. Trate a tentativa de editar um ID inexistente.
6. Garanta que apenas um filme possa ser o destaque.

## Erros comuns

| Problema | Causa provável |
| --- | --- |
| Números salvos como texto | Valores de input não convertidos com `Number` |
| Edição cria novo registro | View sempre chamando `addMovie` |
| Formulário não preenche | `watch` sem execução imediata |
| Home não atualiza | Uso de cópia local em vez da store |
| Dados somem no refresh | Action não chamou persistência |

## Commit sugerido

```bash
git add src
git commit -m "feat: implementa crud e telas do backoffice"
```

---

# Dia 5 — Login, proteção de rotas e qualidade

## Objetivo do dia

Controlar acesso ao backoffice, adicionar feedback para navegações lentas, revisar acessibilidade, criar testes básicos e validar o build.

## Arquivos trabalhados

```text
src/
├── stores/auth.js
├── views/auth/LoginView.vue
├── router/index.js
├── services/navigationLoading.js
├── components/base/AppPageLoader.vue
├── App.vue
├── stores/movies.test.js
└── components/
```

## Passo 1 — Entender o limite do login didático

Este projeto não possui backend. Portanto:

- a senha fica disponível no código frontend;
- a sessão fica no `localStorage`;
- o usuário pode alterar dados pelo DevTools;
- o guard protege a navegação da interface, não dados reais.

O objetivo é aprender estado de autenticação, formulário, redirecionamento e guards. Em produção, o servidor deve validar credenciais e permissões.

## Passo 2 — Criar a store de autenticação

Crie `src/stores/auth.js`:

```js
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

const DEMO_USER = {
  email: 'admin@cinevue.dev',
  password: 'vue123',
  name: 'Alex Morgan',
  role: 'Administrador',
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isLoading = ref(false)
  const error = ref('')

  const isAuthenticated = computed(() => Boolean(user.value))

  async function login(credentials) {
    isLoading.value = true
    error.value = ''

    const isValid =
      credentials.email.trim().toLowerCase() === DEMO_USER.email &&
      credentials.password === DEMO_USER.password

    if (!isValid) {
      error.value = 'E-mail ou senha inválidos.'
      isLoading.value = false
      return false
    }

    user.value = {
      email: DEMO_USER.email,
      name: DEMO_USER.name,
      role: DEMO_USER.role,
    }

    isLoading.value = false
    return true
  }

  function logout() {
    user.value = null
  }

  return { user, isLoading, error, isAuthenticated, login, logout }
})
```

Depois integre `readStorage`, `writeStorage` e `removeStorage`, seguindo a versão completa em [auth.js](../src/stores/auth.js).

## Passo 3 — Criar a página de login

Crie `src/views/auth/LoginView.vue`.

Estado local do formulário:

```js
const credentials = reactive({
  email: 'admin@cinevue.dev',
  password: 'vue123',
})
```

Envio:

```js
async function handleSubmit() {
  const success = await authStore.login(credentials)
  if (!success) return

  const redirect =
    typeof route.query.redirect === 'string'
      ? route.query.redirect
      : '/admin'

  await router.push(redirect)
}
```

O parâmetro `redirect` permite que o usuário volte à página que tentou acessar antes do login.

## Passo 4 — Marcar rotas protegidas

No pai `/admin`:

```js
{
  path: '/admin',
  component: () => import('@/components/layout/AdminLayout.vue'),
  meta: { requiresAuth: true },
  children: [
    // Todas as rotas administrativas herdam o contexto do pai.
  ],
}
```

No login:

```js
{
  path: '/login',
  name: 'login',
  component: () => import('@/views/auth/LoginView.vue'),
  meta: { requiresGuest: true },
}
```

## Passo 5 — Criar o navigation guard

No final de `src/router/index.js`:

```js
router.beforeEach((to) => {
  const authStore = useAuthStore(pinia)

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return {
      name: 'login',
      query: { redirect: to.fullPath },
    }
  }

  if (to.meta.requiresGuest && authStore.isAuthenticated) {
    return { name: 'admin-dashboard' }
  }

  return true
})
```

Por que passar `pinia` para `useAuthStore(pinia)`? O guard é executado fora de um componente Vue e precisa saber explicitamente qual instância do Pinia usar.

## Passo 6 — Implementar logout

No cabeçalho administrativo:

```js
async function handleLogout() {
  authStore.logout()
  await router.push({ name: 'home' })
}
```

Confira se atualizar `/admin` depois do logout redireciona para o login.

## Passo 7 — Revisar acessibilidade

Faça uma passagem completa usando apenas teclado.

Confira:

- imagens possuem `alt` útil;
- botões somente com ícone possuem `aria-label`;
- inputs possuem label visível;
- foco é visível;
- modal usa `role="dialog"` e `aria-modal="true"`;
- filtros podem ser acionados pelo teclado;
- carrossel possui anterior, próximo e pausa;
- autoplay pausa durante interação;
- `prefers-reduced-motion` desativa movimentos automáticos;
- cores não são o único modo de comunicar status.

## Passo 8 — Criar o primeiro teste da store

Crie `src/stores/movies.test.js`:

```js
import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useMoviesStore } from './movies'

describe('movies store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('adiciona um filme com um novo identificador', () => {
    const store = useMoviesStore()
    const initialCount = store.totalMovies

    const movie = store.addMovie({
      title: 'Filme de teste',
      status: 'showing',
      featured: false,
    })

    expect(store.totalMovies).toBe(initialCount + 1)
    expect(store.getMovieById(movie.id)?.title).toBe('Filme de teste')
  })
})
```

O teste prepara um Pinia novo antes de cada cenário para evitar que um teste contamine outro.

## Passo 9 — Executar todas as verificações

```bash
npm run lint
npm run test
npm run build
```

O significado de cada comando:

- `lint`: procura padrões problemáticos e inconsistências;
- `test`: valida regras automaticamente;
- `build`: compila a aplicação como seria publicada.

Não considere a trilha concluída apenas porque `npm run dev` funciona. O modo de desenvolvimento não encontra todos os problemas que aparecem no build.

## Passo 10 — Fazer a demonstração final

Apresente este fluxo sem consultar o código:

1. Explique as pastas.
2. Abra a landing page.
3. Navegue no carrossel.
4. Pesquise um filme.
5. Abra os detalhes.
6. Tente entrar em `/admin` sem sessão.
7. Faça login.
8. Cadastre um filme.
9. Mostre o novo filme na Home.
10. Edite e exclua o registro.
11. Explique onde cada estado está armazenado.

## Bônus — Adicionar feedback para navegações lentas

O loading entre telas não deve aparecer em toda troca. Navegações locais normalmente terminam rápido demais e um overlay imediato causaria apenas uma piscada.

Crie `src/services/navigationLoading.js` com dois limites:

```js
const SHOW_DELAY = 220
const MIN_VISIBLE_TIME = 600
```

- `SHOW_DELAY` espera antes de exibir;
- `MIN_VISIBLE_TIME` evita que um loader já apresentado desapareça como um flash.

O service expõe `startNavigationLoading`, `finishNavigationLoading` e um estado `readonly`. Crie `AppPageLoader.vue` para cuidar somente da interface e renderize uma única instância em `App.vue`:

```vue
<script setup>
import AppPageLoader from '@/components/base/AppPageLoader.vue'
import { useNavigationLoading } from '@/services/navigationLoading'

const isNavigationLoading = useNavigationLoading()
</script>

<template>
  <RouterView />
  <AppPageLoader :active="isNavigationLoading" />
</template>
```

Conecte o começo e o fim no Router:

```js
router.beforeEach((to) => {
  startNavigationLoading()
  // regras de autenticação continuam aqui
  return true
})

router.afterEach(finishNavigationLoading)
router.onError(finishNavigationLoading)
```

O componente visual deve usar `role="status"`, texto acessível e respeitar `prefers-reduced-motion`. Para testar, abra DevTools → Network, selecione `Slow 3G` e navegue para uma rota ainda não carregada. Em velocidade normal, não ver o overlay é o comportamento esperado.

## Conferência do Dia 5

- [ ] Usuário sem sessão não entra no backoffice.
- [ ] Login redireciona ao destino original.
- [ ] Usuário autenticado não volta à tela de login.
- [ ] Logout remove a sessão.
- [ ] Limitações do login frontend estão documentadas.
- [ ] Loading aparece em navegação lenta e não pisca em troca rápida.
- [ ] Fluxo principal funciona por teclado.
- [ ] Lint não apresenta erros.
- [ ] Testes passam.
- [ ] Build termina com sucesso.

## Exercícios do Dia 5

1. Teste credenciais inválidas.
2. Crie teste para edição de filme.
3. Crie teste garantindo apenas um destaque.
4. Exiba o nome do usuário no cabeçalho.
5. Impeça o acesso ao login quando já autenticado.
6. Explique por que o guard frontend não representa segurança real.
7. Simule Slow 3G e explique os dois limites do loading.

## Erros comuns

| Problema | Causa provável |
| --- | --- |
| Guard não reconhece sessão | Store usada sem a instância do Pinia |
| Loop de redirecionamento | Login também marcado como `requiresAuth` |
| Sessão some no refresh | Usuário não persistido no storage |
| Testes interferem entre si | Pinia não recriado no `beforeEach` |
| Build falha, mas dev funciona | Import incorreto ou regra detectada só na compilação |

## Commit sugerido

```bash
git add .
git commit -m "feat: protege backoffice e finaliza trilha cinevue"
```

---

# 3. Checklist de arquitetura

Antes de concluir, revise cada regra.

## Views

- [ ] Cada rota possui uma view identificável.
- [ ] Views compõem componentes em vez de concentrar toda a marcação.
- [ ] Views podem usar Router e stores para coordenar fluxos.

## Componentes

- [ ] Props são tratadas como somente leitura.
- [ ] Filhos comunicam ações com eventos.
- [ ] Componentes base não conhecem o domínio.
- [ ] Componentes de filme ficam em `components/movie`.
- [ ] Componentes exclusivos do admin ficam em `components/admin`.
- [ ] Não existem componentes criados apenas para envolver uma única `div` sem responsabilidade.

## Stores

- [ ] Existe uma única fonte para o catálogo.
- [ ] Getters representam valores derivados.
- [ ] Actions concentram alterações compartilhadas.
- [ ] Estado exclusivamente visual permanece local.

## Services

- [ ] Views não acessam `localStorage` diretamente.
- [ ] Falhas do storage não derrubam a aplicação.
- [ ] A camada pode ser substituída por API posteriormente.

## Router

- [ ] Rotas possuem nomes.
- [ ] Layouts usam rotas filhas.
- [ ] IDs dinâmicos são convertidos corretamente.
- [ ] Existe página 404.
- [ ] Rotas administrativas estão protegidas.

## Interface

- [ ] Existe feedback para lista vazia e erro de formulário.
- [ ] Exclusões pedem confirmação.
- [ ] Layout funciona em celular e desktop.
- [ ] Foco de teclado é visível.
- [ ] Elementos interativos possuem nomes acessíveis.

---

# 4. Critérios de avaliação

## Compreensão de Vue

O aluno deve conseguir explicar:

- por que `ref` é usado;
- quando usar `computed`;
- como `v-for`, `v-if` e `v-model` funcionam;
- como uma alteração reativa chega ao template.

## Componentização

O aluno deve conseguir:

- justificar a criação de um componente;
- distinguir view, layout e component;
- passar dados com props;
- comunicar ações com emits;
- usar slots em componentes base.

## Router

O aluno deve conseguir:

- criar rota estática e dinâmica;
- navegar por nome;
- ler parâmetros;
- explicar layouts aninhados;
- proteger uma rota com `meta` e guard.

## Pinia

O aluno deve conseguir:

- diferenciar estado local e global;
- criar state, getter e action;
- consumir store em uma view;
- explicar por que o catálogo não deve ser duplicado.

## CRUD

O aluno deve conseguir:

- criar, localizar, alterar e remover um filme;
- reutilizar o formulário;
- validar os dados;
- refletir alterações no site público;
- tratar registro inexistente.

## Qualidade

O aluno deve:

- manter nomes claros;
- evitar arquivos com responsabilidades demais;
- executar lint, testes e build;
- documentar limitações;
- apresentar o fluxo sem depender de copiar código.

---

# 5. Se não terminar em cinco dias

Não corte validação, organização ou explicação apenas para cumprir o prazo. Use esta ordem de prioridade:

1. Landing page componentizada.
2. Router e página de detalhes.
3. Store única de filmes.
4. Cadastro e edição.
5. Exclusão com confirmação.
6. Login e proteção de rotas.
7. Persistência.
8. Testes e refinamentos visuais.

Registre o que ficou pendente e continue no próximo encontro. O cronograma de cinco dias orienta o foco; ele não deve transformar a atividade em cópia apressada.

---

# 6. Evoluções após a trilha

Depois que a base estiver compreendida, a progressão recomendada é:

1. Substituir `localStorage` por JSON Server.
2. Criar um service com `fetch` ou Axios.
3. Adicionar estados de carregamento e erro de API.
4. Criar autenticação com backend.
5. Migrar gradualmente para TypeScript.
6. Adicionar testes de componentes com Vue Test Utils.
7. Adicionar testes de navegação.
8. Implementar upload real de imagens.
9. Criar paginação do catálogo.
10. Publicar frontend e API.

---

# 7. Perguntas para a revisão final

O aluno deve responder sem abrir o código:

1. Por que `MovieCard` fica em `components/movie` e `BaseButton` em `components/base`?
2. Por que `HomeView` não deve conter toda a marcação dos cards?
3. Quem é dono do estado da pesquisa?
4. Quem é dono do catálogo?
5. Por que o formulário emite dados em vez de chamar a store diretamente?
6. Como a mesma view serve para criar e editar?
7. Por que o ID da URL precisa ser convertido?
8. Como uma alteração no backoffice chega à landing page?
9. Qual é o papel do service de storage?
10. Por que o login atual não é seguro para produção?
11. O que acontece quando o carrossel chega ao último filme?
12. Qual a diferença entre layout e view?
13. O que o navigation guard retorna quando falta autenticação?
14. Por que executar build se o projeto já funciona em dev?
15. Qual arquivo você alteraria primeiro para trocar `localStorage` por API?

Se o aluno consegue implementar o fluxo, explicar essas decisões e corrigir erros com autonomia, a trilha cumpriu seu objetivo.
