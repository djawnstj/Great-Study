name = "홍길동"
age = 25

// js에서의 변수 선언
var name; //선언
var age; //선언

// 출력은 console.log(name)

name = "홍길동"; // 정의, 초기화
console.log(name) // 호출 (홍길동)

name = "김철수"; // 정의, 초기화
console.log(name) // 호출 (김철수)

// 문자열 - string
// '', ""
// js문법, 보통 ''은 문자열이 아니라 문자가 들어감
// a, b, ㄱ, ㄴ

// 숫자 - number
// 다른 언어는 int, Integer
// 바로 숫자 넣어주면 됨. 0, 1, -1, 0.0
age = 25;
age = 25.5;

// 참/거짓 - boolean
// 값은 false/ture - 0, 1
var bool = true; // 1
bool = false; // 0

// js에서 정의되지 않은 값 - undefined
var name2;
console.log(name2); // undefined

// 없는 값 - null
// 에어를 발생시키기 때문에 개발 시 주의해야 함
name = ""; // 비어있는 문자로 값이 존재
console.log(name)
name = null; // 값이 아예 존재하지 않음

// 이런 변수 여러 개를 담을 수 있는 자료형 - 배열 (list, array)도 있음