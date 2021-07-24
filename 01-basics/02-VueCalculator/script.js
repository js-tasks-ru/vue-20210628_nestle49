import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const vueCalculator = defineComponent({
  data() {
    return {
      firstTerm: 0,
      secondTerm: 0,
      operation: 'sum',
    }
  },
  computed: {
    result(){
      switch (this.operation) {
        case 'sum':
          return this.firstTerm + this.secondTerm
        case 'subtract':
          return this.firstTerm - this.secondTerm
        case 'multiply':
          return this.firstTerm * this.secondTerm
        case 'divide':
          return this.firstTerm / this.secondTerm
        default:
          return 0
      }
    },
  },
});

createApp(vueCalculator).mount('#app');
