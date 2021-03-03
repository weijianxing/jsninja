
exports.mutiMax = function mutiMax(first, ...remains) {
    var sort = remains.sort(function (a,b) {
        return b - a;
    });
    return first*sort[0]
}