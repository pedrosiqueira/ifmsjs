# Preparando o Ambiente de Desenvolvimento

## Introdução

Olá, pessoal! Neste curso, aprenderemos a desenvolver software utilizando a linguagem de programação JavaScript. O JavaScript é uma linguagem moderna, versátil e poderosa. É uma das linguagens mais utilizadas atualmente, podendo ser empregada no desenvolvimento de diversos tipos de software, como aplicativos web, móveis e desktop.

Nosso foco neste curso será o desenvolvimento de aplicativos web, onde o JavaScript pode ser utilizado tanto no lado do cliente (navegadores web) quanto no lado do servidor (Node.js).

Para acompanhar o curso, acesse o site <https://pedrosiqueira.github.io/ifmsjs>. Vamos começar na página "Algoritmos", capítulo 2: Preparando o ambiente de desenvolvimento.

## Executando JavaScript via Navegador Web

As páginas web utilizam as linguagens HTML, CSS e JavaScript. Portanto, todos os navegadores modernos já vêm com um interpretador de JavaScript embutido. Isso significa que você pode executar código JavaScript diretamente no teu navegador web. Para isso, acesse as Ferramentas de Desenvolvimento do teu navegador (na maioria dos navegadores, pode ser através da tecla F12) e abra a aba "Console".

Esta aba é um terminal interativo para digitar e executar comandos JavaScript. Agora, digite `5+3` e tecle Enter para ver o resultado. Surpreendente, não? Um 8. Mas isso parece uma calculadora simples, e o JavaScript é muito mais que isso. Agora, digite `new Date()` e tecle Enter para ver a data atual. Ótimo!

### Exemplo de HTML + JavaScript

Vamos criar uma página web simples para ver o JavaScript em ação junto com o HTML. Abra um bloco de notas e digite o seguinte código:

```html
<input type="number" placeholder="Digite um número">
<input type="number" placeholder="Digite outro número">
<button onclick="somar()">Somar!</button>
<p></p>

<script>
  function somar() {
    const inputs = document.querySelectorAll("input");
    const resultado = Number(inputs[0].value) + Number(inputs[1].value);
    document.querySelector("p").textContent = resultado;
  }
</script>
```

Pause o vídeo para poder digitar tudo. As duas primeiras linhas são campos de entrada onde o usuário pode digitar dois números. A terceira linha é um botão que, ao ser clicado, executará o comando JavaScript `somar`. Em uma página HTML, o código JavaScript deve estar dentro do elemento `<script>`. Aqui definimos o comando `somar`, composto por três linhas: a primeira obtém os números digitados pelo usuário, a segunda realiza a soma dos números e a terceira exibe a soma dos números no parágrafo definido na linha 4. Não precisa se preocupar em entender o que cada linha de código faz, muito menos em decorar. Aqui é só para demonstrar o uso de HTML com JavaScript.

Agora, salve o arquivo teclando o atalho Ctrl+S. Clique na área de trabalho, clique no campo "Nome", digite "pagina.html" e, atenção, por padrão, o bloco de notas salva o arquivo como TXT, mas você precisa clicar no campo "Tipo" e escolher "Todos os arquivos". Agora, clique em "Salvar" para salvar sua página web na área de trabalho. Abra a área de trabalho e clique no arquivo "pagina.html". Ele será aberto no teu navegador web padrão. Digite alguns números e clique em "Somar" para ver o resultado!

## Instalando o Ambiente de Desenvolvimento JavaScript

Se você deseja avançar no desenvolvimento de aplicativos com JavaScript, não pode se limitar apenas ao bloco de notas e às ferramentas disponíveis no navegador. É essencial instalar um ambiente de desenvolvimento JavaScript completo. Esse ambiente permitirá utilizar bibliotecas, frameworks e recursos modernos, além de facilitar a automação de tarefas e o gerenciamento de dependências, criando uma base sólida para projetos mais robustos e escaláveis.

Para o nosso ambiente de desenvolvimento JavaScript, vamos usar os seguintes programas:

1. **Node.js (ou simplesmente Node):** É o Ambiente de Execução (Runtime Environment) do JavaScript, que oferece um conjunto completo de ferramentas, desde a máquina virtual até o compilador JIT, para desenvolver e executar aplicativos JavaScript sem necessariamente precisar de um navegador web. O Node.js inclui o Node Package Manager (npm), uma ferramenta que permite baixar, instalar e gerenciar pacotes de terceiros.
   - Pacotes de terceiros são projetos desenvolvidos por outros desenvolvedores e que podem ser adicionados ao nosso próprio projeto. Um projeto, neste contexto, nada mais é do que uma pasta que agrupa todos os arquivos relacionados ao aplicativo que estamos desenvolvendo. Usamos um gerenciador de pacotes pois seguimos o princípio de não reinventar a roda, isto é, quando formos desenvolver um aplicativo, nunca começamos do zero, pois muito do que vamos precisar já está pronto.
   
2. **Git:** É o Sistema de Controle de Versões que rastreia mudanças no código-fonte, permitindo a colaboração simultânea de múltiplos desenvolvedores. Ele registra alterações de forma organizada, mantendo um histórico de versões e possibilitando a restauração de versões anteriores quando necessário.

3. **Visual Studio Code (ou VSCode):** É um Ambiente de Desenvolvimento Integrado (IDE) poderoso e extensível, que integra recursos para editar, depurar, compilar e gerenciar código. Ele possui suporte a extensões (ou plugins) que ampliam suas funcionalidades, como integração com Node.js e Git.

Você pode instalar manualmente cada um desses programas ou pode executar o seguinte script. Mas atenção, você precisa de privilégios administrativos para executar o script, pois só o administrador do sistema tem permissão de instalação. No Linux, você deve ter acesso ao comando `sudo`. No Windows, você deve abrir o terminal PowerShell como administrador.

Copie o comando do script clicando nesse ícone no canto direito. Clique no menu "Iniciar", digite PowerShell e clique na opção "Executar como administrador". Na janela de confirmação, clique em "Sim". Ao abrir o terminal, cole o comando teclando Ctrl+V e execute teclando Enter. O script instalará os programas e configurará algumas variáveis de ambiente que esses programas utilizam. Você saberá que a instalação terminou quando a janela do terminal fechar.

Se você instalou o ambiente de desenvolvimento JavaScript usando o script anterior, a qualquer momento pode desinstalar executando como administrador o seguinte script no terminal.

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

# Introdução ao Git e ao GitHub

Olá pessoal! Neste capítulo vamos aprender sobre duas ferramentas fundamentais para o desenvolvimento de software: Git e GitHub.

O Git é um sistema de controle de versões que rastreia mudanças no código-fonte, permitindo a colaboração simultânea de múltiplos desenvolvedores. Ele registra as alterações de forma organizada, mantendo um histórico de versões e possibilitando a restauração de versões anteriores quando necessário.

O GitHub é uma plataforma online de hospedagem de repositórios Git que amplia suas funcionalidades com uma interface intuitiva e ferramentas para colaboração, revisão de código, automação e gerenciamento de projetos. Além disso, funciona como uma rede social para desenvolvedores, facilitando o compartilhamento e a colaboração em projetos de código aberto.

Em resumo: Git é a tecnologia para controle de versão; GitHub é uma plataforma que utiliza Git e fornece ferramentas adicionais para colaboração e gerenciamento de projetos.

## Criando uma Conta no GitHub

Primeiramente, vamos criar uma conta no GitHub, ou acessá-la, se você já tiver uma. Acesse o site <https://github.com>. Se você já tem uma conta, pode clicar em "Sign in". Caso contrário, clique em "Sign up" para criar uma. Como eu já tenho minha conta, vou acessá-la agora. Depois de acessar ou criar sua conta, clique no ícone do teu usuário e anote o nome do usuário que aparecer.

Agora, abra um terminal, pode ser do próprio VSCode, e execute os seguintes comandos, substituindo `$username` e `$useremail` pelo teus respectivos nome de usuário e e-mail usados ao criar sua conta no GitHub:

Substitua `$username` pelo teu nome de usuário!

```bash
git config --global user.name $username
```

Substitua `$useremail` pelo teu e-mail de usuário!

```bash
git config --global user.email $useremail
```

## Publicando o Projeto no GitHub

Agora vamos publicar no GitHub o projeto criado no último capítulo. Com o projeto aberto no VSCode, tecle F1, digite "publish" e selecione a opção "Publish to GitHub". A primeira vez que o VSCode tentar se conectar ao GitHub, ele pedirá para você se autenticar. Clique em "Allow". E dê permissão para o VSCode acessar sua conta no GitHub. De volta ao VSCode, selecione a opção "Publish to GitHub public repository". Desmarque a pasta `node_modules`, pois ela não deve ser salva no GitHub. Clique em "Ok". O VSCode agora publicará o projeto no GitHub. Se aparecer essa janela, selecione a opção de conectar no navegador e autorize o Git a publicar na sua conta GitHub. Depois que essa mensagem aparecer, você pode fechar essa aba e voltar ao VSCode. E aqui está a mensagem, teu projeto foi publicado com sucesso no GitHub! Clique em "Open on GitHub" para ver teu projeto no GitHub. Aqui está o projeto com todos os arquivos hospedados no GitHub.

## Repositórios

Agora vamos dar uma visão geral do funcionamento do Git e do GitHub. Nosso projeto nada mais é do que uma pasta que contém todos os arquivos relacionados ao projeto. No contexto do Git, chamamos essa pasta de repositório. Se você clicar com o botão direito neste espaço vazio e selecionar "Reveal in file explorer", a pasta do projeto será aberta no explorador de arquivos. Observe que o projeto está na área de trabalho. Como também publicamos o projeto no GitHub, podemos acessá-lo através do endereço <https://github.com/teu_nome_de_usuario/nome_do_teu_projeto>. Ou seja, o GitHub funciona como uma espécie de "drive" para armazenar os arquivos do projeto na nuvem, permitindo que eles estejam acessíveis de qualquer lugar com internet. Para diferenciarmos, chamamos a pasta em nosso computador de repositório local, e a pasta no GitHub de repositório remoto.

## Commit

Toda vez que realizamos uma ou mais alterações no repositório local, salvamos essas mudanças como uma "nova versão" do projeto, chamada de **commit**. Por exemplo, abra o arquivo `interacao2.js` e altere a linha 8 para "A soma dos números". Observe que o VSCode destaca as linhas alteradas desde o último commit e etiqueta o arquivo com a letra "M", de modificado, facilitando a identificação das mudanças.

Agora crie e execute o arquivo `saudacoes.js` com o seguinte código:

```javascript
import scanf from 'scanf';

console.log('Qual teu nome?');

let nome = scanf('%s');

console.log('Olá, ' + nome + ', muito prazer!');
```

Observe que o VSCode etiqueta o arquivo com a letra "U", de untracked, indicando que esse é um novo arquivo.

Para visualizar essas alterações, abra a aba do GitHub, clicando neste ícone ou teclando Ctrl+Shift+G. Nessa aba, podemos ver todas as alterações realizadas desde o último commit. Se clicarmos em `interacao2.js`, vemos a modificação realizada, como estava e como ficou. E se clicarmos em `saudacoes.js`, vemos que este arquivo é novo.

Para salvar essa nova versão, clique em "Commit". Se abrir essa janela, você pode clicar em "Always" para que essa mensagem não apareça novamente. Sempre que realizamos um commit, o Git solicita uma breve descrição das alterações realizadas. Essa descrição é importante, pois o Git mantém um histórico completo de todas as versões do projeto, incluindo os detalhes de cada commit, e é bom termos uma descrição geral do que foi mudado de uma versão para outra. Escreva uma mensagem e tecle Ctrl+W para fechar esse arquivo, salvando em seguida.

## Sync = Push + Pull

Quando todas as alterações estão salvas (commited), o botão "Commit" é substituído por "Sync Changes". Esse botão sincroniza o repositório local com o repositório remoto, isto é, envia as alterações do repositório local para o repositório remoto no GitHub, e vice-versa. A sincronia é bidirecional, pois várias pessoas, cada uma com seu próprio repositório local, podem estar compartilhando o mesmo repositório remoto. Assim, se alguém fizer uma alteração no repositório remoto, essa alteração também poderá ser enviada ao repositório local de todos.

Abra o arquivo `interacao2.js` no GitHub e verifique que ambos os arquivos ainda estão diferentes antes da sincronização. Agora, volte ao VSCode, aba do GitHub, clique em "Sync Changes" e confirme a sincronização. Pronto, agora as alterações que fizemos no repositório local foram enviadas para o repositório remoto. Volte para o arquivo no repositório remoto e atualize a página para ver a nova versão.

Quando **enviamos** algum commit do repositório local para o repositório remoto, dizemos que fizemos um **push**. E quando **recebemos** algum commit do repositório remoto para o repositório local, dizemos que fizemos um **pull**.

## Clone

Podemos abrir qualquer repositório hospedado no GitHub em nosso computador através da operação conhecida como **clone**. Basta ter em mãos o endereço do repositório, que pode ser encontrado em sua página no GitHub, clicando no botão "Code". Aqui está o endereço do repositório para ser clonado. Copie-o clicando neste ícone.

Para simular essa operação, vamos supor que ainda não temos o repositório baixado neste computador. Abra outra janela do VSCode clicando no menu "Arquivo" e depois em "Nova Janela". Observe que na aba do Explorador não há nenhuma pasta aberta. Tecle F1, digite "clone" e escolha a opção "Git: Clone". Cole aqui o endereço do repositório a ser clonado. Ou, se você quiser clonar um repositório da sua própria conta sem precisar colar nenhum link, pode clicar em "Clone from GitHub", que listará todos os teus repositórios, onde você poderá escolher qual clonar. Tecle Enter para selecionar o repositório e escolha um local em teu computador onde deseja salvá-lo. Como eu já tenho o mesmo repositório salvo na área de trabalho, vou escolher a pasta Documentos para salvar o repositório. Clique em "Select as Repository Destination". O VSCode baixará o repositório e perguntará se você quer abri-lo. Confirme clicando em "Open".

Agora vou abrir as duas janelas do VSCode, onde a de cima se refere ao repositório salvo na área de trabalho, e a de baixo se refere ao repositório salvo em Documentos. Se você alterar o arquivo `interacao2.js` do projeto de cima, o VSCode detectará a mudança (modifique fazendo a multiplicação em vez da soma). Agora você pode acessar a aba do GitHub, clicar no botão "Commit", escrever uma mensagem de commit, fechar o arquivo de commit, e clicar em "Sync Changes" para enviar esse commit para o repositório remoto.

Observe que o repositório da janela de baixo não é sincronizado automaticamente com o repositório remoto. Para receber o commit do repositório remoto no repositório da janela de baixo, você pode teclar F1, digitar "pull", e selecionar "Git: Pull", pois você só vai receber. Observe que agora o repositório de baixo é atualizado com o último commit do repositório remoto.

Então é isso, agora você já sabe como criar um projeto, salvá-lo no GitHub, cloná-lo em outro computador, e manter o projeto sincronizado entre vários computadores!
