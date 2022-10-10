<template>
  <v-container>
    <v-card>
      <v-container>
        <div class="btn d-flex justify-end">
          <v-btn @click="this.$router.push({ name: 'home' })">
            <v-icon> mdi-close </v-icon>
          </v-btn>
        </div>
        <v-card-title>Создать цитату</v-card-title>
        <form action="">
          <v-text-field
            solo
            v-model="quotes.author"
            :error-messages="nameErrors"
            label="Author"
            required
            :rules="rules"
            hide-details="auto"
            mb-10
          ></v-text-field>
          <v-textarea
            :rules="rules"
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
        <div class="btn d-flex justify-end">
          <v-btn @click="addQuote"> Создать </v-btn>
        </div>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    items: ["drama", "boevik", "komedia", "life"],
    rules: [value => !!value || "Required."],
    quotes: {
      author: "",
      text: "",
      values: [],
    },
    value: null,
  }),
  methods: {
    async addQuote() {
      const result = await axios.post("http://localhost:3001/quotesList", {
        author: this.quotes.author,
        text: this.quotes.text,
        values: this.quotes.values,
      });
      if (result.status == 201) {
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>
