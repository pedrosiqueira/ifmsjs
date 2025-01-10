# Function to display help message
function Show-Help {
    Write-Output "Usage: script.ps1 [OPTIONS]"
    Write-Output ""
    Write-Output "Options:"
    Write-Output "  --username USERNAME       GitHub username"
    Write-Output "  --useremail EMAIL         GitHub email"
    Write-Output "  --project PROJECT_NAME    Project name to clone"
    Write-Output "  --help                    Show this help message and exit"
    exit
}

param (
    [string]$username,
    [string]$useremail,
    [string]$projectName
)

# Conditionally read input if parameters are not provided
if (-not $username) {
    $username = Read-Host "Qual teu nome de usuário do GitHub?"
}

if (-not $useremail) {
    $useremail = Read-Host "Qual teu email do GitHub?"
}

if (-not $projectName) {
    $projectName = Read-Host "Qual o nome do projeto?"
}

Write-Output "Configuring Git..."
git config --global user.name $username
git config --global user.email $useremail

Write-Output "Installing VSCode extensions..."
code --install-extension VisualStudioExptTeam.vscodeintellicode
code --install-extension dbaeumer.vscode-eslint
code --install-extension xabikos.JavaScriptSnippets
code --install-extension christian-kohler.npm-intellisense
code --install-extension christian-kohler.path-intellisense
code --install-extension svelte.svelte-vscode

Write-Output "Setting execution policy for scripts..."
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process -Force

Write-Output "Installing pnpm..."
npm install -g pnpm

$desktopPath = [Environment]::GetFolderPath('Desktop')  # Get Desktop path
Write-Output "Working in Desktop directory: $desktopPath"
Set-Location $desktopPath  # Navigate to Desktop

Write-Output "Removing existing project folder if exists..."
Remove-Item $projectName -Recurse -Force -ErrorAction SilentlyContinue

Write-Output "Cloning project '$projectName'..."
git clone "https://github.com/pedrosiqueira/$projectName.git"

Set-Location $projectName  # Enter the project folder
Write-Output "Installing project dependencies with pnpm..."
pnpm install

Write-Output "Opening the project in VSCode..."
code -r .
