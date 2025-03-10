# Criando um Projeto Node.js

_(Antes de iniciar a aula, certifique-se de que o VSCode está com o tema claro)._

## Introdução

Olá pessoal! Neste capítulo, aprenderemos como criar e configurar um projeto Node.js do zero. Para isso, você já deve ter o ambiente de desenvolvimento JavaScript instalado, conforme o capítulo anterior.

Como mencionamos anteriormente, um projeto Node.js nada mais é do que uma pasta que agrupa todos os arquivos relacionados ao aplicativo que estamos desenvolvendo. Vamos criar nosso projeto na área de trabalho: clique com o botão direito em algum espaço vazio da área de trabalho, clique em "Novo" e depois em "Pasta", e digite "meu-projeto-javascript", sem espaços. Não é recomendável usar espaços nos nomes dos arquivos do projeto por motivos que veremos adiante. Essa pasta "meu-projeto-javascript" é denominada "pasta raiz", pois todos os arquivos do projeto ficam dentro dela.

Vamos abrir a pasta do nosso projeto no VSCode. Para isso, primeiro abra o VSCode, clique em "Arquivo → Abrir Pasta → Área de Trabalho → meu-projeto-javascript → Selecionar Pasta". Se aparecer uma janela de confirmação, clique na caixa de seleção e em "Sim" para confiar nas pastas da área de trabalho.

Na aba Explorer, são exibidos todos os arquivos do projeto, que no momento está vazio. Vamos criar nosso primeiro arquivo clicando com o botão direito em algum espaço vazio da aba Explorer e selecionando "Novo Arquivo". Digite "meu-primeiro-programa.js", sem espaços, e tecle Enter. Observe que todos os arquivos de código-fonte em JavaScript devem terminar com a extensão `.js`. Quando o arquivo abrir, digite `console.log('hello, world!')`, exatamente como está aqui: qualquer erro de digitação pode fazer com que o programa não funcione.

Essa bolinha ao lado do nome do arquivo significa que você ainda não salvou o arquivo desde a última edição. Tecle Ctrl+S para salvar o arquivo. Perceba que a bolinha sumiu, indicando que o arquivo está salvo.

Este é o teu primeiro programa em Node! Ele contém apenas uma linha de código, que simplesmente exibe a mensagem "hello, world!" quando executado. O "hello, world!" é uma tradição desde os primórdios da programação, usada para apresentar a linguagem a novatos e testar se a instalação está correta.

Para executar esse simples programa, abra o terminal na pasta raiz do projeto, que no VSCode pode ser teclando Ctrl+J. Digite `node meu-primeiro-programa.js`, ou você também pode digitar apenas `node meu` e teclar Tab para o terminal completar o comando. Tecle Enter para executar o programa. Se aparecer a mensagem "hello, world!", parabéns, teu primeiro programa em Node está funcionando conforme o esperado!

Agora vamos criar outro programa que possa interagir com o usuário. Crie o arquivo "interacao.js", sem acentos, pois também não é recomendável ter acentos nos arquivos do projeto. Digite o seguinte código no arquivo:

```javascript
import readline from 'readline/promises';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let a = Number(await rl.question('Digite um número... '));
let b = Number(await rl.question('Digite outro número... '));
let c = a + b;

console.log('A soma de', a, 'e', b, 'é', c);

rl.close();
```

Não se esqueça de salvar o arquivo teclando Ctrl+S. Agora, clique no terminal e execute o programa digitando `node interacao.js` e teclando Enter. O programa solicitará um número, digite algum número e tecle Enter. Depois solicitará outro número, digite e tecle Enter. Por fim, apresentará a soma dos dois números digitados!

Ufa! Vários comandos para fazer um programa relativamente simples... Você pode estar se perguntando o que cada um desses comandos faz, mas não se preocupe, nem tente entender tudo de uma vez. Com o passar das aulas, vamos aprender cada comando por vez.

## Gerenciamento de Pacotes

Embora o npm seja o gerenciador de pacotes padrão do Node, eu pessoalmente prefiro o gerenciador de pacotes pnpm, por ser mais ágil e ocupar menos espaço que o npm. Para instalar o pnpm, execute `npm install -g pnpm`.

Observação: Se você estiver usando o PowerShell e aparecer a mensagem de erro "A execução de scripts foi desabilitada neste sistema", é porque, por padrão, o Windows bloqueia a execução de scripts por motivos de segurança. Execute `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser` para habilitar a execução de scripts e então execute `npm install -g pnpm` para instalar o pnpm. No terminal, você pode navegar entre os comandos já executados usando as teclas direcionais para cima e para baixo.

Com o pnpm instalado, execute `pnpm init` na pasta raiz do projeto. Isso criará um arquivo package.json que contém informações sobre teu projeto, como nome, versão, descrição e os pacotes dos quais ele depende para ser executado. No momento, nosso projeto ainda não depende de nenhum pacote de terceiros. Vamos modificar a descrição do projeto para "Exemplos de interação com o usuário via CLI" e o autor para o teu nome. No meu caso, é "Pedro Siqueira". Todas essas informações são exibidas quando registramos nosso projeto no repositório de pacotes do npm, quando queremos disponibilizá-lo para que outras pessoas possam utilizá-lo como um pacote de terceiros em seus projetos.

Geralmente, projetos grandes são compostos por vários arquivos de código-fonte, além dos pacotes de terceiros. O modo como o JavaScript estrutura e utiliza os arquivos é chamado de "module system". Basicamente, há dois sistemas de módulo: o CommonJS, que é mais antigo e vem habilitado por padrão; e o ECMAScript Modules (ESM), que é o mais recente e indicado. Porém, até a data desta última versão do Node, não vem habilitado por padrão. Para configurar o projeto com o ESM, adicione a linha `, "type": "module"` no final do arquivo package.json, antes da chave de fechamento, não se esquecendo de salvar o arquivo em seguida.

Os dois últimos programas que fizemos possuem uma interface de linha de comando (chamada CLI, ou Command Line Interface). Isto é, o usuário interage com o programa via terminal, usando exclusivamente o teclado, diferentemente de programas com interface gráfica de usuário (chamada GUI, ou Graphical User Interface), em que o usuário interage com o programa através de janelas e ícones, usando tanto o teclado quanto o mouse.

O Node não vem com uma maneira simples de ler entradas digitadas pelo terminal. Mas, para fins de aprendizado de algoritmos, é mais fácil interagirmos com nossos programas diretamente pelo terminal. Portanto, vamos usar o gerenciador de pacotes pnpm para instalar o utilitário de leitura de entradas por terminal node-scanf. Com o terminal aberto na pasta raiz do projeto, execute `pnpm add scanf`. Ao instalar um pacote com o pnpm, ele é colocado na pasta node_modules e também registrado no arquivo package.json. Atenção: nunca mexa na pasta node_modules, sob risco de comprometer teu projeto! Ela é gerenciada automaticamente pelo npm.

Para testar o pacote node-scanf, crie o arquivo "interacao2.js" com o seguinte código:

```javascript
import scanf from 'scanf';

console.log("Digite um número...");
let a = scanf("%f");

console.log("Digite outro número...");
let b = scanf("%f");

let c = a + b;
console.log('A soma de', a, 'e', b, 'é', c);
```

Não se esqueça de salvá-lo teclando Ctrl+S. Agora, execute-o no terminal com o comando `node interacao2.js`.

Observe que o programa "interacao2.js" faz a mesma coisa que o programa "interacao.js", mas utilizando o pacote scanf para ler os dados digitados pelo usuário, tornando o programa mais simples.

Uma última coisa que queria fazer antes de concluir este capítulo é adicionar uma configuração no VSCode para conseguirmos executar os programas simplesmente teclando F5, sem precisar digitar comandos no terminal. Acesse o menu "Run → Add Configuration → Node.js".

O arquivo recém-criado ".vscode/launch.json" contém as configurações do VS Code para o projeto, incluindo detalhes sobre como compilar, executar e depurar o aplicativo. Neste arquivo, adicione a linha `"console": "integratedTerminal",` logo acima da linha `"type": "node"`. E confirme que a linha que começa com "program" esteja assim, modificando se necessário: `"program": "${file}"`. Salve o arquivo teclando Ctrl+S e pode fechá-lo teclando Ctrl+W. Agora, com o programa "interacao2.js" aberto, tecle F5 para executá-lo. Deve abrir o terminal com o programa em execução. Tecle Ctrl+J duas vezes para focar no terminal, ou simplesmente clique nele, para poder interagir com o programa.

Tudo pronto! Mais uma vez, não se preocupe em entender tudo o que está acontecendo. Este capítulo é mais para deixar tudo preparado para começarmos a aprender JavaScript nos próximos capítulos.
