import { createApp } from "vue";

// Importing Component
import App from "./App.vue";
import FriendContact from "./components/FriendContact";
import NewFriend from "./components/NewFriend";

// created app
const app = createApp(App);
app.component("friend-contact", FriendContact, NewFriend);
app.component("new-friend", NewFriend);
app.mount("#app");
