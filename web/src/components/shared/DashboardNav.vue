<template>
<nav class="navbar navbar-dark bg-dark">
<a href="/" style="text-decoration: none"><h3>Open Letter</h3></a>
<div class="NavButtonBox">
    <a href="/dashboard" class="btn btn-primary">Overview</a>
    <a href="/dashboard/analytics" class="btn btn-primary">Analytics</a>
    <a href="/dashboard/send-letter" class="btn btn-warning">Send Letter</a>
    <button @click="logOut()" class="btn btn-danger">Logout</button>
</div>
</nav>
</template>

<script>
import { Cookies } from '../../../utils/Cookies'
import { redirectUser } from '../../../utils/redirectUser'
export default {
  setup () {
    function logOut () {
      Cookies.delete('Authorization')
      redirectUser('/')
    }
    return { logOut }
  }
}
</script>

<style>
body{
    margin: 0;
    padding: 0;
}
nav{
    background-color: red;
    display: flex;
    flex-direction: row;
    align-content: center;
}
nav .NavButtonBox{
    display: flex;
    flex-direction: row;
}

nav .NavButtonBox a{
    margin-left: 5px;
    margin-right: 10px;
    width: 100px;
}

nav h3{
    color: #d8dee9;
    margin-left: 10px;
}
</style>
