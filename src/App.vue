<template>
  <div id="app" class="layui-layout layui-layout-admin">
    <v-header></v-header>
    <v-nav></v-nav>
    <v-body></v-body>  
    <v-footer></v-footer>
  </div>
</template>

<script>

import header from "./components/hander/header.vue";
import nav from "./components/nav/nav.vue";
import body from "./components/body/body.vue";
import footer from "./components/footer/footer.vue";

  export default {
    name: 'app',
    data () {
      return {
      }
    },
    components : {
      'v-header' : header,
      'v-nav' : nav,
      'v-body' : body,
      'v-footer' : footer
    }
  }
</script>

<style>
 
</style>
