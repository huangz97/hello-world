import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes=[
    {
        path: "/404",
        name: "err_404",
        component: resolve => require(["@/views/404.vue"], resolve)
      },
]

const router = new VueRouter({
    routes,
    base:process.env.VUE_APP_PUBLIC_PATH,
    mode:'history'
})

export default router;