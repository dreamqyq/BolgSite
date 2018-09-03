import { mapActions } from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: '',
      repassword: '',
      error1: '',
      error2: '',
      error3: ''
    }
  },

  methods: {
    ...mapActions(['register']),
    onRegister(){
      if(this.password.length >=6 && this.password.length <=16) {
        this.error2 = ''
        if(this.repassword === this.password) {
          this.error3 = ''
          this.register({ username: this.username, password: this.password })
            .then(()=>{
              this.$router.push({path: '/'})
            },(response)=>{
              this.error1 = response.msg
            })
        }else {
          this.error3 = '两次密码不匹配'
        }
      }else {
        this.error2 = '密码长度6到16个字符'
      }
    }
  }
}
