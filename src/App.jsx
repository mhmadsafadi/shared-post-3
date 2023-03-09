
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import SignInForm from "./pages/SignInForm";
import SignUpForm from "./pages/SignUpForm";
import { useState } from 'react'
import './App.css'
import {message, Button, Typography, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import CustomModal from './Components/CustomModal/CustomModal';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </Layout>
      </div>

)

}
export default App;


//   name="basic"
//   labelCol={{
//     span: 8,
//   }}
//   wrapperCol={{
//     span: 16,
//   }}
//   style={{
//     maxWidth: 600,
//   }}
//   initialValues={{
//     remember: true,
//   }}
//   return (
//     <div>
    
    
//     </div>
//   )
// }

// export default App
// <button onClick={() => setIsModalVisible(true)}>Show Modal</button>
// <CustomModal
//   visible={isModalVisible}
//   title="My Modal Title"
//   content={
//     <>
//       <h2>Add Post</h2>
//       <textarea name="message" /><br/>
//       <input type="file"/>
//       <div >
//         <button className='btn border'>Cancel</button>
//         <button className='btn fill'>Add</button>
//       </div>
//     </>
  
//   }
//   onCancel={handleModalCancel}
// />

