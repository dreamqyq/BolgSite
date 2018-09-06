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
      var renderer = new marked.Renderer()
      marked.setOptions({
        renderer: renderer
      })
      renderer.link = function (href, title, text) {
        return '<a target="_blank" href="' + href + '" title="' + href + '">' + text + '</a>'
      }
      return marked(this.originContent, { renderer: renderer })
    }
  }
}
