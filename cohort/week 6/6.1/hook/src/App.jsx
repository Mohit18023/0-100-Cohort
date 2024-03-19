import {useState, memo} from 'react'
import './App.css'

function App() {
  return (
    <>
      <HeaderWithButton />
      <Header title="Mohit Choudhary" />
    </>
  )
}

function HeaderWithButton() {
  const [title, setTitle] = useState("Mohit Choudhary");

  const handleClick = () => {
    setTitle("My name is  " + Math.random());
  };

  return (
    <>
      <button onClick={handleClick}>Click me to change the title</button>
      <Header title={title} />
    </>
  );
}
const Header = memo(function Header({ title }) {
  return <div>my name is {title}</div>;
});

export default App;
