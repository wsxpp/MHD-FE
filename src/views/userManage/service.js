import instance from '@/config/axiosInstance'

export async function getUserList() {
  try {
    const res = await instance.request({
      method: 'get',
      url: 'users'
    })
    return res
  } catch (error) {
    console.log(error)
  }
}

export async function getUserInfo(id) {
  try {
    const res = await instance.request({
      method: 'get',
      url: `user/${id}`
    })
    return res
  } catch (error) {
    console.log(error)
  }
}

export async function updateUserInfo(data) {
  try {
    const res = await instance.request({
      method: 'put',
      url: `user/${data.id}`,
      data
    })
    return res
  } catch (error) {
    console.log(error)
  }
}

export async function delUser(id) {
  try {
    const res = await instance.request({
      method: 'delete',
      url: `user/${id}`,
    })
    return res
  } catch (error) {
    console.log(error)
  }
}