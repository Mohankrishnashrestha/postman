import { Button, Form, Input } from "antd";
import axios from "axios";

function App() {
  const post = async () => {
    try {
      const response = await axios.post("https://fakestoreapi.com/products");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  const put = async () => {
    try {
      const response = await axios.put("https://fakestoreapi.com/products/$");
    } catch (error) {
      console.log(error);
    }
  };
  const onFinish = (values) => {
    console.log("Success:", values);
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
              <Button htmlType="submit">Update</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default App;
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function CrudExample() {
//   const [posts, setPosts] = useState([]);
//   const [title, setTitle] = useState("");

//   // Fetch Posts (GET)
//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       setPosts(response.data.slice(0, 5)); // Limiting to 5 posts for demo
//     } catch (error) {
//       console.error("Error fetching posts:", error.message);
//     }
//   };

//   // Create Post (POST)
//   const createPost = async () => {
//     try {
//       const newPost = { title, body: "Sample body", userId: 1 };
//       const response = await axios.post(
//         "https://jsonplaceholder.typicode.com/posts",
//         newPost
//       );
//       setPosts([response.data, ...posts]);
//       setTitle(""); // Clear input field
//       console.log("Post Created:", response.data);
//     } catch (error) {
//       console.error("Error creating post:", error.message);
//     }
//   };

//   // Update Post (PUT)
//   const updatePost = async (id) => {
//     try {
//       const updatedPost = { title: "Updated Title", body: "Updated content" };
//       await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, updatedPost);
//       setPosts(posts.map((post) => (post.id === id ? { ...post, ...updatedPost } : post)));
//       console.log(`Post ${id} updated successfully`);
//     } catch (error) {
//       console.error("Error updating post:", error.message);
//     }
//   };

//   // Delete Post (DELETE)
//   const deletePost = async (id) => {
//     try {
//       await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
//       setPosts(posts.filter((post) => post.id !== id));
//       console.log(`Post ${id} deleted successfully`);
//     } catch (error) {
//       console.error("Error deleting post:", error.message);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   return (
//     <div>
//       <h2>React CRUD Example with try...catch</h2>

//       {/* Create Post Form */}
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Enter title"
//       />
//       <button onClick={createPost}>Create Post</button>

//       {/* List Posts */}
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             {post.title}
//             <button onClick={() => updatePost(post.id)}>Update</button>
//             <button onClick={() => deletePost(post.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default CrudExample;
