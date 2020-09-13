<template>
  <p class="homeText">
    Welcome to GitHubRepository application
  </p>
</template>
<script>
import ReposService from '@/api-services/repos.service'

export default {
  name: 'Home',
  created () {
    ReposService.getRepository().then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.log(error.data)
    })
  }
}
</script>
<style scoped>
  .homeText {
    font-size: 35px;
    color: red;
    text-align: center;
    position: relative;
    top: 30px;
    text-shadow: 2px 2px 2px gray;
  }
</style>
