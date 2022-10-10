<template>
        <v-card>
        <v-container>
        <v-toolbar
        color="white"
        flat
        >
        <div class="v-toolbar__content ">
          <v-toolbar-title
          >Quote App</v-toolbar-title>
          <v-btn icon >
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn
          color="light"
          @click="this.$router.push({name:'homeQuoteAdd'})"
          >
          <v-icon
          class="mdi-pencil"
          >mdi-pencil
        </v-icon>
        Создать цитату
        </v-btn>
        </div>
  </v-toolbar>
</v-container>
</v-card>
</template>

<script>
  export default {
    components :  {
    },
    data () {
      return {
        dialogVisible:  false,
        searchQuote : '',
      }
    },
    computed: {
      // filteredQuotes(){
      //   return this.$store.q.filter(quote => {
      //     return quote.toUpperCase().indexOf(this.searchQuote.toUpperCase()) !== -1;
      //   })
      // }
    },
    methods: {
      openDialog(){
        this.$store.commit('showDialog')
      },
    }
  }
</script>
<style scoped>
@media(max-width: 450px) {
  .v-toolbar__content {
    display: block;
  }
}
</style>