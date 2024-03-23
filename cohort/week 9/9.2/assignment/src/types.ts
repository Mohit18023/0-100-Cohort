// union
// type let us define a type that can be of multiple types
// type id = string | number;
// interfaces are used to define the structure of an object
type id = string | number;

function printId(id: id) {
    console.log(`ID is ${id}`);
}

printId(101);
printId("202");


// intersection types
// intersection types are used to combine multiple types

type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
   name: string;
   department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: "Mohit",
  startDate: new Date(),
  department: "Software developer",
};

console.log(teamLead);