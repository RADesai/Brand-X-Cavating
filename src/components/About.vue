<template>
  <div class="container">
    <div class="about">
      <div class="col-md-8 col-md-offset-2 col-xs-12">
        <div class="about-logo-container">
          <img class="img-rounded about-logo" src="https://image.ibb.co/d4EOrF/brandX.png" alt="Brand-X-Cavating">
          <hr class="bgColor-blend">
        </div>
      </div>
      <div class="col-xs-12 about-container text-center">
        <div class="about-heading">
          <h2>About</h2>
          <hr class="bgColor-blend">
        </div>
        <div class="about-description">
          Here at Brand-X-Cavating located at 352 Oldham Rd, Wayne, New Jersey 07470,
          we offer services like Septic Systems, Retaining Walls, Demolition, Hammer,
          Grapple Service, Trucking, Snow Plowing, Drainage, Mobile Crushing & many more.
          Please feel free to reach out to us with any questions or concerns at (973) 720-0434.
          <br>
          <br>
          BrandX is a leading construction service and supply company established in 1977.
          BrandX has continued to grow thanks to a well-earned reputation for quality and integrity with a firm commitment to exceeding our client's expectations.
          We serve a wide range of customers and look forward to working with you soon!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'about',
    components: {},
    data() { return {} }
  }
</script>

<style>
.about-container {
  border: 1px solid #000;
  box-shadow: 0 2px 4px 0 #000;
  margin: 10px;
  margin-left: 0px;
  padding: 15px;
  padding-top: 0px;
}

.about-description {
  font-family: 'Titillium Web', sans-serif;
}

.about-heading {
  color: #ac8e9e;
  font-family: 'Source Sans Pro', sans-serif;
}

.about-logo {
  width: 100%;
}
</style>
