#!/bin/bash

# Function to display help message
show_help() {
    echo "Usage: $0 [OPTIONS]"
    echo
    echo "Options:"
    echo "  --username USERNAME       GitHub username"
    echo "  --useremail EMAIL         GitHub email"
    echo "  --project PROJECT_NAME    Project name to clone"
    echo "  --help                    Show this help message and exit"
    exit 0
}

# Function to prompt for input if not provided
prompt_input() {
    local var_name=$1
    local prompt_message=$2
    local var_value=$3
    if [[ -z "$var_value" ]]; then
        read -p "$prompt_message" var_value
    fi
    echo "$var_value"
}

# Parse arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --username)
            username="$2"
            shift 2
            ;;
        --useremail)
            useremail="$2"
            shift 2
            ;;
        --project)
            project_name="$2"
            shift 2
            ;;
        --help)
            show_help
            ;;
        *)
            echo "Unknown option: $1"
            show_help
            ;;
    esac
done

# Prompt for missing inputs
if [[ -z "$username" ]]; then
    default_username=$(git config --global user.name) # Get the default username from Git config
    read -p "Qual teu nome de usuário do GitHub? (${default_username}): " input_username # Prompt the user for input, showing the default value
    username="${input_username:-$default_username}" # Use the input value if provided, otherwise use the default
fi

if [[ -z "$useremail" ]]; then
    default_useremail=$(git config --global user.email) # Get the default useremail from Git config
    read -p "Qual teu email do GitHub? (${default_useremail}): " input_useremail # Prompt the user for input, showing the default value
    useremail="${input_useremail:-$default_useremail}" # Use the input value if provided, otherwise use the default
fi

project_name=$(prompt_input "project_name" "Qual o nome do projeto? " "$project_name")

# Configures Git
git config --global user.name "$username"
git config --global user.email "$useremail"

# Installs VS Code extensions
code --install-extension VisualStudioExptTeam.vscodeintellicode
code --install-extension dbaeumer.vscode-eslint
code --install-extension xabikos.JavaScriptSnippets
code --install-extension christian-kohler.npm-intellisense
code --install-extension christian-kohler.path-intellisense
code --install-extension svelte.svelte-vscode

# Installs pnpm globally
npm install -g pnpm

# Sets up the project
desktop_path="$(xdg-user-dir DESKTOP)"  # Gets the desktop path

cd "$desktop_path" || exit 1 # Navigates to the desktop directory
rm -rf "$project_name"       # Removes the existing project directory
git clone https://github.com/pedrosiqueira/"$project_name".git # Clones the repository
cd "$project_name" || exit 1 # Navigates to the project directory

pnpm install   # Installs project dependencies
code -r .      # Opens the project in VS Code
