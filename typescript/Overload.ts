function Over(n : number): number;
function Over(n : number, s : string): string;
function Over(n : number, s? : string) : number | string {
    if (s !== undefined) {
        var r = "";
        for (let i = 0; i < n; i++) {
            r += s; 
        }
        return r; 
    } else {
        return n + 25;
    }
}

/*
console.log(Over(2));
console.log(Over(3, "bob"));
*/

class Person {
    name : string;
    
    constructor(name : string) {
        this.name = name;
    }

    getName() : string {
        return this.name;
    }
}

/*
broken code
function Per(p : Person) : string;
function Per(s : string) : Person;
function Per(p1 : Person, s1 : string) : string | Person {
    if (p1 !== undefined) {
        return p1.getName();
    } else if (s1 !== undefined) {
        return new Person(s1);
    }
}

const Bobby = new Person("lil bobby tables");
console.log(Per(Bobby));
console.log(Per("adsf"));
*/
