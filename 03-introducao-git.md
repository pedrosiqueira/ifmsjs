# Introdução ao Git e ao GitHub

_(Antes de iniciar a aula, certifique-se de que o VSCode está maximizado e com nenhuma pasta aberta)._

Olá pessoal! Neste capítulo vamos aprender sobre duas ferramentas fundamentais para o desenvolvimento de software: Git e GitHub.

O Git é um sistema de controle de versões que rastreia mudanças no código-fonte, permitindo a colaboração simultânea de múltiplos desenvolvedores. Ele registra as alterações de forma organizada, mantendo um histórico de versões e possibilitando a restauração de versões anteriores quando necessário.

O GitHub é uma plataforma online de hospedagem de repositórios Git que amplia suas funcionalidades com uma interface intuitiva e ferramentas para colaboração, revisão de código, automação e gerenciamento de projetos. Além disso, funciona como uma rede social para desenvolvedores, facilitando o compartilhamento e a colaboração em projetos de código aberto.

Em resumo: Git é a tecnologia para controle de versão; GitHub é uma plataforma que utiliza Git e fornece ferramentas adicionais para colaboração e gerenciamento de projetos.

## Criando uma Conta no GitHub

Primeiramente, vamos criar uma conta no GitHub, ou acessá-la, se você já tiver uma. Acesse o site <https://github.com>. Se você já tem uma conta, pode clicar em "Sign in". Caso contrário, clique em "Sign up" para criar uma. Como eu já tenho minha conta, vou acessá-la agora. Depois de acessar ou criar sua conta, clique no ícone do teu usuário e anote o nome do usuário que aparecer.

Agora, abra um terminal, pode ser do próprio VSCode, e execute os seguintes comandos, substituindo `$username` e `$useremail` pelo teus respectivos nome de usuário e e-mail usados ao criar tua conta no GitHub:

(No meu caso, vou digitar `git config --global user.name PedroSiqueira` e `git config --global user.email pedro.siqueira@ifms.edu.br`, que são o nome de usuário e email da minha conta no GitHub)

Substitua `$username` pelo teu nome de usuário!

```bash
git config --global user.name $username
```

Substitua `$useremail` pelo teu e-mail de usuário!

```bash
git config --global user.email $useremail
```

## Publicando o Projeto no GitHub

Agora vamos publicar no GitHub o projeto criado no tutorial [Criando um projeto SvelteKit](https://pedrosiqueira.github.io/ifmsjs/sveltekit/0A%20Criando%20um%20projeto%20SvelteKit.html). No VSCode, primeiramente abra a pasta do projeto, que no meu caso está na área de trabalho, pasta meu-projeto-sveltekit, selecionar pasta. Com o projeto aberto no vscode, tecle F1, digite "publish" e selecione a opção "Publish to GitHub". A primeira vez que o VSCode tentar se conectar ao GitHub, ele pedirá para você se autenticar. Clique em "Allow". E dê permissão para o VSCode acessar tua conta no GitHub. De volta ao VSCode, selecione a opção "Publish to GitHub public repository". O VSCode agora publicará o projeto no GitHub. Se aparecer essa janela, selecione a opção de conectar no navegador e autorize o Git a publicar na tua conta GitHub. Depois que essa aba aparecer, você pode fechá-la e voltar ao VSCode. E aqui está a mensagem, teu projeto foi publicado com sucesso no GitHub! Clique em "Open on GitHub" para ver teu projeto no GitHub. Aqui está o projeto, com todos os arquivos hospedados no GitHub.

## Repositórios

Agora vamos dar uma visão geral do funcionamento do Git e do GitHub. Nosso projeto nada mais é do que uma pasta que contém todos os arquivos relacionados ao projeto. No contexto do Git, chamamos essa pasta de repositório. Se você clicar com o botão direito neste espaço vazio e selecionar "Reveal in file explorer", a pasta do projeto será aberta no explorador de arquivos. Observe que o projeto está na área de trabalho. Como também publicamos o projeto no GitHub, podemos acessá-lo através do endereço <https://github.com/teu_nome_de_usuario/nome_do_teu_projeto>. Ou seja, o GitHub funciona como uma espécie de "drive" para armazenar os arquivos do projeto na nuvem, permitindo que eles estejam acessíveis de qualquer lugar com internet. Para diferenciarmos, chamamos a pasta em nosso computador de repositório local, e a pasta no GitHub de repositório remoto.

## Commit

Toda vez que realizamos uma ou mais alterações no repositório local, salvamos essas mudanças como uma "nova versão" do projeto, chamada de **commit**. Por exemplo, abra o arquivo `src/routes/+page.svelte`, modifique a primeira linha para `<p>Bem vindo ao meu site SvelteKit! Saiba mais <a href="/sobre">aqui</a>.</p>` e adicione a linha `<p>Entre em contato <a href="/contato">aqui</a>.</p>`. Observe que o VSCode destaca as linhas alteradas desde o último commit e etiqueta o arquivo com a letra "M", de modificado, facilitando a identificação das mudanças.

Agora crie o arquivo `src/routes/contato/+page.svelte` com o seguinte código:

```html
<h1>Contato</h1>
Nome: <input><br>
E-mail: <input><br>
Mensagem:<br>
<textarea></textarea><br>
<button>Enviar</button><br>
<a href="/">Página inicial</a>
```

Observe que o VSCode etiqueta o arquivo com a letra "U", de untracked, indicando que esse é um novo arquivo.

Para visualizar essas alterações, abra a aba do GitHub, clicando neste ícone ou teclando Ctrl+Shift+G. (Clique em visualizar como árvore) Nessa aba, podemos ver todas as alterações realizadas desde o último commit. Se clicarmos em `src/routes/+page.svelte`, vemos a modificação realizada, como estava e como ficou. E se clicarmos em `src/routes/contato/+page.svelte`, vemos que este arquivo é novo.

Para salvar essa nova versão, clique em "Commit". Se abrir essa janela, você pode clicar em "Always" para que essa mensagem não apareça novamente. Sempre que realizamos um commit, o Git solicita uma breve descrição das alterações realizadas. Essa descrição é importante, pois o Git mantém um histórico completo de todas as versões do projeto, incluindo os detalhes de cada commit, e é bom termos uma descrição geral do que foi mudado de uma versão para outra. Escreva uma mensagem (adicionada página de contato) e tecle Ctrl+W para fechar esse arquivo, salvando em seguida.

## Sync = Push + Pull

Quando todas as alterações estão salvas (commited), o botão "Commit" é substituído por "Sync Changes". Esse botão sincroniza o repositório local com o repositório remoto, isto é, envia as alterações do repositório local para o repositório remoto no GitHub, e vice-versa. A sincronia é bidirecional, pois várias pessoas, cada uma com seu próprio repositório local, podem estar compartilhando o mesmo repositório remoto. Assim, se alguém fizer uma alteração no repositório remoto, essa alteração também poderá ser enviada ao repositório local de todos.

Abra o arquivo `src/routes/+page.svelte` no GitHub e verifique que ambos os arquivos ainda estão diferentes antes da sincronização. Agora, volte ao VSCode, aba do GitHub, clique em "Sync Changes" e confirme a sincronização. Pronto, agora as alterações que fizemos no repositório local foram enviadas para o repositório remoto. Volte para o arquivo no repositório remoto e atualize a página para ver a nova versão.

Quando **enviamos** algum commit do repositório local para o repositório remoto, dizemos que fizemos um **push**. E quando **recebemos** algum commit do repositório remoto para o repositório local, dizemos que fizemos um **pull**.

## Clone

Podemos abrir qualquer repositório hospedado no GitHub em nosso computador através da operação conhecida como **clone**. Basta ter em mãos o endereço do repositório, que pode ser encontrado na página inicial do projeto no GitHub, clicando no botão "Code". Aqui está o endereço do repositório para ser clonado. Copie-o clicando neste ícone.

Para simular essa operação, vamos supor que ainda não temos o repositório baixado neste computador. Abra outra janela do VSCode clicando no menu "Arquivo" e depois em "Nova Janela". Observe que na aba do Explorador não há nenhuma pasta aberta. Tecle F1, digite "clone" e escolha a opção "Git: Clone". Cole aqui o endereço do repositório a ser clonado. Ou, se você quiser clonar um repositório da sua própria conta sem precisar colar nenhum link, pode clicar em "Clone from GitHub", que listará todos os repositórios que você tem acesso, onde você poderá escolher qual clonar. Tecle Enter para selecionar o repositório e escolha um local em teu computador onde deseja salvá-lo. Como eu já tenho o mesmo repositório salvo na área de trabalho, vou escolher a pasta Documentos para salvar o repositório. Clique em "Select as Repository Destination". O VSCode baixará o repositório e perguntará se você quer abri-lo. Confirme clicando em "Open".

Agora vou abrir as duas janelas do VSCode, onde a de cima se refere ao repositório salvo na área de trabalho, e a de baixo se refere ao repositório salvo em Documentos. Se você alterar o arquivo `src/routes/+page.svelte` do projeto de cima, o VSCode detectará a mudança (coloque um título bem vindo ao meu site e modifique o parágrafo para sinta-se à vontade). Agora você pode acessar a aba do GitHub, clicar no botão "Commit", escrever uma mensagem de commit (página inicial alterada), fechar o arquivo de commit, e clicar em "Sync Changes" para enviar esse commit para o repositório remoto.

Observe que o repositório da janela de baixo não é sincronizado automaticamente com o repositório remoto. Para receber o commit do repositório remoto no repositório da janela de baixo, você pode teclar F1, digitar "pull", e selecionar "Git: Pull", pois você só quer receber. Observe que agora o repositório de baixo é atualizado com o último commit do repositório remoto.

Então é isso, agora você já sabe como criar um projeto, salvá-lo no GitHub, cloná-lo em outro computador, e manter o projeto sincronizado entre vários computadores!
