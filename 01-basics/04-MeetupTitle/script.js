import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const meetupTitle = defineComponent({
  data() {
    return {
      meetupId: 1,
      meetupTitle: '',
    };
  },
  watch: {
    meetupId: {
      immediate: true,
      handler(newId) {
        fetchMeetupById(newId).then((meetup) => (this.meetupTitle = meetup.title))
      },
    },
  }
});

createApp(meetupTitle).mount('#app');
