import React, { useState, useEffect } from 'react';
import useReactRouter from 'use-react-router';
import { Table, message, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { getColumns } from './columns'
import { getUserList, delUser } from './service'

function UserList() {
  const { history } = useReactRouter();
  const [list, setList] = useState([])
  const columns = getColumns({ onClickUserEdit, onClickUserDelete })
  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const res = await getUserList()
    if (!res) return
    setList(res.map(el => {
      el.key = el.id;
      return el
    }))
  }

  function onClickUserEdit(id) {
    history.push(`/manhua/userManage/userInfo/${id}`);
  }

  function onClickUserDelete(id) {
    Modal.confirm({
      title: '确认',
      icon: <ExclamationCircleOutlined />,
      content: '删除后无法恢复，确认删除？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => { confirmDelUser(id) }
    });
  }

  async function confirmDelUser(id) {
    const res = await delUser(id)
    if (!res) return
    message.success('修改成功')
    getData()
  }

  return (
    <div className='userList'>
      <Table dataSource={list} columns={columns} />
    </div>
  )
}

export default UserList