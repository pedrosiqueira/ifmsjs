# instalação do chocolatey
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# instalação dos programas para desenvolvimento de javascript
choco install git nodejs vscode

# configuração das variáveis de ambiente
function Add-PathIfNotExists {
    param ( [string]$newPath )

    # Obtém a variável PATH atual
    $currentPath = [System.Environment]::GetEnvironmentVariable("Path", [System.EnvironmentVariableTarget]::Machine)

    # Verifica se o caminho já está no PATH
    if ($currentPath -notmatch [regex]::Escape($newPath)) {
        # Adiciona o novo caminho ao PATH
        [System.Environment]::SetEnvironmentVariable("Path", "$currentPath;$newPath", [System.EnvironmentVariableTarget]::Machine)
        Write-Output "$newPath adicionado ao PATH."
    } else {
        Write-Output "$newPath já está no PATH."
    }
}

# adiciona esses dois caminhos à variável PATH
Add-PathIfNotExists -newPath "$env:SYSTEMDRIVE\npm\npm\"
Add-PathIfNotExists -newPath "$env:SYSTEMDRIVE\npm\pnpm\"

# adiciona mais essas variáveis de ambiente
[Environment]::SetEnvironmentVariable("npm_config_prefix", "$env:SYSTEMDRIVE\npm\npm\", "Machine")
[Environment]::SetEnvironmentVariable("npm_config_cache", "$env:SYSTEMDRIVE\npm\npm-cache\", "Machine")
[Environment]::SetEnvironmentVariable("XDG_DATA_HOME", "$env:SYSTEMDRIVE\npm\", "Machine")
[Environment]::SetEnvironmentVariable("XDG_STATE_HOME", "$env:SYSTEMDRIVE\npm\pnpm-state\", "Machine")
[Environment]::SetEnvironmentVariable("XDG_CACHE_HOME", "$env:SYSTEMDRIVE\npm\pnpm-cache\", "Machine")

# # para não precisar reabrir o terminal após atualizar as variáveis de ambiente
# $env:npm_config_prefix = [System.Environment]::GetEnvironmentVariable("npm_config_prefix","Machine")
# $env:npm_config_cache = [System.Environment]::GetEnvironmentVariable("npm_config_cache","Machine")
# $env:XDG_DATA_HOME = [System.Environment]::GetEnvironmentVariable("XDG_DATA_HOME","Machine")
# $env:XDG_STATE_HOME = [System.Environment]::GetEnvironmentVariable("XDG_STATE_HOME","Machine")
# $env:XDG_CACHE_HOME = [System.Environment]::GetEnvironmentVariable("XDG_CACHE_HOME","Machine")
# $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User") 

# recarrega as variáveis de ambiente modificadas
# refreshenv
exit # sair do terminal é mais garantido para recarregar as variáveis de ambiente
