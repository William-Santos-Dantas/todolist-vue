<template>
  <div>
    <v-form ref="form" @submit="updateItem(item)" @submit.prevent>
      <v-card>
        <v-card-title class="headline">
          <v-text-field
            autofocus
            v-model="item.title"
            label="title"
          ></v-text-field>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" type="submit"> Editar</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    item: Object,
  },
  methods: {
    updateItem(item) {
      this.$emit("closeDialog");
      this.$store.dispatch("updateItem", item);
    },
  },
};
</script>