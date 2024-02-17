/**
 * GNU-clacks Express middleware.
 *
 * - `ghosts`: provide an array of (string) names to be transmitted through the clacks
 *             (default: ['Terry Pratchett'] if not provided or input is not an array).
 *
 * @param {string[]} [ghosts=[]] - An optional array of names to be transmitted.
 *                                 Defaults to an empty array, which will be replaced
 *                                 by ['Terry Pratchett'] in the implementation.
 * @return {function} Middleware function for use in Express.js applications.
 */

module.exports = function (ghosts = []) {
  ghosts = Array.isArray(ghosts) ? ghosts : [ghosts];

  const clacksValue = [
    'GNU Terry Pratchett',
    ...ghosts.map((name) => `GNU ${name}`),
  ].join(', ');

  return function (req, res, next) {
    res.setHeader('X-Clacks-Overhead', clacksValue);
    next();
  };
};
