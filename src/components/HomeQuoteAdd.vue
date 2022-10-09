<template>
  <v-container>
    <v-dialog
      persistent
      max-width="600"
      v-model="$store.getters.getDialogVisible"
    >
   <v-card> <v-card-title>title</v-card-title></v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
  }
</script>

