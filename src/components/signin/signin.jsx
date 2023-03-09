import React ,{useState}from 'react';

import { Form, Input,Typography,Button } from 'antd';
import Logo from '../../assets/logo.svg';


function SignIn() {
    // const navigate = useNavigate();
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
         const onFinish = (values) => {
            console.log('Success:', values);
            message.success("Your Success Log In ");
    }
    
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
    return (
        <div className="content-sec">
            <div className='form-wrapper'>
   {/* <Typography.Title level={2}  style={{fontFamily:"'Open Sans', sans-serif",padding:"5%", margin: '0 auto',textAlign:"center",color:"#e93467" }}>Login</Typography.Title> */}

    {/* <Form
      {...layout}
     name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
       onFinishFailed={onFinishFailed}
      className="login-form-container"
    >
      <Form.Item
         label="Email"
        name="email"
         onChange={(e)=>setEmail(e.target.value)}
         value={email}
         rules={[{ required: true, message: 'Please input your email!' }]}
     >
        <Input style={{ width:"30vw",height: 50 }} />
      </Form.Item>

       <Form.Item {...tailLayout}>
               <Button type="primary" style={{width:"30vw",height: 50,background:"#e93467"}} htmlType="submit">
                 Sign In
                </Button>
              </Form.Item>
               <Link to="/SignUpForm" style={{marginLeft:"45%",color:"#e93467"}}>I don’t have an account Sign Up</Link>
     </Form> */}
                <div class="logo">
                    <img src={Logo} alt="Logo" class="img-fluid" />
                    
                </div>
                <h2 class="heading">Sign Up</h2>
                <p class="description">Fill the following information to create an account</p>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <div className="input-group">
                            <input type="text" className="form-control" name="nameU" placeholder="" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <div className="input-group">
                            <input type="email" className="form-control" name="emailU" placeholder="" required />
                        </div>
                    </div>

                    <div className="">
                        <input type="submit" className="btn-submit" value="Sign Up" />
                    </div>
                </form>
                <p className="para">Already have an account?  <a href="" className="">Login</a></p>
            </div>
        </div>
    )
}
export default SignIn;



                        
                