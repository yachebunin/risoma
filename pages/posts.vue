<template>
  <div>
    <h1>Посты Risoma</h1>
    <button @click="logout">Выйти</button>
    <div v-if="posts && posts.length > 0">
      <ul>
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
      </ul>
    </div>
    <div v-else>
      <p>Постов туть нет :(</p>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      posts: [],
    }
  },
  async mounted() {
    const token = localStorage.getItem('token');
    try {
      const response = await this.$axios.get('/posts', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      this.posts = response.data;
    } catch (error) {
      console.error('Ошибка в запросе постов:', error);
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    }
  }
}
</script>
