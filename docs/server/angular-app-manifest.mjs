
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/country-name",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/country-name"
  },
  {
    "renderMode": 2,
    "route": "/countries-region"
  },
  {
    "renderMode": 2,
    "route": "/countries-lang"
  },
  {
    "renderMode": 2,
    "route": "/countries-currency"
  },
  {
    "renderMode": 2,
    "route": "/countries-capital"
  },
  {
    "renderMode": 2,
    "route": "/countries-subregion"
  },
  {
    "renderMode": 2,
    "route": "/country-code"
  },
  {
    "renderMode": 2,
    "route": "/countries-top-pop"
  },
  {
    "renderMode": 2,
    "redirectTo": "/country-name",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 768, hash: '9b851b5a891577b25cc4c3cc43e86a341a17e73bab1c6c0ad4c8312c1d36a038', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 952, hash: 'a9a4f8247cc3fc70fd663ee388d0f918cd2b2e2e2b720962dc70d633203d17a0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'countries-region/index.html': {size: 9180, hash: 'e09defaab30a5a828d096b3487a96ed9c7cca26454938c48f4ffff985a059e17', text: () => import('./assets-chunks/countries-region_index_html.mjs').then(m => m.default)},
    'country-name/index.html': {size: 8784, hash: 'd8e2e0a70027e863acad18addb2ffb92ed059b626fa6022ca01b4b1e3cbcfb6c', text: () => import('./assets-chunks/country-name_index_html.mjs').then(m => m.default)},
    'countries-capital/index.html': {size: 8791, hash: 'ff89cf6d30a98256009f65b4796def826f063d049654ac2eca2d88e113bf1102', text: () => import('./assets-chunks/countries-capital_index_html.mjs').then(m => m.default)},
    'countries-subregion/index.html': {size: 9714, hash: '60537e7333e5788949d4313752d7829619d1e1bbb8b962265873828e3ee8a426', text: () => import('./assets-chunks/countries-subregion_index_html.mjs').then(m => m.default)},
    'countries-top-pop/index.html': {size: 8749, hash: '9cef80ee2096d412c95c10ef6a89257cacfc01b5e30e5d23db158d7bb01ea0e3', text: () => import('./assets-chunks/countries-top-pop_index_html.mjs').then(m => m.default)},
    'countries-lang/index.html': {size: 8833, hash: '1c4adf56b1b8fe3fc12dd40648c99911f27b9b75f9aafd5f2f4e208e8d99d0cf', text: () => import('./assets-chunks/countries-lang_index_html.mjs').then(m => m.default)},
    'countries-currency/index.html': {size: 8796, hash: 'f6a085cda2321d75308b4ebe2a1dea50caaadfea0260a92f85aa628a3ebb1315', text: () => import('./assets-chunks/countries-currency_index_html.mjs').then(m => m.default)},
    'country-code/index.html': {size: 8900, hash: '986d56eefac63690e20250a084b98146109887fcc69ed618c2baff371503b409', text: () => import('./assets-chunks/country-code_index_html.mjs').then(m => m.default)},
    'styles-VXVVMQX7.css': {size: 515, hash: 'J2TPosdkTRQ', text: () => import('./assets-chunks/styles-VXVVMQX7_css.mjs').then(m => m.default)}
  },
};
