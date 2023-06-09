// 1

// var fname = prompt('Enter your first name: ');
// var lname = prompt('Enter your second name: ');
// var fullname = fname + ' ' + lname;
// alert('Hi, ' + fullname);

// 2

// var mobile = prompt('Enter your favorite mobile phone model: ');
// document.write('Your favorite phone is: ' + mobile + '<br>' + 'Length of string: ' + mobile.length);

// 3

// var string = 'Pakistani';
// for (var i = 0; i < string.length; i++) {
//     if (string.slice(i, i + 1) === "n") {
//         document.write("String: " + string + "<br>" + "Index of 'n': " + i);
//         break;
//     }
// }

// 4

// var str = 'Hello world';
// var ind = 0;
// for (var i = 0; i < str.length; i++) {
//     if (str.slice(i, i + 1) === "l") {
//         ind = i;
//     }
// }
// document.write("String: " + str + "<br>" + "Index of 'l': " + ind);

// 5

// var str = 'Pakistani';
// var ind = 3;
// var st = str.charAt(3);
// document.write("<br> String: " + str + "<br>" + " Character at index 3: " + st);

// 6

// var fname = prompt('Enter your first name: ');
// var lname = prompt('Enter your second name: ');
// var fullname = fname.concat(lname);
// alert('Hi, ' + fullname);

// 7

// var string = 'Hyderabad';
// var rep = string.replace('Hyder', 'Islam');
// document.write('<br>City: ' + string + '<br>' + 'After Replacement: ' + rep);

// 8

// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// for (var i = 0; i < message.length; i++) {
//     if (message.slice(i, i + 3) === 'and') {
//         message = message.slice(0, i) + "&" + message.slice(i + 3);
//     }
// }
// document.write("<br>"+message);

// 9

// var val = '472';
// var num = parseInt(val);
// var type_val = typeof (val);
// var type_num = typeof (num);
// document.write('<br> Value: ' + val + '<br>' + 'Type: ' + type_val + '<br>' + 'Value: ' + num + '<br>' + 'Type: ' + type_num);

// 10

// var userInput = prompt('Enter any word: ');
// var capital = userInput.toUpperCase();
// document.write('<br>User Input: ' + userInput + '<br>' + 'Upper case: ' + capital);

// 11

// var userInput = prompt('Enter any word: ');
// var title = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
// document.write('User Input: ' + userInput + '<br>' + 'Upper case: ' + title);

// 12

// var number = 35.36;
// var string = number.toString();
// var st = string.replace('.', '');
// document.write('<br> Number: ' + number + '<br>' + 'String: ' + st);

// 13

// var ch = 0;
// var usernamename = prompt('Enter Username: ');
// for (i = 0; i < usernamename.length; i++) {
//     if (usernamename.codePointAt(i) === 33 || usernamename.codePointAt(i) === 44 || usernamename.codePointAt(i) === 46 || usernamename.codePointAt(i) === 64) {
//         ch += 1;
//     }
// }
// if (ch === 1) {
//     alert('Please enter a valid username.');
// }
// else { }

// 14

// var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var c = prompt("Welcome to ABC bakery. What do you want to order Sir/Ma'am: ");
// var b = c.toLowerCase();
// var flag = 0;
// for (i = 0; i < a.length; i++) {
//     if (a[i] === b) {
//         flag += 1;
//         break;
//     }
// }
// if (flag === 1) {
//     document.write("<br>"+b + ' is availabe at index ' + i + ' of our bakery.');
// }
// else {
//     document.write('<br> We are Sorry. ' + b + ' is not available at our bakery.');
// }

// 15

// var password = prompt('Enter password must be alphanumeric.');
// if (password.length < 6 || (password.codePointAt(0) > 48 && password.codePointAt(0) < 58)) {
//     alert('Enter valid password.');
// }
// else { }

// 16

// var university = 'University of Karachi';
// var arr = university.split("");
// for (var i = 0; i < arr.length; i++) {
//     document.write("<br>"+arr[i] + '<br>');
// }

// 17

// var userInput = prompt('Enter anything: ');
// var last = userInput.length - 1;
// var char = userInput.charAt(last);
// document.write('User input: ' + userInput + '<br>' + 'Last character of input: ' + char);

// 18

// var text = 'The quick brown fox jumps over the lazy dog';
// var inst = 0;
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 3) =='the') {
//         inst += 1;
//     }
//     else { }
// }
// document.write('<br> Text: ' + text + '<br>' + 'There are ' + inst + " occurence of word 'the'");

