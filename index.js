/**
 * GNU-clacks Node/Express middleware.
 *
 *  - `ghosts`: provide an array of (string) names to be transmitted through the clacks (default: Terry Pratchett)
 *
 * @param {string} ghosts
 * @return {function}
 */

module.exports = function(ghosts) {
    ghosts = ghosts || [];

    if ( !Array.isArray(ghosts) ) return function(req, res, next) { 
        res.setHeader('X-Clacks-Overhead', 'GNU Terry Pratchett');
        next()
    }
    else {
        ghosts.unshift('GNU Terry Pratchett');
        ghosts = ghosts.join(', ').toString(); 

        return function(req, res, next) {    
            if ( ghosts.length > 0 ) {        
                res.setHeader('X-Clacks-Overhead', ghosts);
            }    
            next();    
        }
    }   
       
};