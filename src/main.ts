import { createApp } from "vue";
import router from "./router/index";
import "./style.css";
import App from "./App.vue";
// import I18n from "./i18n/index";

const app = createApp(App);
app.use(router);
// app.use(I18n);

app.mount("#app");
