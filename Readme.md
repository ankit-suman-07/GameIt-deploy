# GameIt - A Game listing App

A Game Listing Websites based on the design and workings of Netflix.

Table of Contents
- [GameIt - A Game listing App](#gameit---a-game-listing-app)
    - [Deployed Link](#deployed-link)
  - [Technologies Used](#technologies-used)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [User Authentication](#user-authentication)
    - [Deployment Technology](#deployment-technology)
  - [Setting Up the Application](#setting-up-the-application)
    - [Prerequisites](#prerequisites)
    - [Steps to run locally](#steps-to-run-locally)
  - [Summary](#summary)

### Deployed Link

[GameIt](https://game-netflix.netlify.app/)

## Technologies Used

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **HTML/CSS**: Basic building blocks for web development.
- **JavaScript**: Programming language for enhancing user interactivity.

### Backend
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **Node.js**: JavaScript runtime for server-side development.
- **MongoDB**: NoSQL database for storing application data.

### User Authentication
- **Firebase**

### Deployment Technology
- **Frontend**: vercel.com
- **Backend**: render.com


## Setting Up the Application

### Prerequisites
- Node.js installed on your machine

### Steps to run locally

1. **Fork the Repository**

   Click on the 'Fork' button on the top right corner of this repository's page. This will create a copy of the repository in your GitHub account.

2. **Clone the Repository**

   ```bash
   git clone https://github.com/ankit-suman-07/GameIt-deploy.git

3. **Move to folder**

   ```bash
   cd GameIt-deploy

4. **Install Dependencies**

   ```bash
   npm install

5. **Run the Project**

   ```bash
   npm start

The project will now be running locally on http://localhost:3000.

## Setting up MongoDB Atlas

MongoDB Atlas is a cloud-based database service that allows you to easily set up, manage, and scale MongoDB databases. Follow these steps to set up MongoDB Atlas for your project.

### Step 1: Create an Account

1. Go to the [MongoDB Atlas website](https://www.mongodb.com/cloud/atlas).
2. Click on the "Start Free" button.
3. Fill out the required information to create your MongoDB Atlas account.

### Step 2: Create a New Cluster

1. After signing in, click on the "Build a Cluster" button.
2. Choose a cloud provider, region, and cluster tier. You can choose the free tier (M0) for testing and development purposes.
3. Click on the "Create Cluster" button to create your cluster. This may take a few minutes.

### Step 3: Whitelist IP Address

1. In the left sidebar, click on "Network Access" under the Security section.
2. Click on the "Add IP Address" button.
3. Add your current IP address to the IP Access List to allow connections from your location.
4. You can also choose to allow access from anywhere (`0.0.0.0/0`), but this is not recommended for production environments due to security reasons.

### Step 4: Create a Database User

1. In the left sidebar, click on "Database Access" under the Security section.
2. Click on the "Add New Database User" button.
3. Enter a username and password for your database user.
4. Assign necessary roles to the user. For example, you can give it the `readWrite` role for a specific database.
5. Click on the "Add User" button to create the user.

### Step 5: Connect to Your Cluster

1. In the left sidebar, click on "Clusters" under the Data Storage section.
2. Click on the "Connect" button of your cluster.
3. Choose "Connect your application" to get your connection string.
4. Replace `<password>` with the password of the database user you created.
5. You can customize the connection string based on your programming language and driver.

**Example Connection String for Node.js using MongoDB Native Driver:**

```mongodb
mongodb+srv://<username>:<password>@clustername.mongodb.net/test?retryWrites=true&w=majority

```
Create documents with name 'users' and 'games'


## Summary
