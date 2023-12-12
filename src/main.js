import "./index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

// Lorem generator
import LoremIpsumGenerator from '@pablodz/lorem-ipsum-generator';


const app = createApp(App);

app.use(LoremIpsumGenerator);

app.use(createPinia());

app.mount("#app");
