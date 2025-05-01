# exclui o conteúdo da pasta do usuário
Remove-Item -Path "C:\Users\aluno.PDC-ACADEMICO\*" -Recurse -Force

# define a política de execução de script desta sessão atual como RemoteSigned (permissão de executar scripts) sem solicitar confirmação (-Force)
Set-ExecutionPolicy RemoteSigned -Scope Process -Force;

# Caminho do arquivo zip e local de destino
$zipFilePath = "\\10.8.32.3\arquivos\Arquivos curso superior\tads-algoritmos\prova.zip"
$destinationPath = "C:\Users\aluno.PDC-ACADEMICO\Desktop"

# Cria a pasta de destino se ela não existir
if (!(Test-Path -Path $destinationPath)) {
    New-Item -ItemType Directory -Path $destinationPath
}

# Descompacta o arquivo zip no local de destino
Expand-Archive -Path "$zipFilePath" -DestinationPath "$destinationPath"

# configura do git
git config --global user.name aluno
git config --global user.email alunoemail

# instala extensões do vscode
code --install-extension VisualStudioExptTeam.vscodeintellicode
code --install-extension dbaeumer.vscode-eslint
code --install-extension xabikos.JavaScriptSnippets
code --install-extension christian-kohler.npm-intellisense
code --install-extension christian-kohler.path-intellisense
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

exit