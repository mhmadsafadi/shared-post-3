import { Row, Form, message, Input, Button, Typography } from "antd";
import { useState } from "react";
import Logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";

function SignUpForm() {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    message.success("Your Success Log In ");
    navigate("/Home");
    const USER_API_URL = " https://hakathon2023.onrender.com/auth/signup";
    navigate("/SignInForm");
    fetch(USER_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
      }),
    })
      .then((response) => response.json())
      .then((acualData) => {
        localStorage.setItem("accessToken", acualData.data.accessToken);
        localStorage.setItem("refreshToken", acualData.data.refreshToken);
        navigate("/Home");
      })
      .catch((error) => {
        console.log(error);
        if (!error?.response) {
          setError("No Server Response");
        } else if (error.response?.status === 400) {
          setError("Missing Username or Password");
        } else if (
          error.response?.status === 401 &&
          error.response?.status === 500
        ) {
          setError("Unauthorized");
        } else {
          setError("Login Failed");
        }
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="content-sec">
      <div className="form-wrapper">
        <div className="logo">
          <img src={Logo} alt="Logo" className="img-fluid" />
        </div>
        <h2 className="heading">Sign Up</h2>
        <p className="description">
          Fill the following information to access your account
        </p>
        <Form
          name="basic"
          layout="vertical"
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
          <Form.Item
            label="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            rules={[{ message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            rules={[
              {
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              style={{ marginTop: "-10px", width: "380px", height: "40px" }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              className="btn-submit"
              onClick={() => navigate("/home")}
              htmlType="submit"
              block
            >
              Sign In
            </Button>
          </Form.Item>
          <p className="para">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </Form>
      </div>
    </div>
  );
}

export default SignUpForm;

// function SignInForm() {
//

// return (

//   );

//   }

// export default SignInForm

// import React from 'react';
// import { Form, Input, Button,Typography,message } from 'antd';
// import { Link,useNavigate } from 'react-router-dom';
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input';
// import {
//   getCountries,
//   getCountryCallingCode,
// } from "react-phone-number-input/input";
// import en from "react-phone-number-input/locale/en.json";
// import {useState}from "react"
// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16 },
// };
// const tailLayout = {
//   wrapperCol: { offset: 8, span: 16 },
// };
// const tailLayout = {
//   wrapperCol: { offset: 8, span: 16 },
// };

// const SignUpForm = () => {
//     const navigate = useNavigate();
//    const [error, setError] = useState("");
//    const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//    const onFinish = (values) => {
//     console.log('Success:', values);
//     message.success("Your Success Sign Up");
//      const USER_API_URL ="";
//      navigate('/SignInForm')
//     fetch(USER_API_URL, {
//        method: "POST",
//        headers: {
//         "Content-Type": "application/json",
//        Authorization: Bearer ${localStorage.getItem('accessToken')},
//      },
//        body: JSON.stringify({
//         name: values.name,
//          email: values.email,
//        }),
//      })
//      .then(response => response.json())
//      .then((acualData)=>{
//        localStorage.setItem('accessToken',acualData.data.accessToken);
//        localStorage.setItem('refreshToken',acualData.data.refreshToken);
//      }).catch((error) => {
//          console.log(error);
//            if (!error?.response) {
//              setError('No Server Response');
//          } else if (error.response?.status === 400) {
//            setError('Missing Username or Email');
//          } else if (error.response?.status === 401 && error.response?.status === 500) {
//            setError('Unauthorized');
//          } else {
//            setError('Login Failed');
//    }})
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

//   return (
//     <div className='formSign-wrapper' style={{paddingLeft:"50px"}}>
//     <Typography.Title level={2}>Sign Up</Typography.Title>
//     <p>Fill the following information to create an account</p>
//     <Form
//       {...layout}
//       name="basic"
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//       className="signup-form-container"
//     >
//     <Form.Item
//         label="Name"
//         name="name"
//         style={{marginLeft:"-10%" }}
//         value={name}
//         onChange={(e)=>setName(e.target.value)}
//         rules={[{ required: true, message: 'Please input your Name!' }]}
//       >
//         <Input style={{ width:"30vw",height: 50 ,marginLeft:"10%"}}/>
//       </Form.Item>

//       <Form.Item
//         label="Email"
//         name="email"
//         style={{marginLeft:"-16%" }}
//         onChange={(e)=>setEmail(e.target.value)}
//         value={email}
//         rules={[{ required: true, message: 'Please input your Email!' }]}
//       >
//         <Input type='email' style={{ width:"30vw",height: 50 ,marginLeft:"14%"}}/>
//       </Form.Item>

//       <Form.Item {...tailLayout}>
//         <Button type="primary" htmlType="submit" className="signup-form-button" style={{ width:"30vw",height: 50,background:"#e93467" }}>
//           Sign up
//         </Button>
//       </Form.Item>
//       <Link to="/SignInForm" style={{paddingLeft:"52%",color:"#e93467" , marginTop:"-12px"}}>Already have an account? Login </Link>
//     </Form>
//     </div>
//   );
// }

// export default SignUpForm
