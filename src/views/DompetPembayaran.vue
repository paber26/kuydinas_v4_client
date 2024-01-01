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
            <div class="job-details-card__middle text-start">
              <div class="job-item__title">
                <a href="jobDetails.html">
                  <h3 class="card-title">Paket basic plan</h3>
                </a>
              </div>
              <p>
                Koin yang dibeli dapat digunakan untuk mengikuti setiap tryout
                yang ada di kuy dinas.
              </p>
              <div class="pricing__features">
                <ul class="text-start">
                  <li><span class="fa fa-check"></span>Harga Rp10.000</li>

                  <li><span class="fa fa-check"></span>Mendapat 200 koin</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-30">
          <div class="job-details-widget">
            <!-- <button
              id="paybutton"
              @click.prevent="pembayaran()"
              class="bg-success rounded-xl px-1.5 py-1 text-center text-white font-semibold m-2"
            >
              Lakukan pembayaran
            </button> -->

            <button
              id="paybutton"
              @click.prevent="
                pembayaran('0424ab02-9f6d-492a-85ac-79e81357d161')
              "
              class="btn btn-primary w-100"
            >
              Lakukan pembayaran
            </button>
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
  methods: {
    pembayaran(snapToken) {
      console.log("lakukan pembayaran");
      window.snap.pay(snapToken, {
        onSuccess() {
          alert("Pembayaran berhasil");
          window.location.href = "/dompet";
        },
        onPending() {
          window.location.href =
            "/pembayaran/dompet/" + paket + "/" + snapToken;
        },
        onError() {
          alert("payment failed!");
          window.location.href =
            "/pembayaran/dompet/" + paket + "/" + snapToken;
        },
        onClose() {
          window.location.href = "/dompet";
        },
      });
    },
  },
};
</script>
