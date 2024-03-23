interface Person {
    name:string,
    age: number,
    greet(phrase: string):void
}

class Employe implements Person{
    name: string;
    age:  number;

    constructor(n: string, a: number){
        this.name = n;
        this.age = a;
    }

    greet(phrase: string){
        console.log(`${phrase} ${this.name}`)
    }
}

const user1 = new Employe("John", 30);
console.log(user1.greet("Hello"));
