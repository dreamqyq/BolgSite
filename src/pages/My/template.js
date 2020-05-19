import blog from '@/api/blog'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      blogs: [],
      page: 1,
      total: 0
    }
  },

  computed: {
    ...mapGetters(['user'])
  },

  created () {
    this.page = parseInt(this.$route.query.page) || 1
    blog.getBlogsByUserId(this.user.id, { page: this.page })
      .then(response => {
        this.page = response.page
        this.total = response.total
        this.blogs = response.data
      })
  },

  methods: {
    splitDate (date) {
      let dateObj = typeof date === 'object' ? date : new Date(date)
      return {
        date: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear()
      }
    },
    async onDelete (blogId) {
      await this.$confirm('此操作将永久删除该博客, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      await blog.deleteBlog({ blogId })
      this.$message.success('删除成功！')
      this.blogs = this.blogs.filter(blog => blog.id !== blogId)
    },
    onPageChange (page) {
      blog.getBlogsByUserId(this.user.id, { page }).then(response => {
        this.blogs = response.data
        this.total = response.total
        this.page = response.page
        this.$router.push({ path: '/my', query: { page } })
      })
    }
  }
}
