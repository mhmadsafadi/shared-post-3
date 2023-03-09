import React from 'react';
import { Modal } from 'antd';

export const CustomModal = ({ visible, title, content, onCancel }) => {
    return (
        <Modal
          visible={visible}
          title={title}
          onCancel={onCancel}
          footer={null}
        >
          {content}
        </Modal>
      );
}
export default CustomModal;
