
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignInForm from "./pages/SignInForm";
import SignUpForm from "./pages/SignUpForm";
import { useState } from 'react'
import './App.css'
import {message, Image, Form,Button,Input,Radio, Space , Typography, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import CustomModal from './Components/CustomModal/CustomModal';


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
