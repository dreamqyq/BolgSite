import blog from '@/api/blog.js'

export default {
  data () {
    return {
      blogs: [],
      total:0,
      page:1,
    }
  },
  created() {
    this.page = parseInt(this.$route.query.page) || 1
    blog.getBlogsAtIndex({ page: this.page }).then( response => {
      this.blogs = response.data
      this.total = response.total
      this.page = response.page
    })
  },

  methods:{
    onPageChange(page) {
      blog.getBlogsAtIndex({ page }).then( response => {
        this.blogs = response.data
        this.total = response.total
        this.page = response.page
        this.$router.push({ path: '/', query: {page}})
      })
    }
  }
}
