<template>
<Navbar/>
<HomeList/>
<!-- <Footer/> -->
<HomeQuoteAdd/>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import HomeList from "@/components/HomeList.vue";
import Footer from "@/components/Footer.vue";
import HomeQuoteAdd from "@/components/HomeQuoteAdd.vue";
import {mapActions,mapGetters} from "vuex";

export default {
  components : {
    Navbar,
    HomeQuoteAdd,
    HomeList,
    Footer
  },
}
</script>