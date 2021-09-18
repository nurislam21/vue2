
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path:'/auth',
    component:() => import('../pages/Auth'),
    children:[{
      path: '',component:() => import('../components/Login')},
      {path: 'registration', component: () => import('../components/Reg')}
      ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes
