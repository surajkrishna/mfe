import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

const mount = (el, { globalStore }) => {
  console.log("globalStore:::", globalStore);
  const app = createApp(Dashboard, { ...globalStore });
  app.mount(el);
};

// if is in development mode
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
