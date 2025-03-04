import { Button, Form, Input } from "antd";
import axios from "axios";
import { API_BASE_URL } from "../../apiconfig";
function Register() {
  // const handle = async () => {
  //   const response = await axios.post("$(API_BASE_URL)/api/v1/register");
  // };

  // useEffect(() => {
  //   handle();
  // }, []);
  const onFinish = (values) => {
    console.log(values);
    handle(values);
  };
  const handle = async (values) => {
    try {
      const register = await axios.post(
        `${API_BASE_URL}/api/v1/register`,
        {
          full_name: values.name,
          email: values.email,
          password: values.password,
          phone_number: values.ph_no,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(values);
      console.log("Registration Successful:", register.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-6xl mx-auto justify-center items-center shadow flex">
      <Form className="w-[50%]" onFinish={onFinish}>
        <Form.Item
          label="Full Name"
          name="name"
          rules={[
            {
              required: true,
              message: "please enter the full name ",
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

        <Form.Item
          label="Phone number"
          name="ph_no"
          rules={[
            {
              required: true,
              message: "please enter the Phone number",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;
