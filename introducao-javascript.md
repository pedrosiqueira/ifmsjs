Preparando o ambiente de desenvolvimento
========================================

Introdução
----------

Olá pessoal! Neste curso aprenderemos a desenvolver softwares usando a
linguagem de programação javascript. Javascript é uma linguagem moderna,
versátil e poderosa. Sendo uma das linguagens mais utilizadas
atualmente, se não for a mais, pode ser usada para desenvolver diversos
tipos de softwares, como aplicativos web, móveis e desktop.

Nosso foco nesse curso será no desenvolvimento de aplicativos web, onde
o javascript pode ser utilizado tanto do lado do cliente (navegadores
web) quanto do lado do servidor (Node.js).

Para acompanhar o curso, acesse o site
<https://pedrosiqueira.github.io/ifmsjs>. Vamos começar na página
algoritmos, capítulo 02 preparando o ambiente de desenvolvimento.

Executando JavaScript via Navegador Web
---------------------------------------

![](Pictures/100000010000055300000200156CA49E.png){width="18.032cm"
height="6.773cm"}As páginas web utilizam as linguagens html, css e
javascript. Portanto, todos os navegadores modernos já vêm com um
interpretador de JavaScript embutido. Isso quer dizer que você pode
executar código javascript diretamente de seu navegador web. Acesse as
Ferramentas de Desenvolvimento do seu navegador (que na maioria dos
navegadores, pode ser através da tecla F12) e abra a aba \"Console\".

![](Pictures/1000000100000500000002A89782CE44.png){width="16.933cm"
height="8.996cm"}Esta aba é um terminal interativo para digitar e
executar comandos JavaScript. Agora digite "5+3" e tecle enter para ver
o resultado. Surpreendente, não?! Um 8. Mas isso parece uma calculadora
simples, e o javascript é muito mais que isso. Agora digite "new Date()"
e tecle enter para ver a data atual. Ótimo!

### Exemplo HTML + JavaScript

Vamos criar uma página web simples para ver o javascript com o html.
Abra um bloco de notas e digite o seguinte código:

\<input type=\"number\" placeholder=\"Digite um número\"\>

\<input type=\"number\" placeholder=\"Digite outro número\"\>

\<button onclick=\"somar()\"\>Somar!\</button\>

\<p\>\</p\>

\<script\>

function somar() {

const inputs = document.querySelectorAll(\"input\");

const resultado = Number(inputs\[0\].value) + Number(inputs\[1\].value);

document.querySelector(\"p\").textContent = resultado;

}

\</script\>

Pause o vídeo para poder digitar tudo. As duas primeiras linhas são dois
campos de entrada onde o usuário pode digitar dois números. A terceira
linha é um botão que, ao ser clicado, executará o comando javascript
"somar". Em uma página html, o código javascript deve estar dentro desse
elemento "script". Aqui definimos o comando "somar", composto por três
linhas, a primeira obtém os números digitados pelo usuário, a segunda
realiza a soma dos números e a terceira exibe a soma dos números no
parágrafo definido na linha 4. Não precisa se preocupar em entender o
que cada linha de código faz, muito menos em decorar. Aqui é só para
demonstrar o uso de html com javascript.

Agora salve o arquivo, teclando o atalho ctrl+s. Clique na área de
trabalho, clique no campo "nome", digite "página.html" e atenção, por
padrão, o bloco de notas salva o arquivo como txt, mas você precisa
clicar no campo "tipo" e escolher "todos os arquivos". Agora clique em
"salvar" para salvar sua página web na área de trabalho! Abra a área de
trabalho e abra o arquivo "página.html". Ele será aberto no seu
navegador web padrão. Digite alguns números e clique em "somar" para ver
o resultado!

![](Pictures/10000001000001F6000000A8C06720DA.png){width="6.641cm" height="2.223cm"}Instalando o Ambiente de Desenvolvimento JavaScript
---------------------------------------------------------------------------------------------------------------------------------------

![](Pictures/100000010000051400000080581CA82F.png){width="17.198cm"
height="1.693cm"}Se você quiser avançar no desenvolvimento de
aplicativos com JavaScript, não pode se limitar apenas ao bloco de notas
e às ferramentas disponíveis no navegador. É essencial instalar um
ambiente de desenvolvimento JavaScript completo. Esse ambiente te
permitirá utilizar bibliotecas, frameworks e recursos modernos, além de
facilitar a automação de tarefas e o gerenciamento de dependências,
criando uma base sólida para projetos mais robustos e escaláveis.

Para o nosso ambiente de desenvolvimento javascript, vamos usar os
seguintes programas:

1.  Node.js (ou simplesmente node): É o Ambiente de Execução (Runtime
    Environment) do JavaScript, que oferece um conjunto completo de
    ferramentas, desde a máquina virtual até o compilador JIT, para
    desenvolver e executar aplicativos JavaScript sem necessariamente
    precisar de um navegador web. O Node.js inclui o Node Package
    Manager (npm), uma ferramenta que permite baixar, instalar e
    gerenciar pacotes de terceiros.

    1.  Pacotes de terceiros são projetos desenvolvidos por outros
        desenvolvedores e que podem ser adicionados ao nosso próprio
        projeto. Um projeto, neste contexto, nada mais é do que uma
        pasta que agrupa todos os arquivos relacionados ao aplicativo
        que estamos desenvolvendo. Usamos um gerenciador de pacotes pois
        seguimos o princípios de não reinventar a roda, isto é, quando
        formos desenvolver um aplicativo, nunca começamos do zero, pois
        com certeza muito do que vamos precisar já está pronto.

2.  Git (git): É o Sistema de controle de versões que rastreia mudanças
    no código-fonte, permitindo a colaboração simultânea de múltiplos
    desenvolvedores. Ele registra alterações de forma organizada,
    mantendo um histórico de versões e possibilitando a restauração de
    versões anteriores quando necessário.

3.  Visual Studio Code (vscode): É um Ambiente de Desenvolvimento
    Integrado (IDE) poderoso e extensível, que integra recursos para
    editar, depurar, compilar e gerenciar código. Ele possui suporte a
    extensões (ou plugins) que ampliam suas funcionalidades, como
    integração com Node.js e Git.

Você pode instalar manualmente cada um desses programas, ou então pode
executar o seguinte script. Mas atenção, você precisa de privilégios
administrativos para executar o script, pois só o administrador do
sistema tem permissão de instalação. No Linux, você deve ter acesso ao
comando sudo. No Windows, você deve abrir o terminal PowerShell como
administrador.

Copie o comando do script, clicando nesse ícone no canto direito. Clique
no menu "iniciar", digite powershell, e clique na opção "Executar como
administrador". Na janela de confirmação, clique em "Sim". Ao abrir o
terminal, cole o comando, teclando ctrl+v, e execute, teclando enter. O
script instalará os programas, e também configurará algumas variáveis de
ambiente que esses programas utilizam. Você saberá que a instalação
terminou quando a janela do terminal fechar.

Se você instalou o ambiente de desenvolvimento JavaScript usando o
script anterior, a qualquer momento pode desinstalar executando como
administrador o seguinte script no terminal.

Criando um projeto nodejs
=========================

(antes de iniciar a aula, confira se o vscode está com o tema claro).

Olá pessoal! Nesse capítulo aprenderemos como criar e configurar um
projeto nodejs. Para tanto, você já precisa ter o ambiente de
desenvolvimento javascript instalado, conforme o capítulo anterior.

Como dissemos no capítulo anterior, Um projeto nodejs nada mais é do que
uma pasta que agrupa todos os arquivos relacionados ao aplicativo que
estamos desenvolvendo. Vamos criar nosso projeto na área de trabalho:
clique com o botão direito em algum espaço vazio da área de trabalho,
clique em novo, pasta, e digite "meu-projeto-javascript", sem espaços,
pois por motivos que ainda veremos, não é recomendável usar espaços nos
nomes dos arquivos do projeto. Essa pasta, "meu-projeto-javascript", é
denominada "pasta raiz", pois todos os arquivos do projeto ficam dentro
dela.

Vamos abrir a pasta do nosso projeto pelo vscode. Para tanto,
primeiramente abra o vscode, clique em "arquivo → abrir pasta → área de
trabalho → meu-projeto-javascript →selecionar pasta". Se abrir essa
janela, clique nessa caixa de seleção e em "Yes" para confiar nas pastas
da área de trabalho.

Aqui na aba Explorer são exibidos todos os arquivos do projeto, que no
momento não possui nenhum. Vamos criar nosso primeiro arquivo clicando
com o botão direito em algum espaço vazio da aba Explorer e "novo
arquivo". Digite "meu-primeiro-programa.js" e tecle enter. Quando abrir
o arquivo, digite "console.log('hello, world!')", exatamente como está
aqui: qualquer errinho de digitação e teu programa pode não funcionar.

Essa bolinha do lado do nome do arquivo significa que você ainda não
salvou o arquivo desde sua última edição. Tecle ctrl+s para salvar o
arquivo. Perceba que a bolinha sumiu, indicando que agora o arquivo está
salvo.

Esse é o teu primeiro programa em node! Ele contém apenas uma linha de
código, que simplesmente exibe a mensagem "hello, world!" quando
executado. O "hello, world!" é uma tradição desde os primórdios da
programação, que apresenta a linguagem de programação a novatos. Também
é usada para testar se a linguagem está instalada corretamente.

Para executar esse simples programa, abra o terminal na pasta raiz do
projeto, que no vscode, pode ser teclando ctrl+j. Digite "node
meu-primeiro-programa.js", ou então, você também pode digtar
simplesmente node meu e teclar "tab" para o terminal completar o que
você está digitando. Tecle enter para executar teu programa! Se aparecer
a mensagem "hello, world!", parabéns, esse é o teu primeiro programa e
tudo está funcionando conforme o esperado!

Agora vamos criar outro programa que seja capaz de interagir com o
usuário. Crie o arquivo "interacao.js", sem acentos, pois também não é
recomendável ter acentos nos arquivos do projeto. Digite o seguinte
código no arquivo:

import readline from \'readline/promises\';

const rl = readline.createInterface({ input: process.stdin, output:
process.stdout });

let a = Number(await rl.question(\'digite um número\... \'));

let b = Number(await rl.question(\'digite outro número\... \'));

let c = a + b;

console.log(\'A soma de\', a, \'e\', b, \'é\', c);

rl.close();

Não se esqueça de salvar o arquivo, teclando ctrl+s. Agora, clique no
terminal e execute o programa digitando "node interacao.js" e teclando
enter. O programa solicitará um número, digite algum número e tecle
enter. Depois solicitará outro número, digite e tecle enter. Por fim,
apresentará a soma dos dois números digitados!

Ufa! Vários comandos para fazer um programa relativamente simples...
você pode até estar se perguntando o que cada um desses comandos faz,
mas não se preocupe, nem procure entender tudo de uma vez. Com o passar
das aulas vamos aprendendo cada comando por vez.

Gerenciamento de pacotes
------------------------

Embora o npm seja o gerenciador de pacotes padrão do node, eu
pessoalmente prefiro o gerenciador de pacotes pnpm, por ser mais ágil e
ocupar menos espaço que o npm. Para instalar o pnpm, execute npm install
-g pnpm.

Observação: Se você estiver usando o powershell e aparecer a mensagem de
erro "a execução de scripts foi desabilitada neste sistema", é porque
por padrão o windows bloqueia a execução de scripts, por motivos de
segurança. Execute "Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
-Scope CurrentUser" para habilitar a execução de scripts, e então
execute "npm install -g pnpm" para instalar o pnpm. No terminal, você
pode navegar entre os comandos já executados usando as teclas
direcionais para cima e para baixo.

Com o pnpm instalado, execute pnpm init na pasta raiz do projeto. É
criado um arquivo package.json, que contém informações do teu projeto,
como nome, versão, descrição e os pacotes que ele depende para ser
executado. Mas no momento nosso projeto ainda não depende de nenhum
pacote de terceiro. Vamos modificar a descrição do projeto para
"exemplos de interação com o usuário via cli", e autor para o teu nome,
que no meu caso é "pedro siqueira". Todas essas informações são exibidas
quando registramos nosso projeto no repositório de pacotes do npm,
quando queremos disponibilizá-lo para que outras pessoas possam
utilizá-lo como um pacote de terceiro em seus projetos.

Geralmente projetos grandes são compostos por vários arquivos de
código-fonte, além dos pacotes de terceiros. O modo como o JavaScript
estrutura e utiliza os arquivos é chamado de module system. Basicamente
há dois sistemas de módulo: o CommonJS, que é mais antigo e vem
habilitado por padrão; e o ECMAScript Modules (ESM), que é o mais
recente e indicado. Porém até a data da última versão do node, não vem
habilitado por padrão. Para configurar o projeto com o ESM, adicione a
linha , \"type\": \"module\" no final do arquivo package.json, antes da
chave de fechamento, não se esquecendo de salvar o arquivo em seguida.

Os dois últimos programas que fizemos possuem uma interface de linha de
comando (chamada de CLI, ou command line interface). Isto é, o usuário
interage com o programa via terminal, usando exclusivamente o teclado,
diferentemente de programas com interface gráfica de usuário (chamada de
GUI, ou Graphical User Interface), em que o usuário interage com o
programa através de janelas e ícones, usando tanto o teclado quanto o
mouse.

O node não vem com uma maneira simples de ler entradas digitadas pelo
terminal. Mas para fins de aprendizado de algoritmos, é mais fácil
interagirmos com nossos programas diretamente pelo terminal. Portanto,
vamos usar o gerenciador de pacotes pnpm para instalar o utilitário de
leitura de entradas por terminal node-scanf. Com o terminal aberto na
pasta raiz do projeto, execute pnpm add scanf. Ao instalar um pacote com
o pnpm, o pacote é colocado na pasta node\_modules e também registrado
no arquivo package.json. Atenção: nunca mexa na pasta node\_modules, sob
risco de zoar teu projeto!

Para testar o pacote node-scanf, crie o arquivo interacao2.js com o
seguinte código:

import scanf from \'scanf\';

console.log(\"digite um número\...\")

let a = scanf(\"%f\");

console.log(\"digite outro número\...\")

let b = scanf(\"%f\");

let c = a + b;

console.log(\'A soma de\', a, \'e\', b, \'é\', c);

Não se esqueça de salvá-lo, teclando ctrl+s. Agora execute-o no
terminal, com o comando node interacao2.js.

Observe que o programa interacao2.js faz a mesma coisa que o programa
interacao.js, mas usando o pacote scanf para ler os dados que o usuário
digita, tornando o programa mais simples.

Uma última coisa que eu queria fazer antes de concluir esse capítulo, é
adicionar uma configuração do vscode no projeto para conseguir executar
os programas simplesmente teclando F5, sem precisar digitar comandos no
terminal. Acesse o menu \"Run → Add Configuration → Node.js\".

No arquivo recém-criado .vscode/launch.json, adicione a linha
'\"console\": \"integratedTerminal\",' logo acima da linha
\"type\":\"node\". E confirme que a linha que comece com "program"
esteja assim, modificando se necessário: \"program\": \"\${file}\".
Salve o arquivo teclando ctrl+s, e pode fechá-lo teclando ctrl+w. Agora,
com o programa interacao2.js aberto, tecle f5 para executá-lo. Deve
abrir o terminal com o programa em execução, tecle ctrl+j duas vezes
para focar no terminal, ou simplesmente clique nele, para poder
interagir com o programa.

Tudo pronto! Mais uma vez, Não se preocupe em entender tudo o que está
se passando. Esse capítulo é mais para deixar tudo preparado para
começarmos a aprender JavaScript nos próximos capítulos.

Introdução ao Git e ao GitHub
=============================

![](Pictures/100000010000051400000200672C84E0.png){width="17.082cm"
height="6.727cm"}Olá pessoal! Nesse capítulo nós vamos aprender...

O Git É um Sistema de controle de versões que rastreia mudanças no
código-fonte, permitindo a colaboração simultânea de múltiplos
desenvolvedores. Ele registra alterações de forma organizada, mantendo
um histórico de versões e possibilitando a restauração de versões
anteriores quando necessário.

![](Pictures/100000010000082200000200A4F63FCE.png){width="17.082cm"
height="4.2cm"}O GitHub é uma plataforma online de hospedagem de
repositórios Git que amplia suas funcionalidades com uma interface
intuitiva e ferramentas para colaboração, revisão de código, automação e
gerenciamento de projetos. Além disso, funciona como uma rede social
para desenvolvedores, facilitando o compartilhamento e a colaboração em
projetos de código aberto.

Em resumo: Git é a tecnologia para controle de versão; GitHub é uma
plataforma que utiliza Git e fornece ferramentas adicionais para
colaboração e gerenciamento de projetos.

Criando uma conta no GitHub
---------------------------

Primeiramente vamos criar uma conta no GitHub, ou acessá-la, se você já
tiver uma. Acesse o site https://GitHub.com. Se você já tem uma conta,
pode clicar em "Sign in", senão, clique em "Sign up" para criar uma.
Como eu já tenho a minha conta, vou acessá-la agora. Depois que você
acessar ou criar tua conta, clique no ícone do teu usuário e anote o
nome do teu usuário que aparecer aqui.

Agora abra um terminal, pode ser do próprio vscode, e execute os
seguintes comandos, substituindo \$username e \$useremail pelos teus
respectivos nome de usuário e e-mail usados ao criar tua conta no
GitHub:

Substitua \$username pelo teu nome de usuário!

git config \--global user.name \$username

Substitua \$useremail pelo teu e-mail de usuário!

git config \--global user.email \$useremail

Publicando o projeto no GitHub
------------------------------

Agora vamos publicar no GitHub o projeto criado no último capítulo. Com
o projeto aberto no vscode, tecle F1, digite \"publish\", selecione a
opção \"Publish to GitHub\". A primeira vez que o vscode tentar se
conectar ao GitHub, vai pedir para você se autenticar. Clique em "Allow"
e dê permissão para o vscode ter acesso à tua conta no GitHub. De volta
ao vscode, selecione a opção "Publish to GitHub public repository".
Desmarque a pasta node\_modules, pois ela não deve ser salva no GitHub.
Clique em "Ok". O vscode agora vai publicar o projeto no GitHub. Se
aparecer essa janela, selecione a opção de conectar no navegador,
browser, e autorize o git a publicar na tua conta GitHub. Depois que
aparecer essa mensagem, pode fechar essa aba e voltar ao vscode. E aqui
está a mensagem, teu projeto foi publicado com sucesso no GitHub! Clique
em "Open on GitHub" para ver teu projeto no GitHub. Aqui é o projeto com
todos os arquivos hospedados no GitHub.

Repositórios
------------

Agora vamos dar uma visão geral do funcionamento do git e do GitHub.
Nosso projeto nada mais é do que uma pasta que contém todos os arquivos
relacionados ao projeto. No contexto do git, chamamos essa pasta de
repositório. Se você clicar com o botão direito neste vazio e selecionar
"Reveal in file explorer", a pasta do projeto será aberta no explorador
de arquivos. Observe que o projeto se encontra na área de trabalho. Como
também publicamos o projeto no GitHub, podemos acessá-lo através do
endereço
[https://github.com/teu\_nome\_de\_usuário\_github/nome\_do\_teu\_projeto](https://github.com/teu_nome_de_usuário_github/nome_do_teu_projeto).
Ou seja, o GitHub funciona como uma espécie de "drive" para armazenar os
arquivos do projeto na nuvem, permitindo que eles estejam acessíveis de
qualquer lugar com internet. Para diferenciarmos, chamamos a pasta em
nosso computador de repositório local, e a pasta no GitHub de
repositório remoto.

Commit
------

Toda vez que realizamos uma ou mais alterações no repositório local,
salvamos essas mudanças como uma "nova versão" do projeto, chamada de
"commit". Por exemplo, abra o arquivo interacao2.js, e altere a linha 8
para "A soma dos números". Observe que o vscode destaca as linhas
alteradas desde o último commit, e etiqueta o arquivo com a letra m, de
modificado, facilitando a identificação das mudanças.

Agora crie e execute o arquivo saudacoes.js com o seguinte código:

import scanf from \'scanf\';

console.log(\'Qual teu nome?\');

let nome = scanf(\'%s\');

console.log(\'Olá, \' + nome + \', muito prazer!\');

Observe que o vscode etiqueta o arquivo com a letra u, de untracked,
indicando que esse é um novo arquivo.

Para visualizar essas alterações, abra a aba do GitHub, clicando aqui ou
teclando Ctrl+Shift+g. Nessa aba, podemos ver todas as alterações
realizadas desde o último commit. Se clicarmos em interacao2, vemos a
modificação realizada, como estava, e como ficou, e se clicarmos em
saudacoes, vemos que este arquivo é novo.

Para salvar essa nova versão, clique em "commit". Se abrir essa janela,
você pode clicar em "Always" para que essa mensagem não aparece
novamente. Sempre que realizamos um commit, o Git solicita uma breve
descrição das alterações realizadas. Essa descrição é importante, pois o
Git mantém um histórico completo de todas as versões do projeto,
incluindo os detalhes de cada commit, e é bom termos uma descrição geral
do que foi mudado de uma versão para outra. Escreva uma mensagem e tecle
ctrl+w para fechar esse arquivo, salvando em seguida.

Sync=push+pull
--------------

Quando não há alterações, o botão "Commit" é substituído por "Sync
Changes". Esse botão sincroniza o repositório local com o repositório
remoto, isto é, envia as alterações do repositório local para o
repositório remoto no GitHub, e vice-versa. A sincronia é bidirecional
pois várias pessoas, cada uma com seu próprio repositório local, podem
estar compartilhando o mesmo repositório remoto. Assim, se alguém fizer
uma alteração no repositório remoto, essa alteração também será enviada
ao repositório local de todos.

Abra o arquivo interacao2 no GitHub e verifique que ambos os arquivos
ainda estão diferentes antes da sincronização. Agora, volte ao vscode,
aba do GitHub, clique em "sync changes" e confirme a sincronização.
Pronto, agora as alterações que fizemos no repositório local foram
enviadas para o repositório remoto. Volte para o arquivo no repositório
remoto e atualize a página para ver a nova versão.

Quando enviamos algum commit do repositório local para o repositório
remoto, falamos que fizemos um push. E quando recebemos algum commit do
repositório remoto para o repositório local, falamos que fizemos um
pull.

Clone
-----

Podemos abrir qualquer repositório hospedado no GitHub em nosso
computador, através da operação conhecida como Clone. Basta ter em mãos
o endereço do repositório, que pode ser encontrado, em sua página no
GitHub, clicando neste botão "Code". Aqui está, o endereço do
repositório para ser clonado. Copie ele, clicando neste ícone.

Para simular essa operação, vamos supor que ainda não temos o
repositório baixado neste computador e abrir outra janela do vscode,
clicando no menu arquivo e nova janela. Observe que na aba do explorador
não há nenhuma pasta aberta. Tecle F1, digite clone e escolha a opção
"Git: Clone". Cole aqui o endereço do repositório a ser clonado. Ou
então, se você quiser clonar um repositório da tua própria conta, sem
precisar colar nenhum link, pode clicar em "Clone from GitHub", que vai
listar todos teus repositório, onde você poderá escolher qual quer
clonar. Tecle enter para selecionar o repositório, escolha um local em
seu computador onde queres salvá-lo. Como eu já tenho o mesmo
repositório salvo na área de trabalho, vou escolher a pasta Documentos
para salvar o repositório. Clique em "Select as Repository Destination".
O VSCode vai baixar o repositório e perguntar se você quer abri-lo.
Confirme clicando em Open.

Agora vou abrir as duas janelas do vscode, onde a de cima se refere ao
repositório salvo na área de trabalho, e a de baixo se refere ao
repositório salvo em Documentos. Se você alterar o arquivo interacao2 do
projeto de cima, perceba que o vscode detecta a mudança (modifique
fazendo a multiplicação em vez da soma). Agora você pode acessar a aba
do GitHub, clicar no botão commit, escrever uma mensagem de commit,
fechar o arquivo de commit, e clicar em sync changes para enviar esse
commit para o repositório remoto.

Observe que o repositório da janela de baixo não é sincronizado
automaticamente com o repositório remoto. Para receber o commit do
repositório remoto no repositório da janela de baixo, você também pode
teclar f1, digitar pull, pois você só vai receber, e selecionar "Git:
Pull". Observe que agora o repositório de baixo é atualizado com o
último commit do repositório remoto.

Então é isso, agora você já sabe como criar um projeto, salvá-lo no
GitHub, cloná-lo em outro computador, e manter o projeto sincronizado
entre vários computadores, ...
