<template>
  <div class="login">
    <h1 class="login__title">Instagram</h1>
    <div class="login__email">
      <input v-model="username" placeholder="  Телефон, имя пользователя или эл. адрес" type="text">
    </div>
    <div v-for="(msg, ind) in filedError.username" :key="ind" class="login__error">
      {{msg}}
    </div>
    <div class="login__password">
      <input v-model="password" placeholder="  Пароль" type="password">
      <div v-for="(msg, ind) in filedError.password" :key="ind" class="login__error">
        {{msg}}
      </div>
    </div>
    <div class="login__btn">
      <button @click="login">Войти</button>
    </div>
    <div class="login__lines">
      <div class="login__lines-line12"></div>
      <div class="login__lines-ili1">или</div>
      <div class="login__lines-line21"></div>
    </div>
    <div class="login__account">
      У вас ещё нет аккаунта?
      <router-link to="/auth/registration" class="login__account-reg">
        Зарегистрироваться
      </router-link>
    </div>
  </div>

</template>

<script>
  import {defineComponent} from 'vue'
  import validateModels from '../utils'
  import validate from 'validate.js'

  export default defineComponent({
    name: 'Login',
    data() {
      return {
        username: '',
        password: '',
        filedError: {},
        loginInvalidModel: {
          username: validateModels.username,
          password: validateModels.password
        }
      }
    },
    methods: {
      login() {
        console.log('da');
        const modelInputs = {
          username: this.username,
          password: this.password
        };
        if (validate(modelInputs, this.loginInvalidModel)) {
          this.filedError = validate(
            modelInputs,
            this.loginInvalidModel,
              {fullMessages:false}
          )
        }
      },
      password(){
        const modelInputs = {
          username: this.username,
          password: this.password
        };
        if (validate(modelInputs, this.loginInvalidModel)){
          this.filedError = validate(
            modelInputs,
            this.loginInvalidModel,
            {fullMessages:false}
          )
        }
      }
    }
  })

</script>

<style>

</style>
