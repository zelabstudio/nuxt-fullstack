<template>
  <div>
    <h1>Page contact</h1>
    <form class="contact__form">
      <div class="form__group">
        <label htmlFor="firstName">FirstName</label>
        <input type="text" v-model="firstName" />
      </div>
      <div class="form__group">
        <label htmlFor="email">Email</label>
        <input type="email" v-model="email" />
      </div>
      <div class="form__group">
        <label htmlFor="subject">Subject</label>
        <input type="text" v-model="subject" />
      </div>
      <div class="form__group">
        <label htmlFor="message">message</label>
        <textarea cols="30" rows="10" v-model="message"></textarea>
      </div>
      <div class="form__group">
        <button type="button" @click.prevent="sendMail">Envoyer</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      firstName: "",
      message: "",
      subject: "",
      email: ""
    };
  },
  methods: {
    sendMail: function() {
      console.log(this.firstName, this.message, this.subject, this.email);
      //   fetch('/api/send-email')
    }
  }
};
</script>

<style lang="scss" scoped></style>
