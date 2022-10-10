<template>
  <v-container>
    <v-dialog
      persistent
      max-width="1000"
      v-model="$store.getters.getDialogVisible"
    >
    <v-card>
      <v-container>
        <v-btn
        @click="hideDialog"
        >
          <v-icon>
             mdi-close
          </v-icon>
        </v-btn>
       <v-card-title>Создать цитату</v-card-title>
       <form action="">
      <v-text-field
        solo
        v-model="quotes.author"
        :error-messages="nameErrors"
        label="Author"
        required
    ></v-text-field>
        <v-textarea
          solo
          name="input-7-4"
          label="Quote..."
          v-model="quotes.text"
        ></v-textarea>
          <v-autocomplete
            v-model="quotes.values"
            :items="items"
            dense
            chips
            small-chips
            label="Genre"
            multiple
            solo
          ></v-autocomplete>
       </form>
       <v-btn
       @click="addQuote"
       >
        Создать
       </v-btn>
      </v-container>
     </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  import axios from 'axios'
  export default {
    data: () => ({
      items: ['drama', 'boevik', 'komedia', 'life'],
      quotes : {
        author:'',
        text: '',
        values: []
      },
      value: null,
    }),
     methods: {
      hideDialog(){
        this.$store.commit('hideDialog')
      },
     async addQuote(){
         const result = await axios.post("http://localhost:3001/quotesList", {
          author: this.quotes.author,
          text: this.quotes.text,
          values: this.quotes.values,
        });
        if(result.status == 201){
          // this.hideDialog()
          this.$router.push({name: 'home'})
        }
      }
    },
  }
 
</script>

