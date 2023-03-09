

import {Row,Form,message,Input, Button, Typography } from 'antd';
import { useState } from 'react';
import Logo from '../../public/logo.svg';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function SignInForm() {
  const [email, setEmail] = useState("");

        
  return (
    // <div className='form-wrapper'>
    // <Typography.Title level={2}  style={{fontFamily:"'Open Sans', sans-serif",padding:"5%", margin: '0 auto',textAlign:"center",color:"#e93467" }}>Log In</Typography.Title>
    // <p>Fill the following information to access your account!</p>
    
    //   </div>

        <div className="content-sec">
            <div className='form-wrapper'>
                <div className="logo">
                    <img src={Logo} alt="Logo" className="img-fluid" />
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
                  </div>

                  <div className="">
                      <Form.Item >
                        <Button className='btn-submit' type="primary" style={{width:"30vw",height: 50,background:"#e93467"}} htmlType="submit">
                            Login
                        </Button>
                      </Form.Item>
                  </div>
      
     
                </Form>
                
                <p className="para">Don't have an account?  <a href="" className="">Sign up</a></p>
            </div>
        </div>
  )
}

export default SignInForm
