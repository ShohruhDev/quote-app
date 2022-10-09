    <template>
        <v-card
          class="mt-10"
          v-for="(quote, i) in QUOTES"
          :key="quote.author"
          @removeQuote = "removeQuote(i)"
        >
          <v-list-item 
          three-line
          >
            <v-list-item-content>
              <v-list-item-title class="text-h6 mb-1">
                {{quote.id}}
              </v-list-item-title>
              <v-list-item-title class="text-h6 mb-1">
                {{quote.author}}
              </v-list-item-title>
              <v-list-item-subtitle>{{quote.text}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
          <v-chip
          class="ma-2"
          color="cyan"
        >
          {{quote.genre}}
        </v-chip>
            <v-spacer></v-spacer>
            <v-btn
              class="mr-10"
              outlined
              rounded
              text
            >
            <v-icon> mdi-square-edit-outline</v-icon>
              Редактировать
            </v-btn>
              <v-btn
                @click="openRemoveDialog"
                depressed
                color="error"
        >
             <v-icon> mdi-delete</v-icon>
               Удалить
            </v-btn>
          </v-card-actions>
        </v-card>
        <RemoveDialog/>
    </template>

    <script>
    import {mapActions,mapGetters} from "vuex";
    import RemoveDialog from "@/components/RemoveDialog.vue";
    export default {
    components: {
        RemoveDialog,
        },
      computed: {
      ...mapGetters([
              "QUOTES"
              ]),
       },
      methods: {
        ...mapActions(['DELETE_FROM_CARD']),
        removeQuote(i){
          this.DELETE_FROM_CARD(i)
        },
        ...mapActions([
        "GET_QUOTESLIST"
        ]),
        openRemoveDialog(){
          this.$store.commit('showRemoveDialog')
          }
        },
      mounted() {
        this.GET_QUOTESLIST()
      }

      }
    </script>