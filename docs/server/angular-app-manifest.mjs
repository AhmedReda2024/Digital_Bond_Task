
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Digital_Bond_Task/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Digital_Bond_Task/home",
    "route": "/Digital_Bond_Task"
  },
  {
    "renderMode": 2,
    "route": "/Digital_Bond_Task/home"
  },
  {
    "renderMode": 2,
    "route": "/Digital_Bond_Task/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 20039, hash: 'f122d3717cee7ed8ad6a626c3d8b5a9fb365739316c3a8d7127eb12e1c389e9a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15033, hash: '9ca3011596f3096648ed5ad15b60df986ab40370f19419c9ad5effaf7eba9594', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 95001, hash: '6e47b5106a11e61c46ddc159a78134a2276efab4ba99b548535d35e74698ef94', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-XNUH6NI5.css': {size: 329512, hash: 'VZj1SdcmUbE', text: () => import('./assets-chunks/styles-XNUH6NI5_css.mjs').then(m => m.default)}
  },
};
