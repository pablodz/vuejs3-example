import "./index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

// Lorem generator
import LoremIpsumGenerator from '@/components/extras/LoremIpsumGenerator.vue';

const app = createApp(App);

app.component('LoremIpsumGenerator', LoremIpsumGenerator);

app.use(createPinia());

app.mount("#app");
