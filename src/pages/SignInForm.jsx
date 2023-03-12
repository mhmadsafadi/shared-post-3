

import {Row,Form,message,Input, Button, Typography } from 'antd';
import { useState } from 'react';
import Logo from '../../public/logo.svg';
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
 
                <div className="logo">
                    <img src={Logo} alt="Logo" className="img-fluid" />
                <div className="logo" style={{marginTop:"60px"}}>
                    <img src={Logo} alt="Logo" className="img-fluid" style={{width:"113.1px",height:"113px",marginBottom:"10px"}} />
                </div>
                <h2 className="heading">Login</h2>
                <p className="description">Fill the following information to access your account!</p>
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
                  <div className="form-group">
                  <label style={{font: "normal normal 600 18px/39px Lato"}}>Email</label>
                    <Form.Item
                      name="email"
                      onChange={(e)=>setEmail(e.target.value)}
                      value={email}
                      rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                      <Input style={{marginTop:"-10px",width:"380px",height:"40px"}}/>
                    </Form.Item>
                  </div>

                  <div className="">
                      <Form.Item >
                        <Button onClick={()=>navigate("/Home")} style={{width:"28vw",height: 50,background:"#2B60D8",color:"#FFF"}} htmlType="submit" >Login</Button>
                      </Form.Item>
                  </div>
      
     
                </Form>
                
                <p className="para">Don't have an account? <Link to="/" >Sign up</Link></p>
            </div>
        </div>
        </div>
  )
}

export default SignInForm
// <Button  type="primary" style={{width:"30vw",height: 50,background:"#2B60D8"}} htmlType="submit">
//                         Login
//                         </Button>