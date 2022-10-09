<template>
  <v-container>
   <div class="text-h4 mt-10 mb-4">
     Quote List
   </div>
    <HomeListItem 
    v-for="(quote , i) in quotesList"
    :key="i"
    :id="quote.id"
    :author="quote.author"
    :text="quote.text"
    :genre="quote.genre"
    @quoteRemove="quoteRemove(i)"
    /> 
  </v-container>
</template>
<script>
import HomeListItem from '@/components/HomeListItem.vue'
export default {
   data() {
    return { 
      quotesList : [
        {
          id: '#1',
          author: 'Shohrux',
          text: "Мы – рабы своих привычек. измени свои привычки, изменится твоя жизнь" ,
          genre: 'drama',
          
        },
          {
          id:'#1',
          author: 'Shohrux',
          text: "Мы – рабы своих привычек. измени свои привычки, изменится твоя жизнь" ,
          genre: 'drama',
          
        },
           {
          id:'#1',
          author: 'Shohruh',
          text: "Мы – рабы своих привычек. измени свои привычки, изменится твоя жизнь" ,
          genre: 'drama',
          
        },
           {
          id:'#1',
          author: 'Shohruh',
          text: "Мы – рабы своих привычек. измени свои привычки, изменится твоя жизнь" ,
          genre: 'drama',
        },
      ],
     }
  },
 components: {
  HomeListItem
 },
 methods: {
  quoteRemove(i){
    return this.quotesList.filter(quote => {
    })
  }
 }
}
</script>