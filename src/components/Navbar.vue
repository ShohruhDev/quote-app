<template>
  <v-card>
    <v-toolbar
      color="cyan"
      flat
    >
      <v-toolbar-title>Quote App</v-toolbar-title>
         <v-col
          md="2"
        >
          <v-text-field
            label="Search..."
            solo
            v-model="searchQuote"
          >
          </v-text-field>
        </v-col>
      <v-btn icon >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    <v-btn
      color="light"
      @click="openDialog"
    >
        <v-icon
        class="mdi-pencil"
        >mdi-pencil
        </v-icon>
        Создать цитату
    </v-btn>

    </v-toolbar>
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