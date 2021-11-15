<template>
<div class="formBox">
    <div class="form-create">
        <h2>Create your account!</h2>
        <div v-if="!state.passwordMatch" class="alert alert-danger" role="alert">
          Password dont match
        </div>
        <div v-if="state.error" class="alert alert-danger" role="alert">
          Probabbly, this email is already in use. Try another or try again later
        </div>
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
      passwordMatch: true,
      error: false,
      name: ''
    })
    async function signUp () {
      state.passwordMatch = state.password === state.rpPassword
      if (state.passwordMatch) {
        const request = await instance.post('/users/create',
          {
            email: state.email,
            password: state.passwordMatch ? state.password : null,
            name: state.name
          }
        )
        state.error = request.data.message === 'Error'
      }
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
    height: 100%;
}

.formBox .form-create{
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
