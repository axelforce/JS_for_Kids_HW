// Упражнение с конструкторами

let speak = function () {
    console.log(this.sound + "! Меня зовут " + this.name);
}
let dog = {
    name: "Cat",
    sound: "гав",
    color: "red",
    speak: speak
};

let cat = {
    name: "Dog",
    sound: "мяу",
    color: "blue",
    speak: speak
};
cat.speak();
dog.speak();

// Рисование машины
let Car = function (x, y) {
    this.x = x;
    this.y = y;
};
Car.prototype.draw = function () {
    let carHtml = 'http.image.com';

    this.carElement = $(carHtml);
    this.carElement.css({
        position: "absolute",
        left: this.x,
        top: this.y
    });

    $("body").append(this.carElement);
};
Car.prototype.moveRight = function () {
    this.x += 5;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

Car.prototype.moveLeft = function () {
    this.x -= 80
    this.carElement.css({
        left: this.x,
        top: this.y

    });
};

Car.prototype.moveUp = function () {
    this.y -= 5;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

Car.prototype.moveDown = function () {
    this.y += 5;
    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

let tesla = new Car(20, 20);
let nissan = new Car(20, 200);

// Переместить tesla;
setInterval(function () {
    tesla.draw();
    tesla.moveRight(Math.random() * 4)
}, 50)

// Переместить nissan;
setInterval(function () {
    nissan.draw();
    nissan.moveRight(Math.random() * 9)
}, 70)

