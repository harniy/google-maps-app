<template>
  <v-flex class="users__block">
    <Users @getCurrentUser="getCurrentUser" />
    <v-flex xs6>
      <div id="map">
          <iframe :src="location" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </v-flex>
  </v-flex>
</template>

<script>
import Users from "../components/users.vue";

export default {
  components: { Users },
  data() {
    return {
      currentUser: [],
      location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225232.4144895341!2d-74.04193869785952!3d40.71513291323363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodCo0JA!5e0!3m2!1sru!2sua!4v1639691214983!5m2!1sru!2sua"
    };
  },

  methods: {
    getCurrentUser(user) {
      this.currentUser = user;
    },
  },
  watch: {
    currentUser() {
      this.location = this.currentUser.map.location
    },
  },
};
</script>

<style>
.users__block {
  display: flex;
}
.v-card {
  height: 100%;
  max-height: 100%;
  overflow: auto;
}
#map,
iframe {
  height: 100%;
  width: 100%;
}

</style>
