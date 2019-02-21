import { Workbox } from "workbox-window";

const workbox = new Workbox("/sw.js");
workbox.register().then(registration => {
  console.log(registration);
});
