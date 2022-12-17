// for, while
// boolean 으로 참이면 반복
// 무한 반복, 무한 루프
// while (true) {
//     console.log("반복중")
// }

var a = 0;
while (a < 10) {
    console.log("a = " + a++);
}

for (var i = 0; i < 10; i++) {
    console.log("i = " + i);
}

// while
// stream 배열인데 나열형? 배열
var list = [1, 2, 3, 4, 5]
for (i = 0; i < list.length; i++) {
    console.log(i + "번째 값 = " + list[i]);
}

// 함수형 프로그래밍
// forEach() 라는 함수로 많이 사용
list.forEach((value, index, arr) => {
    console.log(index + "번째 값 = " + value);
    console.log("원본 배열: " + arr);
});
