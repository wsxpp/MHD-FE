import React, { useState, useEffect } from 'react';
import { message, Form, Input, Button, InputNumber, Radio } from 'antd'
import { getUserInfo, updateUserInfo } from './service'
import useReactRouter from 'use-react-router';

export default function UserInfo() {
  const { history, match } = useReactRouter();
  const [userInfo, setUserInfo] = useState({})
  useEffect(() => {
    const fn = async () => {
      const info = await getUserInfo(match?.params?.id)
      if (!info) {
        message.error('用户不存在')
        history.goBack()
      }
      setUserInfo(info)
    }
    fn()
  }, [history, match])

  const onFinish = async values => {
    console.log('Success:', values);
    const res = await updateUserInfo(Object.assign(values, { id: userInfo.id }))
    if (!res) return
    message.success('修改成功')
  };
  if (Object.keys(userInfo).length > 0) {
    return (
      <div className='userInfo' style={{ textAlign: "left" }}>
        <Form
          labelCol={{
            span: 2
          }}
          labelAlign={"right"}
          initialValues={userInfo}
          size={"large"}
          onFinish={onFinish}
        >
          <Form.Item
            label="用户名"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input disabled={!userInfo.canEdit} />
          </Form.Item>
          <Form.Item label="年龄" name="age" rules={[
            {
              required: true,
              message: 'Please input your age!',
            },
          ]}>
            <InputNumber disabled={!userInfo.canEdit} />
          </Form.Item>
          <Form.Item label="性别" name="sex" rules={[{ required: true }]}>
            <Radio.Group disabled={!userInfo.canEdit}>
              <Radio value='male'>男</Radio>
              <Radio value='female'>女</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="电话"
            name="tel"
            rules={[
              {
                required: true,
                message: 'Please input your tel!',
              },
            ]}
          >
            <Input disabled={!userInfo.canEdit} />
          </Form.Item>
          <Form.Item
            label="地址"
            name="address"
            rules={[
              {
                required: true,
                message: 'Please input your address!',
              },
            ]}
          >
            <Input.TextArea disabled={!userInfo.canEdit} />
          </Form.Item>
          <Form.Item
            wrapperCol={
              {
                offset: 10,
                span: 4,
              }
            }
          >
            <Button type="primary" block htmlType="submit" disabled={!userInfo.canEdit}>
              立即修改
          </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
  return (<div></div>)
}