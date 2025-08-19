//242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

//!1st approch - using two objects
const isAnagram = function (s, t) {

    if (s?.length !== t?.length) return false

    let temp = {};
    let temp2 = {}

    for (let i = 0; i < t.length; i++) {
        if (temp[s[i]]) {
            temp[s[i]] = temp[s[i]] + 1
        } else {
            temp[s[i]] = 1;
        }
        if (temp2[t[i]]) {
            temp2[t[i]] = temp2[t[i]] + 1
        } else {
            temp2[t[i]] = 1;
        }
    }

    for (let j in temp) {
        if (temp[j] !== temp2[j]) {
            return false
        }
    }
    
    return true
};

// 2nd approch - does not need to use two objects
var isAnagram1 = function (s, t) {

    if (s?.length !== t?.length) return false

    let temp = {}

    for (let i = 0; i < t.length; i++) {
        temp[s[i]] = (temp[s[i]] || 0) + 1
        temp[t[i]] = (temp[t[i]] || 0) - 1
    }

    for (let c in temp) {
        if (temp[c] !== 0) return false
    }

    return true
};


// 3rd approch - using Map
var isAnagram2 = function (s, t) {

    if (s?.length !== t?.length) return false

    const nMap = new Map();

    for (let c of s) {
        if (nMap.has(c)) {
            nMap.set(c, nMap.get(c) + 1)
        } else {
            nMap.set(c, 1)
        }
    }

    for (let d of t) {
        if (!nMap.has(d)) return false
        nMap.set(d, nMap.get(d) - 1)
        if (nMap.get(d) === 0) nMap.delete(d)
    }

    return nMap.size === 0;

};