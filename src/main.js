// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router'
import store from '@/store'
import { CHECK_AUTH } from '@/store/actions.type'

import ApiService from '@/services/api.service'

Vue.config.productionTip = false

ApiService.init()

// Ensure we checked auth before each page load.
router.beforeEach(
  (to, from, next) => {
    return Promise
      .all([store.dispatch(CHECK_AUTH)])
      .then(
        function (n) {
          if (to.meta.requiresAuth === false | to.meta.requiresAuth & store.getters.isAuthenticated) {
            next()
          } else {
            next('/')
          }
        }
      )
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
