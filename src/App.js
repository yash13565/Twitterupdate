import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import Register from "./Pages/SignUp/Register";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Profile2 from "./Pages/Profile2/Profile2";
import TweetPage from "./Pages/Tweet/TweetPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Home" element={<Home />} /> 
          <Route path="/Profile/:name" element={<Profile />} />
          <Route path="/Profile2/:name" element={<Profile2 />} />
          <Route path='/Tweetpage' element={<TweetPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
