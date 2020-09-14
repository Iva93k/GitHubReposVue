<template>
  <b-container id="app">
    <b-row>
      <b-col>
        <navbar />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <router-view />
      </b-col>
    </b-row>
    <br /><br />
    <b-row>
      <b-col>
        <img src="./assets/index.png" height="100" style="display: block;margin: auto;">
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
