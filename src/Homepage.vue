<template>
  <div class="container">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="logo col-md-6 col-xs-12">
          <h1>
            Brand-X-Cavating & Sons Inc.
          </h1>
        </div>
        <div class="links text-center col-md-6 col-xs-12">
          <li class="col-md-3">
            <div class="link well well-sm" @click="setPage('about')">
              About
            </div>
          </li>
          <li class="col-md-3">
            <div class="link well well-sm" @click="setPage('services')">
              Services
            </div>
          </li>
          <li class="col-md-3">
            <div class="link well well-sm" @click="setPage('gallery')">
              Gallery
            </div>
          </li>
          <li class="col-md-3">
            <div class="link well well-sm" @click="setPage('contact')">
              Contact Us
            </div>
          </li>
        </div>
      </div>
    </nav>
    <div class="components">
      <About v-if="page==='about'"></About>
      <Services v-if="page==='services'"></Services>
      <Gallery v-if="page==='gallery'"></Gallery>
      <Contact v-if="page==='contact'"></Contact>
      <hr class="blend">
      <PageFooter></PageFooter>
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

.links {
  float: right;
}

.link {
  transition: .3s ease-out;
  color: #f1f4ff;
  font-family: 'Titillium Web', sans-serif;
}
.link:hover {
  background-color: '#FFD877';
  color: #202729;
  transform: translateY(-3px);
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
  border-bottom: 1px solid #3f4b4f;
  box-shadow: 0 1px 2px #3f4b4f;
}

.components {
  margin-top: 10%;
}

.blend {
  border-color: #3f4b4f;
}
</style>
