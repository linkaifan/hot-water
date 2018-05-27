import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/components/Index";
import Login from "@/components/login";
import Register from "@/components/register";
import Consult from "@/components/consult";
import Apply from "@/components/apply";
import Skill from "@/components/skill";
import Search from "@/components/search";
import Detail from "@/components/detail";
import About from "@/components/about";
import Me from "@/components/me";
import Jobs from "@/components/jobs";

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
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: Jobs
    },

  ]
})
