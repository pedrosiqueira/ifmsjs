Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser # dá permissão de execução ao npm
$desktopPath = [Environment]::GetFolderPath('Desktop') # define a pasta de área de trabalho
Set-Location -Path $desktopPath # abre a pasta de área de trabalho
Remove-Item -Path dw4 -Recurse -Force # exclui a pasta dw4
git clone https://github.com/pedrosiqueira/dw4.git # baixa a pasta dw4
cd dw4 # abre a pasta dw4
npm install # baixa os pacotes do projeto
code --install-extension svelte.svelte-vscode # instala a extensão do svelte
code -r . # abre o projeto pelo vscode