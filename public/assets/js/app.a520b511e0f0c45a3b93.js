webpackJsonp([1],{100:function(t,n){},101:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"home-cpn"}},[e("h1",[t._v(" Welcome ")]),t._v(" "),e("button",{on:{click:function(n){t.onClick()}}},[t._v("Login")])])},o=[],a={render:r,staticRenderFns:o};n.a=a},102:function(t,n,e){"use strict";function r(t){e(103)}var o=e(50),a=e(110),i=e(16),u=r,s=i(o.a,a.a,!1,u,null,null);n.a=s.exports},103:function(t,n){},110:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[t.isAuthenticated?t._e():e("form",{on:{submit:function(n){n.preventDefault(),t.onSubmit(t.email,t.password,t.event)}}},[e("div",{},[t._v("\n      "+t._s(t.isAuthenticated)+" "+t._s(t.errors)+"\n    ")]),t._v(" "),e("fieldset",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(n){n.target.composing||(t.email=n.target.value)}}})]),t._v(" "),e("fieldset",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(n){n.target.composing||(t.password=n.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[t._v("\n      Sign in\n    ")])]),t._v(" "),t.isAuthenticated?e("div",[e("div",[t._v(t._s(t.currentUser.username)+" is connected")]),t._v(" "),e("button",{staticClass:"btn btn-lg btn-primary pull-xs-right",on:{click:function(n){t.onLogout()}}},[t._v("\n      Log out\n    ")])]):t._e()])},o=[],a={render:r,staticRenderFns:o};n.a=a},111:function(t,n,e){"use strict";function r(t){e(112)}var o=e(51),a=e(113),i=e(16),u=r,s=i(o.a,a.a,!1,u,null,null);n.a=s.exports},112:function(t,n){},113:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("div",[t._v(" Je bent in Hello component ")]),t._v(" "),e("div",[t._v(t._s(t.currentUser.username)+" is connected")]),t._v(" "),e("button",{staticClass:"btn btn-lg btn-primary pull-xs-right",on:{click:function(n){t.onLogout()}}},[t._v("\n      Log out\n    ")])])},o=[],a={render:r,staticRenderFns:o};n.a=a},114:function(t,n,e){"use strict";var r=e(15),o=e(28),a=e(115),i=e.n(a),u=e(116);r.a.use(o.a),n.a=new o.a.Store({modules:{home:i.a,auth:u.a}})},115:function(t,n){},116:function(t,n,e){"use strict";var r,o,a=e(117),i=e.n(a),u=e(27),s=e.n(u),c=e(30),l=e.n(c),f=e(52),d=e(58),p=e(17),m=e(142),h={errors:null,user:{},isAuthenticated:!!d.a.getToken()},v={currentUser:function(t){return t.user},isAuthenticated:function(t){return t.isAuthenticated}},g=(r={},i()(r,p.b,function(t,n){var e={};return new l.a(function(r){f.a.post("users/login",s()({},e,{user:n})).then(function(n){var e=n.data;t.commit(m.b,e.user),r(e)}).catch(function(n){var e=n.response;t.commit(m.c,e.data.errors)})})}),i()(r,p.c,function(t){t.commit(m.a)}),i()(r,p.d,function(t,n){return new l.a(function(e,r){f.a.post("users",{user:n}).then(function(n){var r=n.data;t.commit(m.b,r.user),e(r)}).catch(function(n){var e=n.response;t.commit(m.c,e.data.errors)})})}),i()(r,p.a,function(t){d.a.getToken()?(f.a.setHeader(),f.a.get("user").then(function(n){var e=n.data;t.commit(m.b,e.user)}).catch(function(n){var e=n.response;t.commit(m.c,e.data.errors)})):t.commit(m.a)}),i()(r,p.e,function(t,n){var e=n.email,r=n.username,o=n.password,a=n.image,i=n.bio,u={email:e,username:r,bio:i,image:a};return o&&(u.password=o),f.a.put("user",u).then(function(n){var e=n.data;return t.commit(m.b,e.user),e})}),r),b=(o={},i()(o,m.c,function(t,n){t.errors=n}),i()(o,m.b,function(t,n){t.isAuthenticated=!0,t.user=n,t.errors={},d.a.saveToken(t.user.token)}),i()(o,m.a,function(t){t.isAuthenticated=!1,t.user={},t.errors={},d.a.destroyToken()}),o);n.a={state:h,actions:g,mutations:b,getters:v}},141:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r="http://localhost:8000/api/"},142:function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return o}),e.d(n,"c",function(){return a});var r="logOut",o="setUser",a="setError"},17:function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return o}),e.d(n,"c",function(){return a}),e.d(n,"d",function(){return i}),e.d(n,"e",function(){return u});var r="checkAuth",o="login",a="logout",i="register",u="updateUser"},48:function(t,n,e){"use strict";n.a={name:"App"}},49:function(t,n,e){"use strict";n.a={name:"home",data:function(){return{untruc:!1}},methods:{onClick:function(){this.$router.push({path:"/login"})}}}},50:function(t,n,e){"use strict";var r=e(27),o=e.n(r),a=e(28),i=e(17);n.a={name:"login",data:function(){return{email:null,password:null}},methods:{onSubmit:function(t,n){var e=this;this.$store.dispatch(i.b,{email:t,password:n}).then(function(){e.$router.push({path:"/user"})}),event.target.reset(),this.email=null,this.password=null},onLogout:function(){var t=this;this.$store.dispatch(i.c).then(function(){t.$router.push({path:"/"})})}},computed:o()({},Object(a.c)({errors:function(t){return t.auth.errors}}),Object(a.b)(["isAuthenticated","currentUser"]))}},51:function(t,n,e){"use strict";var r=e(27),o=e.n(r),a=e(28),i=e(17);n.a={name:"hello",data:function(){return{email:null,password:null}},methods:{onSubmit:function(t,n){var e=this;this.$store.dispatch(i.b,{email:t,password:n}).then(function(){e.$router.push({path:"/"})})},onLogout:function(){var t=this;this.$store.dispatch(i.c).then(function(){t.$router.push({path:"/"})})}},computed:o()({},Object(a.c)({errors:function(t){return t.auth.errors}}),Object(a.b)(["isAuthenticated","currentUser"]))}},52:function(t,n,e){"use strict";var r=e(15),o=e(121),a=e.n(o),i=e(140),u=e.n(i),s=e(58),c=e(141),l={init:function(){r.a.use(u.a,a.a),r.a.axios.defaults.baseURL=c.a},setHeader:function(){r.a.axios.defaults.headers.common.Authorization="Token "+s.a.getToken()},query:function(t,n){return r.a.axios.get(t,n).catch(function(t){throw new Error("[RWV] ApiService "+t)})},get:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return r.a.axios.get(t+"/"+n).catch(function(t){throw new Error("[RWV] ApiService "+t)})},post:function(t,n){return r.a.axios.post(""+t,n)},update:function(t,n,e){return r.a.axios.put(t+"/"+n,e)},put:function(t,n){return r.a.axios.put(""+t,n)},delete:function(t){return r.a.axios.delete(t).catch(function(t){throw new Error("[RWV] ApiService "+t)})}};n.a=l},58:function(t,n,e){"use strict";n.a={getToken:function(){return window.localStorage.getItem("id_token")},saveToken:function(t){window.localStorage.setItem("id_token",t)},destroyToken:function(){window.localStorage.removeItem("id_token")}}},59:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(30),o=e.n(r),a=e(15),i=e(93),u=e(97),s=e(114),c=e(17),l=e(52);a.a.config.productionTip=!1,l.a.init(),u.a.beforeEach(function(t,n,e){return console.log(t,n,e),o.a.all([s.a.dispatch(c.a)]).then(e)}),new a.a({el:"#app",router:u.a,store:s.a,template:"<App/>",components:{App:i.a}})},93:function(t,n,e){"use strict";function r(t){e(94)}var o=e(48),a=e(96),i=e(16),u=r,s=i(o.a,a.a,!1,u,null,null);n.a=s.exports},94:function(t,n){},96:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},o=[],a={render:r,staticRenderFns:o};n.a=a},97:function(t,n,e){"use strict";var r=e(15),o=e(98),a=e(99),i=e(102),u=e(111);r.a.use(o.a),n.a=new o.a({routes:[{path:"/",component:a.a,children:[]},{path:"/user",name:"user",component:u.a},{path:"/login",name:"login",component:i.a}]})},99:function(t,n,e){"use strict";function r(t){e(100)}var o=e(49),a=e(101),i=e(16),u=r,s=i(o.a,a.a,!1,u,null,null);n.a=s.exports}},[59]);
//# sourceMappingURL=app.a520b511e0f0c45a3b93.js.map