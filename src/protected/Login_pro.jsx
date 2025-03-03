import { Button, Form, Input } from "antd";

function Login_pro() {
  const onFinish = (values) => {
    console.log(values);
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
