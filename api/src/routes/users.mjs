import { Router } from 'express';
import { query, body, validationResult, checkSchema, matchedData } from 'express-validator';
import { createUserValidationSchema } from '../utils/validationSchemas.mjs';
import { mockUsers } from '../utils/constants.mjs';
import { resolveUserByUserId } from '../utils/middlewares.mjs';

const router = Router();

router.get(
    '/api/users',
    query('filter')
        .isString()
        .notEmpty()
        .withMessage('Must not be empty')
        .isLength({ min: 3, max: 10 })
        .withMessage('Must be between 3 and 10 characters'),
    (request, response) => {
        const result = validationResult(request);
        console.log(result);
        const {
            query: { filter, value },
        } = request;
        if (filter && value)
            return response.send(
                mockUsers.filter((user) => user[filter].includes(value))
            );
        return response.send(mockUsers);
    }
);

router.get('/api/users/:id', resolveUserByUserId, (request, response) => {
    const { findUserIndex } = request;
    const findUser = mockUsers[findUserIndex];
    if (!findUser) return response.sendStatus(404);
    response.send(findUser);
});

router.post(
    '/api/users',
    checkSchema(createUserValidationSchema),
    (request, response) => {
        // Log the request body
        console.log(request.body);
        const result = validationResult(request);
        if (!result.isEmpty()) {
            return response.status(400).send({ errors: result.array() });
        }
        const data = matchedData(request);
        const newUser = {
            id: mockUsers[mockUsers.length - 1].id + 1,
            ...data,
        };
        mockUsers.push(newUser);
        response.status(201).send(newUser);
    }
);

router.put('/api/users/:id', resolveUserByUserId, (request, response) => {
    const { body, findUserIndex } = request;
    mockUsers[findUserIndex] = { id: mockUsers[findUserIndex].id, ...body };
    response.sendStatus(200);
});

router.patch('/api/users/:id', resolveUserByUserId, (request, response) => {
    const { body, findUserIndex } = request;
    mockUsers[findUserIndex] = { ...mockUsers[findUserIndex], ...body };
    response.sendStatus(200);
});

router.delete('/api/users/:id', resolveUserByUserId, (request, response) => {
    const { findUserIndex } = request;
    mockUsers.splice(findUserIndex, 1);
    response.sendStatus(200);
});

export default router;
