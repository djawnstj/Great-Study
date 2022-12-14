//함수란? --> 수학에서의 함수와 동일
// 입력을 받아 출력을 내보내는 일련의 과정을 정의한 것

function Case1(x, y) {// 함수 내부로 전달 받는 값을 매개변수(parameter)
    return x + y; //리턴 값
}//함수 정의
Case1(3,3); // 함수 호출 입력받은 값을 인수(argument) 라고 함

var add = function(x, y) {
    return x + y ;
};
add(1,3 ); // 함수 표현식


var run = '달리다' // 전역변수
console.log(run) // 결과 : 달리다

function man(){
    return run; // 전역변수는 어디서든지 사용 가능하다.
}

function man() { // 지역변수
    var x = 3; // 중괄호로 감싼 블록문(block statement)에서 선언된 지역변수는 블록문내에서만 호출할 수 있다.
}
man();
console.log(x); // 결과 : x is not defined









