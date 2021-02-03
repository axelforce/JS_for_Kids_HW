// 1 Задача

const num1 = 36325
const num2 = 9824
const num3 = 777


let add = function (arg1, arg2) {
    return arg1+arg2
}

let multiply = function(arg1, arg2) {
    return arg1*arg2
}

let result = add(multiply(num1,num2),num3)

console.log(result)


// 2 задача

let areArraysSame = function (arg1, arg2) {
    if (arg1.length !== arg2.length) {
        return false
    } else  {
        for (let i = 0; i < arg1.length;) {
           if (arg1[i] === arg2[i]) {
               i++
           } else {return false}
        }
        return true
    }
}

let result1 = areArraysSame([1,2,3],[4,5,6])
let result2 = areArraysSame([1,2,3],[1,2,3])
let result3 = areArraysSame([1,2,3],[1,2,3,4])

console.log(result1)
console.log(result2)
console.log(result3)


// 3 задача

let pickWord = function () {
    let words = [
        "program",
        "intellect",
        "ordinary",
        "life",
        "sky"
    ]

words = words[Math.floor(Math.random() * words.length)]
return words
}
let word = pickWord()
console.log(word)

let setupAnswerArray = function (word) {
  let  answerArray = []
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_"
    }
    return answerArray
}
let answerArray = setupAnswerArray(word)
console.log(answerArray)

let remainingLetters = word.length

let showPlayerProgress = function (array) {
  alert(array.join(" "))
}

let getGuess = function () {
     return prompt("Угадайте букву или нажмите Отмена для выхода из игры.")
}

let updateGameState = function (guess, word, answerArray) {
    let guessNumber = 0;
    for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess
            guessNumber ++
        }
    }
    return guessNumber
}

let showAnswerAndCongratulatePlayer = function (answerArray) {
    alert(answerArray.join(" "))
    alert("Отлично! Было загадано слово " + word)
}

while (remainingLetters > 0) {
    showPlayerProgress(answerArray)

    let guess = getGuess()
    console.log(guess)
    if (guess === null) {
        break
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите только одну букву.")
    } else {
        let correctGuesses = updateGameState(guess, word, answerArray)
        remainingLetters -= correctGuesses
    }
}

showAnswerAndCongratulatePlayer(answerArray)
