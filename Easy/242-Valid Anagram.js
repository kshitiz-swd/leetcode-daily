/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let mapS = {}
    let mapT = {}

    if(s.length !== t.length) return false

    for(let i = 0; i < s.length;i++){
        mapS[s[i]] = (mapS[s[i]] || 0) + 1
        mapT[t[i]] = (mapT[t[i]] || 0) + 1
    }
    console.log(mapS)
    console.log(mapT)

    for(let key in mapS){
        if(mapS[key] !== mapT[key]) return false
    }
    return true;
};
