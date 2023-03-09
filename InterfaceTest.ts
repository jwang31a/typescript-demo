//testing interfaces, since JS doesn't have it
//when this interface compiles into JS, there is nothing in the JS file (because interfaces don't exist in JS)
interface Person {
    name : string;
    age : number;
    
    getName();
    getAge();
}

//this isn't in the JS file either
interface Professor extends Person {
    years : number;
    tenured : boolean;
    subject : string;
    empCode : number;

    getYears();
    isTenured();
    getSubject();
    getCode();
}

//however, classes do exist in JS, so this part exists (although it's a bit more complicated than in TS)
class Student implements Person {
    name : string;
    age : number;
    grade : number;
    honors : boolean;

    constructor(n : string, a : number, g : number, h : boolean) {
        this.name = n;
        this.age = a;
        this.grade = g;
        this.honors = h;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getGrade() {
        return this.grade;
    }

    getHonors() {
        return this.honors;
    }
}

//if uncomment creation of person, this shouldn't compile, since you can't create an instance of an interface
//var joe = new Person();
var bobby = new Student("bobby", 17, 12, false);
console.log(bobby);
//this prints what looks like json
let kevin = {name : "kevin", age : 55, years : 19, tenured : true, subject : "mathematical english", empCode : 4128};
console.log(kevin);
