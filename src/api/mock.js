import { mock } from 'mockjs'
import users from '@/data/users'

mock('/login', 'post', options => {
  try {
    const { name, pwd } = JSON.parse(options.body)
    const user = users.find(item => item.name === name && item.pwd === pwd)
    return Boolean(user)
  } catch {
    return false
  }
})

mock('/person', 'get', () => {
  return users
})
