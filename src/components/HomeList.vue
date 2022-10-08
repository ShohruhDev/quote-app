<template>
  <v-container>
   <div class="text-h4 mt-10 mb-4">
     Quote List
   </div>
    <HomeListItem/> 
  </v-container>
</template>
<script>
import HomeListItem from '@/components/HomeListItem.vue'
export default {
 components: {
  HomeListItem
 }
}
</script>