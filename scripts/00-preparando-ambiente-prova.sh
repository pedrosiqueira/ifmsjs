#!/bin/bash

# ainda não testado

rm -rf ~/.*
rm -rf ~/*

code --install-extension VisualStudioExptTeam.vscodeintellicode
code --install-extension ms-python.python
code --install-extension ms-python.black-formatter
code --install-extension ms-python.isort

destinationPath=$(xdg-user-dir DESKTOP)
if [ ! -d "$destinationPath" ]; then
    mkdir -p "$destinationPath"
fi

# https://unix.stackexchange.com/a/616096
smbget smb://10.8.32.3/arquivos/Arquivos\ curso\ superior/tads-algoritmos/prova.zip -U "ifms%ifms"
unzip prova.zip -d "$destinationPath"
rm prova.zip

gnome-session-quit --power-off --force --no-prompt
