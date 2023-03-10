
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignInForm from "./pages/SignInForm";
import SignUpForm from "./pages/SignUpForm";
import './App.css';



const App = () => {

    return (
      <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignInForm />} />
            <Route path="/signup" element={<SignUpForm />} />
          </Routes>
      </div>
    )
  }
export default App;
