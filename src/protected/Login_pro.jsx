import { Button, Form, Input } from "antd";
import axios from "axios";
import { API_BASE_URL } from "../../apiconfig";

function Login_pro() {
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
      console.log("Login Successful:", response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-6xl mx-auto justify-center items-center shadow flex">
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
