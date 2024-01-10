<template>
  <div class="contents" :class="expanded ? 'expanded' : ''">
    <div class="profile-setting">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-main">
              <h4 class="text-capitalize breadcrumb-title">My profile</h4>
              <div class="breadcrumb-action justify-content-center flex-wrap">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="#"><i class="uil uil-estate"></i>Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      My profile
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div class="col-xxl-3 col-lg-4 col-sm-5">
            <!-- Profile Acoount -->
            <div class="card mb-25">
              <div class="card-body text-center p-0">
                <div
                  class="account-profile border-bottom pt-25 px-25 pb-0 flex-column d-flex align-items-center"
                >
                  <div class="ap-img mb-20 pro_img_wrapper">
                    <input
                      id="file-upload"
                      type="file"
                      name="fileUpload"
                      class="d-none"
                    />
                    <label for="file-upload">
                      <!-- Profile picture image-->
                      <img
                        class="ap-img__main rounded-circle wh-120"
                        src="img/author/profile.png"
                        alt="profile"
                      />
                      <span class="cross" id="remove_pro_pic">
                        <img
                          src="img/svg/camera.svg"
                          alt="camera"
                          class="svg"
                        />
                      </span>
                    </label>
                  </div>
                  <div class="ap-nameAddress pb-3">
                    <h5 class="ap-nameAddress__title">Duran Clayton</h5>
                    <p class="ap-nameAddress__subTitle fs-14 m-0">
                      UI/UX Designer
                    </p>
                  </div>
                </div>
                <div class="ps-tab p-20 pb-25">
                  <div
                    class="nav flex-column text-start"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      class="nav-link active"
                      id="v-pills-home-tab"
                      data-bs-toggle="pill"
                      href="#v-pills-home"
                      role="tab"
                      aria-selected="true"
                    >
                      <img src="img/svg/user.svg" alt="user" class="svg" />Edit
                      profile</a
                    >
                  </div>
                </div>
              </div>
              <!-- Edit Profile -->
              <div class="edit-profile mt-25">
                <div class="card">
                  <div class="card-header px-sm-25 px-3">
                    <div class="edit-profile__title">
                      <h6>Edit Profile</h6>
                      <span class="fs-13 color-light fw-400"
                        >Set up your personal information</span
                      >
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="row justify-content-center">
                      <div class="col-xxl-6">
                        <div class="edit-profile__body mx-xl-20">
                          <form>
                            <div class="form-group mb-20">
                              <label for="names">name</label>
                              <input
                                type="text"
                                class="form-control"
                                id="names"
                                placeholder="Duran Clayton"
                              />
                            </div>
                            <div class="form-group mb-20">
                              <label for="phoneNumber1">phone number</label>
                              <input
                                type="tel"
                                class="form-control"
                                id="phoneNumber1"
                                placeholder="+440 2546 5236"
                              />
                            </div>
                            <div class="form-group mb-20">
                              <div class="countryOption">
                                <label for="countryOption"> country </label>
                                <select
                                  class="js-example-basic-single js-states form-control"
                                  id="countryOption"
                                >
                                  <option value="JAN">event</option>
                                  <option value="FBR">Venues</option>
                                </select>
                              </div>
                            </div>
                            <div class="form-group mb-20">
                              <div class="cityOption">
                                <label for="cityOption"> city </label>
                                <select
                                  class="js-example-basic-single js-states form-control"
                                  id="cityOption"
                                >
                                  <option value="JAN">event</option>
                                  <option value="FBR">Venues</option>
                                </select>
                              </div>
                            </div>
                            <div class="form-group mb-20">
                              <label for="company1">company name</label>
                              <input
                                type="text"
                                class="form-control"
                                id="company1"
                                placeholder="Example"
                              />
                            </div>
                            <div class="form-group mb-20">
                              <label for="website">website</label>
                              <input
                                type="email"
                                class="form-control"
                                id="website"
                                placeholder="www.example.com"
                              />
                            </div>
                            <div class="form-group mb-20">
                              <label for="userBio">user bio</label>
                              <textarea
                                class="form-control"
                                id="userBio"
                                rows="5"
                              ></textarea>
                            </div>
                            <div class="form-group mb-20">
                              <div class="skillsOption">
                                <label for="skillsOption"> skils </label>
                                <select
                                  class="js-example-basic-single js-states form-control"
                                  id="skillsOption"
                                  multiple="multiple"
                                >
                                  <option value="JAN">event</option>
                                  <option value="FBR">Venues</option>
                                </select>
                              </div>
                            </div>
                            <div
                              class="button-group d-flex flex-wrap pt-30 mb-15"
                            >
                              <button
                                class="btn btn-primary btn-default btn-squared me-15 text-capitalize btn-sm"
                              >
                                update profile
                              </button>

                              <button
                                class="btn btn-light btn-default btn-squared fw-400 text-capitalize btn-sm"
                              >
                                cancel
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Edit Profile End -->
            </div>
            <!-- Profile Acoount End -->
          </div>
          <!-- <div class="col-xxl-9 col-lg-8 col-sm-7">
            <div class="mb-50">
              <div class="tab-content" id="v-pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <!-- Edit Profile -->
                  <div class="edit-profile mt-25">
                    <div class="card">
                      <div class="card-header px-sm-25 px-3">
                        <div class="edit-profile__title">
                          <h6>Edit Profile</h6>
                          <span class="fs-13 color-light fw-400"
                            >Set up your personal information</span
                          >
                        </div>
                      </div>
                      <div class="card-body">
                        <div class="row justify-content-center">
                          <div class="col-xxl-6">
                            <div class="edit-profile__body mx-xl-20">
                              <form>
                                <div class="form-group mb-20">
                                  <label for="names">name</label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="names"
                                    placeholder="Duran Clayton"
                                  />
                                </div>
                                <div class="form-group mb-20">
                                  <label for="phoneNumber1">phone number</label>
                                  <input
                                    type="tel"
                                    class="form-control"
                                    id="phoneNumber1"
                                    placeholder="+440 2546 5236"
                                  />
                                </div>
                                <div class="form-group mb-20">
                                  <div class="countryOption">
                                    <label for="countryOption"> country </label>
                                    <select
                                      class="js-example-basic-single js-states form-control"
                                      id="countryOption"
                                    >
                                      <option value="JAN">event</option>
                                      <option value="FBR">Venues</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="form-group mb-20">
                                  <div class="cityOption">
                                    <label for="cityOption"> city </label>
                                    <select
                                      class="js-example-basic-single js-states form-control"
                                      id="cityOption"
                                    >
                                      <option value="JAN">event</option>
                                      <option value="FBR">Venues</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="form-group mb-20">
                                  <label for="company1">company name</label>
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="company1"
                                    placeholder="Example"
                                  />
                                </div>
                                <div class="form-group mb-20">
                                  <label for="website">website</label>
                                  <input
                                    type="email"
                                    class="form-control"
                                    id="website"
                                    placeholder="www.example.com"
                                  />
                                </div>
                                <div class="form-group mb-20">
                                  <label for="userBio">user bio</label>
                                  <textarea
                                    class="form-control"
                                    id="userBio"
                                    rows="5"
                                  ></textarea>
                                </div>
                                <div class="form-group mb-20">
                                  <div class="skillsOption">
                                    <label for="skillsOption"> skils </label>
                                    <select
                                      class="js-example-basic-single js-states form-control"
                                      id="skillsOption"
                                      multiple="multiple"
                                    >
                                      <option value="JAN">event</option>
                                      <option value="FBR">Venues</option>
                                    </select>
                                  </div>
                                </div>
                                <div
                                  class="button-group d-flex flex-wrap pt-30 mb-15"
                                >
                                  <button
                                    class="btn btn-primary btn-default btn-squared me-15 text-capitalize btn-sm"
                                  >
                                    update profile
                                  </button>

                                  <button
                                    class="btn btn-light btn-default btn-squared fw-400 text-capitalize btn-sm"
                                  >
                                    cancel
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Edit Profile End -->
                </div>
              </div>
            </div>
          </div> -->
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
    console.log(this.user);
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
      this.$refs.Close.click();
      axios
        .post(this.http + "/api/tryoutskd/ikuti/konfirmasi", {
          email: this.user.email,
          eid: this.eid,
          title: this.tryoutskd.title,
          harga: this.tryoutskd.harga,
        })
        .then((response) => {
          // this.tryoutskd = response.data;
          if (response.data == "koin tidak cukup") {
            // this.$router.push("/tryoutskd/lihat/" + this.eid);
            this.$router.push("/dompet/true");
            this.kointidakcukup = true;
          }
          if (response.data == "berhasil") {
            window.location.href = "/tryoutskd";
            // this.$router.push("/tryoutskd");
          }
        });
    },
  },
};
</script>
