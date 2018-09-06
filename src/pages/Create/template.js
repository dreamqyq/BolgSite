import blog from '@/api/blog'

export default {
  data () {
    return {
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
  },

  computed: {
  },

  methods: {
    onCreate () {
      blog.createBlog({ title: this.title, description: this.description, content: this.content, atIndex: this.atIndex })
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
