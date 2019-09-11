<template>
  <div id="codeeditor">
    <codemirror v-model="code" :options="cmOptions" ref="cmA" class="CodeMirror"></codemirror>
  </div>
</template>
 
<script>
import { codemirror } from "vue-codemirror";
import "codemirror/mode/yaml/yaml.js";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
export default {
  components: {
    codemirror
  },
  data() {
    return {
      code: `key: Event
trigger:
  src: https://github.com/mesg-foundation/service-webhook
  taskKey: xxx
tasks:
  - src: ../serviceA
    taskKey: xxx
  - src: /Users/antho/prog/MESG/testservice/serviceB
    taskKey: xxx
  - src: mesg://marketplace/service/xxx
    taskKey: xxx`,
      cmOptions: {
        tabSize: 4,
        mode: "yaml",
        theme: "dracula",
        lineNumbers: true,
        line: true,
        readOnly: true
      }
    };
  },
  methods: {
    onCmReady(cm) {
      console.log("the editor is readied!", cm);
    },
    onCmFocus(cm) {
      console.log("the editor is focus!", cm);
    },
    onCmCodeChange(newCode) {
      console.log("this is new code", newCode);
      this.code = newCode;
    }
  },
  computed: {
    cmA() {
      return this.$refs.cmA.codemirror;
    }
  },
  mounted() {
    console.log("this is current codemirror object", this.codemirror);
  }
};
</script>

<style scoped>
</style>