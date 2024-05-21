<template>
  <div>
    <h1>Регистрация Risoma</h1>
    <form @submit.prevent="register">
      <div>
        <label for="email">Почта:</label>
        <input type="email" v-model="email" id="email" required>
      </div>
      <div>
        <label for="password">Пароль:</label>
        <input type="password" v-model="password" id="password" required>
      </div>
      <button type="submit">Регистрация</button>
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
    async register() {
      try {
        await this.$axios.post('/users/register', {
          email: this.email,
          password: this.password,
        });
        const response = await this.$axios.post('/users/login', {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem('token', response.data.token);
        this.$router.push('/posts');
      } catch (error) {
        this.error = 'Ошибка регистрации: ' + (error.response?.data?.message || error.message);
      }
    }
  }
}
</script>
