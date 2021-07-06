import Vue from 'vue';
import VueCodemirror from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';
// language
import 'codemirror/mode/css/css.js';
// theme css
import 'codemirror/theme/paraiso-light.css';
// require active-line.js
import 'codemirror/addon/selection/active-line.js';
Vue.use(VueCodemirror, {
  options: {
    orig: '<p>hello world</p>',
    tabSize: 4,
    styleActiveLine: true,
    lineNumbers: true,
    line: true,
    mode: 'text/javascript',
    theme: 'paraiso-light'
  }
  // events: ['scroll', ...]
});
