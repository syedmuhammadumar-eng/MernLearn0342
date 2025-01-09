
<!-- -=======================================  Express =======================================  --->
# learn from sharians coding school


# what do we do with the help of express server:
- we do  Routing
- Requeat handle
- Response sending
- data handling
- request handle
- sending response
- also decide which type of data send through response
- show page on /contact, or /about so show about page


# Why use express.js
- http is a core node.js, so is difficlt to use, so that why we use Express makes it easier


# What is Expressjs Vs Node
- Expressjs is a packge and also available on the Npm
- We do and create all server code alone with node.js but, its lengthy and take more time to code it and also difficult and complex, so thats why we use Express for ease and Express is pre built in on node.js
- With the help of this package express, we will create or write server code, with the help of express.js package so we use all server functinaity, all they provided by the core nodejs like:


# Routing
- routes is all about Url that have separated by {  /  }  address  
- and the coding of creating routes is called routing for example : /Profile, /Home
- the process of creating routes called routing
- eg : of route /profile  /home /contact

# Steps of how routes work
- we type url in our browser like https://localhost:8080/Contact
- so that request is goes into our express
- express accept that request
- after request acception, our request goes through the middleware, then goes into routing, where there we wrote down all routes
- in routing, our request is try to match with existing routes in the routing , if url request match with route so that particular route will be execute 
- if not match then request url redirect into Error 404 page means this route does not exists in the routing

# Note:
- we can create or write route code in server.js file but we create separate folder and file for routes for maintainability and clean code, routes works fine in both locations




<!-- -======================================= CREATING MIDDLEWARES -=======================================  --->

# what is middleware
- middleware is a unique function, that runs before  rotes, 
- we always write middleware before all routes in the coding sequetially on top


# Create middleware
- app.use( function( req, res, next ){      //app.use always take function in: coding/write code
-   console.log(req)                        //req parameter carry all data that are related to user like User ip, browser etc , you can check through consolg.log, lets say if we want user data so it will always
-   req                                     //then we receive data from the user, like i say give me username that user send to the server
-   res                                     //means send code from the server to the user 
-   next()                                  //If next() is not called in the middleware, the request hangs, and the client doesn't get a response, next() lets you decide whether to skip the current middleware or proceed to the next one
- });

# Note:
- any thing we want to run before routes so we define in middleware
- next means if we go one route to anther so next help us to push from one route to another
- we can create multiple even infinite middlewares before routes
- if we create two middleare like one and two and we run the file, and in the middleare we console one and two so in console both shows one after another

# Working process:
- browser > req, controler > middleware like, app.use >  route 

- Note: when controler came to middleware 


<!-- -======================================= CREATING ROUTES -=======================================  --->

# STEPS;
- install node then install express 
- now we use Express and create route 
- Note: we dont need next() in the routes because we dont want to go automatically to another routes , why? because when user call the route so  then go instead of auto  and stop there, because we dont want to run next route after we reach one's


# code route 1
- const express = require('express');   //now here we store express into express vasriable , and we can name anything of it, we name express because it relate to it and understand easily for about what,
- const app = express();                // now here we run express with the help of express() and express() is a function so when we call that function and store/initialize it into an app, so then this function return all express thing or functionality or more , so all powers goes into app , now all express things perform, app  

- app.get('/', function (req, res) {
    res.send("This is our First route");
- }) 


# code route 2
- and this is prebuilt route template code:
- app.get('/profile' , function(req, res){
-   res.send("Hello this is profile page route");
- })
- app.listen(8080)                      //here we start the server or it will listen on port 8080 from the server.js, where there we setup our server

- every website first page are on  / route by default, but (  /  ) it is not visiable to you.




<!-- -======================================= REQUEST AND RESPONSE AND NEXT =======================================  --->

# request req (coming       <--User )
- req have all the data of the comming user,s req 
- like: Location, Ip address, Geo location, device Info and other thing that related to the user


# Response res (sending    Server--> )
- res: send back to that user, from the server like from our applicaton/server/app
- res have ability to  control or decide what to send back to the user, specific/customize according to the user resquest, like eg: user req for pizza with marhmello topping, so our server will  send back the pizza with marshmello topings after processing to the user req, so we decide what to send back to the user according to the user req, from ther server
- res is more like functional thing

# next  (push)
- next means, its time to execte, another one or, move on, or dont stick here, or one page to another page in routing etc







<!-- -======================================= ROUTE PARAMETERS , DYNAMIC ROUTES =======================================  --->

# urls:
- facebook.com/profile/umar
- facebook.com/profile/ali
- facebook.com/profile/hassan
- facebook.com/profile/hannan

- look above in the url there is some parts are common and some parts are changing again and again
- so do you really think that, we create separate routes for all of them really!, if yes so lets suppose if we have 76  routes so we create each route separately, so in the end we can not do that way.
- so whats the options, we have to handle these types of routes as above  urls.
- any routes that some parts are same again and again and some parts are change again and again so  we use dynamic routing to handle these parts
- we use dynamic routing to save our time and space of the lines of code and more 








<!-- -======================================= TEMPLATE ENGINES =======================================  --->








<!-- -=======================================  STATIC FILES =======================================  --->









<!-- -=======================================  HTTP METHODS GET,POST =======================================  --->








<!-- -=======================================  ERROR HANDLING =======================================  --->







