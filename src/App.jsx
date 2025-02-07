import { Button, Form, Input } from "antd";
import axios from "axios";

function App() {
  const get = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log("response"response);
    } catch (error) {
      console.log(error);
    }
  };
  const post = async () => {
    try {
      const response = await axios.post("https://fakestoreapi.com/products"
        {

        }
      );


    } catch (error) {
      console.error(error);
    }
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    get();
    post();
  };

  return (
    <div>
      <div style={{ width: "500px", padding: "10px", display: "flex" }}>
        <div>
          <Form onFinish={onFinish}>
            <Form.Item
              label="Full Name"
              name="name"
              placeholder="Full Name"
              rules={[
                {
                  required: true,
                  message: "Please input your full name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              placeholder="Email"
              rules={[
                {
                  required: true,
                  message: "please input the email",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="phone_no"
              label="Phone Number"
              placeholder="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your Phone Number!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="subject"
              label="Subject"
              placeholder="Subject"
              rules={[
                {
                  required: true,
                  message: "Please input your Subject!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="message"
              label="Description"
              placeholder="What's on Your mind?"
              rules={[
                {
                  required: true,
                  message: "Please input your description!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default App;
