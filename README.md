
# CS360 1/2567 Term Project: [FoodAdvisor]

## Group Information

  
- **Group Name:** [SaveToFocus]

  

## Members

| Name | Student ID | |------------------------------- ---|-----------------|

Natthida Sae-tang 6509650070

Teerawat Nakornchai 6509650476

Napat Thaibankuai 6509650492

Punnatut Maneewong 6509650542

Wuttipat Pipopsukawadee 6509650716

## Project Goal

The goal of this project is to study deployment processes and automate 10 tests. the project will focus on enhancing and developing new features. that system can be deployed and accessed externally.

### Features CRUD

- [Feature 1: Register and Authentication]  
- [Feature 2: Profile]  


### Technologies Used  
- **Backend:** Strapi V4  
- **Frontend:** React.js  
- **Hosting/Deployment:** AWS EC2  
- **Database:** SQLite

## Setup AWS EC2 Instance

  

1.  **Launch `AWS EC2` Instance**:

    -  **Instance Type**: t2.medium

    -  **Operating System**: Ubuntu 24.04

  

2.  **Configure Security Group Rules**:

    -  **Type**: `SSH`, **Protocol**: `TCP`, **Port Range**: `22`, **Source**: `::/0`

    -  **Type**: `HTTP`, **Protocol**: `TCP`, **Port Range**: `80`, **Source**: `0.0.0.0/0, ::/0`

    -  **Type**: `HTTPS`, **Protocol**: `TCP`, **Port Range**: `443`, **Source**: `0.0.0.0/0, ::/0`

    -  **Type**: `Custom TCP Rule`, **Protocol**: `TCP`, **Port Range**: `1337`, **Source**: `0.0.0.0/0`

    -  **Type**: `Custom TCP Rule`, **Protocol**: `TCP`, **Port Range**: `3000`, **Source**: `0.0.0.0/0`


## How to deploy and run the project manually

## Step-by-Step Guide

### 1. Install NVM (Node Version Management) on the AWS Instance
- Install nvm, then install node 16 by nvm :
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash 
		
source ~/.bashrc
		
nvm install 16
		
nvm use 16
		
node -v
```

### 2. Install yarn on the AWS Instance
- Install yarn global by npm :
```bash
npm install -g yarn
```

### 3. Install pm2 on the AWS Instance
- Install pm2 by npm : 
```bash
npm install -g pm2
```

### 4. Setup environment
cd into `cd360_group` folder 
*	Strapi **Backend** :
```bash
# Create & Edit .env File (Backend)
nano api/.env
			
# Add The following into .env
HOST=0.0.0.0 
PORT=1337 
STRAPI_ADMIN_CLIENT_URL=http://localhost:3000 	
			STRAPI_ADMIN_CLIENT_PREVIEW_SECRET=ARNFCb9zrC9ZHm5hZzCigWivD40icS4s
```

NextJs **FontEnd** :
```bash
# Create & Edit .env File (FontEnd)
nano client/.env
			
# Add The following into .env
NEXT_PUBLIC_API_URL=http://127.0.0.1:1337
PREVIEW_SECRET=ARNFCb9zrC9ZHm5hZzCigWivD40icS4s##
```

### 5. Start Project
- **Backend** 
```bash
#cd into api folder (backend)
cd api
			
# install Libs
yarn & yarn seed

# pm2 runtime
pm2 start yarn --name Backend -- develop
```
- **Fontend** 
```bash
#cd into client folder (fontend)
cd ../client
			
# install Libs
yarn & yarn build

# pm2 runtime
pm2 start yarn --name Backend -- start
```
> Use `pm2 list` for List Process
> Use `pm2 stop <name>`for Stop Process
> Use `pm2 del <name>` for Delete Process
 
### Strapi User Roles and Access
#### Super Admin
- **Email:** `admin@strapidemo.com`
- **Password:** `welcomeToStrapi123`

#### Editor
- **Email:** `editor@strapidemo.com`
- **Password:** `welcomeToStrapi123`

#### Author
- **Email:** `author@strapidemo.com`
- **Password:** `welcomeToStrapi123`

## How to deploy and run the project using the provided bash script [Specify the bash script path in the repo]

  
## Step-by-Step Guide

  

### 1. Install Git on the AWS Instance

- First, update the system packages:

```bash

sudo yum update -y

```

- Then, install Git:

```bash

sudo yum install git -y

```

  

### 2. Clone the Repository from GitHub

- Clone the repository using `git clone`:

```bash

git clone https://github.com/wuttipat6509650716/cs360_group.git

```

- Navigate into the cloned project directory:

```bash

cd cs360_group

```

  

### 3. Check the Permissions of `start.sh`

- Verify if the `start.sh` script has execute permissions:

```bash

ls -l start.sh

```

- If the script does not have execute permissions, grant it using the following command:

```bash

chmod +x start.sh

```

  

### 4. Run the `start.sh` Script

- Execute the script to deploy and run the project:

```bash

./start.sh

```



[ภาพ screen capture ของหนาเว็บแอปพลิเคชันซึ่ง deploy ไวบน EC2]
