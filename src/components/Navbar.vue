<template>
  <v-card>
    <v-toolbar
      color="cyan"
      flat
    >
      <v-toolbar-title>Quote App</v-toolbar-title>

      <v-spacer></v-spacer>
    <v-btn
      color="light"
    >
        <v-icon
        class="mdi-pencil"
        >mdi-pencil</v-icon>
      Создать цитату
    </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          'web', 'shopping', 'videos', 'images', 'news',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>