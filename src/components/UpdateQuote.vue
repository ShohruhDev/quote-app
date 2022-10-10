<template>
  <v-container>
    <v-card>
        <v-btn
         @click="this.$router.push({name:'home'})"
        >
          <v-icon>
             mdi-close
          </v-icon>
        </v-btn>
       <v-card-title>Редактировать цитату</v-card-title>
       <form action="">
      <v-text-field
        solo
        v-model="quotes.author"
        :error-messages="nameErrors"
        label="Author"
        required
       :rules="rules"
    ></v-text-field>
        <v-textarea
          solo
          name="input-7-4"
          label="Quote..."
          v-model="quotes.text"
         :rules="rules"
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
       @click="updateQuote"
       >
        Редактировать
       </v-btn>
    </v-card>
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
       rules: [
        value => !!value || 'Required.',
      ],
      value: null,
    }),
    methods: {
     async updateQuote() {
        const result = await axios.put("http://localhost:3001/quotesList/"+this.$route.params.id, {
          author: this.quotes.author,
          text: this.quotes.text,
          values: this.quotes.values,
        });
        if(result.status == 200){
          this.$router.push({name: 'home'})
        }
      }
    },
   async mounted() {
      const result = await axios.get('http://localhost:3001/quotesList/'+this.$route.params.id)
      // console.log(this.$route.params.id, 'shoh')
      this.quotes = result.data
    }
  }
 </script>