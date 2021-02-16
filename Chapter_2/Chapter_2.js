let balloons = 100;
balloons *= 2
console.log(balloons)

let balloons2 = 100;
balloons2 /= 4
console.log(balloons2)

//преобразование строки
let sillyString = "эЙ, кАК деЛа?"
let lowerString = sillyString.toLowerCase()
let firstCharacter = lowerString[0]
let firstCharacterUpper = firstCharacter.toUpperCase()
let restOfString = lowerString.slice(1)
let goodString = firstCharacterUpper + restOfString
console.log(goodString)

//валидатор возраста (пустить зрителя с 12 лет или в сопровождении взрослого)
let age = 11
let accompanied = true

if (age >= 12 || accompanied === true ) {
    console.log("Впустить")
}
else {
    console.log("Не впускать")
}
