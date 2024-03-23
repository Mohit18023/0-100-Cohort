// generics are used to create reusable components

function identity<T>(arg: T): T {
  return arg;
}

const output1 = identity<string>("myString");
const output2 = identity<number>(100);

console.log(output1);
console.log(output2);


function firstElement<T>(arg: T[]):T {
    return arg[0];
}

const output3 = firstElement<number>([1,2,3]);
const output4 = firstElement<string>(["a","b","c"]);

console.log(output3);
console.log(output4.toUpperCase());