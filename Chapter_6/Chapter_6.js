// 1 задание

const animals = ["Кот", "Рыба", "Лемур", "Комодский варан"]

for (let i = 0; i < animals.length; ) {
    animals[i] = animals[i] + " - прекрасное животное"
    i++
}
console.log(animals)


// 2 задание

const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
let randomString = ""

for (let i = 0; i < 10; ) {
    randomString = randomString + alphabet[Math.floor(Math.random()*alphabet.length)]
    i++
}
console.log(randomString)


// 3 задание

const input = "javascript is awesome"
let output = ""

for (let i = 0; i < input.length; ) {
    if (input[i] === "a") {
        output = output + "4"
    } else if (input[i] === "e") {
        output = output + "3"
    } else if (input[i] === "i") {
        output = output + "1"
    }else if (input[i] === "o") {
        output = output + "0"
    } else {
        output = output + input[i]
    }
    i++
}

console.log(output)