<template>
  <div class="contents" :class="expanded ? 'expanded' : ''">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-main">
            <h4 class="text-capitalize breadcrumb-title">
              Promo Try Out SKD CPNS
            </h4>
            <div class="breadcrumb-action justify-content-center flex-wrap">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/"
                      ><i class="uil uil-estate"></i>Dashboard</router-link
                    >
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Try Out SKD
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="row">
          <router-link
            :to="'/tryoutskd/detail/' + tskd.eid"
            class="col-xxl-3 col-lg-4 col-md-6 mb-15"
            v-for="tskd in tryoutskd"
            :key="tskd.eid"
          >
            <div class="feature-cards feature-card--1">
              <figure class="feather-cards__figure">
                <figcaption class="p-2">
                  <div class="feature-cards__top">
                    <span></span>
                    <span class="uil uil-pricetag-alt"
                      >{{ tskd.harga }} koin</span
                    >
                  </div>
                  <h4>{{ tskd.title }}</h4>
                  <span class="text-sm">
                    Kerjakan {{ tskd.total }} soal, {{ tskd.time }} menit
                  </span>
                  <div class="feature-cards__bottom">
                    <div class="feedbackSection">
                      <div class="author">
                        <img
                          class="rounded-circle"
                          src="img/svg/genetic-data-com.svg"
                          alt=""
                        />
                        <span>Belum diikuti</span>
                      </div>
                      <div class="feedback">
                        <span class="uil uil-chat-bubble-user">120</span>
                      </div>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    expanded: Boolean,
  },
  data() {
    return {
      tryoutskd: [],
    };
  },
  mounted() {
    axios.get(this.http + "/api/tryoutskd").then((response) => {
      this.tryoutskd = response.data;
      console.log(response.data);
    });
    console.log(this.http);
  },
};
</script>

<style></style>
