import Vue from 'vue'
import Router from 'vue-router'
import PATH from './path.js';

//INITIAL PAGES
import Loading from '../components/pages/loading/loading.vue';
import Register from '../components/pages/register/register.vue';
import OTP_STEP_1 from '../components/pages/otp-step-1/otp-step-1.vue';
import OTP_STEP_2 from '../components/pages/otp-step-2/otp-step-2.vue';

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
    path: PATH.OTP_STEP_1,
    component: OTP_STEP_1
  }, {
    path: PATH.OTP_STEP_2,
    component: OTP_STEP_2
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
