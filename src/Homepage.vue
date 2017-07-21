<template>
  <div class="container">
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="logo col-md-6 col-xs-12">
          <h1>
            Brand-X-Cavating & Sons Inc.
          </h1>
        </div>
        <div class="text-center col-md-6 col-xs-12">
          <li class="col-xs-3">
            <div class="link" @click="setPage('about')">
              <br />About
            </div>
          </li>
          <li class="col-xs-3">
            <div class="link" @click="setPage('services')">
              <br />Services
            </div>
          </li>
          <li class="col-xs-3">
            <div class="link" @click="setPage('gallery')">
              <br />Gallery
            </div>
          </li>
          <li class="col-xs-3">
            <div class="link" @click="setPage('contact')">
              <br />Contact
            </div>
          </li>
        </div>
      </div>
    </nav>
    <div class="navbar-margin">
      <About v-if="page==='about'"></About>
      <Services v-if="page==='services'"></Services>
      <Gallery v-if="page==='gallery'"></Gallery>
      <Contact v-if="page==='contact'"></Contact>
      <hr class="bgColor-blend">
      <PageFooter v-if="page==='services'"></PageFooter>
    </div>
  </div>
</template>

<script>
  import About from './components/About.vue';
  import Services from './components/Services.vue';
  import Gallery from './components/Gallery.vue';
  import Contact from './components/Contact.vue';
  import PageFooter from './components/PageFooter.vue';
  export default {
    name: 'homepage',
    components: {
      About, Services, Gallery, Contact, PageFooter
    },
    data() {
      return {
        page: 'about'
      }
    },
    methods: {
      setPage: function(sel) {
        this.page = sel;
      }
    }
  }
</script>

<style>
body {
  background-color: #202729;
  color: #f1f4ff;
}

h1 {
  font-family: 'Source Sans Pro', sans-serif;
}

h2, h3, h4 {
  font-family: 'Titillium Web', sans-serif;
}

.logo {
  float: left;
  font-size: 15px;
}

.link {
  transition: .3s ease-out;
  color: #f1f4ff;
  font-family: 'Titillium Web', sans-serif;
}
.link:hover {
  color: #FFD877;
  cursor: pointer;
}
.link:active {
  color: #867bcd;
}

li {
  list-style: none;
  float: right;
  padding-top: 15px;
}

.well {
  background-color: transparent;
  transition: .3s ease-out;
}
.well:hover {
  background-color: #f1f4ff;
  cursor: pointer;
}

.navbar {
  background-color: #202729;
  z-index: 10;
  border: none;
  border-bottom: 1px solid #3f4b4f;
}

.bgColor-blend {
  border-color: #3f4b4f;
}
</style>
