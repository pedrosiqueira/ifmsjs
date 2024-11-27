# exclui o conteúdo da pasta do usuário
Remove-Item -Path "C:\Users\aluno.PDC-ACADEMICO\*" -Recurse -Force

# define a política de execução de script desta sessão atual como RemoteSigned (permissão de executar scripts) sem solicitar confirmação (-Force)
Set-ExecutionPolicy RemoteSigned -Scope Process -Force;

# define os scripts
$script1 = "https://raw.githubusercontent.com/pedrosiqueira/ifmsjs/refs/heads/main/scripts/01_windows_setup.ps1"
$script2 = "https://raw.githubusercontent.com/pedrosiqueira/ifmsjs/refs/heads/main/scripts/03_dw4_project_setup.ps1"
$script3 = "https://raw.githubusercontent.com/pedrosiqueira/ifmspy/refs/heads/main/scripts/04-baixando-prova.ps1"

# executa o script1 em outra instância do PowerShell, com privilégios elevados
Start-Process powershell -ArgumentList "-NoProfile -ExecutionPolicy Bypass -File `"$script1`"" -Verb RunAs

# Define o código a ser executado em uma nova instância do PowerShell sem privilégios elevados
$code1 = "Set-ExecutionPolicy RemoteSigned -Scope Process -Force; (New-Object System.Net.WebClient).DownloadString('$script2') | Invoke-Expression; exit"
$code2 = "Set-ExecutionPolicy RemoteSigned -Scope Process -Force; (New-Object System.Net.WebClient).DownloadString('$script3') | Invoke-Expression; exit"

# define as credenciais
$username = "PDC-ACADEMICO\aluno"
$password = ConvertTo-SecureString "alunoifms" -AsPlainText -Force
$credential = New-Object System.Management.Automation.PSCredential($username, $password)

# Executa o código numa nova instância do PowerShell com as credenciais especificadas
Start-Process powershell -Credential $credential -ArgumentList "-NoProfile", "-Command", $code1 -Wait
Start-Process powershell -Credential $credential -ArgumentList "-NoProfile", "-Command", $code2 -Wait

# desliga o pc
Stop-Computer
