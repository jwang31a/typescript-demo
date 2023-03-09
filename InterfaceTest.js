//however, classes do exist in JS, so this part exists (although it's a bit more complicated than in TS)
var Student = /** @class */ (function () {
    function Student(n, a, g, h) {
        this.name = n;
        this.age = a;
        this.grade = g;
        this.honors = h;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getAge = function () {
        return this.age;
    };
    Student.prototype.getGrade = function () {
        return this.grade;
    };
    Student.prototype.getHonors = function () {
        return this.honors;
    };
    return Student;
}());
//if uncomment creation of person, this shouldn't compile, since you can't create an instance of an interface
//var joe = new Person();
var bobby = new Student("bobby", 17, 12, false);
console.log(bobby);
//this prints what looks like json
var kevin = { name: "kevin", age: 55, years: 19, tenured: true, subject: "mathematical english", empCode: 4128 };
console.log(kevin);
