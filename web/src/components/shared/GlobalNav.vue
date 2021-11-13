<template>
<nav class="navbar navbar-dark bg-dark">
<a href="/" style="text-decoration: none"><h3>Open Letter</h3></a>
<div class="NavButtonBox">
    <a href="/Login" class="btn btn-primary">Start Now!</a>
    <a href="https://github.com/Sigoloh/OpenLetter" target="blank" class="btn btn-secondary">Github</a>
</div>
</nav>
</template>

<script>
export default {

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
