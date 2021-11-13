<template>
<div class="formBox">
    <div class="form-create">
        <h2>Create your account!</h2>
        <label for="Name" class="form-label">Name:</label>
        <input type="text" id="nameInput" class="form-control" v-model="state.name"/>
        <label for="Email" class="form-label">Email:</label>
        <input type="email" id="emailInput" class="form-control" v-model="state.email"/>
        <label for="Password" class="form-label">Password:</label>
        <input type="password" id="passwordInput" class="form-control" v-model="state.password"/>
        <label for="Password" class="form-label">Repeat password:</label>
        <input type="password" id="passwordInput" class="form-control" v-model="state.rpPassword"/>
        <button class="btn btn-success" id="submitLoginButton" @click="signUp">Create now!</button>
        <a href="/Login" style="text-align: center; margin-top: 5px; color: #00daff">Already have an account?</a>
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
      password: '',
      rpPassword: '',
      name: ''
    })
    async function signUp () {
      const request = await instance.post('/users/create',
        {
          email: state.email,
          password: state.password === state.rpPassword ? state.password : null,
          name: state.name
        }
      )
      console.log(request.data)
    }
    return {
      state,
      signUp
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

.formBox .form-create{
    display: flex;
    flex-direction: column;
    background: #434c5e;
    width: 20vw;
    max-height: 80vh;
    padding: 10px;
    padding-right: 20px;
    align-content: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
    color: white;
    border-radius: 10px;
}
.formBox .form-create h2{
    text-align: center;
}
.formBox .form-create input{
    margin: 5px;
}

#submitLoginButton{
    align-self: center;
    margin-top: 20px;
    width: 10vw;
}
</style>
