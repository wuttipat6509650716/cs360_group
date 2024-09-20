# CS360 1/2567 Term Project: [FoodAdvisor]

## Group Information

  
- **Group Name:** [SaveToFocus]

  

## Members

| Name | Student ID | |------------------------------- ---|-----------------|

Wuttipat pipopsukawadee 6509650716

Teerawat Nakornchai 6509650476

Napat thaibankuai 6509650492

Natthida Sae-tang 6509650070

Punnatut Maneewong 6509650542

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

## How to deploy and run the project manually

1.

2.

3.

## How to deploy and run the project using the provided bash script [Specify the bash script path in the repo]

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