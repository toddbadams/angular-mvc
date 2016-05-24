var exports = module.exports = {};

exports.key = function() {
    var d = new Date(),
        delim = '-';
    return d.getFullYear() + delim +
        d.getMonth() + delim +
        d.getDate() + delim +
        d.getHours() +
        d.getMinutes;
};
