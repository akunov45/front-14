// ! Операторы (+, -, /, *, > <, =, ==, ===, !, ++, -- , && , || ).

// !Методы и свойства типа string (toUpperCase(), trim(), length, взять последний элемент). Условные конструкции(if, switch)
// console.log(5 + 5);
// console.log(5 - 5);
// console.log(5 / 5);
// console.log(5 * 5);
// !toUpperCase(),  //LOREM IPSUM
// !toLowerCase(),  //lorem ipsum
// console.log(text, "с пробелом");
// console.log(text.trim(), "пробел жок");
// console.log(text.length, "длина");
let text = "LOREM IPSUM";
//  index   01234 5 678910
// console.log(text[0]);
// console.log(text[10]);

// let ayana = " Аяна 16"; // 8 -1 7
// //            index

// let elaman = "ELAMAN";
// //               5 index
// //               6 length
// ///                 6 - 1
// console.log(ayana[7]); // 6
// console.log(ayana[ayana.length - 1]); // 6
// console.log(elaman[elaman.length - 1]); // 6

// if(){}
let color = "yellow"; // red || green || yellow
// = =  ==
// if (color == "red") {
// 	//true
// 	console.log("жол чыракта кызыл он жанып турат");
// } else if (color == "green") {
// 	//true
// 	console.log("жол чыракта жашыл он жанып турат");
// } else if (color == "yellow") {
// 	//true
// 	console.log("жол чыракта сары он жанып турат");
// }

switch (color) {
	case "red":
		// 1 red
		console.log("жол чыракта кызыл он жанып турат sw");
		break;
	case "green":
		// 2 green
		console.log("жол чыракта жашыл он жанып турат sw");
		break;
	// 3 yellow
	default:
		console.log("svet jok");
		break;
}

let personAge = prompt("жашыныз канчада?"); //10

// personAge < 12  мультик
// personAge < 16  фантастика
// personAge < 30  боевик
// if(personAge < 12 ){
// console.log('мультик ');
// }
