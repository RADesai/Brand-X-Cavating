<template>
  <div class="container">
    <div class="services">
      <div class="col-md-8">
        <br><h2>What We Offer</h2><br><br>
        <div v-for="(service, index) in servicesAndIcons" class="row">
          <div class="col-md-1 col-xs-2">
            <br>
            <img :src="service[1]" alt="excavator">
          </div>
          <div class="col-md-11 col-xs-10">
            <div class="description">
              <h4>{{ service[0] }}</h4>
              <h6>Feel free to contact us by phone or through the contact page of the site, we look forward to working with you!</h6>
            </div>
          </div>
        </div>
        <hr class="bgColor-blend">
      </div>
    </div>
  </div>
</template>

<script>
  import servicesAndIcons from '../data/assets.js';
  export default {
    name: 'services',
    components: {},
    data() {
      return {
        servicesAndIcons: servicesAndIcons
      }
    }
  }
</script>

<style>
.services {
  font-family: 'Source Sans Pro', sans-serif;
}
</style>
