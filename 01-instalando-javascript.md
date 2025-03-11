# Preparando o Ambiente de Desenvolvimento

## Introdução

Olá, pessoal! Neste curso, aprenderemos a desenvolver software utilizando a linguagem de programação JavaScript. O JavaScript é uma linguagem moderna, versátil e poderosa. É uma das linguagens mais utilizadas atualmente, podendo ser empregada no desenvolvimento de diversos tipos de software, como aplicativos web, móveis e desktop.

Nosso foco neste curso será o desenvolvimento de aplicativos web, onde o JavaScript pode ser utilizado tanto no lado do cliente (navegadores web) quanto no lado do servidor (Node.js).

Para acompanhar essa aula, acesse o site <https://pedrosiqueira.github.io/ifmsjs>, página "Algoritmos", capítulo 2: Preparando o ambiente de desenvolvimento.

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
