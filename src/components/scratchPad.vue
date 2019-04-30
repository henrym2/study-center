<template>
  <div id="noteBook" class="md-form d-flex flex-row flex-fill pb-2 mb-2">
    <div id="mdInput" class="card">
      <textarea
        placeholder="Code Snippits here"
        id="codeInput"
        @click="activate('codeInput')"
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
  name: "scratchPad",
  data: function() {
    return {
      md: require("markdown-it")().use(require("markdown-it-highlightjs")),
      text: "```",
      mdText: "",
      active: false,
      client: client
    };
  },
  ready: {
    render: () => {
      this.mdText = this.md.render(this.text);
    }
  },
  methods: {
    //Render the new text and ensure that the text box remains a code based box
    update: function() {
      if (!this.text.startsWith("```")) {
        this.text = "`" + this.text;
      }
      this.mdText = this.md.render(this.text);
    },
    //Activate the box to ensure it takes tab inputs correctly
    activate: function(id) {
      if (this.active === false) {
        this.client.activate(id);
        this.active = true;
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

#codeInput {
  tab-size: 2;
}

#noteBook {
  flex: 1;
  height: 20vw;
}
</style>
