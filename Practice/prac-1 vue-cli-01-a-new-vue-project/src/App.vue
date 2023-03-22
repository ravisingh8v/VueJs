<template>
  <header>
    <h1>hello Add New friends</h1>
  </header>
  <new-friend @add-data="addData"></new-friend>
  <ul>
    <!-- <friend-contact name="ravi" phone-number="646444454454"></friend-contact> -->
    <friend-contact
      v-for="friend in friends"
      :key="friend.name"
      :name="friend.name"
      :email="friend.email"
      :phone-number="friend.phone"
      :is-favorite="friend.isFavorite"
      @addFavorite="addFavorite"
      @deleteFriend="deleteFriend"
    ></friend-contact>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          name: "ravi",
          email: "ravi@gmail.com",
          phone: "123 456 7890",
          isFavorite: true,
        },
        {
          name: "nikunj",
          email: "nikunj@gmail.com",
          phone: "098 7654 321",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    addFavorite(name) {
      let identify = this.friends.find((res) => res.name === name);
      identify.isFavorite = !identify.isFavorite;
    },

    addData(name, phone, email) {
      const newFriendContact = {
        name: name,
        phone: phone,
        email: email,
        isFavorite: false,
      };
      this.friends.push(newFriendContact);
    },
    deleteFriend(data) {
      this.friends = this.friends.filter((friend) => friend.name !== data);
    },
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: white;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
