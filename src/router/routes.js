const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'indx', component: () => import('pages/IndexPage.vue') },
      { path: 'toprated', component: () => import('pages/TopRatedPage.vue') },
      { path: 'upcoming', component: () => import('pages/UpcomingPage.vue') },
      { path: '/', component: () => import('pages/SearchPage.vue') },
      { path: 'search', component: () => import('pages/SearchPage.vue') },
      
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
