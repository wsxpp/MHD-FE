import React from 'react'
import { Button } from 'antd'
export function getColumns({
  onClickUserEdit,
  onClickUserDelete
}) {
  return [
    {
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: '手机号',
      dataIndex: 'tel',
    },
    {
      title: '住址',
      dataIndex: 'address',
    },
    {
      title: '操作',
      dataIndex: 'action',
      render: (text, row, index, a, b) => {
        return (
          <div className="btns">
            <Button type="link" onClick={() => { onClickUserEdit(row.id) }}>编辑</Button>
            <Button type="link" onClick={() => { onClickUserDelete(row.id) }}>删除</Button>
          </div>
        );
      }
    },
  ]
}