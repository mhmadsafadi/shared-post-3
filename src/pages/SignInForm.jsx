import React,{useState} from 'react'
import {Row,Form,message,Input, Button, Typography } from 'antd';
import { Link,useNavigate } from 'react-router-dom';


function SignInForm() {

    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
          };
          const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
          };
        //   const onFinish = (values) => {
        //     console.log('Success:', values);
        //     message.success("Your Success Log In ");
        //     navigate("/Home");
        //     const USER_API_URL ="https://inner-beauty.onrender.com/api/auth/login";
        //  fetch(USER_API_URL, {
        //        method: "POST",
        //        headers: { 
        //         "Content-Type": "application/json",
        //        Authorization: Bearer ${localStorage.getItem('accessToken')},
        //      },
        //        body: JSON.stringify({
        //         password: values.password,
        //         email: values.email,
        //        }),
        //      })
        //      .then(response => response.json())
        //      .then((acualData)=>{
        //       console.log(acualData);
        //        localStorage.setItem('accessToken',acualData.data.accessToken);
        //        localStorage.setItem('refreshToken',acualData.data.refreshToken);
        //        localStorage.setItem("data",JSON.stringify(acualData.data.data));
        //      }).catch((error) => {
        //          console.log(error);
        //            if (!error?.response) {
        //              setError('No Server Response');
        //          } else if (error.response?.status === 400 && error.response?.status === 401) {
        //            setError('Unauthorized');
        //          } else {
        //            setError('Login Failed');
        //           }})
        //   };
        
  return (
    <div>
      
    </div>
  )
}

export default SignInForm


// function SignInForm() {
//   

//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };
// return (
//     <div className='form-wrapper'>
//    <Typography.Title level={2}  style={{fontFamily:"'Open Sans', sans-serif",padding:"5%", margin: '0 auto',textAlign:"center",color:"#e93467" }}>Log In</Typography.Title>

//     <Form
//       {...layout}
//       name="basic"
//       initialValues={{ remember: true }}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//       className="login-form-container"
//     >
//       <Form.Item
//         label="Username"
//         name="email"
//         onChange={(e)=>setEmail(e.target.value)}
//         value={email}
//         rules={[{ required: true, message: 'Please input your email!' }]}
//       >

//         <Input style={{ width:"30vw",height: 50 }} />
//       </Form.Item>

//       <Form.Item
//         label="Password"
//         name="password"
//         onChange={(e)=>setPassword(e.target.value)}
//           value={password}
//         rules={[{ required: true, message: 'Please input your password!' }]}
//       >
//         <Input.Password style={{ width:"30vw",height: 50 }} />
//       </Form.Item>

//       <Form.Item {...tailLayout}>
//               <Button type="primary" style={{width:"30vw",height: 50,background:"#e93467"}} htmlType="submit">
//                   Sign In
//                </Button>
//               </Form.Item>
//                <Link to="/SignUpForm" style={{marginLeft:"45%",color:"#e93467"}}>I don’t have an account Sign Up</Link>
//     </Form>
//     </div>
//   );
 
//   }

// export default SignInForm