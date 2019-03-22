console.log("example 1 - inheritance_1.js: ");

function Person() {
    this.name = "PersonName";
    this.sayHello = function() {
        alert("Hello, my name is " + this.name);
    }
}

// 초창기 자바스크립트 상속 방법
function Developer() {
    var obj = new Person();

    obj.name = "shkyung";
    return obj;
}

var me = new Developer();

me.sayHello();
console.log(me instanceof Developer); // false
console.log(me instanceof Person); // true
