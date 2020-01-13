var exampleString = 'abdbcdeapd';
var stringBase = [];
var countObject = {};

let newStr = makeUnique(exampleString.split('').sort().join(''))

stringBase = newStr.split('')

function makeUnique(str) {
    return String.prototype.concat(...new Set(str))
}

function characterCount(word, character) {
    var count = 0;
    for (var i = 0; i < word.length; i++) {
        if (word[i] === character) {
            count++;
        }
    }
    return count;
}
for (var i = 0, l = stringBase.length; i < l; i++) {
    var currentChar = stringBase[i];
    countObject[currentChar] = characterCount(exampleString, currentChar);
}

console.log(countObject);

