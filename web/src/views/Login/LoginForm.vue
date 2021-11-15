<template>
<div class="formBox">
    <div class="form-login">
        <h2>Login Now!</h2>
        <div class="alert alert-danger"  role="alert" v-if="state.wrongLogin">
          Password and email dont match
        </div>
        <label for="Email" class="form-label">Email:</label>
        <input type="email" id="emailInput" class="form-control" v-model="state.email"/>
        <label for="Password" class="form-label">Password:</label>
        <input type="password" id="passwordInput" class="form-control" v-model="state.password"/>
        <button class="btn btn-success" id="submitLoginButton" @click="login">Login !</button>
        <a href="/sign-up" style="text-align: center; margin-top: 5px; color: #00daff">Create your account now</a>
    </div>
</div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import axios from 'axios'
import { Cookies } from '../../../utils/Cookies'
import { DateManagement } from '../../../utils/DateManagement'
import { redirectUser } from '../../../utils/redirectUser.js'
import { onBeforeMount } from '@vue/runtime-core'
const instance = axios.create({
  baseURL: 'http://localhost:3000'
})
export default {
  setup () {
    const state = reactive({
      email: '',
      password: '',
      wrongLogin: false
    })
    async function automaticRedirectUserToDashboardIfAuthorizationExists () {
      const authorization = Cookies.get('Authorization')
      if (authorization !== 'Cookie undefined') {
        const { data } = await instance.get('/users/authenticate', { headers: { Authorization: authorization } })
        if (data.authenticated) {
          redirectUser('/dashboard')
        }
      }
    }
    async function login () {
      const request = await instance.post('/users/login',
        {
          email: state.email,
          password: state.password
        }
      )
      if (request.data.token === 'Wrong Password') {
        state.wrongLogin = true
        state.email = state.password = ''
      } else {
        state.wrongLogin = false
        const date = new Date()
        const dateOneMore = DateManagement.addDays(1, date)
        Cookies.set('Authorization', `Bearer ${request.data.token}`, dateOneMore)
        redirectUser('/dashboard')
      }
    }
    onBeforeMount(automaticRedirectUserToDashboardIfAuthorizationExists())
    return {
      state,
      login
    }
  }
}
</script>

<style>
.formBox{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    height: 100vh;
    background: #E5E9F0;
}

.formBox .form-login{
    display: flex;
    flex-direction: column;
    background: #434c5e;
    width: 20vw;
    height: auto;
    padding: 10px;
    padding-right: 20px;
    align-content: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
    color: white;
    border-radius: 10px;
}
.formBox .form-login h2{
    text-align: center;
}
.formBox .form-login input{
    margin: 5px;
}

#submitLoginButton{
    align-self: center;
    margin-top: 20px;
    width: 10vw;
}
</style>
