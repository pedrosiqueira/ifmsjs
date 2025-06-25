# Ideias de aplicativos simples e educativos para desenvolver usando **SvelteKit + Capacitor**:

---

### To-Do List ✅
- Permite criar listas de tarefas.
- Marca cada tarefa como concluída ou pendente.
- Marcar todas as tarefas pendentes como concluídas.
- Marcar todas as tarefas concluídas como pendentes.
- Exibir apenas as tarefas pendentes ou apenas as tarefas concluídas.
- Campo de busca para filtrar tarefas com base no texto digitado.
- Exiba a quantidade de tarefas totais, concluídas e pendentes.
- Subtarefas (To-dos dentro de To-dos): Permita que cada tarefa tenha subtarefas, com o mesmo comportamento da lista principal.
- Agrupamento por categorias/tags: Crie categorias ou etiquetas para organizar melhor as tarefas (ex: trabalho, estudos, pessoal).
- Ordenar as tarefas arrastando-as.
- Animações ao adicionar/remover tarefas: Use svelte:transition para animar entradas e saídas de tarefas.


---

### Gerador de Senhas Seguras 🔑
- Botão de gerar nova senha
- Botão de copiar senha
- Slider e campo de tamanho de senha, com valor mínimo 4.
- Caixas de seleção (checkbox) para inclur classes maiúsculos, minúsculos, numéricos e símbolos
- Slider e campo de quantidade de senhas a serem geradas, com cada senha em uma linha e com botão de copiar
- Cada classe ter um campo para especificar uma quantidade mínima de caracteres.
- Permite salvar senhas localmente com criptografia.
- Funciona offline e sem necessidade de login.

---

### Conversor de Unidades 📏
- Converte peso, temperatura, distância, etc.
- O mais completo que conseguir.
- Funciona offline sem necessidade de APIs externas.

---

### Calculadora Básica 🧮
- Operações básicas: **soma, subtração, multiplicação e divisão**.
- Interface simples com botões numéricos e operadores.
- Exibição do histórico das últimas operações.
- funções adicionais: inverter sinal, quadrado, raiz quadrada, arredondar, logaritmo, resto da divisão, apagar último dígito.

---

### Dicionário

- Busca por Palavra
  - Campo de texto para digitar a palavra.
  - Filtro por prefixo (ex: “ab” mostra “aba”, “abacate”, etc).
- Exibição da Definição
  - Mostra definição da palavra buscada.
  - Ao clicar em qualquer palavra da definição, abrir sua definição.
- Lista de Palavras (paginada ou por letra)
  - A–Z ou rolagem com agrupamento por letras iniciais.
- Palavra aleatória do dia.

Para uso quando tiver salvando dados:

- opção de selecionar múltiplos dicionários pt-pt, pt-en, en-pt...
- Favoritos: Marcar palavras para consulta rápida (usando armazenamento local).
- Histórico de buscas: Salvar últimas palavras buscadas e contagem das palavras.
- Diferentes temas: Interface adaptável ao sistema.

---

### Treinador de Tabuada

- Mostra multiplicações aleatórias para o aluno resolver.
- Não precisa salvar o desempenho.

---

### Quiz com Perguntas Embutidas

- Perguntas e respostas codificadas no próprio app.
- Sem necessidade de banco de dados.

---

### Gerador de Frases Motivacionais

- Mostra uma nova frase toda vez que o usuário toca na tela.
- Frases embutidas no código.

---

### App de Sorteio (tipo roleta ou número aleatório)

- Gira uma roleta ou escolhe um número aleatório.
- Algo tipo cassino, jogo do tigrinho
- serviços do random.org, como geração de sequências, embaralhamento de lista, rolamento de dados, etc.

---

### Jogo de Lógica ou Puzzle

- Sudoku, jogo da memória, quebra-cabeças.
- Estados podem ser armazenados em variáveis temporárias.

---

### Bloco de Notas Offline 📝
- Permite criar, editar e excluir notas.
- Armazena os dados no SQLite usando **Drizzle ORM**.
- Funcionalidade de salvar automaticamente ao sair.

---

### Lista de Compras 🛒
- Adiciona itens a uma lista e marca os comprados.
- Persiste os dados no armazenamento local.
- Sincroniza com um servidor quando online (opcional).

---

### Registro de Gastos 💰
- Permite inserir despesas e receitas.
- Exibe gráficos simples com **Recharts** ou **Chart.js**.
- Armazena os dados localmente e permite exportação.

---

### Diário de Exercícios 🏋️
- Usuário registra os exercícios feitos no dia.
- Calcula progresso e metas semanais.
- Notificações para lembrar de se exercitar.

---

### Flashcards para Estudos 🎓
- Usuário cria cartões de perguntas e respostas.
- Modo de revisão baseado no método **Spaced Repetition**.
- Funciona offline e sincroniza quando conectado.

---
