//генератор комплиментов

const randomVerbs = ["Ты выглядишь", "Ты настроен", "Ты действуешь", "Ты держишься", "Ты трудишься", "Ты обучаешься"]
const randomAdjectives = ["решительно", "убедительно", "целеустремленно", "настойчиво", "неотступно", "усердно", "неуклонно", "терпеливо", "настоятельно"]
const randomWords = ["и тебя обязательно ждет успех,", "и ты хорош в том, что делаешь,", "и мудрость твоя лучшая подруга,", "и успех не за горами,", "и у тебя все получится,"]
const randomReally = ["я тебя уверяю!", "точно тебе говорю!", "просто поверь мне!", "это точно!", "можешь не сомневаться!"]

const random = function (array) {
   return array[Math.floor(Math.random()*array.length)]
}

let Verb = random (randomVerbs)
let Adjective = random(randomAdjectives)
let Word = random(randomWords)
let Really = random(randomReally)

let randomCompliment = [Verb, Adjective, Word, Really]
let Compliment = randomCompliment.join(" ")

console.log(Compliment)

const Array = [3,2,1]
const joinArray = Array.join(" больше, чем ")
