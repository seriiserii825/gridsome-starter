<template>
  <footer>Footer of the site Copyright {{ getYear }}</footer>
</template>
<style scoped>
footer {
  padding: 80px 15px;
  color: white;
  background-color: black;
}
</style>

<script>
export default {
  computed: {
    getYear () {
      return new Date().getFullYear();
    }
  }
}
</script>
