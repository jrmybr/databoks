webpackJsonp([1],{106:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[t.isAuthenticated?t._e():n("form",{on:{submit:function(e){e.preventDefault(),t.onSubmit(t.email,t.password,t.event)}}},[n("div",{},[t._v("\n      "+t._s(t.isAuthenticated)+" "+t._s(t.errors)+"\n    ")]),t._v(" "),n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[t._v("\n      Sign in\n    ")])]),t._v(" "),t.isAuthenticated?n("div",[n("div",[t._v(t._s(t.currentUser.username)+" is connected")]),t._v(" "),n("button",{staticClass:"btn btn-lg btn-primary pull-xs-right",on:{click:function(e){t.onLogout()}}},[t._v("\n      Log out\n    ")])]):t._e()])},o=[],a={render:r,staticRenderFns:o};e.a=a},107:function(t,e,n){"use strict";function r(t){n(108)}var o=n(50),a=n(109),s=n(26),i=r,u=s(o.a,a.a,!1,i,null,null);e.a=u.exports},108:function(t,e){},109:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[t.isAuthenticated?t._e():n("form",{on:{submit:function(e){e.preventDefault(),t.onSubmit(t.email,t.password)}}},[n("div",{},[t._v("\n      "+t._s(t.isAuthenticated)+" "+t._s(t.errors)+"\n    ")]),t._v(" "),n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),n("fieldset",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[t._v("\n      Sign in\n    ")])]),t._v(" "),t.isAuthenticated?n("div",[n("div",[t._v(" Live on User ")]),t._v(" "),n("div",[t._v(t._s(t.currentUser.username)+" is connected")]),t._v(" "),n("button",{staticClass:"btn btn-lg btn-primary pull-xs-right",on:{click:function(e){t.onLogout()}}},[t._v("\n      Log out\n    ")])]):t._e()])},o=[],a={render:r,staticRenderFns:o};e.a=a},110:function(t,e,n){"use strict";var r=n(15),o=n(28),a=n(111),s=n.n(a),i=n(112);r.a.use(o.a),e.a=new o.a.Store({modules:{home:s.a,auth:i.a}})},111:function(t,e){},112:function(t,e,n){"use strict";var r,o,a=n(113),s=n.n(a),i=n(27),u=n.n(i),c=n(30),l=n.n(c),d=n(51),f=n(57),p=n(16),m=n(138),v={errors:null,user:{},isAuthenticated:!!f.a.getToken()},h={currentUser:function(t){return t.user},isAuthenticated:function(t){return t.isAuthenticated}},g=(r={},s()(r,p.b,function(t,e){var n={};return new l.a(function(r){d.a.post("users/login",u()({},n,{user:e})).then(function(e){var n=e.data;t.commit(m.b,n.user),r(n)}).catch(function(e){var n=e.response;t.commit(m.c,n.data.errors)})})}),s()(r,p.c,function(t){t.commit(m.a)}),s()(r,p.d,function(t,e){return new l.a(function(n,r){d.a.post("users",{user:e}).then(function(e){var r=e.data;t.commit(m.b,r.user),n(r)}).catch(function(e){var n=e.response;t.commit(m.c,n.data.errors)})})}),s()(r,p.a,function(t){f.a.getToken()?(d.a.setHeader(),d.a.get("user").then(function(e){var n=e.data;t.commit(m.b,n.user)}).catch(function(e){var n=e.response;t.commit(m.c,n.data.errors)})):t.commit(m.a)}),s()(r,p.e,function(t,e){var n=e.email,r=e.username,o=e.password,a=e.image,s=e.bio,i={email:n,username:r,bio:s,image:a};return o&&(i.password=o),d.a.put("user",i).then(function(e){var n=e.data;return t.commit(m.b,n.user),n})}),r),b=(o={},s()(o,m.c,function(t,e){t.errors=e}),s()(o,m.b,function(t,e){t.isAuthenticated=!0,t.user=e,t.errors={},f.a.saveToken(t.user.token)}),s()(o,m.a,function(t){t.isAuthenticated=!1,t.user={},t.errors={},f.a.destroyToken()}),o);e.a={state:v,actions:g,mutations:b,getters:h}},137:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r="http://localhost:8000/api/"},138:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return a});var r="logOut",o="setUser",a="setError"},16:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return s}),n.d(e,"e",function(){return i});var r="checkAuth",o="login",a="logout",s="register",i="updateUser"},48:function(t,e,n){"use strict";e.a={name:"App"}},49:function(t,e,n){"use strict";var r=n(27),o=n.n(r),a=n(28),s=n(16);e.a={name:"hello",data:function(){return{email:null,password:null}},methods:{onSubmit:function(t,e){var n=this;this.$store.dispatch(s.b,{email:t,password:e}).then(function(){n.$router.push({path:"/user"})}),event.target.reset(),this.email=null,this.password=null},onLogout:function(){var t=this;this.$store.dispatch(s.c).then(function(){t.$router.push({path:"/"})})}},computed:o()({},Object(a.c)({errors:function(t){return t.auth.errors}}),Object(a.b)(["isAuthenticated","currentUser"]))}},50:function(t,e,n){"use strict";var r=n(27),o=n.n(r),a=n(28),s=n(16);e.a={name:"hello",data:function(){return{email:null,password:null}},methods:{onSubmit:function(t,e){var n=this;this.$store.dispatch(s.b,{email:t,password:e}).then(function(){n.$router.push({path:"/"})})},onLogout:function(){var t=this;this.$store.dispatch(s.c).then(function(){t.$router.push({path:"/"})})}},computed:o()({},Object(a.c)({errors:function(t){return t.auth.errors}}),Object(a.b)(["isAuthenticated","currentUser"]))}},51:function(t,e,n){"use strict";var r=n(15),o=n(117),a=n.n(o),s=n(136),i=n.n(s),u=n(57),c=n(137),l={init:function(){r.a.use(i.a,a.a),r.a.axios.defaults.baseURL=c.a},setHeader:function(){r.a.axios.defaults.headers.common.Authorization="Token "+u.a.getToken()},query:function(t,e){return r.a.axios.get(t,e).catch(function(t){throw new Error("[RWV] ApiService "+t)})},get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return r.a.axios.get(t+"/"+e).catch(function(t){throw new Error("[RWV] ApiService "+t)})},post:function(t,e){return r.a.axios.post(""+t,e)},update:function(t,e,n){return r.a.axios.put(t+"/"+e,n)},put:function(t,e){return r.a.axios.put(""+t,e)},delete:function(t){return r.a.axios.delete(t).catch(function(t){throw new Error("[RWV] ApiService "+t)})}};e.a=l},57:function(t,e,n){"use strict";e.a={getToken:function(){return window.localStorage.getItem("id_token")},saveToken:function(t){window.localStorage.setItem("id_token",t)},destroyToken:function(){window.localStorage.removeItem("id_token")}}},58:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(30),o=n.n(r),a=n(15),s=n(92),i=n(96),u=n(110),c=n(16),l=n(51);a.a.config.productionTip=!1,l.a.init(),i.a.beforeEach(function(t,e,n){return o.a.all([u.a.dispatch(c.a)]).then(n)}),new a.a({el:"#app",router:i.a,store:u.a,template:"<App/>",components:{App:s.a}})},92:function(t,e,n){"use strict";function r(t){n(93)}var o=n(48),a=n(95),s=n(26),i=r,u=s(o.a,a.a,!1,i,null,null);e.a=u.exports},93:function(t,e){},95:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],a={render:r,staticRenderFns:o};e.a=a},96:function(t,e,n){"use strict";var r=n(15),o=n(97),a=n(98),s=n(107);r.a.use(o.a),e.a=new o.a({routes:[{path:"/",component:a.a,children:[{path:"user",name:"home",component:s.a}]}]})},98:function(t,e,n){"use strict";function r(t){n(99)}var o=n(49),a=n(106),s=n(26),i=r,u=s(o.a,a.a,!1,i,null,null);e.a=u.exports},99:function(t,e){}},[58]);
//# sourceMappingURL=app.68040dd3169c8c2b8eba.js.map