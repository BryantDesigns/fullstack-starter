//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment
import express from 'express';
import routes from './routes/index.mjs';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (request, response) => {
    response.status(201).send({ message: 'Hello from the server!' });
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});
