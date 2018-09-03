import request from '@/helpers/request.js'

const URL = {
  GET_LIST: '/blog',
  GET_DETAIL: '/blog/:blogId',
  CREATE: '/blog',
  UPDATE: '/blog/:blogId',
  DELETE: '/blog/:blogId'
}

export default {
  getBlogsList ({ page = 1, userId, atIndex} = { page: 1 }) {
    return request(URL.GET_LIST, 'GET', { page, userId, atIndex })
  },
  getBlogsAtIndex ({ page = 1 } = { page: 1 }) {
    return this.getBlogsList({ page, atIndex: true })
  },
  getBlogsByUserId (userId, { page = 1, atIndex = true } = { page: 1 }) {
    return this.getBlogsList({ userId, page, atIndex })
  },
  getBlogDetail ({ blogId }) {
    return request(URL.GET_DETAIL.replace(':blogId', blogId))
  },
  createBlog ({ title = '', content = '', description = '', atIndex = false } = { title: '', content: '', description: '', atIndex: false}) {
    return request(URL.CREATE, 'POST', { title, content, description, atIndex })
  },
  updateBlog ({ blogId }, { title, content, description, atIndex }) {
    return request(URL.UPDATE.replace(':blogId', blogId), 'PATCH', { title, content, description, atIndex })
  },
  deleteBlog ({ blogId }) {
    return request(URL.DELETE.replace(':blogId', blogId), 'DELETE')
  }
}
