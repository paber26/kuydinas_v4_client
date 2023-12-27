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
                <a
                  href="#"
                  class="btn px-15 btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#new-member2"
                >
                  <i class="las la-plus fs-16"></i>create projects</a
                >

                <!-- Modal -->
                <div
                  class="modal fade new-member new-member__2"
                  id="new-member2"
                  role="dialog"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content radius-xl">
                      <div class="modal-header">
                        <h6 class="modal-title fw-500" id="staticBackdropLabel">
                          Create project
                        </h6>
                        <button
                          type="button"
                          class="close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <img src="/img/svg/x.svg" alt="x" class="svg" />
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="new-member-modal">
                          <form>
                            <div class="form-group mb-20">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Duran Clayton"
                              />
                            </div>
                            <div class="form-group mb-20">
                              <div class="category-member">
                                <select
                                  class="js-example-basic-single js-states form-control"
                                  id="category-member"
                                >
                                  <option value="JAN">1</option>
                                  <option value="FBR">2</option>
                                </select>
                              </div>
                            </div>
                            <div class="form-group mb-20">
                              <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Project description"
                              ></textarea>
                            </div>
                            <div class="form-group textarea-group">
                              <label class="mb-15">status</label>
                              <div class="d-flex">
                                <div
                                  class="project-task-list__left d-flex align-items-center"
                                >
                                  <div
                                    class="checkbox-group d-flex me-50 pe-10"
                                  >
                                    <div
                                      class="checkbox-theme-default custom-checkbox checkbox-group__single d-flex"
                                    >
                                      <input
                                        class="checkbox"
                                        type="checkbox"
                                        id="check-grp-1"
                                        checked
                                      />
                                      <label
                                        for="check-grp-1"
                                        class="fs-14 color-light strikethrough"
                                      >
                                        status
                                      </label>
                                    </div>
                                  </div>
                                  <div
                                    class="checkbox-group d-flex me-50 pe-10"
                                  >
                                    <div
                                      class="checkbox-theme-default custom-checkbox checkbox-group__single d-flex"
                                    >
                                      <input
                                        class="checkbox"
                                        type="checkbox"
                                        id="check-grp-2"
                                      />
                                      <label
                                        for="check-grp-2"
                                        class="fs-14 color-light strikethrough"
                                      >
                                        Deactivated
                                      </label>
                                    </div>
                                  </div>
                                  <div class="checkbox-group d-flex">
                                    <div
                                      class="checkbox-theme-default custom-checkbox checkbox-group__single d-flex"
                                    >
                                      <input
                                        class="checkbox"
                                        type="checkbox"
                                        id="check-grp-3"
                                      />
                                      <label
                                        for="check-grp-3"
                                        class="fs-14 color-light strikethrough"
                                      >
                                        bloked
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="mb-25">
                              <div class="form-group mb-10">
                                <label for="name47">project member</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="name47"
                                  placeholder="Search members"
                                />
                              </div>
                              <ul
                                class="d-flex flex-wrap mb-20 user-group-people__parent"
                              >
                                <li>
                                  <a href="#"
                                    ><img
                                      class="rounded-circle wh-34"
                                      src="/img/tm1.png"
                                      alt="author"
                                  /></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      class="rounded-circle wh-34"
                                      src="/img/tm2.png"
                                      alt="author"
                                  /></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      class="rounded-circle wh-34"
                                      src="/img/tm3.png"
                                      alt="author"
                                  /></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      class="rounded-circle wh-34"
                                      src="/img/tm4.png"
                                      alt="author"
                                  /></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      class="rounded-circle wh-34"
                                      src="/img/tm5.png"
                                      alt="author"
                                  /></a>
                                </li>
                              </ul>
                            </div>
                            <div class="d-flex new-member-calendar">
                              <div
                                class="form-group w-100 me-sm-15 form-group-calender"
                              >
                                <label for="datepicker">start Date</label>
                                <div class="position-relative">
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="datepicker"
                                    placeholder="mm/dd/yyyy"
                                  />
                                  <a href="#">
                                    <img
                                      class="svg"
                                      src="/img/svg/chevron-right.svg"
                                      alt="chevron-right.svg"
                                  /></a>
                                </div>
                              </div>
                              <div class="form-group w-100 form-group-calender">
                                <label for="datepicker2">End Date</label>
                                <div class="position-relative">
                                  <input
                                    type="text"
                                    class="form-control"
                                    id="datepicker2"
                                    placeholder="mm/dd/yyyy"
                                  />
                                  <a href="#">
                                    <img
                                      class="svg"
                                      src="/img/svg/chevron-right.svg"
                                      alt="chevron-right.svg"
                                  /></a>
                                </div>
                              </div>
                            </div>
                            <div class="button-group d-flex pt-25">
                              <button
                                class="btn btn-primary btn-default btn-squared text-capitalize"
                              >
                                add new project
                              </button>

                              <button
                                type="button"
                                class="btn btn-light btn-default btn-squared fw-400 text-capitalize b-light color-light"
                                data-bs-dismiss="modal"
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
                <!-- Modal -->
              </div>
            </div>
          </div>
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
                class="project-tap global-shadow order-lg-1 order-2 ms-xl-0 me-xl-20 ms-md-20"
              >
                <ul class="nav px-1" id="ap-tab" role="tablist">
                  <li class="nav-item">
                    <a
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
              <!-- Soal dan Pembahasan -->
              <!-- <div class="mb-25" v-for="sn in range(pembahasans.length)" :key="sn.id"> -->
              <div
                class="mb-25"
                v-for="(pmb, index) in pembahasans"
                :key="pmb.id"
              >
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
                        <a href="application-ui.html">
                          <h6
                            class="mt-0 fw-500 user-group media-ui__title bg-transparent"
                          >
                            Soal nomor {{ index + 1 }}
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
                              {{ opsi[index].option }}
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
      pembahasans: [],
      opsi: [],
    };
  },
  mounted() {
    console.log(this.user);
    axios
      .get(
        this.http +
          "/api/tryoutskd/getsoaldanpembahasan/" +
          this.user.email +
          "/" +
          this.eid
      )
      .then((response) => {
        this.pembahasans = response.data[0];
        this.opsi = response.data[1];

        console.log(response.data);
      });
  },
};
</script>

<style></style>
