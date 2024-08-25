import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { User } from './components/User';
import { Signin } from './components/Signin';
import { Signup } from './components/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/signin"} element={<Signin />} />
        <Route path={"/user"} element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App