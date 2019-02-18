/**
 * В этом задании необходимо вернуть список хештегов, которые содержатся в твите.
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    return tweet.split(' ').filter(function (value) {
        return value.startsWith('#')
    }).map(function (value) {
        return value.slice(1);
    })
};