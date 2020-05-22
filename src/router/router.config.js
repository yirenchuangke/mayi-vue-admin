import Home from "../layout/index";
const routes = [
  {
    path: "/",
    hidden: true,
    name: "home",
    component: Home,
    meta: { title: "首页" },
  },
  {
    path: "/stair-1",
    name: "stair-1",
    component: Home,
    redirect: "/stair-1/option-1",
    meta: { title: "导航一" },
    children: [
      {
        path: "option-1",
        name: "option1-1",
        component: () => import("../pages/Stair1/option1/option1"),
        meta: { title: "选项一" },
      },
    ],
  },
  {
    path: "/stair-2",
    name: "stair-2",
    component: Home,
    redirect: "/stair-2/option-1",
    meta: { title: "导航二" },
    children: [
      {
        path: "option-1",
        name: "option2-1",
        component: () => import("../pages/Stair2/option1/option1"),
        meta: { title: "导航2-1" },
        redirect: "/stair-2/option-1/option-1-1",
        children: [
          {
            path: "option-1-1",
            name: "option1-1-1",
            component: () => import("../pages/Stair1/option1/option1"),
            meta: { title: "选项2-1" },
          },
        ],
      },
      {
        path: "option-2",
        name: "option2-2",
        component: () => import("../pages/Stair2/option2/option2"),
        meta: { title: "选项二" },
      },
    ],
  },
  {
    hidden: true,
    path: "/login",
    name: "login",
    component: () => import("../pages/Login/Login"),
    meta: { title: "登录" },
  },
];

export default routes;
