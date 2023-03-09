

import {Row,Form,message,Input, Button, Typography } from 'antd';
import { useState } from 'react';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

        
  return (
    <div className='form-wrapper'>
    <Typography.Title level={2}  style={{fontFamily:"'Open Sans', sans-serif",padding:"5%", margin: '0 auto',textAlign:"center",color:"#e93467" }}>Sign Up</Typography.Title>
    <p>Fill the following information to create an account</p>
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
    <Form.Item
    label="Name"
    name="name"
    rules={[
      {
        required: true,
        message: 'Please input your username!',
      },
    ]}
  >
  <Input />
  </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
      <Input />
      </Form.Item>
     <Form.Item >
      <Button type="primary" style={{width:"30vw",height: 50,background:"#e93467"}} htmlType="submit">
          Sign In
       </Button>
      </Form.Item>
      </Form>
      </div>
  )
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

