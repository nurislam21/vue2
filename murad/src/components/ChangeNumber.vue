<template>
<div class="change">
  <div class="change__img">
    <img src="../assets/phone.png" alt="">
  </div>
  <div class="change__title">
    <p><b>Изменение номера телефона</b></p>
  </div>
  <div class="change__description">
    <p>Текущий номер телефона :</p>
    <span>0550000000</span>
  </div>
  <div class="change__input">
    <input placeholder=" Новый номер телефона" type="text">
  </div>
  <div class="change__btn">
    <div>Изменить</div>
  </div>
  <div class="change__info">
    <p>К сожалению, во время создания аккаунта произошла ошибка.</p>
    <p>Повторите попытку позже</p>
  </div>
  <div class="change__back">
    <div>Назад</div>
  </div>

</div>
  <div class="account">
    <div class="account__info">
      <span>Есть аккаунт?</span>
      <router-link to="/auth">Вход</router-link>
    </div>
  </div>
  <div class="icons">
    Установите приложение
    <div class="icons__img">
      <img src="../assets/google.png" alt="">
      <img src="../assets/ios.png" alt="">
    </div>
  </div>
</template>

<script>
  import {defineComponent} from 'vue'
    export default defineComponent ({
        name: "ChangeNumber"
    })
</script>

<style scoped>

</style>
