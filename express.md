# Express.js Cheatsheet 

## Basic Setup

**Overview:** Start by creating a basic Express.js application. This setup includes importing the Express library, initializing your app, and setting it to listen on a specific port. The environment variable `PORT` allows for dynamic port assignment, useful for deployment environments like Netlify.

```Javascript
const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
```

## Routing

**Overview:** Routes define how an application responds to client requests to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, etc.).

```Javascript
// Handling GET requests to the root
app.get('/', (req, res) => { res.send('Hello World!'); });

// Handling POST requests to the root
app.post('/', (req, res) => { res.send('POST request to the homepage'); }); 
```

## Middleware

**Overview:** Middleware functions can execute code, make changes to the request and response objects, end the request-response cycle, and call the next middleware function.

```Javascript
// Parse JSON bodies
app.use(express.json()); 

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true })); 

// Serve static files from 'public' directory
app.use(express.static('public')); 
```

## Router Objects

**Overview:** For more complex applications, routes can be modularized into separate files using Router objects. This helps in maintaining cleaner code and better structure.

```Javascript
const router = express.Router(); 
app.use('/api', router);

router.get('/users', (req, res) => { res.send('User list'); });
```

## Responses

**Overview:** Express provides multiple methods to send responses to the client, supporting various content types and status codes.

```Javascript
// Sending text response
res.send('Hello World!'); 

// Sending JSON response
res.json({ message: 'Hello World!' }); 

// Redirecting to another route
res.redirect('/login'); 
```

## Session Data

**Overview:** Sessions allow you to store data specific to a user across requests. express-session is a middleware that enables session support.

```Javascript
const session = require('express-session');
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: true }));

app.get('/', (req, res) => {
  req.session.viewCount = req.session.viewCount ? req.session.viewCount + 1 : 1;
  res.send(`Page views: ${req.session.viewCount}`);
}); 
```

## EJS Templating

**Overview:** EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.

```Javascript
app.set('view engine', 'ejs');

app.get('/', (req, res) => { res.render('index', { title: 'Homepage' }); });
```

## Environment Variables

**Overview:** Environment variables are key-value pairs external to your application, which can control your app's behavior without requiring code changes.

```Javascript
require('dotenv').config();

const PORT = process.env.PORT || 4000; 
```

## Static Files

**Overview:** Serving static files (images, CSS, JavaScript) to the client can be done easily with Express by defining a static directory.

```Javascript
app.use(express.static('public')); 
```

## Redirects

**Overview:** Redirects are used to forward a client to a different endpoint.

```Javascript
// Temporary redirect using the 302 status code (default)
res.redirect('/new-url'); 

// Permanent redirect using the 301 status code
res.redirect(301, '/permanent-url');
```

## Logging

**Overview:** Logging request details can be invaluable for debugging and monitoring your application. Morgan is a popular HTTP request logger middleware for node.js.

```Javascript
const morgan = require('morgan');
app.use(morgan('tiny'));
```

## Error Handling

**Overview:** Proper error handling can improve the reliability of your application by catching and managing errors gracefully.

```Javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```
