<template>
  <div class="container-fluid mt-50">
    <div class="row">
      <div class="col-lg-12">
        <div class="breadcrumb-main">
          <h4 class="text-capitalize breadcrumb-title">
            Pengerjaan Try Out SKD CPNS
          </h4>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="card card-default card-md mb-4">
        <div class="card-header">
          <h6>Block</h6>
        </div> 
        <div class="card-body">
          <div class="dm-button-list">
            <button class="btn btn-primary btn-lg btn-squared btn-block">
              Large Button
            </button>

            <button class="btn btn-secondary btn-default btn-squared btn-block">
              Default
            </button>

            <button class="btn btn-success btn-sm btn-squared btn-block">
              Samll
            </button>

            <button class="btn btn-info btn-xs btn-squared btn-block">
              Extra Small
            </button>
          </div>
          <!-- ends: .dm-button-list" -->
        </div>
      </div>
      <!-- ends: .card -->

      <div class="col-12 mb-30">
        <div class="support-ticket-system support-ticket-system--search">
          <div
            class="userDatatable userDatatable--ticket userDatatable--ticket--2 mt-1"
          >
            <div class="table-responsive">
              <table class="table mb-0 table-borderless">
                <thead>
                  <tr class="userDatatable-header">
                    <th>
                      <span class="userDatatable-title">Nomor</span>
                    </th>
                    <th>
                      <span class="userDatatable-title">Nama</span>
                    </th>
                    <th>
                      <span class="userDatatable-title">Waktu</span>
                    </th>
                    <th>
                      <span class="userDatatable-title">Harga</span>
                    </th>
                    <th>
                      <span class="userDatatable-title">Status</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(tskd, index) in tryoutskd" :key="tskd.eid">
                    <td>{{ index + 1 }}</td>
                    <td>
                      <div class="d-flex">
                        <div class="userDatatable-inline-title">
                          <router-link
                            :to="'/tryoutskd/detail/' + tskd.eid"
                            class="text-dark fw-500"
                          >
                            <h6>{{ tskd.title }}</h6>
                          </router-link>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="userDatatable-content--subject">
                        {{ tskd.time }} menit
                      </div>
                    </td>
                    <td>
                      <div class="userDatatable-content--priority">
                        {{ tskd.harga }}
                      </div>
                    </td>
                    <td>
                      <router-link
                        v-if="tskd.status == 'ongoing'"
                        :to="'/pengerjaan/tryoutskd/' + tskd.eid"
                        class="userDatatable-content d-inline-block"
                      >
                        <span
                          class="userDatatable-content-status bg-opacity-warning color-warning"
                          >Lanjutkan</span
                        >
                      </router-link>
                      <router-link
                        v-if="tskd.status == 'finished'"
                        :to="'/tryoutskd/detail/' + tskd.eid"
                        class="userDatatable-content d-inline-block"
                      >
                        <span
                          class="userDatatable-content-status bg-opacity-success color-success"
                          >Kerjakan</span
                        >
                      </router-link>
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
                </ul>
              </nav>
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
  props: {
    user: Object,
    expanded: Boolean,
  },
  data() {
    return {
      tryoutskd: [],
    };
  },
  mounted() {
    console.log(this.user);
    axios
      .get(this.http + "/api/tryoutskd/pengerjaan/" + this.user.email)
      .then((response) => {
        this.tryoutskd = response.data;
        console.log(response.data);
      });
  },
};
</script>

<style></style>
