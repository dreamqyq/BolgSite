webpackJsonp([3],{"Kq+p":function(e,r){},OpX7:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=t("Dd8w"),n=t.n(s),o=t("NYxO"),a={data:function(){return{username:"",password:"",error1:"",error2:""}},methods:n()({},Object(o.b)(["login"]),{onLogin:function(){var e=this;this.password.length>=6&&this.password.length<=16?(this.error2="",this.login({username:this.username,password:this.password}).then(function(){e.$router.push({path:e.$route.query.redirect||"/"})},function(r){"密码不正确"===r.msg?(e.error1="",e.error2=r.msg):(e.error1=r.msg,e.error2="")})):this.error2="密码长度6到16个字符"}})},i={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"login"}},[t("h4",[e._v("用户名")]),e._v(" "),t("el-input",{attrs:{placeholder:"用户名"},model:{value:e.username,callback:function(r){e.username=r},expression:"username"}}),e._v(" "),t("p",{staticClass:"error"},[e._v(e._s(e.error1))]),e._v(" "),t("h4",[e._v("密码")]),e._v(" "),t("el-input",{attrs:{type:"password",placeholder:"请输入6-16位密码"},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.onLogin(r)}},model:{value:e.password,callback:function(r){e.password=r},expression:"password"}}),e._v(" "),t("p",{staticClass:"error"},[e._v(e._s(e.error2))]),e._v(" "),t("el-button",{attrs:{size:"medium"},on:{click:e.onLogin}},[e._v("立即登录")]),e._v(" "),t("p",{staticClass:"notice"},[e._v("没有账号？"),t("router-link",{attrs:{to:"/register"}},[e._v("注册新用户")])],1)],1)},staticRenderFns:[]};var u=t("VU/8")(a,i,!1,function(e){t("Kq+p")},null,null);r.default=u.exports}});
//# sourceMappingURL=3.ab45afb1a8f211fe9505.js.map