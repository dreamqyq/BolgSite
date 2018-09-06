import marked from 'marked'
import blog from '@/api/blog'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      title: '',
      originContent: '',
      blogAuth: {},
      createdAt: '',
      isAuth: false
    }
  },

  computed: {
    ...mapGetters(['user']),
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
  },

  created () {
    this.blogId = this.$route.params.blogId
    blog.getBlogDetail({ blogId: this.blogId }).then(response => {
      this.title = response.data.title
      this.originContent = response.data.content
      this.createdAt = response.data.createdAt
      this.blogAuth = response.data.user
      if( this.blogAuth.id === this.user.id ) {
        this.isAuth = true
      }
    })
  },

  methods: {
    async onDelete (blogId) {
      await this.$confirm('此操作将永久删除该博客, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      await blog.deleteBlog({ blogId }).then(response => {
        this.$router.go(-1)
      })
      this.$message.success('删除成功！')
    }
  }

}
