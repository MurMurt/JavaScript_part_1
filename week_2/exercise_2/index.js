/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    let hash = {};
    let positiveArr = hashtags
        .map(function (tag) {
            return tag.toLowerCase();
        })
        .filter(function (tag) {
            if (!(tag in hash)) {
                hash[tag] = true;
                return true;
            }
            return false;
        });
    return positiveArr.join(', ');
};
