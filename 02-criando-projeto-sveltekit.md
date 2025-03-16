# Criando um Projeto SvelteKit

_(Antes de iniciar a aula, certifique-se de que o VSCode está maximizado e com o tema claro)._

## Introdução

Olá, pessoal! Neste tutorial, vamos aprender a criar e configurar um projeto SvelteKit do zero. Antes de começar, é importante que teu ambiente de desenvolvimento JavaScript já esteja configurado, conforme abordado no tutorial [Instalando o ambiente de desenvolvimento javascript](https://pedrosiqueira.github.io/ifmsjs/alg/02%20Preparando%20o%20ambiente%20de%20desenvolvimento.html#instalando).

O SvelteKit é um framework para desenvolvimento de aplicativos web que utiliza exclusivamente HTML, CSS e JavaScript. Ele proporciona uma abordagem simples e eficiente para a construção de aplicativos modernos, robustos e de alto desempenho.

Para acompanhar essa aula, acesse o site <https://pedrosiqueira.github.io/ifmsjs/sveltekit>, capítulo 0A: Criando um projeto SvelteKit.

## Preparando o Ambiente

Abra o terminal na pasta onde deseja criar o projeto. No meu caso, vou criar o projeto na área de trabalho. Para isso, no Windows, abra o Explorador de Arquivos, acesse a Área de Trabalho, clique em "Arquivo" e selecione "Abrir o PowerShell". O terminal deve indicar que está aberto na área de trabalho, mostrando o caminho para a área de trabalho, que é o Desktop.

Como utilizaremos o VSCode para desenvolver nosso projeto, vamos instalar algumas extensões que nos auxiliarão no desenvolvimento. Execute os seguintes comandos no terminal:

```sh
code --install-extension VisualStudioExptTeam.vscodeintellicode
code --install-extension dbaeumer.vscode-eslint
code --install-extension xabikos.JavaScriptSnippets
code --install-extension christian-kohler.npm-intellisense
code --install-extension christian-kohler.path-intellisense
code --install-extension svelte.svelte-vscode
```

Copie os comandos clicando neste ícone, cole no terminal teclando Ctrl+V e tecle Enter.

## Criando o Projeto do Zero

Conforme as instruções na documentação do [Svelte](https://svelte.dev/docs/kit/creating-a-project), que podemos acessar através desse link, para criar um projeto SvelteKit, podemos usar npm, que é o gerenciador de pacotes padrão do Node. Mas eu pessoalmente prefiro o gerenciador de pacotes [pnpm](https://pnpm.io/) por ser mais ágil e ocupar menos espaço que o npm. Os comandos do pnpm, se não idênticos, são similares aos do npm. Para saber mais sobre as diferenças entre os comandos do pnpm e npm, você pode clicar [neste link](https://dev.to/equiman/npm-vs-yarn-vs-pnpm-commands-cheatsheet-3el8). Para instalar o pnpm, execute `npm install -g pnpm`.

Se no PowerShell aparecer a mensagem de erro "A execução de scripts foi desabilitada neste sistema", é porque, por padrão, o Windows bloqueia a execução de scripts por motivos de segurança. Execute `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser` para habilitar a execução de scripts. Tecle "A" e Enter para confirmar. Em seguida, execute `npm install -g pnpm` para instalar o pnpm. No terminal, você pode navegar entre os comandos já executados usando as teclas direcionais para cima e para baixo.

Com o pnpm instalado, execute os seguintes comandos para criar um projeto SvelteKit:

```sh
pnpm dlx sv create meu-projeto-sveltekit
cd meu-projeto-sveltekit
pnpm install
code -r .
```

Copie os comandos clicando neste ícone, cole no terminal teclando Ctrl+V e tecle Enter.

Agora ele vai perguntar algumas informações sobre o projeto SvelteKit que estamos criando. Em “template”, selecione “SvelteKit minimal”. Em “type checking”, selecione “No”. Em “add”, selecione, com a tecla espaço, as opções “prettier” e “eslint”. Em seguida, pressione Enter. Em “package manager”, selecione “pnpm”. A pasta "meu-projeto-sveltekit" será criada na área de trabalho, os pacotes necessários serão instalados e o projeto será aberto no VSCode. Se aparecer uma janela de confirmação, clique na caixa de seleção e em "Sim" para confiar nas pastas da área de trabalho.

## O arquivo package.json

Todo projeto criado com npm (ou pnpm) inclui o arquivo `package.json`, que contém propriedades do projeto, como nome, versão, descrição e os pacotes dos quais ele depende para ser executado. Nosso projeto SvelteKit inclui, obviamente, alguns pacotes do Svelte, além dos seguintes pacotes:

- **ESLint**: Uma ferramenta de análise estática para JavaScript e TypeScript que ajuda a encontrar e corrigir problemas no código. Ela é amplamente usada para garantir qualidade, padronização e evitar erros comuns.
- **Prettier**: Um formatador de código automático para JavaScript, TypeScript, HTML, CSS, JSON e outras linguagens. Ele é usado para garantir que o código siga um estilo consistente, eliminando a necessidade de ajustes manuais.

A propriedade "scripts" do `package.json` define atalhos para comandos que podem ser executados no projeto usando `pnpm run <nome_do_script>`. Os [principais comando](https://svelte.dev/docs/kit/cli#svelte-kit-sync) em um projeto SvelteKit são:

- **`pnpm run dev`**: Executa o projeto no modo **desenvolvimento**. Possui o recurso "hot reload", que atualiza automaticamente as mudanças no código sem precisar reiniciar o servidor. Além disso, fornece mensagens de erro mais detalhadas para facilitar a depuração.
- **`pnpm run build`**: Compila o projeto para **produção**. Esse comando procura por erros e gera a pasta `build` com os arquivos otimizados e minimizados. Essa pasta contém a versão final do projeto, que será publicada em um servidor de produção real, onde será acessada pelos usuários finais.
- **`pnpm run preview`**: Executa o projeto compilado na pasta `build`, simulando o comportamento em um ambiente de produção.
- **`pnpm run format`**: Formata o código automaticamente com Prettier, corrigindo espaçamentos e estilo.
- **`pnpm run lint`**: Procura por inconsistências, erros e sugestões no código.

Além desses comandos definidos no arquivo package.json, também há outros comandos, como o `pnpm install`, que instala os pacotes necessários do projeto. Esse comando deve ser executado sempre que um novo pacote for adicionado ao projeto ou quando o repositório for clonado em uma nova máquina, garantindo que todas as dependências especificadas no package.json sejam corretamente instaladas.

Abra o terminal no vscode, teclando Ctrl+j. Execute `pnpm run dev` para iniciar o projeto em modo desenvolvimento. Depois que ele terminar de carregar, aparecerá o link `http://localhost:5173`, que você pode copiar e colar no navegador web para ver o site em funcionamento. Aqui está, a página inicial de um site recém-criado com o SvelteKit!

Para encerrar a execução do site, você pode voltar ao terminal e teclar Ctrl+C. Agora, se você voltar ao navegador e atualizar a página, verá que o site estará fora do ar.

Se quiser executar o site simplesmente teclando F5, sem precisar digitar nada no terminal, crie o arquivo `.vscode/launch.json` com o seguinte código:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Run development server",
            "request": "launch",
            "command": "pnpm run dev",
            "type": "node-terminal"
        }
    ]
}
```

Feche o arquivo pressionando Ctrl+W e salve-o. Agora, tecle F5 e, quando o site estiver rodando, volte ao navegador e atualize a página `localhost:5173` para acessá-lo novamente.

## Estrutura do Projeto

Inicialmente, um projeto SvelteKit já vem com uma estrutura básica configurada, contendo diversos arquivos essenciais. A [documentação oficial](https://svelte.dev/docs/kit/project-structure) detalha a organização dessas pastas e arquivos.

Mas o que importa para nós é a pasta `src`, que significa "source" ou "código-fonte". É nela que reside, adivinhe só, todo o código-fonte do nosso aplicativo. Dentro dela, encontram-se duas pastas principais:

- A pasta `routes` - onde ficam as páginas web do site.
- A pasta `lib`, de library, ou biblioteca, onde ficam códigos utilitários ou componentes genéricos que as páginas em `routes` podem utilizar.

Além da pasta `src`, também temos a pasta `static`, onde residem arquivos estáticos, como imagens, fontes e estilos CSS.

Já a pasta `node_modules` contém os pacotes dos quais o projeto depende. Essa pasta é gerenciada automaticamente pelo pnpm, e não devemos mexer nela.

## Navegando Entre as Páginas

Dentro da pasta `routes`, há o arquivo `+page.svelte`, que é a página inicial do site. Abra esse arquivo e modifique-o para o seguinte conteúdo:

```html
<p>Bem-vindo ao meu site! Saiba mais <a href="/sobre">clicando aqui</a>.</p>
```

Aqui, colocamos um link para a página "sobre", que ainda não existe. Crie essa página clicando com o botão direito em `routes`, selecione "Novo Arquivo" e digite `sobre/+page.svelte`. Observe que foi criado o arquivo `+page.svelte` dentro da pasta `sobre`. Coloque o seguinte conteúdo neste arquivo:

```html
<p>Aprendendo SvelteKit. <a href="/">Clique aqui</a> para voltar à página inicial.</p>
```

Observe que no sistema de navegação de páginas do SvelteKit, a barra (`/`) representa a página inicial, e `/sobre` corresponde à página "sobre". Normalmente, cada pasta dentro de `routes` contém um arquivo `+page.svelte`, que representa a página que será aberta ao acessar o caminho daquela pasta no navegador. Isso mesmo, no SvelteKit, as páginas não possuem a extensão `.html`, mas sim a extensão `.svelte`.

Volte ao navegador e verifique se consegue navegar entre as duas páginas do site.

## O Arquivo src/app.html

Você pode estar se perguntando: onde estão os elementos `<html>`, `<head>` e `<body>` que normalmente compõem uma página? É que, no SvelteKit, a estrutura da página é organizada de maneira diferente para otimizar o desenvolvimento e garantir uma experiência mais flexível. Em vez de definir os elementos `<html>`, `<head>` e `<body>` em cada arquivo de página `.svelte`, o SvelteKit utiliza um template único, o `app.html`, localizado na pasta `src`.

O `app.html` serve como o esqueleto base para todas as páginas do site. Nele, estão definidos os elementos `<html>`, `<head>` e `<body>`. Dessa forma, o SvelteKit centraliza o gerenciamento dessas partes da página e permite que você se concentre apenas no conteúdo e na lógica específica de cada página.

Assim, ao invés de repetir a estrutura básica em cada arquivo de página, o SvelteKit garante que todo o site siga um padrão consistente, enquanto você tem flexibilidade para personalizar o conteúdo dentro da área do `<body>` por meio dos arquivos `.svelte`. Isso também facilita a inclusão de meta tags, títulos e links globais no `<head>`, como o título da página ou folhas de estilo, de forma centralizada.

## Conclusão

Assim encerramos o tutorial de criação e configuração de um projeto SvelteKit do zero. Até o próximo vídeo!