# desinstalação dos programas para desenvolvimento de javascript
choco uninstall git nodejs vscode git.install nodejs.install vscode.install -y

# remove um caminho da variável de ambiente PATH
function Remove-SystemPath {
    param (
        [string]$PathToRemove
    )

    # Obtém o Path atual do sistema
    $currentPath = [System.Environment]::GetEnvironmentVariable("Path", "Machine") -split ';'

    # Remove o caminho especificado
    $newPath = ($currentPath | Where-Object { $_ -ne $PathToRemove }) -join ';'

    # Atualiza a variável de ambiente do sistema (requer permissão de administrador)
    [System.Environment]::SetEnvironmentVariable("Path", $newPath, "Machine")

    Write-Host "Removido do Path do sistema: $PathToRemove"
}

# remove esses dois caminhos da variável PATH
Remove-SystemPath "$env:SYSTEMDRIVE\npm\npm\"
Remove-SystemPath "$env:SYSTEMDRIVE\npm\pnpm\"

# remove essas variáveis de ambiente
[Environment]::SetEnvironmentVariable("npm_config_prefix", $null, "Machine")
[Environment]::SetEnvironmentVariable("npm_config_cache", $null, "Machine")
[Environment]::SetEnvironmentVariable("XDG_DATA_HOME", $null, "Machine")
[Environment]::SetEnvironmentVariable("XDG_STATE_HOME", $null, "Machine")
[Environment]::SetEnvironmentVariable("XDG_CACHE_HOME", $null, "Machine")

# remove a pasta npm
Remove-Item -Path "$env:SYSTEMDRIVE\npm" -Recurse -Force

# recarrega as variáveis de ambiente modificadas
exit # sair do terminal é mais garantido para recarregar as variáveis de ambiente
