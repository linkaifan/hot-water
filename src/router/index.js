import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/components/Index";
import Login from "@/components/login";
import Register from "@/components/register";
import Consult from "@/components/consult";
import Apply from "@/components/apply";
import Skill from "@/components/skill";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/consult',
      name: 'Consult',
      component: Consult
    },
    {
      path: '/apply',
      name: 'Apply',
      component: Apply
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill
    },

  ]
})
