import React from 'react'
import { history } from '../../route';
import { Form, Input, Button, Checkbox } from 'antd'
import { login } from './service'
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
export default function Login() {
  const onFinish = async values => {
    console.log('Success:', values);
    const { name, password } = values
    const userInfo = await login(name, password)
    if (!userInfo) return
    localStorage.manhuaToken = userInfo.token
    localStorage.manhuaUserId = userInfo.id
    localStorage.manhuaUserName = userInfo.name
    history.push('/manhua')
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onClickToRegistered = e => {
    history.push('/registered')
  }
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
          remember: true,
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
        }>小怕跑的漫画网</h1>
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

        <Form.Item
          wrapperCol={
            {
              offset: 18,
            }
          }
          name="remember"
          valuePropName="checked"
        >
          <Checkbox>记住密码</Checkbox>
        </Form.Item>
        <Form.Item
          wrapperCol={
            {
              offset: 20,
              span: 6,
            }
          }
        >
          <Button type="link" onClick={onClickToRegistered}>注册</Button>
          <Button type="link" >忘记密码</Button>
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
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}