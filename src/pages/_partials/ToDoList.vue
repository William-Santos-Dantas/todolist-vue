<template>
  <div>
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
              <v-icon small @click="openDialog(item)"> mdi-pencil </v-icon>
              <v-icon small @click="deleteItem(item.id)"> mdi-delete </v-icon>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-dialog v-model="dialogModal" width="300">
      <EditDialogComponent
        :item="itemModal"
        @closeDialog="dialogModal = false"
      />
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import EditDialogComponent from "./editDialog";
export default {
  components: {
    EditDialogComponent,
  },
  data() {
    return {
      dialogModal: false,
      itemModal: {},
      editing: false
    };
  },
  computed: {
    ...mapState({
      items: (state) => state.list.items,
    }),
  },
  methods: {
    ...mapActions(["deleteItem"]),
    openDialog(item) {
      this.dialogModal = !this.dialogModal;
      this.itemModal = {};
      this.itemModal.title = item.title;
      this.itemModal.id = item.id;
    },
  },
};
</script>