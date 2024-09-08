import { Random } from 'mockjs'

// 默认用户
const users = [
  {
    id: 0,
    name: 'aaa',
    realName: '正和天下',
    pwd: '123456',
    date: Random.date(),
    address: Random.county(true),
    roleId: '01',
  },
]

// 模拟用户
for (let index = 0; index < 10; index++) {
  users.push({
    id: index + 1,
    name: Random.name(),
    realName: Random.cname(),
    pwd: '123456',
    date: Random.date(),
    address: Random.county(true),
    roleId: '01',
  })
}

export default users
