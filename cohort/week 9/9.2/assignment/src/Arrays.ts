// Given an array of positive integers as input, return the maximum value in the array

function Max(arr: number[]):number{
    return Math.max(...arr);
}

console.log(Max([1,2,3,4,5]));


// Given a list of users, filter out the users that are legal (greater than 18 years of age)

interface User {
    firstname: string;
    lastname: string;
    age: number;
    email: string;
}

function isLegal(user:User[]):User[]{
    return user.filter((user)=>user.age>=18);
}

const Users = [
    {
        firstname:"John",
        lastname:"Doe",
        age:20,
        email:"mohitchoudhary@gmail.com"
    },
    {
        firstname:"John",
        lastname:"Doe",
        age:15,
        email:"mohitchoudhary@gmail.com"
    }
]

console.log(isLegal(Users));