import axios from 'axios'

const instance = axios.create({
  timeout: 60000,
})

// 添加响应拦截器
instance.interceptors.response.use(
  res => {
    return {
      isSuccess: res.status === 200,
      data: res.data,
    }
  },
  error => {
    return Promise.reject(error)
  }
)

// 只暴露指定请求方式
export const { get, post } = instance
