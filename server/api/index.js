const express = require('express')
const apiv1 = express.Router()

const home = require('./controller/home.js')
const autho = require('./controller/autho.js')
const user = require('./controller/user.js')

const apiMap = [
  {
    path: '/test',
    type: 'get',
    method: home.test
  },
  {
    path: '/login',
    type: 'post',
    method: autho.login
  },
  {
    path: '/registered',
    type: 'post',
    method: autho.registered
  },
  {
    path: '/check',
    type: 'get',
    method: autho.check
  },
  {
    path: '/user/info',
    type: 'get',
    method: user.userInfo
  }
]

for (let item of apiMap) {
  switch (item.type) {
    case 'get': apiv1.get(item.path, item.method); break;
    case 'post': apiv1.post(item.path, item.method); break;
  }
}

module.exports = {
  apiv1
}
