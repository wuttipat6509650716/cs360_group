# CS360 1/2567 Term Project: [FoodAdvisor]

## Group Information

  
- **Group Name:** [SaveToFocus]

  

## Members

| Name | Student ID |
|--|--|
|Natthida Sae-tang |6509650070|
|Teerawat Nakornchai |6509650476|
|Napat Thaibankuai |6509650492|
|Punnatut Maneewong |6509650542|
|Wuttipat Pipopsukawadee |6509650716|

## Table of Contents
- [Project Goal](#project-goal)
- [Features CRUD](#features-crud)
- [Technologies Used](#technologies-used)
- [Software Require](#software-require)
- [Setup AWS EC2 Instance](#setup-aws-ec2-instance)
- [How to Deploy and Run the Project Manually](#how-to-deploy-and-run-the-project-manually)
    - [Step-by-Step Guide](#step-by-step-guide)
    - [Strapi User Roles and Access](#strapi-user-roles-and-access)
- [How to Deploy and Run the Project Using Bash Script](#how-to-deploy-and-run-the-project-using-bash-script)
    - [Step-by-Step Guide](#step-by-step-guide-1)
- [Unit and Integration Testing Overview](#unit-and-integration-testing-overview)
    - [Number of Test Cases](#number-of-test-cases)
    - [Tested Features](#tested-features)
- [Setting Up Tests](#setting-up-tests)
- [Running Tests](#running-tests)
- [Test File Structure](#test-file-structure)
- [Test Coverage](#test-coverage)
- [Viewing Test Results](#viewing-test-results)
- [Adding New Tests](#adding-new-tests)
- [GitHub Action CI/CD Pipeline](#github-action-cicd-pipeline)
  - [CI/CD Pipeline Overview](#cicd-pipeline-overview)
  - [CI Workflow: `Automate-Test.yml`](#ci-workflow-automatetestyml)
  - [CI Workflow: `CI-docker.yml`](#ci-workflow-ci-dockeryml)
  - [CD Workflow: `cd.yml`](#cd-workflow-cdyml)
  - [Viewing Test Results in GitHub Actions](#viewing-test-results-in-github-actions)
  - [Running Tests Locally](#running-tests-locally)
## Project Goal

Foodadvisor is a web platform that helps personalize food discovery content, such as blog posts, to match users' tastes. By allowing users to select their favorite food categories, the platform provides tailored recommendations, enhancing the user experience and encouraging greater engagement.

The Register and Authentication feature allows users to create accounts and log in securely, while the Profile feature enables users to fill in public information, increasing their credibility within the platform.

This platform solves the issue of information overload in the food industry, making it easier for users to find relevant and high-quality content. It also creates a valuable space for food enthusiasts, bloggers, and restaurants to connect meaningfully with their target audiences.

### Features CRUD

- [Feature 1: Register and Authentication]  
- [Feature 2: Profile]  


### Technologies Used  
- **Backend:** Strapi V4  
- **Frontend:** React.js  
- **Hosting/Deployment:** AWS EC2  
- **Database:** SQLite

### Software Require 
- Node 16
- npm >=6.0.0
- yarn 1.22.22
- pm2 v.5.4.2
- git

## Setup AWS EC2 Instance

1.  **Launch `AWS EC2` Instance**:

    -  **Instance Type**: t2.medium

    -  **Operating System**: Amazon Linux

  

2.  **Configure Security Group Rules**:

    -  **Type**: `SSH`, **Protocol**: `TCP`, **Port Range**: `22`, **Source**: `::/0`

    -  **Type**: `HTTP`, **Protocol**: `TCP`, **Port Range**: `80`, **Source**: `0.0.0.0/0, ::/0`

    -  **Type**: `HTTPS`, **Protocol**: `TCP`, **Port Range**: `443`, **Source**: `0.0.0.0/0, ::/0`

    -  **Type**: `Custom TCP Rule`, **Protocol**: `TCP`, **Port Range**: `1337`, **Source**: `0.0.0.0/0`

    -  **Type**: `Custom TCP Rule`, **Protocol**: `TCP`, **Port Range**: `3000`, **Source**: `0.0.0.0/0`


## How to deploy and run the project manually

## Step-by-Step Guide
- Use `sudo yum check-update || sudo yum update -y` For Update (use other, If you use other OS)
- Use `sudo yum install git` If Your System Not have git


### 1. Install NVM (Node Version Management) on the AWS Instance ( Use other If you want )
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

npm install -g yarn@1.22.22

```

### 3. Install pm2 on the AWS Instance
- Install pm2 by npm : 
```bash

npm install -g pm2@5.4.2

```

### 4. Setup environment

cd into `cs360_group` folder. `cd cs360_group`

* Strapi **Backend** :

	- use `curl ipinfo.io/ip` for get **PublicIPv4**
	- use `openssl rand -base64  32` For **STRAPI_ADMIN_CLIENT_PREVIEW_SECRET**
	- use `openssl rand -base64 16` For **JWT_SECRET**
```bash
# Create & Edit .env File (Backend)
nano  api/.env
```
```bash
# Copy The following into .env

NODE_ENV=production
HOST=0.0.0.0
PORT=1337
STRAPI_ADMIN_CLIENT_URL=http://<public IPv4 of the EC2 instance>:3000
STRAPI_ADMIN_CLIENT_PREVIEW_SECRET=<your srcret>
JWT_SECRET=<your secret>
# Ctrl+o > Enter > Ctrl+x. For Save File.
```

* NextJs **FontEnd** :
	- use `openssl rand -base64 32` For **PREVIEW_SECRET**
```bash
# Create & Edit .env File (FontEnd)
nano  client/.env
```
```bash
# Copy The following into .env
NEXT_PUBLIC_API_URL=http://<public  IPv4  of  the  EC2  instance>:1337
PREVIEW_SECRET=<your  Secret>
```

### 5. Start Project
- **Backend** 
```bash

#cd into api folder (backend)
cd api
			
# install Libs
yarn & yarn seed

# pm2 runtime
pm2 start yarn --name Backend -- start

```
- **Fontend** 
```bash

#cd into client folder (fontend)
cd ../client
			
# install Libs
yarn & yarn build

# pm2 runtime
pm2 start yarn --name Fontend -- start

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
![Screen capture](https://media.discordapp.net/attachments/996073868768850002/1286932089958174760/image.png?ex=66efb468&is=66ee62e8&hm=69cac61d75e5500624b226f38e6c00a60a03f7e96880f09f24769c927eca3b7e&=&format=webp&quality=lossless&width=1514&height=946)

## Unit and Integration Testing Overview
In this project, we use several essential tools for both Unit and Integration Testing:

- **Jest**: The primary testing framework for Unit Tests, ensuring that individual functions and modules work as expected. Jest provides convenient management for assertions, mocking, and asynchronous operations.
- **Supertest**: A tool used to test HTTP endpoints in Integration Tests, simulating HTTP requests sent to the API and checking responses such as status codes and response content.
- **Strapi Testing Utils**: A utility set for simulating Strapi’s operations during testing, used to set up and tear down the Strapi instance before and after tests, enabling API and middleware testing that mirrors real-environment functionality.

### Number of Test Cases:
- **Unit Tests**: 7 test cases, covering the functionality of the custom middleware isOwner, including scenarios for authentication, missing or invalid IDs, non-existent profiles, and authorization checks.
- **Integration** Tests: 6 test cases, focusing on the Profile API endpoints (/api/profiles) including creating, retrieving, updating, and deleting user profiles, as well as validating ownership and permissions.

### Tested Features:
- **Profile Feature**: This includes integration tests for creating, updating, deleting, and retrieving user profiles, along with unit tests to ensure the correct behavior of the isOwner middleware.


## Setting Up Tests
- Install test tools
    ```bash
        yarn add --dev jest supertest
    ```
- in file `package.json` add **test** command to scripts section

    ```bash
        # add test command to scripts section
        "scripts": {
            "develop": "strapi develop",
            "start": "strapi start",
            "build": "strapi build",
            "strapi": "strapi",
            "test":"jest --runInBand --coverage=true"
        },
    ```
    and add those lines at the bottom of file
    ```bash
        "jest": {
            "collectCoverageFrom": [
                "src/api/**/*.js"
                ],
            "coverageReporters": [
                "clover",
                "json",
                "text"
                ],
            "testPathIgnorePatterns": [
                "/node_modules/",
                ".tmp",
                ".cache"
                ],
            "modulePathIgnorePatterns": [
                "./build"
                ],
            "testEnvironment": "node"
        }
    ```
    
## Running Tests
- use this command

    ```bash
    yarn test #use for test
    ```

## Test File Structure
```bash
cs360_group/
└── api/
    ├── src/
    │   └── api/
    │       └── profile/
    │           └── middlewares/
    │               └── isOwner.js                # Middleware file for checking ownership
    └── tests/
        ├── unit/
        │   └── isOwner.test.js                  # Unit test for the isOwner middleware
        └── integration/
            └── profile/
                └── index.js                     # Integration tests for profile-related features
            └── integration.test.js              # General integration tests

```
In this structure:

- The `isOwner.js` file in src/api/profile/middlewares/ is the middleware being tested.
- The `isOwner.test.js` file in unit/ is for unit testing of the isOwner middleware.
- The `index.js` file in integration/profile/ is for integration testing of functions within the profile.
- The `integration.test.js` file is for general integration testing of the API.
## Test Coverage
The tests in this repository cover the following functionality:

- **Unit test**
    - Test custom **isOwner** middleware to verify user permissions.

- **Integration**

    CRUD operations for user profiles, including:
    - **Create**: Ensure profile creation is successful with valid data.
    - **Read**: Retrieve profile data for authenticated users.
    - **Update**: Test profile updates, ensuring only owners can modify.
    - **Delete**: Confirm only authorized users can delete their profiles.

## Viewing Test Results
To view the test results, you can check the **console output** or review the **coverage report** that provides details on code coverage.

**Console output**

```bash
    yarn run v1.22.22
$ jest --runInBand --coverage=true
jest-haste-map: duplicate manual mock found: index
  The following files share their name; please delete one of them:
    * <rootDir>/.cache/admin/src/hooks/useAdminUsers/__mocks__/index.js
    * <rootDir>/.cache/admin/src/hooks/useAdminRoles/__mocks__/index.js

jest-haste-map: duplicate manual mock found: index
...

 PASS  tests/integration/integration.test.js (12.343 s)
 PASS  tests/unit/isOwner.test.js
-----------------------------|---------|----------|---------|---------|-------------------
File                         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------------------------|---------|----------|---------|---------|-------------------
All files                    |     100 |      100 |     100 |     100 |                   
...
-----------------------------|---------|----------|---------|---------|-------------------

Test Suites: 2 passed, 2 total
Tests:       14 passed, 14 total
Time:        12.742 s, estimated 19 s
Ran all test suites.
Done in 14.30s.

```

**Coverage Report**
- Upon completion, a coverage report will be generated at cs360_group/api/coverage/clover.xml. This report provides a comprehensive overview of the code coverage across various modules and functions, helping identify areas that may need additional tests for better coverage.
## Adding New Tests
- **Unit Test**
    
    - Add file `<name>.test.js` to unit test folder
    - And implement Test inside file
    
- **Integration**

    1. **Create a Directory for Each API**

        Create a new folder named after the API you intend to test. For example, if you're testing the profile API, the folder structure would be:
        
        ```bash
        #Test folder Structure
        tests/
            └── integration/
                └── <api-name>/ #name of integration test
                        └── index.js

        ```

    2. **Create index.js Inside the API Folder** eg. profile/index.js
        
        In this file implement test for Api

        For Example :
        ```javascript
        //<api-name>/index.js
        const { describe, beforeAll, it, expect } = require("@jest/globals");

        describe('API Integration Test',()=>{

            beforeAll(async () => {

            });

            it("Test Description",async ()=>{
                
            });

        })
        ```
    3. **Modify `integration.test.js`**

        Add `require('./name/index');` in under file
    

## GitHub Action CI/CD pipeline

### CI/CD Pipeline Overview

This project utilizes three GitHub Actions workflows to automate testing, building, and deployment processes. These workflows help maintain code quality and consistency across different environments, improving overall development efficiency.

### CI Workflow: `Automate-Test.yml`

**Trigger Conditions:**

- Triggered when:
  - A push is made to the `develop` branch.
  - A pull request targets the `main` branch.

**Job Configuration:**

- **Job Name:** `test`
- **Matrix Strategy:**
  - Operating Systems: `macos-latest`, `ubuntu-latest`
  - Node.js Versions: `16.x`, `18.x`
  - Jobs run concurrently for each combination.
  - Timeout: 5 minutes per job.

**Steps:**

1. **Checkout Code:** Uses `actions/checkout@v4` to fetch code from the repository.
2. **Setup Node.js:** Configures Node.js versions based on the matrix using `actions/setup-node@v4`.
3. **Install Yarn:** Installs Yarn globally using `npm install -g yarn`.
4. **Install Dependencies:** Installs project dependencies from the `./api` folder.
5. **Seed Data (if available):** Seeds initial data into the database using `yarn seed`.
6. **Run Tests:** Runs backend tests, using GitHub secrets for environment variables like `JWT_SECRET`.

### CI Workflow: `CI-docker.yml`

**Trigger Conditions:**

- Triggered when:
  - A push is made to any branch.
  - A pull request targets `main` or `develop`.
  - Manually triggered using `workflow_dispatch`.

**Jobs:**

1. **Test Source Code:**
   - Tests are similar to the `Automate-Test.yml` workflow.
   - **Matrix Strategy:**
     - Operating Systems: `macos-latest`, `ubuntu-latest`
     - Node.js Version: `16.x`

   **Steps:**

   - Cache dependencies using `actions/cache@v3`.
   - Setup Node.js and Yarn.
   - Install dependencies and seed data from the `./api` folder.
   - Run tests and upload results as artifacts.

2. **Build Docker Images:**
   - Builds and pushes Docker images for both API and Client:
     - Create an API Docker image from `./api`.
     - Create a Client Docker image from `./client`.
     - Log in to DockerHub and push images tagged as `latest`.

### CD Workflow: `cd.yml`

**Trigger Conditions:**

- Triggered when:
  - A push is made to any branch.
  - Manually triggered using `workflow_dispatch`.

**Job: `check-image-and-deploy`**

1. **Check Docker Image Availability:**
   - Verifies that the latest versions of the backend and frontend images are available on DockerHub.

2. **Set AWS Credentials:**
   - Uses GitHub secrets to configure AWS credentials for deployment:
     - `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_SESSION_TOKEN`, `AWS_REGION`, `AWS_SG_ID`, `AWS_KEY_PEM`, `AWS_KP_NAME`, `DOCKER_USERNAME`, `DOCKER_TOKEN`, `SSH_USER`, `JWT_SECRET`, `PREVIEW_SECRET`, `STRAPI_ADMIN_CLIENT_PREVIEW_SECRET`.

3. **Deploy to EC2:**
   - Creates a new EC2 instance using `aws ec2 run-instances`.
   - SSH into EC2 using GitHub secrets and set up the environment.
   - Pull and run backend and frontend Docker containers on the EC2 instance.
   - Expose services:
     - Backend: `http://<INSTANCE_PUBLIC_IPV4>:1337/`
     - Frontend: `http://<INSTANCE_PUBLIC_IPV4>:3000/`

### Viewing Test Results in GitHub Actions

1. Navigate to the **Actions** tab in your repository.
2. Select the workflow run you want to view (e.g., `Api CI` or `CI-docker`).
3. View detailed logs for each job and step.
4. If artifacts (e.g., `test-results`) are uploaded, you can download and inspect them.

### Running Tests Locally

**Prerequisites:**

- Install Node.js (versions 16.x or 18.x).
- Install the Yarn package manager.

**Steps:**

1. **Install Dependencies:**
   ```bash
   cd api
   yarn
2. **Seed Data (if available):**
    ```bash
    yarn seed
3. **Install Dependencies:**
    ```bash
    yarn test

**Viewing Test Results Locally:**

The terminal will display:

   - Total number of tests.
   - Number of tests passed, failed, or skipped.
   - Error messages and stack traces (if any tests fail).