import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'
import App from './App.vue'
import router from './router'
import store from './store'
import 'view-ui-plus/dist/styles/viewuiplus.css'

import theFooter from './components/theFooter.vue'
const app = createApp(App)

app.use(store);

app.component("thefooter", theFooter);
  
app.use(router);
app.use(ViewUIPlus);
app.mount('#app');
