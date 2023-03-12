

import {Row,Form,message,Input, Button, Typography } from 'antd';
import { useState } from 'react';
import Logo from '../../public/logo.svg';
import { Link,useNavigate } from 'react-router-dom';


function SignUpForm() {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log('Success:', values);
      message.success("Your Success Log In ");
      navigate("/");
      const USER_API_URL =" https://hakathon2023.onrender.com/auth/signup";
      navigate('/SignInForm')
     fetch(USER_API_URL, {
        method: "POST",
        headers: { 
         "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,   
      },
        body: JSON.stringify({
         name: values.name,
          email: values.email,
        }),
      })
      .then(response => response.json())
      .then((acualData)=>{
        localStorage.setItem('accessToken',acualData.data.accessToken);
        localStorage.setItem('refreshToken',acualData.data.refreshToken);
        navigate("/Home");
      }).catch((error) => {
          console.log(error);
            if (!error?.response) {
              setError('No Server Response');
          } else if (error.response?.status === 400) {
            setError('Missing Username or Password');
          } else if (error.response?.status === 401 && error.response?.status === 500) {
            setError('Unauthorized');
          } else {
            setError('Login Failed');
    }})
   };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="content-sec">
    <div className='form-wrapper'>
        <div class="logo" style={{marginTop:"60px"}}>
            <img src={Logo} alt="Logo" class="img-fluid" style={{width:"113.1px",height:"113px",marginBottom:"10px"}} />
        </div>
        <h2 class="heading">Sign Up</h2>
        <p class="description">Fill the following information to access your account</p>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
    <label style={{font: "normal normal 600 18px/39px Lato"}}>Name</label>
    <Form.Item
    name="name"
    value={name}
    onChange={(e)=>setName(e.target.value)}
    rules={[{ required: true, message: 'Please input your name!' }]}
  >
  <Input style={{marginTop:"-10px",width:"380px",height:"40px"}}/>
  </Form.Item>
  <label style={{font: "normal normal 600 18px/39px Lato"}}>Email</label>
      <Form.Item
        name="email"
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
      <Input style={{marginTop:"-10px",width:"380px",height:"40px"}}/>
      </Form.Item>
     <Form.Item >
      <Button type="primary" onClick={()=>navigate("/")} style={{width:"28vw",height: 50,background:"#2B60D8",color:"#FFF"}} htmlType="submit">
          Sign In
       </Button>
      </Form.Item>
      <p className="para">Already have an account? <Link to="/login" >Login</Link></p>
      </Form>
      </div>
      </div>
  )
}

export default SignUpForm;
  
