//interface and classes demo file
/*
//basic interface with variables and accessors
interface Person {
    name : string;
    age : number;

    getName() : string;
    getAge() : number;
}

//employee interface still has name, age, and accessor functions, this interface just adds a bit of extra stuff
interface Employee extends Person {
    occupation : string;

    getOcc() : string;
}
*/

/*
//implementation of a interface must have everything that interface has, but adding more things is allowed
class Professor implements Employee {
    name : string;
    age : number;
    occupation : string;
    tenured : boolean;
    id : string;

    constructor(name : string, age : number, occupation : string, tenured : boolean, id : string) {
        this.name = name;
        this.age = age; 
        this.occupation = occupation;
        this.tenured = tenured;
        this.id = id;
    }

    getName() : string {return this.name};

    getAge() : number {return this.age};

    getOcc() : string {return this.occupation};

    isTenured() : boolean {return this.tenured};

    getId() : string {return this.id};
}

//to access things within an instance of a class, call the function
function fire(p : Professor) : boolean | string {
    if (!p.isTenured()) {
        return true;
    } else {
        return "no";
    }
}

const bob = new Professor("lil bobby tables", 45, "professor", true, "1");
const foo = new Professor("foo", 34, "professor", true, "2");
const bar = new Professor("bar", 45, "professor", false, "3");
const f:Professor[] = [bob, foo, bar];
console.log(bob);
console.log(foo.getName());
//by the way TS still has access modifiers like public, private, and protected, but they aren't anything new
//by default everything is public
console.log(foo.name);
console.log(fire(bob));
console.log(fire(bar));
*/

//notice how this file is different from JS file (interface gone, classes look weird)