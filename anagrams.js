/**
 * Counts the number of anagrams of a given word present in a sentence.
 *
 * An anagram is a word or phrase formed by rearranging the letters of a different word or phrase.
 *
 * @param {string} sentence - sentence within which to find anagrams of the specified word.
 * @param {string} word - word for which to find anagrams within the sentence.
 * @returns {number} - number of anagrams of the specified word found in the sentence.
 */
function anagramCount(sentence, word) {
    const nonAlphaRegex = /[^a-z]/gi;
    const originalCleanedWord = word.toLowerCase().replace(nonAlphaRegex, '');
    const originalSortedWord = originalCleanedWord.split('').sort().join('');
    const words = sentence.toLowerCase().split(/\s+/);

    let count = 0;

    if (originalCleanedWord.length === 0) {
        return 0;
    }

    words.forEach((w) => {
        const currentCleanedWord = w.replace(nonAlphaRegex, '');

        if (currentCleanedWord.length === originalCleanedWord.length) {
            const currentSortedWord = currentCleanedWord.split('').sort().join('');

            if (currentSortedWord === originalSortedWord) {
                count++;
            }
        }
    });

    return count;
}

// Unit Tests
console.log('test one: ', anagramCount('The iceman did not enjoy the cake', 'cinema')); // output: 1

console.log('test two: ', anagramCount('The iceman-did not enjoy the cake', 'cinema')); // output: 0

console.log('test three: ', anagramCount('The i#ceman did not enjoy the cake', 'ci0nema')); // output: 1

console.log('test four: ', anagramCount('The iceman did icenam not enjoy the cake', 'cinema')); // output: 2

console.log('test five: ', anagramCount('The IceMAN did not enjoy the cake', 'cineMA')); // output: 1

console.log('test six: ', anagramCount('', 'cinema')); // output: 0

console.log('test seven: ', anagramCount('The iceman did not enjoy the cake', '')); // output: 0

console.log('test eight: ', anagramCount('The iceman iceman did not enjoy the cake', 'cinema')); // output: 2

console.log('test nine: ', anagramCount('The man did not enjoy the cake', 'cinemaaaa')); // output: 0

console.log('test ten: ', anagramCount('cinema', 'cinema')); // output: 1

console.log('test eleven: ', anagramCount('123 456 789', '!@#')); // output: 0

console.log('test twelve: ', anagramCount('The icemanic did not enjoy the cake', 'cinema')); // output: 0

console.log('test thirteen: ', anagramCount('The icemman did not enjoy the cake', 'cinema')); // output: 0
