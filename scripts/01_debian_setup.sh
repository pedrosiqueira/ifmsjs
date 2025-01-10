#!/bin/bash

# instalação do node, vscode e git, versão 2025-10-01

read -sp "Senha sudo: " sudopassword

# https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script 
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
export NVM_DIR="$HOME/.config/nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # Load nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # Load nvm bash_completion
nvm install --lts


# https://code.visualstudio.com/docs/setup/linux
wget -O vscode-linux.deb "https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64"
echo "$sudopassword" | sudo -S bash -c 'echo "debconf debconf/frontend select Noninteractive" | debconf-set-selections' # Preconfigure debconf to auto-accept the repository addition
echo $sudopassword | sudo -S dpkg -i ./vscode-linux.deb
rm vscode-linux.deb

echo $sudopassword | sudo -S apt install git -y

exit
