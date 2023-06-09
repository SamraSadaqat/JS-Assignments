// 1

// var multiArr = [[], [], []]

// 2

// var multiArr = [[0, 1, 2, 3],[1, 0, 1, 2],[2, 1, 0, 1]]

// 3

// var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (var i of num) {
//   document.write( "<br>"+i + '<br>')
// }

// 4

// var numberTable = +prompt('Enter a number to show its table: ')
// var tableLength = +prompt('Enter Lenght of Table (e.g. 10): ')
// for (var i = 1; i < tableLength + 1; i++) {
//   document.write(`${numberTable} * ${i} = ${numberTable * i}<br>`)
// }

// 5

// var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']
// document.write("<br>"+fruits+"<br>")
// for (var i in fruits) {
// //   document.write(`Element at index ${i} is ${fruits[i]}<br>`)
// document.write("Element at index "+[i]+" is "+fruits[i]+"<br>")
// }

// 6

// -------a---------

// document.write("<br> Counting: <br><br>")
// for (var i = 1; i < 16; i++) {
//   if (i < 15) {
//     document.write(i + ', ')
//   } 
//   else {
//     document.write(i)
//   }
// }

// ----------b----------

// document.write("<br>Reverse Counting: <br><br>")
// for (var i = 10; i > 0; i--) {
//   if (i > 1) {
//     document.write(i + ', ')
//   } else {
//     document.write(i)
//   }
// }

// ---------c----------

// document.write('<br><br>Even: <br>')
// for (var i = 0; i < 21; i++) {
//   if (i % 2 === 0) {
//     if (i < 20) {
//       document.write(i + ', ')
//     } else {
//       document.write(i)
//     }
//   }
// }

// -------d----------

// document.write('<br><br>Odd: <br>')
// for (var i = 0; i < 21; i++) {
//   if (i % 2 !== 0) {
//     if (i < 19) {
//       document.write(i + ', ')
//     } else {
//       document.write(i)
//     }
//   }
// }

// -----------e----------

// document.write('<br><br>Series: <br>')
// for (var i = 2; i < 21; i++) {
//   if (i % 2 === 0) {
//     if (i < 20) {
//       document.write(i + 'K, ')
//     } else {
//       document.write(i + 'K')
//     }
//   }
// }

// 7

// var items = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// var search = prompt('Welcome to my Bake Shop! What do you want to order? ')
// count = 0
//   if (search == items[i]) {
//     document.write("<br>"+search+" is available at Index "+items[i]+" in our bakery")
//   } 
//   else {         
//     alert(`We are sorry ${search} is not available!`)
//   }


// 8

// var num = [24, 53, 78, 91, 120]
// var minimum = num[0]
// for (var i of num) {
//   if (minimum < i) {
//     minimum = i
//   }
// }
// var maximum = minimum
// document.write("<br> Array Items: "+num)
// document.write("<br> The largest number is: "+maximum)

// 9

// var num=[24,53,78,91,12]
// var minimum = num[0]
// for (var i of num) {
//   if (minimum > i) {
//     minimum = i
//   }
// }
// document.write("<br> Array Items: "+num)
// document.write("<br> The smallest number is: "+minimum)

// 10

// for (var u = 1; u < 101; u++) {
//       if (u % 5 === 0) {
//         if (u < 100) {
//         document.write(u + ' ,')
//         } else {
//           document.write(u)
//         }
//       }
//     }





