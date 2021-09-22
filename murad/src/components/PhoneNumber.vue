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
        <input v-model="userNumber" placeholder=" #########" type="text">
      </div>
      <div v-for="(msg, ind) in filedError.userNumber" :key="ind" class="login__error">
        {{msg}}
      </div>
      <div class="confirm__button">
        <div @click="numbers" class="confirm__button-btn">Подтвердить</div>
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
  import validateModels from '../utils'
  import validate from 'validate.js'
    export default defineComponent({
        name: "PhoneNumber",
      components:{
          ChangeNumber
      },
      data(){
          return{
            component:'confirm',
            userNumber:'',
            filedError:{},
            NumberInvalidModel: {
              userNumber: validateModels.userNumber
            }
          }
      },
      methods:{
          changeNum(){
            this.component = 'changeNumber'
          },
      numbers(){
            const modelInput = {
              userNumber: this.userNumber
            };
            if (validate(modelInput, this.NumberInvalidModel)){
              this.filedError = validate(
                modelInput,
                this.NumberInvalidModel,{fullMessages:false}
              )
            }
        }
      }
    })
</script>

<style>

</style>
