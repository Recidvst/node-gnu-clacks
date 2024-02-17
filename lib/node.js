/**
 * Sets the X-Clacks-Overhead HTTP header for Node.js HTTP responses.
 *
 * - `ghosts`: An optional array of string names to be transmitted through the clacks.
 *             If not provided or if the input is not an array, defaults to ['Terry Pratchett'].
 *
 * @param {string[]} [ghosts=[]] - An optional array of names to be transmitted.
 *                                 Defaults to an empty array, which implies that 'GNU Terry Pratchett'
 *                                 will be added by default.
 * @return {function(http.ServerResponse)} - A function that takes a Node.js HTTP ServerResponse object
 *                                           and sets the X-Clacks-Overhead header on it.
 */

module.exports = function (ghosts = []) {
    ghosts = Array.isArray(ghosts) ? ghosts : [ghosts];

    const clacksValue = ['GNU Terry Pratchett', ...ghosts.map(name => `GNU ${name}`)].join(', ');

    return function (response) {
        response.setHeader('X-Clacks-Overhead', clacksValue);
    }
}
