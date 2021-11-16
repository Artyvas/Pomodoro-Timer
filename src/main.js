import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Tasks from "./components/Tasks.vue"


Vue.config.productionTip = false;
Vue.component('tasks', Tasks)

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

// import { createApp } from 'vue';
// import App from './App.vue'
// import Tasks from './components/Tasks.vue'
// const app = createApp(App);

// app.component('tasks', Tasks)

// app.mount('#app')