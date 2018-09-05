import blog from '@/api/blog'

export default {
  data () {
    return {
      blogId: null,
      title:'',
      description: '',
      content: '',
      atIndex: false
    }
  },

  created() {
    this.blogId = this.$route.params.blogId
    blog.getBlogDetail({ blogId: this.blogId }).then( response => {
      this.title = response.data.title
      this.description = response.data.description
      this.content = response.data.content
      this.atIndex = response.data.atIndex
    })
  },
  methods: {
    onEdit() {
      blog.updateBlog ({ blogId: this.blogId }, { title:this.title, description: this.description, content: this.content, atIndex: this.atIndex })
        .then(response=>{
          this.$message.success(response.msg)
          this.$router.push({ path: `/details/${response.data.id}` })
        })
    }
  }
}
