

import {Row,Form,message,Input, Button, Typography } from 'antd';
import { useState } from 'react';
import Logo from '../assets/logo.svg';
import { Link,useNavigate } from 'react-router-dom';

 
function SignInForm() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log('Success:', values);
       message.success("Your Success Log In ");
       navigate("/Home");
       const USER_API_URL ="https://hakathon2023.onrender.com/auth/login";
       fetch(USER_API_URL, {
         method: "POST",
         headers: { 
          "Content-Type": "application/json",
         Authorization: `Bearer ${localStorage.getItem('accessToken')}`,   
       },
         body: JSON.stringify({
          email: values.email,
         }),
       })
       .then(response => response.json())
       .then((acualData)=>{
        console.log(acualData);
         localStorage.setItem('accessToken',acualData.data.accessToken);
         localStorage.setItem('refreshToken',acualData.data.refreshToken);
         localStorage.setItem("data",JSON.stringify(acualData.data.data));
       }).catch((error) => {
           console.log(error);
             if (!error?.response) {
               setError('No Server Response');
           } else if (error.response?.status === 400 && error.response?.status === 401) {
             setError('Unauthorized');
           } else {
             setError('Login Failed');
            }})
   };
   const onFinishFailed = (errorInfo) => {
     console.log('Failed:', errorInfo);
   }; 
  return (
    // <div className='form-wrapper'>
    // <Typography.Title level={2}  style={{fontFamily:"'Open Sans', sans-serif",padding:"5%", margin: '0 auto',textAlign:"center",color:"#e93467" }}>Log In</Typography.Title>
    // <p>Fill the following information to access your account!</p>
    
    //   </div>

        <div className="content-sec">
            <div className='form-wrapper'>
                <div className="logo" >
                    <img src={Logo} alt="Logo" className="img-fluid" />
                </div>
                <h2 className="heading">Login</h2>
                <p className="description">Fill the following information to access your account!</p>
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
                      label="Email"
                      name="email"
                      onChange={(e)=>setEmail(e.target.value)}
                      value={email}
                      rules={[{  message: 'Please input your email!' }]}
                    >
                      <Input />
                    </Form.Item>

                  <Form.Item >
                    <Button className='btn-submit' onClick={()=>navigate("/home")} htmlType="submit" block>Login</Button>
                  </Form.Item>
      
     
                </Form>
                
                <p className="para">Don't have an account? <Link to="/" >Sign up</Link></p>
            </div>
        </div>
  )
}

export default SignInForm
// <Button  type="primary" style={{width:"30vw",height: 50,background:"#2B60D8"}} htmlType="submit">
//                         Login
//                         </Button>