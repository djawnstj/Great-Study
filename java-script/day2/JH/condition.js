// 조건은 boolean 타입으로 결정되고

if (true) {
    console.log("조건 실행1")
}
if (false) {
    console.log("조건 실행2")
}

var user = {
    name: "홍길동",
    grade: "VIP"
    구매이력: "1건"
}

if (user.grade === "vip") {
    console.log("짝짝")
} else if (user.grade) ==="pro") {
    console.log("짝")
} else {
    console.log("그냥 넘어감")
}

switch (user.grade) {
    case "VIP" : {
        console.log("짝짝")
        break
    }
    case "PRO" : {
        console.log("짝")
        break
    }
    default:{
        console.log("그냥 넘어감")
        break
    }
}

// undefined
if(user.구매이력) {
    console.log("구매이력 존재")
}

// undefined 체크

if (user.구매이력) {
    console.log("회원의 구매이력: " + user.구매이력)
} else {
    console.log("회원의 구매이력: 0건)
}

var a = null;
if (a=!null){
    a.split("\'");
}

var a = null,
    a.split("\'");
// NPE -> NullPointerException