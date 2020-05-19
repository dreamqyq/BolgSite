import blog from '@/api/blog'

export default {
  data () {
    return {
      blogId: null,
      title: '',
      description: '',
      content: '',
      atIndex: false,
      titleLimit: {
        limit: 30,
        isLimit: false
      },
      descriptionLimit: {
        limit: 100,
        isLimit: false
      },
      contentLimit: {
        limit: 10000,
        isLimit: false
      }
    }
  },

  created () {
    this.blogId = this.$route.params.blogId
    blog.getBlogDetail({ blogId: this.blogId }).then(response => {
      this.title = response.data.title
      this.description = response.data.description
      this.content = response.data.content
      this.atIndex = response.data.atIndex
      this.titleLimit.limit = this.titleLimit.limit - this.title.length
      this.descriptionLimit.limit = this.descriptionLimit.limit - this.description.length
      this.contentLimit.limit = this.contentLimit.limit - this.content.length
    })
  },
  methods: {
    onEdit () {
      blog.updateBlog({ blogId: this.blogId }, { title: this.title, description: this.description, content: this.content, atIndex: this.atIndex })
        .then(response => {
          this.$message.success(response.msg)
          this.$router.push({ path: `/details/${response.data.id}` })
        })
    },
    limitNumber (num, selector) {
      let limitSelector = selector + 'Limit'
      this[limitSelector].limit = num - this[selector].length
      if (this[limitSelector].limit < 0) {
        this[limitSelector].isLimit = true
      } else {
        this[limitSelector].isLimit = false
      }
    }
  }
}
