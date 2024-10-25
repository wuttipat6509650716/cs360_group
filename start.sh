#!/bin/bash

# Define base path
BASE_PATH=$(pwd)
echo "Base path: $BASE_PATH"

# Update package lists and install curl
echo "Updating package lists..."
if command -v apt &> /dev/null; then
    echo "Detected apt package manager"
    sudo apt update && sudo apt upgrade -y
elif command -v yum &> /dev/null; then
    echo "Detected yum package manager"
    sudo yum check-update || sudo yum update -y
else
    echo "Unsupported package manager. Exiting."
fi

if command -v curl &> /dev/null; then
    echo "curl is already installed."
else
    echo "curl is not installed. Installing curl..."
    sudo yum install -y curl
fi

PUBLIC_IPV4=$(curl ipinfo.io/ip)

install_git(){
    sudo yum install git
}

install_nvm(){
    echo "Installing Node.js version 16..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
    source ~/.bashrc
    nvm install 16
    nvm use 16
}

check_and_add_to_env() {
    VAR_NAME=$1
    VAR_VALUE=$2
    ENV_PATH=$3
    if ! grep -q "^$VAR_NAME=" "$ENV_PATH"; then
        echo "$VAR_NAME=$VAR_VALUE" >> "$ENV_PATH"
        echo "$VAR_NAME added to $ENV_PATH"
    else
        echo "$VAR_NAME is already set, skipping..."
    fi
}


if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    NPM_VERSION=$(npm -v)
    echo "NodeJs is already installed. Node: ${NODE_VERSION}, npm: ${NPM_VERSION}"

    # Check NodeJs Version is equal to 16
    if [[ $(node -v | sed ''s/v//) =~ ^(1[6])\. ]]; then
        echo "Node.js version: $NODE_VERSION is within the allowed range."
    else
        echo "Node.js version: $NODE_VERSION is not v.16"
        exit 1
    fi

else
    echo "NodeJs is not installed. Installing NodeJs..."
    install_nvm
    if command -v node &> /dev/null; then
        echo "NodeJs installed successfully. Node: $(node -v)"
    else
        echo "NodeJs installation failed. Exiting."
        exit 1
    fi
fi


if command -v git &> /dev/null; then
    echo "Git is already installed. Git: $(git --version)"
else
    echo "Git is not installed. Installing Git..."
    install_git
    if command -v git &> /dev/null; then
        echo "Git installed successfully. Git: $(git --version)"
    else
        echo "Git installation failed. Exiting."
        exit 1
    fi
fi


if command -v pm2 &> /dev/null; then
    echo "pm2 is already installed."
else
    echo "pm2 is not installed. Installing pm2..."
    npm install -g pm2@5.4.2
    if command -v pm2 &> /dev/null; then
        echo "pm2 installed successfully."
    else
        echo "pm2 installation failed. Exiting."
        exit 1
    fi
fi


if command -v yarn &> /dev/null; then
    echo "yarn is already installed."
else
    echo "yarn is not installed. Installing yarn..."
    npm install -g yarn@1.22.22
    if command -v yarn &> /dev/null; then
        echo "yarn installed successfully."
    else
        echo "yarn installation failed. Exiting."
        exit 1
    fi
fi

source ~/.bashrc

# Set up API environment
API_PATH=$BASE_PATH/api
CLIENT_PATH=$BASE_PATH/client

cd $API_PATH
yarn

# Set up API .env file
if [ ! -f "${API_PATH}/.env" ]; then
    echo "Creating .env for API"
    touch  "${API_PATH}/.env"
else
    echo ".env file for API already exists."
fi


check_and_add_to_env "HOST" "0.0.0.0" "${API_PATH}/.env"
check_and_add_to_env "PORT" "1337" ".env"
check_and_add_to_env "STRAPI_ADMIN_CLIENT_URL" "http://${PUBLIC_IPV4}:3000" "${API_PATH}/.env"
check_and_add_to_env "STRAPI_ADMIN_CLIENT_PREVIEW_SECRET" "ARNFCb9zrC9ZHm5hZzCigWivD40icS4s" "${path_api}/.env"
check_and_add_to_env "JWT_SECRET" "$(openssl rand -base64 16)" "${API_PATH}/.env"
check_and_add_to_env "NODE_ENV" "production" "${API_PATH}/.env"

yarn seed

echo "Starting Strapi..."
pm2 start yarn --name Strapi_Api -- start

# Set up Client environment
cd $CLIENT_PATH


if [ ! -f "${CLIENT_PATH}/.env" ]; then
    echo "Creating .env for Client"
    touch  "${CLIENT_PATH}/.env"
else
    echo ".env file for Client already exists."
fi


yarn


check_and_add_to_env "NEXT_PUBLIC_API_URL" "http://${PUBLIC_IPV4}:1337" ".env"
check_and_add_to_env "PREVIEW_SECRET" "ARNFCb9zrC9ZHm5hZzCigWivD40icS4s" ".env"

echo "Building Next.js..."
yarn build
echo "Starting Client..."
pm2 start yarn --name client -- start

echo "Deployment successful"
echo "You Can Access Web-Application at http://${PUBLIC_IPV4}:3000"
echo "You Can Access Strapi-Backend at http://${PUBLIC_IPV4}:1337"