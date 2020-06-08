import React from 'react'
import { history } from '../../route';
import { Form, Input, Button, InputNumber, Radio, message } from 'antd'
import { registered } from './service'
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 0,
    span: 20,
  },
};
export default function Registered() {
  const onFinish = async values => {
    console.log('Success:', values);
    const res = await registered(values)
    if (!res) return
    message.success('注册成功，请登录')
    history.replace('/login')
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div
      className="login"
      style={{
        height: '100%',
        display: 'flex'
      }}>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          sex: 'male',
        }}
        style={{
          width: '400px',
          margin: 'auto'
        }}
        size={"default"}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <h1 style={
          { textAlign: "center", paddingLeft: '70px', marginBottom: '100px' }
        }>欢迎注册</h1>
        <Form.Item
          {...tailLayout}
          label="用户名"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          {...tailLayout}
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item label="年龄" name="age" rules={[
          {
            required: true,
            message: 'Please input your age!',
          },
        ]}>
          <InputNumber />
        </Form.Item>
        <Form.Item label="性别" name="sex">
          <Radio.Group>
            <Radio value='male'>男</Radio>
            <Radio value='female'>女</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          {...tailLayout}
          label="电话"
          name="tel"
          rules={[
            {
              required: true,
              message: 'Please input your tel!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          {...tailLayout}
          label="地址"
          name="address"
          rules={[
            {
              required: true,
              message: 'Please input your address!',
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          wrapperCol={
            {
              offset: 4,
              span: 20,
            }
          }
        >
          <Button type="primary" block htmlType="submit">
            立即注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}