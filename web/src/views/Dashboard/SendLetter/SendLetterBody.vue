<template #default>
  <div class="sendMailBody" v-if="!state.previewMode">
      <h1>Send letter</h1>
      <div class="letterForm">
        <textarea name="emailBody" class="form-control" cols="100" rows="15" v-model="state.emailBody"></textarea>
        <a class="btn btn-success" @click="changePreviewMode()">Preview</a>
      </div>
  </div>
  <div class="previewEmailBox" v-else>
      <h1 class="previewTitle">Preview</h1>
      <div class="emailBody" v-html="state.emailBody"></div>
      <button class="btn btn-danger" @click="changePreviewMode()">Rewrite</button>
      <button class="btn btn-warning" @click="sendMail()">Send letter</button>
  </div>
 </template>

<script>
import { reactive } from '@vue/reactivity'
import axios from 'axios'
import { Cookies } from '../../../../utils/Cookies'
import { onBeforeMount } from '@vue/runtime-core'
const instance = axios.create({
  baseURL: 'http://localhost:3000'
})
export default {
  setup () {
    const state = reactive({
      emailBody: '',
      previewMode: false,
      authenticated: false
    })
    async function setAuthenticated () {
      const authorizationCookie = Cookies.get('Authorization')
      const { data } = await instance.get('/users/authenticate', { headers: { Authorization: authorizationCookie } })
      state.authenticated = data.authenticated
    } function changePreviewMode () {
      state.previewMode = !state.previewMode
    }
    async function sendMail () {
      const token = Cookies.get('Authorization')
      const sendMailRequest = await instance.post('/email/send',
        {
          emailBody: state.emailBody
        },
        { headers: { Authorization: token } })
      console.log(sendMailRequest.data)
    }
    onBeforeMount(setAuthenticated())
    return { state, changePreviewMode, sendMail }
  }
}
</script>

<style>
body {
  height: 100%;
}
.sendMailBody{
  margin: 2vw 5vw 2vw 5vw;
}
.sendMailBody h1{
  text-align: center;
  }
.sendMailBody .letterForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.sendMailBody .letterForm textarea {
  resize: none;
  margin-bottom: 10px;
}
.previewEmailBox {
  margin: 2vw 5vw 2vw 5vw;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
.previewEmailBox .previewTitle {
  text-align: center;
}
.previewEmailBox .emailBody{
  border: 2px solid rgba(85,87,83,0.33);
  border-radius: 4px;
  background: #d8dee9;
  margin-bottom: 10px;
  min-height: 57vh;
  max-height: 100%;
  padding: 5px;
}
.previewEmailBox button {
  margin-bottom: 10px;
}
</style>
