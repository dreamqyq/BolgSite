import request from '@/helpers/request.js'
import auth from '@/api/auth.js'
import blog from '@/api/blog.js'

window.request = request
window.auth = auth
window.blog = blog

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    click1() {
      this.$message({
        message:'恭喜你点开了按钮',
        type:'success'
      });
    },
    click2(){
      this.$alert('你确定要点开吗', '警告', {
        confirmButtonText: '你确定要点开吗',
        callback: action => {
          this.$message({
            message:'恭喜你点开了按钮',
            type:'success'
          })
        }
      })
    }
  }
}
