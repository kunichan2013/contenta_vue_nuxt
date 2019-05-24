// change this to your own server.
//const serverBaseUrl = 'https://back-end.contentacms.io';
//const serverFilesUrl = 'https://back-end.contentacms.io';
const serverBaseUrl = 'https://kuni2019.ngrok.io';
const serverFilesUrl = 'http://kuni2019.ngrok.io';
//    thumnail http://kuni2019.ngrok.io/sites/default/files/styles/thumbnail/public/thai-green-curry-umami.jpg
//    file  http://kuni2019.ngrok.io/sites/default/files/thai-green-curry-umami.jpg

export default {
  plugins: ['~plugins/vue-lazyload'],
  env: {
    serverBaseUrl,
    serverApiUrl: serverBaseUrl + '/api',
    serverFilesUrl,
  },
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width, user-scalable=no' },
    ],
    link: [
      { rel: 'stylesheet', type: 'text/css', href: '/css/bulma-4.3.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/app.css' },
    ],
  },
  // page loading progress bar color
  loading: { color: '#3B8070' },
};
