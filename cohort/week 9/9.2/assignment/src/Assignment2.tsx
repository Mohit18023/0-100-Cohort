interface Todo {
  title: string;
  completed: boolean;
}

const todo= [
  {
    title: "Buy Milk",
    completed: false,
  },
  {
    title: "Buy Eggs",
    completed: true,
  },
  {
    title: "Buy Bread",
    completed: false,
  },
];

export default function Assignment2() {
  return (
    <div>
      {todo.map((todo: Todo) => (
        <div>
          <h1>{todo.title}</h1>
          <p>{todo.completed}</p>
        </div>
      ))}
    </div>
  );
}


// using props 
// Todo.tsx
// interface TodoType {
//   title: string;
//   description: string;
//   done: boolean;
// }

// interface TodoInput {
//   todo: TodoType;
// }

// function Todo({ todo }: TodoInput) {
//   return <div>
//     <h1>{todo.title}</h1>
//     <h2>{todo.description}</h2>
    
//   </div>
// }