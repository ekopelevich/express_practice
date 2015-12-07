** npm install nodemon ??

How do you create an express app?

## npm init (create package.json)
## npm install --save express (installs express as a dependency)

(Use Express v4+)

## What is the conventional variable used for an express application?

'app' - Express application is conventionally stored in a variable called 'app'

var express = require('express');
var app = express() // var app is equal to the INVOCATION of express();


## What is the app.listen a convenience method for?

app.listen(port);

Under the hood, this is just invoking http.

http.createServer()

__Self Research Questions__

1. What is an express route?

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

Each route can have one or more handler functions, which are executed when the route is matched.

Route definition takes the following structure:

  app.METHOD(PATH, HANDLER)

2. How do you create an express route?

app.METHOD( path, handler );

METHOD can be replaced with any http verb - GET is most common. Can also use POST, DELETE, etc.

3. What is a route a combination of?

PATH, HANDLER

4. What are 2 parameters to an express route callback?

request, response // same as the callback in a node http server

5. How do you send a response to the client?

res.send('text');

6. What other methods does the response provide for sending data to the client?

.download()
.json()
.redirect()
.sendFile()
.jsonp()
.render()
.send()
.sendStatus()

7. What are 2 ways of passing data into express?  

query string
URL parameters


__PUSH Questions__

1. Two templating engines commonly used with Express

- Jade
- Mustache / Hogan.js??
- Dust
- EJS (Embedded JS)

2. How do you create a nested express route defined in its own file?

Create an Router() object in Express?

See Express docs - 'guide > routing' to understand birds example

In main file (index.js):
require('./birds');
app.use('/birds', birds)
