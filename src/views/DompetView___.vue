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

      <div class="card product-details h-100 border-0">
        <div class="product-item p-sm-30 p-20">
          <div class="row">
            <!-- Start: Product Details -->
            <div class="col-lg-12">
              <div class="b-normal-b mb-25 pb-sm-35 pb-15 mt-lg-0 mt-15">
                <div class="product-item__body">
                  <!-- Start: Product Title -->
                  <div class="product-item__title">
                    <a href="#">
                      <h2 class="card-title">Paket Try Out SKD 1</h2>
                    </a>
                  </div>
                  <!-- End: Product Title -->
                  <div class="product-item__content text-capitalize">
                    <!-- Start: Product Brand -->
                    <span class="product-desc-price"> <sub>$</sub>200.00</span>
                    <div class="d-flex align-items-center mb-2">
                      <span class="product-price">$100.00</span>
                      <span class="product-discount">50% Off</span>
                    </div>
                    <!-- End: Product Brand -->
                    <!-- Start: Product Description -->
                    <p class="product-deatils-pera">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna
                    </p>
                    <!-- End: Product Description -->

                    <!-- Start: Product Selections -->
                    <div
                      class="product-item__button mt-lg-30 mt-sm-25 mt-20 d-flex flex-wrap"
                    >
                      <div
                        class="d-flex flex-wrap product-item__action align-items-center"
                      >
                        <button
                          class="btn btn-primary btn-default btn-squared border-0 me-10 my-sm-0 my-2"
                        >
                          buy now
                        </button>
                        <button
                          class="btn btn-secondary btn-default btn-squared border-0 px-25 my-sm-0 my-2 me-10"
                        >
                          <img
                            src="img/svg/shopping-bag.svg"
                            alt="shopping-bag"
                            class="svg"
                          />
                          Add To Cart
                        </button>
                      </div>
                    </div>
                    <!-- End: Product Selections -->
                  </div>
                </div>
              </div>
            </div>
            <!-- End: Product Details -->
          </div>
        </div>
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
    axios
      .get(this.http + "/api/tryoutskd/getdetail/" + this.eid)
      .then((response) => {
        this.tryoutskd = response.data;
      });
  },
};
</script>
