<template>
  <div class="container">
    <div class="services">
      <div class="col-md-10 col-md-offset-1 col-xs-12">
        <h2>What We Offer</h2><br>
        <div class="services-container text-center">
          <div v-for="(service, index) in servicesAndIcons">
            <div class="col-md-4 col-xs-12 text-center">
              <div class="service-container">
                <div class="service-icon-container">
                  <br><img :src="service.icon" class="service-icon" alt="excavator">
                </div>
                <hr class="service-bar"/>
                <div class="service-description text-left">
                  <h4 class="service-name">{{ service.name }}</h4>
                  <h6>{{ service.description }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
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

.services-container {
  background-color: #ac8e9e;
}
.service-container {
  border: 1px solid #000;
  box-shadow: 0 2px 4px 0 #000;
  transition: .3s ease;
  margin: 10px;
  margin-left: 0px;
  padding: 15px;
}
.service-container:hover {
  border-color: #3f4b4f;
  background-color: #3f4b4f;
  box-shadow: 0 4px 8px 0 #000;
}
.service-container:hover .service-bar {
  width: 75%;
  border-color: #ac8e9e;
}
.service-container:hover .service-name {}
.service-icon {
  width: 30%;
  margin: 0 auto;
}
.service-bar {
  border-color: #202729;
  width: 30%;
  transition: .3s ease;
}
.service-name {
  color: #ac8e9e;
  font-weight: bold;
  transition: .3s ease;
}
.service-name:hover {
  cursor: pointer;
}
</style>
