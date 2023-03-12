import React, { useState } from "react";
import { Col, Row, Tooltip, Button, Modal, Form, Input, Radio } from "antd";
import { PlusOutlined, CloudUploadOutlined } from "@ant-design/icons";
import Post from "../components/Post";
import Navbar from "../components/Navbar";
import CustomModal from "../components/CustomModal/CustomModal";
import uploadIcon from '../assets/cloud-upload-outline.svg';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [isAddPostOpen, setIsAddPostOpen] = useState(false);
  const [isEditPostOpen, setIsEditPostOpen] = useState(false);
  const [isSharePostOpen, setIsSharePostOpen] = useState(false);

  const showAddPostModal = () => {
    setIsAddPostOpen(true);
  };

  const handleAddPostCancel = () => {
    setIsAddPostOpen(false);
  };

  const showEditPostModal = () => {
    setIsEditPostOpen(true);
  };

  const handleEditPostCancel = () => {
    setIsEditPostOpen(false);
  };

  const showSharePostModal = () => {
    setIsSharePostOpen(true);
  };

  const handleSharePostCancel = () => {
    setIsSharePostOpen(false);
  };

  const clickEditPost = () => {
    console.log('Clicked Edit btn')
    showEditPostModal()
  }
  const clickDeletePost = () => {
    console.log('Clicked Removed btn')
  }
  const clickSharePost = () => {
    showSharePostModal()
  }

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

  return (
    <>
      <Navbar />
      <div className="page-header">
        <Row justify="space-between" className="head">
          <h2 className="title">List of post</h2>
          <Tooltip title="Add Post" className="add-btn">
              <Button type="primary" shape="circle" onClick={showAddPostModal} icon={<PlusOutlined />} />
          </Tooltip>
        </Row>
        
        <Post clickEditPost={clickEditPost} clickDeletePost={clickDeletePost} clickSharePost={clickSharePost}/>
        <Post />
        
      </div>
      {/* Add Post Modal */}
      <CustomModal
        open={isAddPostOpen}
        title="Add Post"
        content={
          <form>
              <textarea name="message" placeholder="Add Your Post" rows={7}/><br/>
              <div className="custom-file">
								<input type="file" id="postImg" name="postImg" className="custom-file-input" accept="image/*" />
                <label htmlFor="postImg" className="custom-file-label">
                  <span className="text">Upload your image</span>
                  <figure className="icon">
                      <img src={uploadIcon} alt="" />
                  </figure>
                  <p className="text">Drage and drop or browse to choose a file</p>
                </label>
              </div>
          
              <div style={{marginTop:"50px",display:"flex",justifyContent:"center",alignContent:"center",textAlign:"center",gap: "10px"}} >
                <button className='btn border' type="button" onClick={handleAddPostCancel}>Cancel</button>
                <button className='btn fill'>Add</button>
              </div>
          </form>
        
        }
        onCancel={handleAddPostCancel}
      />
      {/* Edit Post Modal */}
      <CustomModal
        open={isEditPostOpen}
        title="Edit Post"
        content={
          <form>
              <textarea name="message" placeholder="Edit Your Post" rows={7} value="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd"/><br/>
              <div className="custom-file edit">
								<input type="file" id="postImg" name="postImg" className="custom-file-input" accept="image/*" />
                <label htmlFor="postImg" className="custom-file-label">
                  <figure className="icon">
                    <CloudUploadOutlined />
                  </figure>
                  <p className="text">Uplode Your Image &nbsp; OR &nbsp; <button className="">Delete</button></p>
                </label>
              </div>
          
              <div style={{marginTop:"50px",display:"flex",justifyContent:"center",alignContent:"center",textAlign:"center",gap: "10px"}} >
                <button className='btn border' type="button" onClick={handleEditPostCancel}>Cancel</button>
                <button className='btn fill'>Edit</button>
              </div>
          </form>
        
        }
        onCancel={handleEditPostCancel}
      />
      {/* Share Post Modal */}
      <CustomModal
        open={isSharePostOpen}
        title="Share Post"
        content={
          <div className="content-sec">
            <Form
                name="basic"
                layout="vertical"
                autoComplete="off"
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{  message: 'Please input your email!' }]}
                  style={{margin: '25px 0 10px'}}
                >
                  <Input />
                </Form.Item>
                <Form.Item label="General access">
                  <Radio.Group>
                    <Radio value="viewedOnly"> Viewed only </Radio>
                    <Radio value="viewedOnlyAndEdit"> Viewed only and edit </Radio>
                  </Radio.Group>
                </Form.Item>
            
                <div style={{marginTop:"50px",display:"flex",justifyContent:"center",alignContent:"center",textAlign:"center",gap: "10px"}} >
                  <button className='btn border' type="button" onClick={handleSharePostCancel}>Cancel</button>
                  <button className='btn fill'>Share</button>
                </div>
            </Form>
          </div>
        }
        onCancel={handleSharePostCancel}
      />
    </>
  );
};

export default Home;
