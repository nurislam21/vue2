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
      <input v-model="userPhone" placeholder=" Новый номер телефона" type="text">
    </div>
    <div v-for="(msg, ind) in filedError.userPhone" :key="ind" class="login__error">
      {{msg}}
    </div>
    <div class="change__btn">
      <div @click="phone">Изменить</div>
    </div>
    <!--  <div class="change__info">-->
    <!--    <p>К сожалению, во время создания аккаунта произошла ошибка.</p>-->
    <!--    <p>Повторите попытку позже</p>-->
    <!--  </div>-->
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
  import validateModels from '../utils'
  import validate from 'validate.js'

  export default defineComponent({
    name: "ChangeNumber",
    data() {
      return {
        userPhone: '',
        filedError: {},
        PhoneInvalidModel: {
          userPhone: validateModels.userPhone
        }
      }
    },
    methods:{
      phone(){
        const modelInput = {
          userPhone: this.userPhone
        };
        if (validate(modelInput, this.PhoneInvalidModel)){
          this.filedError = validate(
            modelInput,
            this.PhoneInvalidModel,{fullMessages:false}
          )
        }
      }
    }
  })
</script>

<style scoped>

</style>
