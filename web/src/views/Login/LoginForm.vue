<template>
<div class="formBox">
    <div class="form-login">
        <h2>Login Now!</h2>
        <label for="Email" class="form-label">Email:</label>
        <input type="email" id="emailInput" class="form-control" v-model="state.email"/>
        <label for="Password" class="form-label">Password:</label>
        <input type="password" id="passwordInput" class="form-control" v-model="state.password"/>
        <button class="btn btn-success" id="submitLoginButton" @click="login">Login !</button>
        <a href="/SignUp" style="text-align: center; margin-top: 5px; color: #00daff">Create your account now</a>
    </div>
</div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://localhost:3000'
})
export default {
  setup () {
    const state = reactive({
      email: '',
      password: ''
    })
    async function login () {
      const request = await instance.post('/users/login',
        {
          email: state.email,
          password: state.password
        }
      )
      console.log(request.data)
    }
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
    background: #E5E9F0;
    height: 82vh;
}

.formBox .form-login{
    display: flex;
    flex-direction: column;
    background: #434c5e;
    width: 20vw;
    max-height: 50vh;
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
