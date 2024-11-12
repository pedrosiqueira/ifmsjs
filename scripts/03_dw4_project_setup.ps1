# habilita executar scripts npm e pnpm no terminal
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process -Force

# configura do git
$username= Read-Host "Qual seu nome de usuário do GitHub?"
$useremail= Read-Host "Qual seu email do GitHub?"
git config --global user.name $username
git config --global user.email $useremail

# instala extensões do vscode
code --install-extension VisualStudioExptTeam.vscodeintellicode
code --install-extension dbaeumer.vscode-eslint
code --install-extension xabikos.JavaScriptSnippets
code --install-extension christian-kohler.npm-intellisense
code --install-extension chrischristian-kohler.path-intellisense
code --install-extension svelte.svelte-vscode

# instala o pnpm
npm install -g pnpm

# baixa o projeto na área de trabalho, baixa suas dependências, e o abre no vscode
$desktopPath = [Environment]::GetFolderPath('Desktop') # obtém a pasta de área de trabalho
Set-Location -Path $desktopPath # abre a pasta de área de trabalho
Remove-Item -Path dw4 -Recurse -Force # exclui a pasta dw4
git clone https://github.com/pedrosiqueira/dw4.git # baixa a pasta dw4
Set-Location dw4 # abre a pasta dw4
pnpm install # baixa os pacotes do projeto
code -r . # abre o projeto pelo vscode
