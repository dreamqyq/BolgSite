webpackJsonp([10],{"C+3u":function(t,e){},CO5T:function(t,e){},Levt:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a=n("Dd8w"),s=n.n(a),o=n("NYxO"),u={data:function(){return{message:"创建博客"}},computed:s()({},Object(o.c)(["isLogin","user"])),created:function(){this.checkLogin()},methods:s()({},Object(o.b)(["checkLogin","logout"]),{onLogout:function(){this.logout()}})},i=n("XyMi");var c=function(t){n("C+3u")},l={name:"App",components:{Header:Object(i.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{class:[t.isLogin?"sticky":"common"]},[t.isLogin?t._e():[n("h1",[n("router-link",{attrs:{to:"/"}},[t._v("博客小站")])],1),t._v(" "),n("p",[t._v("Let's Share !")]),t._v(" "),n("div",{staticClass:"btns"},[n("router-link",{attrs:{to:"/login"}},[n("el-button",{attrs:{round:""}},[t._v("立即登录")])],1),t._v(" "),n("router-link",{attrs:{to:"/register"}},[n("el-button",{attrs:{round:""}},[t._v("注册账号")])],1)],1)],t._v(" "),t.isLogin?[n("h1",[n("router-link",{attrs:{to:"/"}},[t._v("博客小站")])],1),t._v(" "),n("p",{staticClass:"slogan"},[t._v("Let's Share !")]),t._v(" "),n("div",{staticClass:"btns"},[n("router-link",{attrs:{to:"/create"}},[n("i",{staticClass:"edit el-icon-plus",attrs:{title:t.message}})]),t._v(" "),n("router-link",{attrs:{to:"/my"}},[n("img",{staticClass:"avatar",attrs:{src:t.user.avatar,alt:t.user.username,title:t.user.username}})]),t._v(" "),n("el-button",{attrs:{round:""},on:{click:t.onLogout}},[t._v("退出登录")])],1)]:t._e()],2)},[],!1,c,null,null).exports,Footer:n("TVmP").default}};var f=function(t){n("CO5T")},d=Object(i.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header",{attrs:{id:"header"}}),this._v(" "),e("main",{attrs:{id:"main"}},[e("router-view")],1),this._v(" "),e("Footer",{attrs:{id:"footer"}})],1)},[],!1,f,null,null).exports,h=n("/ocq"),p=n("Xxa5"),m=n.n(p),g=n("exGp"),v=n.n(g),b=n("p+dL"),L="/auth/register",_="/auth/login",w="/auth/logout",k="/auth",O=function(t){var e=t.username,n=t.password;return Object(b.a)(L,"POST",{username:e,password:n})},x=function(t){var e=t.username,n=t.password;return Object(b.a)(_,"POST",{username:e,password:n})},y=function(){return Object(b.a)(w)},T=function(){return Object(b.a)(k)},P={state:{user:null,isLogin:!1},getters:{user:function(t){return t.user},isLogin:function(t){return t.isLogin}},mutations:{setUser:function(t,e){t.user=e.user},setLogin:function(t,e){t.isLogin=e.isLogin}},actions:{login:function(t,e){var n=t.commit,r=e.username,a=e.password;return x({username:r,password:a}).then(function(t){n("setUser",{user:t.data}),n("setLogin",{isLogin:!0})})},register:function(t,e){var n=this,r=t.commit,a=e.username,s=e.password;return v()(m.a.mark(function t(){var e;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O({username:a,password:s});case 2:return e=t.sent,r("setUser",{user:e.data}),r("setLogin",{isLogin:!0}),t.abrupt("return",e.data);case 6:case"end":return t.stop()}},t,n)}))()},logout:function(t){var e=this,n=t.commit;return v()(m.a.mark(function t(){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y();case 2:n("setUser",{user:null}),n("setLogin",{isLogin:!1});case 4:case"end":return t.stop()}},t,e)}))()},checkLogin:function(t){var e=this,n=t.commit,r=t.state;return v()(m.a.mark(function t(){var a;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.isLogin){t.next=2;break}return t.abrupt("return",!0);case 2:return t.next=4,T();case 4:if(a=t.sent,n("setLogin",{isLogin:a.isLogin}),a.isLogin){t.next=8;break}return t.abrupt("return",!1);case 8:return n("setUser",{user:a.data}),t.abrupt("return",!0);case 10:case"end":return t.stop()}},t,e)}))()}}},C={state:{},getters:{},mutations:{},actions:{}};r.default.use(o.a);var j=new o.a.Store({modules:{auth:P,blog:C}});r.default.use(h.a);var q=new h.a({routes:[{path:"/",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"epW7"))}},{path:"/login",component:function(){return n.e(5).then(n.bind(null,"OpX7"))}},{path:"/register",component:function(){return n.e(4).then(n.bind(null,"YDhy"))}},{path:"/my",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"vv7P"))},meta:{requiresAuth:!0}},{path:"/edit/:blogId",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"R6sS"))},meta:{requiresAuth:!0}},{path:"/details/:blogId",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"/pT9"))}},{path:"/create",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"/oBs"))},meta:{requiresAuth:!0}},{path:"/user/:userId",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"bywM"))}}]});q.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.requiresAuth})?j.dispatch("checkLogin").then(function(e){j.getters.isLogin?n():n({path:"/login",query:{redirect:t.fullPath}})}):n()});var M=q,E=n("zL8q"),U=n.n(E),A=(n("tvR6"),n("pFYg")),S=n.n(A);function D(t){var e="object"===(void 0===t?"undefined":S()(t))?t:new Date(t),n=Date.now()-e.getTime(),r="";switch(!0){case n<6e4:r="刚刚";break;case n<36e5:r=Math.floor(n/6e4)+"分钟前";break;case n<864e5:r=Math.floor(n/36e5)+"小时前";break;default:r=Math.floor(n/864e5)+"天前"}return r}var B={install:function(t,e){t.prototype.friendlyDate=D}};r.default.use(U.a),r.default.use(B),r.default.config.productionTip=!1,new r.default({el:"#app",router:M,store:j,components:{App:d},template:"<App/>"})},OTkB:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a});var r=function(){var t=this.$createElement;this._self._c;return this._m(0)},a=[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("p",[this._v("\n    © 2018 Designed By Enoch Qin\n    "),e("a",{attrs:{href:"https://github.com/dreamqyq/BolgSite"}},[this._v("源码链接 GitHub >>")])])])}]},TVmP:function(t,e,n){"use strict";var r=n("UthT"),a=n.n(r),s=n("OTkB"),o=n("XyMi");var u=function(t){n("Levt")},i=Object(o.a)(a.a,s.a,s.b,!1,u,null,null);e.default=i.exports},UthT:function(t,e){},"p+dL":function(t,e,n){"use strict";e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new a.a(function(r,a){var s={url:t,method:e};"get"===e.toLowerCase()?s.params=n:s.data=n,o()(s).then(function(t){"ok"===t.data.status?r(t.data):(u.Message.error(t.data.msg),a(t.data))}).catch(function(){u.Message.error("网络异常"),a(new Error({msg:"网络异常"}))})})};var r=n("//Fk"),a=n.n(r),s=n("mtWM"),o=n.n(s),u=n("zL8q");n.n(u);o.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",o.a.defaults.baseURL="https://blog-server.hunger-valley.com",o.a.defaults.withCredentials=!0},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.16d1af85cce8a170a3df.js.map