<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Study-Center</a>
    <div class="btn-group" role="control" aria-label="Basic example">
      <button @click="save()" type="button" class="btn btn-secondary">Save</button>
    </div>
  </nav>
</template>

<script>
import { storage } from "../mixins/storageWrapper.js";
export default {
  name: "toolbar",
  mixin: [storage],
  data: () => {
    return { d: "" };
  },
  methods: {
    save: () => {
      //console.log(this.d);
      localStorage.setItem("note", this.dataToStore.note);
    }
  }
};
</script>

<style>
</style>
