// import { createRouter, createWebHistory } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("../views/DashboardView.vue"),
  },
  {
    path: "/profil",
    name: "profil",
    component: () => import("../views/ProfilView.vue"),
  },
  {
    path: "/profil/edit",
    name: "profiledit",
    component: () => import("../views/ProfilEdit.vue"),
  },
  {
    path: "/promotryoutskd",
    name: "promotryoutskd",
    component: () => import("../views/TryoutSKDPromo.vue"),
  },
  {
    path: "/tryoutskd",
    name: "tryoutskd",
    component: () => import("../views/TryoutSKDView.vue"),
  },
  {
    path: "/tryoutskd/detail/:eid",
    name: "tryoutskddetail",
    component: () => import("../views/TryoutSKDDetail.vue"),
    props: true,
  },
  {
    path: "/tryoutskd/tambah",
    name: "tryoutskdtambah",
    component: () => import("../views/TryoutSKDTambah.vue"),
  },
  {
    path: "/tryoutskd/lihat/:eid",
    name: "tryoutskdlihat",
    component: () => import("../views/TryoutSKDLihat.vue"),
    props: true,
  },
  {
    path: "/tryoutskd/pembahasan/:eid",
    name: "tryoutskdpembahasan",
    component: () => import("../views/TryoutSKDPembahasan.vue"),
    props: true,
  },
  {
    path: "/tryoutskd/edit/:eid",
    name: "tryoutskdedit",
    component: () => import("../views/TryoutSKDEdit.vue"),
    props: true,
  },
  {
    path: "/pengerjaan/tryoutskd/:eid",
    name: "pengerjaantryoutskd",
    component: () => import("../views/Pengerjaan/SKD.vue"),
    props: true,
  },
  {
    path: "/dompet",
    name: "dompet",
    component: () => import("../views/DompetView.vue"),
  },
  {
    path: "/dompet/:kointidakcukup",
    name: "dompetkointidakcukup",
    component: () => import("../views/DompetView.vue"),
    props: true,
  },
  {
    path: "/dompet/pembayaran/:snapToken",
    name: "dompet/pembayaran",
    component: () => import("../views/DompetPembayaran.vue"),
    props: true,
  },
  {
    path: "/materiskd",
    name: "materiskd",
    component: () => import("../views/TryoutSKDView.vue"),
  },
  {
    path: "/akun",
    name: "akun",
    component: () => import("../views/AkunView.vue"),
  },
  {
    path: "/testimoni",
    name: "testimoni",
    component: () => import("../views/AkunView.vue"),
  },
  {
    path: "/inbox",
    name: "inbox",
    component: () => import("../views/InboxView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  // mode: "history",
  // history: createWebHistory("/"),
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
