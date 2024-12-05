# Como publicar teu projeto SvelteKit no GitHub Pages

O SvelteKit possui uma ferramenta [Static Site Generator (SSG)](https://svelte.dev/docs/kit/adapter-static), conhecida como adaptador estático, que constrói uma versão estática do teu site. Sites estáticos, apesar de mais simples, têm a vantagem de não precisar de um servidor de back-end processando as requisições. Entretanto, funcionalidades dinâmicas precisam ser implementadas via JavaScript no front-end, o que não é ideal para projetos que exigem muitas interações dinâmicas com o servidor (como painéis de controle ou sistemas de login complexos). Os SSGs são excelentes para blogs, portfólios, documentações e outros projetos que não exigem muitas operações dinâmicas no back-end.

O [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) é uma solução ideal para hospedar sites estáticos pequenos ou médios de forma gratuita. Ele suporta integração direta com repositórios do GitHub, permitindo que o deploy de novas versões do site seja feito automaticamente sempre que houver alterações no repositório.

Neste tutorial vamos criar um site estático com SvelteKit, e publicá-lo na Internet com o GitHub Pages.

## Criação do projeto

1. Execute no terminal:

    ```
    $username = Read-Host "Qual teu nome de usuário do GitHub?"
    $useremail = Read-Host "Qual teu email do GitHub?"
    git config --global user.name $username
    git config --global user.email $useremail
    pnpm dlx sv create $username".github.io"
    cd $username".github.io"
    pnpm add --save-dev @sveltejs/adapter-static
    code -r .
    ```

2. Quando solicitado, informe teu nome de usuário e email do GitHub.

3. Quando solicitado, escolha as seguintes opções de criação do Svelte:

    ```
    ┌  Welcome to the Svelte CLI! (v0.5.7)
    │
    ◇  Which template would you like?
    │  SvelteKit minimal
    │
    ◇  Add type checking with Typescript?
    │  No
    │
    ◆  Project created
    │
    ◇  What would you like to add to your project?
    │  prettier, eslint
    │
    ◇  Which package manager do you want to install dependencies with?
    │  pnpm
    ```

## Configuração local do projeto com GitHub Pages

1. Altere o adaptador no arquivo `svelte.config.js`:

    ```js
    import adapter from '@sveltejs/adapter-static';

    export default {
        kit: {
            adapter: adapter({
                // default options are shown. On some platforms
                // these options are set automatically — see below
                pages: 'build',
                assets: 'build',
                fallback: undefined,
                precompress: false,
                strict: true
            })
        }
    };
    ```

2. Adicione a opção `prerender` no arquivo `src/routes/+layout.js`:

    ```js
    // This can be false if you're using a fallback (i.e. SPA mode)
    export const prerender = true;
    ```

3. Crie um workflow de implantação automática no arquivo `.github/workflows/deploy.yml`:

    ```yml
    name: Deploy to GitHub Pages
    
    on:
      push:
        branches: ["main"]
    
    jobs:
      build_site:
        runs-on: ubuntu-latest
        steps:
          - name: Checkout
            uses: actions/checkout@v4
    
          - name: Install pnpm
            uses: pnpm/action-setup@v3
            with:
              version: 9
    
          - name: Install Node.js
            uses: actions/setup-node@v4
            with:
              node-version: 23
              cache: pnpm
    
          - name: Install dependencies
            run: pnpm install
    
          - name: build
            env:
              BASE_PATH: "/${{ github.event.repository.name }}"
            run: |
              npm run build
    
          - name: Upload Artifacts
            uses: actions/upload-pages-artifact@v3
            with:
              # this should match the `pages` option in your adapter-static options
              path: "build/"
    
      deploy:
        needs: build_site
        runs-on: ubuntu-latest
        permissions:
          pages: write
          id-token: write
    
        environment:
          name: github-pages
          url: ${{ steps.deployment.outputs.page_url }}
    
        steps:
          - name: Deploy
            id: deployment
            uses: actions/deploy-pages@v4
    ```

4. Publique teu site no GitHub! No VSCode, tecle F1, digite "publish", selecione as opções "Publish to GitHub" → "Publish to GitHub public repository".

## Configuração remota do projeto com GitHub Pages

1. Acesse o site https://github.com/UserName/UserName.github.io/settings/pages, substituindo `UserName` pelo teu nome de usuário do GitHub.
2. Em "Build and deployment" → "Source", selecione "GitHub Actions"

Tudo pronto! Toda vez que você fizer o "push" no repositório remoto, teu projeto será implantado (deployed) no GitHub Pages!

Para ver os workflows de implantação executados, acesse https://github.com/UserName/UserName.github.io/actions, substituindo `UserName` pelo teu nome de usuário do GitHub.

Para ver teu site online, acesse https://UserName.github.io, substituindo `UserName` pelo teu nome de usuário do GitHub.