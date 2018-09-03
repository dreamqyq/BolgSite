import { mapActions } from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: '',
      error1: '',
      error2: ''
    }
  },

  methods: {
    ...mapActions(['login']),
    onLogin(){
      if(this.password.length >=6 && this.password.length <=16) {
        this.error2 = ''
        this.login({ username: this.username, password: this.password })
          .then(()=>{
            this.$router.push({path: '/'})
          },(response)=>{
            this.error1 = response.msg
          })
      }else {
        this.error2 = '密码长度6到16个字符'
      }
    }
  }
}
