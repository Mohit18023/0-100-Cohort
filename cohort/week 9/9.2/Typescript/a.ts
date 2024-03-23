function greet(fname: string) {
  console.log("Hello " + fname);
}
greet("John");

// type infernece
function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(2, 3));


function Leagal(age:number):boolean{
    return age>=18;
}

console.log(Leagal(20));


// create afunction that takes another function as an input and return after a sec
function delay(func:()=>void){
    setTimeout(func,1000);
}
delay(()=>{
    console.log("hello")
});

//Assignment #1 - Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.



const User = {
    firstname:"John",
    lastname:"Doe",
    age:20,
    email:"john@gmail.com"
}

interface User {
  firstname: string;
  lastname: string;
  age: number;
  email: string;
}
function isLegal(user: User): boolean {
  return user.age >= 18;
}
console.log(isLegal(User));