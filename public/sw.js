if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>n(e,a),o={module:{uri:a},exports:c,require:r};s[a]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-5afaf374"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.html",revision:"94df4892a6afef15e34bf6d08d3c649e"},{url:"/_next/static/_633W_kNw5LECIP_9TSOA/_buildManifest.js",revision:"_633W_kNw5LECIP_9TSOA"},{url:"/_next/static/_633W_kNw5LECIP_9TSOA/_middlewareManifest.js",revision:"_633W_kNw5LECIP_9TSOA"},{url:"/_next/static/_633W_kNw5LECIP_9TSOA/_ssgManifest.js",revision:"_633W_kNw5LECIP_9TSOA"},{url:"/_next/static/chunks/651.243d23442247d286.js",revision:"_633W_kNw5LECIP_9TSOA"},{url:"/_next/static/chunks/959-5c2c07395636d04a.js",revision:"_633W_kNw5LECIP_9TSOA"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"_633W_kNw5LECIP_9TSOA"},{url:"/_next/static/chunks/main-a0b62371f6e4fbc1.js",revision:"_633W_kNw5LECIP_9TSOA"},{url:"/_next/static/chunks/pages/_app-4701bc2f40d39b20.js",revision:"_633W_kNw5LECIP_9TSOA"},{url:"/_next/static/chunks/pages/_error-2f883067a14f4c4a.js",revision:"_633W_kNw5LECIP_9TSOA"},{url:"/_next/static/chunks/pages/blog/%5B...slug%5D-966aa2fb12d64902.js",revision:"_633W_kNw5LECIP_9TSOA"},{url:"/_next/static/chunks/pages/blogs-8b561d7d8d059c17.js",revision:"_633W_kNw5LECIP_9TSOA"},{url:"/_next/static/chunks/pages/forgotPassword-f52355b9b68f82f2.js",revision:"_633W_kNw5LECIP_9TSOA"},{url:"/_next/static/chunks/pages/index-aa38f3bd60c2d2ed.js",revision:"_633W_kNw5LECIP_9TSOA"},{url:"/_next/static/chunks/pages/join/%5Bid%5D-2d7bab472d747275.js",revision:"_633W_kNw5LECIP_9TSOA"},{url:"/_next/static/chunks/pages/lfg-c8194895cc65759b.js",revision:"_633W_kNw5LECIP_9TSOA"},{url:"/_next/static/chunks/pages/login-f1495d76b296ca97.js",revision:"_633W_kNw5LECIP_9TSOA"},{url:"/_next/static/chunks/pages/register-96fe36c7361f7d2d.js",revision:"_633W_kNw5LECIP_9TSOA"},{url:"/_next/static/chunks/pages/session-c595297a629ad9f1.js",revision:"_633W_kNw5LECIP_9TSOA"},{url:"/_next/static/chunks/pages/session/%5Bid%5D-ff58e3d407d2ae5f.js",revision:"_633W_kNw5LECIP_9TSOA"},{url:"/_next/static/chunks/pages/updateProfile-094ed71948109456.js",revision:"_633W_kNw5LECIP_9TSOA"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"_633W_kNw5LECIP_9TSOA"},{url:"/_next/static/chunks/webpack-6dd162e47e678aa2.js",revision:"_633W_kNw5LECIP_9TSOA"},{url:"/_next/static/css/7f49efae3cc1f041.css",revision:"_633W_kNw5LECIP_9TSOA"},{url:"/_next/static/css/bdb892659a78297a.css",revision:"_633W_kNw5LECIP_9TSOA"},{url:"/android-chrome-192x192.png",revision:"568bcb361407e371e37341869fbe9626"},{url:"/android-chrome-512x512.png",revision:"e1e19180af248394012be0ab9552e0e5"},{url:"/apple-touch-icon.png",revision:"97b9ad44c962680cf3dfea307b51be68"},{url:"/favicon-16x16.png",revision:"01728c20fb8fe0a090d362ee94662a5f"},{url:"/favicon-32x32.png",revision:"6f7ae74ee9ab7de235fff2195a4949a4"},{url:"/favicon.ico",revision:"fb27480abfa46e6c3a928ea8171ebf1a"},{url:"/manifest.json",revision:"42563fd4f582c687254911e1e5f55e2a"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
