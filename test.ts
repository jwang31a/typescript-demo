var henlo: string = "Hello World";
console.log(henlo);

//testing addition of strings and numbers
console.log(1+"3");
console.log("1"+3);

//objects
//format looks like json/dictionary?
const testObj = {name: "bob the buildfer", time: 1, epicness: 124.4};
console.log(testObj);
//the famous object Object
console.log(testObj.toString());

//interesting
const thing1 = [];
const thing2 = "";
console.log((thing1 + thing2).toString());

//classes?
class Gaming {
    isEpic: boolean;
    name: string;

    constructor(epic: boolean, appellation: string) {
        this.isEpic = epic;
        this.name = appellation;
    }

    doThing() {
        console.log("epic? " + this.isEpic + ", name is " + this.name);
    }
}

const gamer = new Gaming(true, "yesn't");
gamer.doThing();

//$ usage
class Numbers {
    x = 0;
    y = 0;
}

const n = new Numbers();
console.log(`${n.x}, ${n.y}`);

//testing types
