console.log("example 3 - inheritance_3.js: ");

function Person() {
    this.name = "annoymous";
    this.sayHello = function() {
        alert("Hello, my name is " + this.name);
    }
}

// example 1,2의 문제접을 해결하는 방법
function Developer() {
    Person.call(this);
    this.name = "shkyung";
}
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;
var me = new Developer();
me.sayHello();