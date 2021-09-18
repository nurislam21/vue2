<template>
  <div v-if="component === 'confirm'" class="confirms">
    <div  class="confirm">
      <div class="confirm__img">
        <img src="../assets/phone.png" alt="">
      </div>
      <p class="confirm__title"><b>Еще один шаг</b></p>
      <p class="confirm__description">
        Введите шестизначный код, который мы отправили на номер 0550000000
      </p>

      <div class="confirm__input">
        <input placeholder=" #########" type="text">
      </div>

      <div class="confirm__button">
        <div class="confirm__button-btn">Подтвердить</div>
      </div>
      <div class="confirm__number">
        <p v-on:click="changeNum" class="confirm__number-p1">Изменить номер</p>
        |
        <p class="confirm__number-p2">Запросить новый код</p>
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
  </div>

<ChangeNumber v-else/>
</template>

<script>
  import {defineComponent} from 'vue'
  import ChangeNumber from "./ChangeNumber";
    export default defineComponent({
        name: "PhoneNumber",
      components:{
          ChangeNumber
      },
      data(){
          return{
            component:'confirm'
          }
      },
      methods:{
          changeNum(){
            this.component = 'changeNumber'
          }
      }
    }
    )
</script>

<style>

</style>
