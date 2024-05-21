<template>
  <div>
    <h1>Авторизация Risoma</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">Почта:</label>
        <input type="email" v-model="email" id="email" required>
      </div>
      <div>
        <label for="password">Пароль:</label>
        <input type="password" v-model="password" id="password" required>
      </div>
      <button type="submit">Авторизоваться</button>
      <p v-if="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await this.$axios.post('/users/login', {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem('token', response.data.token);
        this.$router.push('/posts');
      } catch (error) {
        this.error = 'Неудачная авторизация: ' + (error.response?.data?.message || error.message);
      }
    }
  }
}
</script>
