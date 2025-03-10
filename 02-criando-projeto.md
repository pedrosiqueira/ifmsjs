# Criando um Projeto SvelteKit

_(Antes de iniciar a aula, certifique-se de que o VSCode está com o tema claro)._

## Introdução

Olá, pessoal! Neste capítulo, vamos aprender a criar e configurar um projeto SvelteKit do zero. Antes de começar, é importante que seu ambiente de desenvolvimento JavaScript já esteja configurado, conforme abordado no capítulo anterior.  

O SvelteKit é um framework para desenvolvimento de aplicativos web que utiliza exclusivamente HTML, CSS e JavaScript, proporcionando uma abordagem simples e eficiente para a construção de aplicativos modernos, robustos e de alto desempenho.

Para acompanhar essa aula, acesse o site <https://pedrosiqueira.github.io/ifmsjs>, página "SvelteKit", capítulo 1: Preparando o ambiente de desenvolvimento.

Abra o terminal na pasta onde quer criar o projeto. No meu caso, vou criar o projeto na área de trabalho. Para isso, no windows, vou abrir o explorador de arquivos, acessar a área de trabalho, clicar em "Arquivo" e em "Abrir o powershell". Você sabe que o terminal está aberto na área de trabalho se estiver aparecendo o caminho para a área de trabalho como está aqui, desktop é a área de trabalho.

Como vamos desenvolver nosso projeto com o vscode, vamos instalar algumas extensões no vscode para nos auxiliar no desenvolvimento. Execute os seguintes comandos:

```sh
code --install-extension VisualStudioExptTeam.vscodeintellicode
code --install-extension dbaeumer.vscode-eslint
code --install-extension xabikos.JavaScriptSnippets
code --install-extension christian-kohler.npm-intellisense
code --install-extension christian-kohler.path-intellisense
code --install-extension svelte.svelte-vscode
```

Clicando aqui no ícone de copiar, e teclando ctrl+v e enter no terminal.

Conforme as instruções na documentação do [Svelte](https://svelte.dev/docs/kit/creating-a-project), que podemos acessar através desse link, para criar um projeto SvelteKit, podemos usar npm, que é o gerenciador de pacotes padrão do Node. Mas eu pessoalmente prefiro o gerenciador de pacotes [pnpm](https://pnpm.io/), por ser mais ágil e ocupar menos espaço que o npm. Os comandos do pnpm, se não idênticos, são similares aos do npm. Para saber mais sobre as diferenças entre os comandos do pnpm e npm, [clique aqui](https://dev.to/equiman/npm-vs-yarn-vs-pnpm-commands-cheatsheet-3el8"). Para instalar o pnpm, execute `npm install -g pnpm`.

Se no PowerShell e aparecer a mensagem de erro "A execução de scripts foi desabilitada neste sistema", é porque, por padrão, o Windows bloqueia a execução de scripts por motivos de segurança. Execute `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser` para habilitar a execução de scripts, teclando A e Enter para confirmar. E então execute `npm install -g pnpm` para instalar o pnpm. No terminal, você pode navegar entre os comandos já executados usando as teclas direcionais para cima e para baixo.

Com o pnpm instalado, execute os seguintes comandos para criar um projeto SvelteKit:

```sh
pnpm dlx sv create meu-projeto-sveltekit
cd meu-projeto-sveltekit
pnpm install
code -r .
```

Basta copiar clicando aqui no ícone e colar no terminal teclando ctrl+v.

Agora ele vai perguntar algumas informações do projeto SvelteKit que estamos criando. Em “template”, selecione “SvelteKit minimal”. Em “type checking”, selecione “No”. Em “add”, selecione, com a tecla espaço, as opções “prettier” e “eslint”, em seguida, tecle Enter. Em “package manager”, selecione “pnpm”. Agora ele vai criar o projeto "meu-projeto-sveltekit" na área de trabalho, instalar os pacotes que o projeto utiliza e abrir o projeto no vscode. Se aparecer uma janela de confirmação, clique na caixa de seleção e em "Sim" para confiar nas pastas da área de trabalho.

## O arquivo package.json

Todo projeto criado com npm (ou pnpm) vem com o arquivo `package.json`, que contém propriedades do projeto, como nome, versão, descrição e os pacotes dos quais ele depende para ser executado. Observe que nosso projeto SvelteKit vem, obviamente, com alguns pacotes do svelte, bem como com os seguintes pacotes:

- ESLint - Uma ferramenta de análise estática para JavaScript e TypeScript que ajuda a encontrar e corrigir problemas no código. Ele é amplamente usado para garantir qualidade, padronização e evitar erros comuns.
- Prettier - Um formatador de código automático para JavaScript, TypeScript, HTML, CSS, JSON e outras linguagens. Ele é usado para garantir que o código siga um estilo consistente, eliminando a necessidade de ajustes manuais.

A propriedade "script" do package.json define atalhos para comandos que podem ser executados no projeto usando `pnpm run <nome_do_script>`. Os [principais comando](https://svelte.dev/docs/kit/cli#svelte-kit-sync) em um projeto SvelteKit são:

- `pnpm run dev` - Executa o projeto no modo **desenvolvimento**. Possui o recurso "hot reload" que é a capacidade de atualizar automaticamente as mudanças no código sem precisar reiniciar o servidor. Além disso, fornece mensagens de erro mais detalhadas para facilitar a depuração.
- `pnpm run build` - Compila o projeto para **produção**. Esse comando procura por erros e gera a pasta `build` com os arquivos otimizados e minimizados. Essa pasta contém a versão final do projeto, que será publicada em um servidor de produção real, onde será acessado pelos usuários finais.
- `pnpm run preview` - Executa o projeto compilado na pasta `build`, simulando o comportamento em um ambiente de produção.
- `pnpm run format` - Formata o código automaticamente com Prettier, corrigindo espaçamentos e estilo.
- `pnpm run lint` - Procura por inconsistências, erros e sugestões no código.

Execute `pnpm run dev` para iniciar teu projeto em modo desenvolvimento. Depois que ele terminar de ser carregado, aparecerá o link http://localhost:5173, que você pode copiar e colar no navegador web para ver teu site em funcionamento. Aqui está, essa é a página inicial de um site recém-criado com o SvelteKit!

Para encerrar a execução do site, você pode voltar ao terminal e teclar Ctrl+C. Agora se você voltar ao navegador e atualizar a página, verá que o site está fora do ar.

Se você quiser executar o site simplesmente teclando F5, sem precisar de digitar nada no terminal, crie o arquivo `.vscode/launch.json` com o seguinte código:

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

Pode fechar o arquivo teclando Ctrl+W, e salvando-o. Agora tecle F5, e quando o site estiver rodando, volte ao navegador e atualize a página localhost:5173 para acessá-lo novamente.

## Estrutura do projeto

Inicialmente um projeto SvelteKit já vem com uma estrutura básica configurada, contendo diversos arquivos essenciais. A [documentação oficial](https://svelte.dev/docs/kit/project-structure) detalha a organização dessas pastas e arquivos.

Mas o que importa para nós é a pasta `src`, que significa "source", ou "código-fonte". É nela onde reside, adivinhe só, todo o código-fonte do nosso aplicativo. Dentro dela ficam duas pastas:

- A pasta routes - onde ficam as páginas do site.
- A pasta `lib`, de library, ou biblioteca, onde ficam códigos utilitários ou componentes genéricos que as páginas em routes podem utilizar.

Além da pasta routes, também temos a pasta `static`, onde residem arquivos estáticos como como imagens, fontes e estilos CSS.

## Navegando entre as páginas

Dentro da pasta routes, há o arquivo `+page.svelte`, que é a página inicial do site. Abra esse arquivo e modifique para o seguinte conteúdo:

```html
<p>Bem vindo ao meu site! Saiba mais <a href="/sobre">clicando aqui</a>.</p>
```

Aqui, colocamos um link para a página "sobre", que ainda não existe. Crie essa página clicando com o botão direito em routes, novo arquivo, e digitando `sobre/+page.svelte`. Observe que foi criado o arquivo `+page.svelte` dentro da pasta `sobre`. Coloque o seguinte conteúdo neste arquivo:

```html
<p>Aprendendo SvelteKit. <a href="/">Clique aqui</a> para voltar à página inicial.</p>´
```

Observe que no sistema de navegação de páginas do SvelteKit, a barra representa a página inicial, e "/sobre" corresponde à página sobre. Cada pasta dentro de routes deve ter um arquivo +page.svelte, que representa a página que será aberta ao acessar o caminho daquela pasta no navegador. Isso mesmo, no SvelteKit, as páginas não possuem a extensão `.html`, mas sim a extensão `.svelte`.

Volte ao navegador e verifique se consegue navegar entre as duas páginas do teu site.

## O arquivo src/app.html

Você pode estar se perguntando: onde estão os elementos `<html>`, `<head>` e `<body>` que normalmente compõem uma página? Na verdade, esses elementos nem podem estar presentes nos arquivos `.svelte`, pois todas as páginas utilizam como base o template definido no arquivo `app.html`, dentro da pasta `src`. É nesse arquivo que os elementos `<html>`, `<head>` e `<body>` são estruturados, servindo de modelo para todas as páginas do projeto.