<template>
  <div id="replyform">
    <form @submit.prevent="reply" class="form">
      <img src="../assets/logo.png" />
      <input type="text" v-model="text" />
      <input type="submit" value="REPLY" class="btn" />
    </form>
  </div>
</template>

<script>
export default {
  props: {
    replyForm: Boolean,
  },
  data() {
    return {
      text: '',
    };
  },
  methods: {
    reply() {
      this.text = '';
      this.$toasted.show('Functionality coming soon.....', {
        type: 'info',
        icon: 'fas fa-exclamation',
      });
    },
  },
};
</script>

<style scoped>
input[type='text'] {
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: none;
  text-decoration: none;
  border-bottom: 1px solid #ccc;
}
input[type='text']:hover,
input[type='text']:focus {
  border: none;
  outline: none;
  border-bottom: 2px solid #ccc;
}
.form {
  display: flex;
  padding: 5px;
  margin-left: 10%;
}
.btn {
  display: inline-block;
  background: #f4f4f4;
  color: #333;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
}
img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  padding: 5px;
}
</style>
