// import { createApp, defineComponent, h } from "vue";
// import { createApp, defineComponent, createVNode } from "vue";
import { createApp } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

const img = require("./assets/logo.png"); // eslint-disable-line

// h => createElement
// const App = defineComponent({
//   render() {
//     return createVNode("div", { id: "app" }, [
//       createVNode("img", {
//         alt: "Vue logo",
//         src: img
//       }),
//       createVNode(HelloWorld, {
//         msg: "Welcome to Your Vue.js + TypeScript App",
//         age: 24
//       })
//     ]);
//   }
// });

createApp(App)
  .use(store)
  .use(router)
  .mount("#app-vue");
