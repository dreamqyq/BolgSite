import axios from 'axios'
import {Message} from 'element-ui'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'http://blog-server.hunger-valley.com'
axios.defaults.withCredentials = true

export default function request (url, type = 'GET', data = {}) {
  return new Promise(function (resolve, reject) {
    let options = {
      url,
      method: type
    }
    if (type.toLowerCase() === 'get') {
      options.params = data
    } else {
      options.data = data
    }
    axios(options).then(response => {
      if (response.data.status === 'ok') {
        resolve(response.data)
      } else {
        Message.error(response.data.msg)
        reject(response.data)
      }
    }).catch(error => {
      Message.error('网络异常')
      reject({msg: '网络异常'})
    })
  })
}
