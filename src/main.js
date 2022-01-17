import { createApp } from 'vue';
// import baseComponents from '@/components/ui/';
import { Icon } from '@iconify/vue';
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import App from './App.vue';
import router from './router';
import store from './store';

// styles

// vendors style
import 'swiper/swiper.scss';
import 'normalize.css';

// local styles
// Layout & components
import '@/scss/root.scss';
import '@/scss/common.scss';
import '@/scss/greeds.scss';
import '@/scss/buttons.scss';

// Helpers
import '@/scss/helpers.scss';

const app = createApp(App);

/* baseComponents.forEach((item) => {
  app.component(item.name, item);
}); */

app.component('Icon', Icon);
app.component('Swiper', Swiper);
app.component('SwiperSlide', SwiperSlide);

app.use(store).use(router).mount('#app');
