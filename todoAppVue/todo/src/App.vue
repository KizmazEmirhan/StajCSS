<template>
  <TodoApp />
</template>

<script>
import TodoApp from "./components/TodoApp.vue";

export default {
  name: "App",
  components: {
    TodoApp,
  },
};
</script>

<style>
@import "./styles/output.css";

* {
  box-sizing: border-box;
}
</style>
