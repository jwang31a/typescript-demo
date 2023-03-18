//interface and classes demo file
/*
interface Person {
    name : string;
    age : number;

    getName() : string;
    getAge() : number;
}

interface Worker extends Person {
    occupation : string;

    getOcc() : string;
}
/*

/*
class Professor implements Person {
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
console.log(fire(bob));
console.log(fire(bar));
*/
