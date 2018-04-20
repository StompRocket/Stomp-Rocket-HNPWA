webpackJsonp([0],[,,,function(t,a,e){"use strict";var n=e(11),s=(e.n(n),e(13));e.n(s);a.a={name:"app",created:function(){this.$emit("refresh")},data:function(){return{mode:"news"}},methods:{refresh:function(t){this.mode=t,this.$router.push({path:t,props:{mode:t}}),this.$emit("refresh",t)}}}},function(t,a,e){"use strict";var n=e(18);a.a={name:"news",props:["mode"],components:{story:n.a},data:function(){return{stories:{},pageNumber:1,busy:!0,loadmoreText:"Loading"}},created:function(){var t=this;fetch("https://api.hnpwa.com/v0/"+this.mode+"/1.json",{method:"get"}).then(function(t){return t.json()}).then(function(a){console.log(a),t.stories=a,t.busy=!1,t.loadmoreText="Load More"}).catch(function(t){console.log(t)}),this.$parent.$on("refresh",function(a){t.busy=!0,t.loadmoreText="Loading",console.log("refreshing",t.mode,a),fetch("https://api.hnpwa.com/v0/"+a+"/1.json",{method:"get"}).then(function(t){return t.json()}).then(function(a){console.log(a),t.stories=a,t.busy=!1,t.loadmoreText="Load More"}).catch(function(t){console.log(t)})})},methods:{loadMore:function(){var t=this;!1===this.busy&&(this.busy=!0,this.pageNumber++,this.loadmoreText="Loading",fetch("https://api.hnpwa.com/v0/"+this.mode+"/"+this.pageNumber+".json",{method:"get"}).then(function(t){return t.json()}).then(function(a){a.map(function(a){return t.stories.push(a)}),t.busy=!1,t.loadmoreText="Load More"}).catch(function(t){console.log(t)}))}}}},function(t,a,e){"use strict";a.a={name:"story",props:["data"],data:function(){return{}}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(2),s=e(10),o=e(15),r=e(21);n.a.use(r),n.a.config.productionTip=!1,new n.a({el:"#app",router:o.a,template:"<App/>",components:{App:s.a}})},,,,function(t,a,e){"use strict";var n=e(3),s=e(14),o=e(1),r=o(n.a,s.a,!1,null,null,null);a.a=r.exports},function(t,a){},,function(t,a){},function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light",attrs:{id:"nav"}},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("SR HNPWA")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{class:{active:"news"==t.mode}},[e("a",{staticClass:"nav-link",on:{click:function(a){t.refresh("news")}}},[t._v("News")])]),t._v(" "),e("li",{staticClass:"nav-item",class:{active:"newest"==t.mode}},[e("a",{staticClass:"nav-link",on:{click:function(a){t.refresh("newest")}}},[t._v("Newest")])]),t._v(" "),e("li",{staticClass:"nav-item",class:{active:"ask"==t.mode}},[e("a",{staticClass:"nav-link",on:{click:function(a){t.refresh("ask")}}},[t._v("Ask")])]),t._v(" "),e("li",{staticClass:"nav-item",class:{active:"show"==t.mode}},[e("a",{staticClass:"nav-link",on:{click:function(a){t.refresh("show")}}},[t._v("Show")])]),t._v(" "),e("li",{staticClass:"nav-item",class:{active:"jobs"==t.mode}},[e("a",{staticClass:"nav-link",on:{click:function(a){t.refresh("jobs")}}},[t._v("Jobs")])])])])]),t._v(" "),e("main",{attrs:{id:"main"}},[e("router-view")],1)])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],o={render:n,staticRenderFns:s};a.a=o},function(t,a,e){"use strict";var n=e(2),s=e(16),o=e(17);n.a.use(s.a),a.a=new s.a({routes:[{path:"/news",name:"News",component:o.a,props:{mode:"news"}},{path:"/newest",name:"Newest",component:o.a,props:{mode:"newest"}},{path:"/ask",name:"Ask",component:o.a,props:{mode:"ask"}},{path:"/show",name:"Show",component:o.a,props:{mode:"show"}},{path:"/jobs",name:"Jobs",component:o.a,props:{mode:"jobs"}},{path:"/",redirect:"/news"}]})},,function(t,a,e){"use strict";var n=e(4),s=e(20),o=e(1),r=o(n.a,s.a,!1,null,null,null);a.a=r.exports},function(t,a,e){"use strict";var n=e(5),s=e(19),o=e(1),r=o(n.a,s.a,!1,null,null,null);a.a=r.exports},function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:" story",attrs:{href:t.data.url,target:"_blank"}},[e("h2",[t._v(t._s(t.data.title)+" "),e("span",{staticClass:"domain"},[t._v("("+t._s(t.data.domain)+")")])]),t._v(" "),e("p",[t._v("By: "+t._s(t.data.user)+" "+t._s(t.data.time_ago))])])},s=[],o={render:n,staticRenderFns:s};a.a=o},function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page",attrs:{id:"news"}},[e("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"container articles",attrs:{"infinite-scroll-disabled":"busy","infinite-scroll-distance":"10"}},[t._l(t.stories,function(t){return e("story",{key:t.id,attrs:{data:t}})}),t._v(" "),e("button",{staticClass:"loadMoreBtn",attrs:{type:"button",name:"loadMore"},on:{click:t.loadMore}},[t._v(t._s(t.loadmoreText))])],2)])},s=[],o={render:n,staticRenderFns:s};a.a=o}],[6]);
//# sourceMappingURL=app.84305e8cb8db90b4974c.js.map