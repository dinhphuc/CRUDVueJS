<template>
  <div id="app">
    <div class="container">
      <nav class="nav nav-pills">
        <li class="nav-item">
          <router-link tag="a" to="/" class="nav-link" active-class="active" exact>Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/create" tag="a" class="nav-link" active-class="active">Create</router-link>
        </li>
      </nav>
      <router-view />
    </div>
    <helloWorld />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
export default {
  name: "App",
  components: {
    helloWorld: HelloWorld
  },
  directives: {
    ageValid: {
      update: function(el, binding, vnode) {
        if (binding.value <= 0 || binding.value > 150) {
          toastr.error(`Age: ${binding.value} is not correct`);
        }
      }
    }
  }
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
