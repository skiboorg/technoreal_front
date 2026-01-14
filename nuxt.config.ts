import Aura from '@primeuix/themes/lara';

export default defineNuxtConfig({
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  app: {
    head: {
      meta: [
        { name: 'yandex-verification', content: '437436ef61223918' },
      ],
        script: [
            {
                innerHTML: `(function(w, d, s, o){
                 var j = d.createElement(s); j.async = true; j.src = '//script.marquiz.ru/v2.js';j.onload = function() {
                  if (document.readyState !== 'loading') Marquiz.init(o);
                  else document.addEventListener("DOMContentLoaded", function() {
                   Marquiz.init(o);
                  });
                 };
                 d.head.insertBefore(j, d.head.firstElementChild);
                })(window, document, 'script', {
                 host: '//quiz.marquiz.ru',
                 region: 'ru',
                 id: '694d205456ae6700197ff39e',
                 autoOpen: 15,
                 autoOpenFreq: 'always',
                 openOnExit: false,
                 disableOnMobile: false
                });`,
                type: 'text/javascript'
            }
        ],
        __dangerouslyDisableSanitizersByTagID: {
            marquiz: ['innerHTML']
        }
    },
  },

  site: {
    url: 'https://texnoreal.com', // ← твой домен без слэша на конце
    name: 'Texnoreal',
  },

  sitemap: {
    enabled: true,

    autoLastmod: true,
    defaults: {
      changefreq: 'weekly',
      priority: 0.8,
    },
    exclude: ['/admin/**'], // если есть разделы, которые не должны попадать в sitemap
  },

  robots: {
    enabled: true,
    rules: [
      {
        UserAgent: '*',
        Allow: '/',
        Disallow: ['/admin', '/auth'],
      },
    ],
    sitemap: 'https://texnoreal.com/sitemap.xml',
  },

  modules: [
    '@pinia/nuxt',
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
    'nuxt3-notifications',
    'vue3-carousel-nuxt',
    '@nuxtjs/robots',
    // '@nuxtjs/sitemap',
    [
      'yandex-metrika-module-nuxt3',
      {
        id: '104558794',
        webvisor: true,
        clickmap: true,
        // useCDN: false,
        trackLinks: true,
        accurateTrackBounce: true,
      }
    ]
  ],

  css: [
    '~/assets/styles/tailwind.css',
    '~/assets/styles/sass/style.sass',
    'primeicons/primeicons.css',
    '~/assets/styles/vars.css',
  ],

  ssr: true,

  primevue: {

    autoImport: true,
    components: {
      exclude: ['form', 'carousel','chart']
    },
    options: {

      theme: {
        preset: Aura
      }
    },
    importTheme: { from: '~/themes/theme.js' },
  },

  runtimeConfig: {
    public:{
      //apiUrl: 'http://127.0.0.1:8000',
      apiUrl: 'https://texnoreal.com',
    }
  },
  compatibilityDate: '2025-04-07',
})