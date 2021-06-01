// Перечислите своих друзей (и сделайте их лучшими!)

$("h1").text("My friends");
const friends = ["Friend1", "Friend2", "Friend3"];
for (var i = 0; i < friends.length; i++) {
    $("body").append("<p>" + friends[i] + "</p>");
}
$("p").fadeIn(2000);
$("p").hide(900);
$("p").append(" best!");

// Мигающий заголовок

let x = 2000;
for (let i = 0; i < 5; i++) {
    $("h1").fadeOut(x).fadeIn(x);
    x += 2000;
}

// Отложенная анимация
$("p").fadeOut(2000).delay(3000).fadeIn(2000);


// Метод fadeTo()

$("h2").fadeTo(2000, 0.8);