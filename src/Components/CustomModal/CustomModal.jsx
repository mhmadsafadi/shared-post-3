import React from 'react';
import { Modal } from 'antd';

export const CustomModal = ({ open, title, content, onCancel }) => {
    return (
        <Modal
          open={open}
          title={title}
          onCancel={onCancel}
          footer={null}
          className="common-modal"
          width={700}
        >
          {content}
        </Modal>
      );
}
export default CustomModal;
