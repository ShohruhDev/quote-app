<template>
  <v-card>
    <v-toolbar
      color="cyan"
      flat
    >
      <v-toolbar-title>Quote App</v-toolbar-title>
      <v-spacer></v-spacer>
      <form action="search">
      <input v-model="searchQuote" type="text" name="" placeholder="Search..." id="">
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      </form>
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
    methods: {
      openDialog(){
        this.$store.commit('showDialog')
      }
    }
  }
</script>