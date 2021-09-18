<template>
  <div class="auth">

    <router-view></router-view>
  </div>

</template>

<script>
  import {defineComponent} from 'vue'
  import Login from "../components/Login";
  import Reg from "../components/Reg";

  export default defineComponent({
    name:'Auth',
  })
</script>

<style>

</style>
