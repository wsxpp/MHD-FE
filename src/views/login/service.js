import instance from '@/config/axiosInstance'

export async function login(name, password) {
  try {
    const res = await instance.request({
      method: 'post',
      url: 'login',
      data: {
        name, password
      }
    })
    return res
  } catch (error) {
    console.log(error)
  }
}

export async function registered(data) {
  try {
    const res = await instance.request({
      method: 'post',
      url: 'registered',
      data
    })
    return res
  } catch (error) {
    console.log(error)
  }
}