import { createRouter, createWebHistory } from "vue-router";
 
import dashboard from '../pages/master/dashboard'
import Input from '../pages/input/input'
import PersonalInput from '../pages/input/personalInput'
import Output from '../pages/output/output'

import home from '../pages/home'
import profile from '../pages/profile'
import Collection from '../pages/collection'
import Result from '../pages/result'

  const routes = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      component: dashboard,
      children: [
         {
          name: 'home',
          path: '/home',
          component:home
        },
        {
          name: 'profile',
          path: '/profile',
          component:profile
        }
      ]
      },
      {
        name: 'input',
        path: '/',
        component: Input
      },
      {
        name: 'collection',
        path: '/collection',
        component: Collection
      },
      {
        name: 'result',
        path: '/result',
        component: Result
      },
      {
        name: 'personalInput',
        path: '/personalInput',
        component: PersonalInput
      },
      {
        name: 'output',
        path: '/output',
        component: Output
      },
       
  ];
const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}
  