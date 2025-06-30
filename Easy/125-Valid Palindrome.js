/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(c) {
    let filtered = '';
    let str = '';
    for (let i = 0; i < c.length; i++) {
        let ch = c.charAt(i);
        let code = ch.charCodeAt(0);

        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122) || (code >= 48 && code <= 57)) {
            filtered += ch;
            str = ch + str
        }
    }

    str = str.toLowerCase();
    filtered = filtered.toLowerCase();
    return str === filtered;
};
