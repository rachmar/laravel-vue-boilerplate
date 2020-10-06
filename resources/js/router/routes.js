import Login from "../views/auth/Login.vue";
import Profile from "../views/dashboard/Profile.vue";

import NotFound from "../views/error/NotFound.vue";

const routes = [ 
    { path: "/",
      name: "index",
      component: Login,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },

    // NOT FOUND
    {
      path: "*",
      name: "notfound",
      component: NotFound,
    }
  ];

  export default routes;