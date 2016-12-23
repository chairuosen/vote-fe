function clone(a){
    return JSON.parse(JSON.stringify(a));
}
function getRandomString(length,sourceString){
    var s = "";
    length = length || 16;
    sourceString = sourceString || "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < length; i++ ) {
        s += sourceString.split('')[Math.floor(Math.random() * sourceString.length)];
    }
    return s;
}

module.exports = {
    clone,
    getRandomString
};