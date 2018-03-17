webpackJsonp([1],{105:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("form",{on:{submit:function(e){t.onSubmit(t.email,t.password)}}},[n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[t._v("\n      Sign in\n    ")])])])},o=[],a={render:r,staticRenderFns:o};e.a=a},106:function(t,e,n){"use strict";var r=n(15),o=n(48),a=n(107),i=n.n(a),u=n(108);r.a.use(o.a),e.a=new o.a.Store({modules:{home:i.a,auth:u.a}})},107:function(t,e){},108:function(t,e,n){"use strict";var r,o,a=n(109),i=n.n(a),u=n(27),s=n.n(u),c=n(49),l=n(55),f=n(25),d=n(134),m={errors:null,user:{},isAuthenticated:!!l.a.getToken()},p={currentUser:function(t){return t.user},isAuthenticated:function(t){return t.isAuthenticated}},v=(r={},i()(r,f.b,function(t,e){return console.log(e),new s.a(function(n){c.a.post("users/login",{user:e}).then(function(e){var r=e.data;console.log(r),t.commit(d.b,r.user),n(r)}).catch(function(e){var n=e.response;t.commit(d.c,n.data.errors)})})}),i()(r,f.c,function(t){t.commit(d.a)}),i()(r,f.d,function(t,e){return new s.a(function(n,r){c.a.post("users",{user:e}).then(function(e){var r=e.data;t.commit(d.b,r.user),n(r)}).catch(function(e){var n=e.response;t.commit(d.c,n.data.errors)})})}),i()(r,f.a,function(t){l.a.getToken()?(c.a.setHeader(),c.a.get("user").then(function(e){var n=e.data;t.commit(d.b,n.user)}).catch(function(e){var n=e.response;t.commit(d.c,n.data.errors)})):t.commit(d.a)}),i()(r,f.e,function(t,e){var n=e.email,r=e.username,o=e.password,a=e.image,i=e.bio,u={email:n,username:r,bio:i,image:a};return o&&(u.password=o),c.a.put("user",u).then(function(e){var n=e.data;return t.commit(d.b,n.user),n})}),r),h=(o={},i()(o,d.c,function(t,e){t.errors=e}),i()(o,d.b,function(t,e){t.isAuthenticated=!0,t.user=e,t.errors={},l.a.saveToken(t.user.token)}),i()(o,d.a,function(t){t.isAuthenticated=!1,t.user={},t.errors={},l.a.destroyToken()}),o);e.a={state:m,actions:v,mutations:h,getters:p}},133:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r="localhost:8000/api"},134:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return a});var r="logOut",o="setUser",a="setError"},25:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return i}),n.d(e,"e",function(){return u});var r="checkAuth",o="login",a="logout",i="register",u="updateUser"},46:function(t,e,n){"use strict";e.a={name:"App"}},47:function(t,e,n){"use strict";var r=n(98),o=n.n(r),a=n(48),i=n(25);e.a={name:"hello",data:function(){return{email:null,password:null}},methods:{onSubmit:function(t,e){var n=this;console.log(t,e),this.$store.dispatch(i.b,{email:t,password:e}).then(function(){return n.$router.push({name:"home"})})}},computed:o()({},Object(a.b)({errors:function(t){return t.auth.errors}}))}},49:function(t,e,n){"use strict";var r=n(15),o=n(113),a=n.n(o),i=n(132),u=n.n(i),s=n(55),c=n(133),l={init:function(){r.a.use(u.a,a.a),r.a.axios.defaults.baseURL=c.a},setHeader:function(){r.a.axios.defaults.headers.common.Authorization="Token "+s.a.getToken()},query:function(t,e){return r.a.axios.get(t,e).catch(function(t){throw new Error("[RWV] ApiService "+t)})},get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return r.a.axios.get(t+"/"+e).catch(function(t){throw new Error("[RWV] ApiService "+t)})},post:function(t,e){return r.a.axios.post(""+t,e)},update:function(t,e,n){return r.a.axios.put(t+"/"+e,n)},put:function(t,e){return r.a.axios.put(""+t,e)},delete:function(t){return r.a.axios.delete(t).catch(function(t){throw new Error("[RWV] ApiService "+t)})}};e.a=l},55:function(t,e,n){"use strict";e.a={getToken:function(){return window.localStorage.getItem("id_token")},saveToken:function(t){window.localStorage.setItem("id_token",t)},destroyToken:function(){window.localStorage.removeItem("id_token")}}},56:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(27),o=n.n(r),a=n(15),i=n(90),u=n(94),s=n(106),c=n(25),l=n(49);a.a.config.productionTip=!1,l.a.init(),u.a.beforeEach(function(t,e,n){return o.a.all([s.a.dispatch(c.a)]).then(n)}),new a.a({el:"#app",router:u.a,store:s.a,template:"<App/>",components:{App:i.a}})},90:function(t,e,n){"use strict";function r(t){n(91)}var o=n(46),a=n(93),i=n(45),u=r,s=i(o.a,a.a,!1,u,null,null);e.a=s.exports},91:function(t,e){},93:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],a={render:r,staticRenderFns:o};e.a=a},94:function(t,e,n){"use strict";var r=n(15),o=n(95),a=n(96);r.a.use(o.a),e.a=new o.a({routes:[{path:"/",name:"Hello",component:a.a}]})},96:function(t,e,n){"use strict";function r(t){n(97)}var o=n(47),a=n(105),i=n(45),u=r,s=i(o.a,a.a,!1,u,null,null);e.a=s.exports},97:function(t,e){}},[56]);
//# sourceMappingURL=app.eafe6840be68f13eefd1.js.map