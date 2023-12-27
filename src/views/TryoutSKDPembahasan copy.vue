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
              <div class="mb-25">
                <div
                  class="user-group radius-xl media-ui media-ui--early pt-30 pb-25"
                >
                  <div class="border-bottom px-30">
                    <div
                      class="media user-group-media d-flex justify-content-between"
                    >
                      <div
                        class="media-body d-flex align-items-center flex-wrap text-capitalize my-sm-0 my-n2"
                      >
                        <a href="application-ui.html">
                          <h6
                            class="mt-0 fw-500 user-group media-ui__title bg-transparent"
                          >
                            Soal nomor 1
                          </h6>
                        </a>
                        <span
                          class="my-sm-0 my-2 media-badge text-uppercase color-white bg-primary"
                          >early</span
                        >
                      </div>
                    </div>
                    <div
                      class="user-group-people mt-15 text-capitalize text-start"
                    >
                      <p>
                        Lorem ipsum dolor amet, consetetur sadipscing elitr sed
                        diam nonumy eirmod dolor ame.
                      </p>
                      <div class="user-group-project">
                        <div
                          class="d-flex align-items-center user-group-progress-top"
                        >
                          <div class="media-ui__start">
                            <span class="color-light fs-12">Jawaban kamu</span>
                            <p class="fs-14 fw-500 color-dark mb-0">
                              26 Dec 2019
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 mb-25 col-md-6">
                <div
                  class="user-group radius-xl media-ui media-ui--onHold pt-30 pb-25"
                >
                  <div class="border-bottom px-30">
                    <div
                      class="media user-group-media d-flex justify-content-between"
                    >
                      <div
                        class="media-body d-flex align-items-center flex-wrap text-capitalize my-sm-0 my-n2"
                      >
                        <a href="application-ui.html">
                          <h6
                            class="mt-0 fw-500 user-group media-ui__title bg-transparent"
                          >
                            Application UI Design
                          </h6>
                        </a>
                        <span
                          class="my-sm-0 my-2 media-badge text-uppercase color-white bg-warning"
                          >on hold</span
                        >
                      </div>
                      <div class="mt-n15">
                        <div class="dropdown dropleft">
                          <button
                            class="btn-link border-0 bg-transparent p-0"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <img
                              src="/img/svg/more-horizontal.svg"
                              alt="more-horizontal"
                              class="svg"
                            />
                          </button>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">view</a>
                            <a class="dropdown-item" href="#">edit</a>
                            <a class="dropdown-item" href="#">leave</a>
                            <a class="dropdown-item" href="#">delete</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="user-group-people mt-15 text-capitalize">
                      <p>
                        Lorem ipsum dolor amet, consetetur sadipscing elitr sed
                        diam nonumy eirmod dolor ame.
                      </p>
                      <div class="user-group-project">
                        <div
                          class="d-flex align-items-center user-group-progress-top"
                        >
                          <div class="media-ui__start">
                            <span class="color-light fs-12">Start Date</span>
                            <p class="fs-14 fw-500 color-dark mb-0">
                              26 Dec 2019
                            </p>
                          </div>
                          <div class="media-ui__end">
                            <span class="color-light fs-12">end date</span>
                            <p class="fs-16 fw-500 color-success mb-0">
                              18 Mar 2020
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="user-group-progress-bar">
                      <div class="progress-wrap d-flex align-items-center mb-0">
                        <div class="progress">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 83%"
                            aria-valuenow="83"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>

                        <span class="progress-percentage">83%</span>
                      </div>

                      <p class="color-light fs-12 mb-20">
                        12 / 15 tasks completed
                      </p>
                    </div>
                  </div>
                  <div class="mt-20 px-30">
                    <p class="fs-13 color-light mb-10">Assigned To</p>
                    <ul class="d-flex flex-wrap user-group-people__parent">
                      <li>
                        <a href="#"
                          ><img
                            class="rounded-circle wh-34 bg-opacity-secondary"
                            src="/img/tm1.png"
                            alt="author"
                        /></a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            class="rounded-circle wh-34 bg-opacity-secondary"
                            src="/img/tm2.png"
                            alt="author"
                        /></a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            class="rounded-circle wh-34 bg-opacity-secondary"
                            src="/img/tm3.png"
                            alt="author"
                        /></a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            class="rounded-circle wh-34 bg-opacity-secondary"
                            src="/img/tm4.png"
                            alt="author"
                        /></a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            class="rounded-circle wh-34 bg-opacity-secondary"
                            src="/img/tm5.png"
                            alt="author"
                        /></a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            class="rounded-circle wh-34 bg-opacity-secondary"
                            src="/img/tm6.png"
                            alt="author"
                        /></a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            class="rounded-circle wh-34 bg-opacity-secondary"
                            src="/img/tm1.png"
                            alt="author"
                        /></a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            class="rounded-circle wh-34 bg-opacity-secondary"
                            src="/img/tm2.png"
                            alt="author"
                        /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 mb-25 col-md-6">
                <div
                  class="user-group radius-xl media-ui media-ui--late pt-30 pb-25"
                >
                  <div class="border-bottom px-30">
                    <div
                      class="media user-group-media d-flex justify-content-between"
                    >
                      <div
                        class="media-body d-flex align-items-center flex-wrap text-capitalize my-sm-0 my-n2"
                      >
                        <a href="application-ui.html">
                          <h6
                            class="mt-0 fw-500 user-group media-ui__title bg-transparent"
                          >
                            Custom Software Development
                          </h6>
                        </a>
                        <span
                          class="my-sm-0 my-2 media-badge text-uppercase color-white bg-danger"
                          >late</span
                        >
                      </div>
                      <div class="mt-n15">
                        <div class="dropdown dropleft">
                          <button
                            class="btn-link border-0 bg-transparent p-0"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <img
                              src="/img/svg/more-horizontal.svg"
                              alt="more-horizontal"
                              class="svg"
                            />
                          </button>
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">view</a>
                            <a class="dropdown-item" href="#">edit</a>
                            <a class="dropdown-item" href="#">leave</a>
                            <a class="dropdown-item" href="#">delete</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="user-group-people mt-15 text-capitalize">
                      <p>
                        Lorem ipsum dolor amet, consetetur sadipscing elitr sed
                        diam nonumy eirmod dolor ame.
                      </p>
                      <div class="user-group-project">
                        <div
                          class="d-flex align-items-center user-group-progress-top"
                        >
                          <div class="media-ui__start">
                            <span class="color-light fs-12">Start Date</span>
                            <p class="fs-14 fw-500 color-dark mb-0">
                              26 Dec 2019
                            </p>
                          </div>
                          <div class="media-ui__end">
                            <span class="color-light fs-12">end date</span>
                            <p class="fs-16 fw-500 color-success mb-0">
                              18 Mar 2020
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="user-group-progress-bar">
                      <div class="progress-wrap d-flex align-items-center mb-0">
                        <div class="progress">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style="width: 83%"
                            aria-valuenow="83"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>

                        <span class="progress-percentage">83%</span>
                      </div>

                      <p class="color-light fs-12 mb-20">
                        12 / 15 tasks completed
                      </p>
                    </div>
                  </div>
                  <div class="mt-20 px-30">
                    <p class="fs-13 color-light mb-10">Assigned To</p>
                    <ul class="d-flex flex-wrap user-group-people__parent">
                      <li>
                        <a href="#"
                          ><img
                            class="rounded-circle wh-34 bg-opacity-secondary"
                            src="/img/tm1.png"
                            alt="author"
                        /></a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            class="rounded-circle wh-34 bg-opacity-secondary"
                            src="/img/tm2.png"
                            alt="author"
                        /></a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            class="rounded-circle wh-34 bg-opacity-secondary"
                            src="/img/tm3.png"
                            alt="author"
                        /></a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            class="rounded-circle wh-34 bg-opacity-secondary"
                            src="/img/tm4.png"
                            alt="author"
                        /></a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            class="rounded-circle wh-34 bg-opacity-secondary"
                            src="/img/tm5.png"
                            alt="author"
                        /></a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            class="rounded-circle wh-34 bg-opacity-secondary"
                            src="/img/tm6.png"
                            alt="author"
                        /></a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            class="rounded-circle wh-34 bg-opacity-secondary"
                            src="/img/tm1.png"
                            alt="author"
                        /></a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            class="rounded-circle wh-34 bg-opacity-secondary"
                            src="/img/tm2.png"
                            alt="author"
                        /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 mb-25 col-md-6">
                <div
                  class="user-group radius-xl media-ui media-ui--completed pt-30 pb-25"
                >
                  <div class="border-bottom px-30">
                    <div
                      class="media user-group-media d-flex justify-content-between"
                    >
                      <div
                        class="media-body d-flex align-items-center text-capitalize"
                      >
                        <a href="application-ui.html">
                          <h6 class="mt-0 fw-500 media-ui__title">
                            Dashboard UI Project
                          </h6>
                        </a>
                        <span
                          class="media-badge text-uppercase color-white bg-success"
                          >completed</span
                        >
                      </div>
                      <div class="mt-n15">
                        <div class="dropdown dropleft">
                          <button
                            class="btn-link border-0 bg-transparent p-0"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <img
                              src="/img/svg/more-horizontal.svg"
                              alt="more-horizontal"
                              class="svg"
                            />
                          </button>
                          <div class="dropdown-menu dropdown-t-0">
                            <a class="dropdown-item" href="#">view</a>
                            <a class="dropdown-item" href="#">edit</a>
                            <a class="dropdown-item" href="#">leave</a>
                            <a class="dropdown-item" href="#">delete</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="user-group-people mt-15 text-capitalize">
                      <p>
                        Lorem ipsum dolor amet, consetetur sadipscing elitr sed
                        diam nonumy eirmod dolor ame.
                      </p>
                      <div class="user-group-project">
                        <div
                          class="d-flex align-items-center user-group-progress-top"
                        >
                          <div class="media-ui__start">
                            <span class="color-light fs-12">Start Date</span>
                            <p class="fs-14 fw-500 color-dark mb-0">
                              26 Dec 2019
                            </p>
                          </div>
                          <div class="media-ui__end">
                            <span class="color-light fs-12">end date</span>
                            <p class="fs-16 fw-500 color-success mb-0">
                              18 Mar 2020
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="user-group-progress-bar">
                      <div class="progress-wrap d-flex align-items-center mb-0">
                        <div class="progress">
                          <div
                            class="progress-bar bg-success"
                            role="progressbar"
                            style="width: 100%"
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>

                        <span class="progress-icon"
                          ><img
                            src="/img/svg/check.svg"
                            alt="check"
                            class="svg color-success"
                        /></span>
                      </div>

                      <p class="color-light fs-12 mb-20">
                        12 / 15 tasks completed
                      </p>
                    </div>
                  </div>
                  <div class="mt-20 px-30">
                    <p class="fs-13 color-light mb-10">Assigned To</p>
                    <ul class="d-flex flex-wrap user-group-people__parent">
                      <li>
                        <a href="#"
                          ><img
                            class="rounded-circle wh-34 bg-opacity-secondary"
                            src="/img/tm1.png"
                            alt="author"
                        /></a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            class="rounded-circle wh-34 bg-opacity-secondary"
                            src="/img/tm2.png"
                            alt="author"
                        /></a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            class="rounded-circle wh-34 bg-opacity-secondary"
                            src="/img/tm3.png"
                            alt="author"
                        /></a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            class="rounded-circle wh-34 bg-opacity-secondary"
                            src="/img/tm4.png"
                            alt="author"
                        /></a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            class="rounded-circle wh-34 bg-opacity-secondary"
                            src="/img/tm5.png"
                            alt="author"
                        /></a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            class="rounded-circle wh-34 bg-opacity-secondary"
                            src="/img/tm6.png"
                            alt="author"
                        /></a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            class="rounded-circle wh-34 bg-opacity-secondary"
                            src="/img/tm1.png"
                            alt="author"
                        /></a>
                      </li>
                      <li>
                        <a href="#"
                          ><img
                            class="rounded-circle wh-34 bg-opacity-secondary"
                            src="/img/tm2.png"
                            alt="author"
                        /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End: .projects-tab-content -->

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
        <div class="col-12">
          <div class="card card-default card-md mb-4">
            <div class="card-header py-20">
              <h6>Description</h6>
            </div>
            <div class="card-body">
              <div
                class="alert-big alert alert-success justify-content-center"
                role="alert"
              >
                <div class="alert-content">
                  <h6 class="alert-heading">Success Text</h6>

                  <p>
                    Detailed description and advice about successful
                    copywriting.
                  </p>
                </div>
              </div>

              <div class="alert-big alert alert-info" role="alert">
                <div class="alert-content">
                  <h6 class="alert-heading">Info Text</h6>

                  <p>
                    Additional description and information about copywriting.
                  </p>
                </div>
              </div>

              <div class="alert-big alert alert-warning" role="alert">
                <div class="alert-content">
                  <h6 class="alert-heading">Warning Text</h6>

                  <p>This is a warning notice about copywriting.</p>
                </div>
              </div>

              <div class="alert-big alert alert-danger" role="alert">
                <div class="alert-content">
                  <h6 class="alert-heading">Error Text</h6>

                  <p>This is an error message about copywriting.</p>
                </div>
              </div>
            </div>
          </div>
          <!-- ends: .card -->
        </div>

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
                    <img src="/img/svg/search.svg" alt="search" class="svg" />
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
                        <span class="userDatatable-title">Waktu</span>
                      </th>
                      <th>
                        <span class="userDatatable-title">Harga</span>
                      </th>
                      <th>
                        <span class="userDatatable-title"></span>
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
                          :to="'/tryoutskd/pembahasan/' + tskd.eid"
                          class="userDatatable-content d-inline-block"
                        >
                          <span
                            class="userDatatable-content-status bg-opacity-success color-success"
                            >Lihat Pembahasan</span
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
  // props: ["eid"],
  props: {
    user: Object,
    expanded: Boolean,
    eid: String,
  },
  data() {
    return {
      pembahasans: [],
    };
  },
  mounted() {
    axios
      .get(
        this.http +
          "/api/tryoutskd/getsoaldanpembahasan/" +
          this.user.email +
          "/" +
          this.eid
      )
      .then((response) => {
        this.pembahasans = response.data;
        // this.pembahasans = response.data[0];
        // this.opsi = response.data[1];
        console.log(response.data);
      });
  },
};
</script>

<style></style>
