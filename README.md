# linus-health-programming-challenge

## Introduction

The `anagramCount` function checks a sentence to find how many times anagrams of a certain word appears. It handles case-insensitivity, word boundaries, and ignores non-alphabetic characters.

## Original Description

Language: Javascript, Typescript, Python, Java

In one of the above languages, produce a function _(with unit tests)_ that meet the following requirements:
- Given two strings (a sentence and a word), return the number of times anagrams of the second string are present within the first.
- Only consider words in the sentence as potential anagrams on whitespace boundaries. Eg `something-iceman` does not need to count toward anagrams of `cinema`, where `something iceman` would constitute 1 match.
  
For example
```javascript
anagramCount(“The iceman did not enjoy the cake”, “cinema”) >1
```

Because `iceman` is an anagram of `cinema`.

## Features

- Treats uppercase and lowercase letters as the same.
- Ignores punctuation and numbers for anagram detection.
- Considers only words separated by spaces when searching for anagrams.

## Sample Anagram Search

```javascript
const countAnagrams = anagramCount("The iceman did not enjoy the cake", "cinema"); 
console.log(countAnagrams); // output: 1
```

## Potential Improvements

- Investigate ways to adapt the function for non-English languages. This likely involves modifying the non-alphabetic character cleaning to accommodate different character sets and writing systems.
