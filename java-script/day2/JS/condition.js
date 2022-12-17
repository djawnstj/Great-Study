// 조건문 종류는 if/switch
// 조건은 boolean 타입으로 결정되고
if (true) {
    console.log("조건 실행1")
}
if (false) {
    console.log("조건 실행2")
}

var user = {
    name: "홍길동",
    grade: "VIP",
}

if (user.grade === "VIP") {
    console.log("짝짝")
} else if (user.grade === "PRO") {
    console.log("짝")
} else {
    console.log("그냥 넘어감")
}

switch (user.grade) {
    case "VIP": {
        console.log("짝짝")
        break
    }
    case "PRO": {
        console.log("짝")
        break
    }
    default: {
        console.log("그냥 넘어감")
        break
    }
}

// undefined 체크
if (user.구매이력) {
    console.log("회원의 구매이력: " + user.구매이력)
} else {
    console.log("회원의 구매이력: 0건")
}

var a = null;
// null 체크를 통해 에러 핸들링
if (a != null) {
    a.split("\'");
}
// NPE -> NullPointerException

