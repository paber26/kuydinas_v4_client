<template>
  <div class="contents" :class="expanded ? 'expanded' : ''">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-main">
            <h4 class="text-capitalize breadcrumb-title">
              Pengerjaan Try Out SKD CPNS
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

      <div class="row">
        <div class="col-12 mb-30">
          <div class="support-ticket-system support-ticket-system--search">
            <div
              class="breadcrumb-main m-0 breadcrumb-main--table justify-content-sm-between"
            >
              <div
                class="d-flex flex-wrap justify-content-center breadcrumb-main__wrapper"
              >
                <div
                  class="d-flex align-items-center ticket__title justify-content-center me-md-25 mb-md-0 mb-20"
                >
                  <h4 class="text-capitalize fw-500 breadcrumb-title">
                    Try Out Harian
                  </h4>
                </div>
              </div>
              <div class="action-btn">
                <router-link to="/tryoutskd/tambah" class="btn btn-primary"
                  >Tambah</router-link
                >
              </div>
            </div>

            <div
              class="support-form datatable-support-form d-flex justify-content-xxl-between justify-content-center align-items-center flex-wrap"
            >
              <div class="support-form__input">
                <div class="d-flex flex-wrap">
                  <div class="support-form__input-id">
                    <label>Id:</label>

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
                  <button class="support-form__input-button">search</button>
                </div>
              </div>
              <div class="support-form__search">
                <div class="support-order-search">
                  <form action="/" class="support-order-search__form">
                    <img src="img/svg/search.svg" alt="search" class="svg" />
                    <input
                      class="form-control border-0 box-shadow-none"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                </div>
              </div>
            </div>
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
                        <span class="userDatatable-title"
                          >Jumlah Pendaftar</span
                        >
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
                          United Street
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
                        <a
                          href="#"
                          class="userDatatable-content d-inline-block"
                        >
                          <span
                            class="userDatatable-content-status"
                            :class="
                              tskd.status == 'enabled'
                                ? 'bg-opacity-success color-success'
                                : 'bg-opacity-danger color-danger'
                            "
                            >{{ tskd.status }}</span
                          >
                        </a>
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
