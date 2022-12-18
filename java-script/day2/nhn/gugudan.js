function gugudan(num) {
    var result = " ";

    for(var i = 0; i<10; i++) { // i = 0 if i under than 10, increasing 1 until 10
        result += num * i + " "; // result = 5*1, 5*2
    }
    return result;
}
console.log(gugudan(9))

// 파라미터 값 {
// for 문 :초기화식; 조건식; 증감식;
// (var i = num;

