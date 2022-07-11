#JavaScript REST API

This is the repository for Code Nation’s REST API activity. The activity looked at JS webservers, using ExpressJS with Mongoose schema and BCryptJS that interaqcts with a mongoDB database.

##How do I run this?
From the root folder run **‘npm install’** to download of dependencies. To run the server type **node src /server.js**
You will need to create a .env file in the src folder and have your connection string within the file like so:  **MONGO_URI = >>>your connection string here<<<**

##How do I use this?

To interact with the server use a REST API client such as ThunderClient. You can use the following Endpoint to interact with your database:

**__________________________**

####Add entry to database
POST: http://localhost:5001/user
BODY:

{
"username": "Mx. Example",
"email" : "example@email.com",
 "password": "example123"
}

**__________________________**

####Access details
POST: http://localhost:5001/login

BODY:
{
"username": "Mx. Example",
 "password": "example123"
}
____________________________

####Find details on specific user
GET: http://localhost:5001/user/>>>input username here<<

####Show all users and details
GET: http://localhost:5001/findaALL

____________________________

####Change user details
PATCH:http://localhost:5001/user/

BODY:
{
    "userObj": {
    "username":>>"write username here"<<},

    "updateObj": {
    "email" : >>"updated email here"<<,
    "password" : >>"updated password here"<<
}
}

____________________________

####Remove user
DELETE: http://localhost:5001/user/ >>>input username here<<
