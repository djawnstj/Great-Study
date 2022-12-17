//데이터타입

var number = 10;
var number2 = 10.12;
// 숫자타입 : 정수와 실수 구분 없이 하나의 숫자타입만이 존재 (실수)
// 때문에 정수로 표시되는 수끼리 나누더라도 실수가 반환될 수 있다.

//문자열 타입
var string = '문자열'; //작은 따옴표 --> 가장 일반적으로 사용 됨
var string2 = "문자열"; // 큰 따옴표
var string3 = `문자열`; // 백틱

// 불리언 타입
var abc = true ;
console.log(abc); // true

abc = false
console.log(abc); // false

// undefined 타입 <-- 유일
var test;
console.log(test); //변수선언에 의해 메모리가 할당 되었으나, 값을 할당하지 않은 경우

//null 타입 <-- 유일

/////////////연산자//////////////

//산술 연산자

5 + 2; // 7 더하기
5 - 2; // 3 빼기
5 * 2; // 10 곱하기
5 / 2; // 2.5 나누기
5 % 2; // 1 나머지


// 단항 산술 연산자

var x = 1;
x++; // 증가
console.log(x); // 2

x--; // 감소
console.log(x); // 1

// ++, -- 연산자는 피연산자의 값을 변경하는 암묵적 할당이 이루어진다.

// 비교연산자

// 동등 비교 연산자 + (반대개념) 부동등 비교  !=
5 == 5; // --> true
5 == '5' // --> true
// 타입을 일치시킨 후 비교 하기 때문에 값이 같다면 다른 타입이더라도 암묵적 타입 변환을 통해 동등하다는 결과가 나옴


// 일치 비교 연산자 + (반대개념) 부일치 비교 !==

5 === 5; // --> true
5 === '5'; // --> false
// 값과 타입이 모두 같은 경우에만 true를 반환

// 논리 연산자

// 논리합(OR) 여러 조건 중 하나만 true여도 true 반환
true || true // true
true || false // true
false || true // true
false || false // false

// 논리곱(and) 주어진 여러 조건을 모두가 true여야만 true 반환
true || true // true
true || false // false
false || true // false수
false || false // false






