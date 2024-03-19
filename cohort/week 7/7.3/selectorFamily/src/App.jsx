import "./App.css";
import { RecoilRoot, useRecoilState } from "recoil";
import { todosAtomFamily } from "./atom";
import propTypes from "prop-types";
function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const [todo, ] = useRecoilState(todosAtomFamily(id));

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  );
}
Todo.propTypes = {
  id: propTypes.number,
}

export default App;
