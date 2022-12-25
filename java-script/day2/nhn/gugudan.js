// function gugudan(num) {
//     var result = " ";
//
//     for(var i = 0; i<10; i++) { // i = 0 if i under than 10, increasing 1 until 10
//         result += num * i + " "; // result = 5*1, 5*2
//     }
//     return result;
// }
// console.log(gugudan(8))
//
//
//

function gugudan2(num) { // 식까지 함께 나오는 구구단 구현
    for(var i =1; i < 10; i++) {
        console.log(num + " X " + i + " = " + (num*i));
    }
}
gugudan2(4)
gugudan2(8)



