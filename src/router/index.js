import Vue from 'vue'
import Router from 'vue-router'
import PATH from './path.js';

//INITIAL PAGES
import Loading from '../components/pages/loading/loading.vue';
import Register from '../components/pages/register/register.vue';
import Otp from '../components/pages/otp/otp.vue';

//HOME
import Home from '../components/pages/home/home.vue';
import FamilyTree from '../components/pages/home/views/family-tree/family-tree.vue';

import AllMembers from '../components/pages/all-members/all-members.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    component: Loading
  }, {
    path: PATH.REGISTER,
    component: Register
  }, {
    path: PATH.OTP,
    component: Otp
  }, {
    path: PATH.HOME,
    component: Home,
    children: [{
      path: PATH.ALL_MEMBERS,
      component: AllMembers
    }, {
      path: PATH.FAMILY_TREE,
      component: FamilyTree
    }]
  }]
})
