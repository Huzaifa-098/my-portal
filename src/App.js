import Login from "./component/login";
import "./App.css";
import SignUp from "./component/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Sidenav from "./component/Sidnav/Sidenav";
import Dashboard from "./Pages/Dashboard";
import { About } from "./Pages/About";
import ProductList from "./Pages/ProductList";
import Table from "./Pages/table";
import Product from "./component/product/Product";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/pro" element={<Product />} />
          <Route path="/tab" element={<Table />} />
          <Route path="/log" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/nav" element={<Navbar />} />
          {/* </Routes> */}
          {/* <Route path="/sidnav" element={<Sidenav />} /> */}
          {/* <Routes> */}
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/prod" element={<ProductList />} />
        </Routes>
        {/* </Sidenav> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
