#!/bin/bash

# desinstalação do node, vscode e git, versão 2025-02-27

read -sp "Senha sudo: " sudopassword

# https://github.com/nvm-sh/nvm?tab=readme-ov-file#uninstalling--removal
nvm_dir="${NVM_DIR:-~/.nvm}"
nvm unload
rm -rf "$nvm_dir"
sed -i '/^export NVM_DIR="\$HOME\/.config\/nvm"/d' ~/.bashrc
sed -i '/^\[ -s "\$NVM_DIR\/nvm.sh" \]/d' ~/.bashrc
sed -i '/^\[ -s "\$NVM_DIR\/bash_completion" \]/d' ~/.bashrc

echo $sudopassword | sudo -S apt remove code git -y

exit
