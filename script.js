//task 1
var str = "Привет";
var sum = 123;
var num = 15.8;
var flag = true;
var txt = "true";

console.log(typeof str);
console.log(typeof sum);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);
/*console.log(typeof flag + "\n" + typeof txt);*/

//Выводим типы переменных в html в тег с указанным id
document.getElementById("task_1").innerHTML = typeof str + "<br>" + typeof sum + "<br>" + typeof num + "<br>"
    + typeof flag + "<br>" + typeof txt;

//task 2
var a1 = 5 % 3;
var a2 = 3 % 5;
var a3 = 5 + "3";
var a4 = "5" - 3;
var a5 = 75 + "кг";
var a6 = 785 * 653;
var a7 = 100 / 25;
var a8 = 0 * 0;
var a9 = 0 / 2;
var a10 = 89 / 0;
var a11 = 98 + 2;
var a12 = 5 - 98;
var a13 = (8 + 56 * 4) / 5;
var a14 = (9 - 12) * 7 / (5 + 2);
var a15 = +"123";
var a16 = 1 || 0;
var a17 = false || true;
var a18 = true > 0;

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);
console.log(a11);
console.log(a12);
console.log(a13);
console.log(a14);
console.log(a15);
console.log(a16);
console.log(a17);
console.log(a18);

// Создаем новый массив со всеми переменными
var array = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18];

//Выводим массив через br в html в тег с указанным id
document.getElementById("task_2").innerHTML = array.join('<br>');

//task 3
var poem = "Бывало, спит у ног собака,\nкостер занявшийся гудит,\nи женщина из полумрака\nглазами зыбкими глядит.\n\n\n"
    + "Потом под пихтою приляжет\nна куртку рыжую мою\nи мне, задумчивая, скажет:\n\n\"А ну-ка, спой!..\"- и я пою.";

console.log(poem);

//Выводим переменную в html в тег с указанным id со всем форматированием
document.getElementById("task_3").innerHTML = "<pre>" + poem + "</pre>";