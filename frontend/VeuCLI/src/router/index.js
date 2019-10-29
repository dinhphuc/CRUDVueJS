import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/employee/index.vue'
import Create from '../components/employee/create.vue'
import Edit from '../components/employee/edit.vue'

Vue.use(Router)
 
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {title: 'CRUD - VueJS'}
    },
    {
      path: '/create',
      name: 'create',
      component: Create,
      meta: {title: 'Create'}
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit,
      meta: {title: 'Edit'}
    }
  ]
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router