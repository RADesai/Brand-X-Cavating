<template>
  <div class="container">

    <div class="row about">
      <div class="col-md-7">
        <img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/546858_544383065576579_1217136824_n.jpg?oh=c1ab5c90768227348737d2fa45897834&oe=5997658E" class="img-rounded">
      </div>
      <div class="col-md-4">
        <br>
        <div class="heading text-center">
          <h2>Leave a Message</h2>
        </div>
        <hr>
        <form>
          Name
          <br>
          <input v-model="name" placeholder="Name">
          <br><br>
          Email
          <br>
          <input v-model="email" placeholder="Email">
          <br><br>
          Subject
          <br>
          <input v-model="subject" placeholder="Subject">
          <br><br>
          Message
          <textarea v-model="message" rows="6" placeholder="Message"></textarea>
          <hr>
          <div class="row">
            <div class="col-md-6 text-left">
              <div @click="contactUs()" class="well well-sm text-center" title="Submit Your Message!">
                <span class="glyphicon glyphicon-send"></span>
              </div>
            </div>
            <div class="col-md-6 text-right">
              <div @click="reset()" class="well well-sm text-center" title="Reset Your Message!">
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
        message: ''
      }
    },
    methods: {
      contactUs: function() {
        let data = {
          'name': this.name,
          'email': this.email,
          'subject': this.subject,
          'message': this.message
        };
        console.log('Submitting ...', data);
        this.$http.post('/api/mail', data).then(response => {
          console.log('Response Received:', response.body);
        }, response => {
          console.log('ERROR:', response);
        });
      },
      reset: function() {
        console.log('Reset!');
        this.name = '';
        this.email = '';
        this.subject = '';
        this.message = '';
        console.log('- - - - - - - - - - - - - -');
      }
    }
  }
</script>

<style>
.link {
  transition: .3s ease-out;
  color: 'fff';
}
.link:hover {
  background-color: '#FFD877';
  color: #000;
  transform: translateY(-3px);
}

h2 {
  margin: 0px;
}

.heading {
  font-family: 'Titillium Web', sans-serif;
}

input, textarea {
  width: 100%;
  color: #f1f4ff;
  background-color: transparent;
  border-radius: 6px 6px 8px 8px;
  text-align: center;
  padding: 5px;
  border: 1px solid #f1f4ff;
}
input:hover, textarea:hover {
  opacity: 0.8;
  border-color: #63D297;
}
input:focus, textarea:focus {
  border: 1px solid #63D297;
  box-shadow: 0px 2px 1px 0px #63D297;
  outline: none;
}

.well {
  background-color: transparent;
  transition: .3s ease-out;
  font-family: 'Titillium Web', sans-serif;
}
.well:hover {
  color: #202729;
  background-color: #f1f4ff;
  cursor: pointer;
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
