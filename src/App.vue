<template>
  <div id="app" class="d-flex flex-column align-items-stretch flex-fill">
    <Toolbar></Toolbar>
    <notePad class="draggable"></notePad>
    <scratchPad class="draggable"></scratchPad>
  </div>
</template>

<script>
import notePad from "./components/notePad";
import scratchPad from "./components/scratchPad";
import Toolbar from "./components/Toolbar";
export default {
  name: "app",
  components: {
    notePad,
    scratchPad,
    Toolbar
  },

  data: () => {
    return {};
  }
};
</script>

<style>
#app {
  font-family: "Courier New", Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  flex: 1;
  height: 100%;
}
</style>
