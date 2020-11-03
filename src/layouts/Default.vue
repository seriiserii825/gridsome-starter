<template>
  <div class="layout">
    <Header></Header>
    <slot/>
    <Footer></Footer>
  </div>
</template>


<script>
import Footer from "../components/Footer";
import Header from "../components/Header";

export default {
  components: {
    Footer,
    Header
  }
}
</script>

<style scoped>
</style>
