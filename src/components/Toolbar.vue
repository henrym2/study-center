<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Study-Center</a>
    <div :onClick="save('Text')" class="btn-group" role="control" aria-label="Basic example">
      <button type="button" class="btn btn-secondary">Save</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "toolbar",
  data: () => {
    return {};
  },
  methods: {
    save: text => {
      localStorage.setItem("test", text);
    }
  }
};
</script>

<style>
</style>
