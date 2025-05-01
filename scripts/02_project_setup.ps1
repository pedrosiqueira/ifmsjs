param (
    [string]$projectName,
    [string]$username,
    [string]$useremail,
    [switch]$help
)

# Function to display help message
function Show-Help {
    Write-Output @"
Usage: 02_project_setup.ps1 [OPTIONS]

Options:
  -projectName Project name to clone
  -username    GitHub username
  -useremail   GitHub email
  -help        Show this help message and exit
"@
    exit
}

# Show help if requested
if ($help) {
    Show-Help
}

# Prompt for missing parameters
if (-not $projectName) {
    $projectName = Read-Host "Qual o nome do projeto?"
}

if (-not $username) {
    $defaultUsername = git config --global user.name
    $username = Read-Host "Qual teu nome de usuário do GitHub? ($defaultUsername)"
    $username = if ($username) { $username } else { $defaultUsername }
}

if (-not $useremail) {
    $defaultUseremail = git config --global user.email
    $useremail = Read-Host "Qual teu email do GitHub? ($defaultUseremail)"
    $useremail = if ($useremail) { $useremail } else { $defaultUseremail }
}

Write-Output "Configuring Git with username: $username and email: $useremail..."
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
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

Write-Output "Installing pnpm..."
npm install -g pnpm

$desktopPath = [Environment]::GetFolderPath('Desktop')  # Get Desktop path
Write-Output "Navigating to Desktop directory: $desktopPath"
Set-Location $desktopPath

Write-Output "Removing existing project folder if exists..."
Remove-Item $projectName -Recurse -Force -ErrorAction SilentlyContinue

Write-Output "Cloning project '$projectName' from GitHub..."
git clone "https://github.com/pedrosiqueira/$projectName.git"

Set-Location $projectName  # Navigate to the project folder
Write-Output "Installing project dependencies with pnpm..."
pnpm install

Write-Output "Opening the project in VSCode..."
code -r .
