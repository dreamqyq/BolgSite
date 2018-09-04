import blog from '@/api/blog'

export default {
  data() {
    return {
      blogs: [],
      user: {},
      page: 1,
      total: 0,
    }
  },

  created() {
    this.userId = this.$route.params.userId
    this.page = parseInt(this.$route.query.page) || 1
    blog.getBlogsByUserId(this.userId, { page: this.page })
      .then(response => {
        this.page = response.page
        this.total = response.total
        this.blogs = response.data
        if(response.data.length > 0){
          this.user = response.data[0].user
        }
      })
  },

  methods: {
    splitDate(date) {
      let dateObj = typeof date === 'object' ? date : new Date(date)
      return {
        date: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear()
      }
    },
    onPageChange(page) {
      blog.getBlogsByUserId(this.userId, { page }).then( response => {
        this.blogs = response.data
        this.total = response.total
        this.page = response.page
        this.$router.push({ path: `/user/${this.userId}`, query: {page}})
      })
    }
  }
}
