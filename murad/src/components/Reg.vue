<template>
  <div v-if="component === 'registration'" class="register">
<!--    <div class="rin">-->
<!--      Рин Нохара-->
<!--      のはらリン-->
<!--    </div>-->
    <div class="reg">
      <div class="reg__title"><h2>Instagram</h2></div>
      <div class="reg__description">Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.</div>
      <div class="reg__btn">
        <img class="reg__img" src="https://www.freeiconspng.com/uploads/facebook-logo-png-white-facebook-logo-png-white-facebook-icon-png--32.png" alt="">
        Войти через Facebook
      </div>
      <div class="reg__lines">
        <div class="reg__lines-line1"></div>
        <div class="reg__lines-ili">или</div>
        <div class="reg__lines-line2"></div>
      </div>
      <div class="reg__input" v-for="(inp,ind) in regComp" :key="ind" >
        <input type="text" :placeholder="inp.placeholder">
      </div>
      <div class="reg__reg">
        <div v-on:click="change">Регистрация</div>
      </div>
      <div class="reg__cookie">
        Регистрируясь, вы принимаете наши <b>Условия Политику использования данных Политику в отношении файлов cookie</b>
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
  <div v-if="component === 'birthday'">
    <Birthday />
  </div>
</template>

<script>
  import {defineComponent} from 'vue'
  import Birthday from "./Birthday";

  export default defineComponent({
    name:'Reg',
    components: {
      Birthday
    },
    data() {
      return {
        regComp: [
          {
            placeholder: 'Моб. телефон или эл. адрес'
          },
          {
            placeholder: 'Имя и фамилия'
          },
          {
            placeholder: 'Имя пользователя'
          },
          {
            placeholder: 'Пароль'
          }
        ],
        googleLink: 'https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=D130597B-4B2B-40C0-B026-E20D31930EF1&utm_content=lo&utm_medium=badge',
        iosLink: 'https://apps.apple.com/app/instagram/id389801252?vt=lo',
        component: 'registration'
      }
    },
    methods: {
      change() {
        this.component = 'birthday'
      }
    }
  })
</script>

<style scoped>
.reg__img{

  width: 24px;
  height: 24px;

}
</style>
