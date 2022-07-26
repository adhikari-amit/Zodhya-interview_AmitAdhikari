import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Navbar from "./components/navbar/Navbar";
import Feed from "./pages/feed/Feed";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route exhact path="/" element={<Home/>}/>
        <Route exhact path="/home" element={<Home/>}/>
        <Route exhact path="/feed" element={<Feed/>}/>
        <Route exhact path="/register" element={<Register/>}/>
        <Route exhact path="/login" element={<Login/>}/>
      </Routes>
    </Router>
     
    </>
  );
}

export default App;
