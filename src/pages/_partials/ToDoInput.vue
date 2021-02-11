<template>
  <div>
    <v-text-field
      v-model="inputText"
      append-icon="mdi-plus"
      filled
      label="Add Item"
      type="text"
      @click:append="addItem()"
    ></v-text-field>
  </div>
</template>

<script>
import { v1 } from "uuid";

export default {
  data() {
    return {
      inputText: "",
    };
  },
  methods: {
    addItem() {
      this.$store.dispatch("addItem", {
        id: v1(),
        title: this.inputText,
      });
      this.inputText = ""
    },
  },
};
</script>

<style lang="scss" scoped>
</style>