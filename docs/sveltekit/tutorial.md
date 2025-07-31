# Como publicar teu site construído com SvelteKit no GitHub Pages

tbm devo falar do package.json, e dos scripts que dá pra executar de lá

falar sobre debug https://svelte.dev/docs/kit/debugging

## 01 - SvelteKit e GitHub: Preparação do Ambiente de Desenvolvimento

Nesse tutorial vamos aprender a como construir um site com SvelteKit, como publicar o site no GitHub, e como implantar o site no GitHub Pages.

O SvelteKit é a tecnologia que vamos usar para desenvolver nosso site. O GitHub é um serviço na nuvem que vamos usar para salvar o código-fonte do nosso site. Isto é, o GitHub funciona como uma espécie de drive onde podemos deixar o código-fonte salvo na internet. E o GitHub também tem um serviço de implantação do nosso site. Ou seja, ele vai hospedar nosso site na internet para que outras pessoas possam acessá-lo por meio de um navegador web.

Para desenvolver nosso site com SvelteKit, vamos precisar dos seguintes programas: O nodejs, que é o programa que executa código JavaScript, e o SvelteKit é código JavaScript. Vamos precisar do git, que é o programa que acessa nossa conta no GitHub. E vamos precisar do vscode para escrever nosso código.

Além disso, também vamos precisar de uma conta no GitHub.

### Criando conta no GitHub

Então vamos começar criando uma conta no GitHub. Acesse o endereço https://github.com. Na página inicial temos a opção de nos autenticar, que é o sign in, caso já tenhamos uma conta, ou de criar uma conta, que é o sign up, caso ainda não tenhamos uma conta.

Como eu já tenho uma conta, vou clicar em sign in, digitar meu nome de usuário, minha senha, eu uso autenticação em duas etapas para deixar minha conta mais segura, e aqui eu digito o código gerado no meu celular. Pronto, estou autenticado na minha conta no GitHub.

Agora, é importante sabermos o nome do nosso usuário do GitHub para podermos publicar nosso site aqui. Clique neste ícone do teu usuário e anote esse nome aqui, que é teu nome de usuário do GitHub. Também anote o email que usou para criar tua conta no GitHub.

### Instalação

Agora vamos instalar os programas node, git e vscode, que precisamos para desenvolver nosso site com SvelteKit e publicá-lo no GitHub.

Para instalar os programas, você pode acessar o site https://pedrosiqueira.github.io/ifmsjs/alg, capítulo "02 Preparando o ambiente de desenvolvimento". Ao executar esse comando no terminal, serão instalados o node, o git e o vscode. Se já tivermos pelo menos um desses programas instalados, não tem problema executar esse comando, esses programas serão atualizados para a versão mais recente, se for o caso.

Então copie esse comando clicando neste ícone no canto da direita, abra o terminal, que no windows, pode ser clicar no menu iniciar, digitar powershell e escolher a opção "Executar como administrador". É importante abrirmos o terminal no modo administrador, pois só assim conseguiremos instalar os programas. Nessa janela, confirme que quer abrir o terminal no modo administrativo. E quando abrir o terminal, verifique se na barra de títulos aparece "Administrador". Se não estiver aparecendo, feche o terminal e tente abrí-lo novamente como administrador, senão, a instalação dos programas não vai funcionar. Agora tecle ctrl+v para colar o comando copiado anteriormente, seguido por enter para executar o comando. A instalação do node, git e vscode começará, e saberemos que a instalação terminou quando a janela do terminal fechar. No meu caso a instalação foi bem rápido pois eu já tinha os programas instalados e atualizados para a mais recente versão.

Depois de instalarmos o node, git e vscode, vamos configurá-los para conseguir desenvolver nosso site e publicá-lo corretamente. Acesse o site https://pedrosiqueira.github.io/ifmsjs/sveltekit, capítulo "01 Preparando o ambiente", e copie esse comando, clicando neste ícone no canto direito. Agora podemos executar esse comando diretamente no terminal do vscode. Então clique no menu iniciar, e se o vscode não estiver aparecendo para você, digite code, e clique no vscode. Depois que o vscode abrir, tecle ctrl+j para abrir o terminal do vscode, ctrl+v para copiar o comando copiado anteriormente e enter para executar o comando.

Esse comando vai pedir teu nome de usuario do GitHub. É agora que você vai digitar aquele nome anotado anteriormente e o email usado para criar a conta.

Depois esse comando vai instalar algumas extensões no vscode para nos auxiliar a desenvolver nosso site com SvelteKit.

Esse comando também vai instalar o pnpm, um gerenciador de pacotes do nodejs. O nodejs vem por padrão com o npm, só que eu não gosto do npm por ser mais lento e mais pesado comparado ao pnpm. Mas o pnpm não vem instalado por padrão, então precisamos instalá-lo.

Por fim, o comando vai baixar na área de trabalho um projeto de exemplo para testar se está tudo funcionando conforme o esperado. Depois de baixar o projeto, o vscode vai abrí-lo, e se aparecer essa janela, clique em "Yes" para confirmar que confia no autor...

Para testar se está tudo funcionando conforme o esperado, execute o projeto teclando F5 e aguarde a finalização do processo de construção do site. Ótimo, depois que o site terminar de ser construído, saberemos que o site está sendo executado se na aba "debug console" ou na aba "terminal" estiver aparecendo esse endereço aqui. Teu site pode ser acessado nesse endereço aqui. Localhost indica que o site está sendo executado localmente, isto é, ele só pode ser acessado no teu computador. Também podemos saber que o site está em execução por conta dessa barrinha de execução, em que a qualquer momento você pode clicar neste ícone de "stop" para encerrar a execução do site. Para abrir o site, selecione esse endereço, copie teclando ctrl+c, abra o navegador, abra uma nova aba, e na barra de endereços, tecle ctrl+v seguido por enter. Se abrir essa página e você conseguir navegar pelas outras páginas do site, então está tudo funcionando conforme o esperado!

Muito bom, já temos nossa conta no github, já temos o node, o git e o vscode instalados, atendendo a todos os requisitos para desenvolver sites com SvelteKit e publicá-los no GitHub.

## 04 - SvelteKit e GitHub: Visão Geral sobre Git e GitHub

### Repositórios

Nessa seção, daremos uma visão geral do funcionamento do git e do github. Um projeto nada mais é do que uma pasta contendo todos os arquivos relacionados ao projeto. Podemos acessar essa pasta no computador clicando com o botão direito nesse espaço vazio, e selecionando "Reveal in file explorer". E aqui está a pasta do projeto, com todos os seus arquivos. Observe que a barra de endereço mostra a localização do projeto, que aqui, está no Desktop, ou seja, na área de trabalho.

Como publicamos o projeto no GitHub, os mesmos arquivos também estão disponíveis online. Para acessá-los, digite o endereço do site, https://github.com, barra e teu nome de usuário. Nessa página são exibidos todos os teus projetos. Procure o projeto que começa com teu nome de usuário e termina com ".github.io" e abra-o.

No contexto do GitHub, chamamos os projetos de repositórios. A pasta no computador, com os arquivos do projeto, é chamada de repositório local, enquanto a pasta no GitHub é o repositório remoto, pois está armazenada nos servidores do GitHub.

### Commits

Ao alterar um arquivo no vscode, a alteração é feita apenas no repositório local. Por exemplo, abra o arquivo "src/routes/+page.svelte". Esse arquivo é a página inicial do site. Altere o arquivo, como "Seja bem vindo", e "Sinta-se à vontade". Essa alteração foi feita apenas localmente. Para visualizar o resultado, abra o terminal teclando ctrl+j, e execute o comando "pnpm dev". O site será construído e implantado localmente. Observe que o endereço do site é localhost, ou seja, só funciona no computador local. Se tentarmos abrir esse endereço de outro computador, não conseguiremos acessar nosso site. Copie esse endereço e abra-o no navegador.

Aqui é o nosso site executando localmente. No entanto, ao acessar o site online, disponível de qualquer computador com acesso a internet, vamos perceber que ainda está a versão anterior. Abra o repositório remoto no github, pasta "src/routes/+page.svelte". Observe que aqui ainda está o conteúdo anterior. Enquanto que no repositório local já está o novo conteúdo.

Observe que o vscode destaca as linhas do arquivo que foram alteradas desde o último commit. Para visualizar todas as mudanças, podemos abrir a aba do git, clicando aqui ou teclando ctrl+shift+g. Em "Changes", são listados todos os arquivos alterados desde a última versão salva localmente, ou o último commit local. Nós chamamos de "commit" cada uma das novas versões que salvamos do projeto. Podemos clicar em cada um dos arquivos da lista de mudanças para visualizar suas mudanças. Como eu só alterei um arquivo, então aqui só mostra ele, como estava, desde o último commit, e como ficou após a mudança. Para salvar todas as mudanças, podemos clicar neste botão "Commit". O Git exige uma mensagem descritiva para cada commit. Se não colocarmos nenhuma mensagem e clicarmos no botão "Commit", na primeira vez abre essa janela perguntando se queremos fazer o "Commit", você pode clicar em "Always" se não quiser que essa janela apareça novamente. Mas então, como não colocamos nenhuma mensagem de commit, será solicitado para escrevermos alguma mensagem nesse arquivo aqui. Se fecharmos o arquivo sem colocarmos nenhuma mensagem, o commit é cancelado. Agora vamos clicar no botão "Commit", e quando abrir esse arquivo, vamos colocar a mensagem "atualizada página inicial", e fechar o arquivo, salvando ele. Então será salva a nova versão do projeto, que pode ser vista aqui em "Source Control Graph", onde são mostrados todos os commits, isto é, todas as versões salvas.

### Sync

Depois que fazemos o commit, o botão muda para "Sync changes". Isto porque os commits realizados em nosso computador (repositório local) não são enviados automaticamente para o GitHub (repositório remoto). E para enviar os commits locais para o repositório remoto, devemos clicar no botão "Sync changes". Esse botão sincroniza o repositório local com o repositório remoto através de duas operações: Primeiro, serão recebidos todos os commits do repositório remoto para o repositório local, que é a operação que chamamos de pull, que do inglês significa puxar, ou receber. E depois serão enviados todos os commits do repositório local para o repositório remoto, que é a operação de push, que do inglês significa empurrar, ou enviar.

A sincronização é bidirecional pois várias pessoas podem estar trabalhando no mesmo projeto, cada uma com seu próprio repositório local, mas todas compartilhando o mesmo repositório remoto. Assim, se alguém realizar um commit em seu repositório local e enviar esse commit pro repositório remoto, fazendo o push, você tem que receber esse commit do repositório remoto para teu repositório local, fazendo o pull.

Antes sincronizar, se voltarmos para o arquivo no repositório remoto, veremos que ainda está a versão anterior. Mas quando clicamos em "sync changes", na primeira vez abre essa janela perguntando se queremos fazer o pull e o push. Você pode clicar em "Ok, don't show again" se não quiser que essa janela apareça novamente. E agora o repositório local será sincronizado com o repositório remoto. Depois de finalizada a sincronização, observe que aqui em "source control graph" o repositório local recebe aquele commit feito no repositório remoto, quando criamos o arquivo deploy.yml. E podemos até abrir esse arquivo aqui no vscode. Esse arquivo deploy.yml configura o GitHub a implantar uma nova versão do site toda vez que receber um commit. Portanto, se abrirmos arquivo no repositório remoto e atualizar a página, aparecerá a nova versão. E se abrirmos o site online, veremos que a nova versão já estará disponível também.

### Clone

Agora vamos supor que já temos nosso projeto salvo no GitHub e queremos abri-lo em outro computador. Para demonstrar como fazer isso, vou fechar o projeto que está aberto no VS Code. (1) Acesse o repositório no GitHub, clique no botão "Code" e copie o link do repositório. (2) No vscode, tecle F1, digite "clone", selecione a opção "Git: clone", cole o link e tecle enter. (3) Escolha o local onde salvar o projeto no computador. Eu vou salvar na minha pasta pessoal pois na área de trabalho já tenho esse projeto. Na janela que abrir, clique em "Open".

Pronto, agora temos um novo repositório local do nosso projeto! Como acabamos de clonar o projeto, ele já está sincronizado com o repositório remoto. Mas a qualquer momento, podemos acessar a aba do github, clicando nesse ícone ou teclando ctrl+shift+g, clicar nesse ícone de três pontinhos, e selecionar a ação desejada, como commit, pull, push, entre outras. Também podemos teclar F1 e digitar a ação desejada, por exemplo, push, e selecionar a opção correspondente.

Para ilustrar mais uma vez o fluxo de trabalho com o git, vamos realizar uma nova alteração no projeto: (1) Na estrutura de arquivos do projeto, crie o arquivo `src/routes/sobre/+page.svelte` e adicione o conteúdo "sobre o meu site", incluindo também um link para voltar à página inicial. (2) Agora abra a página inicial e adicione um link "sobre" para navegar até a nova página. (3) Execute o site localmente, abrindo o terminal teclando ctrl+j, e executando o comando pnpm dev. (4) Quando o site local estiver em execução, abra-o no navegador e verifique se é possível navegar entre as páginas.

Observe que, ao acessar o site online, as alterações ainda não estão disponíveis. Para enviar as alterações ao repositório remoto: (1) Tecle F1, digite commit, selecione "Git: commit", escreva uma mensagem de commit, como "adicionada página sobre". (2) Feche o arquivo, salvando-o. (3) Tecle F1, digite "sync", e selecione "Git: Sync".

Após a sincronização, acesse o site online e atualize a página. Se as alterações ainda não aparecerem, pode ser que o processo de implantação ainda esteja em andamento. Quanto maior o site, mais tempo demora o processo de implantação. Podemos acompanhar o processo de implantação: (1) Acesse a página do projeto no github e clique na aba "Actions". (2) Aqui você verá todas as implantações realizadas. As finalizadas aparecem com um ícone verde, enquanto as em andamento têm um ícone amarelo. (3) Clique na implantação atual para obter mais informações, inclusive que ela já finalizou. Então se voltarmos ao site online, e atualizarmos a página, as alterações aparecerão, permitindo a navegação entre as páginas criadas.
