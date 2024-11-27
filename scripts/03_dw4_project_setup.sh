#!/bin/bash

# Configures Git user information by prompting for the GitHub username and email
read -p "Qual teu nome de usuário do GitHub? " username
read -p "Qual teu email do GitHub? " useremail
git config --global user.name "$username"
git config --global user.email "$useremail"

# Installs Visual Studio Code extensions
code --install-extension VisualStudioExptTeam.vscodeintellicode
code --install-extension dbaeumer.vscode-eslint
code --install-extension xabikos.JavaScriptSnippets
code --install-extension christian-kohler.npm-intellisense
code --install-extension christian-kohler.path-intellisense
code --install-extension svelte.svelte-vscode

# Installs pnpm globally
npm install -g pnpm

# Set the desktop path and clone the project
desktopPath=~/Desktop  # assumes the user's desktop is at ~/Desktop
cd "$desktopPath" || exit 1  # changes to the Desktop directory or exits if it fails

# Removes the existing 'dw4' project folder if it exists
rm -rf dw4

# Clones the project from GitHub and installs dependencies
git clone https://github.com/pedrosiqueira/dw4.git
cd dw4 || exit 1
pnpm install

# Opens the project in VS Code
code -r .
