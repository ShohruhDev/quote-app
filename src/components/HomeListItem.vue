    <template>
        <v-card
          class="mt-10"
          v-for="(quote, index) in QUOTES"
          :key="index"
        >
          <v-list-item 
          three-line
          >
            <v-list-item-content>
              <v-list-item-title class="text-h6 mb-1">
               ID: {{quote.id}}
              </v-list-item-title>
              <v-list-item-title class="text-h6 mb-1">
                {{quote.author}}
              </v-list-item-title>
              <v-list-item-subtitle>{{quote.text}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions
          class="d-sm-flex d-block"
          >
          <v-chip
          class="ma-2"
          color="cyan"
          v-for="(gen, index) in quote.values"
          :key="index"
        >
          {{gen}}
          </v-chip>
            <v-spacer></v-spacer>
            <router-link
            :to="'/update' +quote.id"
            >
            <v-btn
              class="mr-10"
              outlined
              rounded
              text
            >
            <v-icon> mdi-square-edit-outline</v-icon>
                Редактировать
            </v-btn>
            </router-link>
              <v-btn
                depressed
                color="error"
                @click.stop="removeQuote(quote.id)"

              >
             <v-icon> mdi-delete</v-icon>
               Удалить
            </v-btn>
          </v-card-actions>
        </v-card>
    </template>

    <script>
    import axios from 'axios'
    import {mapActions,mapGetters} from "vuex";
    export default {
      data () {
        return {
        dialog: false,
      }
    },
      computed: {
      ...mapGetters(["QUOTES"]),
    },
    methods: {
      ...mapActions([
        "fetchQuotes"
      ]),
      async removeQuote(id){
        let result = await axios.delete("http://localhost:3001/quotesList/"+id);
        if(result.status == 200){
          this.fetchQuotes()
        }
      },
    },
    mounted() {
      this.fetchQuotes();
      }

      }
    </script>

    <style scoped>
    @media (max-width: 500px) {
      v-card-actions {
        display: block;

      }
    }
    </style>