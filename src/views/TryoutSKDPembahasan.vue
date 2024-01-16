<template>
  <div class="contents" :class="expanded ? 'expanded' : ''">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="project-progree-breadcrumb">
            <div
              class="breadcrumb-main user-member justify-content-sm-between createModal"
            >
              <div
                class="d-flex flex-wrap justify-content-center breadcrumb-main__wrapper"
              >
                <div
                  class="d-flex align-items-center user-member__title justify-content-center me-sm-25"
                >
                  <h4 class="text-capitalize fw-500 breadcrumb-title">
                    Soal dan Pembahasan
                  </h4>
                </div>
              </div>
              <div class="action-btn">
                <a href="#" class="btn px-15 btn-primary">
                  <i class="las la-plus fs-16"></i>create projects</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xxl-3 col-lg-4 col-md-6 mb-25">
          <!-- Profile Acoount -->
          <div class="card">
            <div class="card-body text-center pt-30 px-25 pb-0">
              <div class="account-profile-cards">
                <div class="ap-img d-flex justify-content-center">
                  <!-- Profile picture image-->
                  <img
                    class="ap-img__main bg-opacity-primary wh-120 rounded-circle mb-3"
                    src="img/tm1.png"
                    alt="profile"
                  />
                </div>
                <div class="ap-nameAddress">
                  <h6 class="ap-nameAddress__title">Duran Clayton</h6>
                  <p class="ap-nameAddress__subTitle fs-14 pt-1 m-0">
                    Sulawesi Selatan
                  </p>
                </div>
                <div
                  class="ap-button account-profile-cards__button button-group d-flex justify-content-center flex-wrap pt-20"
                >
                  <button
                    type="button"
                    class="border text-capitalize px-25 color-gray transparent follow radius-md"
                  >
                    <span class="las la-user-plus follow-icon"></span>Lihat
                    Profil
                  </button>
                </div>
              </div>

              <div class="card-footer mt-20 pt-20 pb-20 px-0 bg-transparent">
                <div
                  class="profile-overview d-flex justify-content-between flex-wrap"
                >
                  <div class="po-details">
                    <h6 class="po-details__title">120</h6>
                    <span class="po-details__sTitle">TWK</span>
                  </div>
                  <div class="po-details">
                    <h6 class="po-details__title">140</h6>
                    <span class="po-details__sTitle">TIU</span>
                  </div>
                  <div class="po-details">
                    <h6 class="po-details__title">182</h6>
                    <span class="po-details__sTitle">TKP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Profile Acoount End -->
        </div>
        <div class="col-xxl-3 col-lg-4 col-md-6 mb-25">
          <!-- Profile Acoount -->
          <div class="card">
            <div class="card-body text-center pt-30 px-25 pb-0">
              <div class="account-profile-cards">
                <div class="ap-img d-flex justify-content-center">
                  <!-- Profile picture image-->
                  <img
                    class="ap-img__main bg-opacity-primary wh-120 rounded-circle mb-3"
                    src="img/tm1.png"
                    alt="profile"
                  />
                </div>
                <div class="ap-nameAddress">
                  <h6 class="ap-nameAddress__title">Duran Clayton</h6>
                  <p class="ap-nameAddress__subTitle fs-14 pt-1 m-0">
                    Sulawesi Selatan
                  </p>
                </div>
                <div
                  class="ap-button account-profile-cards__button button-group d-flex justify-content-center flex-wrap pt-20"
                >
                  <button
                    type="button"
                    class="border text-capitalize px-25 color-gray transparent follow radius-md"
                  >
                    <span class="las la-user-plus follow-icon"></span>Lihat
                    Profil
                  </button>
                </div>
              </div>

              <div class="card-footer mt-20 pt-20 pb-20 px-0 bg-transparent">
                <div
                  class="profile-overview d-flex justify-content-between flex-wrap"
                >
                  <div class="po-details">
                    <h6 class="po-details__title">120</h6>
                    <span class="po-details__sTitle">TWK</span>
                  </div>
                  <div class="po-details">
                    <h6 class="po-details__title">140</h6>
                    <span class="po-details__sTitle">TIU</span>
                  </div>
                  <div class="po-details">
                    <h6 class="po-details__title">182</h6>
                    <span class="po-details__sTitle">TKP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Profile Acoount End -->
        </div>
        <div class="col-xxl-3 col-lg-4 col-md-6 mb-25">
          <!-- Profile Acoount -->
          <div class="card">
            <div class="card-body text-center pt-30 px-25 pb-0">
              <div class="account-profile-cards">
                <div class="ap-img d-flex justify-content-center">
                  <!-- Profile picture image-->
                  <img
                    class="ap-img__main bg-opacity-primary wh-120 rounded-circle mb-3"
                    src="img/tm1.png"
                    alt="profile"
                  />
                </div>
                <div class="ap-nameAddress">
                  <h6 class="ap-nameAddress__title">Duran Clayton</h6>
                  <p class="ap-nameAddress__subTitle fs-14 pt-1 m-0">
                    Sulawesi Selatan
                  </p>
                </div>
                <div
                  class="ap-button account-profile-cards__button button-group d-flex justify-content-center flex-wrap pt-20"
                >
                  <button
                    type="button"
                    class="border text-capitalize px-25 color-gray transparent follow radius-md"
                  >
                    <span class="las la-user-plus follow-icon"></span>Lihat
                    Profil
                  </button>
                </div>
              </div>

              <div class="card-footer mt-20 pt-20 pb-20 px-0 bg-transparent">
                <div
                  class="profile-overview d-flex justify-content-between flex-wrap"
                >
                  <div class="po-details">
                    <h6 class="po-details__title">120</h6>
                    <span class="po-details__sTitle">TWK</span>
                  </div>
                  <div class="po-details">
                    <h6 class="po-details__title">140</h6>
                    <span class="po-details__sTitle">TIU</span>
                  </div>
                  <div class="po-details">
                    <h6 class="po-details__title">182</h6>
                    <span class="po-details__sTitle">TKP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Profile Acoount End -->
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <div
            class="project-top-wrapper project-top-progress d-flex justify-content-between flex-wrap"
          >
            <div
              class="project-top-left d-flex flex-wrap justify-content-lg-between justify-content-center"
            >
              <div
                class="project-tap global-shadow order-lg-1 order-2 ms-xl-0 me-xl-20"
              >
                <ul class="nav px-1" id="ap-tab" role="tablist">
                  <li class="nav-item">
                    <a
                      @click.prevent="tunjukkan('semua')"
                      class="nav-link active"
                      id="ap-overview-tab"
                      data-bs-toggle="pill"
                      href="#ap-overview"
                      role="tab"
                      aria-controls="ap-overview"
                      aria-selected="true"
                      >semua</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      @click.prevent="tunjukkan('tidak dijawab')"
                      class="nav-link"
                      id="timeline-tab"
                      data-bs-toggle="pill"
                      href="#timeline"
                      role="tab"
                      aria-controls="timeline"
                      aria-selected="false"
                      >tidak dijawab</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      @click.prevent="tunjukkan('benar')"
                      class="nav-link"
                      id="activity-tab"
                      data-bs-toggle="pill"
                      href="#activity"
                      role="tab"
                      aria-controls="activity"
                      aria-selected="false"
                      >benar</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      @click.prevent="tunjukkan('salah')"
                      class="nav-link"
                      id="late-tab"
                      data-bs-toggle="pill"
                      href="#late"
                      role="tab"
                      aria-controls="late"
                      aria-selected="false"
                      >salah</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- End: .col-lg-12 -->
      </div>
      <!-- Tab Menu End -->
      <div class="projects-tab-content projects-tab-content--progress">
        <div class="tab-content mt-25" id="ap-tabContent">
          <div
            class="tab-pane fade show active"
            id="ap-overview"
            role="tabpanel"
            aria-labelledby="ap-overview-tab"
          >
            <div class="row">
              <div class="mb-25" v-for="pmb in pembahasans" :key="pmb.id">
                <div
                  class="user-group radius-xl media-ui media-ui--early pt-30 pb-25"
                >
                  <div class="px-30">
                    <div
                      class="media user-group-media d-flex justify-content-between"
                    >
                      <div
                        class="media-body d-flex align-items-center flex-wrap my-sm-0 my-n2"
                      >
                        <a href="#">
                          <h6
                            class="mt-0 fw-500 user-group media-ui__title bg-transparent"
                          >
                            Soal nomor {{ pmb.sn }}
                          </h6>
                        </a>
                        <span
                          v-if="pmb.choose == pmb.ans"
                          class="my-sm-0 my-2 media-badge text-uppercase color-white bg-success"
                          >Benar</span
                        >
                        <span
                          v-else-if="pmb.choose == '1'"
                          class="my-sm-0 my-2 media-badge text-uppercase color-white bg-primary"
                          >tidak dijawab</span
                        >
                        <span
                          v-else-if="pmb.choose != pmb.ans"
                          class="my-sm-0 my-2 media-badge text-uppercase color-white bg-danger"
                          >Salah</span
                        >
                      </div>
                    </div>

                    <div class="user-group-people mt-15 text-start">
                      <div class="user-group-project">
                        <div
                          class="d-flex align-items-center user-group-progress-top"
                        >
                          <div class="media-ui__start">
                            <p
                              v-html="pmb.qns"
                              class="fs-14 fw-500 color-dark mb-0"
                            ></p>
                          </div>
                        </div>
                        <div
                          class="d-flex align-items-center user-group-progress-top"
                        >
                          <div class="media-ui__start">
                            <span class="color-light fs-12">Jawaban kamu</span>
                            <p class="fs-14 fw-500 color-dark mb-0">
                              {{ opsi[pmb.sn - 1].option }}
                              <!-- {{ opsi[0] }} -->
                            </p>
                          </div>
                        </div>
                        <div
                          class="d-flex align-items-center user-group-progress-top"
                        >
                          <div class="media-ui__start">
                            <span class="color-light fs-12">Pembahasan</span>
                            <p
                              v-html="pmb.exp"
                              class="fs-14 fw-500 color-dark mb-0"
                            ></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End: .projects-tab-content -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    user: Object,
    expanded: Boolean,
    eid: String,
  },
  data() {
    return {
      pembahasanlengkap: [],
      pembahasans: [],
      opsi: [],
    };
  },
  mounted() {
    console.log("lihat pembahasan");
    this.getsoaldanpembahasan();
  },
  methods: {
    getsoaldanpembahasan() {
      console.log("lihat");
      axios
        .get(
          this.http +
            "/api/tryoutskd/getsoaldanpembahasan/" +
            this.user.email +
            "/" +
            this.eid
        )
        .then((response) => {
          console.log(response.data);
          this.pembahasanlengkap = response.data[0];
          this.pembahasans = this.pembahasanlengkap;
          this.opsi = response.data[1];
        });
    },
    tunjukkan(status) {
      this.pembahasans = [];
      if (status == "semua") {
        this.pembahasans = this.pembahasanlengkap;
      } else if (status == "benar") {
        for (let i in this.pembahasanlengkap) {
          if (
            this.pembahasanlengkap[i].choose == this.pembahasanlengkap[i].ans
          ) {
            this.pembahasans.push(this.pembahasanlengkap[i]);
          }
        }
      } else if (status == "tidak dijawab") {
        for (let i in this.pembahasanlengkap) {
          if (this.pembahasanlengkap[i].choose == "1") {
            this.pembahasans.push(this.pembahasanlengkap[i]);
          }
        }
      } else if (status == "salah") {
        for (let i in this.pembahasanlengkap) {
          if (
            this.pembahasanlengkap[i].choose != this.pembahasanlengkap[i].ans &&
            this.pembahasanlengkap[i].choose != "1"
          ) {
            this.pembahasans.push(this.pembahasanlengkap[i]);
          }
        }
      }
    },
  },
};
</script>

<style></style>
