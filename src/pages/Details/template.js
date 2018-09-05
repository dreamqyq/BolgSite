import marked from 'marked'
import blog from '@/api/blog'

export default {
  data () {
    return {
      title: '',
      originContent: '',
      user: {},
      createdAt: ''
    }
  },

  created () {
    this.blogId = this.$route.params.blogId
    blog.getBlogDetail({ blogId: this.blogId }).then(response => {
      this.title = response.data.title
      this.originContent = response.data.content
      this.createdAt = response.data.createdAt
      this.user = response.data.user
    })
  },

  computed: {
    markdown () {
      return marked(this.originContent)
    }
  }
}
