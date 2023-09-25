import "./assets/main.css";
import "virtual:svg-icons-register";

import { createApp } from "vue";
import App from "./App.vue";
import { SvgIconPlugin } from "./components/SvgIcon";

createApp(App).use(SvgIconPlugin).mount("#app");
