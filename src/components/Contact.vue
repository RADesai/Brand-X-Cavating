<template>
  <div class="container">
    <div class="row about">
      <div class="col-md-7">
        <img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/546858_544383065576579_1217136824_n.jpg?oh=c1ab5c90768227348737d2fa45897834&oe=5997658E" class="img-rounded">
      </div>
      <div class="col-md-4">
        <div class="heading text-center">
          <h2>Leave a Message</h2>
        </div>
        <hr class="blend">
        <form>
          <input v-model="name" placeholder="Name" required><br><br>
          <input v-model="email" type="email" placeholder="Email" required><br><br>
          <input v-model="subject" placeholder="Subject" required><br><br>
          <textarea v-model="message" rows="6" placeholder="Message" required></textarea>
          <hr class="offwhite">
          <div class="row">
            <div class="col-md-6 text-left">
              <div @click="contactUs()" class="well well-sm text-center" title="Submit Your Message!">
                <span class="glyphicon glyphicon-send"></span>
              </div>
            </div>
            <div @click="resetFields()" class="col-md-6 text-right">
              <div class="well well-sm text-center" title="Reset Your Message!">
                <span class="glyphicon glyphicon-trash"></span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'contact',
    components: {},
    data() {
      return {
        name: '',
        email: '',
        subject: '',
        message: '',
        sent: false
      }
    },
    methods: {
      contactUs: function() {
        let data = {
          'Name': this.name,
          'Email': this.email,
          'Subject': this.subject,
          'Message': this.message
        };
        if (this.message !== '' ) {
          console.log('Submitting ...', data);
          this.$http.post('https://formspree.io/dbrand6194@gmail.com', data).then(response => {
            console.log('Email Sent!', response.body);
            this.sent = true;
            this.name = '';
            this.email = '';
            this.subject = '';
            this.message = "Thank you! We've received your message and will get back to you ASAP!";
          }, response => {
            console.log('ERROR:', response);
          });
        }
      },
      resetFields: function() {
        this.name = '';
        this.email = '';
        this.subject = '';
        this.message = '';
      }
    }
  }
</script>

<style>
.offwhite {
  border-color: #f1f4ff;
}

.heading {
  font-family: 'Titillium Web', sans-serif;
}

input, textarea {
  width: 100%;
  color: #E7E8E8;
  background-color: transparent;
  border-radius: 6px 6px 8px 8px;
  padding: 5px;
  border: 1px solid #f1f4ff;
}
input:hover, textarea:hover {
  border-color: #63D297;
  color: #f1f4ff;
}
input:focus, textarea:focus {
  border: 1px solid #63D297;
  box-shadow: 0px 2px 1px 0px #63D297;
  outline: none;
}

.glyphicon-send {
  color: #63D297;
  transition: .3s ease-out;
}
.glyphicon-send:hover {
  transform: translateX(3px) translateY(-3px);
}

.glyphicon-trash {
  color: #EE3017;
  transition: .3s ease-out;
}
.glyphicon-trash:hover {
  transform: translateY(3px);
}
</style>
