<template>
  <div class="hello">
    <form v-on:submit="onSubmit(email, password)">
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
  </div>
</template>

<script>
// import { mapState } from 'vuex'
// import { LOGIN } from '@/store/actions.type'
import ApiService from '@/services/api.service'
export default {
  name: 'hello',
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    onSubmit (email, password) {
      console.log(email, password)
      ApiService.post('users/login', {user: {'email': email, 'password': password}}).then(response => { console.log(response) })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
