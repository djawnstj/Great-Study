// 함수
// 수학에서 함수
// 들어오는 구멍에서 받는 값 - 파라미터
// 나가는 구멍으로 나오는 값 - 리턴 값

// js에서 함수의 기본 문법
// 소괄호가 붙은 단어는 함수다!
function fun1() {
    //중괄호 안에 값을 적는 행위 - 함수를 정의한다.
    console.log("홍길동")
} // fun1() 함수를 정의

// 함수의 호출 - 함수 이름과 소괄호를 붙여줌
fun1(); // fun1 함수를 호출

// 함수는 기능을 갖고있음

var name = "홍길동1"

// 이름을 출력하는 함수
// 이름을 받아서 출력해야 함
function printName(이름) {
    console.log(이름); // 파라미터를 호출
}

// 이름을 출력하는 함수를 호출
printName(이름:"김철수");

// 이름과 나이, 둘 다 받아서 출력해주는 함수

function printNameAndAge(이름, 나이) {
    console.log(이름);
    console.log(나이);
}

var name2 = "홍길동2";
var age = 20;

printNameAndAge(name2, age)

// 값을 리턴해주는 함수
function makeAge() {
    return 20;
}

makeAge(); // 20
var age1 = makeAge(); // makeAge() 함수를 호출해서 받은 리턴값으로 정의
console.log(age1)

// 지역변수, 전역변수
function run() {
    // 지역변수
    var name3 = "홍길동3";
    console.log(name3);
    console.log("뛴다");
}

run();
// 전역변수
var name3 = "홍길동3"
function walk(name) {
    console.log(name);
    console.log("걷는다.");
}

