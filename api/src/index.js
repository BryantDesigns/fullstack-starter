//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment
const express = require("express");
const { body, validationResult, query } = require('express-validator');
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;
//const cors = require("cors");


//app.use(cors());

const loggingMiddleware = (request, response, next) => { 
  console.log(`${request.method} ${request.path}`);
  console.table(`${request.method} ${request.path}`);
  next();
}

const resolveUserByUserId = (request, response, next) => {
  const { params: { id } } = request;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) {
    return response.sendStatus(400);
  }
  const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId);
  if (findUserIndex === -1) return response.sendStatus(404);
  request.findUserIndex = findUserIndex;
  next();
};

const mockUsers = [
  { id: 1, username: 'TBryant44', displayName: "Tyler Bryant" },
  { id: 2, username: 'BrookieB', displayName: "Brooklyn Bryant" },
  { id: 3, username: 'SaintSandy', displayName: "Sandy Bryant" }
];
const mockProducts = [
  { id: 1, name: 'Apple iPhone 13', price: 799, category: 'Electronics', description: '5.4-inch display, A15 Bionic chip, 5G capable' },
  { id: 2, name: 'Samsung Galaxy S21', price: 699, category: 'Electronics', description: '6.2-inch display, Exynos 2100, 5G capable' },
  { id: 3, name: 'Dell XPS 13', price: 999, category: 'Computers', description: '13.4-inch display, Intel i7, 16GB RAM, 512GB SSD' }
];

app.get("/", (request, response) => {
  response.status(201).send({ message: "Hello from the server!" });
});

app.get('/api/users',
  query('filter').isString().notEmpty().withMessage('Must not be empty').isLength({ min: 3 , max: 10}).withMessage('Must be between 3 and 10 characters'),
  (request, response) => {
    const result = validationResult(request);
    console.log(result)
  const { query: { filter, value } } = request;
  if (filter && value) return response.send(
    mockUsers.filter((user) => user[filter].includes(value))
  );
  return response.send(mockUsers);
});

app.post('/api/users', (request, response) => {
  // Log the request body
  console.log(request.body);
  const { body } = request;
  const newUser = {
    id: mockUsers[mockUsers.length - 1].id + 1,
    ...body
  }
  mockUsers.push(newUser);
  response.status(201).send(newUser);
});
app.use(loggingMiddleware);

app.get('/api/users/:id', resolveUserByUserId, (request, response) => {
  const { findUserIndex } = request;
  const findUser = mockUsers[findUserIndex];
  if (!findUser) return response.sendStatus(404);
  response.send(findUser);
});

app.get('/api/products', (request, response) => {
  response.send(mockProducts);
});

app.put('/api/users/:id', resolveUserByUserId, (request, response) => {
  const { body, findUserIndex } = request;
  mockUsers[findUserIndex] = { id: mockUsers[findUserIndex].id, ...body };
  response.sendStatus(200);
});

app.patch('/api/users/:id', resolveUserByUserId, (request, response) => {
  const { body, findUserIndex } = request;
  mockUsers[ findUserIndex ] = { ...mockUsers[ findUserIndex ], ...body };
  response.sendStatus(200); 
})

app.delete('/api/users/:id', resolveUserByUserId, (request, response) => {
  const { findUserIndex } = request;
  mockUsers.splice(findUserIndex, 1);
  response.sendStatus(200);
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
