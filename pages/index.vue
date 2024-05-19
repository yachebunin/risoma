<template>
  <div>
    <h1>Тестовая страница Risoma</h1>
    <button @click="goToRegister">Регистрация</button>
    <button @click="goToLogin">Авторизация</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToRegister() {
      this.$router.push('/register');
    },
    goToLogin() {
      this.$router.push('/login');
    }
  }
}
</script>
