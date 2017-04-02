<template>
  <div class="container">
    <div class="row">
      <h1>
        Brand-X-Cavating & Sons Inc.
      </h1>
    </div>
    <div class="row nav">
      <div class="col-md-6">
        <h4>
          Construction Service & Supply  <span class="secondary">Established 1977</span>
        </h4>
      </div>
      <div class="col-md-6 text-center">
        <div class="col-md-3">
          <div class="well well-sm" @click="setPage('about')">
            About
          </div>
        </div>
        <div class="col-md-3">
          <div class="well well-sm" @click="setPage('services')">
            Services
          </div>
        </div>
        <div class="col-md-3">
          <div class="well well-sm" @click="setPage('gallery')">
            Gallery
          </div>
        </div>
        <div class="col-md-3">
          <div class="well well-sm" @click="setPage('contact')">
            Contact Us
          </div>
        </div>
      </div>
    </div>

    <About v-if="page==='about'"></About>
    <Services v-if="page==='services'"></Services>
    <Gallery v-if="page==='gallery'"></Gallery>
    <Contact v-if="page==='contact'"></Contact>

    <hr>

    <footer>
      <div class="row">
        <div class="col-md-8">
          <span class="text-left">Icons made by <a href="http://www.flaticon.com/authors/pixel-buddha" title="Pixel Buddha">Pixel Buddha</a>, <a href="http://www.flaticon.com/authors/linh-pham" title="Linh Pham">Linh Pham</a>, <a href="http://www.freepik.com" title="Freepik">Freepik</a>, and <a href="http://www.flaticon.com/authors/madebyoliver" title="Madebyoliver">Madebyoliver</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a>. Licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC BY 3.0</a></span>
        </div>
        <div class="col-md-2 text-right">
          <div class="square">
            <a href="https://www.facebook.com/brandxcavating/" target="_blank">
              <img class="bottom" src="http://image.ibb.co/cwTuFa/facebook_logo_in_circular_button_outlined_social_symbol_3.png" alt="facebook_logo_in_circular_button_outlined_social_symbol_3">
              <img class="top" src="http://image.ibb.co/fd3xJv/facebook_logo_in_circular_button_outlined_social_symbol_4.png" alt="facebook_logo_in_circular_button_outlined_social_symbol_2">
            </a>
          </div>
        </div>
        <div class="col-md-2">
          <address class="text-right">
            <strong>Brand-X-Cavating</strong><br>
            352 Oldham Rd<br>
            Wayne, NJ 07470<br>
            <abbr title="Feel free to give us a call!">Ph #:</abbr> (973) 720-0434
          </address>
        </div>

      </div>


    </footer>
  </div>
</template>

<script>
  import About from './components/About.vue';
  import Services from './components/Services.vue';
  import Gallery from './components/Gallery.vue';
  import Contact from './components/Contact.vue';
  export default {
    name: 'home',
    components: {
      About, Services, Gallery, Contact
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

h2, h4, footer {
  font-family: 'Titillium Web', sans-serif;
}

/*.nav {
  position: fixed;
}*/

.square {
  position: relative;
}
.square img {
  width: 25%;
}

img {
  transition: .3s ease-out;
}

.square img.top {}
.square img.bottom {
  position: absolute;
  opacity: 0;
}
.square:hover img.top {
  opacity: 0;
  transform: rotateY(360deg);
}
.square:hover img.bottom {
  opacity: 1;
  transform: rotateY(360deg);
}
</style>
