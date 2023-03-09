import React from "react";
import { Col, Row, Tooltip, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Post from "../components/Post";

const Home = () => {
  return (
    <div className="page-header">
      <Row justify="space-between" style={{textAlign: 'center', alignItems: 'center'}}>
        <h2>List of post</h2>
        <Tooltip title="Add Post">
            <Button type="primary" shape="circle" icon={<PlusOutlined />} />
        </Tooltip>
      </Row>
      
      <Post />
      
    </div>
  );
};

export default Home;
