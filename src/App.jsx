
import { useState } from 'react'
import './App.css'
import {message, Image, Form,Button,Input,Radio, Space , Typography, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import CustomModal from './Components/CustomModal/CustomModal';
import SignInForm from './pages/SignInForm';
import SignUpForm from './pages/SignUpForm';

export const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const handleModalCancel = () => {
    setIsModalVisible(false);
  };
  return (
   <div>test</div>
  )
}
export default App;
