<template>
  <Navbar />
  <HomeList />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import HomeList from "@/components/HomeList.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    HomeList,
    Footer,
  },
};
</script>
