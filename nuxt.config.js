import 'dotenv/config'

export default {
  /*
  ** Headers of the page
  */
  target: 'static',
  generate: {
    fallback: true
  },
  head: {
    title: 'Nuxt.js + Auth0',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://nuxtjs.org/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'normalize.css',
    '@/assets/main.css'
  ],
  /*
  ** Modules
  */
  modules: [
    // axios is required by @nuxtjs/auth
    '@nuxtjs/axios',
    // https://auth.nuxtjs.org
    '@nuxtjs/auth',
    '@nuxtjs/pwa'
  ],
  auth: {
    redirect: {
      login: '/', // redirect user when not connected
      callback: '/auth/signed-in'
    },
    strategies: {
      local: false,
      auth0: {
        domain: "dev-vbr3--bw.us.auth0.com",
        client_id: "t9OFnmfLRUVqSXYPlXMuzeM77bOXM3rl"
      }
    }
  },
  build: {
    // For stormkit.io
    publicPath: process.env.PUBLIC_PATH,
  }
}
