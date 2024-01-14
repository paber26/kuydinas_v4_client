<template>
  <div class="contents" :class="expanded ? 'expanded' : ''">
    <div class="container-fluid">
      <div class="row">
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

      <div class="products mb-30">
        <div class="container-fluid">
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

                  <div class="dm-notice__action d-flex justify-content-center">
                    <router-link to="/dompet" class="btn btn-sm btn-primary"
                      >Top up koin</router-link
                    >
                  </div>
                </div>
              </div>
              <!-- ends: .card -->
            </div>
          </div>

          <!-- Start: Card -->
          <div
            class="card product-details h-100 border-0"
            v-if="!kointidakcukup"
          >
            <div class="product-item d-flex p-sm-50 p-20">
              <div class="row">
                <div class="col-lg-5">
                  <!-- Start: Product Slider -->
                  <div class="product-item__image">
                    <div
                      class="wrap-gallery-article carousel slide carousel-fade"
                      id="carouselExampleCaptions"
                      data-bs-ride="carousel"
                    >
                      <div>
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img
                              class="img-fluid d-flex bg-opacity-primary"
                              src="https://edukompas.com/assets/uploads/product/_large/book_20230324072410-ee44694252c4d974f514d16c24e5ef47-641d501a4edf3.png"
                              alt="Card image cap"
                              title=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End: Product Slider -->
                </div>
                <div class="col-lg-7">
                  <!-- Start: Product Details -->
                  <div class="b-normal-b mt-lg-0 mt-15">
                    <div class="product-item__body">
                      <!-- Start: Product Title -->
                      <div class="product-item__title">
                        <a href="#">
                          <h1 class="card-title">
                            {{ tryoutskd.title }}
                          </h1>
                        </a>
                      </div>
                      <!-- End: Product Title -->
                      <div class="product-item__content text-capitalize">
                        <!-- Start: Product Brand -->
                        <span class="product-details-brandName"
                          >Sudah diikuti:<span>100 peserta</span></span
                        >
                        <span class="product-desc-price">
                          <span class="uil uil-pricetag-alt"></span
                          >{{ tryoutskd.harga }} koin</span
                        >
                        <!-- End: Product Brand -->
                        <!-- Start: Product Description -->
                        <p class="product-deatils-pera">
                          Keyakinanmu pada dirimu sendiri adalah bahan bakar
                          yang tak tergantikan. Dengan latihan yang gigih, tidak
                          ada yang tak mungkin. Teruslah maju, karena
                          keyakinanmu adalah kunci menuju keberhasilan yang
                          gemilang.
                        </p>
                        <!-- End: Product Description -->

                        <!-- Start: Product Stock -->
                        <div class="product-details__availability">
                          <div class="title">
                            <p>Jumlah</p>
                            <span class="stock"
                              >: {{ tryoutskd.total }} soal</span
                            >
                          </div>
                          <div class="title">
                            <p>TWK</p>
                            <span class="free">: {{ tryoutskd.twk }} soal</span>
                          </div>
                          <div class="title">
                            <p>TIU</p>
                            <span class="free">: {{ tryoutskd.tiu }} soal</span>
                          </div>
                          <div class="title">
                            <p>TKP</p>
                            <span class="free">: {{ tryoutskd.tkp }} soal</span>
                          </div>
                        </div>
                        <!-- End: Product Stock -->

                        <!-- Start: Product Selections -->
                        <div
                          class="product-item__button mt-lg-30 mt-sm-25 mt-20 d-flex flex-wrap"
                        >
                          <div
                            class="d-flex flex-wrap product-item__action align-items-center"
                          >
                            <div class="action-btn">
                              <a
                                href="#"
                                class="btn px-15 btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#ikuti"
                              >
                                <i class="las la-hand-point-right fs-20"></i
                                >Ikuti</a
                              >

                              <!-- Modal -->
                              <div
                                class="modal fade ikuti"
                                id="ikuti"
                                role="dialog"
                                tabindex="-1"
                                aria-labelledby="staticBackdropLabel"
                                aria-hidden="true"
                              >
                                <div class="modal-dialog modal-dialog-centered">
                                  <div class="modal-content radius-xl">
                                    <div class="modal-header">
                                      <h6
                                        class="modal-title fw-500"
                                        id="staticBackdropLabel"
                                      >
                                        {{ tryoutskd.title }}
                                      </h6>
                                      <button
                                        ref="Close"
                                        type="button"
                                        class="close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        <img
                                          src="/img/svg/x.svg"
                                          alt="x"
                                          class="svg"
                                        />
                                      </button>
                                    </div>
                                    <div class="modal-body">
                                      <span>
                                        Gunakan {{ tryoutskd.harga }} koin untuk
                                        mengikuti try out ini
                                      </span>
                                      <div class="ikuti-modal">
                                        <div
                                          class="button-group d-flex justify-content-end pt-25"
                                        >
                                          <button
                                            @click.prevent="konfirmasi()"
                                            class="btn btn-primary btn-default btn-squared"
                                          >
                                            Konfirmasi
                                          </button>

                                          <button
                                            type="button"
                                            class="btn btn-danger btn-default btn-squared"
                                            data-bs-dismiss="modal"
                                          >
                                            Batal
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!-- Modal -->
                            </div>
                          </div>
                        </div>
                        <!-- End: Product Selections -->
                      </div>
                    </div>
                  </div>
                  <!-- End: Product Details -->
                </div>
              </div>
            </div>
          </div>
          <!-- End: Card -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["user", "eid", "expanded"],
  data() {
    return {
      tryoutskd: [],
      kointidakcukup: false,
    };
  },
  mounted() {
    axios
      .get(this.http + "/api/tryoutskd/getdetail/" + this.eid)
      .then((response) => {
        this.tryoutskd = response.data;
      });
  },
  methods: {
    konfirmasi() {
      // let data = [
      //   {
      //     email: this.user.email,
      //   },
      // ];
      // return;
      // document.getElementById('')
      console.log("coba konfirm");
      this.$refs.Close.click();
      axios
        .post(this.http + "/api/tryoutskd/ikuti/konfirmasi", {
          email: this.user.email,
          eid: this.eid,
          title: this.tryoutskd.title,
          harga: this.tryoutskd.harga,
        })
        .then((response) => {
          console.log(response.data);
          // this.tryoutskd = response.data;
          if (response.data == "koin tidak cukup") {
            // this.$router.push("/tryoutskd/lihat/" + this.eid);
            this.$router.push("#/dompet/true");
            this.kointidakcukup = true;
          }
          if (response.data == "berhasil") {
            window.location.href = "#/tryoutskd";
            // this.$router.push("/tryoutskd");
          }
        });
    },
  },
};
</script>
