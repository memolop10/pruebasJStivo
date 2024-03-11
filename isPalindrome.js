

const isPalindrome = (word) => {

    let letters = []

    for (let i = 0; i < word.length; i++) {
        letters.push(word[i]);
    }

    let invertLetters = []

    for (let i = letters.length - 1; i >= 0; i--) {
        invertLetters.push(letters[i])
    }

    let invertWord = ''
    for (let i = 0; i < invertLetters.length; i++) {
        invertWord += invertLetters[i]; 
    }

    return ( invertWord === word ? 'is palindrome' : 'is not palindrome' )
}

console.log(isPalindrome('memo'))
console.log(isPalindrome('oso'))