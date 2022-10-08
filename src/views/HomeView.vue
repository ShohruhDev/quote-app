<template>
<Navbar/>
<HomeList/>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import HomeList from "@/components/HomeList.vue"

  export default {
   components : {
    Navbar,
    HomeList
   }
  }
</script>