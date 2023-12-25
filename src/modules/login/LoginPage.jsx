// src/components/LoginForm.js
import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Title } = Typography;

const LoginPage = () => {
  const onFinish = (values) => {
    const { username, password } = values;
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('token', '1234567890');
      window.location.href = '/';
    } else {
      alert('Tên người dùng hoặc mật khẩu không đúng');
      sessionStorage.setItem('token', '1234567890');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
      <Title level={3} style={{ textAlign: 'center', color: '#1E7B5F' }}>
        Đăng nhập
      </Title>
      <Form name="login" onFinish={onFinish} initialValues={{ remember: true }}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Vui lòng nhập tên người dùng!' }]}
        >
          <Input
            prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Tên người dùng"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
        >
          <Input.Password
            prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Mật khẩu"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%', backgroundColor: '#1E7B5F' }}>
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
