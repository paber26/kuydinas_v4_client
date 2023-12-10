<template>
  <div class="contents" :class="expanded ? 'expanded' : ''">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-main">
            <h4 class="text-capitalize breadcrumb-title">
              Detail Try Out SKD CPNS
            </h4>
            <div class="breadcrumb-action justify-content-center flex-wrap">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/"
                      ><i class="uil uil-estate"></i>Home</router-link
                    >
                  </li>
                  <li class="breadcrumb-item">
                    <router-link to="/tryoutskd">Try Out SKD</router-link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Detail
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-sm-6 mb-30">
          <div class="card h-100">
            <div class="card-body p-30">
              <div class="pricing d-flex align-items-center">
                <span
                  class="pricing__tag color-primary order-bg-opacity-primary rounded-pill"
                  >Basic Plan</span
                >
              </div>
              <div class="pricing__price rounded">
                <p
                  class="pricing_value display-3 color-dark d-flex align-items-center text-capitalize fw-600 mb-1"
                >
                  <sup><span class="nav-icon uil uil-pricetag-alt"></span></sup
                  >200
                  <small class="pricing_user">koin</small>
                </p>
              </div>
              <div class="pricing__features">
                <ul class="text-start">
                  <li><span class="fa fa-check"></span>Harga Rp10.000</li>

                  <li><span class="fa fa-check"></span>Mendapat 200 koin</li>
                </ul>
              </div>
            </div>
            <div class="price_action d-flex pb-30 ps-30">
              <button
                class="btn btn-primary btn-default btn-squared text-capitalize px-30"
              >
                Pilih
              </button>
            </div>
          </div>
          <!-- End: .card -->
        </div>
        <!-- End: .col -->
        <div class="col-lg-4 col-sm-6 mb-30">
          <div class="card h-100">
            <div class="card-body p-30">
              <div class="pricing d-flex align-items-center">
                <span
                  class="pricing__tag color-secondary order-bg-opacity-secondary rounded-pill"
                  >Business</span
                >
              </div>
              <div class="pricing__price rounded">
                <p
                  class="pricing_value display-3 color-dark d-flex align-items-center text-capitalize fw-600 mb-1"
                >
                  <sup><span class="nav-icon uil uil-pricetag-alt"></span></sup
                  >375
                  <small class="pricing_user">koin</small>
                </p>
              </div>
              <div class="pricing__features">
                <ul>
                  <li><span class="fa fa-check"></span>Harga Rp15.000</li>
                  <li><span class="fa fa-check"></span>Diskon 20%</li>
                  <li><span class="fa fa-check"></span>Mendapat 375 koin</li>
                </ul>
              </div>
            </div>
            <div class="price_action d-flex pb-30 ps-30">
              <button
                class="btn btn-secondary btn-default btn-squared text-capitalize px-30"
              >
                Pilih
              </button>
            </div>
          </div>
          <!-- End: .card -->
        </div>
        <!-- End: .col -->
        <div class="col-lg-4 col-sm-6 mb-30">
          <div class="card h-100">
            <div class="card-body p-30">
              <div class="pricing d-flex align-items-center">
                <span
                  class="pricing__tag color-success order-bg-opacity-success rounded-pill"
                  >Enterprise</span
                >
              </div>
              <div class="pricing__price rounded">
                <p
                  class="pricing_value display-3 color-dark d-flex align-items-center text-capitalize fw-600 mb-1"
                >
                  <sup><span class="nav-icon uil uil-pricetag-alt"></span></sup
                  >600
                  <small class="pricing_user">koin</small>
                </p>
              </div>
              <div class="pricing__features">
                <ul>
                  <li><span class="fa fa-check"></span>Harga Rp21.000</li>
                  <li><span class="fa fa-check"></span>Diskon 30%</li>
                  <li><span class="fa fa-check"></span>Mendapat 600 koin</li>
                </ul>
              </div>
            </div>
            <div class="price_action d-flex pb-30 ps-30">
              <button
                class="btn btn-success btn-default btn-squared text-capitalize px-30"
              >
                Pilih
              </button>
            </div>
          </div>
          <!-- End: .card -->
        </div>
        <!-- End: .col -->
      </div>
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
