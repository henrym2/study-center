import Vue from 'vue'
import App from './App.vue'
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import java from 'highlight.js/lib/languages/java'
import 'highlight.js/styles/github.css';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import interact from 'interactjs'

Vue.config.productionTip = false
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('java', java)

Vue.use(interact)

// eslint-disable-next-line
var app = new Vue({
  render: h => h(App),
}).$mount('#app')