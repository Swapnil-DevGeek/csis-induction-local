import { Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Account from "./Pages/Account";
import Navbar from "./components/Navbar";
import AddUser from "./Pages/AddUser";


function App() {
  const isUserSignedIn = !!localStorage.getItem('token')

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        {isUserSignedIn && <Route path='/account' element={<Account />} />}
        {isUserSignedIn && <Route path='/adduser' element={<AddUser />} />}
        
      </Routes>
    </div>
  );
}

export default App;
