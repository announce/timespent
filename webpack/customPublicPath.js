/* global __webpack_public_path__ __HOST__ __PORT__ */
/* eslint no-global-assign: 0 camelcase: 0 */

const isHttps = () => {
  return (location.protocol === 'https:' || location.search.indexOf('protocol=https') !== -1)
}

// In development mode,
// the iframe of injected page cannot get correct path,
// it needs to inherits the protocol from parent page.
switch (process.env.NODE_ENV) {
  case 'production':
    __webpack_public_path__ = chrome.extension.getURL('/js/');
    break
  default:
    const path = `//${__HOST__}:${__PORT__}/js/`;
    __webpack_public_path__ = isHttps() ? `https:${path}` : `http:${path}`;
    break
}
