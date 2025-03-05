import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { API_BASE_URL } from "../../apiconfig";
import { useNavigate } from "react-router-dom";

function Login_pro() {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log(values);
    signin(values);
  };
  const signin = async (values) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/v1/login/access-token`,
        {
          username: values.email,
          password: values.password,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      localStorage.setItem("token", response.data.access_token);
      console.log("Login Successful:", response.data);
      navigate("/");
    } catch (error) {
      alert("Invalid email or password");
      console.log(error.response.data.detail);
    }
  };
  return (
    <div className="max-w-6xl mx-auto justify-center items-center shadow flex mt-[100px] p-5">
      <Form className="w-[50%]" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "please enter the email ",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "please enter the password",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login_pro;
