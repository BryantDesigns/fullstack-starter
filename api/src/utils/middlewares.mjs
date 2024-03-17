import { mockUsers } from './constants.mjs';
/**
 * Resolve user by user ID middleware.
 *
 * This middleware will find the user in the mock users array
 * based on the user ID in the URL parameter. If the user is not
 * found, a 404 status code will be sent in the response. If the
 * user ID is not a valid number, a 400 status code will be sent.
 *
 * If the user is found, the middleware will add the index of the
 * user in the mock users array to the request object as
 * `findUserIndex`. This will be used in the user endpoint
 * (/api/users/:id) to retrieve the user from the array.
 *
 * @param {Object} request - the request object
 * @param {Object} response - the response object
 * @param {Function} next - the next function
 * @return {void}
 */
export const resolveUserByUserId = (request, response, next) => {
    const {
        params: { id },
    } = request;
    const parsedId = parseInt(id, 10);
    if (isNaN(parsedId)) {
        // If the user ID is not a number, send a 400 status code
        return response.sendStatus(400);
    }
    const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId);
    if (findUserIndex === -1) {
        // If the user is not found, send a 404 status code
        return response.sendStatus(404);
    }
    // If the user is found, add the index to the request object
    request.findUserIndex = findUserIndex;
    next();
};
