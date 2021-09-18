<template>
  <div class="login">
    <h1 class="login__title">Instagram</h1>
    <div class="login__email">
      <input placeholder="  Телефон, имя пользователя или эл. адрес" type="text">
    </div>
    <div class="login__password">
      <input placeholder="  Пароль" type="password">
    </div>
    <div class="login__btn">
      <button>Войти</button>
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

  export default defineComponent({
    name:'Login',
  })

</script>

<style>

</style>
