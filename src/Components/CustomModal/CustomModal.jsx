import React from 'react';
import { Modal, Button } from 'antd';

export const CustomModal = ({ title, content, visible, onCancel, onOk, okButtonProps }) => {
    return (
        <Modal
        title={title}
        visible={visible}
        onCancel={onCancel}
        footer={[
            <div style={{textAlign:"center",padding:"10px"}}>
          <Button key="cancel" onClick={onCancel} style={{width:"150px"}}>
            Cancel
          </Button>
          <Button key="submit" type="primary" style={{width:"150px"}} onClick={onOk} {...okButtonProps} >
            OK
          </Button>
          </div>
        ]}
      >
        {content}
      </Modal>
      );
}
export default CustomModal;
