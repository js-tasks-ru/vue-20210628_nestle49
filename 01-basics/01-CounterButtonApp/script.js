import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const counterButtonApp = defineComponent({
  data() {
    return {
      counter: 0,
    }
  },
});

createApp(counterButtonApp).mount('#app');
