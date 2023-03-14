//generics
//function to return the input using the type any
/*
function identity(arg : any) : any {
    return arg;
}
*/

//but what if we could do this?
//better way to do this?
function identity<Type>(arg : Type) : Type {
    return arg;
}

//instead of using broad approach with 
function long<Type>(arg : Type[]) : Type[] {
    console.log(arg.length);
    return arg;
}

const people:string[] = ["bobby", "john", "kevin"];

console.log(identity(2));
long(people);
