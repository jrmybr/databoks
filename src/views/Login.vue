<template>
  <div class="hello">
    <form v-if='!isAuthenticated' v-on:submit.prevent="onSubmit(email, password, event)">
      <div class="">
        {{isAuthenticated}} {{ errors }}
      </div>
      <fieldset class="form-group">
        <input
          class="form-control form-control-lg"
          type="text"
          v-model="email"
          placeholder="Email">
      </fieldset>
      <fieldset class="form-group">
        <input
          class="form-control form-control-lg"
          type="password"
          v-model="password"
          placeholder="Password">
      </fieldset>
      <button class="btn btn-lg btn-primary pull-xs-right">
        Sign in
      </button>
    </form>
    <div v-if='isAuthenticated'>
      <div>{{currentUser.username}} is connected</div>
      <button v-on:click="onLogout()" class="btn btn-lg btn-primary pull-xs-right">
        Log out
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { LOGIN, LOGOUT } from '@/store/actions.type'
export default {
  name: 'login',
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    onSubmit (email, password) {
      this.$store.dispatch(LOGIN, {email, password})
        .then(() => {
          this.$router.push({ path: '/user' })
        })
      event.target.reset()
      this.email = null
      this.password = null
    },
    onLogout () {
      this.$store.dispatch(LOGOUT)
        .then(() => {
          this.$router.push({ path: '/' })
        })
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    }),
    ...mapGetters([
      'isAuthenticated',
      'currentUser'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
