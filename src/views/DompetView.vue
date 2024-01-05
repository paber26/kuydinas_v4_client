<template>
  <div class="contents" :class="expanded ? 'expanded' : ''">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-main">
            <h4 class="text-capitalize breadcrumb-title">Dompet</h4>
            <div class="breadcrumb-action justify-content-center flex-wrap">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/"
                      ><i class="uil uil-estate"></i>Home</router-link
                    >
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Dompet
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="dm-notice" v-if="kointidakcukup">
          <div class="card card-default card-md mb-4">
            <div class="card-header">
              <h6>Koin belum mencukupi</h6>
            </div>
            <div class="card-body">
              <div class="dm-notice__content">
                <div class="dm-notice__top text-center">
                  <div class="dm-notice__icon bg-info">
                    <i class="fas fa-exclamation-triangle color-white"></i>
                  </div>
                  <div class="dm-notice__text">
                    <h4>
                      Untuk mengikuti try out, lakukan top up koin terlebih
                      dahulu
                    </h4>
                  </div>
                </div>

                <!-- <div class="dm-notice__action d-flex justify-content-center">
                  <router-link to="/dompet" class="btn btn-sm btn-primary"
                    >Top up koin</router-link
                  >
                </div> -->
              </div>
            </div>
            <!-- ends: .card -->
          </div>
        </div>

        <div class="mb-30">
          <!-- Card 2 -->
          <div
            class="ap-po-details ap-po-details--ticket radius-xl d-flex justify-content-between"
          >
            <div class="overview-content w-100">
              <div
                class="ap-po-details-content d-flex flex-wrap justify-content-between"
              >
                <div class="ap-po-details__titlebar">
                  <h1>{{ koin }}</h1>
                  <p>Total Koin</p>
                </div>
                <div class="ap-po-details__icon-area">
                  <div class="svg-icon order-bg-opacity-warning">
                    <i class="las la-coins fs-20"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Card 2 End  -->
        </div>
      </div>

      <div class="row" v-if="promokoin">
        <div class="col-lg-4 col-sm-6 mb-30">
          <div class="card h-100">
            <div class="card-body p-30">
              <div class="pricing d-flex align-items-center">
                <span
                  class="pricing__tag color-primary order-bg-opacity-primary rounded-pill"
                  >{{ promokoin[0].title }}</span
                >
              </div>
              <div class="pricing__price rounded">
                <p
                  class="pricing_value display-3 color-dark d-flex align-items-center text-capitalize fw-600 mb-1"
                >
                  <sup><span class="nav-icon uil uil-pricetag-alt"></span></sup
                  >{{ promokoin[0].koin }}
                  <small class="pricing_user">koin</small>
                </p>
              </div>
              <div class="pricing__features">
                <ul class="text-start">
                  <li>
                    <span class="fa fa-check"></span>Harga Rp{{
                      promokoin[0].harga
                    }}
                  </li>

                  <li>
                    <span class="fa fa-check"></span>Mendapat
                    {{ promokoin[0].koin }} koin
                  </li>
                </ul>
              </div>
            </div>
            <div class="price_action d-flex pb-30 ps-30">
              <button
                @click="
                  pilihpaket(
                    promokoin[0].title,
                    promokoin[0].harga,
                    promokoin[0].koin
                  )
                "
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
                  >{{ promokoin[1].title }}</span
                >
              </div>
              <div class="pricing__price rounded">
                <p
                  class="pricing_value display-3 color-dark d-flex align-items-center text-capitalize fw-600 mb-1"
                >
                  <sup><span class="nav-icon uil uil-pricetag-alt"></span></sup
                  >{{ promokoin[1].koin }}
                  <small class="pricing_user">koin</small>
                </p>
              </div>
              <div class="pricing__features">
                <ul class="text-start">
                  <li>
                    <span class="fa fa-check"></span>Harga Rp{{
                      promokoin[1].harga
                    }}
                  </li>
                  <li>
                    <span class="fa fa-check"></span>Diskon
                    {{ promokoin[1].diskon }}%
                  </li>
                  <li>
                    <span class="fa fa-check"></span>Mendapat
                    {{ promokoin[1].koin }} koin
                  </li>
                </ul>
              </div>
            </div>
            <div class="price_action d-flex pb-30 ps-30">
              <button
                @click="
                  pilihpaket(
                    promokoin[1].title,
                    promokoin[1].harga,
                    promokoin[1].koin
                  )
                "
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
                  >{{ promokoin[2].title }}</span
                >
              </div>
              <div class="pricing__price rounded">
                <p
                  class="pricing_value display-3 color-dark d-flex align-items-center text-capitalize fw-600 mb-1"
                >
                  <sup><span class="nav-icon uil uil-pricetag-alt"></span></sup
                  >{{ promokoin[2].koin }}
                  <small class="pricing_user">koin</small>
                </p>
              </div>
              <div class="pricing__features">
                <ul class="text-start">
                  <li>
                    <span class="fa fa-check"></span>Harga Rp{{
                      promokoin[2].harga
                    }}
                  </li>
                  <li>
                    <span class="fa fa-check"></span>Diskon
                    {{ promokoin[2].diskon }}%
                  </li>
                  <li>
                    <span class="fa fa-check"></span>Mendapat
                    {{ promokoin[2].koin }} koin
                  </li>
                </ul>
              </div>
            </div>
            <div class="price_action d-flex pb-30 ps-30">
              <button
                @click="
                  pilihpaket(
                    promokoin[2].title,
                    promokoin[2].harga,
                    promokoin[2].koin
                  )
                "
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

      <div class="row">
        <div class="col-12">
          <div class="support-ticket-system">
            <div
              class="breadcrumb-main breadcrumb-main--ticket justify-content-sm-between"
            >
              <div
                class="d-flex flex-wrap justify-content-center breadcrumb-main__wrapper"
              >
                <div
                  class="d-flex align-items-center ticket__title justify-content-center me-md-25 mb-md-0 mb-20"
                >
                  <h4 class="text-capitalize fw-500 breadcrumb-title">
                    Riwayat Transaksi
                  </h4>
                </div>
              </div>
              <div class="action-btn">
                <!-- Modal -->
                <div
                  class="modal fade ticket_modal"
                  id="ticket_modal"
                  role="dialog"
                  tabindex="-1"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                  >
                    <div class="modal-content radius-xl">
                      <div class="modal-body pb-sm-50 pb-30">
                        <div class="modal-header">
                          <h1>Submit your Ticket</h1>
                          <button
                            type="button"
                            class="close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            <img src="img/svg/x.svg" alt="x" class="svg" />
                          </button>
                        </div>
                        <div class="ticket_modal-modal">
                          <form>
                            <div class="form-group">
                              <label>Email</label>
                              <input type="text" class="form-control" />
                            </div>
                            <div class="form-group">
                              <label>Subject</label>
                              <input type="text" class="form-control" />
                            </div>
                            <div class="form-group">
                              <label>Priority</label>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="High"
                              />
                            </div>
                            <div class="form-group">
                              <label>Status</label>
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Open"
                              />
                            </div>
                            <div class="form-group">
                              <label>Description</label>
                              <textarea
                                class="form-control"
                                rows="3"
                              ></textarea>
                            </div>
                            <div class="button-group d-flex pt-15">
                              <button
                                class="btn btn-primary btn-default btn-squared"
                              >
                                Submit ticket
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Modal -->
              </div>
            </div>

            <!-- riwayat transaksi -->
            <div
              class="support-form d-flex justify-content-between align-items-center flex-wrap"
            >
              <div class="support-form__input">
                <div class="d-flex flex-wrap">
                  <div class="support-form__input-status">
                    <label>status:</label>

                    <div class="dm-select">
                      <select
                        name="select-search"
                        class="select-search form-control"
                      >
                        <option value="01">All</option>
                        <option value="02">Option 2</option>
                        <option value="03">Option 3</option>
                        <option value="04">Option 4</option>
                        <option value="05">Option 5</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="userDatatable userDatatable--ticket mt-1">
              <div class="table-responsive">
                <table class="table mb-0 table-borderless">
                  <thead>
                    <tr class="userDatatable-header">
                      <th>
                        <span class="userDatatable-title">ID Transaksi</span>
                      </th>
                      <th>
                        <span class="userDatatable-title">Waktu</span>
                      </th>
                      <th>
                        <span class="userDatatable-title">Keterangan</span>
                      </th>
                      <th>
                        <span class="userDatatable-title">Status</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(hd, index) in historydompet" :key="hd.tsc">
                      <td>{{ index }}</td>
                      <td>
                        <div class="userDatatable-content--date">
                          {{ hd.date }}
                        </div>
                      </td>
                      <td>
                        <div class="d-flex">
                          <div class="userDatatable-inline-title">
                            <a href="#" class="text-dark fw-500">
                              <h6>{{ hd.title }}</h6>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="userDatatable-content d-inline-block">
                          <span
                            v-if="hd.koin < 0"
                            class="bg-opacity-danger color-danger userDatatable-content-status active"
                            >{{ hd.koin }} koin</span
                          >
                          <span
                            v-else-if="hd.koin > 0"
                            class="bg-opacity-success color-success userDatatable-content-status active"
                            >+ 100 koin</span
                          >
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>#12</td>
                      <td>
                        <div class="userDatatable-content--date">
                          January 20, 2020
                        </div>
                      </td>
                      <td>
                        <div class="d-flex">
                          <div class="userDatatable-inline-title">
                            <a href="#" class="text-dark fw-500">
                              <h6>
                                Melakukan pembelian paket Try Out Basic Plan
                              </h6>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="userDatatable-content d-inline-block">
                          <span
                            class="bg-opacity-success color-success userDatatable-content-status active"
                            >+ 100 koin</span
                          >
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="d-flex justify-content-end pt-30">
                <nav class="dm-page">
                  <ul class="dm-pagination d-flex">
                    <li class="dm-pagination__item">
                      <a href="#" class="dm-pagination__link pagination-control"
                        ><span class="la la-angle-left"></span
                      ></a>
                      <a href="#" class="dm-pagination__link"
                        ><span class="page-number">1</span></a
                      >
                      <a href="#" class="dm-pagination__link active"
                        ><span class="page-number">2</span></a
                      >
                      <a href="#" class="dm-pagination__link"
                        ><span class="page-number">3</span></a
                      >
                      <a href="#" class="dm-pagination__link pagination-control"
                        ><span class="page-number">...</span></a
                      >
                      <a href="#" class="dm-pagination__link"
                        ><span class="page-number">12</span></a
                      >
                      <a href="#" class="dm-pagination__link pagination-control"
                        ><span class="la la-angle-right"></span
                      ></a>
                      <a href="#" class="dm-pagination__option"> </a>
                    </li>
                    <li class="dm-pagination__item">
                      <div class="paging-option">
                        <select name="page-number" class="page-selection">
                          <option value="20">20/page</option>
                          <option value="40">40/page</option>
                          <option value="60">60/page</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["user", "eid", "expanded", "kointidakcukup"],
  data() {
    return {
      tryoutskd: [],
      historydompet: [],
      promokoin: false,
      koin: "",
    };
  },
  mounted() {
    console.log(this.promokoin == null);
    axios
      .get(this.http + "/api/tryoutskd/getdetail/" + this.eid)
      .then((response) => {
        this.tryoutskd = response.data;
      });

    axios
      .get(this.http + "/api/gethistorydompet/" + this.user.email)
      .then((response) => {
        this.historydompet = response.data;
      });

    axios
      .get(this.http + "/api/getinfoakun/" + this.user.email)
      .then((response) => {
        this.koin = response.data["koin"];
      });

    axios.get(this.http + "/api/dompet/getpromo").then((response) => {
      this.promokoin = response.data;
    });
  },
  methods: {
    pilihpaket(paket, harga, koin) {
      axios
        .post(this.http + "/api/dompet/pilihpaket", {
          email: this.user.email,
          paket: paket,
          harga: harga,
          koin: koin,
        })
        .then((response) => {
          if (response.data[0] == "berhasil") {
            let snapToken = response.data[1];
            window.location.href = "/dompet/pembayaran/" + snapToken;

            // this.$router.push("/dompet/pembayaran/" + snapToken);
          }
        });
    },
  },
};
</script>
