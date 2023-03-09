
import {Row,Form,message,Input, Button, Typography } from 'antd';
import { useState } from 'react';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function SignInForm() {
  const [email, setEmail] = useState("");

        
  return (
    <div className='form-wrapper'>
    <Typography.Title level={2}  style={{fontFamily:"'Open Sans', sans-serif",padding:"5%", margin: '0 auto',textAlign:"center",color:"#e93467" }}>Log In</Typography.Title>
    <p>Fill the following information to access your account!</p>
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

export default SignInForm


// function SignInForm() {
//   


// return (

//   );
 
//   }

// export default SignInForm