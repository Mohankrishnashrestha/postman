import { Button, Form, Input } from "antd";
import axios from "axios";
import { useState } from "react";

function Login() {
  const [data, setData] = useState();
  const get = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log("this is from get", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const post = async (values) => {
    try {
      const response = await axios.post(
        "https://fakestoreapi.com/products",
        {
          title: values.name,
          price: values.email,
          category: values.Password,
          description: "Sample product description",
          image: "https://via.placeholder.com/150",
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setData(response);
      console.log("res:", response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const put = async () => {
    try {
      const response = await axios.put(
        `https://fakestoreapi.com/products/${data.data.id}`,
        {
          title: " mohan krishna",
          price: 29.99,
          category: "electronics",
          description: "Sample product description",
          image: "https://via.placeholder.com/150",
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };
  const deleTe = async () => {
    try {
      const response = await axios.delete(
        `https://fakestoreapi.com/products/${data.data.id}`,
        {
          title: " values.name",
          price: 29.99,
          category: "electronics",
          description: "Sample product description",
          image: "https://via.placeholder.com/150",
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    post(values);
    get();
  };
  const del = (values) => {
    deleTe(values);
  };
  return (
    <div className="w-full mt-40 ">
      <div className="max-w-6xl mx-auto lg:flex  justify-center items-center h-150  backdrop-blur-md bg-black/10 rounded-2xl shadow-2xl p-5">
        <div className="p-5 lg:w-[50%]">
          <img
            src="/images/loginimage.jpg"
            alt="lgo in images"
            className="h-[500px] rounded-2xl"
          />
        </div>
        <div className="p-5 flex flex-col items-center lg:w-[50%] hover:shadow-2xl hover:rounded-2xl h-[100%] duration-200">
          <h2 className="py-5 text-2xl">Create an Account</h2>
          <Form
            onFinish={onFinish}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your full name!",
                },
              ]}
            >
              <Input
                placeholder="Full Name"
                style={{ width: "500px", height: "50px", borderRadius: "15px" }}
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                placeholder="Email"
                type="email"
                style={{ width: "500px", height: "50px", borderRadius: "15px" }}
              />
            </Form.Item>
            <Form.Item
              name="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input.Password
                placeholder="Password"
                style={{ width: "500px", height: "50px", borderRadius: "15px" }}
              />
            </Form.Item>
            <div className="lg:grid grid-cols-2">
              <Form.Item>
                <Button
                  htmlType="submit"
                  type="primary"
                  style={{
                    width: "200px",
                    height: "50px",
                    borderRadius: "15px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Sign In
                </Button>
              </Form.Item>

              <Form.Item>
                <Button
                  onClick={put}
                  type="primary"
                  style={{
                    width: "200px",
                    height: "50px",
                    borderRadius: "15px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Update
                </Button>
              </Form.Item>

              <Form.Item>
                <Button
                  onClick={del}
                  type="primary"
                  style={{
                    width: "200px",
                    height: "50px",
                    borderRadius: "15px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  delete
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
