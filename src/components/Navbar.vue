<template>
  <b-navbar toggleable="md"
            type="dark"
            variant="info">
    <b-navbar-brand :to = "{name: 'Home'}">GitHub Repository Home</b-navbar-brand>
    <b-navbar-brand :to ="{name: 'RepositoryDetails'}">Look at Repository Details</b-navbar-brand>
  </b-navbar>
</template>
<script>
export default {
  name: 'Navbar'
}
</script>
