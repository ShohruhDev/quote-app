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
        v-model="author"
        :error-messages="nameErrors"
        label="Author"
        required
    ></v-text-field>
        <v-textarea
          solo
          name="input-7-4"
          label="Quote..."
        ></v-textarea>
          <v-autocomplete
            v-model="values"
            :items="items"
            dense
            chips
            small-chips
            label="Genre"
            multiple
            solo
          ></v-autocomplete>
       </form>
       <v-btn>
        Создать
       </v-btn>
      </v-container>
     </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      items: ['drama', 'boevik', 'komedia', 'life'],
      values: [],
      value: null,
    }),
     methods: {
      hideDialog(){
        this.$store.commit('hideDialog')
      } 
  }
  }
</script>

