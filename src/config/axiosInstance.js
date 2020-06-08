import axios from 'axios'
import { message } from 'antd'
import { history } from '../route'

const instance = axios.create({
  baseURL: 'http://localhost:7001',
  timeout: 3000,
  timeoutErrorMessage: "请求超时",
})

instance.interceptors.request.use((request) => {
  if (localStorage.manhuaToken) {
    request.headers = { 'token': localStorage.manhuaToken }
  }
  return request
})

instance.interceptors.response.use((response) => {
  if (response?.data?.code === 200) {
    return response.data.data ?? 'no message'
  } else if (response?.data?.code === 401) {
    message.error('登录失效，请重新登录');
    history.replace('/login')
  } else {
    message.error(response?.data?.msg ?? 'error but get no msg');
  }
})

export default instance