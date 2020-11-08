function page(path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then((m) => m.default || m);
}

export default [
  { path: '/', name: 'welcome', component: page('welcome.vue') },

  { path: '/login', name: 'login', component: page('auth/login.vue') },
  { path: '/register', name: 'register', component: page('auth/register.vue') },
  { path: '/password/reset', name: 'password.request', component: page('auth/password/email.vue') },
  {
    path: '/password/reset/:token',
    name: 'password.reset',
    component: page('auth/password/reset.vue'),
  },

  { path: '/teams', name: 'teams', component: page('team/Teams.vue') },

  { path: '/players', name: 'players', component: page('player/Players.vue') },

  { path: '*', component: page('errors/404.vue') },
];
