<template>
  <div v-if="comp === 'birthday'" class="birthdays">
    <div class="birthday">
    <div class="birthday__icon">
      <img src="../assets/cake.png" alt="">
    </div>
    <h1 class="birthday__title">Укажите дату вашего рождения</h1>
    <p class="birthday__desc">
      Эта информация не будет показываться в вашем общедоступном профиле.
    </p>
    <div class="birthday__question">Почему нужно указывать дату рождения?</div>
    <div class="birthday__selects">
      <div class="q-pa-md" style="max-width: 300px">
        <div class="q-gutter-md">
          <q-select v-model="model" :options="options"/>
        </div>
      </div>

      <div class="q-pa-md" style="max-width: 300px">
        <div class="q-gutter-md">
          <q-select v-model="dateModel" :options="dateOptions"/>
        </div>
      </div>

      <div class="q-pa-md" style="max-width: 300px">
        <div class="q-gutter-md">
          <q-select v-model="yearModel" :options="yearOptions"/>
        </div>
      </div>
    </div>
    <div class="description">
      <p>Требуется ввести дату вашего рождения</p>
      <p class="description__info">Укажите собственный день рождения, даже если вы создаете этот аккаунт для компании, домашнего животного и всякой параши</p>
    </div>
    <div class="buttons">
      <div v-on:click="changeComp" class="buttons__next">Далее</div>
      <div class="buttons__back">Назад</div>
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
<PhoneNumber v-else="comp"/>
</template>

<script>
  import {defineComponent} from 'vue'
  import {ref} from 'vue'
  import PhoneNumber from "./PhoneNumber";

  export default defineComponent({
    name: 'Birthday',
    components:{
      PhoneNumber
    },
    setup() {
      return {
        model: ref('сентября'),
        dateModel: ref(1),
        yearModel: ref(2020),
        options: [
          'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября',
          'октября', 'ноября', 'декабря'
        ],
        dateOptions: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
        ],
        yearOptions: [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008]
      }
    },
    data(){
      return {
        comp:'birthday'
      }
    },
    methods:{
      changeComp(){
        this.comp = 'phone'
      }
    }
  })
</script>

<style scoped>

</style>
