import Login from "./component/login";
import "./App.css";
import SignUp from "./component/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import SideNavBar from "./component/Sidenav";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/nav" element={<Navbar />} />
          <Route path="/sidnav" element={<SideNavBar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
