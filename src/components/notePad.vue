<template>
  <div id="noteBook" class="md-form d-flex flex-row flex-fill pb-2 mb-2">
    <div id="mdInput" class="card">
      <textarea
        id="noteInput"
        @click="activate('noteInput')"
        wrap="hard"
        style="resize:inherit; height:inherit"
        class="form-control d-flex"
        v-model="text"
        @input="update"
      ></textarea>
    </div>
    <div id="renderer" class="d-flex flex-column flex-wrap text-justify card">
      <div v-html="mdText"></div>
    </div>
  </div>
</template>

<script>
//import MarkdownIt from "markdown-it";
import client from "../js/client.js";

export default {
  name: "notePad",
  data: () => {
    return {
      md: require("markdown-it")()
        .use(require("markdown-it-math"))
        .use(require("markdown-it-highlightjs")),
      text: "# Hello",
      mdText: "",
      active: false,
      client: client
    };
  },

  methods: {
    update: function() {
      this.mdText = this.md.render(this.text);
    },
    activate: function(id) {
      if (this.active === false) {
        this.client.activate(id);
        this.client.active = true;
      }
    }
  }
};
</script>

<style>
@import url("../css/index.css");
#renderer {
  word-wrap: break-word;
  word-break: break-all;
  width: 50%;
  max-width: 50%;
  height: inherit;
  overflow: auto;
  background-color: whitesmoke;
  z-index: 10;
}

#mdInput {
  background-color: gainsboro;
  width: 50%;
  height: 100%;
  flex: 1;
  height: inherit;
}

#noteInput {
  tab-size: 2;
}

#noteBook {
  flex: 1;
  height: 20vw;
}
</style>
