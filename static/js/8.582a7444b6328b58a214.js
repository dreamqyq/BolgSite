webpackJsonp([8],{"/oBs":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("ZYmg"),s={data:function(){return{title:"",description:"",content:"",atIndex:!1,titleLimit:{limit:30,isLimit:!1},descriptionLimit:{limit:100,isLimit:!1},contentLimit:{limit:1e4,isLimit:!1}}},created:function(){},computed:{},methods:{onCreate:function(){var t=this;n.a.createBlog({title:this.title,description:this.description,content:this.content,atIndex:this.atIndex}).then(function(i){t.$message.success(i.msg),t.$router.push({path:"/details/"+i.data.id})})},limitNumber:function(t,i){var e=i+"Limit";this[e].limit=t-this[i].length,this[e].limit<0?this[e].isLimit=!0:this[e].isLimit=!1}}},c={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"create"}},[e("h1",[t._v("创建文章")]),t._v(" "),e("h3",[t._v("文章标题")]),t._v(" "),e("el-input",{class:{active:t.titleLimit.isLimit},attrs:{clearable:""},on:{input:function(i){return t.limitNumber(30,"title")}},model:{value:t.title,callback:function(i){t.title=i},expression:"title"}}),t._v(" "),e("p",{class:[{active:t.titleLimit.isLimit},"msg"]},[t._v("字数限制在 30 字内，您还可以输入 "+t._s(t.titleLimit.limit)+" 字")]),t._v(" "),e("h3",[t._v("内容简介")]),t._v(" "),e("el-input",{class:{active:t.descriptionLimit.isLimit},attrs:{type:"textarea",autosize:{minRows:2,maxRows:6}},on:{input:function(i){return t.limitNumber(100,"description")}},model:{value:t.description,callback:function(i){t.description=i},expression:"description"}}),t._v(" "),e("p",{class:[{active:t.descriptionLimit.isLimit},"msg"]},[t._v("字数限制在 100 字内，您还可以输入 "+t._s(t.descriptionLimit.limit)+" 字")]),t._v(" "),e("h3",[t._v("文章内容")]),t._v(" "),e("el-input",{class:{active:t.contentLimit.isLimit},attrs:{type:"textarea",autosize:{minRows:4,maxRows:30}},on:{input:function(i){return t.limitNumber(1e4,"content")}},model:{value:t.content,callback:function(i){t.content=i},expression:"content"}}),t._v(" "),e("p",{class:[{active:t.contentLimit.isLimit},"msg"]},[t._v("字数限制在 10000 字内，您还可以输入 "+t._s(t.contentLimit.limit)+" 字")]),t._v(" "),e("p",{staticClass:"btn"},[e("label",[t._v("是否展示到首页")]),t._v(" "),e("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.atIndex,callback:function(i){t.atIndex=i},expression:"atIndex"}})],1),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.onCreate}},[t._v("创建")])],1)},staticRenderFns:[]};var a=e("VU/8")(s,c,!1,function(t){e("hfXu")},null,null);i.default=a.exports},hfXu:function(t,i){}});
//# sourceMappingURL=8.582a7444b6328b58a214.js.map