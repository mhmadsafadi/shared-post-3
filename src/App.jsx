
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import SignInForm from "./pages/SignInForm";
import SignUpForm from "./pages/SignUpForm";
import './App.css';


export const App = () => {

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<SignInForm />} />
          <Route path="/" element={<SignUpForm />} />
        </Routes>
      </Layout>
      </div>

)

}
export default App;
