<template>
  <div class="contents" :class="expanded ? 'expanded' : ''">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-main">
            <h4 class="text-capitalize breadcrumb-title">Job Details</h4>
            <div class="breadcrumb-action justify-content-center flex-wrap">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#"><i class="uil uil-estate"></i>Dashboard</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Dompet
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="back-page text-start">
            <router-link to="/dompet">
              <img src="/img/svg/arrow-left.svg" alt="arrow-left" class="svg" />
              Pilih paket lain</router-link
            >
          </div>
        </div>
        <div class="col-lg-8 mb-30">
          <div class="job-details-card">
            <div class="job-details-card__middle">
              <div class="job-item__title">
                <a href="jobDetails.html">
                  <h3 class="card-title">Paket basic plan</h3>
                </a>
              </div>
              <p>
                Koin yang dibeli dapat digunakan untuk mengikuti setiap tryout
                yang ada di kuy dinas.
              </p>
              <a href="job-apply.html" class="btn btn-primary w-100"
                >Lakukan Pembayaran</a
              >
            </div>
          </div>
        </div>
      </div>
      <!-- ends: .row -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["eid", "expanded"],
  data() {
    return {
      tryoutskd: [],
    };
  },
  mounted() {
    console.log(this.eid);
    axios
      .get(this.http + "/api/tryoutskd/getdetail/" + this.eid)
      .then((response) => {
        this.tryoutskd = response.data;
        console.log(this.tryoutskd);
      });
  },
};
</script>
