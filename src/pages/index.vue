<template>
  <div>
    <ToDoInput />
    <ToDoList />
  </div>
</template>

<script>
import ToDoInput from "./_partials/ToDoInput";
import ToDoList from "./_partials/ToDoList";

export default {
  components: {
    ToDoInput,
    ToDoList,
  },
};
</script>