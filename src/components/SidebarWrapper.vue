<template>
  <div class="sidebar-wrapper" v-if="currentRouteName != '/pengerjaan'">
    <div
      class="sidebar sidebar-collapse"
      :class="expanded ? 'collapsed' : ''"
      id="sidebar"
    >
      <div class="sidebar__menu-group">
        <ul class="sidebar_nav">
          <li :class="currentRouteName == '/' ? 'active' : ''">
            <router-link to="/">
              <span class="nav-icon uil uil-create-dashboard"></span>
              <span class="menu-text">Dashboard</span>
              <!-- <span class="toggle-icon"></span> -->
            </router-link>
          </li>
          <li :class="currentRouteName == '/promotryoutskd' ? 'active' : ''">
            <router-link to="/promotryoutskd">
              <span class="nav-icon uil uil-clipboard-notes"></span>
              <span class="menu-text">Promo Try Out SKD</span>
            </router-link>
          </li>
          <li :class="currentRouteName == '/tryoutskd' ? 'active' : ''">
            <router-link to="/tryoutskd">
              <span class="nav-icon uil uil-edit-alt"></span>
              <span class="menu-text">Pengerjaan Try Out SKD</span>
            </router-link>
          </li>
          <li :class="currentRouteName == '/dompet' ? 'active' : ''">
            <router-link to="/dompet">
              <span class="nav-icon uil uil-wallet"></span>
              <span class="menu-text">Dompet</span>
              <span class="badge badge-success menuItem rounded-circle">{{
                koin
              }}</span>
            </router-link>
          </li>
          <li :class="currentRouteName == '/materiskd' ? 'active' : ''">
            <router-link to="/materiskd">
              <span class="nav-icon uil uil-meeting-board"></span>
              <span class="menu-text">Materi SKD</span>
            </router-link>
          </li>
          <li :class="currentRouteName == '/testimoni' ? 'active' : ''">
            <router-link to="/testimoni">
              <span class="nav-icon uil uil-book-open"></span>
              <span class="menu-text">Testimoni</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    user: Object,
    msg: String,
    expanded: Boolean,
  },
  data() {
    return {
      koin: "",
    };
  },
  mounted() {
    axios
      .get(this.http + "/api/getinfoakun/" + this.user.email)
      .then((response) => {
        if (response.data["koin"] == null) {
          this.koin = 0;
        } else {
          this.koin = response.data["koin"];
        }
      });
  },
  computed: {
    currentRouteName() {
      return "/" + this.$router.currentRoute.value.path.split("/")[1];
    },
  },
};
</script>

<style></style>
