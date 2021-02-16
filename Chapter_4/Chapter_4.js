// Подсчет очков

let score = {
    Tony: 0,
    Erika: 0,
    Jakob: 0
}

let win = true
let allResult = score

const game = function (earn) {
    if (win) {
        earn++
        return earn
    }
}

tonyGame = function() {
    score.Tony = game (score.Tony)
}
erikaGame = function () {
    score.Erika = game (score.Erika)
}
jakobGame = function () {
    score.Jakob = game (score.Jakob)
}

tonyGame()
tonyGame()
erikaGame()

console.log(allResult)


// 2 задание
let myCrazyObject = {
    "name": "Нелепый объект",
    "some array": [7,9, {purpose: "путаница", number: 123}, 3.3],
    "random animal": "Банановая акула"
}
console.log(myCrazyObject["some array"][2].number)