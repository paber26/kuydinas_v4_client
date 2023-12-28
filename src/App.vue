<template>
  <div v-if="loggedIn">
    <div class="mobile-search">
      <form action="/" class="search-form">
        <img src="img/svg/search.svg" alt="search" class="svg" />
        <input
          class="form-control me-sm-2 box-shadow-none"
          type="search"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>
    </div>
    <div class="mobile-author-actions"></div>

    <HeaderTop :user="user" @listenerChild="listenerChild"></HeaderTop>
    <main class="main-content">
      <SidebarWrapper :expanded="expanded" :user="user"></SidebarWrapper>

      <router-view :expanded="expanded" :user="user" />

      <FooterWrapper></FooterWrapper>
    </main>
    <div id="overlayer">
      <div class="loader-overlay">
        <div class="dm-spin-dots spin-lg">
          <span class="spin-dot badge-dot dot-primary"></span>
          <span class="spin-dot badge-dot dot-primary"></span>
          <span class="spin-dot badge-dot dot-primary"></span>
          <span class="spin-dot badge-dot dot-primary"></span>
        </div>
      </div>
    </div>
    <div class="overlay-dark-sidebar"></div>
    <div class="customizer-overlay"></div>
  </div>

  <div v-else>
    <GoogleLogin :callback="callback" prompt auto-login />
  </div>
</template>

<script>
import HeaderTop from "./components/HeaderTop.vue";
import SidebarWrapper from "./components/SidebarWrapper.vue";
import FooterWrapper from "./components/FooterWrapper.vue";

import { decodeCredential } from "vue3-google-login";
import axios from "axios";

export default {
  data() {
    return {
      loggedIn: false,
      expanded: false,
      user: null,
      callback: (response) => {
        this.loggedIn = true;
        this.user = decodeCredential(response.credential);
        this.user = decodeCredential(response.credential);
      },
    };
  },
  components: {
    HeaderTop,
    SidebarWrapper,
    FooterWrapper,
  },

  methods: {
    listenerChild(reply) {
      if (reply.stt == "loggedIn") {
        this.loggedIn = reply.loggedIn;
      } else if (reply.stt == "expanded") {
        this.expanded = !this.expanded;
      }
    },
    getinfouser() {
      axios.get(this.http + "/api/getinfouser").then((response) => {
        // this.tryoutskd = response.data;
        console.log(response.data);
        return response.data;
      });
    },
  },

  // mounted() {
  // },
  // computed: {
  //   currentRouteName() {
  //     return this.$route.name;
  //   },
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
