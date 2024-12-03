1. Siga o que está em https://docs.github.com/en/pages/quickstart, até o passo "5 Click Create repository". Do 6 em diante faremos mais tarde.
2. Execute no terminal:

    ```
    $username = Read-Host "Qual teu nome de usuário do GitHub?"
    $useremail = Read-Host "Qual teu email do GitHub?"
    git config --global user.name $username
    git config --global user.email $useremail
    pnpm dlx sv create $username.github.io
    cd $username.github.io
    pnpm install
    code -r .
    ```