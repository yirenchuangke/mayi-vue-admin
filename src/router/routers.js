import Layout from "../layouts/index";

const routes = [
  {
    path: "/",
    name: "首页",
    hidden: true,
    component: Layout,
    meta: { title: "首页" },
    redirect: "/index",
    children: [
      {
        path: "index",
        name: "index",
        component: () => import("../pages/index/index"),
        meta: { title: "首页" },
      },
    ],
  },
  {
    path: "/index",
    name: "index2",
    component: Layout,
    meta: { title: "首页" },
  },
  {
    path: "/lesoin1",
    name: "lesoin1",
    redirect: "/lesoin1/demo01",
    component: Layout,
    meta: { title: "选项一" },
    children: [
      {
        path: "demo01",
        name: "demo01",
        component: () => import("../pages/demo01"),
        meta: { title: "菜单一" },
      },
      {
        path: "demo02",
        name: "demo02",
        component: () => import("../pages/demo02"),
        meta: { title: "地图" },
      },
      {
        path: "demo03",
        name: "demo03",
        component: () => import("../pages/demo03"),
        meta: { title: "购物车" },
      }
    ],
  },
];

export default routes;
