
<!-- 
====================================================================================
                        [1- PROJECT STRUCTURE ]
==================================================================================== -->
/ecommerce-backend
/File, Folder Structure
├── /config
│   └── db.js           # MongoDB connection setup
│   └── cloudinary.js    # Cloudinary configuration for image upload
│   └── cors.js          # CORS configuration
│   └── ssl.js           # SSL and HTTPS setup
├── /controllers
│   └── authController.js    # User authentication logic
│   └── productController.js  # Product management logic
│   └── orderController.js    # Order management logic
│   └── cartController.js     # Cart management logic
│   └── reviewController.js   # Product review logic
├── /models
│   └── user.js             # User schema and model
│   └── product.js          # Product schema and model
│   └── order.js            # Order schema and model
│   └── cart.js             # Cart schema and model
│   └── review.js           # Review schema and model
│   └── coupon.js           # Coupon schema and model for discounts
│   └── address.js          # User address schema and model
├── /routes
│   └── authRoutes.js      # Routes for user authentication (login, logout, register)
│   └── productRoutes.js   # Routes for products (CRUD operations)
│   └── orderRoutes.js     # Routes for order management
│   └── cartRoutes.js      # Routes for cart operations
│   └── reviewRoutes.js    # Routes for product reviews
│   └── addressRoutes.js   # Routes for user address management
│   └── couponRoutes.js    # Routes for coupon operations
│   └── paymentRoutes.js   # Routes for payment integration (Stripe/PayPal)
├── /middleware
│   └── authMiddleware.js    # Middleware to verify JWT tokens for secure routes
│   └── errorMiddleware.js   # Middleware for handling errors
├── /utils
│   └── tokenUtils.js       # Helper functions to generate, verify tokens
│   └── paymentUtils.js     # Payment-related utilities (for Stripe/PayPal)
├── /uploads
│   └── /productImages     # Folder for uploaded product images
├── .env                   # Environment variables (e.g., JWT secret, DB URI, API keys)
├── .gitignore             # Git ignore file for sensitive files like node_modules
├── package.json           # Dependencies and scripts for Node.js
├── server.js              # Main entry point for the application


<!--==============================================================================
[2- DEPENDENCIES AND PACKAGES: Project Setup and Initial Configuration] ==============================================================================-->

# 1- Initialize the Project
Use npm to initialize the node server, project: { npm init -y } in the server folder
This creates a package.json file which manages your project dependencies and scripts

# 2-  Install Dependencies
You should install dependencies in the main project folder where your package.json file is located. This ensures that the dependencies are recorded in the package.json

npm install express mongoose bcryptjs dotenv jsonwebtoken multer cors cookie-parser cloudinary  stripe paypal-rest-sdk morgan 


<!-- we define below the downloaded packages -->
# 3- morgan:
{ npm install morgan }
Morgan is a simple logging tool for Node.js that works like a diary for your server, recording each request's details, such as the visitor's IP, requested URL, response status (e.g., 200 or 404), response time, and size. It's great for debugging, monitoring traffic, and understanding server performance.

# 4- express:
Framework for building the server.

# 5- mongoose:   
ODM (Object Data Modeling) library to interact with MongoDB.

# 6- bcryptjs:   
For hashing passwords.

# 7- dotenv:     
For managing environment variables.
- we use dotenv package to hide sensitive information like: port number, mongodb database address, api keys, payment gateway keys, third party api keys. 
- env means envrmental variable


# 7- jsonwebtoken: 
For JWT-based authentication.

# 8- multer:     
For handling file uploads.

# 9- cookie-parser: 
For parsing cookies.

# 10- cloudinary: 
For managing image uploads (optional).

# 11- nodemon:    
For automatic server restart during development after Changes.

# 12- stripe:     
For Stripe payment integration.

# 13- paypal-rest-sdk: 
For PayPal payment integration.

# 14- cors: 
- cors means cross origion middlewere
- our react server is running on another port and node server run on another port so if you want to acess another port application in node.js port application, so cors help you out for this

# Note:
- After installing the dependencies Above, all the dependencies are Appear in the package.json file.



<!-- 
====================================================================================
                        [3- DEPENDENCIES AND PACKAGES: INSTALL GLOBALLY]
==================================================================================== -->


# Nodemon: 
- Note: there is a one problem, if you change something in the server so it will not reflect it into the browser, then you need to restart the server so we can solve this problem  by using nodemon, 
  npm install -g nodemon , we install nodemon here globally to run whole application
- to uninstall { npm uninstall nodemon}
- now initialize nodemon in package.json  > scripts >  { "server" : "nodemon server.js" }  and define the server main file or app starting point like server.js means it will run server.js file
- then run the nodemon on Terminal like { npm run server }, because we assing nodemon into a server key
- to run Nodemon is   { npm run server }



<!-- 
====================================================================================
                        [4- MIDDLEWARES ]
==================================================================================== -->

# Morgan

- Logs details like the HTTP method, URL, status code, response time, and more.
- Comes with built-in log formats such as combined, common, dev, short, and tiny, each providing different levels of detail.
- Output to Streams: Logs can be sent to different destinations, such as the console, files, or remote logging services.
- we do setup of the morgan in the server.js file

- Why Do We Use Morgan?

- Helps track how the application is being used, including identifying problematic requests.
- Logs response times and status codes, which can help in identifying performance bottlenecks or errors
- Logs can serve as an audit trail for security and compliance purposes.
- Formats like dev provide colorful and concise logs during development.

- Example usage with Express:

-const express = require('express');
const morgan = require('morgan');

const app = express();

- // Use the 'dev' format for concise development logs
app.use(morgan('dev'));

- // Example route
app.get('/', (req, res) => {
  res.send('Hello, Morgan!');
});

- // Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


- Note: when you hit the api so it will show the status on the Terminal

# Json middleware

- To receive data from the client side
- json comes with Express
- we do setup of the json middleware in the server.js file


- Use:
- app.use(express.json())


# Cors

- To avoid cross orign error between node and react
- we do setup of the cors in te server.js file
- it is usefull when we interact with client side

- Use:
- app.use(cors())



<!-- 
====================================================================================
                        [5- (.env) ]
==================================================================================== -->

# ENV FILE

- .env is a confidential file
- we would not push on github
- all security related and api kets and port and more are must be define here
- when we do changes in the .env file so, we must restart the server because nodemon should not detect this file
- .env is a naming convention
- make sure you define env configuration after imports in server.js file, otherWise it will not work
- Note: we should not use port 3000 as you know react work on that port

- Use:
- we define port in env like  { PORT = 8080 }


<!-- 
====================================================================================
                        [6. CREATE EXPRESS SERVER IN SERVER.JS FILE]
==================================================================================== -->

#  1- IMPORTS 
- import express from "express";
- import morgan from "morgan";
- import cors from "cors";
- import dotenv from 'dotenv';

- import express in server.js to create server { import express from "express" }
- To run the server { node server.js }, in Terminal


# 2- config env in server.js

- Note: always define env config after imports in server.js
- Use:
- dotenv.config();


# 3- rest object

- const app = express();

# 4- MiddleWares

- app.use(morgan("dev"));
- app.use(express.json())
- app.use(cors())


# 5- Test/Dry

- write here dummy routes and more

# 6- Server/Express

- port: const PORT = process.env.PORT || 8080;

- Listen: 
- app.listen( PORT , () => {
-   console.log(`Server Running on Port ${process.env.PORT || 8080}`)
- })

# Use port in server.js file 

- we use port in server.js file from env file where there we define the port 
- if server can not reach the port that define in env so it will run on another port like 5000

# NOTE:

- PACKage.json and .env file done mn changes hn gi to server ko restart kerna perhay ga

<!-- 
===================================================================================
                        [6- MONGODB CONNECTION]
==================================================================================== -->


<!-- 6.1- MongoDb downloaded -->

# 

<!-- 6.2-  MongoDb Online ---->

# online setup

# 1- for creating cluster(if you already have cluster so skip it)
- go to https://cloud.mongodb.com/
- go to Database > 
- click create cluster, if you havent created yet
- select mo Free
- cluster name Cluster0
- select provider aws
- click deployment
- you can create one free cluster from single account
- if you already created one free cluster so next time they will ask for paid when you tr to create new cluster
- you can check many database by got to database > clusters > browser Collections

OurDatabase Credentials:
- cluster username is: Adminssg
- Cluster password is: Adminssg@321!

# 2- Network Acess

- go to security
- go to network acess
- add ip address 0.0.0.0/0 this is global ip address
- we can not add local machine ip address because our system is fix and then mongodb is can not be acessable from other local systems so thats why we use global ip address that can be acessable for all local systems

# 3- Create User

- go to security
- go to Database Access
- Click add new database user 
- Authentication method password
- Add buil in Role and select (Read and write to any database)
- Password Authentication > (Qxrwc8pIdAcfRs9p)
- User name > Qxrwc8pIdAcfRs9p()
- click add user


# 4- Create database

- we dont need to create database because this is nosql database 
- we can create database through directly connection string
- when database connection establish with our app
- and connection string have that database name 
- then database will be created automatically and  you can see that database in collections



# 5- Connect database with user

- go to again Database
- Click connect
- Click mongoDb compass :  because mongodb compass give strong connection string
- Select i have already installed mongodb compass
- copy connection string : (mongodb+srv://<db_username>:<db_password>@cluster0.0l1xh.mongodb.net/)
- paste and use in .env file
- env file process: 
- create var like MONGO_URL =  mongodb+srv://<db_username>:<db_password>@cluster0.0l1xh.mongodb.net/
- then change database name and database password
- like: mongodb+srv://Qxrwc8pIdAcfRs9p:Qxrwc8pIdAcfRs9p@cluster0.0l1xh.mongodb.net/
- then add our database name in the end of the conenction string like:

- ( mongodb+srv://Qxrwc8pIdAcfRs9p:Qxrwc8pIdAcfRs9p@cluster0.0l1xh.mongodb.net/mtsuppliers)

# 6-  if you already have cluster so create just database

- Connect to your application
- Click drivers
- copy connection string
- mongodb+srv://Adminssg:Adminssg@321!@cluster0.0l1xh.mongodb.net/?retryWrites=true& w=majority&appName=Cluster0
- when our application execute and we make file for configuraiotn, and that file will be execute and some data comes into it ao automatically mtsuppliers name database will be created

# 7- 

# 8- ABout

- Database have Clusters and clusters carry multiple databases of the projects

# 9- download mongo db compass

- we will do it later on, it is just a gui


<!-- CONNECTION STRING -->

# Making Connection String

- here we connect node.js application with mongodb
- create file as name db.js in server>config>db.js
- but we need dependecy for creating connection that is called moongoose package
- we can do it directly through mongodb but problem is it is complicated so we use moongse package for ease

- Steps:
- import mongoose from mongoose'
- 






























1- Create MongoDb Atlas account on {google signup: ssyedmuhammadumar.developer@gmail.com}
2- Go to Databases > click Clusters > click Create > Create new Cluster > select MO Free > Clud Provider AWS > 
3- Cluster Name = MongoMT


Create User/Password

1- Go to Security Section
2- click Database Access
3- click Create a Database User {User-Name: SMD_1234 , Password: Admin@321!!! }
4- Select Built-in Role as Atlas Admin

Connect User with Database

1- go to Database > Clusters 
2- click on Connect > now Connect to {Cluster name: MongoMT} Pop Up opens
3- Then Click mongoDb to VsCode 

Connecting with MongoDB for VS Code (For Testing)

1- Install MongoDB for VS Code. Extensions by mongodb
2- In VS Code, open the Command Palette.  Click on "View" and open "Command Palette."  Search "MongoDB: Connect" on the Command Palette and click on "Connect with Connection String."
3- Now in Vs code  Click on Connect with Connection String
4- Connect to your MongoDB deployment. Paste your connection string into the Command Palette.
5- mongodb+srv://SMD_1234:<db_password>@mongomt.0l1xh.mongodb.net/
6- mongodb+srv://SMD_1234:Admin@321!!!@mongomt.0l1xh.mongodb.net/
7- then paste above url after adding user password, into command pallet in vs code mongodb, and hit Enter, (Ctrl + Shift + P for all MongoDB Command Palette options)
8- then it will connect our database with user
9- Click “Create New Playground” in MongoDB for VS Code to get started.


Connect To your Application (For Main)

1- Click Drivers
2- Select your driver and version
3- Install your driver by running this command {npm install mongodb}
4- Add your connection string into your application code {mongodb+srv://SMD_1234:Admin@321!!!@mongomt.0l1xh.mongodb.net/?retryWrites=true&w=majority&appName=MongoMT}
4- we convert special charecters into encoded uri => {mongodb+srv://SMD_1234:Admin%40321%21%21%21@mongomt.0l1xh.mongodb.net/?retryWrites=true&w=majority&appName=MongoMT}
5- Ensure any option parameters like username and password are URL encoded.
6- then we use this url for database connection
7- and after that we go to the backend folder and run the application server like node server.js





Note:

1- you can delete the existing Atlas cluster through click cluster > click 3 dots > click Terminate
2- When ever you create the new cluster so , before start working on it , please wait 10 to 15 min and then start working (some times , it through errors like password, user, connection)
3- 










<!-- 
====================================================================================
                        [NODEJS BASIC SETUP COMPLETE HERE======> ]
==================================================================================== -->












<!--================================================ 5. USE IMPORT INSTEAD OF REQUIRE FOR MODULES ================================================-->
- if we use import export syntax so you have to define in packege.json { "type": "module", }
- if you are using require so you dont need to initialize type module in package.json




<!--================================================ . ENVIRONMENT VARIABLES (.env) ADVANCED ================================================-->

The .env file holds sensitive and configurable information, such as:

# General Configuration

<!-- # Application port -->
PORT = 8080
const port = process.env.PORT || 8080;
const jwtSecret = process.env.JWT_SECRET;

<!-- # Environment (development, production, staging) -->
NODE_ENV=development

<!-- # Application name -->
APP_NAME=myapp

<!-- # Secret key for JWT authentication (JSON Web Tokens) -->
JWT_SECRET=your-jwt-secret-key

<!-- # JWT expiration time (e.g., 1 hour) -->
JWT_EXPIRATION=1h

<!-- # Enable/disable logging (useful for debugging) -->
DEBUG=true

<!-- # Base URL for the API -->
BASE_URL=http://localhost:8080

<!-- # Server hostname (useful for clustering or multi-server environments) -->
HOST=localhost


# Database Configuration

<!-- # MongoDB -->
DB_URI=mongodb://localhost:27017/myappdb
DB_NAME=myappdb

<!-- # PostgreSQL (for example) -->
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=password
DB_NAME=myappdb

<!-- # MySQL (for example) -->
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=password
DB_NAME=myappdb


# Redis (if using Redis for caching or sessions)

REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=your-redis-password
REDIS_DB=0


# API Keys and External Services

<!-- # External API keys (e.g., for payment processors, third-party services) -->
PAYPAL_CLIENT_ID=your-paypal-client-id
PAYPAL_SECRET=your-paypal-secret-key
STRIPE_API_KEY=your-stripe-api-key
SENDGRID_API_KEY=your-sendgrid-api-key

<!-- # Third-party services (e.g., Google, AWS, etc.) -->
AWS_ACCESS_KEY_ID=your-aws-access-key-id
AWS_SECRET_ACCESS_KEY=your-aws-secret-access-key
AWS_REGION=us-west-2

<!-- # Google OAuth credentials -->
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret


# Email Configuration

<!-- # SMTP Server Configuration (for sending emails) -->
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=587
MAIL_USER=your-mailtrap-username
MAIL_PASSWORD=your-mailtrap-password
MAIL_FROM_ADDRESS=no-reply@myapp.com
MAIL_FROM_NAME=MyApp Support


# File Storage Configuration (e.g., AWS S3, Local)

<!-- # AWS S3 Configuration (for file uploads) -->
AWS_S3_BUCKET=myapp-bucket
AWS_S3_ACCESS_KEY_ID=your-aws-s3-access-key-id
AWS_S3_SECRET_ACCESS_KEY=your-aws-s3-secret-access-key
AWS_S3_REGION=us-west-2

<!-- # Local file storage path (if not using cloud storage) -->
UPLOAD_DIR=/path/to/uploaded/files

# CORS Configuration

<!-- # CORS configuration (cross-origin resource sharing) -->
CORS_ALLOW_ORIGINS=http://localhost:3000,https://yourfrontend.com
CORS_ALLOW_METHODS=GET,POST,PUT,DELETE
CORS_ALLOW_HEADERS=Content-Type,Authorization
CORS_ALLOW_CREDENTIALS=true

# Session Management

<!-- # Session secret (for session-based authentication) -->
SESSION_SECRET=your-session-secret-key
SESSION_COOKIE_NAME=sessionId
SESSION_MAX_AGE=86400000  # 1 day in milliseconds



<!--================================================ 7. Database Connection (config/db.js) ================================================-->

# You’ll need to establish a connection with MongoDB using Mongoose.

First, you need to configure your connection to MongoDB. You can use Mongoose to easily interact with your database.

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error', err);
    process.exit(1);
  }
};

module.exports = connectDB;

# In this code:

mongoose.connect() connects to MongoDB using the URI stored in your .env file.
The async/await syntax ensures that the connection is established before proceeding further.
process.exit(1) ensures that if the connection fails, the application stops.

<!--================================================ 8 Project Setup and Initial Configuration  ================================================-->




<!--================================================ 9 Project Setup and Initial Configuration  ================================================-->





<!--================================================ 9 Youtube videos used in this project  ================================================-->

# Learn Node js & Express with Project | Node.js, Express & MongoDB Project | Node js Ecommerce App (Techinfo YT: 8 hours content)
- https://www.youtube.com/watch?v=AxcCilviM-c 


# 