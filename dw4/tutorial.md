# Como publicar teu site construído com SvelteKit no GitHub Pages

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

Para instalar os programas, você pode acessar o site https://pedrosiqueira.github.io/ifmsjs/alg, capítulo "02 Preparando o ambiente de desenvolvimento". Ao executar esse comando no terminal, serão instalados o node, o git e o vscode. Se já tivermos pelo menos um desses programas instalados, não tem problema executar esse comando, ele vai atualizar esses programas para a versão mais recente, se for o caso.

Então copie esse comando clicando neste ícone no canto da direita, abra o terminal, que no windows, pode ser clicar no menu iniciar, digitar powershell e escolher a opção "Executar como administrador". É importante abrirmos o terminal no modo administrador, pois só assim conseguiremos instalar os programas. Nessa janela, confirme que quer abrir o terminal no modo administrativo. E quando abrir o terminal, verifique se na barra de títulos aparece "Administrador". Se não estiver aparecendo, feche o terminal e tente abrí-lo novamente como administrador, senão, a instalação dos programas não vai funcionar. Agora tecle ctrl+v para colar o comando copiado anteriormente, seguido por enter para executar o comando. A instalação do node, git e vscode começará, e saberemos que a instalação terminou quando a janela do terminal fechar. No meu caso a instalação foi bem rápido pois eu já tinha os programas instalados e atualizados para a mais recente versão.

Depois de instalarmos o node, git e vscode, vamos configurá-los para conseguir desenvolver nosso site e publicá-lo corretamente. Acesse o site https://pedrosiqueira.github.io/ifmsjs/dw4, capítulo "01 Preparando o ambiente", e copie esse comando, clicando neste ícone no canto direito. Agora podemos executar esse comando diretamente no terminal do vscode. Então clique no menu iniciar, e se o vscode não estiver aparecendo para você, digite code, e clique no vscode. Depois que o vscode abrir, tecle ctrl+j para abrir o terminal do vscode, ctrl+v para copiar o comando copiado anteriormente e enter para executar o comando.

Esse comando vai pedir teu nome de usuario do GitHub. É agora que você vai digitar aquele nome anotado anteriormente e o email usado para criar a conta.

Depois esse comando vai instalar algumas extensões no vscode para nos auxiliar a desenvolver nosso site com SvelteKit.

Esse comando também vai instalar o pnpm, um gerenciador de pacotes do nodejs. O nodejs vem por padrão com o npm, só que eu não gosto do npm por ser mais lento e mais pesado comparado ao pnpm. Mas o pnpm não vem instalado por padrão, então precisamos instalá-lo.

Por fim, o comando vai baixar na área de trabalho um projeto de exemplo para testar se está tudo funcionando conforme o esperado. Depois de baixar o projeto, o vscode vai abrí-lo, e se aparecer essa janela, clique em "Yes" para confirmar que confia no autor...

Para testar se está tudo funcionando conforme o esperado, execute o projeto teclando F5 e aguarde a finalização do processo de construção do site. Ótimo, depois que o site terminar de ser construído, saberemos que o site está sendo executado se na aba "debug console" ou na aba "terminal" estiver aparecendo esse endereço aqui. Teu site pode ser acessado nesse endereço aqui. Localhost indica que o site está sendo executado localmente, isto é, ele só pode ser acessado no teu computador. Também podemos saber que o site está em execução por conta dessa barrinha de execução, em que a qualquer momento você pode clicar neste ícone de "stop" para encerrar a execução do site. Para abrir o site, selecione esse endereço, copie teclando ctrl+c, abra o navegador, abra uma nova aba, e na barra de endereços, tecle ctrl+v seguido por enter. Se abrir essa página e você conseguir navegar pelas outras páginas do site, então está tudo funcionando conforme o esperado!

Muito bom, já temos nossa conta no github, já temos o node, o git e o vscode instalados, atendendo a todos os requisitos para desenvolver sites com SvelteKit e publicá-los no GitHub.

## 04 - SvelteKit e GitHub: Visão Geral sobre Git e GitHub

Nessa seção, vamos ver uma visão geral do funcionamento do git e do github. Nosso projeto nada mais é do que uma pasta onde contém todos os arquivos relacionados ao projeto. Podemos acessar a pasta do projeto no computador clicando com o botão direito do mouse nesse espaço vazio, e selecionando a opção "Reveal in file explorer". E aqui está a pasta do nosso projeto, com todos os seus arquivos. Observe que no endereço mostra que nosso projeto está salvo no desktop, ou seja, na área de trabalho do computador.

Como publicamos nosso projeto no GitHub, então os arquivos do projeto também estão disponíveis no GitHub. Para acessá-los, digite o endereço do site, https://github.com e teu nome de usuário. Ao teclar enter, todos os teus projetos salvos no github serão listados. Procure o projeto que começa com teu nome de usuário e termina com ".github.io" e abra-o.

No contexto do GitHub, chamamos os projetos de repositórios. Então chamamos de repositório local a essa pasta dentro do nosso computador onde estão os arquivos do nosso projeto. E a pasta no site do GitHub chamamos de repositório remoto, pois esses arquivos estão nos computadores da empresa GitHub.

Agora, se modificarmos algum arquivo do nosso projeto no vscode, estamos modificando dentro do nosso repositório local. Abra o arquivo "/src/routes/+page.svelte". Esse arquivo é a página inicial do nosso site. Se o modificarmos, por exemplo, "Seja bem vindo", e aqui "Sinta-se à vontade", essa alteração foi feita apenas localmente. Vamos executar nosso site local, teclando ctrl+j para abrir o terminal, e digitando o comando "pnpm run dev". Aqui ele vai construir nosso site e implantá-lo localmente. Observe que o endereço do site é localhost, ou seja, só funciona em nosso computador local. Se tentarmos acessar esse endereço de outro computador, veremos que não conseguiremos acessar nosso site. Copie esse endereço e cole em alguma aba do seu navegador. Aqui é o nosso site executando localmente. Mas se acessarmos o endereço remoto, disponível de qualquer computador com acesso a internet, vamos perceber que ainda está a versão anterior. Vamos abrir agora o repositório remoto no github para confirmar que a página inicial não foi alterada, pasta "src/routes/+page.svelte". Observe que aqui ainda está o conteúdo anterior. Enquanto que no repositório local já está o novo conteúdo.

Observe que o vscode destaca as linhas do arquivo que foram modificadas desde o último commit. Para visualizar todas as mudanças, podemos abrir a aba do git, teclando ctrl+shift+g. Em "Changes", são listados todos os arquivos alterados desde a última versão salva. Cada versão é chamada de "commit". Em "Source Control Graph" são mostrados todos os commits do projeto, isto é, todas as versões salvas.

