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
              onClick={() => navigate("/")}
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
  
