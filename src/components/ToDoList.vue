<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Title</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.title }}</td>
          <td align="end">
            <v-icon small> mdi-pencil </v-icon>
            <v-icon small> mdi-delete </v-icon>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      list: [
        {
          id: "1",
          name: "Title",
        },
        {
          id: "2",
          name: "Title",
        },
      ],
    };
  },

  computed: {
    ...mapState({
      items: (state) => state.list.items,
    }),
  },
};
</script>