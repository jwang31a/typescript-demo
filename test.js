var henlo = "Hello World";
console.log(henlo);
//testing addition of strings and numbers
console.log(1 + "3");
console.log("1" + 3);
//objects
//format looks like json/dictionary?
var testObj = { name: "bob the buildfer", time: 1, epicness: 124.4 };
console.log(testObj);
//the famous object Object
console.log(testObj.toString());
//interesting
var thing1 = [];
var thing2 = "";
console.log((thing1 + thing2).toString());
//classes?
var Gaming = /** @class */ (function () {
    function Gaming(epic, appellation) {
        this.isEpic = epic;
        this.name = appellation;
    }
    Gaming.prototype.doThing = function () {
        console.log("epic? " + this.isEpic + ", name is " + this.name);
    };
    return Gaming;
}());
var gamer = new Gaming(true, "yesn't");
gamer.doThing();
//$ usage
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.x = 0;
        this.y = 0;
    }
    return Numbers;
}());
var n = new Numbers();
console.log("".concat(n.x, ", ").concat(n.y));
//testing types
