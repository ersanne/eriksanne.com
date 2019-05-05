<template>
  <!-- TODO: Add missing password/user notice --->
  <div id="sign-in-form">
    <v-app id="inspire">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Login</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field prepend-icon="person" name="login" label="Login" type="text"
                                  v-model="user"></v-text-field>
                    <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"
                                  v-model="password"></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer/>
                  <v-btn
                    color="primary"
                    @click="login">
                    Login</v-btn>
                </v-card-actions>
              </v-card>
              <div
                class="g-signin2"
                data-onsuccess="onSignIn"></div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'SignInForm',
  data: function () {
    return {
      user: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      // TODO: Do login
    }
  }
}
</script>

<style scoped>

</style>
