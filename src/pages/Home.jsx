import React, { useState } from "react";
import { Row, Tooltip, Button } from "antd";
import { PlusOutlined, CloudUploadOutlined } from "@ant-design/icons";
import Navbar from "../Components/Navbar.jsx";
import PostList from "../Components/PostList.jsx";
import CustomModal from "../Components/CustomModal/CustomModal.jsx";
import "../index.css";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleOpenModal = () => {
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  const handleOk = () => {
    // Perform some action here
    setVisible(false);
  };
  const handleSubmit = async (e, data) => {
    e.preventDefault();
    handleOpenModal();
    const USER_API_URL = "https://hakathon2023.onrender.com/api/post/add";
    await fetch(USER_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({
        withCredentials: true,
        text: data.text,
        image: data.image,
      }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
      });
  };


  // async function getPostList() {
  //   const response = await fetch(https://jsonplaceholder.typicode.com/posts);
  //   const data = await response.json();
  //   setPosts(data);
  // }

  // useEffect(() => {
  //   getPostList();
  // }, []);

  return (
    <>
      <Navbar />
      <div className="page-header">
        <Row
          justify="space-between"
          style={{ textAlign: "center", alignItems: "center" }}
        >
          <h2>List of post</h2>
          <Tooltip title="Add Post">
            <Button
              type="primary"
              shape="circle"
              icon={<PlusOutlined onClick={handleSubmit} />}
            />
            <CustomModal
              title="Add Post"
              content={
                <p>
                  <textarea
                    name="message"
                    style={{ width: "474px", height: "103px" }}
                  />
                  <br />
                  <div className="upload">
                    <p>Upload your image</p>
                    <CloudUploadOutlined
                      style={{
                        color: "#2B60D8",
                        width: "100px",
                        fontSize: "40px",
                      }}
                    />
                    <input id="fileInput" style={{ display: "none" }} />
                    <p>Drage and drop or browse to choose a file</p>
                  </div>
                </p>
              }
              visible={visible}
              onCancel={handleCloseModal}
              onOk={handleOk}
              okButtonProps={{ loading: false }}
            />
          </Tooltip>
        </Row>
        <PostList/>
        <PostList/>
        <PostList/>
      </div>
    </>
  );
};

export default Home;
