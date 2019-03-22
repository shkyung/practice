console.log("example 2 - inheritance_2.js: ");

var Person = {
    name: "PersonName",
    sayHello: function () {
        alert("Hello, my name is " + this.name);
    }
};

function Developer() {
    this.name = "shkyung";
}

//example1의 문제점을 해결하는 방법
Developer.prototype = Person;

var me = new Developer();

me.sayHello();
Person.sayHello();

console.log(me instanceof Developer); // true
// 그러나 person이 함수형태가 아니기 때문에, instanceof Person를 이용한 부모객체 확인이 불가능하다.
// console.log(me instanceof Person); -> 에러 발생