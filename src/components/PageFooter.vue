<template>
  <footer>
    <div class="row">
      <div class="col-md-8">
        <span class="text-left credits">Icons made by <a href="http://www.flaticon.com/authors/pixel-buddha" title="Pixel Buddha">Pixel Buddha</a>, <a href="http://www.flaticon.com/authors/linh-pham" title="Linh Pham">Linh Pham</a>, <a href="http://www.freepik.com" title="Freepik">Freepik</a>, and <a href="http://www.flaticon.com/authors/madebyoliver" title="Madebyoliver">Madebyoliver</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a>. Licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC BY 3.0</a></span>
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
</template>

<script>
  export default {
    name: 'pagefooter',
    components: {},
    data() { return {} }
  }
</script>

<style>
footer {
  color: #7e9299;
}
span a {
  text-decoration: none;
  color: #f1f4ff;
}
a:hover {
  text-decoration: none;
  cursor: pointer;
  color: #ffd877;
}
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
  transform: rotateZ(360deg);
}
.square:hover img.bottom {
  opacity: 1;
  transform: rotateZ(360deg);
}
</style>
