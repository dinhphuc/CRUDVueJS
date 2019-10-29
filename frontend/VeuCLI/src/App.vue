<template>
  <div id="app" class="container">
    <nav class="nav nav-pills">
      <li class="nav-item">
        <router-link tag="a" to="/" class="nav-link" active-class="active"   exact>Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/create" tag="a" class="nav-link" active-class="active"   >Create</router-link>
      </li>
      
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
