webpackJsonp([0],{ZYmg:function(t,e,n){"use strict";var o=n("p+dL"),d={GET_LIST:"/blog",GET_DETAIL:"/blog/:blogId",CREATE:"/blog",UPDATE:"/blog/:blogId",DELETE:"/blog/:blogId"};e.a={getBlogsList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{page:1},e=t.page,n=void 0===e?1:e,g=t.userId,i=t.atIndex;return Object(o.a)(d.GET_LIST,"GET",{page:n,userId:g,atIndex:i})},getBlogsAtIndex:function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{page:1}).page,e=void 0===t?1:t;return this.getBlogsList({page:e,atIndex:!0})},getBlogsByUserId:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{page:1},n=e.page,o=void 0===n?1:n,d=e.atIndex;return this.getBlogsList({userId:t,page:o,atIndex:d})},getBlogDetail:function(t){var e=t.blogId;return Object(o.a)(d.GET_DETAIL.replace(":blogId",e))},createBlog:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:"",content:"",description:"",atIndex:!1},e=t.title,n=void 0===e?"":e,g=t.content,i=void 0===g?"":g,a=t.description,l=void 0===a?"":a,r=t.atIndex,c=void 0!==r&&r;return Object(o.a)(d.CREATE,"POST",{title:n,content:i,description:l,atIndex:c})},updateBlog:function(t,e){var n=t.blogId,g=e.title,i=e.content,a=e.description,l=e.atIndex;return Object(o.a)(d.UPDATE.replace(":blogId",n),"PATCH",{title:g,content:i,description:a,atIndex:l})},deleteBlog:function(t){var e=t.blogId;return Object(o.a)(d.DELETE.replace(":blogId",e),"DELETE")}}}});
//# sourceMappingURL=0.3a83bcd83afb22f016f6.js.map