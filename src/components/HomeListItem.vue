    <template>
        <v-card
          class="mt-10"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h6 mb-1">
                {{id}}
              </v-list-item-title>
              <v-list-item-title class="text-h6 mb-1">
                {{author}}
              </v-list-item-title>
              <v-list-item-subtitle>{{text}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
          <v-chip
          class="ma-2"
          color="cyan"
        >
          {{this.genre}}
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
    import RemoveDialog from "@/components/RemoveDialog.vue";
    export default {
    components: {
        RemoveDialog,
        RemoveDialog
        },
      props: ['text','author','id','genre'],
      methods: {
        openRemoveDialog(){
          this.$store.commit('showRemoveDialog')
          }
        }
      }
    </script>