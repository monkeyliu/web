import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/test/Users'
import AddUser from '@/components/test/Adduser'
import UpdateUser from '@/components/test/UpdateUser'
import DeleteUser from '@/components/test/DeleteUser'
import GetuserById from '@/components/test/GetuserById'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/users',
      name: 'users',
      component: Users,
      alias: '/'
    },{
      path: '/adduser',
      name: 'adduser',
      component: AddUser
    },{
      path: '/updateuser',
      name: 'updateuser',
      component: UpdateUser,
    },{
      path: '/deleteuser',
      name: 'deleteuser',
      component: DeleteUser,
    },
    {
      path: '/getuserById',
      name: 'getusersById',
      component: GetuserById,
    }
    
    
  ]
})
