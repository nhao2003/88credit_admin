import React, { useState } from 'react';
import {
  Card,
  Typography,
  Button,
  Table,
  Modal,
  Input,
  Space,
  Form,
  Alert,
} from 'antd';
import Breadcrumbs from '../../../globalComponents/BreadCrumb/BreadCrumb';
import Preview from '../../../globalComponents/Blog/Preview';

const { TextArea } = Input;
const { Title } = Typography;

function AddNewPage() {
  const [html, setHtml] = useState('');
  const [title, setTitle] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shortDescription, setShortDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [content, setContent] = useState('');

  const [titleError, setTitleError] = useState('');
  const [shortDescriptionError, setShortDescriptionError] = useState('');
  const [authorError, setAuthorError] = useState('');
  const [thumbnailError, setThumbnailError] = useState('');
  const [contentError, setContentError] = useState('');

  const handleOpenDialog = () => {
    setIsModalOpen(true);
  };

  const handleCloseDialog = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!title.trim()) {
      setTitleError('Vui lòng nhập tiêu đề.');
      return;
    } else {
      setTitleError('');
    }
    if (!shortDescription.trim()) {
      setShortDescriptionError('Vui lòng nhập mô tả ngắn.');
      return;
    } else {
      setShortDescriptionError('');
    }
    if (!author.trim()) {
      setAuthorError('Vui lòng nhập tác giả.');
      return;
    } else {
      setAuthorError('');
    }
    if (!thumbnail.trim()) {
      setThumbnailError('Vui lòng nhập link ảnh thumbnail.');
      return;
    } else {
      setThumbnailError('');
    }
    if (!content.trim()) {
      setContentError('Vui lòng nhập nội dung.');
      return;
    } else {
      setContentError('');
    }
    // If all fields are filled, reset the error states
    setTitleError('');
    setShortDescriptionError('');
    setAuthorError('');
    setThumbnailError('');
    setContentError('');

    // Your form submission logic here
    // For now, you can just log the form data
    console.log({
      title,
      shortDescription,
      author,
      thumbnail,
      content,
    });
  };

  const titleStyle = {
    textAlign: 'center',
  };

  return (
    <div>
      <Card>
        <Breadcrumbs />
        <Title level={3} style={titleStyle}>
          Tạo bài Blog
        </Title>
        <Form method="post" id="contact-form" onSubmit={handleSubmit}>
          <p>
            <span>Tiêu đề</span>
            <Input
              name="title"
              placeholder="Nhập tiêu đề"
              onBlur={(e) => {
                setTitle(e.target.value);
              }}
            />
            {titleError && <Alert message={titleError} type="error" />}
          </p>
          <p>
            <span>Mô tả ngắn</span>
            <TextArea
              name="description"
              rows={4}
              placeholder="Nhập mô tả"
              onChange={(e) => {
                setShortDescription(e.target.value);
              }}
            />
            {shortDescriptionError && (
              <Alert message={shortDescriptionError} type="error" />
            )}
          </p>
          <p>
            <span>Tác giả</span>
            <Input
              name="author"
              placeholder="Nhập tên tác giả"
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
            {authorError && <Alert message={authorError} type="error" />}
          </p>
          <p>
            <span>Thumbnail</span>
            <Input
              name="thumbnail"
              placeholder="Nhập link ảnh thumbnail"
              onChange={(e) => {
                setThumbnail(e.target.value);
              }}
            />
            {thumbnailError && <Alert message={thumbnailError} type="error" />}
          </p>
          <p>
            <span>Nội dung</span>
            <TextArea
              rows={10}
              name="content"
              onBlur={(e) => {
                setHtml(e.target.value);
              }}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              placeholder="Thêm nội dung bài đăng ở đây"
            />
            {contentError && <Alert message={contentError} type="error" />}
          </p>
          <Space>
            <Button type="primary" danger>
              Hủy
            </Button>
            <Button type="primary" onClick={handleOpenDialog}>
              Xem trước
            </Button>
            <Button type="primary" htmlType="submit" >
              Lưu
            </Button>
          </Space>
        </Form>
      </Card>

      <Modal
        title=""
        closeIcon={null}
        open={isModalOpen}
        width={1000}
        footer={[
          <Button key={1} type="primary" onClick={handleCloseDialog}>
            OK
          </Button>,
        ]}
      >
        <Preview html={html} title={title} />
      </Modal>
    </div>
  );
}

export default AddNewPage;
