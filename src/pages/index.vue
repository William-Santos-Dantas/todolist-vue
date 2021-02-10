<template>
  <div>
    <ToDoInput />
    <ToDoList />
  </div>
</template>

<script>
import ToDoInput from "@/components/ToDoInput";
import ToDoList from "@/components/ToDoList";
import ToDoItem from "@/components/ToDoItem";

export default {
  components: {
    ToDoInput,
    ToDoList,
    ToDoItem,
  },
};
</script>